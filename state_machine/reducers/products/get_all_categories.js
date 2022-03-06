import { GET_ALL_CATEGORIES } from "../../actions/action_types";

const getAllCategoriesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return action.payload;

    default:
      return state;
  }
};

export default getAllCategoriesReducer;
