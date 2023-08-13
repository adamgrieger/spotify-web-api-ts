import { type Http } from '../helpers/Http';
import { type PersonalizationOptions } from '../types/SpotifyOptions';
import {
  type GetMyTopArtistsResponse,
  type GetMyTopTracksResponse,
} from '../types/SpotifyResponses';

export class PersonalizationApi {
  private readonly http: Http;

  public constructor(http: Http) {
    this.http = http;
  }

  /**
   * Get the Current User's Top Artists
   *
   * Get the current user's top artists based on calculated affinity.
   *
   * @param options Optional request information.
   */
  public async getMyTopArtists(
    options?: PersonalizationOptions,
  ): Promise<GetMyTopArtistsResponse> {
    return await this.http.get<GetMyTopArtistsResponse>(
      '/me/top/artists',
      options && { params: options },
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
  ): Promise<GetMyTopTracksResponse> {
    return await this.http.get<GetMyTopTracksResponse>(
      '/me/top/tracks',
      options && { params: options },
    );
  }
}
