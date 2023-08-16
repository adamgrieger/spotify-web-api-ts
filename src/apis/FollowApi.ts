import {
  type CursorPagingSimplifiedArtistObject,
  UsersService,
} from '../openapi';
import {
  type FollowPlaylistOptions,
  type GetFollowedArtistsOptions,
} from '../types/SpotifyOptions';

export class FollowApi {
  /**
   * ### Check if Users Follow a Playlist
   *
   * Check to see if one or more Spotify users are following a specified playlist.
   *
   * **Required Scopes:** `playlist-read-private` when checking if the current
   * user is privately following a playlist.
   *
   * @example
   * ```ts
   * const response = await spotify.follow.areFollowingPlaylist(
   *   '7fdQkum2nvXwcaCKnBZ7rR',
   *   ['griegs', 'jmperezperez'],
   * );
   * console.log(response);
   * // Array [ true, false ]
   * ```
   *
   * @param playlistId The Spotify ID of the playlist.
   * @param userIds The Spotify IDs of the users.
   */
  public async areFollowingPlaylist(
    playlistId: string,
    userIds: string[],
  ): Promise<boolean[]> {
    return await UsersService.checkIfUserFollowsPlaylist(
      playlistId,
      userIds.join(','),
    );
  }

  /**
   * ### Follow Artist
   *
   * Add the current user as a follower of an artist.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.followArtist('029y4wr8YYFoqPBahe8Ddz');
   * ```
   *
   * @param artistId The Spotify ID of the artist.
   */
  public async followArtist(artistId: string): Promise<void> {
    await this.followArtists([artistId]);
  }

  /**
   * ### Follow Artists
   *
   * Add the current user as a follower of one or more artists.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.followArtists([
   *   '029y4wr8YYFoqPBahe8Ddz',
   *   '1SlPJ2l80sMnCHpz1wB8nT',
   * ]);
   * ```
   *
   * @param artistIds The Spotify IDs of the artists.
   */
  public async followArtists(artistIds: string[]): Promise<void> {
    await UsersService.followArtistsUsers('artist', artistIds.join(','));
  }

  /**
   * ### Follow a Playlist
   *
   * Add the current user as a follower of a playlist.
   *
   * **Required Scopes:** `playlist-modify-public` when publicly following a
   * playlist. `playlist-modify-private` when privately following a playlist.
   *
   * @example
   * ```ts
   * await spotify.follow.followPlaylist('0USISVmfwjRpmY980WkNW4');
   * ```
   *
   * @param playlistId The Spotify ID of the playlist.
   * @param options Optional request information.
   */
  public async followPlaylist(
    playlistId: string,
    options?: FollowPlaylistOptions,
  ): Promise<void> {
    return await UsersService.followPlaylist(playlistId, options);
  }

  /**
   * ### Follow User
   *
   * Add the current user as a follower of a Spotify user.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.followUser('griegs');
   * ```
   *
   * @param userId The Spotify ID of the user.
   */
  public async followUser(userId: string): Promise<void> {
    await this.followUsers([userId]);
  }

  /**
   * ### Follow Users
   *
   * Add the current user as a follower of one or more Spotify users.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.followUsers(['griegs', 'jmperezperez']);
   * ```
   *
   * @param userIds The Spotify IDs of the users.
   */
  public async followUsers(userIds: string[]): Promise<void> {
    await UsersService.followArtistsUsers('user', userIds.join(','));
  }

  /**
   * ### Get User's Followed Artists
   *
   * Get the current user's followed artists.
   *
   * **Required Scopes:** `user-follow-read`.
   *
   * @example
   * ```ts
   * const artists = await spotify.follow.getFollowedArtists();
   * console.log(artists.items.map(item => item.name));
   * // Array [ "Common Market", "Teebs", "Mount Kimbie", ... ]
   * ```
   *
   * @param options Optional request information.
   */
  public async getFollowedArtists(
    options?: GetFollowedArtistsOptions,
  ): Promise<CursorPagingSimplifiedArtistObject> {
    return await UsersService.getFollowed(
      'artist',
      options?.after,
      options?.limit,
    ).then(({ artists }) => artists);
  }

  /**
   * ### Check if Current User Follows Artist
   *
   * Check to see if the current user is following an artist.
   *
   * **Required Scopes:** `user-follow-read`.
   *
   * @example
   * ```ts
   * const response = await spotify.follow.isFollowingArtist(
   *   '7rZjYMRC5pTV089WKn1Y4s',
   * );
   * console.log(response);
   * // true
   * ```
   *
   * @param artistId The Spotify ID for the artist.
   */
  public async isFollowingArtist(artistId: string): Promise<boolean> {
    const response = await this.isFollowingArtists([artistId]);
    return response[0];
  }

