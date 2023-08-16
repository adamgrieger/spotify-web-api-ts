import axios, { type AxiosInstance } from 'axios';

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
  axiosClient: AxiosInstance = axios,
): CancelablePromise<T> => {
  return rawRequest(config, options, axiosClient);
};
