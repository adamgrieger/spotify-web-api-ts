import { getSpotifyAxios } from '../../main/spotifyAxios';

import { type CancelablePromise } from './CancelablePromise';
import { type ApiRequestOptions } from './ApiRequestOptions';
import { request as rawRequest } from './_request';
import { type OpenAPIConfig } from './OpenAPI';

export {
  base64,
  catchErrorCodes,
  getFormData,
  getHeaders,
  getQueryString,
  getRequestBody,
  getResponseBody,
  getResponseHeader,
  isBlob,
  isDefined,
  isFormData,
  isString,
  isStringWithValue,
  isSuccess,
  resolve,
  sendRequest,
} from './_request';

export const request = <T>(
  config: OpenAPIConfig,
  options: ApiRequestOptions,
): CancelablePromise<T> => {
  const spotifyAxios = getSpotifyAxios().axiosInstance;

  return rawRequest(config, options, spotifyAxios);
};
