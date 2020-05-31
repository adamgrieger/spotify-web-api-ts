import { Http } from '../helpers/Http';
import { Episode } from '../types/SpotifyObjects';
import { MarketOptions } from '../types/SpotifyOptions';
import { GetEpisodesResponse } from '../types/SpotifyResponses';

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
  getEpisode(episodeId: string, options?: MarketOptions): Promise<Episode> {
    return this.http.get<Episode>(
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
  async getEpisodes(
    episodeIds: string[],
    options?: MarketOptions,
  ): Promise<Array<Episode | null>> {
    const response = await this.http.get<GetEpisodesResponse>('/episodes', {
      params: {
        ...options,
        ids: episodeIds,
      },
    });
    return response.episodes;
  }
}
