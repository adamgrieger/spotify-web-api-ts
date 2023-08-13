import { searchHelper } from '../helpers/searchHelper';
import {
  type Artist,
  type Paging,
  type SearchType,
  type SimplifiedAlbum,
  type SimplifiedEpisode,
  type SimplifiedPlaylist,
  type SimplifiedShow,
  type Track,
} from '../types/SpotifyObjects';
import { type SearchOptions } from '../types/SpotifyOptions';
import {
  type SearchAlbumsResponse,
  type SearchArtistsResponse,
  type SearchEpisodesResponse,
  type SearchPlaylistsResponse,
  type SearchResponse,
  type SearchShowsResponse,
  type SearchTracksResponse,
} from '../types/SpotifyResponses';
import { type Http } from '../helpers/Http';

export class SearchApi {
  private readonly http: Http;

  public constructor(http: Http) {
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
  public async search(
    query: string,
    type: SearchType[],
    options?: SearchOptions,
  ): Promise<SearchResponse> {
    return await searchHelper<SearchResponse>(this.http, query, type, options);
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
  ): Promise<Paging<SimplifiedAlbum>> {
    const response = await searchHelper<SearchAlbumsResponse>(
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
  public async searchArtists(
    query: string,
    options?: SearchOptions,
  ): Promise<Paging<Artist>> {
    const response = await searchHelper<SearchArtistsResponse>(
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
  public async searchEpisodes(
    query: string,
    options?: SearchOptions,
  ): Promise<Paging<SimplifiedEpisode>> {
    const response = await searchHelper<SearchEpisodesResponse>(
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
  public async searchPlaylists(
    query: string,
    options?: SearchOptions,
  ): Promise<Paging<SimplifiedPlaylist>> {
    const response = await searchHelper<SearchPlaylistsResponse>(
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
  public async searchShows(
    query: string,
    options?: SearchOptions,
  ): Promise<Paging<SimplifiedShow>> {
    const response = await searchHelper<SearchShowsResponse>(
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
  public async searchTracks(
    query: string,
    options?: SearchOptions,
  ): Promise<Paging<Track>> {
    const response = await searchHelper<SearchTracksResponse>(
      this.http,
      query,
      ['track'],
      options,
    );
    return response.tracks;
  }
}
