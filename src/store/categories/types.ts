// Describing the shape of the system's slice of state
export interface IAddCategoryState {
    category: object;
}

// Describing the different ACTION NAMES available
export const ADD_CATEGORY = "ADD_CATEGORY";

interface IAddCategoryAction {
    type: typeof ADD_CATEGORY;
    payload: IAddCategoryState;
}

export type SystemActionTypes = IAddCategoryAction;
