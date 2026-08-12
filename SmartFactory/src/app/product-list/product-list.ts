import { SlicePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Products } from '../products';

@Component({
  selector: 'app-product-list',
  imports: [SlicePipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  products = toSignal(inject(Products).getAll());
}
