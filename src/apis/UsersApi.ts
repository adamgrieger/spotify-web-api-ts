import { Http } from '../helpers/Http';
import { PrivateUser, PublicUser } from '../types/SpotifyObjects';

export class UsersApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Get Current User's Profile
   *
   * Get detailed profile information about the current user (including the
   * current user's username).
   */
  getMe(): Promise<PrivateUser> {
    return this.http.get<PrivateUser>('/me');
  }

  /**
   * Get a User's Profile
   *
   * Get public profile information about a Spotify user.
   *
   * @param userId The user's Spotify user ID.
   */
  getUser(userId: string): Promise<PublicUser> {
    return this.http.get<PublicUser>(`/users/${userId}`);
  }
}
