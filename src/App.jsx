//import "./App.css";
//import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
//import "./App.scss";
import ItemListContainer from "./components/ItemListContainer";
//import { useState } from "react";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting='¿Aqui deberia estar un Saludo?' />
    </div>
  );
}

export default App;
