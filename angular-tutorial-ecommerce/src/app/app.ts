import { Component, signal, computed, effect, untracked, input, Signal } from '@angular/core'; // <-- Add Signal
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ProductList, Product } from './product-list/product-list';
import { ProductService } from './product'; // <-- Import ProductService from './product'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal<string>('My First Angular App');
  protected readonly titleStatus = computed(() => {
    if (this.title() === 'My First Angular App') {
      return 'This is the initial title.';
    } else {
      return 'The title has been changed!';
    }
  });

  // This will now hold the signal returned by the ProductService
  protected products: Signal<Product[]>; // <-- Declare 'products' as a Signal<Product[]>

  // Add a constructor and the effect here
  constructor(private productService: ProductService) {
    // <-- Inject ProductService
    this.products = this.productService.getProducts(); // <-- Assign the signal from the service

    effect(() => {
      const currentTitle = this.title(); // This read IS tracked, so the effect re-runs if 'title' changes
      console.log(`Effect triggered. Current title: ${currentTitle}`);

      // This part is untracked. If we had a signal read here, it wouldn't make the effect re-run.
      // Here, we're just logging Date.now() to show that this code executes with the effect,
      // but if Date.now() itself was a signal, it wouldn't cause the effect to re-trigger.
      untracked(() => {
        console.log(`  (Logged at: ${Date.now()}) - Untracked timestamp`);
      });
    });
  }

  onProductAddedToCart(product: Product) {
    console.log('Product added to cart:', product);
  }

  protected handleClick() {
    console.log('Button clicked!');
    this.title.set('You clicked the button!');
  }
}
