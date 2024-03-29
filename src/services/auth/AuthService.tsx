import * as decode from 'jwt-decode';
import {getSiteConfig} from "../../store/siteConfig/actions";

/**
 * @see https://hptechblogs.com/using-json-web-token-react/
 */

export default class AuthService {
    protected domain: string;

    protected siteConfig: any;

    // Initializing important variables
    constructor() {
        this.siteConfig = getSiteConfig();
        this.domain = this.siteConfig.data.api.baseUrl;
        this.fetch = this.fetch.bind(this); // React binding stuff
        this.login = this.login.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    public async login(username: string, password: string) {
        // Get a token from api server using the fetch api
        // todo: put this request in redux.
        const formData = new FormData();

        formData.append('grant_type', 'password');
        formData.append('client_id', this.siteConfig.data.api.clientId);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('scope', 'client_basic');

        const params = {method: 'POST', body: formData};

        return await this.fetch('oauth/token', params)
            .catch(error => error)
            .then((res: any) => {
            this.setToken(res.access_token); // Setting the token in localStorage
            return Promise.resolve(res);
        });
    }

    public loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token); // handwaiving here
    }

    public isTokenExpired(token: string) {
        try {
            const decoded: any = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else {
                return false;
            }
        }
        catch (err) {
            return false;
        }
    }

    public setToken(idToken: string) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    public getToken(): string {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token') || '';
    }

    public logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }

    public getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }


    public async fetch(endpoint: string, options?: any) {
        options = options || {};
        const API_URL = getSiteConfig().data.api.baseUrl;

        // performs api calls sending the required authentication headers
        const headers: Headers = options.headers || new Headers();

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers.append('Authorization', 'Bearer ' + this.getToken());
            headers.append('client_id', getSiteConfig().data.api.clientId);
            headers.append('scope', 'authenticated, basic_user');
            headers.append('Access-Control-Allow-Origin', window.location.href);
            headers.append('Access-Control-Allow-Credentials', 'true');
        }

        return await fetch(`${API_URL}/${endpoint}`, {
            headers,
            ...options
        })
            .then(res => res.json())
            .then(response => response)
            .catch(error => error);
    }
}
