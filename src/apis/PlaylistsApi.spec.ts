import {
  getMyPlaylistsFixture,
  getPlaylistItemsFixture,
  getUserPlaylistsFixture,
  imageFixture,
  playlistFixture,
  snapshotIdFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';
import { spotifyAxios } from '../helpers/spotifyAxios';
import { PlaylistsApi } from './PlaylistsApi';

jest.mock('../helpers/spotifyAxios');

const spotifyAxiosMock = spotifyAxios as jest.MockedFunction<
  typeof spotifyAxios
>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('PlaylistsApi', () => {
  describe('addItemsToPlaylist', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(snapshotIdFixture);
    });

    it('should add items to a playlist (without options)', async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.addItemsToPlaylist('foo', [
        'bar',
        'baz',
      ]);

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/tracks',
        'POST',
        'token',
        {
          data: {
            uris: ['bar', 'baz'],
          },
        },
      );
    });

    it('should add items to a playlist (with options)', async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.addItemsToPlaylist(
        'foo',
        ['bar', 'baz'],
        { position: 2 },
      );

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/tracks',
        'POST',
        'token',
        {
          data: {
            uris: ['bar', 'baz'],
            position: 2,
          },
        },
      );
    });
  });

  describe('changePlaylistDetails', () => {
    it("should change a playlist's details", async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      await playlists.changePlaylistDetails('foo', { description: 'bar' });

      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo',
        'PUT',
        'token',
        {
          data: {
            description: 'bar',
          },
        },
      );
    });
  });

  describe('createPlaylist', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(playlistFixture);
    });

    it('should create a playlist (without options)', async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.createPlaylist('foo', 'bar');

      expect(response).toEqual(playlistFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/users/foo/playlists',
        'POST',
        'token',
        {
          data: {
            name: 'bar',
          },
        },
      );
    });

    it('should create a playlist (with options)', async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.createPlaylist('foo', 'bar', {
        description: 'baz',
      });

      expect(response).toEqual(playlistFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/users/foo/playlists',
        'POST',
        'token',
        {
          data: {
            name: 'bar',
            description: 'baz',
          },
        },
      );
    });
  });

  describe('getMyPlaylists', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getMyPlaylistsFixture);
    });

    it("should get a list of the current user's playlists (without options)", async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.getMyPlaylists();

      expect(response).toEqual(getMyPlaylistsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/playlists',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get a list of the current user's playlists (with options)", async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.getMyPlaylists({ limit: 2 });

      expect(response).toEqual(getMyPlaylistsFixture);
      expect(spotifyAxiosMock).toBeCalledWith('/me/playlists', 'GET', 'token', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('getPlaylist', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(playlistFixture);
    });

    it('should get a playlist (without options)', async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.getPlaylist('foo');

      expect(response).toEqual(playlistFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo',
        'GET',
        'token',
        undefined,
      );
    });

    it('should get a playlist (with options)', async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.getPlaylist('foo', { market: 'bar' });

      expect(response).toEqual(playlistFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo',
        'GET',
        'token',
        {
          params: {
            market: 'bar',
          },
        },
      );
    });
  });

  describe('getPlaylistCover', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue([imageFixture]);
    });

    it('should get a playlist cover image', async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.getPlaylistCover('foo');

      expect(response).toEqual([imageFixture]);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/images',
        'GET',
        'token',
        undefined,
      );
    });
  });

  describe('getPlaylistItems', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getPlaylistItemsFixture);
    });

    it("should get a playlist's items (without options)", async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.getPlaylistItems('foo');

      expect(response).toEqual(getPlaylistItemsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/tracks',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get a playlist's items (with options)", async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.getPlaylistItems('foo', { limit: 2 });

      expect(response).toEqual(getPlaylistItemsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/tracks',
        'GET',
        'token',
        {
          params: {
            limit: 2,
          },
        },
      );
    });
  });

  describe('getUserPlaylists', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getUserPlaylistsFixture);
    });

    it("should get a list of a user's playlists (without options)", async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.getUserPlaylists('foo');

      expect(response).toEqual(getUserPlaylistsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/users/foo/playlists',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get a list of a user's playlists (with options)", async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.getUserPlaylists('foo', { limit: 2 });

      expect(response).toEqual(getUserPlaylistsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/users/foo/playlists',
        'GET',
        'token',
        {
          params: {
            limit: 2,
          },
        },
      );
    });
  });

  describe('removePlaylistItems', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(snapshotIdFixture);
    });

    it('should remove items from a playlist', async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.removePlaylistItems('foo', [
        'bar',
        'baz',
      ]);

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/tracks',
        'DELETE',
        'token',
        {
          data: {
            tracks: [{ uri: 'bar' }, { uri: 'baz' }],
          },
        },
      );
    });
  });

  describe('removePlaylistItemsByPosition', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(snapshotIdFixture);
    });

    it('should remove items from a playlist by position (without options)', async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.removePlaylistItemsByPosition('foo', [
        { uri: 'bar', positions: [1, 3] },
      ]);

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/tracks',
        'DELETE',
        'token',
        {
          data: {
            tracks: [{ uri: 'bar', positions: [1, 3] }],
          },
        },
      );
    });

    it('should remove items from a playlist by position (with options)', async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.removePlaylistItemsByPosition(
        'foo',
        [{ uri: 'bar', positions: [1, 3] }],
        { snapshot_id: 'baz' },
      );

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/tracks',
        'DELETE',
        'token',
        {
          data: {
            tracks: [{ uri: 'bar', positions: [1, 3] }],
            snapshot_id: 'baz',
          },
        },
      );
    });
  });

  describe('reorderPlaylistItems', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(snapshotIdFixture);
    });

    it("should reorder a playlist's items (without options)", async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.reorderPlaylistItems('foo', 3, 2);

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/tracks',
        'PUT',
        'token',
        {
          data: {
            range_start: 3,
            insert_before: 2,
          },
        },
      );
    });

    it("should reorder a playlist's items (with options)", async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      const response = await playlists.reorderPlaylistItems('foo', 3, 2, {
        snapshot_id: 'bar',
      });

      expect(response).toBe(snapshotIdFixture.snapshot_id);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/tracks',
        'PUT',
        'token',
        {
          data: {
            range_start: 3,
            insert_before: 2,
            snapshot_id: 'bar',
          },
        },
      );
    });
  });

  describe('replacePlaylistItems', () => {
    it("should replace a playlist's items", async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      await playlists.replacePlaylistItems('foo', ['bar', 'baz']);

      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/tracks',
        'PUT',
        'token',
        {
          data: {
            uris: ['bar', 'baz'],
          },
        },
      );
    });
  });

  describe('uploadPlaylistCover', () => {
    it('should upload a custom playlist cover image', async () => {
      const http = new Http('token');
      const playlists = new PlaylistsApi(http);
      await playlists.uploadPlaylistCover('foo', 'bar');

      expect(spotifyAxiosMock).toBeCalledWith(
        '/playlists/foo/images',
        'PUT',
        'token',
        {
          data: 'bar',
          contentType: 'image/jpeg',
        },
      );
    });
  });
});
