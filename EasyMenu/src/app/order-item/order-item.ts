import { Component, input, model } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-order-item',
  imports: [MatIconButton, MatIcon],
  templateUrl: './order-item.html',
  styleUrl: './order-item.scss',
})
export class OrderItem {
  readonly name = input('');
  readonly qty = model(0);
  readonly price = input<number | undefined>();

  add() {
    this.qty.update(qty => qty + 1);
  }

  subtract() {
    this.qty.update(qty => qty - 1);
  }
}
