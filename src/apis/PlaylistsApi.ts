import { Http } from '../helpers/Http';
import * as types from '../types';

export class PlaylistsApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Add Tracks to a Playlist
   *
   * Add one or more tracks to a user's playlist.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param uris The Spotify track URIs to add.
   * @param options Optional request information.
   */
  addTracksToPlaylist(
    playlistId: string,
    uris: string[],
    options?: types.AddTracksToPlaylistOptions,
  ) {
    return this.http.post<types.SnapshotIdResponse>(
      `/playlists/${playlistId}/tracks`,
      {
        data: {
          ...options,
          uris,
        },
      },
    );
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
  changePlaylistDetails(playlistId: string, details: types.PlaylistDetails) {
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
  createPlaylist(
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
  getMyPlaylists(options?: types.GetMyPlaylistsOptions) {
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
  getPlaylist(playlistId: string, options?: types.GetPlaylistOptions) {
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
  getPlaylistCoverImage(playlistId: string) {
    return this.http.get<types.Image[]>(`/playlists/${playlistId}/images`);
  }

  /**
   * Get a Playlist's Tracks
   *
   * Get full details of the tracks or episodes of a playlist owned by a
   * Spotify user.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param options Optional request information.
   */
  getPlaylistTracks(
    playlistId: string,
    options?: types.GetPlaylistTracksOptions,
  ) {
    return this.http.get<types.GetPlaylistTracksResponse>(
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
  getUserPlaylists(userId: string, options?: types.GetUserPlaylistsOptions) {
    return this.http.get(
      `/users/${userId}/playlists`,
      options && { params: options },
    );
  }

  /**
   * Remove Tracks from a Playlist
   *
   * Remove one or more tracks from a user's playlist.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param trackUris The Spotify track URIs to remove.
   */
  removePlaylistTracks(playlistId: string, trackUris: string[]) {
    return this.http.delete<types.SnapshotIdResponse>(
      `/playlists/${playlistId}/tracks`,
      {
        data: {
          tracks: trackUris.map(uri => ({ uri })),
        },
      },
    );
  }

  /**
   * Remove Tracks from a Playlist by Position
   *
   * Remove one or more tracks from a user's playlist by position.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param tracks The Spotify track URIs and positions to remove.
   * @param options Optional request information.
   */
  removePlaylistTracksByPosition(
    playlistId: string,
    tracks: Array<{ uri: string; positions: number[] }>,
    options?: types.RemovePlaylistTracksByPositionOptions,
  ) {
    return this.http.delete<types.SnapshotIdResponse>(
      `/playlists/${playlistId}/tracks`,
      {
        data: {
          ...options,
          tracks,
        },
      },
    );
  }

  /**
   * Reorder a Playlist's Tracks
   *
   * Reorder a track or a group of tracks in a playlist.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param rangeStart The position of the first track to be reordered.
   * @param insertBefore The position where the tracks should be inserted.
   * @param options Optional request information.
   */
  reorderPlaylistTracks(
    playlistId: string,
    rangeStart: number,
    insertBefore: number,
    options?: types.ReorderPlaylistTracksOptions,
  ) {
    return this.http.put<types.SnapshotIdResponse>(
      `/playlists/${playlistId}/tracks`,
      {
        data: {
          ...options,
          range_start: rangeStart,
          insert_before: insertBefore,
        },
      },
    );
  }

  /**
   * Replace a Playlist's Tracks
   *
   * Replace all the tracks in a playlist, overwriting its existing tracks.
   *
   * @param playlistId The Spotify ID for the playlist.
   * @param trackUris The Spotify tracks URIs to set.
   */
  replacePlaylistTracks(playlistId: string, trackUris: string[]) {
    return this.http.put<void>(`/playlists/${playlistId}/tracks`, {
      data: {
        uris: trackUris,
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
  uploadPlaylistCover(playlistId: string, image: string) {
    return this.http.put<void>(`/playlists/${playlistId}/images`, {
      data: image,
      contentType: 'image/jpeg',
    });
  }
}
