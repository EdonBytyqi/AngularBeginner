import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponse } from '../product-list-component/product-response';

@Injectable({
  providedIn: 'root',
})
export class Product {
  //Inject the client
  private http = inject(HttpClient);
  getProducts() {
    return this.http.get<ProductResponse>('https://dummyjson.com/products');
  }
}
