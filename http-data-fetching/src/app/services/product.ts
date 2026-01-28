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
  searchProducts(query: string) {
    return this.http.get<ProductResponse>(`https://dummyjson.com/products/search?q=${query}`);
  }
  getProduct(id: string | number) {
    return this.http.get<ProductItem>(`https://dummyjson.com/products/${id}`);
  }
}
