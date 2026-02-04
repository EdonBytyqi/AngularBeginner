import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  // Import ReactiveFormsModule for reactive form directives ([formGroup], formControlName)
  // and CommonModule for common directives like @if
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactFormComponent {
  // Inject FormBuilder service to help create the form
  private fb = inject(FormBuilder);

  // FormGroup to hold our form controls
  contactForm = this.fb.group({
    // FormControl for the name, with a 'required' validator
    name: ['', Validators.required],
    // FormControl for the email, with 'required' and 'email' validators
    email: ['', [Validators.required, Validators.email]],
    // FormControl for the message, with a 'required' validator
    message: ['', Validators.required]
  });

  constructor() { }

  // Method to be called on form submission
  onSubmit() {
    if (this.contactForm.valid) {
      // Log the form values if the form is valid
      console.log('Form Submitted!', this.contactForm.value);
    }
  }
}