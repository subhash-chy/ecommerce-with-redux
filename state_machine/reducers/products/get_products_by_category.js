import { GET_PRODUCTS_BY_CATEGORY } from "../../actions/action_types";

const getProductsByCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS_BY_CATEGORY:
      return action.payload;

    default:
      return state;
  }
};

export default getProductsByCategoryReducer;
