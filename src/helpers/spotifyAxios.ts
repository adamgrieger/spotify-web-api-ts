import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type Method,
} from 'axios';
import qs from 'qs';

import { BASE_API_URL } from '../constants';

export type SpotifyAxiosConfig = AxiosRequestConfig & { contentType?: string };

export async function spotifyAxios<T>(
  url: string,
  method: Method,
  accessToken: string,
  config?: SpotifyAxiosConfig,
): Promise<T> {
  try {
    const { contentType, ...axiosConfig } = config ?? {};
    const response = await axios({
      ...axiosConfig,
      baseURL: BASE_API_URL,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': contentType ?? 'application/json',
      },
      paramsSerializer,
      url,
      method,
    });

    return response.data as T;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
}

export function paramsSerializer(params: unknown): string {
  return qs.stringify(params, { arrayFormat: 'comma' });
}
