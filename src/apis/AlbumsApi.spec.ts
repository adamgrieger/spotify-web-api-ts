import {
  albumFixture,
  getAlbumsFixture,
  getAlbumTracksFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';
import { spotifyAxios } from '../helpers/spotifyAxios';
import { AlbumsApi } from './AlbumsApi';

jest.mock('../helpers/spotifyAxios');

const spotifyAxiosMock = spotifyAxios as jest.MockedFunction<
  typeof spotifyAxios
>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('AlbumsApi', () => {
  describe('getAlbum', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(albumFixture);
    });

    it('should get an album (without options)', async () => {
      const http = new Http('token');
      const albums = new AlbumsApi(http);
      const response = await albums.getAlbum('foo');

      expect(response).toEqual(albumFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/albums/foo',
        'GET',
        'token',
        undefined,
      );
    });

    it('should get an album (with options)', async () => {
      const http = new Http('token');
      const albums = new AlbumsApi(http);
      const response = await albums.getAlbum('foo', { market: 'bar' });

      expect(response).toEqual(albumFixture);
      expect(spotifyAxiosMock).toBeCalledWith('/albums/foo', 'GET', 'token', {
        params: {
          market: 'bar',
        },
      });
    });
  });

  describe('getAlbums', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getAlbumsFixture);
    });

    it('should get several albums (without options)', async () => {
      const http = new Http('token');
      const albums = new AlbumsApi(http);
      const response = await albums.getAlbums(['foo', 'bar']);

      expect(response).toEqual(getAlbumsFixture.albums);
      expect(spotifyAxiosMock).toBeCalledWith('/albums', 'GET', 'token', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });

    it('should get several albums (with options)', async () => {
      const http = new Http('token');
      const albums = new AlbumsApi(http);
      const response = await albums.getAlbums(['foo', 'bar'], {
        market: 'baz',
      });

      expect(response).toEqual(getAlbumsFixture.albums);
      expect(spotifyAxiosMock).toBeCalledWith('/albums', 'GET', 'token', {
        params: {
          ids: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });

  describe('getAlbumTracks', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getAlbumTracksFixture);
    });

    it("should get an album's tracks (without options)", async () => {
      const http = new Http('token');
      const albums = new AlbumsApi(http);
      const response = await albums.getAlbumTracks('foo');

      expect(response).toEqual(getAlbumTracksFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/albums/foo/tracks',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get an album's tracks (with options)", async () => {
      const http = new Http('token');
      const albums = new AlbumsApi(http);
      const response = await albums.getAlbumTracks('foo', { market: 'bar' });

      expect(response).toEqual(getAlbumTracksFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/albums/foo/tracks',
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
});
