import { privateUserFixture, publicUserFixture } from '../fixtures';
import { Http } from '../helpers/Http';
import { spotifyAxios } from '../helpers/spotifyAxios';
import { UsersApi } from './UsersApi';

jest.mock('../helpers/spotifyAxios');

const spotifyAxiosMock = spotifyAxios as jest.MockedFunction<
  typeof spotifyAxios
>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe(UsersApi.name, () => {
  describe('getMe', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(privateUserFixture);
    });

    it("should get the current user's profile", async () => {
      const http = new Http('token');
      const users = new UsersApi(http);
      const response = await users.getMe();

      expect(response).toEqual(privateUserFixture);
      expect(spotifyAxiosMock).toBeCalledWith('/me', 'GET', 'token', undefined);
    });
  });

  describe('getUser', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(publicUserFixture);
    });

    it("should get a user's profile", async () => {
      const http = new Http('token');
      const users = new UsersApi(http);
      const response = await users.getUser('foo');

      expect(response).toEqual(publicUserFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/users/foo',
        'GET',
        'token',
        undefined,
      );
    });
  });
});
