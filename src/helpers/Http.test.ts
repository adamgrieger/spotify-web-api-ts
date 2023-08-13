import { Http } from './Http';
import { spotifyAxios } from './spotifyAxios';

vi.mock('./spotifyAxios');

const spotifyAxiosMock = spotifyAxios as vi.Mock;

describe('Http', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should get and set the access token', () => {
    const http = new Http('token');
    expect(http.getAccessToken()).toBe('token');
    http.setAccessToken('newToken');
    expect(http.getAccessToken()).toBe('newToken');
  });

  describe('get', () => {
    it(`should correctly call spotifyAxios for GET requests (without config)`, () => {
      const http = new Http('token');
      http.get('foo');
      expect(spotifyAxiosMock).toBeCalledTimes(1);
      expect(spotifyAxiosMock).toBeCalledWith('foo', 'GET', 'token', undefined);
    });

    it(`should correctly call spotifyAxios for GET requests (with config)`, () => {
      const http = new Http('token');
      http.get('foo', {
        baseURL: 'bar',
      });
      expect(spotifyAxiosMock).toBeCalledTimes(1);
      expect(spotifyAxiosMock).toBeCalledWith('foo', 'GET', 'token', {
        baseURL: 'bar',
      });
    });
  });

  describe('post', () => {
    it(`should correctly call spotifyAxios for POST requests (without config)`, () => {
      const http = new Http('token');
      http.post('foo');
      expect(spotifyAxiosMock).toBeCalledTimes(1);
      expect(spotifyAxiosMock).toBeCalledWith(
        'foo',
        'POST',
        'token',
        undefined,
      );
    });

    it(`should correctly call spotifyAxios for POST requests (with config)`, () => {
      const http = new Http('token');
      http.post('foo', {
        baseURL: 'bar',
      });
      expect(spotifyAxiosMock).toBeCalledTimes(1);
      expect(spotifyAxiosMock).toBeCalledWith('foo', 'POST', 'token', {
        baseURL: 'bar',
      });
    });
  });

  describe('put', () => {
    it(`should correctly call spotifyAxios for PUT requests (without config)`, () => {
      const http = new Http('token');
      http.put('foo');
      expect(spotifyAxiosMock).toBeCalledTimes(1);
      expect(spotifyAxiosMock).toBeCalledWith('foo', 'PUT', 'token', undefined);
    });

    it(`should correctly call spotifyAxios for PUT requests (with config)`, () => {
      const http = new Http('token');
      http.put('foo', {
        baseURL: 'bar',
      });
      expect(spotifyAxiosMock).toBeCalledTimes(1);
      expect(spotifyAxiosMock).toBeCalledWith('foo', 'PUT', 'token', {
        baseURL: 'bar',
      });
    });
  });

  describe('delete', () => {
    it(`should correctly call spotifyAxios for DELETE requests (without config)`, () => {
      const http = new Http('token');
      http.delete('foo');
      expect(spotifyAxiosMock).toBeCalledTimes(1);
      expect(spotifyAxiosMock).toBeCalledWith(
        'foo',
        'DELETE',
        'token',
        undefined,
      );
    });

    it(`should correctly call spotifyAxios for DELETE requests (with config)`, () => {
      const http = new Http('token');
      http.delete('foo', {
        baseURL: 'bar',
      });
      expect(spotifyAxiosMock).toBeCalledTimes(1);
      expect(spotifyAxiosMock).toBeCalledWith('foo', 'DELETE', 'token', {
        baseURL: 'bar',
      });
    });
  });
});
