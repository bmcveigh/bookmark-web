import {GET_USER_THEME_CONFIG} from "./types";

import store from '../index';

export function getUserThemeConfig() {
    const API_URL = 'http://bookmark-api.docksal';

    return fetch(`${API_URL}/api/bookmark_api_user_theme/bookmark_api_user_theme`)
        .then(response => response.json().then(json => ({ json, response })))
        .then((value) => {
            store().dispatch({
                data: value,
                type: GET_USER_THEME_CONFIG
            });
        });
}
