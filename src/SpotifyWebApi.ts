import axios from 'axios';
import qs from 'qs';
import * as apis from './apis';
import { TOKEN_URL } from './constants';
import { encodeToBase64 } from './helpers/encodeToBase64';
import {
  getAuthorizationUrl,
  GetAuthorizationUrlOptions,
} from './helpers/getAuthorizationUrl';
import { Http } from './helpers/Http';
import {
  GetRefreshableUserTokensResponse,
  GetRefreshedAccessTokenResponse,
  GetTemporaryAppTokensResponse,
} from './types';

type SpotifyWebApiOptions = {
  accessToken?: string;
  clientId?: string;
  clientSecret?: string;
  redirectUri?: string;
};

export class SpotifyWebApi {
  private clientId: string;
  private clientSecret: string;
  private redirectUri: string;

  private http: Http;

  public albums: apis.AlbumsApi;
  public artists: apis.ArtistsApi;
  public browse: apis.BrowseApi;
  public episodes: apis.EpisodesApi;
  public follow: apis.FollowApi;
  public library: apis.LibraryApi;
  public personalization: apis.PersonalizationApi;
  public player: apis.PlayerApi;
  public playlists: apis.PlaylistsApi;
  public search: apis.SearchApi;
  public shows: apis.ShowsApi;
  public tracks: apis.TracksApi;
  public users: apis.UsersApi;

  constructor(options?: SpotifyWebApiOptions) {
    this.clientId = options?.clientId ?? '';
    this.clientSecret = options?.clientSecret ?? '';
    this.redirectUri = options?.redirectUri ?? '';

    this.http = new Http(options?.accessToken ?? '');

    this.albums = new apis.AlbumsApi(this.http);
    this.artists = new apis.ArtistsApi(this.http);
    this.browse = new apis.BrowseApi(this.http);
    this.episodes = new apis.EpisodesApi(this.http);
    this.follow = new apis.FollowApi(this.http);
    this.library = new apis.LibraryApi(this.http);
    this.personalization = new apis.PersonalizationApi(this.http);
    this.player = new apis.PlayerApi(this.http);
    this.playlists = new apis.PlaylistsApi(this.http);
    this.search = new apis.SearchApi(this.http);
    this.shows = new apis.ShowsApi(this.http);
    this.tracks = new apis.TracksApi(this.http);
    this.users = new apis.UsersApi(this.http);
  }

  getAccessToken() {
    return this.http.getAccessToken();
  }

  setAccessToken(accessToken: string) {
    this.http.setAccessToken(accessToken);
  }

  getClientId() {
    return this.clientId;
  }

  getClientSecret() {
    return this.clientSecret;
  }

  getRedirectUri() {
    return this.redirectUri;
  }

  // +--------------------+
  // | Authorization URLs |
  // +--------------------+

  /**
   * Get an authorization URL for use with the Authorization Code flow.
   *
   * @param options Optional URL parameters.
   */
  getRefreshableAuthorizationUrl(options?: GetAuthorizationUrlOptions) {
    return getAuthorizationUrl(
      this.clientId,
      this.redirectUri,
      'code',
      options,
    );
  }

  /**
   * Get an authorization URL for use with the Implicit Grant and Client
   * Credentials flows.
   *
   * @param options Optional URL parameters.
   */
  getTemporaryAuthorizationUrl(options?: GetAuthorizationUrlOptions) {
    return getAuthorizationUrl(
      this.clientId,
      this.redirectUri,
      'token',
      options,
    );
  }

  // +---------------------------+
  // | Refreshable Authorization |
  // +---------------------------+

  /**
   * Get refreshable authorization tokens using the Authorization Code flow.
   *
   * This flow is suitable for long-running applications in which the user
   * grants permission only once. It provides an access token that can be
   * refreshed. Since the token exchange involves sending your secret key,
   * perform this on a secure location, like a backend service, and not from a
   * client such as a browser or from a mobile app.
   *
   * @param code The authorization code returned from the initial request to
   *             the authorization endpoint.
   */
  async getRefreshableUserTokens(code: string) {
    const response = await axios.post<GetRefreshableUserTokensResponse>(
      TOKEN_URL,
      qs.stringify({
        code,
        grant_type: 'authorization_code',
        redirect_uri: this.redirectUri,
      }),
      {
        headers: {
          Authorization: `Basic ${encodeToBase64(
            `${this.clientId}:${this.clientSecret}`,
          )}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    return response.data;
  }

  /**
   * Obtain a refreshed access token given the original refresh token from the
   * initial authorization code exchange.
   *
   * @param refreshToken The refresh token returned from the authorization code
   *                     exchange.
   */
  async getRefreshedAccessToken(refreshToken: string) {
    const response = await axios.post<GetRefreshedAccessTokenResponse>(
      TOKEN_URL,
      qs.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
      {
        headers: {
          Authorization: `Basic ${encodeToBase64(
            `${this.clientId}:${this.clientSecret}`,
          )}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    return response.data;
  }

  // +-------------------------+
  // | Temporary Authorization |
  // +-------------------------+

  /**
   * Get temporary authorization tokens using the Client Credentials flow.
   *
   * The Client Credentials flow is used in server-to-server authentication.
   * Only endpoints that do not access user information can be accessed. The
   * advantage here in comparison with requests to the Web API made without an
   * access token, is that a higher rate limit is applied.
   */
  async getTemporaryAppTokens() {
    const response = await axios.post<GetTemporaryAppTokensResponse>(
      TOKEN_URL,
      qs.stringify({
        grant_type: 'client_credentials',
      }),
      {
        headers: {
          Authorization: `Basic ${encodeToBase64(
            `${this.clientId}:${this.clientSecret}`,
          )}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    return response.data;
  }
}
