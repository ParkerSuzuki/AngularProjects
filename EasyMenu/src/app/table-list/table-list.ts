import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { collection, DocumentData, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { FIRESTORE } from '../app.config';
import { MatDialog } from '@angular/material/dialog';
import { Order } from '../order/order';
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-table-list',
  imports: [MatGridListModule, MatCardModule, MatDivider],
  templateUrl: './table-list.html',
  styleUrl: './table-list.scss',
})
export class TableList {
  private dialog = inject(MatDialog);
  private firestore = inject(FIRESTORE);
  private tableCol = collection(this.firestore, 'tables');
  readonly tables = toSignal(
    new Observable<DocumentData[]>(subscriber =>
      onSnapshot(this.tableCol, snapshot =>
        subscriber.next(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
      )
    )
  );

  total(items: any[]): number {
    return items?.reduce((sum, item) => sum + item.qty * item.price, 0) ?? 0;
  }

  select(table: any) {
    this.dialog.open(Order, {
      width: '500px',
      data: table
    }).afterClosed().subscribe(
      async items => {
        if (items) {
          const tableDoc = doc(this.tableCol, table.id);
          await updateDoc(tableDoc, { items });
        }
    });
  }
}
