import AuthService from '../../components/auth/AuthService';

export async function authenticateUser(username: string, password: string) {
    (new AuthService()).login(username, password);
}
