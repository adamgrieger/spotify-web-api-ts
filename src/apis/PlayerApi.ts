import {
  type CurrentlyPlayingContextObject,
  type CurrentlyPlayingObject,
  type CursorPagingPlayHistoryObject,
  type DeviceObject,
  PlayerService,
} from '../openapi';
import { type RepeatState } from '../types/SpotifyObjects';
import {
  type DeviceIdOptions,
  type GetCurrentlyPlayingTrackOptions,
  type GetPlaybackInfoOptions,
  type GetRecentlyPlayedTracksOptions,
  type PlayOptions,
  type TransferPlaybackOptions,
} from '../types/SpotifyOptions';

export class PlayerApi {
  /**
   * Add an Item to the User's Playback Queue
   *
   * Add an item to the end of the user's current playback queue.
   *
   * @param uri The uri of the track or episode to add to the queue.
   * @param options Optional request information.
   */
  public async addToQueue(
    uri: string,
    options?: DeviceIdOptions,
  ): Promise<void> {
    await PlayerService.addToQueue(uri, options?.device_id);
  }

  /**
   * Get the User's Currently Playing Track
   *
   * Get the object currently being played on the user's Spotify account.
   *
   * @param options Optional request information.
   */
  public async getCurrentlyPlayingTrack(
    options?: GetCurrentlyPlayingTrackOptions,
  ): Promise<CurrentlyPlayingContextObject> {
    return await PlayerService.getTheUsersCurrentlyPlayingTrack(
      options?.market,
      options?.additional_types?.join(','),
    );
  }

  /**
   * Get a User's Available Devices
   *
   * Get information about a user's available devices.
   */
  public async getMyDevices(): Promise<{ devices: DeviceObject[] }> {
    return await PlayerService.getAUsersAvailableDevices();
  }

  /**
   * Get Information About the User's Current Playback
   *
   * Get information about the user's current playback state, including track
   * or episode, track progress, and active device.
   *
   * @param options Optional request information.
   */
  public async getPlaybackInfo(
    options?: GetPlaybackInfoOptions,
  ): Promise<CurrentlyPlayingObject> {
    return await PlayerService.getInformationAboutTheUsersCurrentPlayback(
      options?.market,
      options?.additional_types?.join(','),
    );
  }

  /**
   * Get the Current User's Recently Played Tracks
   *
   * Get tracks from the current user's recently played tracks.
   *
   * @param options Optional request information.
   */
  public async getRecentlyPlayedTracks(
    options?: GetRecentlyPlayedTracksOptions,
  ): Promise<CursorPagingPlayHistoryObject> {
    return await PlayerService.getRecentlyPlayed(
      options?.limit,
      options?.after,
      options?.before,
    );
  }

  /**
   * Pause a User's Playback
   *
   * Pause playback on the user's account.
   *
   * @param options Optional request information.
   */
  public async pause(options?: DeviceIdOptions): Promise<void> {
    await PlayerService.pauseAUsersPlayback(options?.device_id);
  }

  /**
   * Start or Resume a User's Playback
   *
   * Start a new context or resume current playback on the user's active device.
   *
   * @param options Optional request information.
   */
  public async play(options: PlayOptions = {}): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { device_id, ...requestOptions } = options;
    await PlayerService.startAUsersPlayback(device_id, requestOptions);
  }

  /**
   * Seek to a Position in the Currently Playing Track
   *
   * Seeks to the given position in the user's currently playing track.
   *
   * @param positionMs The position in milliseconds to seek to.
   * @param options Optional request information.
   */
  public async seek(
    positionMs: number,
    options?: DeviceIdOptions,
  ): Promise<void> {
    await PlayerService.seekToPositionInCurrentlyPlayingTrack(
      positionMs,
      options?.device_id,
    );
  }

  /**
   * Set the Repeat Mode for the User's Playback
   *
   * Set the repeat mode for the user's playback.
   *
   * @param state The desired repeat mode.
   * @param options Optional request information.
   */
  public async setRepeat(
    state: RepeatState,
    options?: DeviceIdOptions,
  ): Promise<void> {
    await PlayerService.setRepeatModeOnUsersPlayback(state, options?.device_id);
  }

  /**
   * Toggle Shuffle For User's Playback
   *
   * Toggle shuffle on or off for user's playback.
   *
   * @param state The desired shuffle state.
   * @param options Optional request information.
   */
  public async setShuffle(
    state: boolean,
    options?: DeviceIdOptions,
  ): Promise<void> {
    await PlayerService.toggleShuffleForUsersPlayback(
      state,
      options?.device_id,
    );
  }

  /**
   * Set Volume For User's Playback
   *
   * Set the volume for the user's current playback device.
   *
   * @param volumePercent The volume to set.
   * @param options Optional request information.
   */
  public async setVolume(
    volumePercent: number,
    options?: DeviceIdOptions,
  ): Promise<void> {
    await PlayerService.setVolumeForUsersPlayback(
      volumePercent,
      options?.device_id,
    );
  }

  /**
   * Skip User's Playback To Next Track
   *
   * Skips to next track in the user's queue.
   *
   * @param options Optional request information.
   */
  public async skipToNext(options?: DeviceIdOptions): Promise<void> {
    await PlayerService.skipUsersPlaybackToNextTrack(options?.device_id);
  }

  /**
   * Skip User's Playback To Previous Track
   *
   * Skips to previous track in the user's queue.
   *
   * @param options Optional request information.
   */
  public async skipToPrevious(options?: DeviceIdOptions): Promise<void> {
    await PlayerService.skipUsersPlaybackToPreviousTrack(options?.device_id);
  }

  /**
   * Transfer a User's Playback
   *
   * Transfer playback to a new device and determine if it should start playing.
   *
   * @param deviceId The ID of the device on which playback should be started/transferred.
   * @param options Optional request information.
   */
  public async transferPlayback(
    deviceId: string,
    options?: TransferPlaybackOptions,
  ): Promise<void> {
    await PlayerService.transferAUsersPlayback({
      device_ids: [deviceId],
      play: options?.play,
    });
  }
}
