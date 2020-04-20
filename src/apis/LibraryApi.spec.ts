import {
  getSavedAlbumsFixture,
  getSavedShowsFixture,
  getSavedTracksFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';
import { spotifyAxios } from '../helpers/spotifyAxios';
import { LibraryApi } from './LibraryApi';

jest.mock('../helpers/spotifyAxios');

const spotifyAxiosMock = spotifyAxios as jest.MockedFunction<
  typeof spotifyAxios
>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('LibraryApi', () => {
  describe('areAlbumsSaved', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue([true, false]);
    });

    it("should check the user's saved albums", async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      const response = await library.areAlbumsSaved(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/albums/contains',
        'GET',
        'token',
        {
          params: {
            ids: ['foo', 'bar'],
          },
        },
      );
    });
  });

  describe('areShowsSaved', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue([true, false]);
    });

    it("should check the user's saved shows", async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      const response = await library.areShowsSaved(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/shows/contains',
        'GET',
        'token',
        {
          params: {
            ids: ['foo', 'bar'],
          },
        },
      );
    });
  });

  describe('areTracksSaved', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue([true, false]);
    });

    it("should check the user's saved tracks", async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      const response = await library.areTracksSaved(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/tracks/contains',
        'GET',
        'token',
        {
          params: {
            ids: ['foo', 'bar'],
          },
        },
      );
    });
  });

  describe('getSavedAlbums', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getSavedAlbumsFixture);
    });

    it("should get the current user's saved albums (without options)", async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      const response = await library.getSavedAlbums();

      expect(response).toEqual(getSavedAlbumsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/albums',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get the current user's saved albums (with options)", async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      const response = await library.getSavedAlbums({ limit: 2 });

      expect(response).toEqual(getSavedAlbumsFixture);
      expect(spotifyAxiosMock).toBeCalledWith('/me/albums', 'GET', 'token', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('getSavedShows', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getSavedShowsFixture);
    });

    it("should get the current user's saved shows (without options)", async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      const response = await library.getSavedShows();

      expect(response).toEqual(getSavedShowsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/shows',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get the current user's saved shows (with options)", async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      const response = await library.getSavedShows({ limit: 2 });

      expect(response).toEqual(getSavedShowsFixture);
      expect(spotifyAxiosMock).toBeCalledWith('/me/shows', 'GET', 'token', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('getSavedTracks', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getSavedTracksFixture);
    });

    it("should get the current user's saved tracks (without options)", async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      const response = await library.getSavedTracks();

      expect(response).toEqual(getSavedTracksFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/tracks',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get the current user's saved tracks (with options)", async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      const response = await library.getSavedTracks({ limit: 2 });

      expect(response).toEqual(getSavedTracksFixture);
      expect(spotifyAxiosMock).toBeCalledWith('/me/tracks', 'GET', 'token', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('removeSavedAlbums', () => {
    it('should remove albums for the current user', async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      await library.removeSavedAlbums(['foo', 'bar']);

      expect(spotifyAxiosMock).toBeCalledWith('/me/albums', 'DELETE', 'token', {
        data: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('removeSavedShows', () => {
    it('should remove shows for the current user (without options)', async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      await library.removeSavedShows(['foo', 'bar']);

      expect(spotifyAxiosMock).toBeCalledWith('/me/shows', 'DELETE', 'token', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });

    it('should remove shows for the current user (with options)', async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      await library.removeSavedShows(['foo', 'bar'], { market: 'baz' });

      expect(spotifyAxiosMock).toBeCalledWith('/me/shows', 'DELETE', 'token', {
        params: {
          ids: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });

  describe('removeSavedTracks', () => {
    it('should remove tracks for the current user', async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      await library.removeSavedTracks(['foo', 'bar']);

      expect(spotifyAxiosMock).toBeCalledWith('/me/tracks', 'DELETE', 'token', {
        data: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('saveAlbums', () => {
    it('should save albums for the current user', async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      await library.saveAlbums(['foo', 'bar']);

      expect(spotifyAxiosMock).toBeCalledWith('/me/albums', 'PUT', 'token', {
        data: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('saveShows', () => {
    it('should save shows for the current user', async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      await library.saveShows(['foo', 'bar']);

      expect(spotifyAxiosMock).toBeCalledWith('/me/shows', 'PUT', 'token', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('saveTracks', () => {
    it('should save tracks for the current user', async () => {
      const http = new Http('token');
      const library = new LibraryApi(http);
      await library.saveTracks(['foo', 'bar']);

      expect(spotifyAxiosMock).toBeCalledWith('/me/tracks', 'PUT', 'token', {
        data: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });
});
