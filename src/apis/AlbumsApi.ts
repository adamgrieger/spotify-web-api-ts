import { Http } from '../helpers/Http';
import { Album } from '../types/SpotifyObjects';
import { GetAlbumTracksOptions, MarketOptions } from '../types/SpotifyOptions';
import {
  GetAlbumsResponse,
  GetAlbumTracksResponse,
} from '../types/SpotifyResponses';

export class AlbumsApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * ### Get an Album
   *
   * Get Spotify catalog information for a single album.
   *
   * @example
   * ```ts
   * const album = await spotify.albums.getAlbum('53VKICyqCf91sVkTdFrzKX');
   * console.log(album.name);
   * // "Titanic Rising"
   * ```
   *
   * @param albumId The Spotify ID for the album.
   * @param options Optional request information.
   */
  getAlbum(albumId: string, options?: MarketOptions): Promise<Album> {
    return this.http.get<Album>(
      `/albums/${albumId}`,
      options && { params: options },
    );
  }

  /**
   * ### Get Several Albums
   *
   * Get Spotify catalog information for multiple albums identified by their
   * Spotify IDs.
   *
   * @example
   * ```ts
   * const albums = await spotify.albums.getAlbums([
   *   '0FO3N0KhhvXY7SORYneGbw',
   *   '3FND6DpDA79Fox7bv8LvRC',
   * ]);
   * console.log(albums.map(album => album.name));
   * // Array [ "What's There", "Heat Division" ]
   * ```
   *
   * @param albumIds The Spotify IDs for the albums.
   * @param options Optional request information.
   */
  async getAlbums(
    albumIds: string[],
    options?: MarketOptions,
  ): Promise<Array<Album | null>> {
    const response = await this.http.get<GetAlbumsResponse>('/albums', {
      params: {
        ...options,
        ids: albumIds.join(','),
      },
    });
    return response.albums;
  }

  /**
   * Get an Album's Tracks
   *
   * Get Spotify catalog information about an album's tracks.
   *
   * @param albumId The Spotify ID for the album.
   * @param options Optional request information.
   */
  getAlbumTracks(
    albumId: string,
    options?: GetAlbumTracksOptions,
  ): Promise<GetAlbumTracksResponse> {
    return this.http.get<GetAlbumTracksResponse>(
      `/albums/${albumId}/tracks`,
      options && { params: options },
    );
  }
}
