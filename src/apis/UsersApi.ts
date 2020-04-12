import { Http } from "../helpers/Http";
import * as types from "../types";

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
  getMe() {
    return this.http.get<types.GetMeResponse>("/me");
  }

  /**
   * Get a User's Profile
   *
   * Get public profile information about a Spotify user.
   *
   * @param userId The user's Spotify user ID.
   */
  getUser(userId: string) {
    return this.http.get<types.GetUserResponse>(`/users/${userId}`);
  }
}
