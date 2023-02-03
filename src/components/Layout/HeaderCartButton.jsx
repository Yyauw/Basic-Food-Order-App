import CartIcon from "../Cart/CartIcon"
import CartContext from "../../content/cart-context"
import { useContext } from "react"

const HeaderCartButton = (props) =>{
    const cartctx = useContext(CartContext)

    const itemsOnCart = cartctx.items.reduce((currentNumber, item)=>{
        return currentNumber + item.amount;
    },0)

    return(
        <button className="btn btn-danger d-flex align-items-center p-2 px-3" onClick={props.openCar}>
            <CartIcon/>
            <span className="mx-2">Your Cart</span>
            <span className="badge text-bg-secondary bg-dark mt-auto">{itemsOnCart}</span>
        </button>
    )
}

export default HeaderCartButton