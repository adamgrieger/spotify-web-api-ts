import { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../config";

export function constructAxiosConfig(accessToken: string) {
  return {
    baseUrl: BASE_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  } as AxiosRequestConfig;
}
