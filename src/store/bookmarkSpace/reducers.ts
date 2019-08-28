import {
    ADD_BOOKMARK_SPACE,
    DELETE_BOOKMARK_SPACE, IBookmarkSpaceAction,
} from "./types";

const initialState: {} = {};

export function bookmarkSpace(
    state: any = initialState,
    action: IBookmarkSpaceAction
): any {
    switch (action.type) {
        case ADD_BOOKMARK_SPACE:
        case DELETE_BOOKMARK_SPACE: {
            return {
                ...state,
                action,
            };
        }

        default:
            return state;
    }
}
