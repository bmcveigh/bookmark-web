import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { AppState } from "./index";
import {getSiteConfig} from "./siteConfig/actions";

export const thunkGetSiteConfig = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    dispatch(getSiteConfig());
};
