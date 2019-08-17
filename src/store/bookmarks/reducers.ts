import {ADD_BOOKMARK, IBookmarkTypes, LOAD_BOOKMARKS} from "./types";

const initialState: {} = {};

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
      return action;
    }
    default:
      return state;
  }
}
