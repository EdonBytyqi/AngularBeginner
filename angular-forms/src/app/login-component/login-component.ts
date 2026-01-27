import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: true,
  // 1. You MUST import ReactiveFormsModule
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input
        type="text"
        formControlName="email"
        [class.invalid-border]="email?.invalid && email?.touched"
      />
      @if (email?.invalid && email?.touched) {
        <p>Email is invalid</p>
      }
      <input type="password" formControlName="password" />
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  // 1. Create the Group
  loginForm = new FormGroup({
    // 2. Define the child controls inside
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    // 3. You can check the validity of the WHOLE group
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Output: { email: '...', password: '...' }
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
}
