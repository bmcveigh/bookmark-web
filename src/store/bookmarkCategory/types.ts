// Describing the different ACTION NAMES available
import {IBookmark} from "../bookmarks/types";

export const ADD_BOOKMARK_CATEGORY = "ADD_BOOKMARK_CATEGORY";

export interface IBookmarkCategory {
    bookmarks: IBookmark[];
    id: string | number;
    name: string;
    description: string;
}

export interface IBookmarkCategoryAction {
    data: IBookmarkCategory;
    type: string;
}
