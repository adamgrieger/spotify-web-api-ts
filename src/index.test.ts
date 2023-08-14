import axios from 'axios';
import { type Mocked, type MockedFunction } from 'vitest';

import { TOKEN_URL } from './constants';
import { encodeToBase64 } from './helpers/encodeToBase64';
import { getAuthorizationUrl } from './helpers/getAuthorizationUrl';

import { SpotifyWebApi } from '.';

vi.mock('axios');
vi.mock('./helpers/getAuthorizationUrl');

const axiosMock = axios as Mocked<typeof axios>;
const getAuthorizationUrlMock = getAuthorizationUrl as MockedFunction<
  typeof getAuthorizationUrl
>;

describe('SpotifyWebApi', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should construct a SpotifyWebApi instance (without options)', () => {
    const spotify = new SpotifyWebApi();

    expect(spotify.getAccessToken()).toBe('');
    expect(spotify.getClientId()).toBe('');
    expect(spotify.getClientSecret()).toBe('');
    expect(spotify.getRedirectUri()).toBe('');
  });

  it('should construct a SpotifyWebApi instance (with options)', () => {
    const spotify = new SpotifyWebApi({
      accessToken: 'foo',
      clientId: 'bar',
      clientSecret: 'baz',
      redirectUri: 'qux',
    });

    expect(spotify.getAccessToken()).toBe('foo');
    expect(spotify.getClientId()).toBe('bar');
    expect(spotify.getClientSecret()).toBe('baz');
    expect(spotify.getRedirectUri()).toBe('qux');
  });

  it('should get and set the access token', () => {
    const spotify = new SpotifyWebApi({ accessToken: 'token' });
    expect(spotify.getAccessToken()).toBe('token');
    spotify.setAccessToken('newToken');
    expect(spotify.getAccessToken()).toBe('newToken');
  });

  describe('getRefreshableAuthorizationUrl', () => {
    it('should get a URL for refreshable authorization (without options)', () => {
      const spotify = new SpotifyWebApi({
        clientId: 'foo',
        redirectUri: 'bar',
      });

      spotify.getRefreshableAuthorizationUrl();

      expect(getAuthorizationUrlMock).toHaveBeenCalledWith(
        'foo',
        'bar',
        'code',
        undefined,
      );
    });

    it('should get a URL for refreshable authorization (with options)', () => {
      const spotify = new SpotifyWebApi({
        clientId: 'foo',
        redirectUri: 'bar',
      });

      spotify.getRefreshableAuthorizationUrl({ state: 'baz' });

      expect(getAuthorizationUrlMock).toHaveBeenCalledWith(
        'foo',
        'bar',
        'code',
        {
          state: 'baz',
        },
      );
    });
  });

  describe('getTemporaryAuthorizationUrl', () => {
    it('should get a URL for temporary authorization (without options)', () => {
      const spotify = new SpotifyWebApi({
        clientId: 'foo',
        redirectUri: 'bar',
      });

      spotify.getTemporaryAuthorizationUrl();

      expect(getAuthorizationUrlMock).toHaveBeenCalledWith(
        'foo',
        'bar',
        'token',
        undefined,
      );
    });

    it('should get a URL for temporary authorization (with options)', () => {
      const spotify = new SpotifyWebApi({
        clientId: 'foo',
        redirectUri: 'bar',
      });

      spotify.getTemporaryAuthorizationUrl({ state: 'baz' });

      expect(getAuthorizationUrlMock).toHaveBeenCalledWith(
        'foo',
        'bar',
        'token',
        {
          state: 'baz',
        },
      );
    });
  });

  describe('getRefreshableUserTokens', () => {
    it('should get refreshable user tokens', async () => {
      axiosMock.post.mockResolvedValue({});
      const spotify = new SpotifyWebApi({
        clientId: 'foo',
        clientSecret: 'bar',
        redirectUri: 'baz',
      });

      await spotify.getRefreshableUserTokens('qux');

      expect(axiosMock.post).toHaveBeenCalledWith(
        TOKEN_URL,
        'code=qux&grant_type=authorization_code&redirect_uri=baz',
        {
          headers: {
            'Authorization': `Basic ${encodeToBase64('foo:bar')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
    });
  });

  describe('getRefreshedAccessToken', () => {
    it('should get a refreshed access token', async () => {
      axiosMock.post.mockResolvedValue({});
      const spotify = new SpotifyWebApi({
        clientId: 'foo',
        clientSecret: 'bar',
      });

      await spotify.getRefreshedAccessToken('baz');

      expect(axiosMock.post).toHaveBeenCalledWith(
        TOKEN_URL,
        'grant_type=refresh_token&refresh_token=baz',
        {
          headers: {
            'Authorization': `Basic ${encodeToBase64('foo:bar')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
    });
  });

  describe('getTemporaryAppTokens', () => {
    it('should get temporary app tokens', async () => {
      axiosMock.post.mockResolvedValue({});
      const spotify = new SpotifyWebApi({
        clientId: 'foo',
        clientSecret: 'bar',
      });

      await spotify.getTemporaryAppTokens();

      expect(axiosMock.post).toHaveBeenCalledWith(
        TOKEN_URL,
        'grant_type=client_credentials',
        {
          headers: {
            'Authorization': `Basic ${encodeToBase64('foo:bar')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
    });
  });
});
