import { type MockedClass } from 'vitest';
import {
  getShowEpisodesFixture,
  getShowsFixture,
  showFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';
import { ShowsApi } from './ShowsApi';

vi.mock('../helpers/Http');

const HttpMock = Http as MockedClass<typeof Http>;

function setup() {
  const httpMock = new HttpMock('token');
  const shows = new ShowsApi(httpMock);

  return { httpMock, shows };
}

beforeEach(() => {
  vi.resetAllMocks();
});

describe('ShowsApi', () => {
  describe('getShow', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(showFixture);
    });

    it('should get a show (without options)', async () => {
      const { httpMock, shows } = setup();

      const response = await shows.getShow('foo');

      expect(response).toEqual(showFixture);
      expect(httpMock.get).toBeCalledWith('/shows/foo', undefined);
    });

    it('should get a show (with options)', async () => {
      const { httpMock, shows } = setup();

      const response = await shows.getShow('foo', { market: 'bar' });

      expect(response).toEqual(showFixture);
      expect(httpMock.get).toBeCalledWith('/shows/foo', {
        params: {
          market: 'bar',
        },
      });
    });
  });

  describe('getShowEpisodes', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getShowEpisodesFixture);
    });

    it("should get a show's episodes (without options)", async () => {
      const { httpMock, shows } = setup();

      const response = await shows.getShowEpisodes('foo');

      expect(response).toEqual(getShowEpisodesFixture);
      expect(httpMock.get).toBeCalledWith('/shows/foo/episodes', undefined);
    });

    it("should get a show's episodes (with options)", async () => {
      const { httpMock, shows } = setup();

      const response = await shows.getShowEpisodes('foo', { limit: 2 });

      expect(response).toEqual(getShowEpisodesFixture);
      expect(httpMock.get).toBeCalledWith('/shows/foo/episodes', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('getShows', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getShowsFixture);
    });

    it('should get several shows (without options)', async () => {
      const { httpMock, shows } = setup();

      const response = await shows.getShows(['foo', 'bar']);

      expect(response).toEqual(getShowsFixture.shows);
      expect(httpMock.get).toBeCalledWith('/shows', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });

    it('should get several shows (with options)', async () => {
      const { httpMock, shows } = setup();

      const response = await shows.getShows(['foo', 'bar'], { market: 'baz' });

      expect(response).toEqual(getShowsFixture.shows);
      expect(httpMock.get).toBeCalledWith('/shows', {
        params: {
          ids: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });
});
