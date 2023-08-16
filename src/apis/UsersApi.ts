import {
  type PrivateUserObject,
  type PublicUserObject,
  UsersService,
} from '../openapi';

export class UsersApi {
  /**
   * Get Current User's Profile
   *
   * Get detailed profile information about the current user (including the
   * current user's username).
   */
  public async getMe(): Promise<PrivateUserObject> {
    return await UsersService.getCurrentUsersProfile();
  }

  /**
   * Get a User's Profile
   *
   * Get public profile information about a Spotify user.
   *
   * @param userId The user's Spotify user ID.
   */
  public async getUser(userId: string): Promise<PublicUserObject> {
    return await UsersService.getUsersProfile(userId);
  }
}
