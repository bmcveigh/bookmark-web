import { ADD_CATEGORY, IAddCategoryState } from "./types";

export function addCategory(category: IAddCategoryState) {
  return {
    payload: category,
    type: ADD_CATEGORY
  };
}
