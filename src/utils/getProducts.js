import { MockData } from "./MockData";
import { getFirestore, doc, getDoc, query } from "firebase/firestore";

const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(MockData), 2000);
  });
};

const getAllProducts = async (setState) => {
  try {
    const products = await getProducts();
    console.log(products);
    setState(products);
  } catch (err) {
    console.log(err);
  }
};

const findById = (productId, array) => array.find((p) => p.id === productId);
const findProductById = async (productId, setState) => {
  try {
    const products = await getProducts();
    setState(findById(productId, products));
  } catch (err) {
    console.log(err);
  }
};

const findByCategory = (productCat, array) => {
  let products = array.filter((p) => p.catId === productCat);
  return products;
};

const findProductsByCategory = async (productCat, setState) => {
  try {
    const products = await getProducts();
    setState(findByCategory(productCat, products));
  } catch (err) {
    console.log(err);
  }
};

// Producto individual.

//   const db = getFirestore();
//   const query = doc(db, "products", "CapfnAB3aIEUslrPGshr");
//   getDoc(query)
//     .then(
//       (res) => setProduct({id: res.id, ...res.data()})
//       //([])
//     )
//     .catch((err) => console.log(err));

// Todos

//   const db = getFirestore();
//   const queryCollections = collection(db, "products");
//   getDocs(queryCollections).then((res) =>
//     setProducts(res.docs.map((p) => ({ id: res.id, ...res.data() })))
//   ).catch((err) => console.log(err));

//Todos filtrados

// const db = getFirestore();
// const queryCollections = collection(db, "products");
// const queryFilter = query(queryCollections, where("catId", "===", catId));
// getDocs(queryFilter)
//   .then((res) =>
//     setProducts(res.docs.map((p) => ({ id: p.id, ...p.data() })))
//   )
//   .catch((err) => console.log(err));

export { getAllProducts, findProductById, findProductsByCategory };
