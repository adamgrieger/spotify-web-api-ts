import { type Http } from '../helpers/Http';
import {
  type Playlist,
  type PlaylistDetails,
  type SpotifyImage,
} from '../types/SpotifyObjects';
import {
  type AddItemsToPlaylistOptions,
  type CreatePlaylistOptions,
  type GetMyPlaylistsOptions,
  type GetPlaylistItemsOptions,
  type GetPlaylistOptions,
  type GetUserPlaylistsOptions,
  type RemovePlaylistItemsByPositionOptions,
  type ReorderPlaylistItemsOptions,
} from '../types/SpotifyOptions';
import {
  type GetMyPlaylistsResponse,
  type GetPlaylistItemsResponse,
  type GetUserPlaylistsResponse,
  type SnapshotIdResponse,
} from '../types/SpotifyResponses';

export class PlaylistsApi {
  private readonly http: Http;

  public constructor(http: Http) {
    this.http = http;
  }

  /**
   * Add Item to a Playlist
   *
   * Add an item to a user's playlist.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param uri The Spotify track or episode URI to add.
   * @param options Optional request information.
   */
  public async addItemToPlaylist(
    playlistId: string,
    uri: string,
    options?: AddItemsToPlaylistOptions,
  ): Promise<string> {
    return await this.addItemsToPlaylist(playlistId, [uri], options);
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
  public async addItemsToPlaylist(
    playlistId: string,
    uris: string[],
    options?: AddItemsToPlaylistOptions,
  ): Promise<string> {
    const response = await this.http.post<SnapshotIdResponse>(
      `/playlists/${playlistId}/tracks`,
      {
        data: {
          ...options,
          uris,
        },
      },
    );
    return response.snapshot_id;
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
  public async changePlaylistDetails(
    playlistId: string,
    details: PlaylistDetails,
  ): Promise<void> {
    await this.http.put(
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
  public async createPlaylist(
    userId: string,
    playlistName: string,
    options?: CreatePlaylistOptions,
  ): Promise<Playlist> {
    return await this.http.post<Playlist>(`/users/${userId}/playlists`, {
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
  public async getMyPlaylists(
    options?: GetMyPlaylistsOptions,
  ): Promise<GetMyPlaylistsResponse> {
    return await this.http.get<GetMyPlaylistsResponse>(
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
  public async getPlaylist(
    playlistId: string,
    options?: GetPlaylistOptions,
  ): Promise<Playlist> {
    return await this.http.get<Playlist>(
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
  public async getPlaylistCover(playlistId: string): Promise<SpotifyImage[]> {
    return await this.http.get<SpotifyImage[]>(
      `/playlists/${playlistId}/images`,
    );
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
  public async getPlaylistItems(
    playlistId: string,
    options?: GetPlaylistItemsOptions,
  ): Promise<GetPlaylistItemsResponse> {
    return await this.http.get<GetPlaylistItemsResponse>(
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
  public async getUserPlaylists(
    userId: string,
    options?: GetUserPlaylistsOptions,
  ): Promise<GetUserPlaylistsResponse> {
    return await this.http.get<GetUserPlaylistsResponse>(
      `/users/${userId}/playlists`,
      options && { params: options },
    );
  }

  /**
   * Remove Item from a Playlist
   *
   * Remove an item from a user's playlist.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param uri The Spotify track or episode URI to remove.
   */
  public async removePlaylistItem(
    playlistId: string,
    uri: string,
  ): Promise<string> {
    return await this.removePlaylistItems(playlistId, [uri]);
  }

  /**
   * Remove Items from a Playlist
   *
   * Remove one or more items from a user's playlist.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param uris The Spotify track or episode URIs to remove.
   */
  public async removePlaylistItems(
    playlistId: string,
    uris: string[],
  ): Promise<string> {
    const response = await this.http.delete<SnapshotIdResponse>(
      `/playlists/${playlistId}/tracks`,
      {
        data: {
          tracks: uris.map((uri) => ({ uri })),
        },
      },
    );
    return response.snapshot_id;
  }

  /**
   * Remove Item from a Playlist by Position
   *
   * Remove an item from a user's playlist by position.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param uri The Spotify track or episode URI to remove.
   * @param positions The positions of the item to remove.
   * @param options Optional request information.
   */
  public async removePlaylistItemByPosition(
    playlistId: string,
    uri: string,
    positions: number[],
    options?: RemovePlaylistItemsByPositionOptions,
  ): Promise<string> {
    return await this.removePlaylistItemsByPosition(
      playlistId,
      [{ uri, positions }],
      options,
    );
  }

  /**
   * Remove Items from a Playlist by Position
   *
   * Remove one or more items from a user's playlist by position.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param items The Spotify track or episode URIs and positions to remove.
   * @param options Optional request information.
   */
  public async removePlaylistItemsByPosition(
    playlistId: string,
    items: Array<{ positions: number[]; uri: string }>,
    options?: RemovePlaylistItemsByPositionOptions,
  ): Promise<string> {
    const response = await this.http.delete<SnapshotIdResponse>(
      `/playlists/${playlistId}/tracks`,
      {
        data: {
          ...options,
          tracks: items,
        },
      },
    );
    return response.snapshot_id;
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
  public async reorderPlaylistItems(
    playlistId: string,
    rangeStart: number,
    insertBefore: number,
    options?: ReorderPlaylistItemsOptions,
  ): Promise<string> {
    const response = await this.http.put<SnapshotIdResponse>(
      `/playlists/${playlistId}/tracks`,
      {
        data: {
          ...options,
          range_start: rangeStart,
          insert_before: insertBefore,
        },
      },
    );
    return response.snapshot_id;
  }

  /**
   * Replace a Playlist's Items
   *
   * Replace all the items in a playlist, overwriting its existing tracks.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param uris The Spotify track or episode URIs to set.
   */
  public async replacePlaylistItems(
    playlistId: string,
    uris: string[],
  ): Promise<void> {
    await this.http.put(`/playlists/${playlistId}/tracks`, {
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
  public async uploadPlaylistCover(
    playlistId: string,
    image: string,
  ): Promise<void> {
    await this.http.put(`/playlists/${playlistId}/images`, {
      data: image,
      contentType: 'image/jpeg',
    });
  }
}
