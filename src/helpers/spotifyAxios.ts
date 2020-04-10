import axios, { Method, AxiosRequestConfig, AxiosError } from "axios";
import { BASE_URL } from "../config";

export type SpotifyAxiosConfig = AxiosRequestConfig & { contentType?: string };

export async function spotifyAxios<T>(
  url: string,
  method: Method,
  accessToken: string,
  config?: SpotifyAxiosConfig
) {
  try {
    const { contentType, ...axiosConfig } = config ?? {};
    const response = await axios({
      ...axiosConfig,
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": contentType ?? "application/json"
      },
      url,
      method
    });

    return response.data as T;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
}
