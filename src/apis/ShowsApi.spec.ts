import { ShowsApi } from './ShowsApi';
import { Http } from '../helpers/Http';

jest.mock('../helpers/Http');

const HttpMock = Http as jest.MockedClass<typeof Http>;

describe(ShowsApi.name, () => {
  const httpMock = new HttpMock('token');

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getShow', () => {
    it('should get a show (without options)', () => {
      const shows = new ShowsApi(httpMock);
      shows.getShow('foo');
      expect(httpMock.get).toBeCalledWith('/shows/foo', undefined);
    });

    it('should get a show (with options)', () => {
      const shows = new ShowsApi(httpMock);
      shows.getShow('foo', { market: 'bar' });
      expect(httpMock.get).toBeCalledWith('/shows/foo', {
        params: {
          market: 'bar',
        },
      });
    });
  });

  describe('getShowEpisodes', () => {
    it("should get a show's episodes (without options)", () => {
      const shows = new ShowsApi(httpMock);
      shows.getShowEpisodes('foo');
      expect(httpMock.get).toBeCalledWith('/shows/foo/episodes', undefined);
    });

    it("should get a show's episodes (with options)", () => {
      const shows = new ShowsApi(httpMock);
      shows.getShowEpisodes('foo', { limit: 2 });
      expect(httpMock.get).toBeCalledWith('/shows/foo/episodes', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('getShows', () => {
    it('should get several shows (without options)', () => {
      const shows = new ShowsApi(httpMock);
      shows.getShows(['foo', 'bar']);
      expect(httpMock.get).toBeCalledWith('/shows', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });

    it('should get several shows (with options)', () => {
      const shows = new ShowsApi(httpMock);
      shows.getShows(['foo', 'bar'], { market: 'baz' });
      expect(httpMock.get).toBeCalledWith('/shows', {
        params: {
          ids: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });
});
