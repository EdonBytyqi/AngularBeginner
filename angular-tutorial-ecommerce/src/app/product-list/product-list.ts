import { Component, input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define the Product interface above the @Component decorator
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  // Define a required input signal for a list of products
  readonly products = input.required<Product[]>();

  // Define an Output property that emits a Product when a product is added
  @Output() productAdded = new EventEmitter<Product>();

  addToCart(product: Product) {
    this.productAdded.emit(product);
  }
}
