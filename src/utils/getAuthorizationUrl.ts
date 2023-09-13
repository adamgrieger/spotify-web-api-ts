import qs from 'qs';

import { AUTHORIZE_URL } from '../constants';
import { type AuthorizationScope } from '../types/SpotifyAuthorization';

export interface GetAuthorizationUrlOptions {
  scope?: AuthorizationScope[];
  show_dialog?: boolean;
  state?: string;
}

export interface PKCEExtensionOptions {
  code_challenge: string;
  code_challenge_method: 'S256';
}

export function getAuthorizationUrl(
  clientId: string,
  redirectUri: string,
  responseType: 'code' | 'token',
  options?:
    | GetAuthorizationUrlOptions
    | (GetAuthorizationUrlOptions & PKCEExtensionOptions),
): string {
  return `${AUTHORIZE_URL}?${qs.stringify({
    ...options,
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: responseType,
    ...(options?.scope && { scope: options.scope.join(' ') }),
  })}`;
}
