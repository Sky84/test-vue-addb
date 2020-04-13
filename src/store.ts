import FoodItem from './types/FoodItem';
import RawFoodItem from './types/RawFoodItem';
import Store from './types/Store/Store';

export const store: Store = {
    state: {
        cart: {
            itemsInCart: {},
            totalAmount: 0
        }
    },
    addToCart(rawfoodItem: RawFoodItem) {
        const itemMeal: FoodItem = this.state.cart.itemsInCart[rawfoodItem.idMeal];
        if (itemMeal) {
            itemMeal.amount++;
        } else {

            this.state.cart.itemsInCart[rawfoodItem.idMeal] = {
                id: rawfoodItem.idMeal,
                amount: 1,
                name: rawfoodItem.strMeal,
                thumb: rawfoodItem.strMealThumb
            };
        }
        this.state.cart.totalAmount = this.getTotalItems();
        console.log(rawfoodItem.strMeal + ' added in cart, total in cart :', this.state.cart.totalAmount);
        window.localStorage.setItem('cart', JSON.stringify(this.state.cart));
    },
    removeFromCart(id: string) {
        delete this.state.cart.itemsInCart[id];
        this.state.cart.totalAmount = this.getTotalItems();
        console.log('item removed from cart, total in cart :', this.state.cart.totalAmount);
        window.localStorage.setItem('cart', JSON.stringify(this.state.cart));
    },
    getTotalItems() {
        const items = store.state.cart.itemsInCart;
        let total = 0;
        for (const id in items) {
            if (items.hasOwnProperty(id)) {
                total += items[id].amount;
            }
        }
        return total;
    },
    initCart() {
        const cartLocal = window.localStorage.getItem('cart');
        if (cartLocal) {
            this.state.cart = JSON.parse(cartLocal);
        }

    }
};
