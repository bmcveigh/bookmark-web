import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { getCategories } from "./categories/actions";
import { AppState } from "./index";

export const thunkGetCategories = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    dispatch(getCategories());
};
