/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalUrlObject } from './ExternalUrlObject';
import type { FollowersObject } from './FollowersObject';

export type PlaylistUserObject = {
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
   * The object type.
 * 
   */
  type?: PlaylistUserObject.type;
  /**
   * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.
 * 
   */
  uri?: string;
};

export namespace PlaylistUserObject {

  /**
   * The object type.
 * 
   */
  export enum type {
    USER = 'user',
  }


}
