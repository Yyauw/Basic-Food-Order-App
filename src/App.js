import Header from "./components/Layout/Header";
import { Fragment } from "react";
import Meals from './components/Meals/Meals'
import AvailableMeals from './components/Meals/AvailableMeals'

function App() {
  return (
    <Fragment>
    <Header/>
    <main className='container'>
      <Meals/>
      <AvailableMeals />
    </main>
    </Fragment>
  );
}

export default App;
