import { Http } from "../helpers/Http";
import * as types from "../types";

export class PersonalizationApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Get the current user's top artists based on calculated affinity.
   *
   * @param options A JSON object with optional request information.
   */
  getMyTopArtists(options?: types.PersonalizationOptions) {
    return this.http.get<types.GetMyTopArtistsResponse>(
      "/me/top/artists",
      options && { params: options }
    );
  }

  /**
   * Get the current user's top tracks based on calculated affinity.
   *
   * @param options A JSON object with optional request information.
   */
  getMyTopTracks(options?: types.PersonalizationOptions) {
    return this.http.get<types.GetMyTopTracksResponse>(
      "/me/top/tracks",
      options && { params: options }
    );
  }
}
