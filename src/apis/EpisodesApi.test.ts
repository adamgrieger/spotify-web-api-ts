import { type MockedClass } from 'vitest';

import { episodeFixture, getEpisodesFixture } from '../fixtures';
import { Http } from '../helpers/Http';

import { EpisodesApi } from './EpisodesApi';

vi.mock('../helpers/Http');

const HttpMock = Http as MockedClass<typeof Http>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function setup() {
  const httpMock = new HttpMock('token');
  const episodes = new EpisodesApi();

  return { httpMock, episodes };
}

describe('EpisodesApi', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getEpisode', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(episodeFixture);
    });

    it.todo('should get an episode (without options)', async () => {
      const { httpMock, episodes } = setup();

      const response = await episodes.getEpisode('foo');

      expect(response).toEqual(episodeFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/episodes/foo', undefined);
    });

    it.todo('should get an episode (with options)', async () => {
      const { httpMock, episodes } = setup();

      const response = await episodes.getEpisode('foo', { market: 'bar' });

      expect(response).toEqual(episodeFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/episodes/foo', {
        params: {
          market: 'bar',
        },
      });
    });
  });

  describe('getEpisodes', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getEpisodesFixture);
    });

    it.todo('should get several episodes (without options)', async () => {
      const { httpMock, episodes } = setup();

      const response = await episodes.getEpisodes(['foo', 'bar']);

      expect(response).toEqual(getEpisodesFixture.episodes);
      expect(httpMock.get).toHaveBeenCalledWith('/episodes', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });

    it.todo('should get several episodes (with options)', async () => {
      const { httpMock, episodes } = setup();

      const response = await episodes.getEpisodes(['foo', 'bar'], {
        market: 'baz',
      });

      expect(response).toEqual(getEpisodesFixture.episodes);
      expect(httpMock.get).toHaveBeenCalledWith('/episodes', {
        params: {
          ids: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });
});
