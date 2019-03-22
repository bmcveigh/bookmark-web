import {ADD_CATEGORY, CategoryTypes, GET_CATEGORIES, ICategoriesState} from "./types";

const initialState: ICategoriesState = {
  categoryReducer: {}
};

export function categoryReducer(
    state = initialState,
    action: CategoryTypes
): ICategoriesState {
  switch (action.type) {
    case ADD_CATEGORY: {
      return {
        ...state,
        ...action.isAddCategoryFormVisible
      };
    }
    case GET_CATEGORIES: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
