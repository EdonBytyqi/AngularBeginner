import { Routes } from '@angular/router';

export const routes: Routes = [
  // 1. Standard Route
  {
    path: 'search',
    loadComponent: () =>
      import('./product-search-component/product-search-component').then(
        (m) => m.ProductSearchComponent,
      ),
  },

  // 2. Default Route (Redirect to search)
  { path: '', redirectTo: 'search', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () => import('./login-component/login-component').then((m) => m.LoginComponent),
  },

  {
    path: 'products/:id',
    loadComponent: () =>
      import('./product-list-component/product-list-component').then((m) => m.ProductListComponent),
  },
];
