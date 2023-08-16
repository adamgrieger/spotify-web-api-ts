import {
  type PagingSimplifiedEpisodeObject,
  type ShowObject,
  ShowsService,
  type SimplifiedShowObject,
} from '../openapi';
import {
  type GetShowEpisodesOptions,
  type MarketOptions,
} from '../types/SpotifyOptions';

export class ShowsApi {
  /**
   * Get a Show
   *
   * Get Spotify catalog information for a single show identified by its unique
   * Spotify ID.
   *
   * @param showId The Spotify ID for the show.
   * @param options Optional request information.
   */
  public async getShow(
    showId: string,
    options?: MarketOptions,
  ): Promise<ShowObject> {
    return await ShowsService.getAShow(showId, options?.market);
  }

  /**
   * Get a Show's Episodes
   *
   * Get Spotify catalog information about a show's episodes.
   *
   * @param showId The Spotify ID for the show.
   * @param options Optional request information.
   */
  public async getShowEpisodes(
    showId: string,
    options?: GetShowEpisodesOptions,
  ): Promise<PagingSimplifiedEpisodeObject> {
    return await ShowsService.getAShowsEpisodes(
      showId,
      options?.market,
      options?.limit,
      options?.offset,
    );
  }

  /**
   * Get Several Shows
   *
   * Get Spotify catalog information for multiple shows based on their Spotify
   * IDs.
   *
   * @param showIds The Spotify IDs for the shows.
   * @param options Optional request information.
   */
  public async getShows(
    showIds: string[],
    options?: MarketOptions,
  ): Promise<SimplifiedShowObject[]> {
    return await ShowsService.getMultipleShows(
      showIds.join(','),
      options?.market,
    ).then(({ shows }) => shows);
  }
}
