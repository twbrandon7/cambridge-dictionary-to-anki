export interface JwtPayload {
  iss: string;
  iat: number;
  exp: number;
  type: string;
}

export class AuthToken {
  constructor(
    public readonly accessToken: string,
    public readonly refreshToken: string
  ) {}

  public getAccessTokenExpiry(): Date | null {
    const payload = this.getAccessJwtPayload();
    if (payload === null) {
      return null;
    }
    return new Date(payload.exp * 1000);
  }

  public getRefreshTokenExpiry(): Date | null {
    const payload = this.getRefreshJwtPayload();
    if (payload === null) {
      return null;
    }
    return new Date(payload.exp * 1000);
  }

  public isAccessTokenValid(): boolean {
    const expiry = this.getAccessTokenExpiry();
    return expiry !== null && expiry > new Date();
  }

  public isRefreshTokenValid(): boolean {
    const expiry = this.getRefreshTokenExpiry();
    return expiry !== null && expiry > new Date();
  }

  protected getAccessJwtPayload(): JwtPayload | null {
    return AuthToken.parseJwt(this.accessToken) as JwtPayload;
  }

  protected getRefreshJwtPayload(): JwtPayload | null {
    return AuthToken.parseJwt(this.refreshToken) as JwtPayload;
  }

  protected static parseJwt(token: string): object | null {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  }
}
