import { type MockedClass } from 'vitest';

import { Http } from './Http';
import { searchHelper } from './searchHelper';

vi.mock('./Http');

const HttpMock = Http as MockedClass<typeof Http>;

beforeEach(() => {
  vi.resetAllMocks();
});

describe('searchHelper', () => {
  it('should search for an item (without options)', async () => {
    const httpMock = new HttpMock('token');

    await searchHelper(httpMock, 'foo', ['album', 'artist']);

    expect(httpMock.get).toHaveBeenCalledWith('/search', {
      params: {
        q: 'foo',
        type: ['album', 'artist'],
      },
    });
  });

  it('should search for an item (with options)', async () => {
    const httpMock = new HttpMock('token');

    await searchHelper(httpMock, 'foo', ['album', 'artist'], { limit: 2 });

    expect(httpMock.get).toHaveBeenCalledWith('/search', {
      params: {
        q: 'foo',
        type: ['album', 'artist'],
        limit: 2,
      },
    });
  });
});
