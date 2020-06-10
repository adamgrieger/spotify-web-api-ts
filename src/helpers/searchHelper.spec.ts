import { Http } from './Http';
import { searchHelper } from './searchHelper';

jest.mock('./Http');

const HttpMock = Http as jest.MockedClass<typeof Http>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('searchHelper', () => {
  it('should search for an item (without options)', async () => {
    const httpMock = new HttpMock('token');

    await searchHelper(httpMock, 'foo', ['album', 'artist']);

    expect(httpMock.get).toBeCalledWith('/search', {
      params: {
        q: 'foo',
        type: ['album', 'artist'],
      },
    });
  });

  it('should search for an item (with options)', async () => {
    const httpMock = new HttpMock('token');

    await searchHelper(httpMock, 'foo', ['album', 'artist'], { limit: 2 });

    expect(httpMock.get).toBeCalledWith('/search', {
      params: {
        q: 'foo',
        type: ['album', 'artist'],
        limit: 2,
      },
    });
  });
});
