import {GET_USER_THEME_CONFIG} from "./types";

import AuthService from '../../components/auth/AuthService';

interface IDispatch {
    data: any;
    type: string;
}

export async function fetchUserThemeConfig(dispatch: (object: IDispatch) => void) {
    const auth = new AuthService();

    const themes = await auth.fetch('api/user-themes', {});

    dispatch({
        data: themes,
        type: GET_USER_THEME_CONFIG
    });
}
