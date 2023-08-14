/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtistObject } from '../models/ArtistObject';
import type { CursorPagingSimplifiedArtistObject } from '../models/CursorPagingSimplifiedArtistObject';
import type { PagingObject } from '../models/PagingObject';
import type { PagingPlaylistObject } from '../models/PagingPlaylistObject';
import type { PagingSavedAlbumObject } from '../models/PagingSavedAlbumObject';
import type { PagingSavedEpisodeObject } from '../models/PagingSavedEpisodeObject';
import type { PagingSavedShowObject } from '../models/PagingSavedShowObject';
import type { PagingSavedTrackObject } from '../models/PagingSavedTrackObject';
import type { PagingSimplifiedAudiobookObject } from '../models/PagingSimplifiedAudiobookObject';
import type { PlaylistObject } from '../models/PlaylistObject';
import type { TrackObject } from '../models/TrackObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LibraryService {

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

    /**
     * Change Playlist Details
 * 
     * Change a playlist's name and public/private state. (The user must, of
 * course, own the playlist.)
 * 
     * @param playlistId 
     * @param requestBody 
     * @returns any Playlist updated
     * @throws ApiError
     */
    public static changePlaylistDetails(
playlistId: string,
requestBody?: Record<string, any>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/playlists/{playlist_id}',
            path: {
                'playlist_id': playlistId,
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
     * Get Current User's Playlists
 * 
     * Get a list of the playlists owned or followed by the current Spotify
 * user.
 * 
     * @param limit 
     * @param offset 
     * @returns PagingPlaylistObject A paged set of playlists
     * @throws ApiError
     */
    public static getAListOfCurrentUsersPlaylists(
limit: number = 20,
offset?: number,
): CancelablePromise<PagingPlaylistObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me/playlists',
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
     * Get User's Saved Tracks
 * 
     * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
 * 
     * @param market 
     * @param limit 
     * @param offset 
     * @returns PagingSavedTrackObject Pages of tracks
     * @throws ApiError
     */
    public static getUsersSavedTracks(
market?: string,
limit: number = 20,
offset?: number,
): CancelablePromise<PagingSavedTrackObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me/tracks',
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
     * Save Tracks for Current User
 * 
     * Save one or more tracks to the current user's 'Your Music' library.
 * 
     * @param ids 
     * @param requestBody 
     * @returns any Track saved
     * @throws ApiError
     */
    public static saveTracksUser(
ids: string,
requestBody?: Record<string, any>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/me/tracks',
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
     * Remove User's Saved Tracks
 * 
     * Remove one or more tracks from the current user's 'Your Music' library.
 * 
     * @param ids 
     * @param requestBody 
     * @returns any Track removed
     * @throws ApiError
     */
    public static removeTracksUser(
ids: string,
requestBody?: Record<string, any>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/me/tracks',
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
     * Check User's Saved Tracks
 * 
     * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
 * 
     * @param ids 
     * @returns boolean Array of booleans
     * @throws ApiError
     */
    public static checkUsersSavedTracks(
ids: string,
): CancelablePromise<Array<boolean>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me/tracks/contains',
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

    /**
     * Get User's Top Items
 * 
     * Get the current user's top artists or tracks based on calculated affinity.
 * 
     * @param type 
     * @param timeRange 
     * @param limit 
     * @param offset 
     * @returns any Pages of artists or tracks
     * @throws ApiError
     */
    public static getUsersTopArtistsAndTracks(
type: 'artists' | 'tracks',
timeRange: string = 'medium_term',
limit: number = 20,
offset?: number,
): CancelablePromise<(PagingObject & {
items?: Array<(ArtistObject | TrackObject)>;
})> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me/top/{type}',
            path: {
                'type': type,
            },
            query: {
                'time_range': timeRange,
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
     * Create Playlist
 * 
     * Create a playlist for a Spotify user. (The playlist will be empty until
 * you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
 * 
     * @param userId 
     * @param requestBody 
     * @returns PlaylistObject A playlist
     * @throws ApiError
     */
    public static createPlaylist(
userId: string,
requestBody?: Record<string, any>,
): CancelablePromise<PlaylistObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user_id}/playlists',
            path: {
                'user_id': userId,
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
     * Get Followed Artists
 * 
     * Get the current user's followed artists.
 * 
     * @param type 
     * @param after 
     * @param limit 
     * @returns any A paged set of artists
     * @throws ApiError
     */
    public static getFollowed(
type: 'artist',
after?: string,
limit: number = 20,
): CancelablePromise<{
artists: CursorPagingSimplifiedArtistObject;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me/following',
            query: {
                'type': type,
                'after': after,
                'limit': limit,
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
     * Follow Artists or Users
 * 
     * Add the current user as a follower of one or more artists or other Spotify users.
 * 
     * @param type 
     * @param ids 
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static followArtistsUsers(
type: 'artist' | 'user',
ids: string,
requestBody?: Record<string, any>,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/me/following',
            query: {
                'type': type,
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
     * Unfollow Artists or Users
 * 
     * Remove the current user as a follower of one or more artists or other Spotify users.
 * 
     * @param type 
     * @param ids 
     * @param requestBody 
     * @returns any Artist or user unfollowed
     * @throws ApiError
     */
    public static unfollowArtistsUsers(
type: 'artist' | 'user',
ids: string,
requestBody?: Record<string, any>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/me/following',
            query: {
                'type': type,
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
     * Check If User Follows Artists or Users
 * 
     * Check to see if the current user is following one or more artists or other Spotify users.
 * 
     * @param type 
     * @param ids 
     * @returns boolean Array of booleans
     * @throws ApiError
     */
    public static checkCurrentUserFollows(
type: 'artist' | 'user',
ids: string,
): CancelablePromise<Array<boolean>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me/following/contains',
            query: {
                'type': type,
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
