import { type MockedClass } from 'vitest';

import { getMyTopArtistsFixture, getMyTopTracksFixture } from '../fixtures';
import { Http } from '../helpers/Http';

import { PersonalizationApi } from './PersonalizationApi';

vi.mock('../helpers/Http');

const HttpMock = Http as MockedClass<typeof Http>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function setup() {
  const httpMock = new HttpMock('token');
  const personalization = new PersonalizationApi();

  return { httpMock, personalization };
}

describe('PersonalizationApi', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getMyTopArtists', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getMyTopArtistsFixture);
    });

    it.todo(
      "should get the current user's top artists (without options)",
      async () => {
        const { httpMock, personalization } = setup();

        const response = await personalization.getMyTopArtists();

        expect(response).toEqual(getMyTopArtistsFixture);
        expect(httpMock.get).toHaveBeenCalledWith('/me/top/artists', undefined);
      },
    );

    it.todo(
      "should get the current user's top artists (with options)",
      async () => {
        const { httpMock, personalization } = setup();

        const response = await personalization.getMyTopArtists({ limit: 2 });

        expect(response).toEqual(getMyTopArtistsFixture);
        expect(httpMock.get).toHaveBeenCalledWith('/me/top/artists', {
          params: {
            limit: 2,
          },
        });
      },
    );
  });

  describe('getMyTopTracks', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getMyTopTracksFixture);
    });

    it.todo(
      "should get the current user's top tracks (without options)",
      async () => {
        const { httpMock, personalization } = setup();

        const response = await personalization.getMyTopTracks();

        expect(response).toEqual(getMyTopTracksFixture);
        expect(httpMock.get).toHaveBeenCalledWith('/me/top/tracks', undefined);
      },
    );

    it.todo(
      "should get the current user's top tracks (with options)",
      async () => {
        const { httpMock, personalization } = setup();

        const response = await personalization.getMyTopTracks({ limit: 2 });

        expect(response).toEqual(getMyTopTracksFixture);
        expect(httpMock.get).toHaveBeenCalledWith('/me/top/tracks', {
          params: {
            limit: 2,
          },
        });
      },
    );
  });
});
