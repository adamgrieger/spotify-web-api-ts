export class Http {
  private accessToken: string;

  public constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

  public setAccessToken(accessToken: string): void {
    this.accessToken = accessToken;
  }

  public async get<T>(url: string, config?: {}): Promise<T> {
    return null as unknown as T;
  }

  public async post<T>(url: string, config?: {}): Promise<T> {
    return null as unknown as T;
  }

  public async put<T>(url: string, config?: {}): Promise<T> {
    return null as unknown as T;
  }

  public async delete<T>(url: string, config?: {}): Promise<T> {
    return null as unknown as T;
  }
}
