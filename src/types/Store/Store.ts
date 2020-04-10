import FoodItem from '../FoodItem';
import RawFoodItem from '../RawFoodItem';

export interface State {
    itemsInCart: { [key: string]: FoodItem };
}

export default interface Store {
    state: State;
    addToCart: (rawfoodItem: RawFoodItem) => void;
}
