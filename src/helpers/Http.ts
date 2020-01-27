import { AxiosRequestConfig } from "axios";
import { spotifyAxios } from "./spotifyAxios";

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

  get<T>(url: string, config?: AxiosRequestConfig) {
    return spotifyAxios<T>(url, "GET", this.accessToken, config);
  }

  post<T>(url: string, config?: AxiosRequestConfig) {
    return spotifyAxios<T>(url, "POST", this.accessToken, config);
  }

  put<T>(url: string, config?: AxiosRequestConfig) {
    return spotifyAxios<T>(url, "PUT", this.accessToken, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return spotifyAxios<T>(url, "DELETE", this.accessToken, config);
  }
}
