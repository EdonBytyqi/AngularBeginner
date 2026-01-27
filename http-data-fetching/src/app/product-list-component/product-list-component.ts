import { Component, inject } from '@angular/core';
import { Product } from '../services/product';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-list-component',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  private productService = inject(Product);
  products$ = this.productService.getProducts();
}
