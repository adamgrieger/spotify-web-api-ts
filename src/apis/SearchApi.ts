import { Http } from '../helpers/Http';
import { searchHelper } from '../helpers/searchHelper';
import * as types from '../types';

export class SearchApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Search for an Item
   *
   * Get Spotify Catalog information about albums, artists, playlists, tracks,
   * shows, or episodes that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param type The item types to search across.
   * @param options Optional request information.
   */
  search(
    query: string,
    type: types.SearchType[],
    options?: types.SearchOptions,
  ) {
    return searchHelper<types.SearchResponse>(this.http, query, type, options);
  }

  /**
   * Search for an Album
   *
   * Get Spotify Catalog information about albums that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param options Optional request information.
   */
  async searchAlbums(query: string, options?: types.SearchOptions) {
    const response = await searchHelper<types.SearchAlbumsResponse>(
      this.http,
      query,
      ['album'],
      options,
    );
    return response.albums;
  }

  /**
   * Search for an Artist
   *
   * Get Spotify Catalog information about artists that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param options Optional request information.
   */
  async searchArtists(query: string, options?: types.SearchOptions) {
    const response = await searchHelper<types.SearchArtistsResponse>(
      this.http,
      query,
      ['artist'],
      options,
    );
    return response.artists;
  }

  /**
   * Search for an Episode
   *
   * Get Spotify Catalog information about episodes that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param options Optional request information.
   */
  async searchEpisodes(query: string, options?: types.SearchOptions) {
    const response = await searchHelper<types.SearchEpisodesResponse>(
      this.http,
      query,
      ['episode'],
      options,
    );
    return response.episodes;
  }

  /**
   * Search for a Playlist
   *
   * Get Spotify Catalog information about playlists that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param options Optional request information.
   */
  async searchPlaylists(query: string, options?: types.SearchOptions) {
    const response = await searchHelper<types.SearchPlaylistsResponse>(
      this.http,
      query,
      ['playlist'],
      options,
    );
    return response.playlists;
  }

  /**
   * Search for a Show
   *
   * Get Spotify Catalog information about shows that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param options Optional request information.
   */
  async searchShows(query: string, options?: types.SearchOptions) {
    const response = await searchHelper<types.SearchShowsResponse>(
      this.http,
      query,
      ['show'],
      options,
    );
    return response.shows;
  }

  /**
   * Search for a Track
   *
   * Get Spotify Catalog information about tracks that match a keyword string.
   *
   * @param query Search query keywords, optional field filters, and operators.
   * @param options Optional request information.
   */
  async searchTracks(query: string, options?: types.SearchOptions) {
    const response = await searchHelper<types.SearchTracksResponse>(
      this.http,
      query,
      ['track'],
      options,
    );
    return response.tracks;
  }
}
