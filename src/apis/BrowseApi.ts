import { Http } from '../helpers/Http';
import * as types from '../types';

export class BrowseApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Get Available Genre Seeds
   *
   * Retrieve a list of available genres seed parameter values for
   * recommendations.
   */
  async getAvailableGenreSeeds() {
    const response = await this.http.get<types.GetAvailableGenreSeedsResponse>(
      '/recommendations/available-genre-seeds',
    );
    return response.genres;
  }

  /**
   * Get a List of Categories
   *
   * Get a list of categories used to tag items in Spotify (on, for example,
   * the Spotify player's "Browse" tab).
   *
   * @param options Optional request information.
   */
  async getCategories(options?: types.GetCategoriesOptions) {
    const response = await this.http.get<types.GetCategoriesResponse>(
      '/browse/categories',
      options && { params: options },
    );
    return response.categories;
  }

  /**
   * Get a Category
   *
   * Get a single category used to tag items in Spotify (on, for example,
   * the Spotify player's "Browse" tab).
   *
   * @param categoryId The Spotify category ID for the category.
   * @param options Optional request information.
   */
  getCategory(categoryId: string, options?: types.GetCategoryOptions) {
    return this.http.get<types.Category>(
      `/browse/categories/${categoryId}`,
      options && { params: options },
    );
  }

  /**
   * Get a Category's Playlists
   *
   * Get a list of Spotify playlists tagged with a particular category.
   *
   * @param categoryId The Spotify category ID for the category.
   * @param options Optional request information.
   */
  async getCategoryPlaylists(
    categoryId: string,
    options?: types.GetCategoryPlaylistsOptions,
  ) {
    const response = await this.http.get<types.GetCategoryPlaylistsResponse>(
      `/browse/categories/${categoryId}/playlists`,
      options && { params: options },
    );
    return response.playlists;
  }

  /**
   * Get a List of Featured Playlists
   *
   * Get a list of Spotify featured playlists (shown, for example, on a Spotify
   * player's "Browse" tab).
   *
   * @param options Optional request information.
   */
  getFeaturedPlaylists(options?: types.GetFeaturedPlaylistsOptions) {
    return this.http.get<types.GetFeaturedPlaylistsResponse>(
      '/browse/featured-playlists',
      options && { params: options },
    );
  }

  /**
   * Get a List of New Releases
   *
   * Get a list of new album releases featured in Spotify (shown, for example,
   * on a Spotify player's "Browse" tab).
   *
   * @param options Optional request information.
   */
  async getNewReleases(options?: types.GetNewReleasesOptions) {
    const response = await this.http.get<types.GetNewReleasesResponse>(
      '/browse/new-releases',
      options && { params: options },
    );
    return response.albums;
  }

  /**
   * Get Recommendations Based on Seeds
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
   * @param seeds Artists, genres, and/or tracks to use as seeds for recommendations.
   * @param options Optional request information.
   */
  getRecommendations(
    seeds: types.GetRecommendationsSeeds,
    options?: types.GetRecommendationsOptions,
  ) {
    return this.http.get<types.GetRecommendationsResponse>('/recommendations', {
      params: {
        ...seeds,
        ...options,
      },
    });
  }
}
