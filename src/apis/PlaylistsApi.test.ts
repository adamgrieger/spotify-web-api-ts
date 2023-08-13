import { type MockedClass } from 'vitest';

import {
  getMyPlaylistsFixture,
  getPlaylistItemsFixture,
  getUserPlaylistsFixture,
  playlistFixture,
  snapshotIdFixture,
  spotifyImageFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';

import { PlaylistsApi } from './PlaylistsApi';

vi.mock('../helpers/Http');

const HttpMock = Http as MockedClass<typeof Http>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function setup() {
  const httpMock = new HttpMock('token');
  const playlists = new PlaylistsApi(httpMock);

  return { httpMock, playlists };
}

describe('PlaylistsApi', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('addItemToPlaylist', () => {
    beforeEach(() => {
      HttpMock.prototype.post.mockResolvedValue(snapshotIdFixture);
    });

    it('should add an item to a playlist (without options)', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.addItemToPlaylist('foo', 'bar');

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(httpMock.post).toHaveBeenCalledWith('/playlists/foo/tracks', {
        data: {
          uris: ['bar'],
        },
      });
    });

    it('should add an item to a playlist (with options)', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.addItemToPlaylist('foo', 'bar', {
        position: 2,
      });

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(httpMock.post).toHaveBeenCalledWith('/playlists/foo/tracks', {
        data: {
          uris: ['bar'],
          position: 2,
        },
      });
    });
  });
  describe('addItemsToPlaylist', () => {
    beforeEach(() => {
      HttpMock.prototype.post.mockResolvedValue(snapshotIdFixture);
    });

    it('should add items to a playlist (without options)', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.addItemsToPlaylist('foo', [
        'bar',
        'baz',
      ]);

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(httpMock.post).toHaveBeenCalledWith('/playlists/foo/tracks', {
        data: {
          uris: ['bar', 'baz'],
        },
      });
    });

    it('should add items to a playlist (with options)', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.addItemsToPlaylist(
        'foo',
        ['bar', 'baz'],
        { position: 2 },
      );

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(httpMock.post).toHaveBeenCalledWith('/playlists/foo/tracks', {
        data: {
          uris: ['bar', 'baz'],
          position: 2,
        },
      });
    });
  });

  describe('changePlaylistDetails', () => {
    it("should change a playlist's details", async () => {
      const { httpMock, playlists } = setup();

      await playlists.changePlaylistDetails('foo', { description: 'bar' });

      expect(httpMock.put).toHaveBeenCalledWith('/playlists/foo', {
        data: {
          description: 'bar',
        },
      });
    });
  });

  describe('createPlaylist', () => {
    beforeEach(() => {
      HttpMock.prototype.post.mockResolvedValue(playlistFixture);
    });

    it('should create a playlist (without options)', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.createPlaylist('foo', 'bar');

      expect(response).toEqual(playlistFixture);
      expect(httpMock.post).toHaveBeenCalledWith('/users/foo/playlists', {
        data: {
          name: 'bar',
        },
      });
    });

    it('should create a playlist (with options)', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.createPlaylist('foo', 'bar', {
        description: 'baz',
      });

      expect(response).toEqual(playlistFixture);
      expect(httpMock.post).toHaveBeenCalledWith('/users/foo/playlists', {
        data: {
          name: 'bar',
          description: 'baz',
        },
      });
    });
  });

  describe('getMyPlaylists', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getMyPlaylistsFixture);
    });

    it("should get a list of the current user's playlists (without options)", async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.getMyPlaylists();

      expect(response).toEqual(getMyPlaylistsFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/me/playlists', undefined);
    });

    it("should get a list of the current user's playlists (with options)", async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.getMyPlaylists({ limit: 2 });

      expect(response).toEqual(getMyPlaylistsFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/me/playlists', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('getPlaylist', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(playlistFixture);
    });

    it('should get a playlist (without options)', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.getPlaylist('foo');

      expect(response).toEqual(playlistFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/playlists/foo', undefined);
    });

    it('should get a playlist (with options)', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.getPlaylist('foo', { market: 'bar' });

      expect(response).toEqual(playlistFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/playlists/foo', {
        params: {
          market: 'bar',
        },
      });
    });
  });

  describe('getPlaylistCover', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([spotifyImageFixture]);
    });

    it('should get a playlist cover image', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.getPlaylistCover('foo');

      expect(response).toEqual([spotifyImageFixture]);
      expect(httpMock.get).toHaveBeenCalledWith('/playlists/foo/images');
    });
  });

  describe('getPlaylistItems', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getPlaylistItemsFixture);
    });

    it("should get a playlist's items (without options)", async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.getPlaylistItems('foo');

      expect(response).toEqual(getPlaylistItemsFixture);
      expect(httpMock.get).toHaveBeenCalledWith(
        '/playlists/foo/tracks',
        undefined,
      );
    });

    it("should get a playlist's items (with options)", async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.getPlaylistItems('foo', { limit: 2 });

      expect(response).toEqual(getPlaylistItemsFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/playlists/foo/tracks', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('getUserPlaylists', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getUserPlaylistsFixture);
    });

    it("should get a list of a user's playlists (without options)", async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.getUserPlaylists('foo');

      expect(response).toEqual(getUserPlaylistsFixture);
      expect(httpMock.get).toHaveBeenCalledWith(
        '/users/foo/playlists',
        undefined,
      );
    });

    it("should get a list of a user's playlists (with options)", async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.getUserPlaylists('foo', { limit: 2 });

      expect(response).toEqual(getUserPlaylistsFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/users/foo/playlists', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('removePlaylistItem', () => {
    beforeEach(() => {
      HttpMock.prototype.delete.mockResolvedValue(snapshotIdFixture);
    });

    it('should remove an item from a playlist', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.removePlaylistItem('foo', 'bar');

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(httpMock.delete).toHaveBeenCalledWith('/playlists/foo/tracks', {
        data: {
          tracks: [{ uri: 'bar' }],
        },
      });
    });
  });

  describe('removePlaylistItems', () => {
    beforeEach(() => {
      HttpMock.prototype.delete.mockResolvedValue(snapshotIdFixture);
    });

    it('should remove items from a playlist', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.removePlaylistItems('foo', [
        'bar',
        'baz',
      ]);

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(httpMock.delete).toHaveBeenCalledWith('/playlists/foo/tracks', {
        data: {
          tracks: [{ uri: 'bar' }, { uri: 'baz' }],
        },
      });
    });
  });

  describe('removePlaylistItemByPosition', () => {
    beforeEach(() => {
      HttpMock.prototype.delete.mockResolvedValue(snapshotIdFixture);
    });

    it('should remove an item from a playlist by position (without options)', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.removePlaylistItemByPosition(
        'foo',
        'bar',
        [1, 3],
      );

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(httpMock.delete).toHaveBeenCalledWith('/playlists/foo/tracks', {
        data: {
          tracks: [{ uri: 'bar', positions: [1, 3] }],
        },
      });
    });

    it('should remove an item from a playlist by position (with options)', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.removePlaylistItemByPosition(
        'foo',
        'bar',
        [1, 3],
        { snapshot_id: 'baz' },
      );

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(httpMock.delete).toHaveBeenCalledWith('/playlists/foo/tracks', {
        data: {
          tracks: [{ uri: 'bar', positions: [1, 3] }],
          snapshot_id: 'baz',
        },
      });
    });
  });

  describe('removePlaylistItemsByPosition', () => {
    beforeEach(() => {
      HttpMock.prototype.delete.mockResolvedValue(snapshotIdFixture);
    });

    it('should remove items from a playlist by position (without options)', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.removePlaylistItemsByPosition('foo', [
        { uri: 'bar', positions: [1, 3] },
      ]);

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(httpMock.delete).toHaveBeenCalledWith('/playlists/foo/tracks', {
        data: {
          tracks: [{ uri: 'bar', positions: [1, 3] }],
        },
      });
    });

    it('should remove items from a playlist by position (with options)', async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.removePlaylistItemsByPosition(
        'foo',
        [{ uri: 'bar', positions: [1, 3] }],
        { snapshot_id: 'baz' },
      );

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(httpMock.delete).toHaveBeenCalledWith('/playlists/foo/tracks', {
        data: {
          tracks: [{ uri: 'bar', positions: [1, 3] }],
          snapshot_id: 'baz',
        },
      });
    });
  });

  describe('reorderPlaylistItems', () => {
    beforeEach(() => {
      HttpMock.prototype.put.mockResolvedValue(snapshotIdFixture);
    });

    it("should reorder a playlist's items (without options)", async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.reorderPlaylistItems('foo', 3, 2);

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(httpMock.put).toHaveBeenCalledWith('/playlists/foo/tracks', {
        data: {
          range_start: 3,
          insert_before: 2,
        },
      });
    });

    it("should reorder a playlist's items (with options)", async () => {
      const { httpMock, playlists } = setup();

      const response = await playlists.reorderPlaylistItems('foo', 3, 2, {
        snapshot_id: 'bar',
      });

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(httpMock.put).toHaveBeenCalledWith('/playlists/foo/tracks', {
        data: {
          range_start: 3,
          insert_before: 2,
          snapshot_id: 'bar',
        },
      });
    });
  });

  describe('replacePlaylistItems', () => {
    it("should replace a playlist's items", async () => {
      const { httpMock, playlists } = setup();

      await playlists.replacePlaylistItems('foo', ['bar', 'baz']);

      expect(httpMock.put).toHaveBeenCalledWith('/playlists/foo/tracks', {
        data: {
          uris: ['bar', 'baz'],
        },
      });
    });
  });

  describe('uploadPlaylistCover', () => {
    it('should upload a custom playlist cover image', async () => {
      const { httpMock, playlists } = setup();

      await playlists.uploadPlaylistCover('foo', 'bar');

      expect(httpMock.put).toHaveBeenCalledWith('/playlists/foo/images', {
        data: 'bar',
        contentType: 'image/jpeg',
      });
    });
  });
});
