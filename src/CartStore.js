import {atom, useAtom} from 'jotai';
import Immutable from 'seamless-immutable';

// create an array that is immutable
// -> initialCart is a seamless-immutable array
const initialCart = Immutable([
    {
        "id": 1,
        "product_id": 1,
        "quantity": 10,
        "productName": "Organic Green Tea",
        "price": 12.99,
        "imageUrl": "https://picsum.photos/id/225/300/200",
        "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste."
    }
]);


export const cartAtom =atom(initialCart);

// Custom hook for other components so that they can have access to the cart
export const useCart = () => {

    const [cart, setCart] = useAtom(cartAtom);

    // function to calculate the total of the shopping cart
    const getCartTotal = () => {
        const total = 0;
        for (let cartItem of cart) {
            total += cartItem.price
        }
        return total;
    }

    const addToCart = (product) => {

        // setCart function takes in one argument
        // which is the value of the current cart 
        setCart(currentCart => {
            // add the product to the shopping cart
            // -> concat means to add together or add to the back
            return currentCart.concat({
                ...product, // clone the product object
                quantity: 1
            })
        })


    }

    return {
        cart,
        getCartTotal,
        addToCart
    }

}