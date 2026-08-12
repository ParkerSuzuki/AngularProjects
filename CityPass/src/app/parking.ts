import { inject, Inject, Injectable, Service } from '@angular/core';
import { ChatSession, FunctionDeclarationsTool, getAI, getGenerativeModel, Schema } from 'firebase/ai';
import { FirebaseApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class Parking {
  private readonly chat: ChatSession;



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
      model: 'gemini-2.5-flash',
      systemInstruction: instructions,
      tools: [toolset]
    });

    this.chat = model.startChat();
  }

  createTicket(plate: string, arrival: Date, loc: string) {
    console.table([{
      'plateNo': plate,
      'arrival': arrival,
      'location': location
    }]);
  }
}
