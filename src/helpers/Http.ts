import { spotifyAxios } from './spotifyAxios';
import { type SpotifyAxiosConfig } from './spotifyAxios';

export class Http {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  getAccessToken() {
    return this.accessToken;
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  async get<T>(url: string, config?: SpotifyAxiosConfig) {
    return await spotifyAxios<T>(url, 'GET', this.accessToken, config);
  }

  async post<T>(url: string, config?: SpotifyAxiosConfig) {
    return await spotifyAxios<T>(url, 'POST', this.accessToken, config);
  }

  async put<T>(url: string, config?: SpotifyAxiosConfig) {
    return await spotifyAxios<T>(url, 'PUT', this.accessToken, config);
  }

  async delete<T>(url: string, config?: SpotifyAxiosConfig) {
    return await spotifyAxios<T>(url, 'DELETE', this.accessToken, config);
  }
}
