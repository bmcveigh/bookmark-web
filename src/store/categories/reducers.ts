import { ADD_CATEGORY, IAddCategoryState, SystemActionTypes } from "./types";

const initialState: IAddCategoryState = {
  category: {}
};

export function categoryReducer(
    state = initialState,
    action: SystemActionTypes
): IAddCategoryState {
  switch (action.type) {
    case ADD_CATEGORY: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
