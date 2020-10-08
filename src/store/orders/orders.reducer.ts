import {Action, createReducer, on} from '@ngrx/store';
import {ORDERS_ACTIONS} from './orders.actions';
import {initialOrdersState, Order} from './orders.model';

const reducer = createReducer(
  initialOrdersState,
  on(ORDERS_ACTIONS.SET, setOrders),
);

function setOrders(state: Order[], action: Action): Order[] {
  const newRecipe: Order = {
    orderId: 1,
    userId: '1',
    userName: 'something',
    orderItems: [{recipeId: 1}]
  };
  return [newRecipe];
}

export default function ordersReducer(state: Order[], action: Action): Order[] {
  return reducer(state, action);
}
