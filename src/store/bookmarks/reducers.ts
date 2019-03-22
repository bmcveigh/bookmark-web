import {ADD_BOOKMARK, IBookmarkTypes, LOAD_BOOKMARKS} from "./types";

const initialState: {} = {
  bookmark: {},
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
  ]
};

export function bookmarkReducer(
    state: any = initialState,
    action: IBookmarkTypes
): any {
  switch (action.type) {
    case ADD_BOOKMARK: {
      return {
        ...state,
        bookmarks: action.bookmarks
      };
    }
    case LOAD_BOOKMARKS: {
      return {
        ...state,
        bookmarks: action.bookmarks
      };
    }
    default:
      return state;
  }
}
