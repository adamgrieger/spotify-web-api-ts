import { getFollowedArtistsFixture } from '../fixtures';
import { Http } from '../helpers/Http';
import { FollowApi } from './FollowApi';

jest.mock('../helpers/Http');

const HttpMock = Http as jest.MockedClass<typeof Http>;

function setup() {
  const httpMock = new HttpMock('token');
  const follow = new FollowApi(httpMock);

  return { httpMock, follow };
}

beforeEach(() => {
  jest.resetAllMocks();
});

describe('FollowApi', () => {
  describe('areFollowingPlaylist', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([true, false]);
    });

    it('should check if users follow a playlist', async () => {
      const { httpMock, follow } = setup();

      const response = await follow.areFollowingPlaylist('foo', ['bar', 'baz']);

      expect(response).toEqual([true, false]);
      expect(httpMock.get).toBeCalledWith('/playlists/foo/followers/contains', {
        params: {
          ids: ['bar', 'baz'],
        },
      });
    });
  });

  describe('followArtist', () => {
    it('should follow an artist', async () => {
      const { httpMock, follow } = setup();

      await follow.followArtist('foo');

      expect(httpMock.put).toBeCalledWith('/me/following', {
        params: {
          type: 'artist',
        },
        data: {
          ids: ['foo'],
        },
      });
    });
  });

  describe('followArtists', () => {
    it('should follow artists', async () => {
      const { httpMock, follow } = setup();

      await follow.followArtists(['foo', 'bar']);

      expect(httpMock.put).toBeCalledWith('/me/following', {
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
      const { httpMock, follow } = setup();

      await follow.followPlaylist('foo');

      expect(httpMock.put).toBeCalledWith(
        '/playlists/foo/followers',
        undefined,
      );
    });

    it('should follow a playlist (with options)', async () => {
      const { httpMock, follow } = setup();

      await follow.followPlaylist('foo', { public: false });

      expect(httpMock.put).toBeCalledWith('/playlists/foo/followers', {
        data: {
          public: false,
        },
      });
    });
  });

  describe('followUser', () => {
    it('should follow a user', async () => {
      const { httpMock, follow } = setup();

      await follow.followUser('foo');

      expect(httpMock.put).toBeCalledWith('/me/following', {
        params: {
          type: 'user',
        },
        data: {
          ids: ['foo'],
        },
      });
    });
  });

  describe('followUsers', () => {
    it('should follow users', async () => {
      const { httpMock, follow } = setup();

      await follow.followUsers(['foo', 'bar']);

      expect(httpMock.put).toBeCalledWith('/me/following', {
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
      HttpMock.prototype.get.mockResolvedValue(getFollowedArtistsFixture);
    });

    it("should get user's followed artists (without options)", async () => {
      const { httpMock, follow } = setup();

      const response = await follow.getFollowedArtists();

      expect(response).toEqual(getFollowedArtistsFixture.artists);
      expect(httpMock.get).toBeCalledWith('/me/following', {
        params: {
          type: 'artist',
        },
      });
    });

    it("should get user's followed artists (with options)", async () => {
      const { httpMock, follow } = setup();

      const response = await follow.getFollowedArtists({ limit: 2 });

      expect(response).toEqual(getFollowedArtistsFixture.artists);
      expect(httpMock.get).toBeCalledWith('/me/following', {
        params: {
          limit: 2,
          type: 'artist',
        },
      });
    });
  });

  describe('isFollowingArtist', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([true]);
    });

    it('should check if current user follows artist', async () => {
      const { httpMock, follow } = setup();

      const response = await follow.isFollowingArtist('foo');

      expect(response).toBe(true);
      expect(httpMock.get).toBeCalledWith('/me/following/contains', {
        params: {
          ids: ['foo'],
          type: 'artist',
        },
      });
    });
  });

  describe('isFollowingArtists', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([true, false]);
    });

    it('should check if current user follows artists', async () => {
      const { httpMock, follow } = setup();

      const response = await follow.isFollowingArtists(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(httpMock.get).toBeCalledWith('/me/following/contains', {
        params: {
          ids: ['foo', 'bar'],
          type: 'artist',
        },
      });
    });
  });

  describe('isFollowingPlaylist', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([true]);
    });

    it('should check if a user follows a playlist', async () => {
      const { httpMock, follow } = setup();

      const response = await follow.isFollowingPlaylist('foo', 'bar');

      expect(response).toBe(true);
      expect(httpMock.get).toBeCalledWith('/playlists/foo/followers/contains', {
        params: {
          ids: ['bar'],
        },
      });
    });
  });

  describe('isFollowingUser', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([true]);
    });

    it('should check if the current user follows a user', async () => {
      const { httpMock, follow } = setup();

      const response = await follow.isFollowingUser('foo');

      expect(response).toBe(true);
      expect(httpMock.get).toBeCalledWith('/me/following/contains', {
        params: {
          ids: ['foo'],
          type: 'user',
        },
      });
    });
  });

  describe('isFollowingUsers', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([true, false]);
    });

    it('should check if current user follows users', async () => {
      const { httpMock, follow } = setup();

      const response = await follow.isFollowingUsers(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(httpMock.get).toBeCalledWith('/me/following/contains', {
        params: {
          ids: ['foo', 'bar'],
          type: 'user',
        },
      });
    });
  });

  describe('unfollowArtist', () => {
    it('should unfollow an artist', async () => {
      const { httpMock, follow } = setup();

      await follow.unfollowArtist('foo');

      expect(httpMock.delete).toBeCalledWith('/me/following', {
        params: {
          type: 'artist',
        },
        data: {
          ids: ['foo'],
        },
      });
    });
  });

  describe('unfollowArtists', () => {
    it('should unfollow artists', async () => {
      const { httpMock, follow } = setup();

      await follow.unfollowArtists(['foo', 'bar']);

      expect(httpMock.delete).toBeCalledWith('/me/following', {
        params: {
          type: 'artist',
        },
        data: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('unfollowPlaylist', () => {
    it('should unfollow a playlist', async () => {
      const { httpMock, follow } = setup();

      await follow.unfollowPlaylist('foo');

      expect(httpMock.delete).toBeCalledWith('/playlists/foo/followers');
    });
  });

  describe('unfollowUser', () => {
    it('should unfollow a user', async () => {
      const { httpMock, follow } = setup();

      await follow.unfollowUser('foo');

      expect(httpMock.delete).toBeCalledWith('/me/following', {
        params: {
          type: 'user',
        },
        data: {
          ids: ['foo'],
        },
      });
    });
  });

  describe('unfollowUsers', () => {
    it('should unfollow users', async () => {
      const { httpMock, follow } = setup();

      await follow.unfollowUsers(['foo', 'bar']);

      expect(httpMock.delete).toBeCalledWith('/me/following', {
        params: {
          type: 'user',
        },
        data: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });
});
