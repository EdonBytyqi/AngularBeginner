import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',
})
export class HelloWorldComponent {
  // Define an input signal named 'message' with a default value
  readonly message = input<string>('Default Hello Message!');

  // You can also define a required input like this:
  // readonly requiredName = input.required<string>();
}
