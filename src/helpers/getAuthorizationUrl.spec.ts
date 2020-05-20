import { getAuthorizationUrl } from './getAuthorizationUrl';
import { AUTHORIZE_URL } from '../constants';

describe('getAuthorizationUrl', () => {
  it('should get the Spotify authorization URL (without options)', () => {
    expect(getAuthorizationUrl('foo', 'bar', 'code')).toBe(
      AUTHORIZE_URL.concat('?client_id=foo')
        .concat('&redirect_uri=bar')
        .concat('&response_type=code'),
    );
  });

  it('should get the Spotify authorization URL (with options)', () => {
    expect(
      getAuthorizationUrl('foo', 'bar', 'token', {
        scope: ['streaming', 'app-remote-control'],
        show_dialog: true,
        state: 'baz',
      }),
    ).toBe(
      AUTHORIZE_URL.concat('?client_id=foo')
        .concat('&redirect_uri=bar')
        .concat('&response_type=token')
        .concat('&scope=streaming%20app-remote-control')
        .concat('&show_dialog=true')
        .concat('&state=baz'),
    );
  });
});
