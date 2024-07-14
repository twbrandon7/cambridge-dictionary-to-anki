import {AuthToken} from "@/lib/jwt-token";

export default class TokenStorage {
    protected static instance: TokenStorage;

    public static getInstance(): TokenStorage {
        if (!TokenStorage.instance) {
            TokenStorage.instance = new TokenStorage();
        }
        return TokenStorage.instance;
    }

    private accessToken: string | null = null;
    private refreshToken: string | null = null;

    public setRefreshToken(refreshToken: string): void {
        this.refreshToken = refreshToken;
        window.localStorage.setItem("refreshToken", refreshToken);
    }

    public getRefreshToken(): string | null {
        if (this.refreshToken === null) {
            this.refreshToken = window.localStorage.getItem("refreshToken");
        }
        return this.refreshToken;
    }

    public setAccessToken(accessToken: string): void {
        this.accessToken = accessToken;
        window.localStorage.setItem("accessToken", accessToken);
    }

    public getAccessToken(): string | null {
        if (this.accessToken === null) {
            this.accessToken = window.localStorage.getItem("accessToken");
        }
        return this.accessToken;
    }

    public setAuthToken(authToken: AuthToken): void {
        this.setAccessToken(authToken.accessToken);
        this.setRefreshToken(authToken.refreshToken);
    }

    public getAuthToken(): AuthToken {
        return new AuthToken(this.getAccessToken(), this.getRefreshToken());
    }
}
