import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-ai-tutor');
  protected readonly welcomeMessage = signal('Welcome to your Angular AI Tutor!');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal<number>(0);

  imageUrl = computed(() => this.recipe().imgUrl);

  protected readonly adjustedIngredients = computed(() => {
    // 1. Get the current recipe and servings values
    const currentRecipe = this.recipe();
    const currentServings = this.servings();
    // 2. Map over currentRecipe.ingredients to create a new array
    //    where each ingredient's quantity is adjusted by currentServings.
    return currentRecipe.ingredients.map((ingredient) => ({
      ...ingredient, // Keep all other properties the same
      quantity: ingredient.quantity * currentServings, // Adjust the quantity
    }));
  });

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
