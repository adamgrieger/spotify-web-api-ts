import { type MockedClass } from 'vitest';

import {
  albumFixture,
  getAlbumTracksFixture,
  getAlbumsFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';

import { AlbumsApi } from './AlbumsApi';

vi.mock('../helpers/Http');

const HttpMock = Http as MockedClass<typeof Http>;

function setup() {
  const httpMock = new HttpMock('token');
  const albums = new AlbumsApi(httpMock);

  return { httpMock, albums };
}

beforeEach(() => {
  vi.resetAllMocks();
});

describe('AlbumsApi', () => {
  describe('getAlbum', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(albumFixture);
    });

    it('should get an album (without options)', async () => {
      const { httpMock, albums } = setup();

      const response = await albums.getAlbum('foo');

      expect(response).toEqual(albumFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/albums/foo', undefined);
    });

    it('should get an album (with options)', async () => {
      const { httpMock, albums } = setup();

      const response = await albums.getAlbum('foo', { market: 'bar' });

      expect(response).toEqual(albumFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/albums/foo', {
        params: {
          market: 'bar',
        },
      });
    });
  });

  describe('getAlbums', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getAlbumsFixture);
    });

    it('should get several albums (without options)', async () => {
      const { httpMock, albums } = setup();

      const response = await albums.getAlbums(['foo', 'bar']);

      expect(response).toEqual(getAlbumsFixture.albums);
      expect(httpMock.get).toHaveBeenCalledWith('/albums', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });

    it('should get several albums (with options)', async () => {
      const { httpMock, albums } = setup();

      const response = await albums.getAlbums(['foo', 'bar'], {
        market: 'baz',
      });

      expect(response).toEqual(getAlbumsFixture.albums);
      expect(httpMock.get).toHaveBeenCalledWith('/albums', {
        params: {
          ids: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });

  describe('getAlbumTracks', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getAlbumTracksFixture);
    });

    it("should get an album's tracks (without options)", async () => {
      const { httpMock, albums } = setup();

      const response = await albums.getAlbumTracks('foo');

      expect(response).toEqual(getAlbumTracksFixture);
      expect(httpMock.get).toHaveBeenCalledWith(
        '/albums/foo/tracks',
        undefined,
      );
    });

    it("should get an album's tracks (with options)", async () => {
      const { httpMock, albums } = setup();

      const response = await albums.getAlbumTracks('foo', { market: 'bar' });

      expect(response).toEqual(getAlbumTracksFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/albums/foo/tracks', {
        params: {
          market: 'bar',
        },
      });
    });
  });
});
