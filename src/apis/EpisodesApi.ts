import { type EpisodeObject, EpisodesService } from '../openapi';
import { type MarketOptions } from '../types/SpotifyOptions';

export class EpisodesApi {
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
   * @param episodeId The Spotify ID for the episode.
   * @param options Optional request information.
   */
  public async getEpisode(
    episodeId: string,
    options?: MarketOptions,
  ): Promise<EpisodeObject> {
    return await EpisodesService.getAnEpisode(episodeId, options?.market);
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
  public async getEpisodes(
    episodeIds: string[],
    options?: MarketOptions,
  ): Promise<{ episodes: EpisodeObject[] }> {
    return await EpisodesService.getMultipleEpisodes(
      episodeIds.join(','),
      options?.market,
    );
  }
}
