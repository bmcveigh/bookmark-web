// Describing the different ACTION NAMES available
export const ADD_BOOKMARK_SPACE = "ADD_BOOKMARK_SPACE";
export const DELETE_BOOKMARK_SPACE = "DELETE_BOOKMARK_SPACE";
export const ADD_BOOKMARKS = "ADD_BOOKMARKS";
export const LOAD_BOOKMARKS = "LOAD_BOOKMARK";

export interface IBookmarkTypes {
    type: string;
    bookmark: IBookmark;
    bookmarks: any;
}

export interface IBookmark {
    title: string;
    id?: string | number;
    uri: string;
}

export interface IAddBookmarksPayload {
    categoryId: string | number;
    data: [{
        meta: {
            link: IBookmark;
            notes: string;
        };
    }];
}
