import ingredientsReducer from './ingredients/ingredients.reducer';
import {Ingredient} from './ingredients/ingredients.model';
import recipesReducer from './recipes/recipes.reducer';

export const AppState = {
  ingredients: ingredientsReducer,
  recipes: recipesReducer
};
