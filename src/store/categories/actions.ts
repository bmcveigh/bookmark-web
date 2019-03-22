import {ADD_CATEGORY, GET_CATEGORIES, ICategoriesState} from "./types";

export function addCategory(category: ICategoriesState) {
  return {
    payload: category,
    type: ADD_CATEGORY
  };
}

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
