export interface Order {
  orderId: number;
  userName: string;
  userId: string;
  orderItems: OrderItem;
  specialRequest?: string;
  description?: string;
}

interface OrderItem {
  recipeId: number;
  recipeAmount?: number;
  specialRequest?: string;
}

export const initialOrdersState = [];
