import {
  artistFixture,
  getArtistAlbumsFixture,
  getArtistsFixture,
  getArtistTopTracksFixture,
  getRelatedArtistsFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';
import { spotifyAxios } from '../helpers/spotifyAxios';
import { ArtistsApi } from './ArtistsApi';

jest.mock('../helpers/spotifyAxios');

const spotifyAxiosMock = spotifyAxios as jest.MockedFunction<
  typeof spotifyAxios
>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('ArtistsApi', () => {
  describe('getArtist', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(artistFixture);
    });

    it('should get an artist', async () => {
      const http = new Http('token');
      const artists = new ArtistsApi(http);
      const response = await artists.getArtist('foo');

      expect(response).toEqual(artistFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/artists/foo',
        'GET',
        'token',
        undefined,
      );
    });
  });

  describe('getArtistAlbums', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getArtistAlbumsFixture);
    });

    it("should get an artist's albums (without options)", async () => {
      const http = new Http('token');
      const artists = new ArtistsApi(http);
      const response = await artists.getArtistAlbums('foo');

      expect(response).toEqual(getArtistAlbumsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/artists/foo/albums',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get an artist's albums (with options)", async () => {
      const http = new Http('token');
      const artists = new ArtistsApi(http);
      const response = await artists.getArtistAlbums('foo', { country: 'bar' });

      expect(response).toEqual(getArtistAlbumsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/artists/foo/albums',
        'GET',
        'token',
        {
          params: {
            country: 'bar',
          },
        },
      );
    });
  });

  describe('getArtists', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getArtistsFixture);
    });

    it('should get several artists', async () => {
      const http = new Http('token');
      const artists = new ArtistsApi(http);
      const response = await artists.getArtists(['foo', 'bar']);

      expect(response).toEqual(getArtistsFixture.artists);
      expect(spotifyAxiosMock).toBeCalledWith('/artists', 'GET', 'token', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('getArtistTopTracks', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getArtistTopTracksFixture);
    });

    it("should get an artist's top tracks", async () => {
      const http = new Http('token');
      const artists = new ArtistsApi(http);
      const response = await artists.getArtistTopTracks('foo', 'bar');

      expect(response).toEqual(getArtistTopTracksFixture.tracks);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/artists/foo/top-tracks',
        'GET',
        'token',
        {
          params: {
            country: 'bar',
          },
        },
      );
    });
  });

  describe('getRelatedArtists', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getRelatedArtistsFixture);
    });

    it("should get an artist's related artists", async () => {
      const http = new Http('token');
      const artists = new ArtistsApi(http);
      const response = await artists.getRelatedArtists('foo');

      expect(response).toEqual(getRelatedArtistsFixture.artists);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/artists/foo/related-artists',
        'GET',
        'token',
        undefined,
      );
    });
  });
});