  /**
   * ### Check if Current User Follows Artists
   *
   * Check to see if the current user is following one or more artists.
   *
   * **Required Scopes:** `user-follow-read`.
   *
   * @example
   * ```ts
   * const response = await spotify.follow.isFollowingArtists([
   *   '2leze82lbuNUn3K4c7nS1B',
   *   '77bG3jpmWXOxpmZcVjPayy',
   * ]);
   * console.log(response);
   * // Array [ true, false ]
   * ```
   *
   * @param artistIds The Spotify IDs for the artists.
   */
  public async isFollowingArtists(artistIds: string[]): Promise<boolean[]> {
    return await UsersService.checkCurrentUserFollows(
      'artist',
      artistIds.join(','),
    );
  }

  /**
   * ### Check if User Follows a Playlist
   *
   * Check to see if a Spotify user is following a specified playlist.
   *
   * **Required Scopes:** `playlist-read-private` when checking if the current
   * user is privately following a playlist.
   *
   * @example
   * ```ts
   * const response = await spotify.follow.isFollowingPlaylist(
   *   '4xOF7TTAG2McFFJDixc3Lt',
   *   'griegs',
   * );
   * console.log(response);
   * // true
   * ```
   *
   * @param playlistId The Spotify ID of the playlist.
   * @param userId The Spotify ID of the user.
   */
  public async isFollowingPlaylist(
    playlistId: string,
    userId: string,
  ): Promise<boolean> {
    const response = await this.areFollowingPlaylist(playlistId, [userId]);
    return response[0];
  }

  /**
   * ### Check if Current User Follows User
   *
   * Check to see if the current user is following a Spotify user.
   *
   * **Required Scopes:** `user-follow-read`.
   *
   * @example
   * ```ts
   * const response = await spotify.follow.isFollowingUser('griegs');
   * console.log(response);
   * // true
   * ```
   *
   * @param userId The Spotify ID for the user.
   */
  public async isFollowingUser(userId: string): Promise<boolean> {
    const response = await this.isFollowingUsers([userId]);
    return response[0];
  }

  /**
   * ### Check if Current User Follows Users
   *
   * Check to see if the current user is following one or more Spotify users.
   *
   * **Required Scopes:** `user-follow-read`.
   *
   * @example
   * ```ts
   * const response = await spotify.follow.isFollowingUsers([
   *   'griegs',
   *   'jmperezperez',
   * ]);
   * console.log(response);
   * // Array [ true, true ]
   * ```
   *
   * @param userIds The Spotify IDs for the users.
   */
  public async isFollowingUsers(userIds: string[]): Promise<boolean[]> {
    return await UsersService.checkCurrentUserFollows(
      'user',
      userIds.join(','),
    );
  }

  /**
   * ### Unfollow Artist
   *
   * Remove the current user as a follower of an artist.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.unfollowArtist('3bU97PoqnxjKD45CrfwmC9');
   * ```
   *
   * @param artistId The Spotify ID of the artist.
   */
  public async unfollowArtist(artistId: string): Promise<void> {
    await this.unfollowArtists([artistId]);
  }

  /**
   * ### Unfollow Artists
   *
   * Remove the current user as a follower of one or more artists.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @param artistIds The Spotify IDs of the artists.
   */
  public async unfollowArtists(artistIds: string[]): Promise<void> {
    return await UsersService.unfollowArtistsUsers(
      'artist',
      artistIds.join(','),
    );
  }

  /**
   * ### Unfollow a Playlist
   *
   * Remove the current user as a follower of a playlist.
   *
   * **Required Scopes:** `playlist-modify-public` when unfollowing a publicly
   * followed playlist. `playlist-modify-private` when unfollowing a privately
   * followed playlist.
   *
   * @example
   * ```ts
   * await spotify.follow.unfollowPlaylist('6SAtV2bMjUbQTV37X51F3u');
   * ```
   *
   * @param playlistId The Spotify ID of the playlist.
   */
  public async unfollowPlaylist(playlistId: string): Promise<void> {
    return await UsersService.unfollowPlaylist(playlistId);
  }

  /**
   * ### Unfollow User
   *
   * Remove the current user as a follower of a Spotify user.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.unfollowUser('griegs');
   * ```
   *
   * @param userId The Spotify ID of the user.
   */
  public async unfollowUser(userId: string): Promise<void> {
    await this.unfollowUsers([userId]);
  }

  /**
   * ### Unfollow Users
   *
   * Remove the current user as a follower of one or more Spotify users.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.unfollowUsers(['griegs', 'jmperezperez']);
   * ```
   *
   * @param userIds The Spotify IDs of the users.
   */
  public async unfollowUsers(userIds: string[]): Promise<void> {
    return await UsersService.unfollowArtistsUsers('user', userIds.join(','));
  }
}
