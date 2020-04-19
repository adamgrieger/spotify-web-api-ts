import { Http } from '../helpers/Http';
import { BrowseApi } from './BrowseApi';
import { spotifyAxios } from '../helpers/spotifyAxios';
import {
  getAvailableGenreSeedsFixture,
  getCategoriesFixture,
  categoryFixture,
  getCategoryPlaylistsFixture,
  getFeaturedPlaylistsFixture,
  getNewReleasesFixture,
  getRecommendationsFixture,
} from '../fixtures';

jest.mock('../helpers/spotifyAxios');

const spotifyAxiosMock = spotifyAxios as jest.MockedFunction<
  typeof spotifyAxios
>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('BrowseApi', () => {
  describe('getAvailableGenreSeeds', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getAvailableGenreSeedsFixture);
    });

    it('should get available genre seeds', async () => {
      const http = new Http('token');
      const browse = new BrowseApi(http);
      const response = await browse.getAvailableGenreSeeds();

      expect(response).toEqual(getAvailableGenreSeedsFixture.genres);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/recommendations/available-genre-seeds',
        'GET',
        'token',
        undefined,
      );
    });
  });

  describe('getCategories', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getCategoriesFixture);
    });

    it('should get a list of categories (without options)', async () => {
      const http = new Http('token');
      const browse = new BrowseApi(http);
      const response = await browse.getCategories();

      expect(response).toEqual(getCategoriesFixture.categories);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/browse/categories',
        'GET',
        'token',
        undefined,
      );
    });

    it('should get a list of categories (with options)', async () => {
      const http = new Http('token');
      const browse = new BrowseApi(http);
      const response = await browse.getCategories({ country: 'foo' });

      expect(response).toEqual(getCategoriesFixture.categories);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/browse/categories',
        'GET',
        'token',
        {
          params: {
            country: 'foo',
          },
        },
      );
    });
  });

  describe('getCategory', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(categoryFixture);
    });

    it('should get a category (without options)', async () => {
      const http = new Http('token');
      const browse = new BrowseApi(http);
      const response = await browse.getCategory('foo');

      expect(response).toEqual(categoryFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/browse/categories/foo',
        'GET',
        'token',
        undefined,
      );
    });

    it('should get a category (with options)', async () => {
      const http = new Http('token');
      const browse = new BrowseApi(http);
      const response = await browse.getCategory('foo', { country: 'bar' });

      expect(response).toEqual(categoryFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/browse/categories/foo',
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

  describe('getCategoryPlaylists', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getCategoryPlaylistsFixture);
    });

    it("should get a category's playlists (without options)", async () => {
      const http = new Http('token');
      const browse = new BrowseApi(http);
      const response = await browse.getCategoryPlaylists('foo');

      expect(response).toEqual(getCategoryPlaylistsFixture.playlists);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/browse/categories/foo/playlists',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get a category's playlists (with options)", async () => {
      const http = new Http('token');
      const browse = new BrowseApi(http);
      const response = await browse.getCategoryPlaylists('foo', {
        country: 'bar',
      });

      expect(response).toEqual(getCategoryPlaylistsFixture.playlists);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/browse/categories/foo/playlists',
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

  describe('getFeaturedPlaylists', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getFeaturedPlaylistsFixture);
    });

    it('should get a list of featured playlists (without options)', async () => {
      const http = new Http('token');
      const browse = new BrowseApi(http);
      const response = await browse.getFeaturedPlaylists();

      expect(response).toEqual(getFeaturedPlaylistsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/browse/featured-playlists',
        'GET',
        'token',
        undefined,
      );
    });

    it('should get a list of featured playlists (with options)', async () => {
      const http = new Http('token');
      const browse = new BrowseApi(http);
      const response = await browse.getFeaturedPlaylists({ country: 'foo' });

      expect(response).toEqual(getFeaturedPlaylistsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/browse/featured-playlists',
        'GET',
        'token',
        {
          params: {
            country: 'foo',
          },
        },
      );
    });
  });

  describe('getNewReleases', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getNewReleasesFixture);
    });

    it('should get a list of new releases (without options)', async () => {
      const http = new Http('token');
      const browse = new BrowseApi(http);
      const response = await browse.getNewReleases();

      expect(response).toEqual(getNewReleasesFixture.albums);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/browse/new-releases',
        'GET',
        'token',
        undefined,
      );
    });

    it('should get a list of new releases (with options)', async () => {
      const http = new Http('token');
      const browse = new BrowseApi(http);
      const response = await browse.getNewReleases({ country: 'foo' });

      expect(response).toEqual(getNewReleasesFixture.albums);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/browse/new-releases',
        'GET',
        'token',
        {
          params: {
            country: 'foo',
          },
        },
      );
    });
  });

  describe('getRecommendations', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getRecommendationsFixture);
    });

    it('should get recommendations based on seeds (without options)', async () => {
      const http = new Http('token');
      const browse = new BrowseApi(http);
      const response = await browse.getRecommendations({
        seed_artists: ['foo', 'bar'],
      });

      expect(response).toEqual(getRecommendationsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/recommendations',
        'GET',
        'token',
        {
          params: {
            seed_artists: ['foo', 'bar'],
          },
        },
      );
    });

    it('should get recommendations based on seeds (with options)', async () => {
      const http = new Http('token');
      const browse = new BrowseApi(http);
      const response = await browse.getRecommendations(
        {
          seed_artists: ['foo', 'bar'],
        },
        {
          market: 'baz',
        },
      );

      expect(response).toEqual(getRecommendationsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/recommendations',
        'GET',
        'token',
        {
          params: {
            seed_artists: ['foo', 'bar'],
            market: 'baz',
          },
        },
      );
    });
  });
});
