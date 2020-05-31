import { Http } from '../helpers/Http';
import { AudioAnalysis, AudioFeatures, Track } from '../types/SpotifyObjects';
import { MarketOptions } from '../types/SpotifyOptions';
import {
  GetAudioFeaturesForTracksResponse,
  GetTracksResponse,
} from '../types/SpotifyResponses';

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
  getAudioAnalysisForTrack(trackId: string): Promise<AudioAnalysis> {
    return this.http.get<AudioAnalysis>(`/audio-analysis/${trackId}`);
  }

  /**
   * Get Audio Features for a Track
   *
   * Get audio feature information for a single track identified by its unique
   * Spotify ID.
   *
   * @param trackId The Spotify ID for the track.
   */
  getAudioFeaturesForTrack(trackId: string): Promise<AudioFeatures> {
    return this.http.get<AudioFeatures>(`/audio-features/${trackId}`);
  }

  /**
   * Get Audio Features for Several Tracks
   *
   * Get audio features for multiple tracks based on their Spotify IDs.
   *
   * @param trackIds The Spotify IDs for the tracks.
   */
  async getAudioFeaturesForTracks(
    trackIds: string[],
  ): Promise<Array<AudioFeatures | null>> {
    const response = await this.http.get<GetAudioFeaturesForTracksResponse>(
      '/audio-features',
      {
        params: {
          ids: trackIds,
        },
      },
    );
    return response.audio_features;
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
  getTrack(trackId: string, options?: MarketOptions): Promise<Track> {
    return this.http.get<Track>(
      `/tracks/${trackId}`,
      options && { params: options },
    );
  }

  /**
   * Get Several Tracks
   *
   * Get Spotify catalog information for multiple tracks based on their Spotify
   * IDs.
   *
   * @param trackIds The Spotify IDs for the tracks.
   * @param options Optional request information.
   */
  async getTracks(
    trackIds: string[],
    options?: MarketOptions,
  ): Promise<Array<Track | null>> {
    const response = await this.http.get<GetTracksResponse>('/tracks', {
      params: {
        ...options,
        ids: trackIds,
      },
    });
    return response.tracks;
  }
}
