import {Action, createReducer, on} from '@ngrx/store';
import {initialRecipesState, Recipe} from './recipes.model';
import {RECIPES_ACTIONS} from './recipes.actions';

const reducer = createReducer(
  initialRecipesState,
  on(RECIPES_ACTIONS.SET, setRecipes),
);

function setRecipes(state: Recipe[], action: Action): Recipe[] {
  const newRecipe: Recipe = {
    recipeId: 1,
    displayName: 'something',
    price: 100,
    ingredients: [{ingredientId: 1, amountInGrams: 100}]
  };
  return [newRecipe];
}

export default function recipesReducer(state: Recipe[], action: Action): Recipe[] {
  return reducer(state, action);
}
