import {
  type PagingArtistObject,
  type PagingTrackObject,
  UsersService,
} from '../openapi';
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
  ): Promise<PagingArtistObject> {
    return (await UsersService.getUsersTopArtistsAndTracks(
      'artists',
      options?.time_range,
      options?.limit,
      options?.offset,
    )) as PagingArtistObject;
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
  ): Promise<PagingTrackObject> {
    return (await UsersService.getUsersTopArtistsAndTracks(
      'tracks',
      options?.time_range,
      options?.limit,
      options?.offset,
    )) as PagingTrackObject;
  }
}
