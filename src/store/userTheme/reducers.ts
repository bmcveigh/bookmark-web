import {GET_USER_THEME_CONFIG} from "./types";

interface ISiteConfigTypes {
    data: any;
}

interface IUserThemeConfigAction {
    data: any;
    type: string;
}

const initialState: ISiteConfigTypes = {
    data: {},
};

export function userThemeReducer(
    state = initialState,
    action: IUserThemeConfigAction
): any {
    switch (action.type) {
        case GET_USER_THEME_CONFIG: {
            return {
                ...state,
                data: action
            };
        }

        default:
            return state;
    }
}
