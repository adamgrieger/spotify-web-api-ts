import { Http } from '../helpers/Http';
import { Show, SimplifiedShow } from '../types/SpotifyObjects';
import { GetShowEpisodesOptions, MarketOptions } from '../types/SpotifyOptions';
import {
  GetShowEpisodesResponse,
  GetShowsResponse,
} from '../types/SpotifyResponses';

export class ShowsApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Get a Show
   *
   * Get Spotify catalog information for a single show identified by its unique
   * Spotify ID.
   *
   * @param showId The Spotify ID for the show.
   * @param options Optional request information.
   */
  getShow(showId: string, options?: MarketOptions): Promise<Show> {
    return this.http.get<Show>(
      `/shows/${showId}`,
      options && { params: options },
    );
  }

  /**
   * Get a Show's Episodes
   *
   * Get Spotify catalog information about a show's episodes.
   *
   * @param showId The Spotify ID for the show.
   * @param options Optional request information.
   */
  getShowEpisodes(
    showId: string,
    options?: GetShowEpisodesOptions,
  ): Promise<GetShowEpisodesResponse> {
    return this.http.get<GetShowEpisodesResponse>(
      `/shows/${showId}/episodes`,
      options && { params: options },
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
  async getShows(
    showIds: string[],
    options?: MarketOptions,
  ): Promise<Array<SimplifiedShow | null>> {
    const response = await this.http.get<GetShowsResponse>('/shows', {
      params: {
        ...options,
        ids: showIds,
      },
    });
    return response.shows;
  }
}
