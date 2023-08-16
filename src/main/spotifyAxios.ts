import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

import { type OpenAPIConfig } from '../openapi/core/OpenAPI';

let spotifyAxios: SpotifyAxios;

export class SpotifyAxios {
  public axiosInstance: AxiosInstance;

  public apiConfig: Partial<OpenAPIConfig> = {};

  public constructor(config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);

    this.axiosInstance.interceptors.request.use((req) => {
      const request = req;

      return request;
    });

    this.axiosInstance.interceptors.response.use((res) => {
      return res;
    });
  }

  public setApiConfig(config: Partial<OpenAPIConfig>): void {
    this.apiConfig = config;
  }
}

export const getSpotifyAxios = (config?: AxiosRequestConfig): SpotifyAxios => {
  if (!spotifyAxios) {
    spotifyAxios = new SpotifyAxios(config);
  }

  return spotifyAxios;
};
