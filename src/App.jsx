import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartContainer/CartContainer";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartContextProvider>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<ItemListContainer greeting='Bienvenidos' />}
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
            {/* <Route path='*' element={<Navigate to='/404' />} /> */}
          </Routes>
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
