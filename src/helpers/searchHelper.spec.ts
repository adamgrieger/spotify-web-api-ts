import { Http } from './Http';
import { searchHelper } from './searchHelper';
import { spotifyAxios } from './spotifyAxios';

jest.mock('./spotifyAxios');

const spotifyAxiosMock = spotifyAxios as jest.MockedFunction<
  typeof spotifyAxios
>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('searchHelper', () => {
  it('should search for an item (without options)', async () => {
    const http = new Http('token');
    await searchHelper(http, 'foo', ['album', 'artist']);

    expect(spotifyAxiosMock).toBeCalledWith('/search', 'GET', 'token', {
      params: {
        q: 'foo',
        type: ['album', 'artist'],
      },
    });
  });

  it('should search for an item (with options)', async () => {
    const http = new Http('token');
    await searchHelper(http, 'foo', ['album', 'artist'], { limit: 2 });

    expect(spotifyAxiosMock).toBeCalledWith('/search', 'GET', 'token', {
      params: {
        q: 'foo',
        type: ['album', 'artist'],
        limit: 2,
      },
    });
  });
});
