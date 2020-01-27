import axios, { Method, AxiosRequestConfig, AxiosError } from "axios";
import { BASE_URL } from "../config";

export async function spotifyAxios<T>(
  url: string,
  method: Method,
  accessToken: string,
  config?: AxiosRequestConfig
) {
  try {
    const response = await axios({
      ...config,
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${accessToken}`
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
