import { type SpyInstance } from 'vitest';

import { episodeFixture, getEpisodesFixture } from '../fixtures';
import { EpisodesService } from '../openapi/services/EpisodesService';

import { EpisodesApi } from './EpisodesApi';

const episodes = new EpisodesApi();

describe('EpisodesApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('getEpisode', () => {
    let getEpisodeSpy: SpyInstance;
    beforeEach(() => {
      getEpisodeSpy = vi
        .spyOn(EpisodesService, 'getAnEpisode')
        .mockResolvedValue(episodeFixture);
    });

    it('should get an episode (without options)', async () => {
      const response = await episodes.getEpisode('foo');

      expect(response).toEqual(episodeFixture);
      expect(getEpisodeSpy).toHaveBeenCalledWith('foo', undefined);
    });

    it('should get an episode (with options)', async () => {
      const response = await episodes.getEpisode('foo', { market: 'bar' });

      expect(response).toEqual(episodeFixture);
      expect(getEpisodeSpy).toHaveBeenCalledWith('foo', 'bar');
    });
  });

  describe('getEpisodes', () => {
    let getEpisodesSpy: SpyInstance;
    beforeEach(() => {
      getEpisodesSpy = vi
        .spyOn(EpisodesService, 'getMultipleEpisodes')
        .mockResolvedValue(getEpisodesFixture);
    });

    it('should get several episodes (without options)', async () => {
      const response = await episodes.getEpisodes(['foo', 'bar']);

      expect(response).toEqual(getEpisodesFixture.episodes);
      expect(getEpisodesSpy).toHaveBeenCalledWith('foo,bar', undefined);
    });

    it('should get several episodes (with options)', async () => {
      const response = await episodes.getEpisodes(['foo', 'bar'], {
        market: 'baz',
      });

      expect(response).toEqual(getEpisodesFixture.episodes);
      expect(getEpisodesSpy).toHaveBeenCalledWith('foo,bar', 'baz');
    });
  });
});
