import { combineReducers } from "redux";

import getAllProductsReducer from "./products/get_all_products";
import getAllCategoriesReducer from "./products/get_all_categories";
import getProductsByCategoryReducer from "./products/get_products_by_category";

const allReducers = combineReducers({
  getAllProductsReducer,
  getAllCategoriesReducer,
  getProductsByCategoryReducer,
});

export default allReducers;
