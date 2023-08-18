import { type SpyInstance } from 'vitest';

import { GenresService } from '../openapi/services/GenresService';
import { CategoriesService } from '../openapi/services/CategoriesService';
import { AlbumsService } from '../openapi/services/AlbumsService';
import { PlaylistsService } from '../openapi/services/PlaylistsService';
import { TracksService } from '../openapi/services/TracksService';
import {
  categoryFixture,
  getAvailableGenreSeedsFixture,
  getCategoriesFixture,
  getCategoryPlaylistsFixture,
  getFeaturedPlaylistsFixture,
  getNewReleasesFixture,
  getRecommendationsFixture,
} from '../fixtures';

import { BrowseApi } from './BrowseApi';

const browse = new BrowseApi();

describe('BrowseApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('getAvailableGenreSeeds', () => {
    it('should get available genre seeds', async () => {
      const getAvailableGenreSeedsSpy = vi
        .spyOn(GenresService, 'getRecommendationGenres')
        .mockResolvedValue(getAvailableGenreSeedsFixture);

      const response = await browse.getAvailableGenreSeeds();

      expect(response).toEqual(getAvailableGenreSeedsFixture.genres);
      expect(getAvailableGenreSeedsSpy).toHaveBeenCalledWith();
    });
  });

  describe('getCategories', () => {
    let getCategoriesSpy: SpyInstance;
    beforeEach(() => {
      getCategoriesSpy = vi
        .spyOn(CategoriesService, 'getCategories')
        .mockResolvedValue(getCategoriesFixture);
    });

    it('should get a list of categories (without options)', async () => {
      const response = await browse.getCategories();

      expect(response).toEqual(getCategoriesFixture.categories);
      expect(getCategoriesSpy).toHaveBeenCalledWith(
        undefined,
        undefined,
        undefined,
        undefined,
      );
    });

    it('should get a list of categories (with options)', async () => {
      const response = await browse.getCategories({
        country: 'foo',
        locale: 'bar',
        limit: 1,
        offset: 2,
      });

      expect(response).toEqual(getCategoriesFixture.categories);
      expect(getCategoriesSpy).toHaveBeenCalledWith('foo', 'bar', 1, 2);
    });
  });

  describe('getCategory', () => {
    let getCategorySpy: SpyInstance;
    beforeEach(() => {
      getCategorySpy = vi
        .spyOn(CategoriesService, 'getACategory')
        .mockResolvedValue(categoryFixture);
    });

    it('should get a category (without options)', async () => {
      const response = await browse.getCategory('foo');

      expect(response).toEqual(categoryFixture);
      expect(getCategorySpy).toHaveBeenCalledWith('foo', undefined, undefined);
    });

    it('should get a category (with options)', async () => {
      const response = await browse.getCategory('foo', {
        country: 'bar',
        locale: 'baz',
      });

      expect(response).toEqual(categoryFixture);
      expect(getCategorySpy).toHaveBeenCalledWith('foo', 'bar', 'baz');
    });
  });

  describe('getCategoryPlaylists', () => {
    let getCategoryPlaylistsSpy: SpyInstance;
    beforeEach(() => {
      getCategoryPlaylistsSpy = vi
        .spyOn(CategoriesService, 'getACategoriesPlaylists')
        .mockResolvedValue(getCategoryPlaylistsFixture);
    });

    it("should get a category's playlists (without options)", async () => {
      const response = await browse.getCategoryPlaylists('foo');

      expect(response).toEqual(getCategoryPlaylistsFixture);
      expect(getCategoryPlaylistsSpy).toHaveBeenCalledWith(
        'foo',
        undefined,
        undefined,
        undefined,
      );
    });

    it("should get a category's playlists (with options)", async () => {
      const response = await browse.getCategoryPlaylists('foo', {
        country: 'bar',
        limit: 1,
        offset: 2,
      });

      expect(response).toEqual(getCategoryPlaylistsFixture);
      expect(getCategoryPlaylistsSpy).toHaveBeenCalledWith('foo', 'bar', 1, 2);
    });
  });

  describe('getFeaturedPlaylists', () => {
    let getFeaturedPlaylistsSpy: SpyInstance;
    beforeEach(() => {
      getFeaturedPlaylistsSpy = vi
        .spyOn(PlaylistsService, 'getFeaturedPlaylists')
        .mockResolvedValue(getFeaturedPlaylistsFixture);
    });

    it('should get a list of featured playlists (without options)', async () => {
      const response = await browse.getFeaturedPlaylists();

      expect(response).toEqual(getFeaturedPlaylistsFixture);
      expect(getFeaturedPlaylistsSpy).toHaveBeenCalledWith(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      );
    });

    it('should get a list of featured playlists (with options)', async () => {
      const response = await browse.getFeaturedPlaylists({
        country: 'foo',
        locale: 'bar',
        timestamp: 'baz',
        limit: 1,
        offset: 2,
      });

      expect(response).toEqual(getFeaturedPlaylistsFixture);
      expect(getFeaturedPlaylistsSpy).toHaveBeenCalledWith(
        'foo',
        'bar',
        'baz',
        1,
        2,
      );
    });
  });

  describe('getNewReleases', () => {
    let getNewReleasesSpy: SpyInstance;
    beforeEach(() => {
      getNewReleasesSpy = vi
        .spyOn(AlbumsService, 'getNewReleases')
        .mockResolvedValue(getNewReleasesFixture);
    });

    it('should get a list of new releases (without options)', async () => {
      const response = await browse.getNewReleases();

      expect(response).toEqual(getNewReleasesFixture.albums);
      expect(getNewReleasesSpy).toHaveBeenCalledWith(
        undefined,
        undefined,
        undefined,
      );
    });

    it('should get a list of new releases (with options)', async () => {
      const response = await browse.getNewReleases({
        country: 'foo',
        limit: 1,
        offset: 2,
      });

      expect(response).toEqual(getNewReleasesFixture.albums);
      expect(getNewReleasesSpy).toHaveBeenCalledWith('foo', 1, 2);
    });
  });

  describe('getRecommendations', () => {
    let getRecommendationsSpy: SpyInstance;
    beforeEach(() => {
      getRecommendationsSpy = vi
        .spyOn(TracksService, 'getRecommendations')
        .mockResolvedValue(getRecommendationsFixture);
    });

    it('should get recommendations based on seeds (without options)', async () => {
      const response = await browse.getRecommendations({
        seed_artists: ['foo', 'bar'],
      });

      expect(response).toEqual(getRecommendationsFixture);
      expect(getRecommendationsSpy.mock.lastCall?.[0]).toBe('foo,bar');
    });

    it('should get recommendations based on seeds (with options)', async () => {
      const response = await browse.getRecommendations(
        {
          seed_genres: ['foo', 'bar'],
        },
        {
          market: 'baz',
        },
      );

      expect(response).toEqual(getRecommendationsFixture);
      expect(getRecommendationsSpy.mock.lastCall?.[1]).toBe('foo,bar');
      expect(getRecommendationsSpy.mock.lastCall?.[4]).toBe('baz');
    });
  });
});
