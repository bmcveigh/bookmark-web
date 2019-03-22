import {ADD_CATEGORY, CategoryTypes, GET_CATEGORIES, IAddCategoryState} from "./types";

const initialState: IAddCategoryState = {
  category: {}
};

export function categoryReducer(
    state = initialState,
    action: CategoryTypes
): IAddCategoryState {
  switch (action.type) {
    case ADD_CATEGORY: {
      return {
        ...state,
        ...action.payload
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
