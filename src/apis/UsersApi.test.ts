import { type MockedClass } from 'vitest';

import { privateUserFixture, publicUserFixture } from '../fixtures';
import { Http } from '../helpers/Http';

import { UsersApi } from './UsersApi';

vi.mock('../helpers/Http');

const HttpMock = Http as MockedClass<typeof Http>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function setup() {
  const httpMock = new HttpMock('token');
  const users = new UsersApi();

  return { httpMock, users };
}

describe(UsersApi.name, () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getMe', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(privateUserFixture);
    });

    it("should get the current user's profile", async () => {
      const { httpMock, users } = setup();

      const response = await users.getMe();

      expect(response).toEqual(privateUserFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/me');
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
      expect(httpMock.get).toHaveBeenCalledWith('/users/foo');
    });
  });
});
