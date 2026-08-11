import { Component, inject, viewChildren } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { menu } from '../menu';
import { OrderItem } from '../order-item/order-item';

@Component({
  selector: 'app-order',
  imports: [
    MatButtonModule,
    MatListModule,
    MatButton,
    MatDivider,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    OrderItem
],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {
  private readonly orderItems = viewChildren(OrderItem);
  private dialogRef = inject(MatDialogRef);
  data = inject(MAT_DIALOG_DATA);
  menu = menu;

  ok() {
    const items = this.orderItems()
      .filter(item => item.qty())
      .map(i => {
        return {
          name: i.name(),
          qty: i.qty()
        }
      });
      this.dialogRef.close(items);
  }
}
