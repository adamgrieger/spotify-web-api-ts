/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ArtistObject } from '../models/ArtistObject';
import type { CursorPagingSimplifiedArtistObject } from '../models/CursorPagingSimplifiedArtistObject';
import type { PagingObject } from '../models/PagingObject';
import type { PagingPlaylistObject } from '../models/PagingPlaylistObject';
import type { PrivateUserObject } from '../models/PrivateUserObject';
import type { PublicUserObject } from '../models/PublicUserObject';
import type { TrackObject } from '../models/TrackObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

  /**
   * Get Current User's Profile
 * 
   * Get detailed profile information about the current user (including the
 * current user's username).
 * 
   * @returns PrivateUserObject A user
   * @throws ApiError
   */
  public static getCurrentUsersProfile(): CancelablePromise<PrivateUserObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/me',
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
   * Get User's Profile
 * 
   * Get public profile information about a Spotify user.
 * 
   * @param userId 
   * @returns PublicUserObject A user
   * @throws ApiError
   */
  public static getUsersProfile(
userId: string,
): CancelablePromise<PublicUserObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{user_id}',
      path: {
        'user_id': userId,
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
   * Get User's Playlists
 * 
   * Get a list of the playlists owned or followed by a Spotify user.
 * 
   * @param userId 
   * @param limit 
   * @param offset 
   * @returns PagingPlaylistObject A paged set of playlists
   * @throws ApiError
   */
  public static getListUsersPlaylists(
userId: string,
limit: number = 20,
offset?: number,
): CancelablePromise<PagingPlaylistObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{user_id}/playlists',
      path: {
        'user_id': userId,
      },
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
   * Follow Playlist
 * 
   * Add the current user as a follower of a playlist.
 * 
   * @param playlistId 
   * @param requestBody 
   * @returns any Playlist followed
   * @throws ApiError
   */
  public static followPlaylist(
playlistId: string,
requestBody?: Record<string, any>,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/playlists/{playlist_id}/followers',
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
   * Unfollow Playlist
 * 
   * Remove the current user as a follower of a playlist.
 * 
   * @param playlistId 
   * @returns any Playlist unfollowed
   * @throws ApiError
   */
  public static unfollowPlaylist(
playlistId: string,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/playlists/{playlist_id}/followers',
      path: {
        'playlist_id': playlistId,
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

  /**
   * Check if Users Follow Playlist
 * 
   * Check to see if one or more Spotify users are following a specified playlist.
 * 
   * @param playlistId 
   * @param ids 
   * @returns boolean Array of booleans
   * @throws ApiError
   */
  public static checkIfUserFollowsPlaylist(
playlistId: string,
ids: string,
): CancelablePromise<Array<boolean>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/playlists/{playlist_id}/followers/contains',
      path: {
        'playlist_id': playlistId,
      },
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
