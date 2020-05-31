import { Http } from '../helpers/Http';
import {
  Category,
  GetRecommendationsSeeds,
  Paging,
  SimplifiedAlbum,
  SimplifiedPlaylist,
} from '../types/SpotifyObjects';
import {
  GetCategoriesOptions,
  GetCategoryOptions,
  GetCategoryPlaylistsOptions,
  GetFeaturedPlaylistsOptions,
  GetNewReleasesOptions,
  GetRecommendationsOptions,
} from '../types/SpotifyOptions';
import {
  GetAvailableGenreSeedsResponse,
  GetCategoriesResponse,
  GetCategoryPlaylistsResponse,
  GetFeaturedPlaylistsResponse,
  GetNewReleasesResponse,
  GetRecommendationsResponse,
} from '../types/SpotifyResponses';

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
  async getAvailableGenreSeeds(): Promise<string[]> {
    const response = await this.http.get<GetAvailableGenreSeedsResponse>(
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
   * Get a Category
   *
   * Get a single category used to tag items in Spotify (on, for example,
   * the Spotify player's "Browse" tab).
   *
   * @param categoryId The Spotify category ID for the category.
   * @param options Optional request information.
   */
  getCategory(
    categoryId: string,
    options?: GetCategoryOptions,
  ): Promise<Category> {
    return this.http.get<Category>(
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
    options?: GetCategoryPlaylistsOptions,
  ): Promise<Paging<SimplifiedPlaylist>> {
    const response = await this.http.get<GetCategoryPlaylistsResponse>(
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
  getFeaturedPlaylists(
    options?: GetFeaturedPlaylistsOptions,
  ): Promise<GetFeaturedPlaylistsResponse> {
    return this.http.get<GetFeaturedPlaylistsResponse>(
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
    seeds: GetRecommendationsSeeds,
    options?: GetRecommendationsOptions,
  ): Promise<GetRecommendationsResponse> {
    return this.http.get<GetRecommendationsResponse>('/recommendations', {
      params: {
        ...seeds,
        ...options,
      },
    });
  }
}
