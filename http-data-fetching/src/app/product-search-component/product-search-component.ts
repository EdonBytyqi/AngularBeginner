import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Product, ProductResponse } from '../services/product';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, JsonPipe], // We need these for the template
  templateUrl: './product-search-component.html',
})
export class ProductSearchComponent {
  private productService = inject(Product);
  products$!: Observable<ProductResponse>;
  queryControl = new FormControl('');

  search() {    
    const val = this.queryControl.value;
    if (val) {
      this.products$ = this.productService.searchProducts(val);
    }
  }
}
