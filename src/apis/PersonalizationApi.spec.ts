import { getMyTopArtistsFixture, getMyTopTracksFixture } from '../fixtures';
import { Http } from '../helpers/Http';
import { PersonalizationApi } from './PersonalizationApi';

jest.mock('../helpers/Http');

const HttpMock = Http as jest.MockedClass<typeof Http>;

function setup() {
  const httpMock = new HttpMock('token');
  const personalization = new PersonalizationApi(httpMock);

  return { httpMock, personalization };
}

beforeEach(() => {
  jest.resetAllMocks();
});

describe('PersonalizationApi', () => {
  describe('getMyTopArtists', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getMyTopArtistsFixture);
    });

    it("should get the current user's top artists (without options)", async () => {
      const { httpMock, personalization } = setup();

      const response = await personalization.getMyTopArtists();

      expect(response).toEqual(getMyTopArtistsFixture);
      expect(httpMock.get).toBeCalledWith('/me/top/artists', undefined);
    });

    it("should get the current user's top artists (with options)", async () => {
      const { httpMock, personalization } = setup();

      const response = await personalization.getMyTopArtists({ limit: 2 });

      expect(response).toEqual(getMyTopArtistsFixture);
      expect(httpMock.get).toBeCalledWith('/me/top/artists', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('getMyTopTracks', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getMyTopTracksFixture);
    });

    it("should get the current user's top tracks (without options)", async () => {
      const { httpMock, personalization } = setup();

      const response = await personalization.getMyTopTracks();

      expect(response).toEqual(getMyTopTracksFixture);
      expect(httpMock.get).toBeCalledWith('/me/top/tracks', undefined);
    });

    it("should get the current user's top tracks (with options)", async () => {
      const { httpMock, personalization } = setup();

      const response = await personalization.getMyTopTracks({ limit: 2 });

      expect(response).toEqual(getMyTopTracksFixture);
      expect(httpMock.get).toBeCalledWith('/me/top/tracks', {
        params: {
          limit: 2,
        },
      });
    });
  });
});
