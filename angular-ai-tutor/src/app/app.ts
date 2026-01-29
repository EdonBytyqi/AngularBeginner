import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-ai-tutor');
  protected readonly welcomeMessage = signal('Welcome to your Angular AI Tutor!');

  onButtonClick() {
    console.log('Button was clicked!');
  }
}
