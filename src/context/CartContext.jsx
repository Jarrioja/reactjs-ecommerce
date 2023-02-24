import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cartList, setCartList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    emailValidation: "",
  });

  //Check if it is already in the cart
  const existOnCart = (newProduct) =>
    cartList.findIndex((p) => p.id === newProduct.id);

  //Add to Cart
  const addToCart = (newProduct) => {
    let index = existOnCart(newProduct);
    if (index > -1) {
      cartList[index].qty = cartList[index].qty + newProduct.qty;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, newProduct]);
    }
  };

  //Empty cart
  const emptyCart = () => {
    setCartList([]);
  };

  //Remove 1 product
  const removeProductById = (productId) => {
    let index = existOnCart(productId);
    cartList.splice(index, 1);
    setCartList([...cartList]);
  };

  //Get the total price
  const totalPrice = () =>
    cartList.reduce(
      (prev, act) => Math.round((prev + act.qty * act.price) * 100) / 100,
      0
    );

  //Get the total quantity
  const totalQty = () =>
    cartList.reduce((acumulador, actual) => acumulador + actual.qty, 0);

  //Show form changes
  const handlerOnChange = (e) => {
    e.target.name;
    e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Create Order on submit
  const createOrder = async (e) => {
    e.preventDefault();
    const order = {};
    if (
      validator.equals(formData.email, formData.emailValidation) &&
      !validator.isEmpty(formData.email) &&
      !validator.isEmpty(formData.name) &&
      !validator.isEmpty(formData.phone)
    ) {
      order.buyer = formData;
      order.items = cartList.map(({ id, name, price }) => ({
        id,
        name,
        price,
      }));
      order.total = totalPrice();

      const db = getFirestore();
      const orderCollections = collection(db, "orders");
      const addOrder = await addDoc(orderCollections, order).finally(() => {
        emptyCart();
        setFormData({
          name: "",
          phone: "",
          email: "",
          emailValidation: "",
        });
      });
      navigate(`/thank-you/${addOrder.id}`);
    } else {
      alert(
        "Por favor llena todos los campos y verifica que tu correo sea el mismo en ambos campos"
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        formData,
        addToCart,
        emptyCart,
        removeProductById,
        totalPrice,
        totalQty,
        setFormData,
        handlerOnChange,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
