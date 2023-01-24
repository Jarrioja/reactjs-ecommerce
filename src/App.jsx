//import "./App.css";
//import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
//import "./App.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import { useState, useEffect} from "react";

function App() {
  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    console.log(currentScroll);
  };
  return (
    <div className='App' onScroll={handleScroll}>
      <Navbar />
      <ItemListContainer greeting='¿Aqui deberia estar un Saludo?' />
    </div>
  );
}

export default App;
