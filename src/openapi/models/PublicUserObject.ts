/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */

import type { ExternalUrlObject } from './ExternalUrlObject';
import type { FollowersObject } from './FollowersObject';
import type { ImageObject } from './ImageObject';

export type PublicUserObject = {
  /**
   * The name displayed on the user's profile. `null` if not available.
 * 
   */
  display_name?: string | null;
  /**
   * Known public external URLs for this user.
 * 
   */
  external_urls?: ExternalUrlObject;
  /**
   * Information about the followers of this user.
 * 
   */
  followers?: FollowersObject;
  /**
   * A link to the Web API endpoint for this user.
 * 
   */
  href?: string;
  /**
   * The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.
 * 
   */
  id?: string;
  /**
   * The user's profile image.
 * 
   */
  images?: Array<ImageObject>;
  /**
   * The object type.
 * 
   */
  type?: PublicUserObject.type;
  /**
   * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.
 * 
   */
  uri?: string;
};

export namespace PublicUserObject {

  /**
   * The object type.
 * 
   */
  export enum type {
    USER = 'user',
  }


}
