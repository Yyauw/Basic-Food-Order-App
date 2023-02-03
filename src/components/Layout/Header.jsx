import { Fragment } from "react";
import foodImage from '../../assets/food.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="sticky-top">
        <nav className="navbar bg-body-tertiary bg-dark navbar-dark">
          <div className="container-fluid container p-2">
            <h1 className="navbar-brand mb-0 h1 p-1 text-danger fs-2">FoodApp</h1>
            
              <HeaderCartButton openCar={props.openCar} />
            
          </div>
        </nav>
      </header>
      <div><img src={foodImage} alt="" className='' style={{objectFit:'cover', height:'400px', width:'100%'}}/></div>
    </Fragment>
  );
};

export default Header;
