import { inject, Inject, Injectable, Service, signal } from '@angular/core';
import { ChatSession, FunctionDeclarationsTool, getAI, getGenerativeModel, Schema } from 'firebase/ai';
import { FirebaseApp } from 'firebase/app';
import { Ticket } from './ticket';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class Parking {
  private readonly chat: ChatSession;
  private readonly notification = inject(NzNotificationService);
  readonly tickets = signal<Ticket[]>([
    {
      plateNo: 'ABC564',
      arrival: new Date('2025-12-22T06:00:00-07:00'),
      location: '23.7275, 37.9838'
    }
  ]);

  constructor(
    @Inject('FIREBASE_APP') firebaseApp: FirebaseApp
  ) {
    const toolset: FunctionDeclarationsTool = {
      functionDeclarations: [{
        name: 'addTicket',
        description: 'Add one ticket',
        parameters: Schema.object({
          properties: {
            plateNo: Schema.string(),
            arrival: Schema.string(),
            location: Schema.string()
          }
        })
      }]
    };

    const instructions = `
      Welcome to citypass.
      You are a superstar agent for this car parking validator.
      You will assist users by submitting parking tickets.
      You can convert date phrases to ISO strings and
      act as a geocode service to convert a location or address
      to coordinates long/lat.
    `;

    const ai = getAI(firebaseApp);

    const model = getGenerativeModel(ai, {
      model: 'gemini-3.6-flash',
      systemInstruction: instructions,
      tools: [toolset]
    });

    this.chat = model.startChat();
  }

  createTicket(plate: string, arrival: Date, loc: string) {
    const ticket: Ticket = {
      'plateNo': plate,
      'arrival': arrival,
      'location': loc
    };

    console.table([ticket]);

    this.tickets.update(tickets => [
      ...tickets,
      ticket
    ]);
    this.createNotification();
  }

  createNotification(): void {
    this.notification.blank(
      'Ticket Created',
      'Good job'
    )
  }

  async ask(prompt: string) {
    let result = await this.chat.sendMessage(prompt);
    const calls = result.response.functionCalls();

    if (calls && calls[0].name === 'addTicket') {
      const args = calls[0].args as Record<string, string>;
      this.createTicket(
        args['plateNo'],
        new Date(args['arrival']),
        args['location']
      );
    }
  }
}
