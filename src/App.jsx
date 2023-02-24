import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { initFirestore } from "../firebase/config";
import { CartContextProvider } from "./context/CartContext";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartContainer/CartContainer";
import ThankYou from "./components/ThankYou/ThankYou";

import "./App.scss";

initFirestore();

function App() {
  return (
    <Router>
      <CartContextProvider>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <ItemListContainer greeting='The Growth Keys - React E-commerce' />
              }
            />
            <Route
              path='/category/:category'
              element={<ItemListContainer greeting='Cursos disponibles en' />}
            />
            <Route
              path='/product/:productId'
              element={<ItemDetailContainer />}
            />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/thank-you/:orderId' element={<ThankYou />} />
          </Routes>
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
