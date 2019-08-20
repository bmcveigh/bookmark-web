import AuthService from '../../components/auth/AuthService';
import {USER_SET_IF_LOGGED_IN} from "./types";

export async function authenticateUser(username: string, password: string) {
    (new AuthService()).login(username, password);
}

export async function fetchUserProfile() {
    return await (new AuthService()).fetch('api/v1/me');
}

export function setIsUserLoggedIn(isLoggedIn: boolean) {
    return {
        data: isLoggedIn,
        type: USER_SET_IF_LOGGED_IN,
    };
}
