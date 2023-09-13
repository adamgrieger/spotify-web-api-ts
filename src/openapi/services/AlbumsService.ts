/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlbumObject } from '../models/AlbumObject';
import type { PagingSavedAlbumObject } from '../models/PagingSavedAlbumObject';
import type { PagingSimplifiedAlbumObject } from '../models/PagingSimplifiedAlbumObject';
import type { PagingSimplifiedTrackObject } from '../models/PagingSimplifiedTrackObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AlbumsService {

  /**
   * Get Album
 * 
   * Get Spotify catalog information for a single album.
 * 
   * @param id 
   * @param market 
   * @returns AlbumObject An album
   * @throws ApiError
   */
  public static getAnAlbum(
id: string,
market?: string,
): CancelablePromise<AlbumObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/albums/{id}',
      path: {
        'id': id,
      },
      query: {
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
   * Get Several Albums
 * 
   * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
 * 
   * @param ids 
   * @param market 
   * @returns any A set of albums
   * @throws ApiError
   */
  public static getMultipleAlbums(
ids: string,
market?: string,
): CancelablePromise<{
albums: Array<AlbumObject>;
}> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/albums',
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
   * Get Album Tracks
 * 
   * Get Spotify catalog information about an album’s tracks.
 * Optional parameters can be used to limit the number of tracks returned.
 * 
   * @param id 
   * @param market 
   * @param limit 
   * @param offset 
   * @returns PagingSimplifiedTrackObject Pages of tracks
   * @throws ApiError
   */
  public static getAnAlbumsTracks(
id: string,
market?: string,
limit: number = 20,
offset?: number,
): CancelablePromise<PagingSimplifiedTrackObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/albums/{id}/tracks',
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
   * Get Artist's Albums
 * 
   * Get Spotify catalog information about an artist's albums.
 * 
   * @param id 
   * @param includeGroups 
   * @param market 
   * @param limit 
   * @param offset 
   * @returns PagingSimplifiedAlbumObject Pages of albums
   * @throws ApiError
   */
  public static getAnArtistsAlbums(
id: string,
includeGroups?: string,
market?: string,
limit: number = 20,
offset?: number,
): CancelablePromise<PagingSimplifiedAlbumObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/artists/{id}/albums',
      path: {
        'id': id,
      },
      query: {
        'include_groups': includeGroups,
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
   * Get User's Saved Albums
 * 
   * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
 * 
   * @param limit 
   * @param offset 
   * @param market 
   * @returns PagingSavedAlbumObject Pages of albums
   * @throws ApiError
   */
  public static getUsersSavedAlbums(
limit: number = 20,
offset?: number,
market?: string,
): CancelablePromise<PagingSavedAlbumObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/me/albums',
      query: {
        'limit': limit,
        'offset': offset,
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
   * Save Albums for Current User
 * 
   * Save one or more albums to the current user's 'Your Music' library.
 * 
   * @param ids 
   * @param requestBody 
   * @returns any The album is saved
   * @throws ApiError
   */
  public static saveAlbumsUser(
ids: string,
requestBody?: Record<string, any>,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/me/albums',
      query: {
        'ids': ids,
      },
      body: requestBody,
      mediaType: 'application/json',
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
   * Remove Users' Saved Albums
 * 
   * Remove one or more albums from the current user's 'Your Music' library.
 * 
   * @param ids 
   * @param requestBody 
   * @returns any Album(s) have been removed from the library
   * @throws ApiError
   */
  public static removeAlbumsUser(
ids: string,
requestBody?: Record<string, any>,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/me/albums',
      query: {
        'ids': ids,
      },
      body: requestBody,
      mediaType: 'application/json',
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
   * Check User's Saved Albums
 * 
   * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
 * 
   * @param ids 
   * @returns boolean Array of booleans
   * @throws ApiError
   */
  public static checkUsersSavedAlbums(
ids: string,
): CancelablePromise<Array<boolean>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/me/albums/contains',
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
   * Get New Releases
 * 
   * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
 * 
   * @param country 
   * @param limit 
   * @param offset 
   * @returns any A paged set of albums
   * @throws ApiError
   */
  public static getNewReleases(
country?: string,
limit: number = 20,
offset?: number,
): CancelablePromise<{
albums: PagingSimplifiedAlbumObject;
}> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/browse/new-releases',
      query: {
        'country': country,
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

}
