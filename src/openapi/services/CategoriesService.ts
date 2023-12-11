/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryObject } from '../models/CategoryObject';
import type { PagingFeaturedPlaylistObject } from '../models/PagingFeaturedPlaylistObject';
import type { PagingObject } from '../models/PagingObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoriesService {

  /**
   * Get Several Browse Categories
 * 
   * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
 * 
   * @param country 
   * @param locale 
   * @param limit 
   * @param offset 
   * @returns any A paged set of categories
   * @throws ApiError
   */
  public static getCategories(
country?: string,
locale?: string,
limit: number = 20,
offset?: number,
): CancelablePromise<{
categories: PagingObject;
}> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/browse/categories',
      query: {
        'country': country,
        'locale': locale,
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
   * Get Single Browse Category
 * 
   * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
 * 
   * @param categoryId 
   * @param country 
   * @param locale 
   * @returns CategoryObject A category
   * @throws ApiError
   */
  public static getACategory(
categoryId: string,
country?: string,
locale?: string,
): CancelablePromise<CategoryObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/browse/categories/{category_id}',
      path: {
        'category_id': categoryId,
      },
      query: {
        'country': country,
        'locale': locale,
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
   * Get Category's Playlists
 * 
   * Get a list of Spotify playlists tagged with a particular category.
 * 
   * @param categoryId 
   * @param country 
   * @param limit 
   * @param offset 
   * @returns PagingFeaturedPlaylistObject A paged set of playlists
   * @throws ApiError
   */
  public static getACategoriesPlaylists(
categoryId: string,
country?: string,
limit: number = 20,
offset?: number,
): CancelablePromise<PagingFeaturedPlaylistObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/browse/categories/{category_id}/playlists',
      path: {
        'category_id': categoryId,
      },
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
