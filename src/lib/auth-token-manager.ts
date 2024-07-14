import EventBus, {
  EventType,
  LoginCancelledEvent,
  LoginFailedEvent,
  LoginSuccessEvent,
  OpenLoginModalEvent,
  Event,
} from "./events/event";
import { AuthToken } from "./jwt-token";
import TokenExchangeService from "@/lib/services/token-exchange-service";
import TokenStorage from "@/lib/services/token-storage";
import ConfigStorage from "@/lib/config-storage";

export default class AuthTokenManager {
  protected static instance: AuthTokenManager;
  protected tokenStorage: TokenStorage = TokenStorage.getInstance();

  private constructor() {
  }

  public static getInstance(): AuthTokenManager {
    if (!AuthTokenManager.instance) {
      AuthTokenManager.instance = new AuthTokenManager();
    }
    return AuthTokenManager.instance;
  }

  protected async getExchangeService(): Promise<TokenExchangeService> {
    const endpoint = await ConfigStorage.getInstance().get<string>(
        ConfigStorage.KEY_BACKEND_URL
    );
    return new TokenExchangeService(endpoint);
  }

  /**
   * Try to refresh token. If success or token already not expired, return a valid access token. If failed to
   * refresh token, return null;
   */
  public async tryRefreshingToken(): Promise<string | null> {
    const exchangeService = await this.getExchangeService();
    const authToken = this.tokenStorage.getAuthToken();
    if (authToken.isAccessTokenValid() && await exchangeService.healthCheck(authToken.accessToken)) {
      return authToken.accessToken;
    }
    if (authToken.isRefreshTokenValid()) {
      let newToken = null;
      try {
        newToken = await exchangeService.refreshToken(authToken.refreshToken);
      } catch (e) {
        return null;
      }
      this.tokenStorage.setAuthToken(newToken)
      return newToken.accessToken;
    }
    return null;
  }

  public async getAccessToken(): Promise<string> {
    const accessToken = await this.tryRefreshingToken();
    if (accessToken !== null) {
      return accessToken;
    }

    return this.interactiveLogin();
  }

  public async interactiveLogin(): Promise<string> {
    const authToken = await AuthTokenManager.askApiKeyAndLogin();
    this.tokenStorage.setAuthToken(authToken)
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
