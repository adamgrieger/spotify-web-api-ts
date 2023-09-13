import { privateUserFixture, publicUserFixture } from '../fixtures';
import { UsersService } from '../openapi/services/UsersService';

import { UsersApi } from './UsersApi';

const users = new UsersApi();

describe(UsersApi.name, () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('getMe', () => {
    it("should get the current user's profile", async () => {
      const getMeSpy = vi
        .spyOn(UsersService, 'getCurrentUsersProfile')
        .mockResolvedValue(privateUserFixture);
      const response = await users.getMe();

      expect(response).toEqual(privateUserFixture);
      expect(getMeSpy).toHaveBeenCalledWith();
    });
  });

  describe('getUser', () => {
    it("should get a user's profile", async () => {
      const getUserSpy = vi
        .spyOn(UsersService, 'getUsersProfile')
        .mockResolvedValue(publicUserFixture);
      const response = await users.getUser('foo');

      expect(response).toEqual(publicUserFixture);
      expect(getUserSpy).toHaveBeenCalledWith('foo');
    });
  });
});
