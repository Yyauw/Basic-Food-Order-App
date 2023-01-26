import CartIcon from "../Cart/CartIcon"

const HeaderCartButton = () =>{
    return(
        <button className="btn btn-danger d-flex align-items-center p-2 px-3">
            <CartIcon/>
            <span className="mx-2">Your Cart</span>
            <span className="badge text-bg-secondary bg-dark mt-auto">3</span>
        </button>
    )
}

export default HeaderCartButton