import { UsersApi } from './UsersApi';
import { Http } from '../helpers/Http';

jest.mock('../helpers/Http');

const HttpMock = Http as jest.MockedClass<typeof Http>;

describe(UsersApi.name, () => {
  const httpMock = new HttpMock('token');

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getMe', () => {
    it("should get current user's profile", () => {
      const users = new UsersApi(httpMock);
      users.getMe();
      expect(httpMock.get).toBeCalledWith('/me');
    });
  });

  describe('getUser', () => {
    it("should get a user's profile", () => {
      const users = new UsersApi(httpMock);
      users.getUser('foo');
      expect(httpMock.get).toBeCalledWith('/users/foo');
    });
  });
});
