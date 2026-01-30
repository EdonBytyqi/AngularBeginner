import { Component } from '@angular/core';
import { RecipeList } from './recipe-list/recipe-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecipeList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
