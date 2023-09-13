/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagingArtistObject } from '../models/PagingArtistObject';
import type { PagingPlaylistObject } from '../models/PagingPlaylistObject';
import type { PagingSimplifiedAlbumObject } from '../models/PagingSimplifiedAlbumObject';
import type { PagingSimplifiedAudiobookObject } from '../models/PagingSimplifiedAudiobookObject';
import type { PagingSimplifiedEpisodeObject } from '../models/PagingSimplifiedEpisodeObject';
import type { PagingSimplifiedShowObject } from '../models/PagingSimplifiedShowObject';
import type { PagingTrackObject } from '../models/PagingTrackObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SearchService {

  /**
   * Search for Item
 * 
   * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
 * that match a keyword string.<br />
 * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
 * 
   * @param q 
   * @param type 
   * @param market 
   * @param limit 
   * @param offset 
   * @param includeExternal 
   * @returns any Search response
   * @throws ApiError
   */
  public static search(
q: string,
type: Array<'album' | 'artist' | 'playlist' | 'track' | 'show' | 'episode' | 'audiobook'>,
market?: string,
limit: number = 20,
offset?: number,
includeExternal?: 'audio',
): CancelablePromise<{
tracks?: PagingTrackObject;
artists?: PagingArtistObject;
albums?: PagingSimplifiedAlbumObject;
playlists?: PagingPlaylistObject;
shows?: PagingSimplifiedShowObject;
episodes?: PagingSimplifiedEpisodeObject;
audiobooks?: PagingSimplifiedAudiobookObject;
}> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search',
      query: {
        'q': q,
        'type': type,
        'market': market,
        'limit': limit,
        'offset': offset,
        'include_external': includeExternal,
      },
      errors: {
        401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
        403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
        429: `The app has exceeded its rate limits.
`,
      },
    });
  }

}
