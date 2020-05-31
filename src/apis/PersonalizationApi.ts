import { Http } from '../helpers/Http';
import { PersonalizationOptions } from '../types/SpotifyOptions';
import {
  GetMyTopArtistsResponse,
  GetMyTopTracksResponse,
} from '../types/SpotifyResponses';

export class PersonalizationApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Get the Current User's Top Artists
   *
   * Get the current user's top artists based on calculated affinity.
   *
   * @param options Optional request information.
   */
  getMyTopArtists(
    options?: PersonalizationOptions,
  ): Promise<GetMyTopArtistsResponse> {
    return this.http.get<GetMyTopArtistsResponse>(
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
  getMyTopTracks(
    options?: PersonalizationOptions,
  ): Promise<GetMyTopTracksResponse> {
    return this.http.get<GetMyTopTracksResponse>(
      '/me/top/tracks',
      options && { params: options },
    );
  }
}
