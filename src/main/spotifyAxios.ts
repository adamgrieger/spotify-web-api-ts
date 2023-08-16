import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

let spotifyAxios: SpotifyAxios;

export class SpotifyAxios {
  public axiosInstance: AxiosInstance;

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
}

export const getSpotifyAxios = (config?: AxiosRequestConfig): SpotifyAxios => {
  if (!spotifyAxios) {
    spotifyAxios = new SpotifyAxios(config);
  }

  return spotifyAxios;
};
