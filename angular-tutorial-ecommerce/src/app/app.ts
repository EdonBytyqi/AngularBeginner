import { Component, signal, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
      console.log(`The current title is: ${this.title()}`);
    });
  }

  protected handleClick() {
    console.log('Button clicked!');
    this.title.set('You clicked the button!');
  }
}
