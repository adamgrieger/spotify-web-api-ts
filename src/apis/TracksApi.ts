import { Http } from "../helpers/Http";
import * as types from "../types";

export class TracksApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Get Audio Analysis for a Track
   *
   * Get a detailed audio analysis for a single track identified by its unique
   * Spotify ID.
   *
   * @param trackId The Spotify ID for the track.
   */
  getAudioAnalysisForTrack(trackId: string) {
    return this.http.get<types.GetAudioAnalysisForTrackResponse>(
      `/audio-analysis/${trackId}`
    );
  }

  /**
   * Get Audio Features for a Track
   *
   * Get audio feature information for a single track identified by its unique
   * Spotify ID.
   *
   * @param trackId The Spotify ID for the track.
   */
  getAudioFeaturesForTrack(trackId: string) {
    return this.http.get<types.GetAudioFeaturesForTrackResponse>(
      `/audio-features/${trackId}`
    );
  }

  /**
   * Get Audio Features for Several Tracks
   *
   * Get audio features for multiple tracks based on their Spotify IDs.
   *
   * @param trackIds The Spotify IDs for the tracks.
   */
  getAudioFeaturesForTracks(trackIds: string[]) {
    return this.http.get<types.GetAudioFeaturesForTracksResponse>(
      "/audio-features",
      {
        params: {
          ids: trackIds
        }
      }
    );
  }

  /**
   * Get a Track
   *
   * Get Spotify catalog information for a single track identified by its unique
   * Spotify ID.
   *
   * @param trackId The Spotify ID for the track.
   * @param options Optional request information.
   */
  getTrack(trackId: string, options?: types.GetTrackOptions) {
    return this.http.get<types.GetTrackResponse>(
      `/tracks/${trackId}`,
      options && { params: options }
    );
  }

  /**
   * Get Several Tracks
   *
   * Get Spotify catalog information for multiple tracks based on their Spotify
   * IDS.
   * @param trackIds The Spotify IDs for the tracks.
   * @param options Optional request information.
   */
  getTracks(trackIds: string[], options?: types.GetTracksOptions) {
    return this.http.get<types.GetTracksResponse>("/tracks", {
      params: {
        ...options,
        ids: trackIds
      }
    });
  }
}
