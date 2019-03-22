import store from '..';

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

export function loadBookmarks() {
  store().dispatch({
    bookmarks: [{
        href: '#',
        label: 'Item 1'
      },
      {
        href: '#',
        label: 'Item 1'
      },
      {
        href: '#',
        label: 'Item 1'
      }
    ],
    type: LOAD_BOOKMARKS
  });
}
