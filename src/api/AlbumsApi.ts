import { Http } from "../helpers/Http";
import * as model from "../model";

export class AlbumsApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Get an Album
   *
   * Get Spotify catalog information for a single album.
   *
   * @param albumId The Spotify ID for the album.
   * @param options A JSON object with optional request information.
   */
  getAlbum(albumId: string, options?: model.GetAlbumOptions) {
    return this.http.get<model.GetAlbumResponse>(
      `/albums/${albumId}`,
      options && { params: options }
    );
  }

  /**
   * Get Several Albums
   *
   * Get Spotify catalog information for multiple albums identified by their
   * Spotify IDs.
   *
   * @param albumIds The Spotify IDs for the albums.
   * @param options A JSON object with optional request information.
   */
  getAlbums(albumIds: string[], options?: model.GetAlbumsOptions) {
    return this.http.get<model.GetAlbumsResponse>("/albums", {
      params: {
        ...options,
        ids: albumIds
      }
    });
  }

  /**
   * Get an Album's Tracks
   *
   * Get Spotify catalog information about an album's tracks.
   *
   * @param albumId The Spotify ID for the album.
   * @param options A JSON object with optional request information.
   */
  getAlbumTracks(albumId: string, options?: model.GetAlbumTracksOptions) {
    return this.http.get<model.GetAlbumTracksResponse>(
      `/albums/${albumId}/tracks`,
      options && { params: options }
    );
  }
}
