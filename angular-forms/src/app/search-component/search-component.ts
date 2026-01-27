import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-component',
  imports: [ReactiveFormsModule], 
  templateUrl: './search-component.html',
  styleUrl: './search-component.css',
})
export class SearchComponent {
  searchQuery = new FormControl('', Validators.required);
}
