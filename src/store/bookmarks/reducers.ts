import {ADD_BOOKMARK, ADD_BOOKMARK_SPACE, DELETE_BOOKMARK_SPACE, IBookmarkTypes, LOAD_BOOKMARKS} from "./types";

const initialState: {} = {};

export function bookmarkReducer(
    state: any = initialState,
    action: IBookmarkTypes
): any {
    switch (action.type) {
        case ADD_BOOKMARK_SPACE:
        case DELETE_BOOKMARK_SPACE: {
            return {
                ...state,
                action,
            };
        }

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
