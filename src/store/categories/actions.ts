import {ADD_CATEGORY, GET_CATEGORIES} from "./types";

export function getCategories() {
  return {
    payload: [
      {
        bookmarks: [
          {
            label: 'Google',
            url: '#'
          }
        ],
        label: 'Tech Companies'
      },
      {
        bookmarks: [
          {
            label: 'Google',
            url: '#'
          }
        ],
        label: 'Sports'
      }
    ],
    type: GET_CATEGORIES
  };
}

export function flagNewCategory() {
    return {
        isAddCategoryFormVisible: true,
        type: ADD_CATEGORY,
    };
}
