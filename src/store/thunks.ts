import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { AppState } from "./index";

import {flagNewCategory, getCategories} from "./categories/actions";

export const thunkGetCategories = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    dispatch(getCategories());
};

export const thunkAddCategory = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    dispatch(flagNewCategory());
};
