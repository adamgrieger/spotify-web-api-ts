import {
  type AlbumObject,
  AlbumsService,
  type PagingSimplifiedTrackObject,
} from '../openapi';
import {
  type GetAlbumTracksOptions,
  type MarketOptions,
} from '../types/SpotifyOptions';

export class AlbumsApi {
  /**
   * ### Get an Album
   *
   * Get Spotify catalog information for a single album.
   *
   * **Required Scopes:** None.
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
  public async getAlbum(
    albumId: string,
    options?: MarketOptions,
  ): Promise<AlbumObject> {
    return await AlbumsService.getAnAlbum(albumId, options?.market);
  }

  /**
   * ### Get Several Albums
   *
   * Get Spotify catalog information for multiple albums identified by their
   * Spotify IDs.
   *
   * **Required Scopes:** None.
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
  public async getAlbums(
    albumIds: string[],
    options?: MarketOptions,
  ): Promise<AlbumObject[]> {
    return await AlbumsService.getMultipleAlbums(
      albumIds.join(','),
      options?.market,
    ).then(({ albums }) => albums);
  }

  /**
   * ### Get an Album's Tracks
   *
   * Get Spotify catalog information about an album's tracks.
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const tracks = await spotify.albums.getAlbumTracks('76254F4WYdKOm0pVAVvp0x');
   * console.log(tracks.items.map(track => track.name));
   * // Array [ "4D", "MTI" ]
   * ```
   *
   * @param albumId The Spotify ID for the album.
   * @param options Optional request information.
   */
  public async getAlbumTracks(
    albumId: string,
    options?: GetAlbumTracksOptions,
  ): Promise<PagingSimplifiedTrackObject> {
    return await AlbumsService.getAnAlbumsTracks(
      albumId,
      options?.market,
      options?.limit,
      options?.offset,
    );
  }
}
