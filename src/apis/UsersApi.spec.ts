import { privateUserFixture, publicUserFixture } from '../fixtures';
import { Http } from '../helpers/Http';
import { UsersApi } from './UsersApi';

jest.mock('../helpers/Http');

const HttpMock = Http as jest.MockedClass<typeof Http>;

function setup() {
  const httpMock = new HttpMock('token');
  const users = new UsersApi(httpMock);

  return { httpMock, users };
}

beforeEach(() => {
  jest.resetAllMocks();
});

describe(UsersApi.name, () => {
  describe('getMe', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(privateUserFixture);
    });

    it("should get the current user's profile", async () => {
      const { httpMock, users } = setup();

      const response = await users.getMe();

      expect(response).toEqual(privateUserFixture);
      expect(httpMock.get).toBeCalledWith('/me');
    });
  });

  describe('getUser', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(publicUserFixture);
    });

    it("should get a user's profile", async () => {
      const { httpMock, users } = setup();

      const response = await users.getUser('foo');

      expect(response).toEqual(publicUserFixture);
      expect(httpMock.get).toBeCalledWith('/users/foo');
    });
  });
});
