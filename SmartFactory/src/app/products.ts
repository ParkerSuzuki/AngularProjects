import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Product } from './product';

@Service()
export class Products {
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<Product[]>(
      'https://fakestoreapi.com/products'
    )
  }
}
