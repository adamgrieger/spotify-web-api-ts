import {
  type PagingArtistObject,
  type PagingPlaylistObject,
  type PagingSimplifiedAlbumObject,
  type PagingSimplifiedAudiobookObject,
  type PagingSimplifiedEpisodeObject,
  type PagingSimplifiedShowObject,
  type PagingTrackObject,
  SearchService,
} from '../openapi';
import { type SearchType } from '../types/SpotifyObjects';
import { type SearchOptions } from '../types/SpotifyOptions';
import { type SearchResponse } from '../types/SpotifyResponses';

export class SearchApi {
  /**
   * Search for an Item
   *
   * Get Spotify Catalog information about albums, artists, playlists, tracks,
   * shows, or episodes that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param searchTypes The item types to search across.
   * @param options Optional request information.
   */
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public async search<SearchTypes extends SearchType[]>(
    query: string,
    searchTypes: SearchTypes,
    options?: SearchOptions,
  ) {
    return (await SearchService.search(
      query,
      searchTypes,
      options?.market,
      options?.limit,
      options?.offset,
      options?.include_external,
    )) as Pick<SearchResponse, `${SearchTypes[number]}s`>;
  }

  /**
   * Search for an Album
   *
   * Get Spotify Catalog information about albums that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param options Optional request information.
   */
  public async searchAlbums(
    query: string,
    options?: SearchOptions,
  ): Promise<{ albums?: PagingSimplifiedAlbumObject }> {
    return await this.search(query, ['album'], options);
  }

  /**
   * Search for an Artist
   *
   * Get Spotify Catalog information about artists that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param options Optional request information.
   */
  public async searchArtists(
    query: string,
    options?: SearchOptions,
  ): Promise<{ artists?: PagingArtistObject }> {
    return await this.search(query, ['artist'], options);
  }

  /**
   * Search for an Audiobook
   *
   * Get Spotify Catalog information about audiobooks that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param options Optional request information.
   */
  public async searchAudiobooks(
    query: string,
    options?: SearchOptions,
  ): Promise<{ audiobooks?: PagingSimplifiedAudiobookObject }> {
    return await this.search(query, ['audiobook'], options);
  }

  /**
   * Search for an Episode
   *
   * Get Spotify Catalog information about episodes that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param options Optional request information.
   */
  public async searchEpisodes(
    query: string,
    options?: SearchOptions,
  ): Promise<{ episodes?: PagingSimplifiedEpisodeObject }> {
    return await this.search(query, ['episode'], options);
  }

  /**
   * Search for a Playlist
   *
   * Get Spotify Catalog information about playlists that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param options Optional request information.
   */
  public async searchPlaylists(
    query: string,
    options?: SearchOptions,
  ): Promise<{ playlists?: PagingPlaylistObject }> {
    return await this.search(query, ['playlist'], options);
  }

  /**
   * Search for a Show
   *
   * Get Spotify Catalog information about shows that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param options Optional request information.
   */
  public async searchShows(
    query: string,
    options?: SearchOptions,
  ): Promise<{ shows?: PagingSimplifiedShowObject }> {
    return await this.search(query, ['show'], options);
  }

  /**
   * Search for a Track
   *
   * Get Spotify Catalog information about tracks that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param options Optional request information.
   */
  public async searchTracks(
    query: string,
    options?: SearchOptions,
  ): Promise<{ tracks?: PagingTrackObject }> {
    return await this.search(query, ['track'], options);
  }
}
