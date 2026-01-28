import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <p>Count is: {{ count() }}</p>
    <button (click)="increment()">+1</button>
    <p>Double is: {{ doubleCount() }}</p>
  `,
})
export class CounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update((val) => val + 1);
  }

  constructor() {
    effect(() => {
      console.log(`Current count: ${this.count()}`);
    });
  }
}
