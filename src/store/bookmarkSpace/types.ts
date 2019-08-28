// Describing the different ACTION NAMES available
export const ADD_BOOKMARK_SPACE = "ADD_BOOKMARK_SPACE";
export const DELETE_BOOKMARK_SPACE = "DELETE_BOOKMARK_SPACE";

export interface IBookmarkSpace {
    internalId: string | number;
    name: string;
    description: string;
}

export interface IBookmarkSpaceAction {
    data: IBookmarkSpace;
    type: string;
}
