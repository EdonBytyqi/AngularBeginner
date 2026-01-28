import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  template: ` <h1>{{ greeting() }}</h1> `,
})
export class UserProfileComponent {
  firstName = input.required<string>();
  greeting = computed(() => `Hello, ${this.firstName()}!`);
}
