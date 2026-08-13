import { Component, inject, model, viewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { Parking } from '../../parking';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-tickets',
  imports: [NzFormModule, NzInputModule, NzDatePickerModule, FormsModule, NzButtonModule, NzModalModule],
  templateUrl: './tickets.html',
  styleUrl: './tickets.scss',
})
export class Tickets {
  readonly ticketForm = viewChild.required(NgForm);
  readonly chatForm = viewChild<NgModel>('chatForm');
  readonly plateNo = model('');
  readonly arrival = model(new Date());
  readonly location = model('');
  readonly isVisible = model(false);
  readonly isLoading = model(false);
  readonly prompt = model('');

  private parkingService = inject(Parking);

  add() {
    this.parkingService.createTicket(
      this.plateNo(), this.arrival(), this.location()
    );
    this.ticketForm().reset();
  }

  async ok() {
    this.isLoading.set(true);
    await this.parkingService.ask(this.prompt());
    this.chatForm()?.reset();
    this.isLoading.set(false);
  }
}
