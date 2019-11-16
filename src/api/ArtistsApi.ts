import { Http } from "../helpers/Http";
import * as model from "../model";

export class ArtistsApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Get an Artist
   *
   * Get Spotify catalog information for a single artist identified by their
   * unique Spotify ID.
   *
   * @param artistId The Spotify ID for the artist.
   */
  getArtist(artistId: string) {
    return this.http.get<model.GetArtistResponse>(`/artists/${artistId}`);
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
    return this.http.get<model.GetArtistAlbumsResponse>(
      `/artists/${artistId}/albums`,
      options && { params: options }
    );
  }

  /**
   * Get Spotify catalog information for several artists based on their
   * Spotify IDs.
   *
   * @param artistIds The Spotify IDs for the artists.
   */
  getArtists(artistIds: string[]) {
    return this.http.get<model.GetArtistsResponse>("/artists", {
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
    return this.http.get<model.GetArtistTopTracksResponse>(
      `/artists/${artistId}/top-tracks`,
      {
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
    return this.http.get<model.GetRelatedArtistsResponse>(
      `/artists/${artistId}/related-artists`
    );
  }
}
