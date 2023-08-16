import { type Mock } from 'vitest';

import { spotifyAxios } from '../main/spotifyAxios';

import { Http } from './Http';

vi.mock('./spotifyAxios');

const spotifyAxiosMock = spotifyAxios as Mock;

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
    it(`should correctly call spotifyAxios for GET requests (without config)`, async () => {
      const http = new Http('token');
      await http.get('foo');
      expect(spotifyAxiosMock).toHaveBeenCalledTimes(1);
      expect(spotifyAxiosMock).toHaveBeenCalledWith(
        'foo',
        'GET',
        'token',
        undefined,
      );
    });

    it(`should correctly call spotifyAxios for GET requests (with config)`, async () => {
      const http = new Http('token');
      await http.get('foo', {
        baseURL: 'bar',
      });
      expect(spotifyAxiosMock).toHaveBeenCalledTimes(1);
      expect(spotifyAxiosMock).toHaveBeenCalledWith('foo', 'GET', 'token', {
        baseURL: 'bar',
      });
    });
  });

  describe('post', () => {
    it(`should correctly call spotifyAxios for POST requests (without config)`, async () => {
      const http = new Http('token');
      await http.post('foo');
      expect(spotifyAxiosMock).toHaveBeenCalledTimes(1);
      expect(spotifyAxiosMock).toHaveBeenCalledWith(
        'foo',
        'POST',
        'token',
        undefined,
      );
    });

    it(`should correctly call spotifyAxios for POST requests (with config)`, async () => {
      const http = new Http('token');
      await http.post('foo', {
        baseURL: 'bar',
      });
      expect(spotifyAxiosMock).toHaveBeenCalledTimes(1);
      expect(spotifyAxiosMock).toHaveBeenCalledWith('foo', 'POST', 'token', {
        baseURL: 'bar',
      });
    });
  });

  describe('put', () => {
    it(`should correctly call spotifyAxios for PUT requests (without config)`, async () => {
      const http = new Http('token');
      await http.put('foo');
      expect(spotifyAxiosMock).toHaveBeenCalledTimes(1);
      expect(spotifyAxiosMock).toHaveBeenCalledWith(
        'foo',
        'PUT',
        'token',
        undefined,
      );
    });

    it(`should correctly call spotifyAxios for PUT requests (with config)`, async () => {
      const http = new Http('token');
      await http.put('foo', {
        baseURL: 'bar',
      });
      expect(spotifyAxiosMock).toHaveBeenCalledTimes(1);
      expect(spotifyAxiosMock).toHaveBeenCalledWith('foo', 'PUT', 'token', {
        baseURL: 'bar',
      });
    });
  });

  describe('delete', () => {
    it(`should correctly call spotifyAxios for DELETE requests (without config)`, async () => {
      const http = new Http('token');
      await http.delete('foo');
      expect(spotifyAxiosMock).toHaveBeenCalledTimes(1);
      expect(spotifyAxiosMock).toHaveBeenCalledWith(
        'foo',
        'DELETE',
        'token',
        undefined,
      );
    });

    it(`should correctly call spotifyAxios for DELETE requests (with config)`, async () => {
      const http = new Http('token');
      await http.delete('foo', {
        baseURL: 'bar',
      });
      expect(spotifyAxiosMock).toHaveBeenCalledTimes(1);
      expect(spotifyAxiosMock).toHaveBeenCalledWith('foo', 'DELETE', 'token', {
        baseURL: 'bar',
      });
    });
  });
});
