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

  // +---------+
  // | Artists |
  // +---------+

  /**
   * Get an Artist
   *
   * Get Spotify catalog information for a single artist identified by their
   * unique Spotify ID.
   *
   * @param artistId The Spotify ID for the artist.
   */
  getArtist(artistId: string) {
    return axios.get<model.GetArtistResponse>(
      `/artists/${artistId}`,
      constructAxiosConfig(this.accessToken)
    );
  }

  /**
   * Get an Artist's Albums
   *
   * Get Spotify catalog information about an artist's albums.
   *
   * @param artistId The Spotify ID for the artist.
   * @param options A JSON object with optional request information.
   */
  getArtistAlbums(artistId: string, options?: model.GetArtistAlbumsOptions) {
    return axios.get<model.GetArtistAlbumsResponse>(
      `/artists/${artistId}/albums`,
      {
        ...constructAxiosConfig(this.accessToken),
        params: options
      }
    );
  }

  /**
   * Get Spotify catalog information for several artists based on their
   * Spotify IDs.
   *
   * @param artistIds The Spotify IDs for the artists.
   */
  getArtists(artistIds: string[]) {
    return axios.get<model.GetArtistsResponse>("/artists", {
      ...constructAxiosConfig(this.accessToken),
      params: {
        ids: artistIds
      }
    });
  }

  /**
   * Get an Artist's Top Tracks
   *
   * Get Spotify catalog information about an artist's top tracks by country.
   *
   * @param artistId The Spotify ID for the artist.
   * @param country An ISO 3166-1 alpha-2 country code or the string `from_token`.
   */
  getArtistTopTracks(artistId: string, country: string) {
    return axios.get<model.GetArtistTopTracksResponse>(
      `/artists/${artistId}/top-tracks`,
      {
        ...constructAxiosConfig(this.accessToken),
        params: {
          country
        }
      }
    );
  }

  /**
   * Get an Artist's Related Artists
   *
   * Get Spotify catalog information about artists similar to a given artist.
   * Similarity is based on analysis of the Spotify community's listening
   * history.
   *
   * @param artistId The Spotify ID for the artist.
   */
  getRelatedArtists(artistId: string) {
    return axios.get<model.GetRelatedArtistsResponse>(
      `/artists/${artistId}/related-artists`,
      constructAxiosConfig(this.accessToken)
    );
  }
}
