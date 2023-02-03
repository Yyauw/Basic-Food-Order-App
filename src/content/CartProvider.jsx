import CartContext from "./cart-context";
import { useReducer } from "react";

const CartDefaultValue = {
    items:[],
    totalAmount: +0
}

const CartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        const NewTotalAmount = state.totalAmount + action.item.price * action.item.amount
        const ExistingItemOnCart = state.items.findIndex(el => el.id === action.item.id)

        let existingItem = state.items[ExistingItemOnCart]
        let NewCartItems;
        if(existingItem){
            existingItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            NewCartItems = [...state.items];
            NewCartItems[ExistingItemOnCart] = existingItem
        }else{
            NewCartItems = state.items.concat(action.item);
        }
        
        return {
            items: NewCartItems,
            totalAmount: NewTotalAmount
        }
    }

    if(action.type === 'REMOVE'){
        const ExistingItemOnCart = state.items.findIndex(el => el.id === action.id);
        const NewTotalAmount = state.totalAmount - state.items[ExistingItemOnCart].price;
        let existingItem = state.items[ExistingItemOnCart];
        let NewCartItems;
        if(existingItem.amount === 1){
            NewCartItems = state.items.filter(el => el.id !== action.id)
        }else{
            existingItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            }
            NewCartItems = [...state.items];
            NewCartItems[ExistingItemOnCart] = existingItem
        }
        return {
            items: NewCartItems,
            totalAmount: NewTotalAmount
        }
    }

    return CartDefaultValue
}



const CartProvider = (props)=>{
    const [Cart, cartDispatch] = useReducer(CartReducer, CartDefaultValue);

    const addItemToCartHandler = (item)=>{
        console.log(Cart)
        cartDispatch({type:'ADD', item})
    }

    const removeItemFromCartHandler = (id) =>{
        cartDispatch({type:'REMOVE', id})
    }

    const cartContext = {
        items:Cart.items,
        totalAmount:Cart.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider