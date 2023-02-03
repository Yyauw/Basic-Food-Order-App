import { Fragment } from "react"
import ReactDom from 'react-dom'
import CartList from "../Cart/CartList"

const modal = document.getElementById('overlays')

const BackDrop =(props) =>{
    return <div className="position-fixed top-0 start-0" style={{background:'rgba(0, 0, 0, 0.75)', width:'100%', height:'100vh', zIndex:'1021'}} onClick={props.closeCar}></div>
}

const Modal = (props) =>{
    return(
        <Fragment>
        {ReactDom.createPortal(<BackDrop closeCar={props.closeCar}/>, modal)}
        {ReactDom.createPortal(<CartList closeCar={props.closeCar}/>, modal)}
        </Fragment>
    )
}

export default Modal