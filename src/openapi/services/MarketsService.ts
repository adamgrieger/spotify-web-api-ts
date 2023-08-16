/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MarketsService {

  /**
   * Get Available Markets
 * 
   * Get the list of markets where Spotify is available.
 * 
   * @returns any A markets object with an array of country codes
   * @throws ApiError
   */
  public static getAvailableMarkets(): CancelablePromise<{
markets?: Array<string>;
}> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/markets',
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
