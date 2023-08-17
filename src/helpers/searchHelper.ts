// import { type SearchType } from '../types/SpotifyObjects';
import { type SearchOptions } from '../types/SpotifyOptions';

import { type Http } from './Http';

export async function searchHelper<T>(
  http: Http,
  query: string,
  type: string[],
  options?: SearchOptions,
): Promise<T> {
  return await http.get<T>('/search', {
    params: {
      ...options,
      q: query,
      type,
    },
  });
}
