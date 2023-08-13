import { type Http } from '../helpers/Http';
import { type Episode } from '../types/SpotifyObjects';
import { type MarketOptions } from '../types/SpotifyOptions';
import { type GetEpisodesResponse } from '../types/SpotifyResponses';

export class EpisodesApi {
  private readonly http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * ### Get an Episode
   *
   * Get Spotify catalog information for a single episode identified by its
   * unique Spotify ID.
   *
   * **Required Scopes:** `user-read-playback-position` for reading the user's
   * resume points.
   *
   * @example
   * ```ts
   * const episode = await spotify.episodes.getEpisode('5VhaAEtTrKQ1NSneHsXK6C');
   * console.log(episode.name);
   * // "S1E6 - Institutionalized by Kendrick Lamar"
   * ```
   *
   * @param options Optional request information.
   */
  async getEpisode(
    episodeId: string,
    options?: MarketOptions,
  ): Promise<Episode> {
    return await this.http.get<Episode>(
      `/episodes/${episodeId}`,
      options && { params: options },
    );
  }

  /**
   * ### Get Several Episodes
   *
   * Get Spotify catalog information for multiple episodes based on their
   * Spotify IDs.
   *
   * **Required Scopes:** `user-read-playback-position` for reading the user's
   * resume points.
   *
   * @example
   * ```ts
   * const episodes = await spotify.episodes.getEpisodes([
   *  '3Ht9rzglNNgJBFGp2RL7o2',
   *  '7r40piSdCht1NL720dKNWf',
   * ]);
   * console.log(episodes.map(episode => episode.name));
   * // Array [ "The Soul Train Episode", "How the Voyager Golden Records Work" ]
   * ```
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
