import { MockData } from "./MockData";
import {
  getFirestore,
  doc,
  getDoc,
  query,
  collection,
  getDocs,
  where,
} from "firebase/firestore";

const getProducts = async () => {
  try {
    const db = getFirestore();
    const queryCollections = collection(db, "products");
    return queryCollections;
  } catch (err) {
    console.log(err);
  }
};

const getAllProducts = async (setState) => {
  try {
    const res = await getDocs(await getProducts());
    const products = [];
    res.docs.map((p) => {
      products.push({
        id: p.id,
        ...p.data(),
      });
    });
    setState(products);
  } catch (err) {
    console.log(err);
  }
};

const findProductById = async (productId, setState) => {
  try {
    const db = getFirestore();
    const query = doc(db, "products", productId);
    getDoc(query)
      .then((res) => setState({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

const findProductsByCategory = async (productCat, setState) => {
  try {
    const queryFilter = query(
      await getProducts(),
      where("catId", "==", productCat)
    );
    const res = await getDocs(queryFilter);
    const products = [];
    res.docs.map((p) =>
      products.push({
        id: p.id,
        ...p.data(),
      })
    );
    console.log(`findProductsByCategory: ${products}`);
    setState(products);
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

export { getAllProducts, findProductById, findProductsByCategory, getProducts };
