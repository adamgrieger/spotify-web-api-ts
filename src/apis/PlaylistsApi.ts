import {
  type ImageObject,
  type PagingPlaylistObject,
  type PagingPlaylistTrackObject,
  type PlaylistObject,
  PlaylistsService,
} from '../openapi';
import { type PlaylistDetails } from '../types/SpotifyObjects';
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

export class PlaylistsApi {
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
  ): Promise<string | undefined> {
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
  ): Promise<string | undefined> {
    return await PlaylistsService.addTracksToPlaylist(
      playlistId,
      options?.position,
      uris.join(','),
    ).then(({ snapshot_id }) => snapshot_id);
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
    await PlaylistsService.changePlaylistDetails(playlistId, details);
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
  ): Promise<PlaylistObject> {
    return await PlaylistsService.createPlaylist(userId, {
      name: playlistName,
      ...options,
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
  ): Promise<PagingPlaylistObject> {
    return await PlaylistsService.getAListOfCurrentUsersPlaylists(
      options?.limit,
      options?.offset,
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
  ): Promise<PlaylistObject> {
    return await PlaylistsService.getPlaylist(
      playlistId,
      options?.market,
      options?.fields,
      options?.additional_types?.join(','),
    );
  }

  /**
   * Get a Playlist Cover Image
   *
   * Get the current image associated with a specific playlist.
   *
   * @param playlistId The Spotify ID for the playlist.
   */
  public async getPlaylistCover(playlistId: string): Promise<ImageObject[]> {
    return await PlaylistsService.getPlaylistCover(playlistId);
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
  ): Promise<PagingPlaylistTrackObject> {
    return await PlaylistsService.getPlaylistsTracks(
      playlistId,
      options?.market,
      options?.fields,
      options?.limit,
      options?.offset,
      options?.additional_types?.join(','),
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
  ): Promise<PagingPlaylistObject> {
    return await PlaylistsService.getListUsersPlaylists(
      userId,
      options?.limit,
      options?.offset,
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
    snapshotId?: string,
  ): Promise<string | undefined> {
    return await this.removePlaylistItems(playlistId, [uri], snapshotId);
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
    snapshotId?: string,
  ): Promise<string | undefined> {
    return await PlaylistsService.removeTracksPlaylist(playlistId, {
      tracks: uris.map((uri) => ({ uri })),
      snapshot_id: snapshotId,
    }).then(({ snapshot_id }) => snapshot_id);
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
    // TODO: spike
    // const response = await this.http.delete<SnapshotIdResponse>(
    //   `/playlists/${playlistId}/tracks`,
    //   {
    //     data: {
    //       ...options,
    //       tracks: items,
    //     },
    //   },
    // );
    // return response.snapshot_id;
    return await Promise.resolve('');
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
  ): Promise<string | undefined> {
    return await PlaylistsService.reorderOrReplacePlaylistsTracks(
      playlistId,
      undefined,
      {
        range_start: rangeStart,
        insert_before: insertBefore,
        range_length: options?.range_length,
        snapshot_id: options?.snapshot_id,
      },
    ).then(({ snapshot_id }) => snapshot_id);
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
  ): Promise<string | undefined> {
    return await PlaylistsService.reorderOrReplacePlaylistsTracks(
      playlistId,
      uris?.join(','),
    ).then(({ snapshot_id }) => snapshot_id);
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
    await PlaylistsService.uploadCustomPlaylistCover(playlistId, image);
  }
}
