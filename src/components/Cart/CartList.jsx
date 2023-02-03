import { useContext } from "react";
import CartContext from "../../content/cart-context";

const CartList = (props) => {

  const cartctx = useContext(CartContext);
  console.log(cartctx);
  const list = cartctx.items.map((el) => {
    const onAddHandler = () =>{
      console.log(el.id)
      cartctx.addItem({...el, amount: 1})
    }

    const onRemoveHandler = () =>{
      cartctx.removeItem(el.id)
    }
    return (
      <li key={Math.random()} className="row mb-3" style={{borderBottom: "1px solid gray" }}>
        <h4 className="col-4">{el.item}</h4>
        <p className="offset-6 col-2 text-center">{el.price}</p>
        <div
          className=" row"
          style={{ marginTop: "-10px"}}
        >
          <p className="text-muted mb-1 col-2">quantity: {el.amount}</p>
          <div className="offset-8 col-2 d-flex">
          <button className="btn btn-outline-danger btn-sm mb-1 ms-auto me-1" onClick={onRemoveHandler}>-</button>
          <button className="btn btn-outline-danger btn-sm mb-1 me-1" onClick={onAddHandler}>+</button>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div
      className="card p-4 start-50 translate-middle"
      style={{ zIndex: "1022", position: "fixed", width: "50vw", top: "40%" }}
    >
      <ul>{list}</ul>
      <div className="row">
        <p className="col-md-2 fw-bold">Total Amount:</p>
        <p className="offset-md-8 col-md-2 text-center fw-bold">
          ${cartctx.totalAmount.toFixed(2)}
        </p>
      </div>
      <div className="row">
        <span className="offset-9 col-3">
          <button
            className="btn btn-danger me-1 ms-xxl-5"
            id="close-button"
            onClick={props.closeCar}
          >
            close
          </button>
          {list.length <= 0 ? <button className="btn btn-success" disabled>Order</button>: <button className="btn btn-success">Order</button>}
          
        </span>
      </div>
    </div>
  );
};

export default CartList;
