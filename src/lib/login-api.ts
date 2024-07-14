import ConfigStorage from "./config-storage";
import { AuthToken } from "./jwt-token";


export async function login(key: string): Promise<AuthToken> {
  const endpoint = await ConfigStorage.getInstance().get<string>(
    ConfigStorage.KEY_BACKEND_URL
  );
  const apiUrl = new URL("/api/v1/login", endpoint);
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

export async function refreshToken(refreshToken: string): Promise<AuthToken> {
  const endpoint = await ConfigStorage.getInstance().get<string>(
    ConfigStorage.KEY_BACKEND_URL
  );
  const apiUrl = new URL("/api/v1/refresh", endpoint);
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