import {
  AlbumsService,
  CategoriesService,
  type CategoryObject,
  GenresService,
  type PagingFeaturedPlaylistObject,
  type PagingObject,
  type PagingSimplifiedAlbumObject,
  PlaylistsService,
  type RecommendationsObject,
  TracksService,
} from '../openapi';
import { type GetRecommendationsSeeds } from '../types/SpotifyObjects';
import {
  type GetCategoriesOptions,
  type GetCategoryOptions,
  type GetCategoryPlaylistsOptions,
  type GetFeaturedPlaylistsOptions,
  type GetNewReleasesOptions,
  type GetRecommendationsOptions,
} from '../types/SpotifyOptions';

export class BrowseApi {
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
  public async getAvailableGenreSeeds(): Promise<{ genres: string[] }> {
    return await GenresService.getRecommendationGenres();
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
  public async getCategories(
    options?: GetCategoriesOptions,
  ): Promise<{ categories: PagingObject }> {
    return await CategoriesService.getCategories(
      options?.country,
      options?.locale,
      options?.limit,
      options?.offset,
    );
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
  public async getCategory(
    categoryId: string,
    options?: GetCategoryOptions,
  ): Promise<CategoryObject> {
    return await CategoriesService.getACategory(
      categoryId,
      options?.country,
      options?.locale,
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
  public async getCategoryPlaylists(
    categoryId: string,
    options?: GetCategoryPlaylistsOptions,
  ): Promise<PagingFeaturedPlaylistObject> {
    return await CategoriesService.getACategoriesPlaylists(
      categoryId,
      options?.country,
      options?.limit,
      options?.offset,
    );
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
  public async getFeaturedPlaylists(
    options?: GetFeaturedPlaylistsOptions,
  ): Promise<PagingFeaturedPlaylistObject> {
    return await PlaylistsService.getFeaturedPlaylists(
      options?.country,
      options?.locale,
      options?.timestamp,
      options?.limit,
      options?.offset,
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
  public async getNewReleases(
    options?: GetNewReleasesOptions,
  ): Promise<{ albums: PagingSimplifiedAlbumObject }> {
    return await AlbumsService.getNewReleases(
      options?.country,
      options?.limit,
      options?.offset,
    );
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
  public async getRecommendations(
    seeds: GetRecommendationsSeeds,
    options?: GetRecommendationsOptions,
  ): Promise<RecommendationsObject> {
    return await TracksService.getRecommendations(
      seeds.seed_artists?.join(',') ?? '',
      seeds.seed_genres?.join(',') ?? '',
      seeds.seed_tracks?.join(',') ?? '',
      options?.limit,
      options?.market,
      options?.min_acousticness,
      options?.max_acousticness,
      options?.target_acousticness,
      options?.min_danceability,
      options?.max_danceability,
      options?.target_danceability,
      options?.min_duration_ms,
      options?.max_duration_ms,
      options?.target_duration_ms,
      options?.min_energy,
      options?.max_energy,
      options?.target_energy,
      options?.min_instrumentalness,
      options?.max_instrumentalness,
      options?.target_instrumentalness,
      options?.min_key,
      options?.max_key,
      options?.target_key,
      options?.min_liveness,
      options?.max_liveness,
      options?.target_liveness,
      options?.min_loudness,
      options?.max_loudness,
      options?.target_loudness,
      options?.min_mode,
      options?.max_mode,
      options?.target_mode,
      options?.min_popularity,
      options?.max_popularity,
      options?.target_popularity,
      options?.min_speechiness,
      options?.max_speechiness,
      options?.target_speechiness,
      options?.min_tempo,
      options?.max_tempo,
      options?.target_tempo,
      options?.min_time_signature,
      options?.max_time_signature,
      options?.target_time_signature,
      options?.min_valence,
      options?.max_valence,
      options?.target_valence,
    );
  }
}
