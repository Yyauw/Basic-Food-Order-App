import MealItemForm from "./MealItemForm"
import CartContext from "../../content/cart-context"
import { useContext } from "react"

const MealItem = (props) =>{
    const cartCtx = useContext(CartContext)

    const addItemToCart = (amountRef) =>{
        const item = {id:props.meal.id ,item:props.meal.name, price:props.meal.price, amount: amountRef}
        console.log(item)
        cartCtx.addItem(item)
    }
    
    return(
        <div className="border-bottom mb-1 border-2 row" >
            <div className="col-4">
            <h2>{props.meal.name}</h2>
            <p className="text-muted fst-italic">{props.meal.description}</p>
            <p className="text-danger fs-5">${props.meal.price.toFixed(2)}</p>
            </div>
            <div className="offset-6 col-2 mt-3 d-flex flex-column align-items-center">
                <MealItemForm addItemToCart={addItemToCart}/>
            </div>
        </div>
    )
}

export default MealItem