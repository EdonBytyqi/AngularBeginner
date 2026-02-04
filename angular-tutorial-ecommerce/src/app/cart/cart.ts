import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product'; // Import the ProductService

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for @if and other directives
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  // Inject the ProductService to get access to cart data
  private productService = inject(ProductService);

  // Expose the cart signal from the service to the template
  cart = this.productService.cart;
  // Expose the cartTotal computed signal from the service to the template
  cartTotal = this.productService.cartTotal;
}