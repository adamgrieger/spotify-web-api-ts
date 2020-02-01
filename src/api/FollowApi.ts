import { Http } from "../helpers/Http";
import * as model from "../model";

export class FollowApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Check to see if one or more Spotify users are following a playlist.
   *
   * @param playlistId The Spotify ID of the playlist.
   * @param userIds The Spotify IDs of the users.
   */
  areFollowingPlaylist(playlistId: string, userIds: string[]) {
    return this.http.get<boolean[]>(
      `/playlists/${playlistId}/followers/contains`,
      {
        params: {
          ids: userIds
        }
      }
    );
  }

  /**
   * Add the current user as a follower of one or more artists.
   *
   * @param artistIds The Spotify IDs of the artists.
   */
  followArtists(artistIds: string[]) {
    return this.http.put<void>("/me/following", {
      params: {
        type: "artist"
      },
      data: {
        ids: artistIds
      }
    });
  }

  /**
   * Add the current user as a follower of a playlist.
   *
   * @param playlistId The Spotify ID of the playlist.
   * @param options A JSON object with optional request information.
   */
  followPlaylist(playlistId: string, options?: model.FollowPlaylistOptions) {
    return this.http.put<void>(
      `/playlists/${playlistId}/followers`,
      options && { data: options }
    );
  }

  /**
   * Add the current user as a follower of one or more Spotify users.
   *
   * @param userIds The Spotify IDs of the users.
   */
  followUsers(userIds: string[]) {
    return this.http.put<void>("/me/following", {
      params: {
        type: "user"
      },
      data: {
        ids: userIds
      }
    });
  }

  /**
   * Get the current user's followed artists.
   *
   * @param options A JSON object with optional request information.
   */
  getFollowedArtists(options?: model.GetFollowedArtistsOptions) {
    return this.http.get<model.GetFollowedArtistsResponse>("/me/following", {
      params: {
        ...options,
        type: "artist"
      }
    });
  }

  /**
   * Check to see if the current user is following one or more artists.
   *
   * @param artistIds The Spotify IDs for the artists.
   */
  isFollowingArtists(artistIds: string[]) {
    return this.http.get<boolean[]>("/me/following/contains", {
      params: {
        ids: artistIds,
        type: "artist"
      }
    });
  }

  /**
   * Check to see if the current user is following one or more Spotify users.
   *
   * @param userIds The Spotify IDs for the users.
   */
  isFollowingUsers(userIds: string[]) {
    return this.http.get<boolean[]>("/me/following/contains", {
      params: {
        ids: userIds,
        type: "user"
      }
    });
  }

  /**
   * Remove the current user as a follower of one or more artists.
   *
   * @param artistIds The Spotify IDs of the artists.
   */
  unfollowArtists(artistIds: string[]) {
    return this.http.delete<void>("/me/following", {
      params: {
        type: "artist"
      },
      data: {
        ids: artistIds
      }
    });
  }

  /**
   * Remove the current user as a follower of a playlist.
   *
   * @param playlistId The Spotify ID of the playlist.
   */
  unfollowPlaylist(playlistId: string) {
    return this.http.delete<void>(`/playlists/${playlistId}/followers`);
  }

  /**
   * Remove the current user as a follower of one or more Spotify users.
   *
   * @param userIds The Spotify IDs of the users.
   */
  unfollowUsers(userIds: string[]) {
    return this.http.delete<void>("/me/following", {
      params: {
        type: "user"
      },
      data: {
        ids: userIds
      }
    });
  }
}
