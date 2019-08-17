import {AUTHENTICATE_USER, FETCH_USER_PROFILE, USER_SET_IF_LOGGED_IN} from "./types";

interface ISiteConfigTypes {
    data: any;
    isUserLoggedIn: boolean;
}

interface IUserThemeConfigAction {
    data: any;
    type: string;
}

const initialState: ISiteConfigTypes = {
    data: {},
    isUserLoggedIn: false,
};

export function userLoginReducer(
    state = initialState,
    action: IUserThemeConfigAction
): any {
    switch (action.type) {
        case AUTHENTICATE_USER: {
            return {
                ...state,
                data: action
            };
        }

        case FETCH_USER_PROFILE: {
            return action.data;
        }

        case USER_SET_IF_LOGGED_IN: {
            return {
                ...state,
                isUserLoggedIn: action.data,
            };
        }

        default:
            return state;
    }
}
