/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EpisodeObject } from '../models/EpisodeObject';
import type { PagingSavedEpisodeObject } from '../models/PagingSavedEpisodeObject';
import type { PagingSimplifiedEpisodeObject } from '../models/PagingSimplifiedEpisodeObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EpisodesService {

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
     * Get Episode
 * 
     * Get Spotify catalog information for a single episode identified by its
 * unique Spotify ID.
 * 
     * @param id 
     * @param market 
     * @returns EpisodeObject An episode
     * @throws ApiError
     */
    public static getAnEpisode(
id: string,
market?: string,
): CancelablePromise<EpisodeObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/episodes/{id}',
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
     * Get Several Episodes
 * 
     * Get Spotify catalog information for several episodes based on their Spotify IDs.
 * 
     * @param ids 
     * @param market 
     * @returns any A set of episodes
     * @throws ApiError
     */
    public static getMultipleEpisodes(
ids: string,
market?: string,
): CancelablePromise<{
episodes: Array<EpisodeObject>;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/episodes',
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
     * Get User's Saved Episodes
 * 
     * Get a list of the episodes saved in the current Spotify user's library.<br/>
 * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
 * 
     * @param market 
     * @param limit 
     * @param offset 
     * @returns PagingSavedEpisodeObject Pages of episodes
     * @throws ApiError
     */
    public static getUsersSavedEpisodes(
market?: string,
limit: number = 20,
offset?: number,
): CancelablePromise<PagingSavedEpisodeObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me/episodes',
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
     * Save Episodes for Current User
 * 
     * Save one or more episodes to the current user's library.<br/>
 * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
 * 
     * @param ids 
     * @param requestBody 
     * @returns any Episode saved
     * @throws ApiError
     */
    public static saveEpisodesUser(
ids: string,
requestBody?: Record<string, any>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/me/episodes',
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
     * Remove User's Saved Episodes
 * 
     * Remove one or more episodes from the current user's library.<br/>
 * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
 * 
     * @param ids 
     * @param requestBody 
     * @returns any Episode removed
     * @throws ApiError
     */
    public static removeEpisodesUser(
ids: string,
requestBody?: Record<string, any>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/me/episodes',
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
     * Check User's Saved Episodes
 * 
     * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
 * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
 * 
     * @param ids 
     * @returns boolean Array of booleans
     * @throws ApiError
     */
    public static checkUsersSavedEpisodes(
ids: string,
): CancelablePromise<Array<boolean>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me/episodes/contains',
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
