import {callApi} from "../index";
import {AUTHENTICATE_USER} from "./types";

export async function authenticateUser(username: string, password: string) {
    // todo: put this request in redux.
    const formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('client_id', '8c730f21-4d34-42ea-aba6-e26f8470beb4');
    formData.append('username', username);
    formData.append('password', password);
    formData.append('scope', 'authenticated');

    const data = await callApi('oauth/token', {
        body: formData,
        method: 'POST',
    })
        .catch(error => error)
        .then((res) => res);

    return {
       data,
       type: AUTHENTICATE_USER,
    };
}
