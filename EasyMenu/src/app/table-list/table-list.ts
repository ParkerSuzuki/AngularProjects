import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { collection, DocumentData, onSnapshot } from 'firebase/firestore';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { FIRESTORE } from '../app.config';
import { MatDialog } from '@angular/material/dialog';
import { Order } from '../order/order';

@Component({
  selector: 'app-table-list',
  imports: [MatGridListModule, MatCardModule],
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
        subscriber.next(snapshot.docs.map(doc => doc.data()))
      )
    )
  );

  select(no: number) {
    this.dialog.open(Order, {
      width: '500px',
      data: no
    });
  }
}
