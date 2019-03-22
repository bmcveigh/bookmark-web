// Describing the different ACTION NAMES available
export const ADD_CATEGORY = "ADD_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";

export interface ICategoryData {
    label: string;
    href: string;
}

export interface ICategoryTypes {
    categoryReducer?: any;
    type?: typeof ADD_CATEGORY | typeof GET_CATEGORIES;
    isAddCategoryFormVisible: boolean;
    payload?: [];
}
