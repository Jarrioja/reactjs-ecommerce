//import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
//import "./App.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartContainer/CartContainer";
//import { useState, useEffect} from "react";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <ItemListContainer greeting='¿Aqui deberia estar un Saludo?' />
            }
          />
          <Route
            path='/categoria/:categoria'
            element={
              <ItemListContainer greeting='¿Aqui deberia estar un Saludo?' />
            }
          />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          {/* <Route path='*' element={<Navigate to='/404' />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
