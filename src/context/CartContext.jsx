import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import validator from "validator";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    emailValidation: "",
  });

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

  const handlerOnChange = (e) => {
    e.target.name;
    e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const createOrder = async (e) => {
    e.preventDefault();
    const order = {};
    //Validar formData
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
        addToCart,
        emptyCart,
        removeProductById,
        totalPrice,
        totalQty,
        formData,
        setFormData,
        handlerOnChange,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
