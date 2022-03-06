import { GET_ALL_PRODUCTS } from "../../actions";

const initialState = [];

const getAllProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default getAllProductsReducer;
