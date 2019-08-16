import {AUTHENTICATE_USER, FETCH_USER_PROFILE} from "./types";

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

        default:
            return state;
    }
}
