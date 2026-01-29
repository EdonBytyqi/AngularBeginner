import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-ai-tutor');
  protected readonly welcomeMessage = signal('Welcome to your Angular AI Tutor!');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal<number>(0);

  protected showNextRecipe(): void {
    this.recipe.set(MOCK_RECIPES[1]);
    console.log('Current Recipe:', this.recipe().name);
  }

  protected showPreviousRecipe(): void {
    this.recipe.set(MOCK_RECIPES[0]);
    console.log('Current Recipe:', this.recipe().name);
  }

  protected increment(): void {
    this.servings.update((val) => val + 1);
    console.log('Incremented to:', this.servings());
  }

  protected decrement(): void {
    this.servings.update((val) => val - 1);
    console.log('Decremented to:', this.servings());
  }
}
