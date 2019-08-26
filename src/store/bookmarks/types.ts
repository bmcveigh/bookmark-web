// Describing the different ACTION NAMES available
export const ADD_BOOKMARK_SPACE = "ADD_BOOKMARK_SPACE";
export const DELETE_BOOKMARK_SPACE = "DELETE_BOOKMARK_SPACE";
export const ADD_BOOKMARK_CATEGORY = "ADD_BOOKMARK_CATEGORY";
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

export interface IBookmarkSpace {
    internalId: string | number;
    name: string;
    description: string;
}

export interface IBookmarkCategory {
    bookmarks: IBookmark[];
    name: string;
    description: string;
}

export interface IBookmark {
    href: string;
    id: string | number;
    label: string;
}
