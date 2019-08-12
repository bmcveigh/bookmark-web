import {GET_USER_THEME_CONFIG} from "./userTheme/types";

const API_URL = 'http://bookmark-api.docksal';

export const thunkGetThemeConfig = (dispatcher: (object: any) => void) => {
    fetch(`${API_URL}/api/bookmark_api_user_theme/bookmark_api_user_theme`)
        .then(response => response.json().then(json => ({json, response})))
        .then((value) => {
            dispatcher({
                data: value,
                type: GET_USER_THEME_CONFIG
            });
        });
};
