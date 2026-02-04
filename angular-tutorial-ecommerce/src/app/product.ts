import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

// Product interface remains the same
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  // Private signals for products and cart
  #products = signal<Product[]>([]);
  #cart = signal<Product[]>([]);

  // Public readonly signals for components to bind to
  public readonly products = this.#products.asReadonly();
  public readonly cart = this.#cart.asReadonly();
  
  // Computed signal for cart total
  public readonly cartTotal = computed(() => {
    return this.#cart().reduce((total, product) => total + product.price, 0);
  });

  constructor() {
    this.fetchProducts();
  }

  // Method to add a product to the cart
  addToCart(product: Product) {
    this.#cart.update(cart => [...cart, product]);
    console.log(`${product.name} added to cart.`);
  }

  // Method to fetch products from the mock JSON API
  private fetchProducts() {
    this.http.get<Product[]>('/assets/products.json').pipe(
      tap(products => this.#products.set(products))
    ).subscribe();
  }
}
