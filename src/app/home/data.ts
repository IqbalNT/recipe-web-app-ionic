import { ICategory } from "./interface";

export class Categories {
  static get data(): ICategory[] {
    return [
      {
        id: 1,
        catTitle: 'Dinner Recipes',
        recipes:
          [
            {
              rId: 11,
              recipeTitle: 'Dinner Recipe 1',
              recipeSubTitle: 'Dinner Recipe 1 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 111,
              recipeTitle: 'Dinner Recipe 2',
              recipeSubTitle: 'Dinner Recipe 2 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 15,
              estimateTime: 50,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 1111,
              recipeTitle: 'Dinner Recipe 3',
              recipeSubTitle: 'Dinner Recipe 3 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 20,
              estimateTime: 15,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },

          ]
      },
      {
        id: 2,
        catTitle: 'Breakfast Recipe',
        recipes:
          [
            {
              rId: 22,
              recipeTitle: 'Breakfast Recipe 1',
              recipeSubTitle: 'Breakfast Recipe 1 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 5,
              estimateTime: 11,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 222,
              recipeTitle: 'Breakfast Recipe 2',
              recipeSubTitle: 'Breakfast Recipe 2 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 1000,
              estimateTime: 30,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 2222,
              recipeTitle: 'Breakfast Recipe 2',
              recipeSubTitle: 'Breakfast Recipe 2 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 2000,
              estimateTime: 30,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            }

          ]
      },
      {
        id: 3,
        catTitle: 'Your Favorites',
        recipes:
          [
            {
              rId: 33,
              recipeTitle: 'Your Favorite Recipe 1',
              recipeSubTitle: 'Your Favorite Recipe 1 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10500,
              estimateTime: 10,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 333,
              recipeTitle: 'Your Favorite Recipe 2',
              recipeSubTitle: 'Your Favorite Recipe 2 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10500,
              estimateTime: 10,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 3333,
              recipeTitle: 'Your Favorite Recipe 3',
              recipeSubTitle: 'Your Favorite Recipe 3 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10500,
              estimateTime: 10,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            }
          ]
      },
      {
        id: 4,
        catTitle: 'Lunch Recipes',
        recipes:
          [
            {
              rId: 44,
              recipeTitle: 'Lunch Recipe 1',
              recipeSubTitle: 'Lunch Recipe 1 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 444,
              recipeTitle: 'Lunch Recipe 2',
              recipeSubTitle: 'Lunch Recipe 2 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 4444,
              recipeTitle: 'Lunch Recipe 3',
              recipeSubTitle: 'Lunch Recipe 3 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
          ]
      },
      {
        id: 5,
        catTitle: '20 Minutes or less',
        recipes:
          [
            {
              rId: 55,
              recipeTitle: '20 Minutes or less Recipe 1',
              recipeSubTitle: '20 Minutes or less Recipe 1 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 555,
              recipeTitle: '20 Minutes or less Recipe 2',
              recipeSubTitle: '20 Minutes or less Recipe 2 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 5555,
              recipeTitle: '20 Minutes or less Recipe 3',
              recipeSubTitle: '20 Minutes or less Recipe 3 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            }

          ]
      },
      {
        id: 6,
        catTitle: 'Latest Recipes',
        recipes:
          [
            {
              rId: 66,
              recipeTitle: 'Latest Recipe 1',
              recipeSubTitle: 'Latest Recipe 1 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 666,
              recipeTitle: 'Latest Recipe 2',
              recipeSubTitle: 'Latest Recipe 2 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 6666,
              recipeTitle: 'Latest Recipe 3',
              recipeSubTitle: 'Latest Recipe 3 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            }

          ]
      },
      {
        id: 7,
        catTitle: 'Community Recipes',
        recipes:
          [
            {
              rId: 77,
              recipeTitle: 'Community Recipe 1',
              recipeSubTitle: 'Community Recipe 1 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 777,
              recipeTitle: 'Community Recipe 2',
              recipeSubTitle: 'Community Recipe 2 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },
            {
              rId: 7777,
              recipeTitle: 'Community Recipe 3',
              recipeSubTitle: 'Community Recipe 3 subtitle',
              img: 'https://ionicframework.com/docs/img/demos/card-media.png',
              videoLink: '',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5'],
              instructions: ['instruction 1', 'instruction 2', 'instruction 3', 'instruction 4', 'instruction 5']
            },

          ]
      },
    ];
  }
}
