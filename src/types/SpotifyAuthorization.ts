export type AuthorizationScope =
  | 'app-remote-control'
  | 'playlist-modify-private'
  | 'playlist-modify-public'
  | 'playlist-read-collaborative'
  | 'playlist-read-private'
  | 'streaming'
  | 'ugc-image-upload'
  | 'user-follow-modify'
  | 'user-follow-read'
  | 'user-library-modify'
  | 'user-library-read'
  | 'user-modify-playback-state'
  | 'user-read-currently-playing'
  | 'user-read-email'
  | 'user-read-playback-position'
  | 'user-read-playback-state'
  | 'user-read-private'
  | 'user-read-recently-played'
  | 'user-top-read';

export interface GetRefreshableUserTokensResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: 'Bearer';
}

export interface GetRefreshedAccessTokenResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: 'Bearer';
}

export interface GetTemporaryAppTokensResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: 'Bearer';
}
