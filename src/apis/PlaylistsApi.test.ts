import { type SpyInstance } from 'vitest';

import { PlaylistsService } from '../openapi';
import {
  getMyPlaylistsFixture,
  getPlaylistCoverFixture,
  getPlaylistItemsFixture,
  getUserPlaylistsFixture,
  playlistFixture,
  snapshotIdFixture,
} from '../fixtures';

import { PlaylistsApi } from './PlaylistsApi';

const playlists = new PlaylistsApi();

describe('PlaylistsApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('addItemsToPlaylist', () => {
    let addItemsToPlaylistSpy: SpyInstance;
    beforeEach(() => {
      addItemsToPlaylistSpy = vi
        .spyOn(PlaylistsService, 'addTracksToPlaylist')
        .mockResolvedValue(snapshotIdFixture);
    });

    it('should add an item to a playlist (without options)', async () => {
      const response = await playlists.addItemToPlaylist('foo', 'bar');

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(addItemsToPlaylistSpy).toHaveBeenCalledWith(
        'foo',
        undefined,
        'bar',
      );
    });

    it('should add an item to a playlist (with options)', async () => {
      const response = await playlists.addItemToPlaylist('foo', 'bar', {
        position: 2,
      });

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(addItemsToPlaylistSpy).toHaveBeenCalledWith('foo', 2, 'bar');
    });

    it('should add items to a playlist (without options)', async () => {
      const response = await playlists.addItemsToPlaylist('foo', [
        'bar',
        'baz',
      ]);

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(addItemsToPlaylistSpy).toHaveBeenCalledWith(
        'foo',
        undefined,
        'bar,baz',
      );
    });

    it('should add items to a playlist (with options)', async () => {
      const response = await playlists.addItemsToPlaylist(
        'foo',
        ['bar', 'baz'],
        { position: 2 },
      );

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(addItemsToPlaylistSpy).toHaveBeenCalledWith('foo', 2, 'bar,baz');
    });
  });

  describe('changePlaylistDetails', () => {
    it("should change a playlist's details", async () => {
      const changePlaylistDetailsSpy = vi
        .spyOn(PlaylistsService, 'changePlaylistDetails')
        .mockResolvedValue(undefined);

      await playlists.changePlaylistDetails('foo', {
        description: 'bar',
        collaborative: false,
        public: true,
        name: 'baz',
      });

      expect(changePlaylistDetailsSpy).toHaveBeenCalledWith('foo', {
        description: 'bar',
        collaborative: false,
        public: true,
        name: 'baz',
      });
    });
  });

  describe('createPlaylist', () => {
    let createPlaylistSpy: SpyInstance;
    beforeEach(() => {
      createPlaylistSpy = vi
        .spyOn(PlaylistsService, 'createPlaylist')
        .mockResolvedValue(playlistFixture);
    });

    it('should create a playlist (without options)', async () => {
      const response = await playlists.createPlaylist('foo', 'bar');

      expect(response).toEqual(playlistFixture);
      expect(createPlaylistSpy).toHaveBeenCalledWith('foo', {
        name: 'bar',
      });
    });

    it('should create a playlist (with options)', async () => {
      const response = await playlists.createPlaylist('foo', 'bar', {
        description: 'baz',
        collaborative: false,
        public: true,
      });

      expect(response).toEqual(playlistFixture);
      expect(createPlaylistSpy).toHaveBeenCalledWith('foo', {
        name: 'bar',
        description: 'baz',
        collaborative: false,
        public: true,
      });
    });
  });

  describe('getMyPlaylists', () => {
    let getMyPlaylistsSpy: SpyInstance;
    beforeEach(() => {
      getMyPlaylistsSpy = vi
        .spyOn(PlaylistsService, 'getAListOfCurrentUsersPlaylists')
        .mockResolvedValue(getMyPlaylistsFixture);
    });

    it("should get a list of the current user's playlists (without options)", async () => {
      const response = await playlists.getMyPlaylists();

      expect(response).toEqual(getMyPlaylistsFixture);
      expect(getMyPlaylistsSpy).toHaveBeenCalledWith(undefined, undefined);
    });

    it("should get a list of the current user's playlists (with options)", async () => {
      const response = await playlists.getMyPlaylists({ limit: 1, offset: 2 });

      expect(response).toEqual(getMyPlaylistsFixture);
      expect(getMyPlaylistsSpy).toHaveBeenCalledWith(1, 2);
    });
  });

  describe('getPlaylist', () => {
    let getPlaylistSpy: SpyInstance;
    beforeEach(() => {
      getPlaylistSpy = vi
        .spyOn(PlaylistsService, 'getPlaylist')
        .mockResolvedValue(playlistFixture);
    });

    it('should get a playlist (without options)', async () => {
      const response = await playlists.getPlaylist('foo');

      expect(response).toEqual(playlistFixture);
      expect(getPlaylistSpy).toHaveBeenCalledWith(
        'foo',
        undefined,
        undefined,
        undefined,
      );
    });

    it('should get a playlist (with options)', async () => {
      const response = await playlists.getPlaylist('foo', {
        market: 'bar',
        fields: 'baz',
        additional_types: ['episode'],
      });

      expect(response).toEqual(playlistFixture);
      expect(getPlaylistSpy).toHaveBeenCalledWith(
        'foo',
        'bar',
        'baz',
        'episode',
      );
    });
  });

  describe('getPlaylistCover', () => {
    it('should get a playlist cover image', async () => {
      const getPlaylistCoverSpy = vi
        .spyOn(PlaylistsService, 'getPlaylistCover')
        .mockResolvedValue(getPlaylistCoverFixture);
      const response = await playlists.getPlaylistCover('foo');

      expect(response).toEqual(getPlaylistCoverFixture);
      expect(getPlaylistCoverSpy).toHaveBeenCalledWith('foo');
    });
  });

  describe('getPlaylistItems', () => {
    let getPlaylistItemsSpy: SpyInstance;
    beforeEach(() => {
      getPlaylistItemsSpy = vi
        .spyOn(PlaylistsService, 'getPlaylistsTracks')
        .mockResolvedValue(getPlaylistItemsFixture);
    });

    it("should get a playlist's items (without options)", async () => {
      const response = await playlists.getPlaylistItems('foo');

      expect(response).toEqual(getPlaylistItemsFixture);
      expect(getPlaylistItemsSpy.mock.calls[0][0]).toBe('foo');
    });

    it("should get a playlist's items (with options)", async () => {
      const response = await playlists.getPlaylistItems('foo', {
        limit: 1,
        offset: 2,
        market: 'bar',
        fields: 'baz',
        additional_types: ['episode'],
      });

      expect(response).toEqual(getPlaylistItemsFixture);
      expect(getPlaylistItemsSpy).toHaveBeenCalledWith(
        'foo',
        'bar',
        'baz',
        1,
        2,
        'episode',
      );
    });
  });

  describe('getUserPlaylists', () => {
    let getUserPlaylistsSpy: SpyInstance;
    beforeEach(() => {
      getUserPlaylistsSpy = vi
        .spyOn(PlaylistsService, 'getListUsersPlaylists')
        .mockResolvedValue(getUserPlaylistsFixture);
    });

    it("should get a list of a user's playlists (without options)", async () => {
      const response = await playlists.getUserPlaylists('foo');

      expect(response).toEqual(getUserPlaylistsFixture);
      expect(getUserPlaylistsSpy).toHaveBeenCalledWith(
        'foo',
        undefined,
        undefined,
      );
    });

    it("should get a list of a user's playlists (with options)", async () => {
      const response = await playlists.getUserPlaylists('foo', {
        limit: 1,
        offset: 2,
      });

      expect(response).toEqual(getUserPlaylistsFixture);
      expect(getUserPlaylistsSpy).toHaveBeenCalledWith('foo', 1, 2);
    });
  });

  describe('removePlaylistItems', () => {
    let removePlaylistsItemSpy: SpyInstance;
    beforeEach(() => {
      removePlaylistsItemSpy = vi
        .spyOn(PlaylistsService, 'removeTracksPlaylist')
        .mockResolvedValue(snapshotIdFixture);
    });

    it('should remove an item from a playlist', async () => {
      const response = await playlists.removePlaylistItem('foo', 'bar');

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(removePlaylistsItemSpy).toHaveBeenCalledWith('foo', {
        tracks: [{ uri: 'bar' }],
      });
    });

    it('should remove items from a playlist', async () => {
      const response = await playlists.removePlaylistItems(
        'foo',
        ['bar', 'baz'],
        'qux',
      );

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(removePlaylistsItemSpy).toHaveBeenCalledWith('foo', {
        tracks: [{ uri: 'bar' }, { uri: 'baz' }],
        snapshot_id: 'qux',
      });
    });
  });

  describe('reorderPlaylistItems', () => {
    let reorderPlaylistItemsSpy: SpyInstance;
    beforeEach(() => {
      reorderPlaylistItemsSpy = vi
        .spyOn(PlaylistsService, 'reorderOrReplacePlaylistsTracks')
        .mockResolvedValue(snapshotIdFixture);
    });

    it("should reorder a playlist's items (without options)", async () => {
      const response = await playlists.reorderPlaylistItems('foo', 3, 2);

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(reorderPlaylistItemsSpy).toHaveBeenCalledWith('foo', undefined, {
        range_start: 3,
        insert_before: 2,
        range_length: undefined,
        snapshot_id: undefined,
      });
    });

    it("should reorder a playlist's items (with options)", async () => {
      const response = await playlists.reorderPlaylistItems('foo', 3, 2, {
        snapshot_id: 'bar',
        range_length: 4,
      });

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(reorderPlaylistItemsSpy).toHaveBeenCalledWith('foo', undefined, {
        range_start: 3,
        insert_before: 2,
        snapshot_id: 'bar',
        range_length: 4,
      });
    });
  });

  describe('replacePlaylistItems', () => {
    it("should replace a playlist's items", async () => {
      const replacePlaylistItemsSpy = vi
        .spyOn(PlaylistsService, 'reorderOrReplacePlaylistsTracks')
        .mockResolvedValue(snapshotIdFixture);
      await playlists.replacePlaylistItems('foo', ['bar', 'baz']);

      expect(replacePlaylistItemsSpy).toHaveBeenCalledWith('foo', 'bar,baz');
    });
  });

  describe('uploadPlaylistCover', () => {
    it('should upload a custom playlist cover image', async () => {
      const uploadPlaylistCoverSpy = vi
        .spyOn(PlaylistsService, 'uploadCustomPlaylistCover')
        .mockResolvedValue(snapshotIdFixture);
      await playlists.uploadPlaylistCover('foo', 'bar');

      expect(uploadPlaylistCoverSpy).toHaveBeenCalledWith('foo', 'bar');
    });
  });
});
