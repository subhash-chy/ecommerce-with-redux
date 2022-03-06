import {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
} from "./action_types";

// Getting all the products
export const getAllProducts = (allProducts) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: allProducts,
  };
};

// Getting all the categories
export const getAllCategories = (allCategories) => {
  return {
    type: GET_ALL_CATEGORIES,
    payload: allCategories,
  };
};

// Getting products by categories
export const getProductsByCategories = (products) => {
  return {
    type: GET_PRODUCTS_BY_CATEGORY,
    payload: products,
  };
};
