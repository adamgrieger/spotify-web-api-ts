import { Http } from '../helpers/Http';
import * as types from '../types';

export class EpisodesApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Get an Episode
   *
   * Get Spotify catalog information for a single episode identified by its
   * unique Spotify ID.
   *
   * @param options Optional request information.
   */
  getEpisode(episodeId: string, options?: types.MarketOptions) {
    return this.http.get<types.Episode>(
      `/episodes/${episodeId}`,
      options && { params: options },
    );
  }

  /**
   * Get Several Episodes
   *
   * Get Spotify catalog information for multiple episodes based on their
   * Spotify IDs.
   *
   * @param episodeIds A list of the Spotify IDs for the episodes.
   * @param options Optional request information.
   */
  getEpisodes(episodeIds: string[], options?: types.MarketOptions) {
    return this.http.get<types.GetEpisodesResponse>('/episodes', {
      params: {
        ...options,
        ids: episodeIds,
      },
    });
  }
}
