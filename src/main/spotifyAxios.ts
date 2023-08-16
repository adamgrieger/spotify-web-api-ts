import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type RawAxiosRequestHeaders,
} from 'axios';

export type SpotifyAxiosConfig = AxiosRequestConfig & {
  contentType?: RawAxiosRequestHeaders['Content-Type'];
};

let spotifyAxios: SpotifyAxios;

export class SpotifyAxios {
  public axiosInstance: AxiosInstance;

  public constructor(config?: SpotifyAxiosConfig) {
    this.axiosInstance = axios.create(config);

    this.axiosInstance.interceptors.request.use((req) => {
      const request = req;
      request.headers['Content-Type'] =
        config?.contentType ?? 'application/json';

      return request;
    });
    this.axiosInstance.interceptors.response.use((res) => {
      return res;
    });
  }
}

export const getSpotifyAxios = (config?: SpotifyAxiosConfig): SpotifyAxios => {
  if (!spotifyAxios) {
    spotifyAxios = new SpotifyAxios(config);
  }

  return spotifyAxios;
};
