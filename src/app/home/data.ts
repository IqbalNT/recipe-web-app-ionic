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
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 111,
              recipeTitle: 'Dinner Recipe 2',
              recipeSubTitle: 'Dinner Recipe 2 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 15,
              estimateTime: 50,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 1111,
              recipeTitle: 'Dinner Recipe 3',
              recipeSubTitle: 'Dinner Recipe 3 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 20,
              estimateTime: 15,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
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
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 5,
              estimateTime: 11,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 222,
              recipeTitle: 'Breakfast Recipe 2',
              recipeSubTitle: 'Breakfast Recipe 2 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 1000,
              estimateTime: 30,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 2222,
              recipeTitle: 'Breakfast Recipe 3',
              recipeSubTitle: 'Breakfast Recipe 3 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 2000,
              estimateTime: 30,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
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
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10500,
              estimateTime: 10,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 333,
              recipeTitle: 'Your Favorite Recipe 2',
              recipeSubTitle: 'Your Favorite Recipe 2 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10500,
              estimateTime: 10,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 3333,
              recipeTitle: 'Your Favorite Recipe 3',
              recipeSubTitle: 'Your Favorite Recipe 3 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10500,
              estimateTime: 10,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
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
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 444,
              recipeTitle: 'Lunch Recipe 2',
              recipeSubTitle: 'Lunch Recipe 2 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 4444,
              recipeTitle: 'Lunch Recipe 3',
              recipeSubTitle: 'Lunch Recipe 3 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
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
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 555,
              recipeTitle: '20 Minutes or less Recipe 2',
              recipeSubTitle: '20 Minutes or less Recipe 2 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 5555,
              recipeTitle: '20 Minutes or less Recipe 3',
              recipeSubTitle: '20 Minutes or less Recipe 3 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
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
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 666,
              recipeTitle: 'Latest Recipe 2',
              recipeSubTitle: 'Latest Recipe 2 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 6666,
              recipeTitle: 'Latest Recipe 3',
              recipeSubTitle: 'Latest Recipe 3 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
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
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 777,
              recipeTitle: 'Community Recipe 2',
              recipeSubTitle: 'Community Recipe 2 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },
            {
              rId: 7777,
              recipeTitle: 'Community Recipe 3',
              recipeSubTitle: 'Community Recipe 3 subtitle',
              img: 'https://picsum.photos/200/100',
              videoLink: 'https://www.youtube.com/embed/r9H3QSkH0BA',
              likeCount: 10,
              estimateTime: 35,
              ingredients: ['8 Garlic Pods', '4 Red Chilies', '8 Garlic Pods', '1 Tbsp Oi', '1/2 Tsp Mustard Seeds', '1/2 Tsp Urad Dal', '1 Sprig Curry Leaves', '1 med. Onion', '2 med. Tomatoes'],
              instructions: ['Bake chicken according to package directions.', 'Pre-heat oven to 375° and place pan into the oven when you turn it on.', 'Place all dry ingredients into a large mixing bowl and mix together', 'Place buttermilk, 2 tablespoons melted butter, egg and vanilla extract into a mixing bowl and whisk together.', 'Mix wet and dry ingredients together.', 'Once the oven is ready remove the pan and place one tablespoon of butter into the pan and coat it.', 'Place the batter into the hot buttered pan and bake for 20 minutes.', 'Plate the chicken and baked pancakes and serve with butter and maple syrup.', 'Place eggs into a pot of water and boil for about 12 minutes. Let cool under cold water. *Eggs can be cooked ahead of time and refrigerated.', 'Place olive oil into a small pan and sautee the mushrooms until they are half their size. About 5 minutes. Keep mixing them as the cook. Let cool', 'Lightly toast the bread and set aside.', 'Smash the avocado in a bowl with a fork. Season to taste with lime juice, salt and pepper.', 'Assemble the toast by spreading the smashed avocado onto the bread. Add mushrooms and sliced eggs. Sprinkle with everything bagel seasoning, extra lime juice, salt and pepper to taste.']
            },

          ]
      },
    ];
  }
}
