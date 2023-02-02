import { MockData } from "./MockData";

const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(MockData), 2000);
  });
};

const getAllProducts = async (setState) => {
  try {
    const products = await getProducts();
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
  let products = array.filter((p) => p.slug === productCat);
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

export { getAllProducts, findProductById, findProductsByCategory };
