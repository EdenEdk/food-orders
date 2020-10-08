export interface Ingredient {
  ingredientId: number;
  displayName: string;
  minPrice: number;
  maxPrice: number;
  imageUrl?: string;
  parve?: boolean;
}

export const initialIngredientsState = [];
