import { Http } from "../helpers/Http";
import * as model from "../model";

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
  getMyTopArtists(options?: model.GetMyTopArtistsOptions) {
    return this.http.get<model.GetMyTopArtistsResponse>(
      "/me/top/artists",
      options && { params: options }
    );
  }

  /**
   * Get the current user's top tracks based on calculated affinity.
   *
   * @param options A JSON object with optional request information.
   */
  getMyTopTracks(options?: model.GetMyTopTracksOptions) {
    return this.http.get<model.GetMyTopTracksResponse>(
      "/me/top/tracks",
      options && { params: options }
    );
  }
}
