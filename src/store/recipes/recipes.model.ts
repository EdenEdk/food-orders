export interface Recipe {
  recipeId: number;
  displayName: string;
  ingredients: RecipeIngredient[];
  price: number;
  description?: string;
  imageUrl?: string;
  parve?: boolean;
}

interface RecipeIngredient {
  ingredientId: number;
  amountInGrams: number;
}

export const initialRecipesState = [];
