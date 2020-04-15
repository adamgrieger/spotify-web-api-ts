import { Http } from '../helpers/Http';
import { PlaylistsApi } from './PlaylistsApi';

jest.mock('../helpers/Http');

const HttpMock = Http as jest.Mocked<typeof Http>;

describe('PlaylistsApi', () => {
  const http = new HttpMock('token');

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('addTracksToPlaylist', () => {
    it('should add tracks to a playlist (without options)', () => {
      const playlists = new PlaylistsApi(http);
      playlists.addTracksToPlaylist('foo', ['bar', 'baz']);
      expect(http.post).toBeCalledWith('/playlists/foo/tracks', {
        data: {
          uris: ['bar', 'baz'],
        },
      });
    });

    it('should add tracks to a playlist (with options)', () => {
      const playlists = new PlaylistsApi(http);
      playlists.addTracksToPlaylist('foo', ['bar', 'baz'], { position: 2 });
      expect(http.post).toBeCalledWith('/playlists/foo/tracks', {
        data: {
          uris: ['bar', 'baz'],
          position: 2,
        },
      });
    });
  });

  describe('changePlaylistDetails', () => {
    it("should change a playlist's details", () => {
      const playlists = new PlaylistsApi(http);
      playlists.changePlaylistDetails('foo', { description: 'bar' });
      expect(http.put).toBeCalledWith('/playlists/foo', {
        data: {
          description: 'bar',
        },
      });
    });
  });

  describe('createPlaylist', () => {
    it('should create a playlist (without options)', () => {
      const playlists = new PlaylistsApi(http);
      playlists.createPlaylist('foo', 'bar');
      expect(http.post).toBeCalledWith('/users/foo/playlists', {
        data: {
          name: 'bar',
        },
      });
    });

    it('should create a playlist (with options)', () => {
      const playlists = new PlaylistsApi(http);
      playlists.createPlaylist('foo', 'bar', { description: 'baz' });
      expect(http.post).toBeCalledWith('/users/foo/playlists', {
        data: {
          name: 'bar',
          description: 'baz',
        },
      });
    });
  });

  describe('getMyPlaylists', () => {
    it("should get a list of the current user's playlists (without options)", () => {
      const playlists = new PlaylistsApi(http);
      playlists.getMyPlaylists();
      expect(http.get).toBeCalledWith('/me/playlists', undefined);
    });

    it("should get a list of the current user's playlists (with options)", () => {
      const playlists = new PlaylistsApi(http);
      playlists.getMyPlaylists({ limit: 2 });
      expect(http.get).toBeCalledWith('/me/playlists', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('getPlaylist', () => {
    it('should get a playlist (without options)', () => {
      const playlists = new PlaylistsApi(http);
      playlists.getPlaylist('foo');
      expect(http.get).toBeCalledWith('/playlists/foo', undefined);
    });

    it('should get a playlist (with options)', () => {
      const playlists = new PlaylistsApi(http);
      playlists.getPlaylist('foo', { market: 'bar' });
      expect(http.get).toBeCalledWith('/playlists/foo', {
        params: {
          market: 'bar',
        },
      });
    });
  });

  describe('getPlaylistCoverImage', () => {
    it('should get a playlist cover image', () => {
      const playlists = new PlaylistsApi(http);
      playlists.getPlaylistCoverImage('foo');
      expect(http.get).toBeCalledWith('/playlists/foo/images');
    });
  });

  describe('getPlaylistTracks', () => {
    it("should get a playlist's tracks (without options)", () => {
      const playlists = new PlaylistsApi(http);
      playlists.getPlaylistTracks('foo');
      expect(http.get).toBeCalledWith('/playlists/foo/tracks', undefined);
    });

    it("should get a playlist's tracks (with options)", () => {
      const playlists = new PlaylistsApi(http);
      playlists.getPlaylistTracks('foo', { limit: 2 });
      expect(http.get).toBeCalledWith('/playlists/foo/tracks', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('getUserPlaylists', () => {
    it("should get a list of a user's playlists (without options)", () => {
      const playlists = new PlaylistsApi(http);
      playlists.getUserPlaylists('foo');
      expect(http.get).toBeCalledWith('/users/foo/playlists', undefined);
    });

    it("should get a list of a user's playlists (with options)", () => {
      const playlists = new PlaylistsApi(http);
      playlists.getUserPlaylists('foo', { limit: 2 });
      expect(http.get).toBeCalledWith('/users/foo/playlists', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('removePlaylistTracks', () => {
    it("should remove one or more tracks from a user's playlist", () => {
      const playlists = new PlaylistsApi(http);
      playlists.removePlaylistTracks('foo', ['bar', 'baz']);
      expect(http.delete).toBeCalledWith('/playlists/foo/tracks', {
        data: {
          tracks: [{ uri: 'bar' }, { uri: 'baz' }],
        },
      });
    });
  });

  describe('removePlaylistTracksByPosition', () => {
    it("should remove one or more tracks from a user's playlist by position (without options)", () => {
      const playlists = new PlaylistsApi(http);
      playlists.removePlaylistTracksByPosition('foo', [
        { uri: 'bar', positions: [1, 3] },
      ]);
      expect(http.delete).toBeCalledWith('/playlists/foo/tracks', {
        data: {
          tracks: [{ uri: 'bar', positions: [1, 3] }],
        },
      });
    });

    it("should remove one or more tracks from a user's playlist by position (with options)", () => {
      const playlists = new PlaylistsApi(http);
      playlists.removePlaylistTracksByPosition(
        'foo',
        [{ uri: 'bar', positions: [1, 3] }],
        { snapshot_id: 'baz' },
      );
      expect(http.delete).toBeCalledWith('/playlists/foo/tracks', {
        data: {
          tracks: [{ uri: 'bar', positions: [1, 3] }],
          snapshot_id: 'baz',
        },
      });
    });
  });

  describe('reorderPlaylistTracks', () => {
    it('should reorder a track or a group of tracks in a playlist (without options)', () => {
      const playlists = new PlaylistsApi(http);
      playlists.reorderPlaylistTracks('foo', 3, 2);
      expect(http.put).toBeCalledWith('/playlists/foo/tracks', {
        data: {
          range_start: 3,
          insert_before: 2,
        },
      });
    });

    it('should reorder a track or a group of tracks in a playlist (with options)', () => {
      const playlists = new PlaylistsApi(http);
      playlists.reorderPlaylistTracks('foo', 3, 2, { snapshot_id: 'bar' });
      expect(http.put).toBeCalledWith('/playlists/foo/tracks', {
        data: {
          range_start: 3,
          insert_before: 2,
          snapshot_id: 'bar',
        },
      });
    });
  });

  describe('replacePlaylistTracks', () => {
    it("should replace a playlist's tracks", () => {
      const playlists = new PlaylistsApi(http);
      playlists.replacePlaylistTracks('foo', ['bar', 'baz']);
      expect(http.put).toBeCalledWith('/playlists/foo/tracks', {
        data: {
          uris: ['bar', 'baz'],
        },
      });
    });
  });

  describe('uploadPlaylistCover', () => {
    it('should upload a custom playlist cover image', () => {
      const playlists = new PlaylistsApi(http);
      playlists.uploadPlaylistCover('foo', 'bar');
      expect(http.put).toBeCalledWith('/playlists/foo/images', {
        data: 'bar',
        contentType: 'image/jpeg',
      });
    });
  });
});
