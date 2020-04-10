import FoodItem from './types/FoodItem';
import RawFoodItem from './types/RawFoodItem';
import Store from './types/Store/Store';

export const store: Store = {
    state: {
        itemsInCart: {}
    },
    addToCart(rawfoodItem: RawFoodItem) {
        const itemMeal: FoodItem = this.state.itemsInCart[rawfoodItem.idMeal];
        if (itemMeal) {
            itemMeal.amount++;
        } else {

            this.state.itemsInCart[rawfoodItem.idMeal] = {
                amount: 1,
                name: rawfoodItem.strMeal,
                thumb: rawfoodItem.strMealThumb
            };
        }
        console.log(itemMeal.name + ' added in cart', this.state.itemsInCart);
    }
};
