import { Injectable, signal } from '@angular/core';

// Copy the Product interface here from product-list.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Define your sample products here, encapsulated within the service
  private readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Angular T-Shirt',
      price: 25,
      description: 'Comfortable cotton t-shirt with Angular logo.',
    },
    {
      id: 2,
      name: 'NgRx Mug',
      price: 12,
      description: 'Coffee mug for reactive state management fans.',
    },
    {
      id: 3,
      name: 'TypeScript Stickers',
      price: 5,
      description: 'Stickers to show off your TypeScript love.',
    },
  ]);

  constructor() {}

  // Method to provide the products signal
  getProducts() {
    return this.products;
  }
}
