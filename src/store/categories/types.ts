// Describing the shape of the system's slice of state
export interface IAddCategoryState {
    category: object;
}

// Describing the different ACTION NAMES available
export const ADD_CATEGORY = "ADD_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";

interface ICategoryAction {
    type: typeof ADD_CATEGORY | typeof GET_CATEGORIES;
    payload: IAddCategoryState;
}

export type CategoryTypes = ICategoryAction;
