import { type Http } from '../helpers/Http';
import { type PrivateUser, type PublicUser } from '../types/SpotifyObjects';

export class UsersApi {
  private readonly http: Http;

  public constructor(http: Http) {
    this.http = http;
  }

  /**
   * Get Current User's Profile
   *
   * Get detailed profile information about the current user (including the
   * current user's username).
   */
  public async getMe(): Promise<PrivateUser> {
    return await this.http.get<PrivateUser>('/me');
  }

  /**
   * Get a User's Profile
   *
   * Get public profile information about a Spotify user.
   *
   * @param userId The user's Spotify user ID.
   */
  public async getUser(userId: string): Promise<PublicUser> {
    return await this.http.get<PublicUser>(`/users/${userId}`);
  }
}
