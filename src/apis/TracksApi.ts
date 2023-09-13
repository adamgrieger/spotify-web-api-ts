import {
  type AudioAnalysisObject,
  type AudioFeaturesObject,
  type TrackObject,
  TracksService,
} from '../openapi';
import { type MarketOptions } from '../types/SpotifyOptions';

export class TracksApi {
  /**
   * Get Audio Analysis for a Track
   *
   * Get a detailed audio analysis for a single track identified by its unique
   * Spotify ID.
   *
   * @param trackId The Spotify ID for the track.
   */
  public async getAudioAnalysisForTrack(
    trackId: string,
  ): Promise<AudioAnalysisObject> {
    return await TracksService.getAudioAnalysis(trackId);
  }

  /**
   * Get Audio Features for a Track
   *
   * Get audio feature information for a single track identified by its unique
   * Spotify ID.
   *
   * @param trackId The Spotify ID for the track.
   */
  public async getAudioFeaturesForTrack(
    trackId: string,
  ): Promise<AudioFeaturesObject> {
    return await TracksService.getAudioFeatures(trackId);
  }

  /**
   * Get Audio Features for Several Tracks
   *
   * Get audio features for multiple tracks based on their Spotify IDs.
   *
   * @param trackIds The Spotify IDs for the tracks.
   */
  public async getAudioFeaturesForTracks(
    trackIds: string[],
  ): Promise<AudioFeaturesObject[]> {
    return await TracksService.getSeveralAudioFeatures(trackIds.join(',')).then(
      ({ audio_features }) => audio_features,
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
  public async getTrack(
    trackId: string,
    options?: MarketOptions,
  ): Promise<TrackObject> {
    return await TracksService.getTrack(trackId, options?.market);
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
  public async getTracks(
    trackIds: string[],
    options?: MarketOptions,
  ): Promise<TrackObject[]> {
    return await TracksService.getSeveralTracks(
      trackIds.join(','),
      options?.market,
    ).then(({ tracks }) => tracks);
  }
}
