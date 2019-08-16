import AuthService from '../../components/auth/AuthService';

export async function authenticateUser(username: string, password: string) {
    (new AuthService()).login(username, password);
}

export async function fetchUserProfile() {
    return await (new AuthService()).fetch('/api/v1/me');
}
