import FoodItem from '../FoodItem';
import RawFoodItem from '../RawFoodItem';

export interface Cart {
    itemsInCart: { [key: string]: FoodItem };
    totalAmount: number;
}
export interface State {
    cart: Cart;
}

export default interface Store {
    state: State;
    addToCart: (rawfoodItem: RawFoodItem) => void;
    removeFromCart: (id: string) => void;
    getTotalItems: () => number;
    initCart: () => void;
}
