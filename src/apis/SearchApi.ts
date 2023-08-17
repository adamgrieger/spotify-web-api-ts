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
import { type SearchOptions } from '../types/SpotifyOptions';

export type SearchResponse = Awaited<ReturnType<typeof SearchService.search>>;
export type SearchType = Parameters<typeof SearchService.search>[1][number];

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
  ): Promise<PagingSimplifiedAlbumObject | undefined> {
    return await this.search(query, ['album'], options).then(
      ({ albums }) => albums,
    );
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
  ): Promise<PagingArtistObject | undefined> {
    return await this.search(query, ['artist'], options).then(
      ({ artists }) => artists,
    );
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
  ): Promise<PagingSimplifiedAudiobookObject | undefined> {
    return await this.search(query, ['audiobook'], options).then(
      ({ audiobooks }) => audiobooks,
    );
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
  ): Promise<PagingSimplifiedEpisodeObject | undefined> {
    return await this.search(query, ['episode'], options).then(
      ({ episodes }) => episodes,
    );
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
  ): Promise<PagingPlaylistObject | undefined> {
    return await this.search(query, ['playlist'], options).then(
      ({ playlists }) => playlists,
    );
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
  ): Promise<PagingSimplifiedShowObject | undefined> {
    return await this.search(query, ['show'], options).then(
      ({ shows }) => shows,
    );
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
  ): Promise<PagingTrackObject | undefined> {
    return await this.search(query, ['track'], options).then(
      ({ tracks }) => tracks,
    );
  }
}
