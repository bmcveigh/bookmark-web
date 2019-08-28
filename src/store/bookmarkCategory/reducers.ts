import {
    ADD_BOOKMARK_CATEGORY, IBookmarkCategoryAction,
} from "./types";

const initialState: {} = {};

export function bookmarkCategory(
    state: any = initialState,
    action: IBookmarkCategoryAction,
): any {
    switch (action.type) {
        case ADD_BOOKMARK_CATEGORY: {
            return {
                ...state,
                action,
            };
        }

        default:
            return state;
    }
}
