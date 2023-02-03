import { Fragment,useRef } from "react"

const MealItemForm = (props) =>{
    const amountRef = useRef()
    const addItem = () =>{
        props.addItemToCart(+amountRef.current.value)
    }

    return(
        <Fragment>
            <div className="mx-auto">
                <span>
                <label htmlFor="" className="me-2">Amount</label>
                <input type="number" style={{width:'60px', height:'35px'}} className='form-control d-inline' min={1} max={5} defaultValue='1' ref={amountRef}/>
                </span>
            </div>
            <button className="btn btn-danger ms-3 mt-2" style={{width:'80px'}} onClick={addItem}>+ ADD</button>
        </Fragment>
    )
}

export default MealItemForm