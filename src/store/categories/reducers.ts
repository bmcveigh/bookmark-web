import {ADD_CATEGORY, GET_CATEGORIES, ICategoryTypes} from "./types";

const initialState: ICategoryTypes = {
  isAddCategoryFormVisible: false
};

export function categoryReducer(
    state = initialState,
    action: ICategoryTypes
): any {
  switch (action.type) {
    case ADD_CATEGORY: {
      return {
        ...state,
        isAddCategoryFormVisible: action.isAddCategoryFormVisible
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
