export interface ICategory {
  id: number;
  catTitle: string;
  recipes?: Array<IRecipe>;
}

export interface IRecipe {
  rId: number;
  recipeTitle: string;
  recipeSubTitle?: string;
  img: string;
  videoLink: string;
  likeCount: number;
  estimateTime: number;
  ingredients: Array<string>;
  instructions: Array<string>;
}
