import {
    ADD_BOOKMARK_SPACE,
    ADD_BOOKMARKS,
    DELETE_BOOKMARK_SPACE,
    IBookmarkTypes,
    LOAD_BOOKMARKS
} from "./types";

const initialState: {} = {};

export function bookmark(
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

        case ADD_BOOKMARKS: {
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
