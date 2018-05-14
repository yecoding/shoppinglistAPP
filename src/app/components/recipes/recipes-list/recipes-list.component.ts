import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
	recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is a test', 'https://minimalistbaker.com/wp-content/uploads/2017/07/AMAZING-Garlicky-Sweet-Potato-Pasta-with-Crispy-Kale-7-ingredients-required-vegan-glutenfree-sweet-potato-pasta-healthy-recipe-9.jpg'),
		new Recipe('Another Test Recipe', 'This is a test', 'https://minimalistbaker.com/wp-content/uploads/2017/07/AMAZING-Garlicky-Sweet-Potato-Pasta-with-Crispy-Kale-7-ingredients-required-vegan-glutenfree-sweet-potato-pasta-healthy-recipe-9.jpg')
	];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(element:Recipe){
    this.recipeWasSelected.emit(element);
  }

}
