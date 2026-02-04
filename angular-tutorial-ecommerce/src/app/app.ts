import { Component, signal, computed, effect, untracked, input, Signal } from '@angular/core'; // <-- Add Signal
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ProductList, Product } from './product-list/product-list';
import { ProductService } from './product'; // <-- Import ProductService from './product'
import { ContactFormComponent } from './contact-form/contact-form'; // Import the new ContactFormComponent
import { CartComponent } from './cart/cart'; // Import the new CartComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent, ProductList, ContactFormComponent, CartComponent], // Add CartComponent here
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
    protected cartItemCount = computed(() => this.productService.cart().length);

  

    // Add a constructor and the effect here

    constructor(private productService: ProductService) { // <-- Inject ProductService

      this.products = this.productService.products; // <-- Assign the readonly signal from the service

  

      effect(() => {

        const currentTitle = this.title(); // This read IS tracked, so the effect re-runs if 'title' changes

        console.log(`Effect triggered. Current title: ${currentTitle}`);

        

        // This part is untracked. If we had a signal read here, it wouldn't make the effect re-run.

        untracked(() => {

          console.log(`  (Logged at: ${Date.now()}) - Untracked timestamp`);

        });

      });

    }

  onProductAddedToCart(product: Product) {
    this.productService.addToCart(product);
  }

  protected handleClick() {
    console.log('Button clicked!');
    this.title.set('You clicked the button!');
  }
}
