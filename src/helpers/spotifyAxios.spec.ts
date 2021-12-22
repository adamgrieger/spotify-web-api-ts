import axios from 'axios';
import { BASE_API_URL } from '../constants';
import { paramsSerializer, spotifyAxios } from './spotifyAxios';

jest.mock('axios');

const axiosMock = (axios as unknown) as jest.Mock;

describe('spotifyAxios', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should successfully call Spotify's Web API with the default content type", async () => {
    axiosMock.mockResolvedValue({ data: 'foo' });
    await spotifyAxios('foo', 'GET', 'token', {
      params: {
        bar: 'baz',
      },
    });
    expect(axiosMock).toBeCalledWith({
      params: {
        bar: 'baz',
      },
      baseURL: BASE_API_URL,
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'application/json',
      },
      paramsSerializer,
      url: 'foo',
      method: 'GET',
    });
  });

  it("should successfully call Spotify's Web API with a custom content type", async () => {
    axiosMock.mockResolvedValue({ data: 'foo' });
    await spotifyAxios('foo', 'GET', 'token', {
      contentType: 'image/jpeg',
      data: 'bar',
    });
    expect(axiosMock).toBeCalledWith({
      data: 'bar',
      baseURL: BASE_API_URL,
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'image/jpeg',
      },
      paramsSerializer,
      url: 'foo',
      method: 'GET',
    });
  });

  it('should handle errors', async () => {
    const testError = { message: 'foo' };
    axiosMock.mockRejectedValue(testError);
    await expect(spotifyAxios('bar', 'GET', 'token')).rejects.toThrow('foo');
  });

  it('should handle errors and the spotify error message', async () => {
    const testError = {
      message: 'foo',
      response: {
        data: {
          error: {
            status: 400,
            message: 'Error message from Spotify',
          },
        },
      },
    };
    axiosMock.mockRejectedValue(testError);
    await expect(spotifyAxios('bar', 'GET', 'token')).rejects.toThrow(
      'foo: Error message from Spotify',
    );
  });
});

describe('paramsSerializer', () => {
  it('should stringify arrays using the comma format', () => {
    expect(paramsSerializer({ foo: ['bar', 'baz'] })).toEqual('foo=bar%2Cbaz');
  });
});
