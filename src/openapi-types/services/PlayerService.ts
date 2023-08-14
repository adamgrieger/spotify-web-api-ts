/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrentlyPlayingContextObject } from '../models/CurrentlyPlayingContextObject';
import type { CursorPagingPlayHistoryObject } from '../models/CursorPagingPlayHistoryObject';
import type { DeviceObject } from '../models/DeviceObject';
import type { QueueObject } from '../models/QueueObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PlayerService {

  /**
   * Get Playback State
 * 
   * Get information about the user’s current playback state, including track or episode, progress, and active device.
 * 
   * @param market 
   * @param additionalTypes 
   * @returns CurrentlyPlayingContextObject Information about playback
   * @throws ApiError
   */
  public static getInformationAboutTheUsersCurrentPlayback(
market?: string,
additionalTypes?: string,
): CancelablePromise<CurrentlyPlayingContextObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/me/player',
      query: {
        'market': market,
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
   * Transfer Playback
 * 
   * Transfer playback to a new device and determine if it should start playing.
 * 
   * @param requestBody 
   * @returns void 
   * @throws ApiError
   */
  public static transferAUsersPlayback(
requestBody?: Record<string, any>,
): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/me/player',
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
   * Get Available Devices
 * 
   * Get information about a user’s available devices.
 * 
   * @returns any A set of devices
   * @throws ApiError
   */
  public static getAUsersAvailableDevices(): CancelablePromise<{
devices: Array<DeviceObject>;
}> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/me/player/devices',
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
   * Get Currently Playing Track
 * 
   * Get the object currently being played on the user's Spotify account.
 * 
   * @param market 
   * @param additionalTypes 
   * @returns CurrentlyPlayingContextObject Information about the currently playing track
   * @throws ApiError
   */
  public static getTheUsersCurrentlyPlayingTrack(
market?: string,
additionalTypes?: string,
): CancelablePromise<CurrentlyPlayingContextObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/me/player/currently-playing',
      query: {
        'market': market,
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
   * Start/Resume Playback
 * 
   * Start a new context or resume current playback on the user's active device.
 * 
   * @param deviceId 
   * @param requestBody 
   * @returns void 
   * @throws ApiError
   */
  public static startAUsersPlayback(
deviceId?: string,
requestBody?: Record<string, any>,
): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/me/player/play',
      query: {
        'device_id': deviceId,
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
   * Pause Playback
 * 
   * Pause playback on the user's account.
 * 
   * @param deviceId 
   * @returns void 
   * @throws ApiError
   */
  public static pauseAUsersPlayback(
deviceId?: string,
): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/me/player/pause',
      query: {
        'device_id': deviceId,
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
   * Skip To Next
 * 
   * Skips to next track in the user’s queue.
 * 
   * @param deviceId 
   * @returns void 
   * @throws ApiError
   */
  public static skipUsersPlaybackToNextTrack(
deviceId?: string,
): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/me/player/next',
      query: {
        'device_id': deviceId,
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
   * Skip To Previous
 * 
   * Skips to previous track in the user’s queue.
 * 
   * @param deviceId 
   * @returns void 
   * @throws ApiError
   */
  public static skipUsersPlaybackToPreviousTrack(
deviceId?: string,
): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/me/player/previous',
      query: {
        'device_id': deviceId,
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
   * Seek To Position
 * 
   * Seeks to the given position in the user’s currently playing track.
 * 
   * @param positionMs 
   * @param deviceId 
   * @returns void 
   * @throws ApiError
   */
  public static seekToPositionInCurrentlyPlayingTrack(
positionMs: number,
deviceId?: string,
): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/me/player/seek',
      query: {
        'position_ms': positionMs,
        'device_id': deviceId,
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
   * Set Repeat Mode
 * 
   * Set the repeat mode for the user's playback. Options are repeat-track,
 * repeat-context, and off.
 * 
   * @param state 
   * @param deviceId 
   * @returns void 
   * @throws ApiError
   */
  public static setRepeatModeOnUsersPlayback(
state: string,
deviceId?: string,
): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/me/player/repeat',
      query: {
        'state': state,
        'device_id': deviceId,
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
   * Set Playback Volume
 * 
   * Set the volume for the user’s current playback device.
 * 
   * @param volumePercent 
   * @param deviceId 
   * @returns void 
   * @throws ApiError
   */
  public static setVolumeForUsersPlayback(
volumePercent: number,
deviceId?: string,
): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/me/player/volume',
      query: {
        'volume_percent': volumePercent,
        'device_id': deviceId,
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
   * Toggle Playback Shuffle
 * 
   * Toggle shuffle on or off for user’s playback.
 * 
   * @param state 
   * @param deviceId 
   * @returns void 
   * @throws ApiError
   */
  public static toggleShuffleForUsersPlayback(
state: boolean,
deviceId?: string,
): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/me/player/shuffle',
      query: {
        'state': state,
        'device_id': deviceId,
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
   * Get Recently Played Tracks
 * 
   * Get tracks from the current user's recently played tracks.
 * _**Note**: Currently doesn't support podcast episodes._
 * 
   * @param limit 
   * @param after 
   * @param before 
   * @returns CursorPagingPlayHistoryObject A paged set of tracks
   * @throws ApiError
   */
  public static getRecentlyPlayed(
limit: number = 20,
after?: number,
before?: number,
): CancelablePromise<CursorPagingPlayHistoryObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/me/player/recently-played',
      query: {
        'limit': limit,
        'after': after,
        'before': before,
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
   * Get the User's Queue
 * 
   * Get the list of objects that make up the user's queue.
 * 
   * @returns QueueObject Information about the queue
   * @throws ApiError
   */
  public static getQueue(): CancelablePromise<QueueObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/me/player/queue',
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
   * Add Item to Playback Queue
 * 
   * Add an item to the end of the user's current playback queue.
 * 
   * @param uri 
   * @param deviceId 
   * @returns void 
   * @throws ApiError
   */
  public static addToQueue(
uri: string,
deviceId?: string,
): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/me/player/queue',
      query: {
        'uri': uri,
        'device_id': deviceId,
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
