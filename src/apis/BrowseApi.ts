import { type Http } from '../helpers/Http';
import {
  type Category,
  type GetRecommendationsSeeds,
  type Paging,
  type SimplifiedAlbum,
  type SimplifiedPlaylist,
} from '../types/SpotifyObjects';
import {
  type GetCategoriesOptions,
  type GetCategoryOptions,
  type GetCategoryPlaylistsOptions,
  type GetFeaturedPlaylistsOptions,
  type GetNewReleasesOptions,
  type GetRecommendationsOptions,
} from '../types/SpotifyOptions';
import {
  type GetAvailableGenreSeedsResponse,
  type GetCategoriesResponse,
  type GetCategoryPlaylistsResponse,
  type GetFeaturedPlaylistsResponse,
  type GetNewReleasesResponse,
  type GetRecommendationsResponse,
} from '../types/SpotifyResponses';

export class BrowseApi {
  private readonly http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * ### Get Available Genre Seeds
   *
   * Retrieve a list of available genres seed parameter values for
   * recommendations.
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * console.log(await spotify.browse.getAvailableGenreSeeds());
   * // Array [ "acoustic", "afrobeat", ... ]
   * ```
   */
  async getAvailableGenreSeeds(): Promise<string[]> {
    const response = await this.http.get<GetAvailableGenreSeedsResponse>(
      '/recommendations/available-genre-seeds',
    );
    return response.genres;
  }

  /**
   * ### Get a List of Categories
   *
   * Get a list of categories used to tag items in Spotify (on, for example,
   * the Spotify player's "Browse" tab).
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const categories = await spotify.browse.getCategories();
   * console.log(categories.items.map(category => category.name));
   * // Array [ "Top Lists", "Black History Is Now", ... ]
   * ```
   *
   * @param options Optional request information.
   */
  async getCategories(
    options?: GetCategoriesOptions,
  ): Promise<Paging<Category>> {
    const response = await this.http.get<GetCategoriesResponse>(
      '/browse/categories',
      options && { params: options },
    );
    return response.categories;
  }

  /**
   * ### Get a Category
   *
   * Get a single category used to tag items in Spotify (on, for example,
   * the Spotify player's "Browse" tab).
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const category = await spotify.browse.getCategory('at_home');
   * console.log(category.name);
   * // "At Home"
   * ```
   *
   * @param categoryId The Spotify category ID for the category.
   * @param options Optional request information.
   */
  async getCategory(
    categoryId: string,
    options?: GetCategoryOptions,
  ): Promise<Category> {
    return await this.http.get<Category>(
      `/browse/categories/${categoryId}`,
      options && { params: options },
    );
  }

  /**
   * ### Get a Category's Playlists
   *
   * Get a list of Spotify playlists tagged with a particular category.
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const playlists = await spotify.browse.getCategoryPlaylists('sleep');
   * console.log(playlists.items.map(playlist => playlist.name));
   * // Array [ "Sleep", "Deep Sleep", "Night Rain", ... ]
   * ```
   *
   * @param categoryId The Spotify category ID for the category.
   * @param options Optional request information.
   */
  async getCategoryPlaylists(
    categoryId: string,
    options?: GetCategoryPlaylistsOptions,
  ): Promise<Paging<SimplifiedPlaylist>> {
    const response = await this.http.get<GetCategoryPlaylistsResponse>(
      `/browse/categories/${categoryId}/playlists`,
      options && { params: options },
    );
    return response.playlists;
  }

  /**
   * ### Get a List of Featured Playlists
   *
   * Get a list of Spotify featured playlists (shown, for example, on a Spotify
   * player's "Browse" tab).
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const { playlists } = await spotify.browse.getFeaturedPlaylists();
   * console.log(playlists.items.map(playlist => playlist.name));
   * // Array [ "Calm Vibes", "Sleep", "Bliss", ... ]
   * ```
   *
   * @param options Optional request information.
   */
  async getFeaturedPlaylists(
    options?: GetFeaturedPlaylistsOptions,
  ): Promise<GetFeaturedPlaylistsResponse> {
    return await this.http.get<GetFeaturedPlaylistsResponse>(
      '/browse/featured-playlists',
      options && { params: options },
    );
  }

  /**
   * ### Get a List of New Releases
   *
   * Get a list of new album releases featured in Spotify (shown, for example,
   * on a Spotify player's "Browse" tab).
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const releases = await spotify.browse.getNewReleases();
   * console.log(releases.items.map(release => release.name));
   * // Array [ "POPSTAR (feat. Drake)", "Brightest Blue", ... ]
   * ```
   *
   * @param options Optional request information.
   */
  async getNewReleases(
    options?: GetNewReleasesOptions,
  ): Promise<Paging<SimplifiedAlbum>> {
    const response = await this.http.get<GetNewReleasesResponse>(
      '/browse/new-releases',
      options && { params: options },
    );
    return response.albums;
  }

  /**
   * ### Get Recommendations Based on Seeds
   *
   * Create a playlist-style listening experience based on seed artists, tracks,
   * and genres.
   *
   * Recommendations are generated based on the available information for a
   * given seed entity and matched against similar artists and tracks. If there
   * is sufficient information about the provided seeds, a list of tracks will
   * be returned together with pool size details.
   *
   * For artists and tracks that are very new or obscure there might not be
   * enough data to generate a list of tracks.
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const recommendations = await spotify.browse.getRecommendations({
   *   seed_artists: ['5LhTec3c7dcqBvpLRWbMcf', '0IVcLMMbm05VIjnzPkGCyp'],
   * });
   * console.log(recommendations.tracks.map(track => track.name));
   * // [ "J's Day Theme #3 (Support)", "People", "Guv'nor", ... ]
   * ```
   *
   * @param seeds Artists, genres, and/or tracks to use as seeds for recommendations.
   * @param options Optional request information.
   */
  async getRecommendations(
    seeds: GetRecommendationsSeeds,
    options?: GetRecommendationsOptions,
  ): Promise<GetRecommendationsResponse> {
    return await this.http.get<GetRecommendationsResponse>('/recommendations', {
      params: {
        ...seeds,
        ...options,
      },
    });
  }
}
