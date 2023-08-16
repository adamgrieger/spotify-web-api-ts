/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ImageObject } from '../models/ImageObject';
import type { PagingFeaturedPlaylistObject } from '../models/PagingFeaturedPlaylistObject';
import type { PagingPlaylistObject } from '../models/PagingPlaylistObject';
import type { PagingPlaylistTrackObject } from '../models/PagingPlaylistTrackObject';
import type { PlaylistObject } from '../models/PlaylistObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PlaylistsService {

  /**
   * Get Playlist
 * 
   * Get a playlist owned by a Spotify user.
 * 
   * @param playlistId 
   * @param market 
   * @param fields 
   * @param additionalTypes 
   * @returns PlaylistObject A playlist
   * @throws ApiError
   */
  public static getPlaylist(
playlistId: string,
market?: string,
fields?: string,
additionalTypes?: string,
): CancelablePromise<PlaylistObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/playlists/{playlist_id}',
      path: {
        'playlist_id': playlistId,
      },
      query: {
        'market': market,
        'fields': fields,
        'additional_types': additionalTypes,
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
   * Get Playlist Items
 * 
   * Get full details of the items of a playlist owned by a Spotify user.
 * 
   * @param playlistId 
   * @param market 
   * @param fields 
   * @param limit 
   * @param offset 
   * @param additionalTypes 
   * @returns PagingPlaylistTrackObject Pages of tracks
   * @throws ApiError
   */
  public static getPlaylistsTracks(
playlistId: string,
market?: string,
fields?: string,
limit: number = 20,
offset?: number,
additionalTypes?: string,
): CancelablePromise<PagingPlaylistTrackObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/playlists/{playlist_id}/tracks',
      path: {
        'playlist_id': playlistId,
      },
      query: {
        'market': market,
        'fields': fields,
        'limit': limit,
        'offset': offset,
        'additional_types': additionalTypes,
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
   * Add Items to Playlist
 * 
   * Add one or more items to a user's playlist.
 * 
   * @param playlistId 
   * @param position 
   * @param uris 
   * @param requestBody 
   * @returns any A snapshot ID for the playlist
   * @throws ApiError
   */
  public static addTracksToPlaylist(
playlistId: string,
position?: number,
uris?: string,
requestBody?: Record<string, any>,
): CancelablePromise<{
snapshot_id?: string;
}> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/playlists/{playlist_id}/tracks',
      path: {
        'playlist_id': playlistId,
      },
      query: {
        'position': position,
        'uris': uris,
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
   * Update Playlist Items
 * 
   * Either reorder or replace items in a playlist depending on the request's parameters.
 * To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
 * To replace items, include `uris` as either a query parameter or in the request's body.
 * Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
 * <br/>
 * **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
 * These operations can't be applied together in a single request.
 * 
   * @param playlistId 
   * @param uris 
   * @param requestBody 
   * @returns any A snapshot ID for the playlist
   * @throws ApiError
   */
  public static reorderOrReplacePlaylistsTracks(
playlistId: string,
uris?: string,
requestBody?: Record<string, any>,
): CancelablePromise<{
snapshot_id?: string;
}> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/playlists/{playlist_id}/tracks',
      path: {
        'playlist_id': playlistId,
      },
      query: {
        'uris': uris,
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
   * Remove Playlist Items
 * 
   * Remove one or more items from a user's playlist.
 * 
   * @param playlistId 
   * @param requestBody 
   * @returns any A snapshot ID for the playlist
   * @throws ApiError
   */
  public static removeTracksPlaylist(
playlistId: string,
requestBody?: {
/**
 * An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove.
 * For example: `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.
 * 
 */
tracks: Array<{
/**
 * Spotify URI
 */
uri?: string;
}>;
/**
 * The playlist's snapshot ID against which you want to make the changes.
 * The API will validate that the specified items exist and in the specified positions and make the changes,
 * even if more recent changes have been made to the playlist.
 * 
 */
snapshot_id?: string;
},
): CancelablePromise<{
snapshot_id?: string;
}> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/playlists/{playlist_id}/tracks',
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
   * Get Featured Playlists
 * 
   * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
 * 
   * @param country 
   * @param locale 
   * @param timestamp 
   * @param limit 
   * @param offset 
   * @returns PagingFeaturedPlaylistObject A paged set of playlists
   * @throws ApiError
   */
  public static getFeaturedPlaylists(
country?: string,
locale?: string,
timestamp?: string,
limit: number = 20,
offset?: number,
): CancelablePromise<PagingFeaturedPlaylistObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/browse/featured-playlists',
      query: {
        'country': country,
        'locale': locale,
        'timestamp': timestamp,
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

  /**
   * Get Playlist Cover Image
 * 
   * Get the current image associated with a specific playlist.
 * 
   * @param playlistId 
   * @returns ImageObject A set of images
   * @throws ApiError
   */
  public static getPlaylistCover(
playlistId: string,
): CancelablePromise<Array<ImageObject>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/playlists/{playlist_id}/images',
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
   * Add Custom Playlist Cover Image
 * 
   * Replace the image used to represent a specific playlist.
 * 
   * @param playlistId 
   * @param requestBody 
   * @returns any Image uploaded
   * @throws ApiError
   */
  public static uploadCustomPlaylistCover(
playlistId: string,
requestBody?: string,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/playlists/{playlist_id}/images',
      path: {
        'playlist_id': playlistId,
      },
      body: requestBody,
      mediaType: 'image/jpeg',
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
