import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import * as ShoppingListActions from "../shopping-list/store/shopping-list.actions";
import * as fromShoppingList from "../shopping-list/store/shopping-list.reducer";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      '../../../assets/pexels-photo-schnitzel.jpeg',
      [
        new Ingredient('Boneless pork chops', 2),
        new Ingredient('All-purpose flour', 1/25),
        new Ingredient('Garlic salt', 1),
        new Ingredient('Paprika', 1/2),
        new Ingredient('Black pepper', 1/2),
        new Ingredient('Large eggs', 3),
        new Ingredient('Panko bread crumbs', 2),
        new Ingredient('Olive oil', 1),
        new Ingredient('Lemon wedges', 3),
        new Ingredient('French Fries', 20),
        new Ingredient('Ketchup', 1),
        new Ingredient('Marole', 1)
      ]
    ),
    new Recipe(
      'Baked Salmon',
      'Baked Salmon with Garlic is juicy and flaky, yum!',
      '../../../assets/Baked-Salmon.jpg',
      [
        new Ingredient('1/2 lb salmon filet', 1),
        new Ingredient('Fresh parsley, chopped', 2),
        new Ingredient('Light olive oil', 2),
        new Ingredient('Fresh lemon juice', 2),
        new Ingredient('Garlic cloves, pressed', 3),
        new Ingredient('Dijon mustard', 1/2),
        new Ingredient('Sea salt', 1/2),
        new Ingredient('Black pepper', 1/8),
        new Ingredient('Lemon, sliced into 4 rings', 1/2),
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      '../../../assets/pexels-photo-burger.jpeg',
      [
        new Ingredient('Ground beef', 2),
        new Ingredient('Black Pepper', 1),
        new Ingredient('Cheddar cheese', 4),
        new Ingredient('Mayonnaise', 1/25),
        new Ingredient('Yellow mustard', 1),
        new Ingredient('Burger buns', 4),
        new Ingredient('Iceberg lettuce', 2),
        new Ingredient('Large tomato', 1),
        new Ingredient('Red onion', 1/2),
        new Ingredient('Dill Pickles', 2),
      ]
    ),
    new Recipe(
      'Fish Taco',
      'Don’t skip the best taco sauce – a garlic lime crema',
      '../../../assets/Fish-Tacos.jpg',
      [
        new Ingredient('Small white corn tortillas', 24),
        new Ingredient('Tilapia', 1),
        new Ingredient('Ground cumin', 1/2),
        new Ingredient('Cayenne pepper', 1/2),
        new Ingredient('Salt', 1),
        new Ingredient('Black pepper', 1/4),
        new Ingredient('Olive oil', 1),
        new Ingredient('Unsalted butter', 1),
      ]
    ),
    new Recipe(
      'Easy Crepe',
      'This blender crepe recipe couldn’t be easier',
      '../../../assets/Crepe.jpg',
      [
        new Ingredient('Lukewarm water', 1/2),
        new Ingredient('Warm milk', 1),
        new Ingredient('Large eggs', 4),
        new Ingredient('Unsalted butter, melted', 4),
        new Ingredient('All-purpose flour', 1),
        new Ingredient('Granulated sugar', 2),
        new Ingredient('Sea salt', 1),
      ]
    ),

  ];

  // private recipes: Recipe[] = [];

  constructor(
    private store: Store<fromShoppingList.AppState>
  ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  };

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));

  }



  /**
   * @param  {Recipe} recipe
   *
   * * This is an important text
   * ! Alert comment
   * ? idk, some question
   * TODO: remember this
   *
   *
   * this is a link to other function, just hover over this funcName {@link getRecipe}
   */
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
