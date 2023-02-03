import Header from "./components/Layout/Header";
import { useState } from "react";
import Meals from './components/Meals/Meals'
import AvailableMeals from './components/Meals/AvailableMeals'
import Modal from "./components/UI/Modal";
import CartProvider from "./content/CartProvider";

function App() {
  const [isCarOpen, setIsCarOpen] = useState(false);
  const openCar =() =>{
    console.log('jijija')
    setIsCarOpen(true)
  }
  const closeCar = () =>{
    setIsCarOpen(false)
  }
  return (
    <CartProvider>
      {isCarOpen? <Modal closeCar={closeCar}/>: ''}
    <Header openCar={openCar} />
    <main className='container'>
      <Meals/>
      <AvailableMeals />
    </main>
    </CartProvider>
  );
}

export default App;
