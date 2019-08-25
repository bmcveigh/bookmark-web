import {USER_SET_IF_LOGGED_IN} from "./types";

import { Services } from 'src/services/services';

export async function authenticateUser(username: string, password: string) {
    Services.authService().login(username, password);
}

export async function fetchUserProfile() {
    return await Services.authService().fetch('api/v1/me');
}

export function setIsUserLoggedIn(isLoggedIn: boolean) {
    return {
        data: isLoggedIn,
        type: USER_SET_IF_LOGGED_IN,
    };
}
