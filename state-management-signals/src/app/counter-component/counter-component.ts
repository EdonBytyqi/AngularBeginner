import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <p>Count is: {{ count() }}</p>
    <button (click)="increment()">+1</button>
  `,
})
export class CounterComponent {
  // 1. Create the signal
  count = signal(0);

  increment() {
    // 2. Update the signal
    this.count.update((val) => val + 1);
  }
}
