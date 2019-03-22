import {ADD_BOOKMARK, IBookmarkTypes} from "./types";

const initialState: {} = {

};

export function bookmarkReducer(
    state = initialState,
    action: IBookmarkTypes
): any {
  switch (action.type) {
    case ADD_BOOKMARK: {
      return {
        ...state,
        bookmark: action.bookmark
      };
    }
    default:
      return state;
  }
}
