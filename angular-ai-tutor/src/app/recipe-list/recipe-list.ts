import { Component, signal, computed } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal<number>(2);

  protected readonly adjustedIngredients = computed(() => {
    const currentRecipe = this.recipe();
    const currentServings = this.servings();
    return currentRecipe.ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * currentServings,
    }));
  });

  protected showNextRecipe(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected showPreviousRecipe(): void {
    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected increment(): void {
    this.servings.update((val) => val + 1);
  }

  protected decrement(): void {
    this.servings.update((val) => val - 1);
  }
}
