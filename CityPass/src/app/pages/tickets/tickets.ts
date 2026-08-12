import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { Parking } from '../../parking';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-tickets',
  imports: [NzFormModule, NzInputModule, NzDatePickerModule, FormsModule, NzButtonModule, NzModalModule, ɵEmptyOutletComponent],
  templateUrl: './tickets.html',
  styleUrl: './tickets.scss',
})
export class Tickets {
  readonly plateNo = model('');
  readonly arrival = model(new Date());
  readonly location = model('');
  readonly isVisible = model(false);
  readonly prompt = model('');

  private parkingService = inject(Parking);

  add() {
    this.parkingService.createTicket(
      this.plateNo(), this.arrival(), this.location()
    );
  }

  async ok() {
    await this.parkingService.ask(this.prompt());
  }
}
