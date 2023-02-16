const updateStock = async () => {
  const order = {};
  order.buyer = {
    name: "Jesus",
    phone: "555555",
    email: "jarrioja2210@gmail.com",
  };
  order.isActive = true;
  order.items = cartList.map(({ id, name, price }) => ({ id, name, price }));
  order.total = totalPrice();

  const db = getFirestore;
  const orderDoc = doc(db, "products", productId);
  await updateDoc(orderDoc, { stock: stock - qty });
  console.log("Stock Actualizado.");
};
