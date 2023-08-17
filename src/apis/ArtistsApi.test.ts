import { type MockedClass } from 'vitest';

import {
  artistFixture,
  getArtistAlbumsFixture,
  getArtistTopTracksFixture,
  getArtistsFixture,
  getRelatedArtistsFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';

import { ArtistsApi } from './ArtistsApi';

vi.mock('../helpers/Http');

const HttpMock = Http as MockedClass<typeof Http>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function setup() {
  const httpMock = new HttpMock('token');
  const artists = new ArtistsApi();

  return { httpMock, artists };
}

describe('ArtistsApi', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getArtist', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(artistFixture);
    });

    it.todo('should get an artist', async () => {
      const { httpMock, artists } = setup();

      const response = await artists.getArtist('foo');

      expect(response).toEqual(artistFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/artists/foo');
    });
  });

  describe('getArtistAlbums', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getArtistAlbumsFixture);
    });

    it.todo("should get an artist's albums (without options)", async () => {
      const { httpMock, artists } = setup();

      const response = await artists.getArtistAlbums('foo');

      expect(response).toEqual(getArtistAlbumsFixture);
      expect(httpMock.get).toHaveBeenCalledWith(
        '/artists/foo/albums',
        undefined,
      );
    });

    it.todo("should get an artist's albums (with options)", async () => {
      const { httpMock, artists } = setup();

      const response = await artists.getArtistAlbums('foo', { market: 'bar' });

      expect(response).toEqual(getArtistAlbumsFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/artists/foo/albums', {
        params: {
          country: 'bar',
        },
      });
    });
  });

  describe('getArtists', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getArtistsFixture);
    });

    it.todo('should get several artists', async () => {
      const { httpMock, artists } = setup();

      const response = await artists.getArtists(['foo', 'bar']);

      expect(response).toEqual(getArtistsFixture.artists);
      expect(httpMock.get).toHaveBeenCalledWith('/artists', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('getArtistTopTracks', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getArtistTopTracksFixture);
    });

    it.todo("should get an artist's top tracks", async () => {
      const { httpMock, artists } = setup();

      const response = await artists.getArtistTopTracks('foo', 'bar');

      expect(response).toEqual(getArtistTopTracksFixture.tracks);
      expect(httpMock.get).toHaveBeenCalledWith('/artists/foo/top-tracks', {
        params: {
          country: 'bar',
        },
      });
    });
  });

  describe('getRelatedArtists', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getRelatedArtistsFixture);
    });

    it.todo("should get an artist's related artists", async () => {
      const { httpMock, artists } = setup();

      const response = await artists.getRelatedArtists('foo');

      expect(response).toEqual(getRelatedArtistsFixture.artists);
      expect(httpMock.get).toHaveBeenCalledWith('/artists/foo/related-artists');
    });
  });
});
