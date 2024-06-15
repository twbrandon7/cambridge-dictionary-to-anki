import EventBus, {
  EventType,
  LoginCancelledEvent,
  LoginFailedEvent,
  LoginSuccessEvent,
  OpenLoginModalEvent,
  Event,
} from "./event";
import { AuthToken } from "./jwt-token";
import { refreshToken as refreshTokenApi } from "./login-api";

export default class AuthTokenManager {
  protected static instance: AuthTokenManager;

  public static getInstance(): AuthTokenManager {
    if (!AuthTokenManager.instance) {
      AuthTokenManager.instance = new AuthTokenManager();
    }
    return AuthTokenManager.instance;
  }

  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  private constructor() {}

  protected setRefreshToken(refreshToken: string): void {
    this.refreshToken = refreshToken;
    window.localStorage.setItem("refreshToken", refreshToken);
  }

  protected getRefreshToken(): string | null {
    if (this.refreshToken === null) {
      this.refreshToken = window.localStorage.getItem("refreshToken");
    }
    return this.refreshToken;
  }

  protected setAccessToken(accessToken: string): void {
    this.accessToken = accessToken;
    window.localStorage.setItem("accessToken", accessToken);
  }

  protected getAccessTokenFromStorage(): string | null {
    if (this.accessToken === null) {
      this.accessToken = window.localStorage.getItem("accessToken");
    }
    return this.accessToken;
  }

  public async getAccessToken(): Promise<string> {
    const accessToken = this.getAccessTokenFromStorage();
    const refreshToken = this.getRefreshToken();
    if (refreshToken === null || accessToken === null) {
      return this.userLogin();
    }
    const authToken = new AuthToken(accessToken, refreshToken);

    if (authToken.isAccessTokenValid()) {
      return accessToken;
    }

    if (authToken.isRefreshTokenValid()) {
      const newToken = await refreshTokenApi(refreshToken);
      this.setAccessToken(newToken.accessToken);
      this.setRefreshToken(newToken.refreshToken);
      return newToken.accessToken;
    }

    return this.userLogin();
  }

  protected async userLogin(): Promise<string> {
    const authToken = await AuthTokenManager.askApiKeyAndLogin();
    this.setAccessToken(authToken.accessToken);
    this.setRefreshToken(authToken.refreshToken);
    return authToken.accessToken;
  }

  protected static askApiKeyAndLogin(): Promise<AuthToken> {
    EventBus.getInstance().publish(new OpenLoginModalEvent());
    return new Promise((resolve, reject) => {
      const handleLoginSuccess = (event: Event) => {
        if (!(event instanceof LoginSuccessEvent)) {
          reject("Invalid event");
          return;
        }
        EventBus.getInstance().unsubscribe(
          EventType.LOGIN_SUCCESS,
          handleLoginSuccess
        );
        EventBus.getInstance().unsubscribe(
          EventType.LOGIN_FAILED,
          handleLoginFailed
        );
        EventBus.getInstance().unsubscribe(
          EventType.LOGIN_CANCELLED,
          handleLoginCancelled
        );
        resolve(event.token);
      };

      const handleLoginFailed = (event: Event) => {
        if (!(event instanceof LoginFailedEvent)) {
          reject("Invalid event");
          return;
        }
        EventBus.getInstance().unsubscribe(
          EventType.LOGIN_SUCCESS,
          handleLoginSuccess
        );
        EventBus.getInstance().unsubscribe(
          EventType.LOGIN_FAILED,
          handleLoginFailed
        );
        EventBus.getInstance().unsubscribe(
          EventType.LOGIN_CANCELLED,
          handleLoginCancelled
        );
        reject(event);
      };

      const handleLoginCancelled = (event: Event) => {
        if (!(event instanceof LoginCancelledEvent)) {
          reject("Invalid event");
          return;
        }
        EventBus.getInstance().unsubscribe(
          EventType.LOGIN_SUCCESS,
          handleLoginSuccess
        );
        EventBus.getInstance().unsubscribe(
          EventType.LOGIN_FAILED,
          handleLoginFailed
        );
        EventBus.getInstance().unsubscribe(
          EventType.LOGIN_CANCELLED,
          handleLoginCancelled
        );
        reject(event);
      };

      EventBus.getInstance().subscribe(
        EventType.LOGIN_SUCCESS,
        handleLoginSuccess
      );
      EventBus.getInstance().subscribe(
        EventType.LOGIN_FAILED,
        handleLoginFailed
      );
      EventBus.getInstance().subscribe(
        EventType.LOGIN_CANCELLED,
        handleLoginCancelled
      );
    });
  }
}
