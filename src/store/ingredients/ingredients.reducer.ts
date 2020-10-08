import {Action, createReducer, on} from '@ngrx/store';
import {Ingredient, initialIngredientsState} from './ingredients.model';
import {INGREDIENTS_ACTIONS} from './ingredients.actions';

const reducer = createReducer(
  initialIngredientsState,
  on(INGREDIENTS_ACTIONS.SET, setIngredients),
);

function setIngredients(state: Ingredient[], action: Action): Ingredient[] {
  const newIngredient: Ingredient = {
    ingredientId: 1,
    displayName: 'hello',
    maxPrice: 1,
    minPrice: 1
  };
  return [newIngredient];
}

export default function ingredientsReducer(state: Ingredient[], action: Action): Ingredient[] {
  return reducer(state, action);
}
