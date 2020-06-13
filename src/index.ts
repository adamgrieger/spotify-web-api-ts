import axios from 'axios';
import { AlbumsApi } from './apis/AlbumsApi';
import { ArtistsApi } from './apis/ArtistsApi';
import { BrowseApi } from './apis/BrowseApi';
import { EpisodesApi } from './apis/EpisodesApi';
import { FollowApi } from './apis/FollowApi';
import { LibraryApi } from './apis/LibraryApi';
import { PersonalizationApi } from './apis/PersonalizationApi';
import { PlayerApi } from './apis/PlayerApi';
import { PlaylistsApi } from './apis/PlaylistsApi';
import { SearchApi } from './apis/SearchApi';
import { ShowsApi } from './apis/ShowsApi';
import { TracksApi } from './apis/TracksApi';
import { UsersApi } from './apis/UsersApi';
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
} from './types/SpotifyAuthorization';
import { stringifyParams } from './helpers/stringifyParams';

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

  public albums: AlbumsApi;
  public artists: ArtistsApi;
  public browse: BrowseApi;
  public episodes: EpisodesApi;
  public follow: FollowApi;
  public library: LibraryApi;
  public personalization: PersonalizationApi;
  public player: PlayerApi;
  public playlists: PlaylistsApi;
  public search: SearchApi;
  public shows: ShowsApi;
  public tracks: TracksApi;
  public users: UsersApi;

  constructor(options?: SpotifyWebApiOptions) {
    this.clientId = options?.clientId ?? '';
    this.clientSecret = options?.clientSecret ?? '';
    this.redirectUri = options?.redirectUri ?? '';

    this.http = new Http(options?.accessToken ?? '');

    this.albums = new AlbumsApi(this.http);
    this.artists = new ArtistsApi(this.http);
    this.browse = new BrowseApi(this.http);
    this.episodes = new EpisodesApi(this.http);
    this.follow = new FollowApi(this.http);
    this.library = new LibraryApi(this.http);
    this.personalization = new PersonalizationApi(this.http);
    this.player = new PlayerApi(this.http);
    this.playlists = new PlaylistsApi(this.http);
    this.search = new SearchApi(this.http);
    this.shows = new ShowsApi(this.http);
    this.tracks = new TracksApi(this.http);
    this.users = new UsersApi(this.http);
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
  getRefreshableAuthorizationUrl(options?: GetAuthorizationUrlOptions): string {
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
  getTemporaryAuthorizationUrl(options?: GetAuthorizationUrlOptions): string {
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
  async getRefreshableUserTokens(
    code: string,
  ): Promise<GetRefreshableUserTokensResponse> {
    const response = await axios.post<GetRefreshableUserTokensResponse>(
      TOKEN_URL,
      stringifyParams({
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
  async getRefreshedAccessToken(
    refreshToken: string,
  ): Promise<GetRefreshedAccessTokenResponse> {
    const response = await axios.post<GetRefreshedAccessTokenResponse>(
      TOKEN_URL,
      stringifyParams({
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
  async getTemporaryAppTokens(): Promise<GetTemporaryAppTokensResponse> {
    const response = await axios.post<GetTemporaryAppTokensResponse>(
      TOKEN_URL,
      stringifyParams({
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
