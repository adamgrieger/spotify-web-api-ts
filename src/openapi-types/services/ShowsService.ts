/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagingSavedShowObject } from '../models/PagingSavedShowObject';
import type { PagingSimplifiedEpisodeObject } from '../models/PagingSimplifiedEpisodeObject';
import type { ShowObject } from '../models/ShowObject';
import type { SimplifiedShowObject } from '../models/SimplifiedShowObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ShowsService {

    /**
     * Get Show
 * 
     * Get Spotify catalog information for a single show identified by its
 * unique Spotify ID.
 * 
     * @param id 
     * @param market 
     * @returns ShowObject A show
     * @throws ApiError
     */
    public static getAShow(
id: string,
market?: string,
): CancelablePromise<ShowObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shows/{id}',
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
     * Get Several Shows
 * 
     * Get Spotify catalog information for several shows based on their Spotify IDs.
 * 
     * @param ids 
     * @param market 
     * @returns any A set of shows
     * @throws ApiError
     */
    public static getMultipleShows(
ids: string,
market?: string,
): CancelablePromise<{
shows: Array<SimplifiedShowObject>;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shows',
            query: {
                'market': market,
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
     * Get Show Episodes
 * 
     * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
 * 
     * @param id 
     * @param market 
     * @param limit 
     * @param offset 
     * @returns PagingSimplifiedEpisodeObject Pages of episodes
     * @throws ApiError
     */
    public static getAShowsEpisodes(
id: string,
market?: string,
limit: number = 20,
offset?: number,
): CancelablePromise<PagingSimplifiedEpisodeObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shows/{id}/episodes',
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
     * Get User's Saved Shows
 * 
     * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
 * 
     * @param limit 
     * @param offset 
     * @returns PagingSavedShowObject Pages of shows
     * @throws ApiError
     */
    public static getUsersSavedShows(
limit: number = 20,
offset?: number,
): CancelablePromise<PagingSavedShowObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me/shows',
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
     * Save Shows for Current User
 * 
     * Save one or more shows to current Spotify user's library.
 * 
     * @param ids 
     * @returns any Show saved
     * @throws ApiError
     */
    public static saveShowsUser(
ids: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/me/shows',
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
     * Remove User's Saved Shows
 * 
     * Delete one or more shows from current Spotify user's library.
 * 
     * @param ids 
     * @param market 
     * @returns any Show removed
     * @throws ApiError
     */
    public static removeShowsUser(
ids: string,
market?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/me/shows',
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
     * Check User's Saved Shows
 * 
     * Check if one or more shows is already saved in the current Spotify user's library.
 * 
     * @param ids 
     * @returns boolean Array of booleans
     * @throws ApiError
     */
    public static checkUsersSavedShows(
ids: string,
): CancelablePromise<Array<boolean>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me/shows/contains',
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
