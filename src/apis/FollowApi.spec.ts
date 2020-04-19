import { Http } from '../helpers/Http';
import { FollowApi } from './FollowApi';
import { spotifyAxios } from '../helpers/spotifyAxios';
import { getFollowedArtistsFixture } from '../fixtures';

jest.mock('../helpers/spotifyAxios');

const spotifyAxiosMock = spotifyAxios as jest.MockedFunction<
  typeof spotifyAxios
>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('FollowApi', () => {
  describe('areFollowingPlaylist', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue([true, false]);
    });

    it('should check if users follow a playlist', async () => {
      const http = new Http('token');
      const follow = new FollowApi(http);
      const response = await follow.areFollowingPlaylist('foo', ['bar', 'baz']);

      expect(response).toEqual([true, false]);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/followers/contains',
        'GET',
        'token',
        {
          params: {
            ids: ['bar', 'baz'],
          },
        },
      );
    });
  });

  describe('followArtists', () => {
    it('should follow artists', async () => {
      const http = new Http('token');
      const follow = new FollowApi(http);
      await follow.followArtists(['foo', 'bar']);

      expect(spotifyAxiosMock).toBeCalledWith('/me/following', 'PUT', 'token', {
        params: {
          type: 'artist',
        },
        data: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('followPlaylist', () => {
    it('should follow a playlist (without options)', async () => {
      const http = new Http('token');
      const follow = new FollowApi(http);
      await follow.followPlaylist('foo');

      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/followers',
        'PUT',
        'token',
        undefined,
      );
    });

    it('should follow a playlist (with options)', async () => {
      const http = new Http('token');
      const follow = new FollowApi(http);
      await follow.followPlaylist('foo', { public: false });

      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/followers',
        'PUT',
        'token',
        {
          data: {
            public: false,
          },
        },
      );
    });
  });

  describe('followUsers', () => {
    it('should follow users', async () => {
      const http = new Http('token');
      const follow = new FollowApi(http);
      await follow.followUsers(['foo', 'bar']);

      expect(spotifyAxiosMock).toBeCalledWith('/me/following', 'PUT', 'token', {
        params: {
          type: 'user',
        },
        data: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('getFollowedArtists', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getFollowedArtistsFixture);
    });

    it("should get user's followed artists (without options)", async () => {
      const http = new Http('token');
      const follow = new FollowApi(http);
      const response = await follow.getFollowedArtists();

      expect(response).toEqual(getFollowedArtistsFixture.artists);
      expect(spotifyAxiosMock).toBeCalledWith('/me/following', 'GET', 'token', {
        params: {
          type: 'artist',
        },
      });
    });

    it("should get user's followed artists (with options)", async () => {
      const http = new Http('token');
      const follow = new FollowApi(http);
      const response = await follow.getFollowedArtists({ limit: 2 });

      expect(response).toEqual(getFollowedArtistsFixture.artists);
      expect(spotifyAxiosMock).toBeCalledWith('/me/following', 'GET', 'token', {
        params: {
          limit: 2,
          type: 'artist',
        },
      });
    });
  });

  describe('isFollowingArtists', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue([true, false]);
    });

    it('should check if current user follows artists', async () => {
      const http = new Http('token');
      const follow = new FollowApi(http);
      const response = await follow.isFollowingArtists(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/following/contains',
        'GET',
        'token',
        {
          params: {
            ids: ['foo', 'bar'],
            type: 'artist',
          },
        },
      );
    });
  });

  describe('isFollowingUsers', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue([true, false]);
    });

    it('should check if current user follows users', async () => {
      const http = new Http('token');
      const follow = new FollowApi(http);
      const response = await follow.isFollowingUsers(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/following/contains',
        'GET',
        'token',
        {
          params: {
            ids: ['foo', 'bar'],
            type: 'user',
          },
        },
      );
    });
  });

  describe('unfollowArtists', () => {
    it('should unfollow artists', async () => {
      const http = new Http('token');
      const follow = new FollowApi(http);
      await follow.unfollowArtists(['foo', 'bar']);

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/following',
        'DELETE',
        'token',
        {
          params: {
            type: 'artist',
          },
          data: {
            ids: ['foo', 'bar'],
          },
        },
      );
    });
  });

  describe('unfollowPlaylist', () => {
    it('should unfollow a playlist', async () => {
      const http = new Http('token');
      const follow = new FollowApi(http);
      await follow.unfollowPlaylist('foo');

      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/followers',
        'DELETE',
        'token',
        undefined,
      );
    });
  });

  describe('unfollowUsers', () => {
    it('should unfollow users', async () => {
      const http = new Http('token');
      const follow = new FollowApi(http);
      await follow.unfollowUsers(['foo', 'bar']);

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/following',
        'DELETE',
        'token',
        {
          params: {
            type: 'user',
          },
          data: {
            ids: ['foo', 'bar'],
          },
        },
      );
    });
  });
});
