export type AuthorizationScope =
  | 'ugc-image-upload'
  | 'user-read-playback-state'
  | 'user-modify-playback-state'
  | 'user-read-currently-playing'
  | 'streaming'
  | 'app-remote-control'
  | 'user-read-email'
  | 'user-read-private'
  | 'playlist-read-collaborative'
  | 'playlist-modify-public'
  | 'playlist-read-private'
  | 'playlist-modify-private'
  | 'user-library-modify'
  | 'user-library-read'
  | 'user-top-read'
  | 'user-read-playback-position'
  | 'user-read-recently-played'
  | 'user-follow-read'
  | 'user-follow-modify';

export type GetRefreshableUserTokensResponse = {
  access_token: string;
  token_type: 'Bearer';
  scope: string;
  expires_in: number;
  refresh_token: string;
};

export type GetRefreshedAccessTokenResponse = {
  access_token: string;
  token_type: 'Bearer';
  expires_in: number;
  scope: string;
};

export type GetTemporaryAppTokensResponse = {
  access_token: string;
  token_type: 'Bearer';
  expires_in: number;
  scope: string;
};
