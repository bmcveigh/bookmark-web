import store from '..';

import {ADD_BOOKMARK} from "./types";

export function addBookmark() {
  store().dispatch({
    bookmark: {
      href: '#',
      label: 'Item'
    },
    type: ADD_BOOKMARK,
  });
}
