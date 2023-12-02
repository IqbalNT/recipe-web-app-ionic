import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from './data';
import { ICategory, IRecipe } from './interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categories: Array<ICategory> = Categories.data;

  constructor(private router: Router) { }


  onCardClick(recipe: IRecipe) {
    // this.router.navigate([`home/recipe/${recipe.rId}`]);
    this.router.navigate(['home/recipe', recipe.rId], {
      state: {
        recipeData: recipe  // Pass the recipe object within the 'recipeData' key
      }
    });
  }

}
