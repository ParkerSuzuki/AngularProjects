import { ResolveFn } from '@angular/router';
import { Product } from './product';
import { Products } from './products';
import { inject } from '@angular/core';

export const productResolver: ResolveFn<Product> = route => {
  const id = Number(route.paramMap.get('id'));
  return inject(Products).getSingle(id);
};
