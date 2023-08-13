import {
  getSavedAlbumsFixture,
  getSavedShowsFixture,
  getSavedTracksFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';
import { LibraryApi } from './LibraryApi';

vi.mock('../helpers/Http');

const HttpMock = Http as vi.MockedClass<typeof Http>;

function setup() {
  const httpMock = new HttpMock('token');
  const library = new LibraryApi(httpMock);

  return { httpMock, library };
}

beforeEach(() => {
  vi.resetAllMocks();
});

describe('LibraryApi', () => {
  describe('areAlbumsSaved', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([true, false]);
    });

    it("should check the user's saved albums", async () => {
      const { httpMock, library } = setup();

      const response = await library.areAlbumsSaved(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(httpMock.get).toBeCalledWith('/me/albums/contains', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('areShowsSaved', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([true, false]);
    });

    it("should check the user's saved shows", async () => {
      const { httpMock, library } = setup();

      const response = await library.areShowsSaved(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(httpMock.get).toBeCalledWith('/me/shows/contains', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('areTracksSaved', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([true, false]);
    });

    it("should check the user's saved tracks", async () => {
      const { httpMock, library } = setup();

      const response = await library.areTracksSaved(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(httpMock.get).toBeCalledWith('/me/tracks/contains', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('getSavedAlbums', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getSavedAlbumsFixture);
    });

    it("should get the current user's saved albums (without options)", async () => {
      const { httpMock, library } = setup();

      const response = await library.getSavedAlbums();

      expect(response).toEqual(getSavedAlbumsFixture);
      expect(httpMock.get).toBeCalledWith('/me/albums', undefined);
    });

    it("should get the current user's saved albums (with options)", async () => {
      const { httpMock, library } = setup();

      const response = await library.getSavedAlbums({ limit: 2 });

      expect(response).toEqual(getSavedAlbumsFixture);
      expect(httpMock.get).toBeCalledWith('/me/albums', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('getSavedShows', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getSavedShowsFixture);
    });

    it("should get the current user's saved shows (without options)", async () => {
      const { httpMock, library } = setup();

      const response = await library.getSavedShows();

      expect(response).toEqual(getSavedShowsFixture);
      expect(httpMock.get).toBeCalledWith('/me/shows', undefined);
    });

    it("should get the current user's saved shows (with options)", async () => {
      const { httpMock, library } = setup();

      const response = await library.getSavedShows({ limit: 2 });

      expect(response).toEqual(getSavedShowsFixture);
      expect(httpMock.get).toBeCalledWith('/me/shows', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('getSavedTracks', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getSavedTracksFixture);
    });

    it("should get the current user's saved tracks (without options)", async () => {
      const { httpMock, library } = setup();

      const response = await library.getSavedTracks();

      expect(response).toEqual(getSavedTracksFixture);
      expect(httpMock.get).toBeCalledWith('/me/tracks', undefined);
    });

    it("should get the current user's saved tracks (with options)", async () => {
      const { httpMock, library } = setup();

      const response = await library.getSavedTracks({ limit: 2 });

      expect(response).toEqual(getSavedTracksFixture);
      expect(httpMock.get).toBeCalledWith('/me/tracks', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('isAlbumSaved', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([true]);
    });

    it("should check the user's saved albums", async () => {
      const { httpMock, library } = setup();

      const response = await library.isAlbumSaved('foo');

      expect(response).toBe(true);
      expect(httpMock.get).toBeCalledWith('/me/albums/contains', {
        params: {
          ids: ['foo'],
        },
      });
    });
  });

  describe('isShowSaved', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([true]);
    });

    it("should check the user's saved shows", async () => {
      const { httpMock, library } = setup();

      const response = await library.isShowSaved('foo');

      expect(response).toBe(true);
      expect(httpMock.get).toBeCalledWith('/me/shows/contains', {
        params: {
          ids: ['foo'],
        },
      });
    });
  });

  describe('isTrackSaved', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([true]);
    });

    it("should check the user's saved tracks", async () => {
      const { httpMock, library } = setup();

      const response = await library.isTrackSaved('foo');

      expect(response).toBe(true);
      expect(httpMock.get).toBeCalledWith('/me/tracks/contains', {
        params: {
          ids: ['foo'],
        },
      });
    });
  });

  describe('removeSavedAlbum', () => {
    it('should remove an album for the current user', async () => {
      const { httpMock, library } = setup();

      await library.removeSavedAlbum('foo');

      expect(httpMock.delete).toBeCalledWith('/me/albums', {
        data: {
          ids: ['foo'],
        },
      });
    });
  });

  describe('removeSavedAlbums', () => {
    it('should remove albums for the current user', async () => {
      const { httpMock, library } = setup();

      await library.removeSavedAlbums(['foo', 'bar']);

      expect(httpMock.delete).toBeCalledWith('/me/albums', {
        data: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('removeSavedShow', () => {
    it('should remove a show for the current user (without options)', async () => {
      const { httpMock, library } = setup();

      await library.removeSavedShow('foo');

      expect(httpMock.delete).toBeCalledWith('/me/shows', {
        params: {
          ids: ['foo'],
        },
      });
    });

    it('should remove a show for the current user (with options)', async () => {
      const { httpMock, library } = setup();

      await library.removeSavedShow('foo', { market: 'bar' });

      expect(httpMock.delete).toBeCalledWith('/me/shows', {
        params: {
          ids: ['foo'],
          market: 'bar',
        },
      });
    });
  });

  describe('removeSavedShows', () => {
    it('should remove shows for the current user (without options)', async () => {
      const { httpMock, library } = setup();

      await library.removeSavedShows(['foo', 'bar']);

      expect(httpMock.delete).toBeCalledWith('/me/shows', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });

    it('should remove shows for the current user (with options)', async () => {
      const { httpMock, library } = setup();

      await library.removeSavedShows(['foo', 'bar'], { market: 'baz' });

      expect(httpMock.delete).toBeCalledWith('/me/shows', {
        params: {
          ids: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });

  describe('removeSavedTrack', () => {
    it('should remove a track for the current user', async () => {
      const { httpMock, library } = setup();

      await library.removeSavedTrack('foo');

      expect(httpMock.delete).toBeCalledWith('/me/tracks', {
        data: {
          ids: ['foo'],
        },
      });
    });
  });

  describe('removeSavedTracks', () => {
    it('should remove tracks for the current user', async () => {
      const { httpMock, library } = setup();

      await library.removeSavedTracks(['foo', 'bar']);

      expect(httpMock.delete).toBeCalledWith('/me/tracks', {
        data: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('saveAlbum', () => {
    it('should save an album for the current user', async () => {
      const { httpMock, library } = setup();

      await library.saveAlbum('foo');

      expect(httpMock.put).toBeCalledWith('/me/albums', {
        data: {
          ids: ['foo'],
        },
      });
    });
  });

  describe('saveAlbums', () => {
    it('should save albums for the current user', async () => {
      const { httpMock, library } = setup();

      await library.saveAlbums(['foo', 'bar']);

      expect(httpMock.put).toBeCalledWith('/me/albums', {
        data: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('saveShow', () => {
    it('should save a show for the current user', async () => {
      const { httpMock, library } = setup();

      await library.saveShow('foo');

      expect(httpMock.put).toBeCalledWith('/me/shows', {
        params: {
          ids: ['foo'],
        },
      });
    });
  });

  describe('saveShows', () => {
    it('should save shows for the current user', async () => {
      const { httpMock, library } = setup();

      await library.saveShows(['foo', 'bar']);

      expect(httpMock.put).toBeCalledWith('/me/shows', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('saveTrack', () => {
    it('should save a track for the current user', async () => {
      const { httpMock, library } = setup();

      await library.saveTrack('foo');

      expect(httpMock.put).toBeCalledWith('/me/tracks', {
        data: {
          ids: ['foo'],
        },
      });
    });
  });

  describe('saveTracks', () => {
    it('should save tracks for the current user', async () => {
      const { httpMock, library } = setup();

      await library.saveTracks(['foo', 'bar']);

      expect(httpMock.put).toBeCalledWith('/me/tracks', {
        data: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });
});
