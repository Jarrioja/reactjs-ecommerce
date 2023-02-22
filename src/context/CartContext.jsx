import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  //Verificar si ya esta en el carrito
  const existOnCart = (newProduct) =>
    cartList.findIndex((p) => p.id === newProduct.id);

  //Añadir al carrito
  const addToCart = (newProduct) => {
    let index = existOnCart(newProduct);
    if (index > -1) {
      cartList[index].qty = cartList[index].qty + newProduct.qty;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, newProduct]);
    }
  };
  //Vaciar carrito
  const emptyCart = () => {
    setCartList([]);
  };

  //Eliminar 1 producto
  const removeProductById = (productId) => {
    let index = existOnCart(productId);
    cartList.splice(index, 1);
    setCartList([...cartList]);
  };

  //Precio Total
  const totalPrice = () =>
    cartList.reduce(
      (prev, act) => Math.round((prev + act.qty * act.price) * 100) / 100,
      0
    );

  //Cantidad Total
  const totalQty = () =>
    cartList.reduce((acumulador, actual) => acumulador + actual.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        removeProductById,
        totalPrice,
        totalQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
