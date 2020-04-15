import { Http } from '../helpers/Http';
import { BrowseApi } from './BrowseApi';

jest.mock('../helpers/Http');

const HttpMock = Http as jest.Mocked<typeof Http>;

describe('BrowseApi', () => {
  const http = new HttpMock('token');

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getAvailableGenreSeeds', () => {
    it('should get available genre seeds', () => {
      const browse = new BrowseApi(http);
      browse.getAvailableGenreSeeds();
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/recommendations/available-genre-seeds');
    });
  });

  describe('getCategories', () => {
    it('should get a list of categories (without options)', () => {
      const browse = new BrowseApi(http);
      browse.getCategories();
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/browse/categories', undefined);
    });

    it('should get a list of categories (with options)', () => {
      const browse = new BrowseApi(http);
      browse.getCategories({
        country: 'foo',
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/browse/categories', {
        params: {
          country: 'foo',
        },
      });
    });
  });

  describe('getCategory', () => {
    it('should get a category (without options)', () => {
      const browse = new BrowseApi(http);
      browse.getCategory('foo');
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/browse/categories/foo', undefined);
    });

    it('should get a category (with options)', () => {
      const browse = new BrowseApi(http);
      browse.getCategory('foo', {
        country: 'bar',
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/browse/categories/foo', {
        params: {
          country: 'bar',
        },
      });
    });
  });

  describe('getCategoryPlaylists', () => {
    it("should get a category's playlists (without options)", () => {
      const browse = new BrowseApi(http);
      browse.getCategoryPlaylists('foo');
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith(
        '/browse/categories/foo/playlists',
        undefined,
      );
    });

    it("should get a category's playlists (with options)", () => {
      const browse = new BrowseApi(http);
      browse.getCategoryPlaylists('foo', {
        country: 'bar',
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/browse/categories/foo/playlists', {
        params: {
          country: 'bar',
        },
      });
    });
  });

  describe('getFeaturedPlaylists', () => {
    it('should get a list of featured playlists (without options)', () => {
      const browse = new BrowseApi(http);
      browse.getFeaturedPlaylists();
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/browse/featured-playlists', undefined);
    });

    it('should get a list of featured playlists (with options)', () => {
      const browse = new BrowseApi(http);
      browse.getFeaturedPlaylists({
        country: 'foo',
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/browse/featured-playlists', {
        params: {
          country: 'foo',
        },
      });
    });
  });

  describe('getNewReleases', () => {
    it('should get a list of new releases (without options)', () => {
      const browse = new BrowseApi(http);
      browse.getNewReleases();
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/browse/new-releases', undefined);
    });

    it('should get a list of new releases (with options)', () => {
      const browse = new BrowseApi(http);
      browse.getNewReleases({
        country: 'foo',
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/browse/new-releases', {
        params: {
          country: 'foo',
        },
      });
    });
  });

  describe('getRecommendations', () => {
    it('should get recommendations based on seeds (without options)', () => {
      const browse = new BrowseApi(http);
      browse.getRecommendations({
        seed_artists: ['foo', 'bar'],
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/recommendations', {
        params: {
          seed_artists: ['foo', 'bar'],
        },
      });
    });

    it('should get recommendations based on seeds (with options)', () => {
      const browse = new BrowseApi(http);
      browse.getRecommendations(
        {
          seed_artists: ['foo', 'bar'],
        },
        {
          market: 'baz',
        },
      );
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/recommendations', {
        params: {
          seed_artists: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });
});
