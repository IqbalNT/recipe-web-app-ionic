import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../interface';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeData!: IRecipe;
  constructor() { }

  ngOnInit() {
    this.recipeData = history.state.recipeData;
   }

}
