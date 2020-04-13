import { Http } from "../helpers/Http";
import * as types from "../types";

export class LibraryApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Check if one or more albums are saved in the current user's library.
   *
   * @param albumIds The Spotify IDs of the albums.
   */
  areAlbumsSaved(albumIds: string[]) {
    return this.http.get<boolean[]>("/me/albums/contains", {
      params: {
        ids: albumIds
      }
    });
  }

  /**
   * Check if one or more tracks are saved in the current user's library.
   *
   * @param trackIds The Spotify IDs of the tracks.
   */
  areTracksSaved(trackIds: string[]) {
    return this.http.get<boolean[]>("/me/tracks/contains", {
      params: {
        ids: trackIds
      }
    });
  }

  /**
   * Get a list of the albums saved in the current user's library.
   *
   * @param options A JSON object with optional request information.
   */
  getSavedAlbums(options?: types.LibraryOptions) {
    return this.http.get<types.GetSavedAlbumsResponse>(
      "/me/albums",
      options && { params: options }
    );
  }

  /**
   * Get a list of the tracks saved in the current user's library.
   *
   * @param options A JSON object with optional request information.
   */
  getSavedTracks(options?: types.LibraryOptions) {
    return this.http.get<types.GetSavedTracksResponse>(
      "/me/tracks",
      options && { params: options }
    );
  }

  /**
   * Remove one or more albums from the current user's library.
   *
   * @param albumIds The Spotify IDs of the albums.
   */
  removeSavedAlbums(albumIds: string[]) {
    return this.http.delete<void>("/me/albums", {
      data: {
        ids: albumIds
      }
    });
  }

  /**
   * Remove one or more tracks from the current user's library.
   *
   * @param trackIds The Spotify IDs of the tracks.
   */
  removeSavedTracks(trackIds: string[]) {
    return this.http.delete<void>("/me/tracks", {
      data: {
        ids: trackIds
      }
    });
  }

  /**
   * Save one or more albums to the current user's library.
   *
   * @param albumIds The Spotify IDs of the albums.
   */
  saveAlbums(albumIds: string[]) {
    return this.http.put<void>("/me/albums", {
      data: {
        ids: albumIds
      }
    });
  }

  /**
   * Save one or more tracks to the current user's library.
   *
   * @param trackIds The Spotify IDs of the tracks.
   */
  saveTracks(trackIds: string[]) {
    return this.http.put<void>("/me/tracks", {
      data: {
        ids: trackIds
      }
    });
  }
}
