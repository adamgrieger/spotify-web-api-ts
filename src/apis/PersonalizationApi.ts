import { UsersService } from '../openapi';
import { type PersonalizationOptions } from '../types/SpotifyOptions';

export class PersonalizationApi {
  /**
   * Get the Current User's Top Artists
   *
   * Get the current user's top artists based on calculated affinity.
   *
   * @param options Optional request information.
   */
  public async getMyTopArtists(
    options?: PersonalizationOptions,
  ): Promise<
    Awaited<ReturnType<typeof UsersService.getUsersTopArtistsAndTracks>>
  > {
    return await UsersService.getUsersTopArtistsAndTracks(
      'artists',
      options?.time_range,
      options?.limit,
      options?.offset,
    );
  }

  /**
   * Get the Current User's Top Tracks
   *
   * Get the current user's top tracks based on calculated affinity.
   *
   * @param options Optional request information.
   */
  public async getMyTopTracks(
    options?: PersonalizationOptions,
  ): Promise<
    Awaited<ReturnType<typeof UsersService.getUsersTopArtistsAndTracks>>
  > {
    return await UsersService.getUsersTopArtistsAndTracks(
      'tracks',
      options?.time_range,
      options?.limit,
      options?.offset,
    );
  }
}
