import { Http } from "./Http";
import * as types from "../types";

export function searchHelper<T>(
  http: Http,
  query: string,
  type: types.SearchType[],
  options?: types.SearchOptions
) {
  return http.get<T>("/search", {
    params: {
      ...options,
      q: query,
      type
    }
  });
}
