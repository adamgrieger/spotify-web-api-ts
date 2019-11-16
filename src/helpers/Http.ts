import axios, { AxiosRequestConfig } from "axios";
import { constructAxiosConfig } from "./constructAxiosConfig";

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
    return axios.get<T>(url, {
      ...constructAxiosConfig(this.accessToken),
      ...config
    });
  }
}
