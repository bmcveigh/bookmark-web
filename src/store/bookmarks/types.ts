// Describing the different ACTION NAMES available
export const ADD_BOOKMARK_SPACE = "ADD_BOOKMARK_SPACE";
export const DELETE_BOOKMARK_SPACE = "DELETE_BOOKMARK_SPACE";
export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const LOAD_BOOKMARKS = "LOAD_BOOKMARK";

export interface IBookmarkTypes {
    type: string;
    bookmark: {
        href: string;
        label: string;
    };
    bookmarks: any;
}
