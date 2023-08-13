import {
  artistFixture,
  getArtistAlbumsFixture,
  getArtistTopTracksFixture,
  getArtistsFixture,
  getRelatedArtistsFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';

import { ArtistsApi } from './ArtistsApi';

jest.mock('../helpers/Http');

const HttpMock = Http as jest.MockedClass<typeof Http>;

function setup() {
  const httpMock = new HttpMock('token');
  const artists = new ArtistsApi(httpMock);

  return { httpMock, artists };
}

beforeEach(() => {
  jest.resetAllMocks();
});

describe('ArtistsApi', () => {
  describe('getArtist', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(artistFixture);
    });

    it('should get an artist', async () => {
      const { httpMock, artists } = setup();

      const response = await artists.getArtist('foo');

      expect(response).toEqual(artistFixture);
      expect(httpMock.get).toBeCalledWith('/artists/foo');
    });
  });

  describe('getArtistAlbums', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getArtistAlbumsFixture);
    });

    it("should get an artist's albums (without options)", async () => {
      const { httpMock, artists } = setup();

      const response = await artists.getArtistAlbums('foo');

      expect(response).toEqual(getArtistAlbumsFixture);
      expect(httpMock.get).toBeCalledWith('/artists/foo/albums', undefined);
    });

    it("should get an artist's albums (with options)", async () => {
      const { httpMock, artists } = setup();

      const response = await artists.getArtistAlbums('foo', { country: 'bar' });

      expect(response).toEqual(getArtistAlbumsFixture);
      expect(httpMock.get).toBeCalledWith('/artists/foo/albums', {
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

    it('should get several artists', async () => {
      const { httpMock, artists } = setup();

      const response = await artists.getArtists(['foo', 'bar']);

      expect(response).toEqual(getArtistsFixture.artists);
      expect(httpMock.get).toBeCalledWith('/artists', {
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

    it("should get an artist's top tracks", async () => {
      const { httpMock, artists } = setup();

      const response = await artists.getArtistTopTracks('foo', 'bar');

      expect(response).toEqual(getArtistTopTracksFixture.tracks);
      expect(httpMock.get).toBeCalledWith('/artists/foo/top-tracks', {
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

    it("should get an artist's related artists", async () => {
      const { httpMock, artists } = setup();

      const response = await artists.getRelatedArtists('foo');

      expect(response).toEqual(getRelatedArtistsFixture.artists);
      expect(httpMock.get).toBeCalledWith('/artists/foo/related-artists');
    });
  });
});
