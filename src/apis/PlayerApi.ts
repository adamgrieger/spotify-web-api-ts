import { Http } from "../helpers/Http";
import * as types from "../types";

export class PlayerApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Add an item to the end of the user's current playback queue.
   *
   * @param uri The uri of the track or episode to add to the queue.
   * @param options A JSON object with optional request information.
   */
  addToQueue(uri: string, options?: types.DeviceIdOptions) {
    return this.http.post<void>("/me/player/queue", {
      params: {
        ...options,
        uri
      }
    });
  }

  /**
   * Get the object currently being played on the user's Spotify account.
   *
   * @param options A JSON object with optional request information.
   */
  getCurrentlyPlayingTrack(options?: types.MarketOptions) {
    return this.http.get<types.CurrentlyPlaying>(
      "/me/player/currently-playing",
      options && { params: options }
    );
  }

  /**
   * Get information about a user's available devices.
   */
  getMyDevices() {
    return this.http.get<types.Device[]>("/me/player/devices");
  }

  /**
   * Get information about the user's current playback state, including track,
   * track progress, and active device.
   *
   * @param options A JSON object with optional request information.
   */
  getPlaybackInfo(options?: types.MarketOptions) {
    return this.http.get<types.CurrentlyPlayingContext>(
      "/me/player",
      options && { params: options }
    );
  }

  /**
   * Get the current user's recently played tracks.
   *
   * @param options A JSON object with optional request information.
   */
  getRecentlyPlayedTracks(options?: types.GetRecentlyPlayedTracksOptions) {
    return this.http.get<types.GetRecentlyPlayedTracksResponse>(
      "/me/player/recently-played",
      options && { params: options }
    );
  }

  /**
   * Skips to next track in the user's queue.
   *
   * @param options A JSON object with optional request information.
   */
  next(options?: types.DeviceIdOptions) {
    return this.http.post<void>(
      "/me/player/next",
      options && { params: options }
    );
  }

  /**
   * Pause playback on the user's account.
   *
   * @param options A JSON object with optional request information.
   */
  pause(options?: types.DeviceIdOptions) {
    return this.http.put<void>(
      "/me/player/pause",
      options && { params: options }
    );
  }

  /**
   * Start a new context or resume current playback on the user's active device.
   *
   * @param options A JSON object with optional request information.
   */
  play(options?: types.PlayOptions) {
    const { device_id, ...bodyParams } = options ?? {};

    return this.http.put<void>(
      "/me/player/play",
      options && {
        ...(device_id && { params: { device_id } }),
        ...(Object.keys(bodyParams).length && { data: bodyParams })
      }
    );
  }

  /**
   * Skips to previous track in the user's queue.
   *
   * @param options A JSON object with optional request information.
   */
  previous(options?: types.DeviceIdOptions) {
    return this.http.post<void>(
      "/me/player/previous",
      options && { params: options }
    );
  }

  /**
   * Set the repeat mode for the user's playback.
   *
   * @param state The desired repeat mode.
   * @param options A JSON object with optional request information.
   */
  repeat(state: types.RepeatState, options?: types.DeviceIdOptions) {
    return this.http.put<void>("/me/player/repeat", {
      params: {
        ...options,
        state
      }
    });
  }

  /**
   * Seeks to the given position in the user's currently playing track.
   *
   * @param position_ms The position in milliseconds to seek to.
   * @param options A JSON object with optional request information.
   */
  seek(position_ms: number, options?: types.DeviceIdOptions) {
    return this.http.put<void>("/me/player/seek", {
      params: {
        ...options,
        position_ms
      }
    });
  }

  /**
   * Toggle shuffle on or off for user's playback.
   *
   * @param state The desired shuffle state.
   * @param options A JSON object with optional request information.
   */
  shuffle(state: boolean, options?: types.DeviceIdOptions) {
    return this.http.put<void>("/me/player/shuffle", {
      params: {
        ...options,
        state
      }
    });
  }

  /**
   * Transfer playback to a new device and determine if it should start playing.
   *
   * @param device_ids An array containing the ID of the device on which playback should be started/transferred.
   * @param options A JSON object with optional request information.
   */
  transferPlayback(
    device_ids: string[],
    options?: types.TransferPlaybackOptions
  ) {
    return this.http.put<void>("/me/player", {
      data: {
        ...options,
        device_ids
      }
    });
  }

  /**
   * Set the volume for the user's current playback device.
   *
   * @param volume_percent The volume to set.
   * @param options A JSON object with optional request information.
   */
  volume(volume_percent: number, options?: types.DeviceIdOptions) {
    return this.http.put<void>("/me/player/volume", {
      params: {
        ...options,
        volume_percent
      }
    });
  }
}
