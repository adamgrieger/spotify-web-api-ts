import axios from 'axios';
import { type Mocked, type MockedFunction } from 'vitest';

import { TOKEN_URL } from '../constants';
import { getAuthorizationUrl } from '../helpers/getAuthorizationUrl';
import { base64 } from '../openapi/core/request';

import { SpotifyWebApi } from './spotifyApi';

vi.mock('axios');
vi.mock('./helpers/getAuthorizationUrl');

const axiosMock = axios as Mocked<typeof axios>;
const getAuthorizationUrlMock = getAuthorizationUrl as MockedFunction<
  typeof getAuthorizationUrl
>;

const mockSpotifyWebApiConfigs = {
  clientId: 'foo',
  clientSecret: 'bar',
  redirectUri: 'baz',
};

describe('SpotifyWebApi', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it.todo('should construct a SpotifyWebApi instance (without options)', () => {
    const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

    expect(spotify.getAccessToken()).toBe('');
    expect(spotify.clientId).toBe('');
    expect(spotify.clientSecret).toBe('');
    expect(spotify.redirectUri).toBe('');
  });

  it.todo('should construct a SpotifyWebApi instance (with options)', () => {
    const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

    expect(spotify.getAccessToken()).toBe('foo');
    expect(spotify.clientId).toBe('bar');
    expect(spotify.clientSecret).toBe('baz');
    expect(spotify.redirectUri).toBe('qux');
  });

  it.todo('should get and set the access token', () => {
    const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs, {
      accessToken: 'token',
    });
    expect(spotify.getAccessToken()).toBe('token');
    spotify.setAccessToken('newToken');
    expect(spotify.getAccessToken()).toBe('newToken');
  });

  describe('getRefreshableAuthorizationUrl', () => {
    it.todo(
      'should get a URL for refreshable authorization (without options)',
      () => {
        const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

        spotify.getRefreshableAuthorizationUrl();

        expect(getAuthorizationUrlMock).toHaveBeenCalledWith(
          'foo',
          'bar',
          'code',
          undefined,
        );
      },
    );

    it.todo(
      'should get a URL for refreshable authorization (with options)',
      () => {
        const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

        spotify.getRefreshableAuthorizationUrl({ state: 'baz' });

        expect(getAuthorizationUrlMock).toHaveBeenCalledWith(
          'foo',
          'bar',
          'code',
          {
            state: 'baz',
          },
        );
      },
    );
  });

  describe('getTemporaryAuthorizationUrl', () => {
    it.todo(
      'should get a URL for temporary authorization (without options)',
      () => {
        const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

        spotify.getTemporaryAuthorizationUrl();

        expect(getAuthorizationUrlMock).toHaveBeenCalledWith(
          'foo',
          'bar',
          'token',
          undefined,
        );
      },
    );

    it.todo(
      'should get a URL for temporary authorization (with options)',
      () => {
        const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

        spotify.getTemporaryAuthorizationUrl({ state: 'baz' });

        expect(getAuthorizationUrlMock).toHaveBeenCalledWith(
          'foo',
          'bar',
          'token',
          {
            state: 'baz',
          },
        );
      },
    );
  });

  describe('getRefreshableUserTokens', () => {
    it.todo('should get refreshable user tokens', async () => {
      axiosMock.post.mockResolvedValue({});
      const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

      await spotify.getRefreshableUserTokens('qux');

      expect(axiosMock.post).toHaveBeenCalledWith(
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
    it.todo('should get a refreshed access token', async () => {
      axiosMock.post.mockResolvedValue({});
      const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

      await spotify.getRefreshedAccessToken('baz');

      expect(axiosMock.post).toHaveBeenCalledWith(
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
    it.todo('should get temporary app tokens', async () => {
      axiosMock.post.mockResolvedValue({});
      const spotify = new SpotifyWebApi(mockSpotifyWebApiConfigs);

      await spotify.getTemporaryAppTokens();

      expect(axiosMock.post).toHaveBeenCalledWith(
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
