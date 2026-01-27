import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ProductItem {
  id: number;
  title: string;
  price: number;
}

export interface ProductResponse {
  products: ProductItem[];
  total: number;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);

  getProducts() {
    // 3. Tell http what is coming back using <Type>
    return this.http.get<ProductResponse>('https://dummyjson.com/products');
  }
}