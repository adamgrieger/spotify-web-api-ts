import { type SpyInstance } from 'vitest';

import { getFollowedArtistsFixture } from '../fixtures';
import { UsersService } from '../openapi/services/UsersService';

import { FollowApi } from './FollowApi';

const follow = new FollowApi();

describe('FollowApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('areFollowingPlaylist', () => {
    it('should check if users follow a playlist', async () => {
      const areFollowingPlaylistSpy = vi
        .spyOn(UsersService, 'checkIfUserFollowsPlaylist')
        .mockResolvedValue([true, false]);
      const response = await follow.areFollowingPlaylist('foo', ['bar', 'baz']);

      expect(response).toEqual([true, false]);
      expect(areFollowingPlaylistSpy).toHaveBeenCalledWith('foo', 'bar,baz');
    });
  });

  describe('followArtists', () => {
    let followArtistsSpy: SpyInstance;
    beforeEach(() => {
      followArtistsSpy = vi
        .spyOn(UsersService, 'followArtistsUsers')
        .mockResolvedValue(undefined);
    });

    it('should follow an artist', async () => {
      await follow.followArtist('foo');

      expect(followArtistsSpy).toHaveBeenCalledWith('artist', 'foo');
    });

    it('should follow artists', async () => {
      await follow.followArtists(['foo', 'bar']);

      expect(followArtistsSpy).toHaveBeenCalledWith('artist', 'foo,bar');
    });
  });

  describe('followPlaylist', () => {
    let followPlaylistSpy: SpyInstance;
    beforeEach(() => {
      followPlaylistSpy = vi
        .spyOn(UsersService, 'followPlaylist')
        .mockResolvedValue(undefined);
    });

    it('should follow a playlist (without options)', async () => {
      await follow.followPlaylist('foo');

      expect(followPlaylistSpy).toHaveBeenCalledWith('foo', undefined);
    });

    it('should follow a playlist (with options)', async () => {
      await follow.followPlaylist('foo', { public: false });

      expect(followPlaylistSpy).toHaveBeenCalledWith('foo', { public: false });
    });
  });

  describe('followUsers', () => {
    let followUsersSpy: SpyInstance;
    beforeEach(() => {
      followUsersSpy = vi
        .spyOn(UsersService, 'followArtistsUsers')
        .mockResolvedValue(undefined);
    });

    it('should follow a user', async () => {
      await follow.followUser('foo');

      expect(followUsersSpy).toHaveBeenCalledWith('user', 'foo');
    });

    it('should follow users', async () => {
      await follow.followUsers(['foo', 'bar']);

      expect(followUsersSpy).toHaveBeenCalledWith('user', 'foo,bar');
    });
  });

  describe('getFollowedArtists', () => {
    let getFollowedArtistsSpy: SpyInstance;
    beforeEach(() => {
      getFollowedArtistsSpy = vi
        .spyOn(UsersService, 'getFollowed')
        .mockResolvedValue(getFollowedArtistsFixture);
    });

    it("should get user's followed artists (without options)", async () => {
      const response = await follow.getFollowedArtists();

      expect(response).toEqual(getFollowedArtistsFixture.artists);
      expect(getFollowedArtistsSpy).toHaveBeenCalledWith(
        'artist',
        undefined,
        undefined,
      );
    });

    it("should get user's followed artists (with options)", async () => {
      const response = await follow.getFollowedArtists({
        limit: 2,
        after: 'foo',
      });

      expect(response).toEqual(getFollowedArtistsFixture.artists);
      expect(getFollowedArtistsSpy).toHaveBeenCalledWith('artist', 'foo', 2);
    });
  });

  describe('isFollowingArtists', () => {
    let isFollowingArtistsSpy: SpyInstance;
    beforeEach(() => {
      isFollowingArtistsSpy = vi
        .spyOn(UsersService, 'checkCurrentUserFollows')
        .mockResolvedValue([true, false]);
    });

    it('should check if current user follows artist', async () => {
      const response = await follow.isFollowingArtist('foo');

      expect(response).toBeTruthy();
      expect(isFollowingArtistsSpy).toHaveBeenCalledWith('artist', 'foo');
    });

    it('should check if current user follows artists', async () => {
      const response = await follow.isFollowingArtists(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(isFollowingArtistsSpy).toHaveBeenCalledWith('artist', 'foo,bar');
    });
  });

  describe('isFollowingPlaylist', () => {
    it.todo('should check if a user follows a playlist', async () => {
      const isFollowingPlaylistSpy = vi
        .spyOn(UsersService, 'checkCurrentUserFollows')
        .mockResolvedValue([true]);
      const response = await follow.isFollowingPlaylist('foo', 'bar');

      expect(response).toBeTruthy();
      expect(isFollowingPlaylistSpy).toHaveBeenCalledWith('foo', 'bar');
    });
  });

  describe('isFollowingUsers', () => {
    let isFollowingUsersSpy: SpyInstance;
    beforeEach(() => {
      isFollowingUsersSpy = vi
        .spyOn(UsersService, 'checkCurrentUserFollows')
        .mockResolvedValue([true, false]);
    });

    it('should check if the current user follows a user', async () => {
      const response = await follow.isFollowingUser('foo');

      expect(response).toBeTruthy();
      expect(isFollowingUsersSpy).toHaveBeenCalledWith('user', 'foo');
    });

    it('should check if current user follows users', async () => {
      const response = await follow.isFollowingUsers(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(isFollowingUsersSpy).toHaveBeenCalledWith('user', 'foo,bar');
    });
  });

  describe('unfollowArtists', () => {
    let unfollowArtistsSpy: SpyInstance;
    beforeEach(() => {
      unfollowArtistsSpy = vi
        .spyOn(UsersService, 'unfollowArtistsUsers')
        .mockResolvedValue(undefined);
    });

    it('should unfollow an artist', async () => {
      await follow.unfollowArtist('foo');

      expect(unfollowArtistsSpy).toHaveBeenCalledWith('artist', 'foo');
    });

    it('should unfollow artists', async () => {
      await follow.unfollowArtists(['foo', 'bar']);

      expect(unfollowArtistsSpy).toHaveBeenCalledWith('artist', 'foo,bar');
    });
  });

  describe('unfollowPlaylist', () => {
    it('should unfollow a playlist', async () => {
      const unfollowPlaylistSpy = vi
        .spyOn(UsersService, 'unfollowPlaylist')
        .mockResolvedValue(undefined);
      await follow.unfollowPlaylist('foo');

      expect(unfollowPlaylistSpy).toHaveBeenCalledWith('foo');
    });
  });

  describe('unfollowUsers', () => {
    let unfollowUsersSpy: SpyInstance;
    beforeEach(() => {
      unfollowUsersSpy = vi.spyOn(UsersService, 'unfollowArtistsUsers');
    });

    it('should unfollow a user', async () => {
      await follow.unfollowUser('foo');

      expect(unfollowUsersSpy).toHaveBeenCalledWith('user', 'foo');
    });

    it('should unfollow users', async () => {
      await follow.unfollowUsers(['foo', 'bar']);

      expect(unfollowUsersSpy).toHaveBeenCalledWith('user', 'foo,bar');
    });
  });
});
