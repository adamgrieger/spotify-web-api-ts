import { type MockedClass } from 'vitest';

import { episodeFixture, getEpisodesFixture } from '../fixtures';
import { Http } from '../helpers/Http';

import { EpisodesApi } from './EpisodesApi';

vi.mock('../helpers/Http');

const HttpMock = Http as MockedClass<typeof Http>;

function setup() {
  const httpMock = new HttpMock('token');
  const episodes = new EpisodesApi(httpMock);

  return { httpMock, episodes };
}

beforeEach(() => {
  vi.resetAllMocks();
});

describe('EpisodesApi', () => {
  describe('getEpisode', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(episodeFixture);
    });

    it('should get an episode (without options)', async () => {
      const { httpMock, episodes } = setup();

      const response = await episodes.getEpisode('foo');

      expect(response).toEqual(episodeFixture);
      expect(httpMock.get).toBeCalledWith('/episodes/foo', undefined);
    });

    it('should get an episode (with options)', async () => {
      const { httpMock, episodes } = setup();

      const response = await episodes.getEpisode('foo', { market: 'bar' });

      expect(response).toEqual(episodeFixture);
      expect(httpMock.get).toBeCalledWith('/episodes/foo', {
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

    it('should get several episodes (without options)', async () => {
      const { httpMock, episodes } = setup();

      const response = await episodes.getEpisodes(['foo', 'bar']);

      expect(response).toEqual(getEpisodesFixture.episodes);
      expect(httpMock.get).toBeCalledWith('/episodes', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });

    it('should get several episodes (with options)', async () => {
      const { httpMock, episodes } = setup();

      const response = await episodes.getEpisodes(['foo', 'bar'], {
        market: 'baz',
      });

      expect(response).toEqual(getEpisodesFixture.episodes);
      expect(httpMock.get).toBeCalledWith('/episodes', {
        params: {
          ids: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });
});
