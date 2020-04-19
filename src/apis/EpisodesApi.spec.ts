import { episodeFixture, getEpisodesFixture } from '../fixtures';
import { Http } from '../helpers/Http';
import { spotifyAxios } from '../helpers/spotifyAxios';
import { EpisodesApi } from './EpisodesApi';

jest.mock('../helpers/spotifyAxios');

const spotifyAxiosMock = spotifyAxios as jest.MockedFunction<
  typeof spotifyAxios
>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('EpisodesApi', () => {
  describe('getEpisode', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(episodeFixture);
    });

    it('should get an episode (without options)', async () => {
      const http = new Http('token');
      const episodes = new EpisodesApi(http);
      const response = await episodes.getEpisode('foo');

      expect(response).toEqual(episodeFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/episodes/foo',
        'GET',
        'token',
        undefined,
      );
    });

    it('should get an episode (with options)', async () => {
      const http = new Http('token');
      const episodes = new EpisodesApi(http);
      const response = await episodes.getEpisode('foo', { market: 'bar' });

      expect(response).toEqual(episodeFixture);
      expect(spotifyAxiosMock).toBeCalledWith('/episodes/foo', 'GET', 'token', {
        params: {
          market: 'bar',
        },
      });
    });
  });

  describe('getEpisodes', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getEpisodesFixture);
    });

    it('should get several episodes (without options)', async () => {
      const http = new Http('token');
      const episodes = new EpisodesApi(http);
      const response = await episodes.getEpisodes(['foo', 'bar']);

      expect(response).toEqual(getEpisodesFixture.episodes);
      expect(spotifyAxiosMock).toBeCalledWith('/episodes', 'GET', 'token', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });

    it('should get several episodes (with options)', async () => {
      const http = new Http('token');
      const episodes = new EpisodesApi(http);
      const response = await episodes.getEpisodes(['foo', 'bar'], {
        market: 'baz',
      });

      expect(response).toEqual(getEpisodesFixture.episodes);
      expect(spotifyAxiosMock).toBeCalledWith('/episodes', 'GET', 'token', {
        params: {
          ids: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });
});
