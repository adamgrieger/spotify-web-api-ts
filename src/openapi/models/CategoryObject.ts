/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */

import type { ImageObject } from './ImageObject';

export type CategoryObject = {
  /**
   * A link to the Web API endpoint returning full details of the category.
 * 
   */
  href: string;
  /**
   * The category icon, in various sizes.
 * 
   */
  icons: Array<ImageObject>;
  /**
   * The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) of the category.
 * 
   */
  id: string;
  /**
   * The name of the category.
 * 
   */
  name: string;
};
