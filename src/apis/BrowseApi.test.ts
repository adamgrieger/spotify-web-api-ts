import { type MockedClass } from 'vitest';

import {
  categoryFixture,
  getAvailableGenreSeedsFixture,
  getCategoriesFixture,
  getCategoryPlaylistsFixture,
  getFeaturedPlaylistsFixture,
  getNewReleasesFixture,
  getRecommendationsFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';

import { BrowseApi } from './BrowseApi';

vi.mock('../helpers/Http');

const HttpMock = Http as MockedClass<typeof Http>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function setup() {
  const httpMock = new HttpMock('token');
  const browse = new BrowseApi(httpMock);

  return { httpMock, browse };
}

describe('BrowseApi', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getAvailableGenreSeeds', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getAvailableGenreSeedsFixture);
    });

    it('should get available genre seeds', async () => {
      const { httpMock, browse } = setup();

      const response = await browse.getAvailableGenreSeeds();

      expect(response).toEqual(getAvailableGenreSeedsFixture.genres);
      expect(httpMock.get).toHaveBeenCalledWith(
        '/recommendations/available-genre-seeds',
      );
    });
  });

  describe('getCategories', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getCategoriesFixture);
    });

    it('should get a list of categories (without options)', async () => {
      const { httpMock, browse } = setup();

      const response = await browse.getCategories();

      expect(response).toEqual(getCategoriesFixture.categories);
      expect(httpMock.get).toHaveBeenCalledWith(
        '/browse/categories',
        undefined,
      );
    });

    it('should get a list of categories (with options)', async () => {
      const { httpMock, browse } = setup();

      const response = await browse.getCategories({ country: 'foo' });

      expect(response).toEqual(getCategoriesFixture.categories);
      expect(httpMock.get).toHaveBeenCalledWith('/browse/categories', {
        params: {
          country: 'foo',
        },
      });
    });
  });

  describe('getCategory', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(categoryFixture);
    });

    it('should get a category (without options)', async () => {
      const { httpMock, browse } = setup();

      const response = await browse.getCategory('foo');

      expect(response).toEqual(categoryFixture);
      expect(httpMock.get).toHaveBeenCalledWith(
        '/browse/categories/foo',
        undefined,
      );
    });

    it('should get a category (with options)', async () => {
      const { httpMock, browse } = setup();

      const response = await browse.getCategory('foo', { country: 'bar' });

      expect(response).toEqual(categoryFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/browse/categories/foo', {
        params: {
          country: 'bar',
        },
      });
    });
  });

  describe('getCategoryPlaylists', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getCategoryPlaylistsFixture);
    });

    it("should get a category's playlists (without options)", async () => {
      const { httpMock, browse } = setup();

      const response = await browse.getCategoryPlaylists('foo');

      expect(response).toEqual(getCategoryPlaylistsFixture.playlists);
      expect(httpMock.get).toHaveBeenCalledWith(
        '/browse/categories/foo/playlists',
        undefined,
      );
    });

    it("should get a category's playlists (with options)", async () => {
      const { httpMock, browse } = setup();

      const response = await browse.getCategoryPlaylists('foo', {
        country: 'bar',
      });

      expect(response).toEqual(getCategoryPlaylistsFixture.playlists);
      expect(httpMock.get).toHaveBeenCalledWith(
        '/browse/categories/foo/playlists',
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
      HttpMock.prototype.get.mockResolvedValue(getFeaturedPlaylistsFixture);
    });

    it('should get a list of featured playlists (without options)', async () => {
      const { httpMock, browse } = setup();

      const response = await browse.getFeaturedPlaylists();

      expect(response).toEqual(getFeaturedPlaylistsFixture);
      expect(httpMock.get).toHaveBeenCalledWith(
        '/browse/featured-playlists',
        undefined,
      );
    });

    it('should get a list of featured playlists (with options)', async () => {
      const { httpMock, browse } = setup();

      const response = await browse.getFeaturedPlaylists({ country: 'foo' });

      expect(response).toEqual(getFeaturedPlaylistsFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/browse/featured-playlists', {
        params: {
          country: 'foo',
        },
      });
    });
  });

  describe('getNewReleases', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getNewReleasesFixture);
    });

    it('should get a list of new releases (without options)', async () => {
      const { httpMock, browse } = setup();

      const response = await browse.getNewReleases();

      expect(response).toEqual(getNewReleasesFixture.albums);
      expect(httpMock.get).toHaveBeenCalledWith(
        '/browse/new-releases',
        undefined,
      );
    });

    it('should get a list of new releases (with options)', async () => {
      const { httpMock, browse } = setup();

      const response = await browse.getNewReleases({ country: 'foo' });

      expect(response).toEqual(getNewReleasesFixture.albums);
      expect(httpMock.get).toHaveBeenCalledWith('/browse/new-releases', {
        params: {
          country: 'foo',
        },
      });
    });
  });

  describe('getRecommendations', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getRecommendationsFixture);
    });

    it('should get recommendations based on seeds (without options)', async () => {
      const { httpMock, browse } = setup();

      const response = await browse.getRecommendations({
        seed_artists: ['foo', 'bar'],
      });

      expect(response).toEqual(getRecommendationsFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/recommendations', {
        params: {
          seed_artists: ['foo', 'bar'],
        },
      });
    });

    it('should get recommendations based on seeds (with options)', async () => {
      const { httpMock, browse } = setup();

      const response = await browse.getRecommendations(
        {
          seed_artists: ['foo', 'bar'],
        },
        {
          market: 'baz',
        },
      );

      expect(response).toEqual(getRecommendationsFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/recommendations', {
        params: {
          seed_artists: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });
});
