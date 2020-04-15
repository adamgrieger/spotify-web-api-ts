import { Http } from '../helpers/Http';
import { PersonalizationApi } from './PersonalizationApi';

jest.mock('../helpers/Http');

const HttpMock = Http as jest.Mocked<typeof Http>;

describe('PersonalizationApi', () => {
  const http = new HttpMock('token');

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getMyTopArtists', () => {
    it("should get the current user's top artists (without options)", () => {
      const personalization = new PersonalizationApi(http);
      personalization.getMyTopArtists();
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/top/artists', undefined);
    });

    it("should get the current user's top artists (with options)", () => {
      const personalization = new PersonalizationApi(http);
      personalization.getMyTopArtists({
        limit: 2,
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/top/artists', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('getMyTopTracks', () => {
    it("should get the current user's top tracks (without options)", () => {
      const personalization = new PersonalizationApi(http);
      personalization.getMyTopTracks();
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/top/tracks', undefined);
    });

    it("should get the current user's top tracks (with options)", () => {
      const personalization = new PersonalizationApi(http);
      personalization.getMyTopTracks({
        limit: 2,
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/top/tracks', {
        params: {
          limit: 2,
        },
      });
    });
  });
});
