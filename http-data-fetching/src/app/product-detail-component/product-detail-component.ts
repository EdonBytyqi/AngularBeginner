import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/product';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    @if (product$ | async; as product) {
      <h1>{{ product.title }}</h1>
      <p>Price: \${{ product.price }}</p>
      <p>{{ product.description }}</p>
    }
  `,
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private service = inject(Product);

  product$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const id = params.get('id');
      return this.service.getProduct(id!);
    }),
  );
}
