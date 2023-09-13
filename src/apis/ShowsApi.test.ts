import { type SpyInstance } from 'vitest';

import {
  getShowEpisodesFixture,
  getShowsFixture,
  showFixture,
} from '../fixtures';
import { ShowsService } from '../openapi/services/ShowsService';

import { ShowsApi } from './ShowsApi';

const shows = new ShowsApi();

describe('ShowsApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('getShow', () => {
    let getShowSpy: SpyInstance;
    beforeEach(() => {
      getShowSpy = vi
        .spyOn(ShowsService, 'getAShow')
        .mockResolvedValue(showFixture);
    });

    it('should get a show (without options)', async () => {
      const response = await shows.getShow('foo');

      expect(response).toEqual(showFixture);
      expect(getShowSpy).toHaveBeenCalledWith('foo', undefined);
    });

    it('should get a show (with options)', async () => {
      const response = await shows.getShow('foo', { market: 'bar' });

      expect(response).toEqual(showFixture);
      expect(getShowSpy).toHaveBeenCalledWith('foo', 'bar');
    });
  });

  describe('getShowEpisodes', () => {
    let getShowEpisodesSpy: SpyInstance;
    beforeEach(() => {
      getShowEpisodesSpy = vi
        .spyOn(ShowsService, 'getAShowsEpisodes')
        .mockResolvedValue(getShowEpisodesFixture);
    });

    it("should get a show's episodes (without options)", async () => {
      const response = await shows.getShowEpisodes('foo');

      expect(response).toEqual(getShowEpisodesFixture);
      expect(getShowEpisodesSpy).toHaveBeenCalledWith(
        'foo',
        undefined,
        undefined,
        undefined,
      );
    });

    it("should get a show's episodes (with options)", async () => {
      const response = await shows.getShowEpisodes('foo', {
        limit: 1,
        offset: 2,
        market: 'bar',
      });

      expect(response).toEqual(getShowEpisodesFixture);
      expect(getShowEpisodesSpy).toHaveBeenCalledWith('foo', 'bar', 1, 2);
    });
  });

  describe('getShows', () => {
    let getShowsSpy: SpyInstance;
    beforeEach(() => {
      getShowsSpy = vi
        .spyOn(ShowsService, 'getMultipleShows')
        .mockResolvedValue(getShowsFixture);
    });

    it('should get several shows (without options)', async () => {
      const response = await shows.getShows(['foo', 'bar']);

      expect(response).toEqual(getShowsFixture.shows);
      expect(getShowsSpy).toHaveBeenCalledWith('foo,bar', undefined);
    });

    it('should get several shows (with options)', async () => {
      const response = await shows.getShows(['foo', 'bar'], { market: 'baz' });

      expect(response).toEqual(getShowsFixture.shows);
      expect(getShowsSpy).toHaveBeenCalledWith('foo,bar', 'baz');
    });
  });
});
