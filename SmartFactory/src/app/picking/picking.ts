import { afterNextRender, Component, inject, signal, viewChild } from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { Products } from '../products';
import { Product } from '../product';

@Component({
  selector: 'app-picking',
  imports: [NgxScannerQrcodeComponent],
  templateUrl: './picking.html',
  styleUrl: './picking.scss',
})
export class Picking {
  private productsService = inject(Products);

  readonly scanner = viewChild.required(
    NgxScannerQrcodeComponent
  );
  items = signal<Product[]>([]);

  constructor() {
    afterNextRender(() => {
      this.scanner().start();

      this.scanner().data.subscribe(data => {
        if (data.length) {
          this.getProduct(data[0].value);
        }
      })
    });
  }

  private getProduct(code: string) {
    const id = code.substring(code.lastIndexOf('/') + 1);
    this.productsService.getSingle(Number(id)).subscribe(p => {
      if (!this.items().some(i => i.id === p.id)) {
        this.items.update(i => [...i, p]);
        this.scanner().data.next([]);
      }
    });
  }

  total(): number {
    return this.items()?.reduce((sum, item) => sum + item.price, 0) ?? 0;
  }
}
