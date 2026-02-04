import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail'; // <-- Import ProductDetailComponent

export const routes: Routes = [
  { path: 'products/:id', component: ProductDetailComponent }, // <-- Add this new route
];
