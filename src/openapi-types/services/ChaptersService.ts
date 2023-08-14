/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChapterObject } from '../models/ChapterObject';
import type { PagingSimplifiedChapterObject } from '../models/PagingSimplifiedChapterObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChaptersService {

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
     * Get a Chapter
 * 
     * Get Spotify catalog information for a single chapter.<br />
 * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
 * 
     * @param id 
     * @param market 
     * @returns ChapterObject A Chapter
     * @throws ApiError
     */
    public static getAChapter(
id: string,
market?: string,
): CancelablePromise<ChapterObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chapters/{id}',
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
     * Get Several Chapters
 * 
     * Get Spotify catalog information for several chapters identified by their Spotify IDs.<br />
 * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
 * 
     * @param ids 
     * @param market 
     * @returns any A set of chapters
     * @throws ApiError
     */
    public static getSeveralChapters(
ids: string,
market?: string,
): CancelablePromise<{
chapters: Array<ChapterObject>;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chapters',
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

}
