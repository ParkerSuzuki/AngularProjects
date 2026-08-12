import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  product = signal<Product>(
    inject(ActivatedRoute).snapshot.data['product']
  )
}
