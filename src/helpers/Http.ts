import { type SpotifyAxiosConfig, spotifyAxios } from './spotifyAxios';

export class Http {
  private accessToken: string;

  public constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  public getAccessToken() {
    return this.accessToken;
  }

  public setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  public async get<T>(url: string, config?: SpotifyAxiosConfig) {
    return await spotifyAxios<T>(url, 'GET', this.accessToken, config);
  }

  public async post<T>(url: string, config?: SpotifyAxiosConfig) {
    return await spotifyAxios<T>(url, 'POST', this.accessToken, config);
  }

  public async put<T>(url: string, config?: SpotifyAxiosConfig) {
    return await spotifyAxios<T>(url, 'PUT', this.accessToken, config);
  }

  public async delete<T>(url: string, config?: SpotifyAxiosConfig) {
    return await spotifyAxios<T>(url, 'DELETE', this.accessToken, config);
  }
}
