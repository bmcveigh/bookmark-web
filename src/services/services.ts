import AuthService from "./auth/AuthService";

export abstract class Services {
    public static authService(): AuthService {
        if (!Services.Auth) {
            Services.Auth = new AuthService();
        }
        return Services.Auth;
    }

    protected static Auth: AuthService;
}
