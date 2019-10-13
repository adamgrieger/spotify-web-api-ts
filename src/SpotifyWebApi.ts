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
   * Get Spotify catalog information for a single album.
   *
   * See [Get an Album](https://developer.spotify.com/documentation/web-api/reference/albums/get-album/)
   * on the Spotify Developer site for more information about the endpoint.
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
   * Get Spotify catalog information for multiple albums identified by their
   * Spotify IDs.
   *
   * See [Get Several Albums](https://developer.spotify.com/documentation/web-api/reference/albums/get-several-albums)
   * on the Spotify Developer site for more information about the endpoint.
   *
   * @param albumIds The Spotify IDs for the albums.
   * @param options A JSON object with optional request information.
   */
  getAlbums(albumIds: string[], options?: model.GetAlbumsOptions) {
    return axios.get<model.GetAlbumsResponse>("/albums", {
      ...constructAxiosConfig(this.accessToken),
      params: {
        ...options,
        ids: albumIds
      }
    });
  }

  /**
   * Get Spotify catalog information about an album's tracks.
   * Optional parameters can be used to limit the number of tracks returned.
   *
   * See [Get an Album's Tracks](https://developer.spotify.com/documentation/web-api/reference/albums/get-albums-tracks)
   * on the Spotify Developer site for more information about the endpoint.
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
