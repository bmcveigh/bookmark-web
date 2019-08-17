import store from '..';
import AuthService from "../../components/auth/AuthService";

import {ADD_BOOKMARK, LOAD_BOOKMARKS} from "./types";

export function addBookmark() {
  store().dispatch({
    bookmark: {
      href: '#',
      label: 'Item'
    },
    type: ADD_BOOKMARK
  });
}

export async function fetchBookmarks() {
  return {
    data: await new AuthService().fetch('api/v1/my-bookmarks'),
    type: LOAD_BOOKMARKS
  };
}
