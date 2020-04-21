import { getMyTopArtistsFixture, getMyTopTracksFixture } from '../fixtures';
import { Http } from '../helpers/Http';
import { spotifyAxios } from '../helpers/spotifyAxios';
import { PersonalizationApi } from './PersonalizationApi';

jest.mock('../helpers/spotifyAxios');

const spotifyAxiosMock = spotifyAxios as jest.MockedFunction<
  typeof spotifyAxios
>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('PersonalizationApi', () => {
  describe('getMyTopArtists', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getMyTopArtistsFixture);
    });

    it("should get the current user's top artists (without options)", async () => {
      const http = new Http('token');
      const personalization = new PersonalizationApi(http);
      const response = await personalization.getMyTopArtists();

      expect(response).toEqual(getMyTopArtistsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/top/artists',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get the current user's top artists (with options)", async () => {
      const http = new Http('token');
      const personalization = new PersonalizationApi(http);
      const response = await personalization.getMyTopArtists({ limit: 2 });

      expect(response).toEqual(getMyTopArtistsFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/top/artists',
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

  describe('getMyTopTracks', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getMyTopTracksFixture);
    });

    it("should get the current user's top tracks (without options)", async () => {
      const http = new Http('token');
      const personalization = new PersonalizationApi(http);
      const response = await personalization.getMyTopTracks();

      expect(response).toEqual(getMyTopTracksFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/top/tracks',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get the current user's top tracks (with options)", async () => {
      const http = new Http('token');
      const personalization = new PersonalizationApi(http);
      const response = await personalization.getMyTopTracks({ limit: 2 });

      expect(response).toEqual(getMyTopTracksFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/top/tracks',
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
});
