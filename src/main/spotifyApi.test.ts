import { AUTHORIZE_URL, TOKEN_URL } from '../constants';
import { base64 } from '../openapi/core/request';

import { SpotifyWebApi } from './spotifyApi';

import type axios from 'axios';

const mocks = vi.hoisted(() => {
  const axiosPostSpy = vi.fn();

  return {
    axios: {
      post: axiosPostSpy,
    },
  };
});

vi.mock('axios', async () => {
  const actual = (await vi.importActual('axios')) as typeof axios;

  return {
    default: {
      // @ts-expect-error Ignore for test
      create: (args) => ({ ...actual.create(args), post: mocks.axios.post }),
      post: mocks.axios.post,
    },
  };
});

const mockSpotifyWebApiConfigs = {
  clientId: 'foo',
  clientSecret: 'bar',
  redirectUri: 'baz',
};

describe('SpotifyWebApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  // it('should construct a SpotifyWebApi instance (without options)', () => {
  //   const spotify = new SpotifyWebApi({});

  //   expect(spotify.getAccessToken()).toBe('');
  //   expect(spotify.clientId).toBe('');
  //   expect(spotify.clientSecret).toBe('');
  //   expect(spotify.redirectUri).toBe('');
  // });

  it('should construct a SpotifyWebApi instance (with options)', () => {
    const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

    expect(spotify.getAccessToken()).toBe('');
    expect(spotify.clientId).toBe('foo');
    expect(spotify.clientSecret).toBe('bar');
    expect(spotify.redirectUri).toBe('baz');
  });

  it('should get and set the access token', () => {
    const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs, {
      accessToken: 'token',
    });
    expect(spotify.getAccessToken()).toBe('token');
    spotify.setAccessToken('newToken');
    expect(spotify.getAccessToken()).toBe('newToken');
  });

  describe('getAuthorizationCodeUrl', () => {
    it('should get a URL for refreshable authorization (without options)', () => {
      const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

      const url = spotify.getAuthorizationCodeUrl();

      expect(url).toBe(
        `${AUTHORIZE_URL}?client_id=foo&redirect_uri=baz&response_type=code`,
      );
    });

    it('should get a URL for refreshable authorization (with options)', () => {
      const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

      const url = spotify.getAuthorizationCodeUrl({ state: 'qux' });

      expect(url).toBe(
        `${AUTHORIZE_URL}?state=qux&client_id=foo&redirect_uri=baz&response_type=code`,
      );
    });
  });

  describe('getTemporaryAuthorizationUrl', () => {
    it('should get a URL for temporary authorization (without options)', () => {
      const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

      const url = spotify.getTemporaryAuthorizationUrl();

      expect(url).toBe(
        `${AUTHORIZE_URL}?client_id=foo&redirect_uri=baz&response_type=token`,
      );
    });

    it('should get a URL for temporary authorization (with options)', () => {
      const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

      const url = spotify.getTemporaryAuthorizationUrl({ state: 'qux' });

      expect(url).toBe(
        `${AUTHORIZE_URL}?state=qux&client_id=foo&redirect_uri=baz&response_type=token`,
      );
    });
  });

  describe('getTokenWithAuthenticateCode', () => {
    it('should get refreshable user tokens', async () => {
      mocks.axios.post.mockResolvedValue({});
      const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

      await spotify.getTokenWithAuthenticateCode('qux');

      expect(mocks.axios.post).toHaveBeenCalledWith(
        TOKEN_URL,
        'code=qux&grant_type=authorization_code&redirect_uri=baz',
        {
          headers: {
            'Authorization': `Basic ${base64('foo:bar')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
    });
  });

  describe('getRefreshedAccessToken', () => {
    it('should get a refreshed access token', async () => {
      mocks.axios.post.mockResolvedValue({});
      const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

      await spotify.getRefreshedAccessToken('baz');

      expect(mocks.axios.post).toHaveBeenCalledWith(
        TOKEN_URL,
        'grant_type=refresh_token&refresh_token=baz',
        {
          headers: {
            'Authorization': `Basic ${base64('foo:bar')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
    });
  });

  describe('getTemporaryAppTokens', () => {
    it('should get temporary app tokens', async () => {
      mocks.axios.post.mockResolvedValue({});
      const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

      await spotify.getTemporaryAppTokens();

      expect(mocks.axios.post).toHaveBeenCalledWith(
        TOKEN_URL,
        'grant_type=client_credentials',
        {
          headers: {
            'Authorization': `Basic ${base64('foo:bar')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
    });
  });
});
