// Describing the different ACTION NAMES available
export const ADD_BOOKMARK = "ADD_BOOKMARK";

export interface IBookmarkTypes {
    type: string;
    bookmark: {
        href: string;
        label: string;
    };
}
