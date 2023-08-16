import qs from 'qs';

import { AlbumsApi } from '../apis/AlbumsApi';
import { ArtistsApi } from '../apis/ArtistsApi';
import { AudiobooksApi } from '../apis/AudiobooksApi';
import { BrowseApi } from '../apis/BrowseApi';
import { EpisodesApi } from '../apis/EpisodesApi';
import { FollowApi } from '../apis/FollowApi';
import { LibraryApi } from '../apis/LibraryApi';
import { MarketsApi } from '../apis/MarketsApi';
import { PersonalizationApi } from '../apis/PersonalizationApi';
import { PlayerApi } from '../apis/PlayerApi';
import { PlaylistsApi } from '../apis/PlaylistsApi';
import { SearchApi } from '../apis/SearchApi';
import { ShowsApi } from '../apis/ShowsApi';
import { TracksApi } from '../apis/TracksApi';
import { UsersApi } from '../apis/UsersApi';
import { TOKEN_URL } from '../constants';
import { encodeToBase64 } from '../helpers/encodeToBase64';
import {
  type GetAuthorizationUrlOptions,
  getAuthorizationUrl,
} from '../helpers/getAuthorizationUrl';
import { assertClientConfigs } from '../helpers/validateClientConfigs';
import {
  type GetRefreshableUserTokensResponse,
  type GetRefreshedAccessTokenResponse,
  type GetTemporaryAppTokensResponse,
} from '../types/SpotifyAuthorization';

import { type SpotifyAxios, getSpotifyAxios } from './spotifyAxios';

export let spotifyAxios: SpotifyAxios;

export interface SpotifyWebApiOptions {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

export interface SpotifyWebApiCredentials {
  accessToken?: string;
}

export class SpotifyWebApi {
  private readonly _clientId: string;

  private readonly _clientSecret: string;

  private readonly _redirectUri: string;

  private readonly spotifyAxios: SpotifyAxios;

  private accessToken: string;

  public albums: AlbumsApi;

  public artists: ArtistsApi;

  public audiobooks: AudiobooksApi;

  public browse: BrowseApi;

  public episodes: EpisodesApi;

  public follow: FollowApi;

  public library: LibraryApi;

  public markets: MarketsApi;

  public personalization: PersonalizationApi;

  public player: PlayerApi;

  public playlists: PlaylistsApi;

  public search: SearchApi;

  public shows: ShowsApi;

  public tracks: TracksApi;

  public users: UsersApi;

  public constructor(
    options: SpotifyWebApiOptions,
    credentials?: SpotifyWebApiCredentials,
  ) {
    this._clientId = options.clientId;
    this._clientSecret = options.clientSecret;
    this._redirectUri = options.redirectUri;

    this.spotifyAxios = getSpotifyAxios();
    this.accessToken = credentials?.accessToken ?? '';

    this.albums = new AlbumsApi();
    this.artists = new ArtistsApi();
    this.audiobooks = new AudiobooksApi();
    this.browse = new BrowseApi();
    this.episodes = new EpisodesApi();
    this.follow = new FollowApi();
    this.library = new LibraryApi();
    this.markets = new MarketsApi();
    this.personalization = new PersonalizationApi();
    this.player = new PlayerApi();
    this.playlists = new PlaylistsApi();
    this.search = new SearchApi();
    this.shows = new ShowsApi();
    this.tracks = new TracksApi();
    this.users = new UsersApi();
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

  public setAccessToken(accessToken: string): void {
    this.accessToken = accessToken;
  }

  public get clientId(): string {
    return this._clientId;
  }

  public get clientSecret(): string {
    return this._clientSecret;
  }

  public get redirectUri(): string {
    return this._redirectUri;
  }

  // +--------------------+
  // | Authorization URLs |
  // +--------------------+

  /**
   * Get an authorization URL for use with the Authorization Code flow.
   *
   * @param options Optional URL parameters.
   */
  public getRefreshableAuthorizationUrl(
    options?: GetAuthorizationUrlOptions,
  ): string {
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
  public getTemporaryAuthorizationUrl(
    options?: GetAuthorizationUrlOptions,
  ): string {
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
  public async getRefreshableUserTokens(
    code: string,
  ): Promise<GetRefreshableUserTokensResponse> {
    assertClientConfigs({
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      redirectUri: this.redirectUri,
    });

    const response =
      await this.spotifyAxios.axiosInstance.post<GetRefreshableUserTokensResponse>(
        TOKEN_URL,
        qs.stringify({
          code,
          grant_type: 'authorization_code',
          redirect_uri: this.redirectUri,
        }),
        {
          headers: {
            'Authorization': `Basic ${encodeToBase64(
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
  public async getRefreshedAccessToken(
    refreshToken: string,
  ): Promise<GetRefreshedAccessTokenResponse> {
    assertClientConfigs({
      clientId: this.clientId,
      clientSecret: this.clientSecret,
    });

    const response =
      await this.spotifyAxios.axiosInstance.post<GetRefreshedAccessTokenResponse>(
        TOKEN_URL,
        qs.stringify({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }),
        {
          headers: {
            'Authorization': `Basic ${encodeToBase64(
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
  public async getTemporaryAppTokens(): Promise<GetTemporaryAppTokensResponse> {
    assertClientConfigs({
      clientId: this.clientId,
      clientSecret: this.clientSecret,
    });

    const response =
      await this.spotifyAxios.axiosInstance.post<GetTemporaryAppTokensResponse>(
        TOKEN_URL,
        qs.stringify({
          grant_type: 'client_credentials',
        }),
        {
          headers: {
            'Authorization': `Basic ${encodeToBase64(
              `${this.clientId}:${this.clientSecret}`,
            )}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
    return response.data;
  }
}

export default SpotifyWebApi;
