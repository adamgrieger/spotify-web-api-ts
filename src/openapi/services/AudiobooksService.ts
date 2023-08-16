/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AudiobookObject } from '../models/AudiobookObject';
import type { PagingSimplifiedAudiobookObject } from '../models/PagingSimplifiedAudiobookObject';
import type { PagingSimplifiedChapterObject } from '../models/PagingSimplifiedChapterObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AudiobooksService {

  /**
   * Get an Audiobook
 * 
   * Get Spotify catalog information for a single audiobook.<br />
 * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
 * 
   * @param id 
   * @param market 
   * @returns AudiobookObject An Audiobook
   * @throws ApiError
   */
  public static getAnAudiobook(
id: string,
market?: string,
): CancelablePromise<AudiobookObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/audiobooks/{id}',
      path: {
        'id': id,
      },
      query: {
        'market': market,
      },
      errors: {
        400: `The request contains malformed data in path, query parameters, or body.
`,
        401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
        403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
        404: `The requested resource cannot be found.
`,
        429: `The app has exceeded its rate limits.
`,
      },
    });
  }

  /**
   * Get Several Audiobooks
 * 
   * Get Spotify catalog information for several audiobooks identified by their Spotify IDs.<br />
 * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
 * 
   * @param ids 
   * @param market 
   * @returns any A set of audiobooks
   * @throws ApiError
   */
  public static getMultipleAudiobooks(
ids: string,
market?: string,
): CancelablePromise<{
audiobooks: Array<AudiobookObject>;
}> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/audiobooks',
      query: {
        'ids': ids,
        'market': market,
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

  /**
   * Get Audiobook Chapters
 * 
   * Get Spotify catalog information about an audiobook's chapters.<br />
 * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
 * 
   * @param id 
   * @param market 
   * @param limit 
   * @param offset 
   * @returns PagingSimplifiedChapterObject Pages of chapters
   * @throws ApiError
   */
  public static getAudiobookChapters(
id: string,
market?: string,
limit: number = 20,
offset?: number,
): CancelablePromise<PagingSimplifiedChapterObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/audiobooks/{id}/chapters',
      path: {
        'id': id,
      },
      query: {
        'market': market,
        'limit': limit,
        'offset': offset,
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

  /**
   * Get User's Saved Audiobooks
 * 
   * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
 * 
   * @param limit 
   * @param offset 
   * @returns PagingSimplifiedAudiobookObject Pages of audiobooks
   * @throws ApiError
   */
  public static getUsersSavedAudiobooks(
limit: number = 20,
offset?: number,
): CancelablePromise<PagingSimplifiedAudiobookObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/me/audiobooks',
      query: {
        'limit': limit,
        'offset': offset,
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

  /**
   * Save Audiobooks for Current User
 * 
   * Save one or more audiobooks to the current Spotify user's library.
 * 
   * @param ids 
   * @returns any Audiobook(s) are saved to the library
   * @throws ApiError
   */
  public static saveAudiobooksUser(
ids: string,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/me/audiobooks',
      query: {
        'ids': ids,
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

  /**
   * Remove User's Saved Audiobooks
 * 
   * Remove one or more audiobooks from the Spotify user's library.
 * 
   * @param ids 
   * @returns any Audiobook(s) have been removed from the library
   * @throws ApiError
   */
  public static removeAudiobooksUser(
ids: string,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/me/audiobooks',
      query: {
        'ids': ids,
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

  /**
   * Check User's Saved Audiobooks
 * 
   * Check if one or more audiobooks are already saved in the current Spotify user's library.
 * 
   * @param ids 
   * @returns boolean Array of booleans
   * @throws ApiError
   */
  public static checkUsersSavedAudiobooks(
ids: string,
): CancelablePromise<Array<boolean>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/me/audiobooks/contains',
      query: {
        'ids': ids,
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
