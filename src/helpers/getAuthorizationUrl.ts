import qs from 'qs';

import { AUTHORIZE_URL } from '../constants';
import { type AuthorizationScope } from '../types/SpotifyAuthorization';

export interface GetAuthorizationUrlOptions {
  scope?: AuthorizationScope[];
  show_dialog?: boolean;
  state?: string;
}

export function getAuthorizationUrl(
  clientId: string,
  redirectUri: string,
  responseType: 'code' | 'token',
  options?: GetAuthorizationUrlOptions,
): string {
  return `${AUTHORIZE_URL}?${qs.stringify({
    ...options,
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: responseType,
    ...(options?.scope && { scope: options.scope.join(' ') }),
  })}`;
}
