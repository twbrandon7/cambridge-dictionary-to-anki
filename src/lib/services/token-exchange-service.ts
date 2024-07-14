import { AuthToken } from "../jwt-token";

export default class TokenExchangeService {
  constructor(private readonly endpoint: string) {}

  public async login(key: string) {
    const apiUrl = new URL("/api/v1/login", this.endpoint);
    const response = await fetch(apiUrl.toString(), {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        key: key,
      }),
    });
    if (!response.ok) {
      throw new Error("An error occurred while sending the request.");
    }
    const data = await response.json();
    if (!data.accessToken || !data.refreshToken) {
      throw new Error("Invalid response from server.");
    }
    return new AuthToken(data.accessToken, data.refreshToken);
  }

  public async refreshToken(refreshToken: string) {
    const apiUrl = new URL("/api/v1/refresh", this.endpoint);
    const response = await fetch(apiUrl.toString(), {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        refreshToken: refreshToken,
      }),
    });
    if (!response.ok) {
      throw new Error("An error occurred while sending the request.");
    }
    const data = await response.json();
    if (!data.accessToken || !data.refreshToken) {
      throw new Error("Invalid response from server.");
    }
    return new AuthToken(data.accessToken, data.refreshToken);
  }

  public async healthCheck(accessToken: string): Promise<boolean> {
    const apiUrl = new URL("/api/v1/health", this.endpoint);
    let response = null;
    try {
      response = await fetch(apiUrl.toString(), {
        method: "GET",
        headers: new Headers({ "x-access-token": accessToken }),
      });
    } catch (e) {
      return false;
    }
    return response.ok;
  }
}
