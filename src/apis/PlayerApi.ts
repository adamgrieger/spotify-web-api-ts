import { type Http } from '../helpers/Http';
import {
  type CurrentlyPlaying,
  type CurrentlyPlayingContext,
  type Device,
  type RepeatState,
} from '../types/SpotifyObjects';
import {
  type DeviceIdOptions,
  type GetCurrentlyPlayingTrackOptions,
  type GetPlaybackInfoOptions,
  type GetRecentlyPlayedTracksOptions,
  type PlayOptions,
  type TransferPlaybackOptions,
} from '../types/SpotifyOptions';
import { type GetRecentlyPlayedTracksResponse } from '../types/SpotifyResponses';

export class PlayerApi {
  private readonly http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Add an Item to the User's Playback Queue
   *
   * Add an item to the end of the user's current playback queue.
   *
   * @param uri The uri of the track or episode to add to the queue.
   * @param options Optional request information.
   */
  async addToQueue(uri: string, options?: DeviceIdOptions): Promise<void> {
    await this.http.post<void>('/me/player/queue', {
      params: {
        ...options,
        uri,
      },
    });
  }

  /**
   * Get the User's Currently Playing Track
   *
   * Get the object currently being played on the user's Spotify account.
   *
   * @param options Optional request information.
   */
  async getCurrentlyPlayingTrack(
    options?: GetCurrentlyPlayingTrackOptions,
  ): Promise<CurrentlyPlaying | string> {
    return await this.http.get<CurrentlyPlaying>(
      '/me/player/currently-playing',
      options && { params: options },
    );
  }

  /**
   * Get a User's Available Devices
   *
   * Get information about a user's available devices.
   */
  async getMyDevices(): Promise<Device[]> {
    return await this.http.get<Device[]>('/me/player/devices');
  }

  /**
   * Get Information About the User's Current Playback
   *
   * Get information about the user's current playback state, including track
   * or episode, track progress, and active device.
   *
   * @param options Optional request information.
   */
  async getPlaybackInfo(
    options?: GetPlaybackInfoOptions,
  ): Promise<CurrentlyPlayingContext> {
    return await this.http.get<CurrentlyPlayingContext>(
      '/me/player',
      options && { params: options },
    );
  }

  /**
   * Get the Current User's Recently Played Tracks
   *
   * Get tracks from the current user's recently played tracks.
   *
   * @param options Optional request information.
   */
  async getRecentlyPlayedTracks(
    options?: GetRecentlyPlayedTracksOptions,
  ): Promise<GetRecentlyPlayedTracksResponse> {
    return await this.http.get<GetRecentlyPlayedTracksResponse>(
      '/me/player/recently-played',
      options && { params: options },
    );
  }

  /**
   * Pause a User's Playback
   *
   * Pause playback on the user's account.
   *
   * @param options Optional request information.
   */
  async pause(options?: DeviceIdOptions): Promise<void> {
    await this.http.put<void>(
      '/me/player/pause',
      options && { params: options },
    );
  }

  /**
   * Start or Resume a User's Playback
   *
   * Start a new context or resume current playback on the user's active device.
   *
   * @param options Optional request information.
   */
  async play(options?: PlayOptions): Promise<void> {
    const { device_id, ...bodyParams } = options ?? {};

    await this.http.put<void>(
      '/me/player/play',
      options && {
        ...(device_id && { params: { device_id } }),
        ...(Object.keys(bodyParams).length && { data: bodyParams }),
      },
    );
  }

  /**
   * Seek to a Position in the Currently Playing Track
   *
   * Seeks to the given position in the user's currently playing track.
   *
   * @param positionMs The position in milliseconds to seek to.
   * @param options Optional request information.
   */
  async seek(positionMs: number, options?: DeviceIdOptions): Promise<void> {
    await this.http.put<void>('/me/player/seek', {
      params: {
        ...options,
        position_ms: positionMs,
      },
    });
  }

  /**
   * Set the Repeat Mode for the User's Playback
   *
   * Set the repeat mode for the user's playback.
   *
   * @param state The desired repeat mode.
   * @param options Optional request information.
   */
  async setRepeat(
    state: RepeatState,
    options?: DeviceIdOptions,
  ): Promise<void> {
    await this.http.put<void>('/me/player/repeat', {
      params: {
        ...options,
        state,
      },
    });
  }

  /**
   * Toggle Shuffle For User's Playback
   *
   * Toggle shuffle on or off for user's playback.
   *
   * @param state The desired shuffle state.
   * @param options Optional request information.
   */
  async setShuffle(state: boolean, options?: DeviceIdOptions): Promise<void> {
    await this.http.put<void>('/me/player/shuffle', {
      params: {
        ...options,
        state,
      },
    });
  }

  /**
   * Set Volume For User's Playback
   *
   * Set the volume for the user's current playback device.
   *
   * @param volumePercent The volume to set.
   * @param options Optional request information.
   */
  async setVolume(
    volumePercent: number,
    options?: DeviceIdOptions,
  ): Promise<void> {
    await this.http.put<void>('/me/player/volume', {
      params: {
        ...options,
        volume_percent: volumePercent,
      },
    });
  }

  /**
   * Skip User's Playback To Next Track
   *
   * Skips to next track in the user's queue.
   *
   * @param options Optional request information.
   */
  async skipToNext(options?: DeviceIdOptions): Promise<void> {
    await this.http.post<void>(
      '/me/player/next',
      options && { params: options },
    );
  }

  /**
   * Skip User's Playback To Previous Track
   *
   * Skips to previous track in the user's queue.
   *
   * @param options Optional request information.
   */
  async skipToPrevious(options?: DeviceIdOptions): Promise<void> {
    await this.http.post<void>(
      '/me/player/previous',
      options && { params: options },
    );
  }

  /**
   * Transfer a User's Playback
   *
   * Transfer playback to a new device and determine if it should start playing.
   *
   * @param deviceId The ID of the device on which playback should be started/transferred.
   * @param options Optional request information.
   */
  async transferPlayback(
    deviceId: string,
    options?: TransferPlaybackOptions,
  ): Promise<void> {
    await this.http.put<void>('/me/player', {
      data: {
        ...options,
        device_ids: [deviceId],
      },
    });
  }
}
