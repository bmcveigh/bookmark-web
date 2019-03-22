// Describing the shape of the system's slice of state
export interface ICategoriesState {
    categoryReducer: object;
}

// Describing the different ACTION NAMES available
export const ADD_CATEGORY = "ADD_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";

interface ICategoryAction {
    type: typeof ADD_CATEGORY | typeof GET_CATEGORIES;
    isAddCategoryFormVisible: ICategoriesState;
    payload: [];
}

export interface ICategoryData {
    label: string;
    href: string;
}

export type CategoryTypes = ICategoryAction;