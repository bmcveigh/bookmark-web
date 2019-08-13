import {GET_USER_THEME_CONFIG} from "./types";

interface IDispatch {
    data: any;
    type: string;
}

export function fetchUserThemeConfig(dispatch: (object: IDispatch) => void) {
    const API_URL = 'http://bookmark-api.docksal';

    fetch(`${API_URL}/api/user-themes`)
        .then(response => response.json().then(json => ({json, response})))
        .then((value) => {
            dispatch({
                data: value,
                type: GET_USER_THEME_CONFIG
            });
        });
}
