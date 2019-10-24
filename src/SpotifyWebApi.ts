import axios from "axios";
import * as model from "./model";
import { constructAxiosConfig } from "./helpers/constructAxiosConfig";

export class SpotifyWebApi {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  getAccessToken() {
    return this.accessToken;
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  // +--------+
  // | Albums |
  // +--------+

  /**
   * Get an Album
   *
   * Get Spotify catalog information for a single album.
   *
   * @param albumId The Spotify ID for the album.
   * @param options A JSON object with optional request information.
   */
  getAlbum(albumId: string, options?: model.GetAlbumOptions) {
    return axios.get<model.GetAlbumResponse>(`/albums/${albumId}`, {
      ...constructAxiosConfig(this.accessToken),
      params: options
    });
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
  getAlbums(albumIds: string[], options?: model.GetAlbumOptions) {
    return axios.get<model.GetAlbumsResponse>("/albums", {
      ...constructAxiosConfig(this.accessToken),
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
    return axios.get<model.GetAlbumTracksResponse>(
      `/albums/${albumId}/tracks`,
      {
        ...constructAxiosConfig(this.accessToken),
        params: options
      }
    );
  }
}
