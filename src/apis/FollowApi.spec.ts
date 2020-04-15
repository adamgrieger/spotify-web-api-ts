import { Http } from '../helpers/Http';
import { FollowApi } from './FollowApi';

jest.mock('../helpers/Http');

const HttpMock = Http as jest.Mocked<typeof Http>;

describe('FollowApi', () => {
  const http = new HttpMock('token');

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('areFollowingPlaylist', () => {
    it('should check if one or more users follow a playlist', () => {
      const follow = new FollowApi(http);
      follow.areFollowingPlaylist('foo', ['bar', 'baz']);
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/playlists/foo/followers/contains', {
        params: {
          ids: ['bar', 'baz'],
        },
      });
    });
  });

  describe('followArtists', () => {
    it('should add the current user a follower of one or more artists', () => {
      const follow = new FollowApi(http);
      follow.followArtists(['foo', 'bar']);
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/following', {
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
    it('should add the current user as a follower of a playlist (without options)', () => {
      const follow = new FollowApi(http);
      follow.followPlaylist('foo');
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/playlists/foo/followers', undefined);
    });

    it('should add the current user as a follower of a playlist (with options)', () => {
      const follow = new FollowApi(http);
      follow.followPlaylist('foo', {
        public: false,
      });
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/playlists/foo/followers', {
        data: {
          public: false,
        },
      });
    });
  });

  describe('followUsers', () => {
    it('should add the current user as a follower of one or more Spotify users', () => {
      const follow = new FollowApi(http);
      follow.followUsers(['foo', 'bar']);
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/following', {
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
    it("should get the current user's followed artists (without options)", () => {
      const follow = new FollowApi(http);
      follow.getFollowedArtists();
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/following', {
        params: {
          type: 'artist',
        },
      });
    });

    it("should get the current user's followed artists (with options)", () => {
      const follow = new FollowApi(http);
      follow.getFollowedArtists({
        limit: 2,
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/following', {
        params: {
          limit: 2,
          type: 'artist',
        },
      });
    });
  });

  describe('isFollowingArtists', () => {
    it('should check to see if the current user is following one or more artists', () => {
      const follow = new FollowApi(http);
      follow.isFollowingArtists(['foo', 'bar']);
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/following/contains', {
        params: {
          ids: ['foo', 'bar'],
          type: 'artist',
        },
      });
    });
  });

  describe('isFollowingUsers', () => {
    it('should check to see if the current user is following one or more Spotify users', () => {
      const follow = new FollowApi(http);
      follow.isFollowingUsers(['foo', 'bar']);
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/following/contains', {
        params: {
          ids: ['foo', 'bar'],
          type: 'user',
        },
      });
    });
  });

  describe('unfollowArtists', () => {
    it('should remove the current user as a follower of one or more artists', () => {
      const follow = new FollowApi(http);
      follow.unfollowArtists(['foo', 'bar']);
      expect(http.delete).toBeCalledTimes(1);
      expect(http.delete).toBeCalledWith('/me/following', {
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
    it('should remove the current user as a follower of a playlist', () => {
      const follow = new FollowApi(http);
      follow.unfollowPlaylist('foo');
      expect(http.delete).toBeCalledTimes(1);
      expect(http.delete).toBeCalledWith('/playlists/foo/followers');
    });
  });

  describe('unfollowUsers', () => {
    it('should remove the current user as a follower of one or more Spotify users', () => {
      const follow = new FollowApi(http);
      follow.unfollowUsers(['foo', 'bar']);
      expect(http.delete).toBeCalledTimes(1);
      expect(http.delete).toBeCalledWith('/me/following', {
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
