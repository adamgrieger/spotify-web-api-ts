/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GenresService {

  /**
   * Get Available Genre Seeds
 * 
   * Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
 * 
   * @returns any A set of genres
   * @throws ApiError
   */
  public static getRecommendationGenres(): CancelablePromise<{
genres: Array<string>;
}> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/recommendations/available-genre-seeds',
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
