import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type RawAxiosRequestHeaders,
} from 'axios';
import qs from 'qs';

// import { BASE_API_URL } from '../constants';

export type SpotifyAxiosConfig = AxiosRequestConfig & {
  contentType?: RawAxiosRequestHeaders['Content-Type'];
};

// export async function spotifyAxios<T>(
//   url: string,
//   method: Method,
//   accessToken: string,
//   config?: SpotifyAxiosConfig,
// ): Promise<T> {
//   try {
//     const { contentType, ...axiosConfig } = config ?? {};
//     const response = await axios({
//       ...axiosConfig,
//       baseURL: BASE_API_URL,
//       headers: {
//         'Authorization': `Bearer ${accessToken}`,
//         'Content-Type': contentType ?? 'application/json',
//       },
//       paramsSerializer,
//       url,
//       method,
//     });

//     return response.data as T;
//   } catch (error) {
//     const err = error as AxiosError;
//     throw new Error(err.message);
//   }
// }

export function paramsSerializer(params: unknown): string {
  return qs.stringify(params, { arrayFormat: 'comma' });
}

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
