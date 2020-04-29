import { Http } from '../helpers/Http';
import * as types from '../types';

export class PlaylistsApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Add Items to a Playlist
   *
   * Add one or more items to a user's playlist.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param uris The Spotify track or episode URIs to add.
   * @param options Optional request information.
   */
  async addItemsToPlaylist(
    playlistId: string,
    uris: string[],
    options?: types.AddItemsToPlaylistOptions,
  ) {
    return this.http
      .post<types.SnapshotIdResponse>(`/playlists/${playlistId}/tracks`, {
        data: {
          ...options,
          uris,
        },
      })
      .then(response => response.snapshot_id);
  }

  /**
   * Change a Playlist's Details
   *
   * Change a playlist's name and public/private state. (The user must, of
   * course, own the playlist.)
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param details The playlist details to update.
   */
  async changePlaylistDetails(
    playlistId: string,
    details: types.PlaylistDetails,
  ) {
    return this.http.put<void>(
      `/playlists/${playlistId}`,
      details && { data: details },
    );
  }

  /**
   * Create a Playlist
   *
   * Create a playlist for a Spotify user. (The playlist will be empty until
   * you add tracks.)
   *
   * @param userId The user's Spotify user ID.
   * @param playlistName The name for the new playlist.
   * @param options Optional request information.
   */
  async createPlaylist(
    userId: string,
    playlistName: string,
    options?: types.CreatePlaylistOptions,
  ) {
    return this.http.post<types.Playlist>(`/users/${userId}/playlists`, {
      data: {
        ...options,
        name: playlistName,
      },
    });
  }

  /**
   * Get a List of Current User's Playlists
   *
   * Get a list of the playlists owned or followed by the current Spotify user.
   *
   * @param options Optional request information.
   */
  async getMyPlaylists(options?: types.GetMyPlaylistsOptions) {
    return this.http.get<types.GetMyPlaylistsResponse>(
      '/me/playlists',
      options && { params: options },
    );
  }

  /**
   * Get a Playlist
   *
   * Get a playlist owned by a Spotify user.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param options Optional request information.
   */
  async getPlaylist(playlistId: string, options?: types.GetPlaylistOptions) {
    return this.http.get<types.Playlist>(
      `/playlists/${playlistId}`,
      options && { params: options },
    );
  }

  /**
   * Get a Playlist Cover Image
   *
   * Get the current image associated with a specific playlist.
   *
   * @param playlistId The Spotify ID for the playlist.
   */
  async getPlaylistCover(playlistId: string) {
    return this.http.get<types.Image[]>(`/playlists/${playlistId}/images`);
  }

  /**
   * Get a Playlist's Items
   *
   * Get full details of the tracks or episodes of a playlist owned by a
   * Spotify user.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param options Optional request information.
   */
  async getPlaylistItems(
    playlistId: string,
    options?: types.GetPlaylistItemsOptions,
  ) {
    return this.http.get<types.GetPlaylistItemsResponse>(
      `/playlists/${playlistId}/tracks`,
      options && { params: options },
    );
  }

  /**
   * Get a List of a User's Playlists
   *
   * Get a list of the playlists owned or followed by a Spotify user.
   *
   * @param userId The user's Spotify user ID.
   * @param options Optional request information.
   */
  async getUserPlaylists(
    userId: string,
    options?: types.GetUserPlaylistsOptions,
  ) {
    return this.http.get<types.GetUserPlaylistsResponse>(
      `/users/${userId}/playlists`,
      options && { params: options },
    );
  }

  /**
   * Remove Items from a Playlist
   *
   * Remove one or more items from a user's playlist.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param uris The Spotify track or episode URIs to remove.
   */
  async removePlaylistItems(playlistId: string, uris: string[]) {
    return this.http
      .delete<types.SnapshotIdResponse>(`/playlists/${playlistId}/tracks`, {
        data: {
          tracks: uris.map(uri => ({ uri })),
        },
      })
      .then(response => response.snapshot_id);
  }

  /**
   * Remove Items from a Playlist by Position
   *
   * Remove one or more itmems from a user's playlist by position.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param items The Spotify track or episode URIs and positions to remove.
   * @param options Optional request information.
   */
  async removePlaylistItemsByPosition(
    playlistId: string,
    items: Array<{ uri: string; positions: number[] }>,
    options?: types.RemovePlaylistItemsByPositionOptions,
  ) {
    return this.http
      .delete<types.SnapshotIdResponse>(`/playlists/${playlistId}/tracks`, {
        data: {
          ...options,
          tracks: items,
        },
      })
      .then(response => response.snapshot_id);
  }

  /**
   * Reorder a Playlist's Items
   *
   * Reorder an item or a group of items in a playlist.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param rangeStart The position of the first item to be reordered.
   * @param insertBefore The position where the items should be inserted.
   * @param options Optional request information.
   */
  async reorderPlaylistItems(
    playlistId: string,
    rangeStart: number,
    insertBefore: number,
    options?: types.ReorderPlaylistItemsOptions,
  ) {
    return this.http
      .put<types.SnapshotIdResponse>(`/playlists/${playlistId}/tracks`, {
        data: {
          ...options,
          range_start: rangeStart,
          insert_before: insertBefore,
        },
      })
      .then(response => response.snapshot_id);
  }

  /**
   * Replace a Playlist's Items
   *
   * Replace all the items in a playlist, overwriting its existing tracks.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param uris The Spotify track or episode URIs to set.
   */
  async replacePlaylistItems(playlistId: string, uris: string[]) {
    return this.http.put<void>(`/playlists/${playlistId}/tracks`, {
      data: {
        uris: uris,
      },
    });
  }

  /**
   * Upload a Custom Playlist Cover Image
   *
   * Replace the image used to represent a specific playlist.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param image Base64 encoded JPEG image data.
   */
  async uploadPlaylistCover(playlistId: string, image: string) {
    return this.http.put<void>(`/playlists/${playlistId}/images`, {
      data: image,
      contentType: 'image/jpeg',
    });
  }
}
