import { Http } from '../helpers/Http';
import * as types from '../types';

export class FollowApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Check if Users Follow a Playlist
   *
   * Check to see if one or more Spotify users are following a specified playlist.
   *
   * @param playlistId The Spotify ID of the playlist.
   * @param userIds The Spotify IDs of the users.
   */
  async areFollowingPlaylist(playlistId: string, userIds: string[]) {
    return this.http.get<boolean[]>(
      `/playlists/${playlistId}/followers/contains`,
      {
        params: {
          ids: userIds,
        },
      },
    );
  }

  /**
   * Follow Artists
   *
   * Add the current user as a follower of one or more artists.
   *
   * @param artistIds The Spotify IDs of the artists.
   */
  async followArtists(artistIds: string[]) {
    return this.http.put<void>('/me/following', {
      params: {
        type: 'artist',
      },
      data: {
        ids: artistIds,
      },
    });
  }

  /**
   * Follow a Playlist
   *
   * Add the current user as a follower of a playlist.
   *
   * @param playlistId The Spotify ID of the playlist.
   * @param options Optional request information.
   */
  async followPlaylist(
    playlistId: string,
    options?: types.FollowPlaylistOptions,
  ) {
    return this.http.put<void>(
      `/playlists/${playlistId}/followers`,
      options && { data: options },
    );
  }

  /**
   * Follow Users
   *
   * Add the current user as a follower of one or more Spotify users.
   *
   * @param userIds The Spotify IDs of the users.
   */
  async followUsers(userIds: string[]) {
    return this.http.put<void>('/me/following', {
      params: {
        type: 'user',
      },
      data: {
        ids: userIds,
      },
    });
  }

  /**
   * Get User's Followed Artists
   *
   * Get the current user's followed artists.
   *
   * @param options Optional request information.
   */
  async getFollowedArtists(options?: types.GetFollowedArtistsOptions) {
    return this.http
      .get<types.GetFollowedArtistsResponse>('/me/following', {
        params: {
          ...options,
          type: 'artist',
        },
      })
      .then(response => response.artists);
  }

  /**
   * Check if Current User Follows Artists
   *
   * Check to see if the current user is following one or more artists.
   *
   * @param artistIds The Spotify IDs for the artists.
   */
  async isFollowingArtists(artistIds: string[]) {
    return this.http.get<boolean[]>('/me/following/contains', {
      params: {
        ids: artistIds,
        type: 'artist',
      },
    });
  }

  /**
   * Check if Current User Follows Users
   *
   * Check to see if the current user is following one or more Spotify users.
   *
   * @param userIds The Spotify IDs for the users.
   */
  async isFollowingUsers(userIds: string[]) {
    return this.http.get<boolean[]>('/me/following/contains', {
      params: {
        ids: userIds,
        type: 'user',
      },
    });
  }

  /**
   * Unfollow Artists
   *
   * Remove the current user as a follower of one or more artists.
   *
   * @param artistIds The Spotify IDs of the artists.
   */
  async unfollowArtists(artistIds: string[]) {
    return this.http.delete<void>('/me/following', {
      params: {
        type: 'artist',
      },
      data: {
        ids: artistIds,
      },
    });
  }

  /**
   * Unfollow a Playlist
   *
   * Remove the current user as a follower of a playlist.
   *
   * @param playlistId The Spotify ID of the playlist.
   */
  async unfollowPlaylist(playlistId: string) {
    return this.http.delete<void>(`/playlists/${playlistId}/followers`);
  }

  /**
   * Unfollow Users
   *
   * Remove the current user as a follower of one or more Spotify users.
   *
   * @param userIds The Spotify IDs of the users.
   */
  async unfollowUsers(userIds: string[]) {
    return this.http.delete<void>('/me/following', {
      params: {
        type: 'user',
      },
      data: {
        ids: userIds,
      },
    });
  }
}
