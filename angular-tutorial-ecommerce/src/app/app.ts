import { Component, signal, computed, effect, untracked, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal<string>('My First Angular App');

  // Add this new computed signal right below your 'title' signal
  protected readonly titleStatus = computed(() => {
    if (this.title() === 'My First Angular App') {
      return 'This is the initial title.';
    } else {
      return 'The title has been changed!';
    }
  });

  // Add a constructor and the effect here
  constructor() {
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

  protected handleClick() {
    console.log('Button clicked!');
    this.title.set('You clicked the button!');
  }
}
