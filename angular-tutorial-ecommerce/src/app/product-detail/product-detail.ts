import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../product'; // <-- Import ProductService and Product interface

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetailComponent implements OnInit {
  // <-- Implement OnInit

  product: Product | undefined; // Property to hold the found product

  constructor(
    private route: ActivatedRoute, // Inject ActivatedRoute
    private productService: ProductService, // Inject ProductService
  ) {}

  ngOnInit() {
    // First, get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    // Find the product that corresponds with the id provided in route.
    const products = this.productService.getProducts()(); // Get the products array from the service
    this.product = products.find((p) => p.id === productIdFromRoute);
  }
}
