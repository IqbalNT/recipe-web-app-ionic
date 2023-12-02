import { Component } from '@angular/core';
import { Categories } from './data';
import { ICategory, IRecipe } from './interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categories: Array<ICategory> = Categories.data;

  constructor() { }


  onCardClick(recipe: IRecipe) {
    console.log('asche', recipe);

  }

}
