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
    getDoc(query).then((res) => setState({ id: res.id, ...res.data() }));
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
    setState(products);
  } catch (err) {
    console.log(err);
  }
};

const getCategoryName = async (productCat, setState) => {
  try {
    if (productCat === "") {
      setState("");
    } else {
      const queryFilter = query(
        await getProducts(),
        where("catId", "==", productCat)
      );
      const res = await getDocs(queryFilter);
      res.docs.map((c) => {
        setState(c.data().categoryName);
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export {
  getAllProducts,
  findProductById,
  findProductsByCategory,
  getProducts,
  getCategoryName,
};
