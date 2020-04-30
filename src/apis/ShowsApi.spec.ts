import {
  getShowEpisodesFixture,
  getShowsFixture,
  showFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';
import { spotifyAxios } from '../helpers/spotifyAxios';
import { ShowsApi } from './ShowsApi';

jest.mock('../helpers/spotifyAxios');

const spotifyAxiosMock = spotifyAxios as jest.MockedFunction<
  typeof spotifyAxios
>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('ShowsApi', () => {
  describe('getShow', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(showFixture);
    });

    it('should get a show (without options)', async () => {
      const http = new Http('token');
      const shows = new ShowsApi(http);
      const response = await shows.getShow('foo');

      expect(response).toEqual(showFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/shows/foo',
        'GET',
        'token',
        undefined,
      );
    });

    it('should get a show (with options)', async () => {
      const http = new Http('token');
      const shows = new ShowsApi(http);
      const response = await shows.getShow('foo', { market: 'bar' });

      expect(response).toEqual(showFixture);
      expect(spotifyAxiosMock).toBeCalledWith('/shows/foo', 'GET', 'token', {
        params: {
          market: 'bar',
        },
      });
    });
  });

  describe('getShowEpisodes', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getShowEpisodesFixture);
    });

    it("should get a show's episodes (without options)", async () => {
      const http = new Http('token');
      const shows = new ShowsApi(http);
      const response = await shows.getShowEpisodes('foo');

      expect(response).toEqual(getShowEpisodesFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/shows/foo/episodes',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get a show's episodes (with options)", async () => {
      const http = new Http('token');
      const shows = new ShowsApi(http);
      const response = await shows.getShowEpisodes('foo', { limit: 2 });

      expect(response).toEqual(getShowEpisodesFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/shows/foo/episodes',
        'GET',
        'token',
        {
          params: {
            limit: 2,
          },
        },
      );
    });
  });

  describe('getShows', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getShowsFixture);
    });

    it('should get several shows (without options)', async () => {
      const http = new Http('token');
      const shows = new ShowsApi(http);
      const response = await shows.getShows(['foo', 'bar']);

      expect(response).toEqual(getShowsFixture.shows);
      expect(spotifyAxiosMock).toBeCalledWith('/shows', 'GET', 'token', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });

    it('should get several shows (with options)', async () => {
      const http = new Http('token');
      const shows = new ShowsApi(http);
      const response = await shows.getShows(['foo', 'bar'], { market: 'baz' });

      expect(response).toEqual(getShowsFixture.shows);
      expect(spotifyAxiosMock).toBeCalledWith('/shows', 'GET', 'token', {
        params: {
          ids: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });
});
