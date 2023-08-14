/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExplicitContentSettingsObject } from './ExplicitContentSettingsObject';
import type { ExternalUrlObject } from './ExternalUrlObject';
import type { FollowersObject } from './FollowersObject';
import type { ImageObject } from './ImageObject';

export type PrivateUserObject = {
  /**
   * The country of the user, as set in the user's account profile. An [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
 * 
   */
  country?: string;
  /**
   * The name displayed on the user's profile. `null` if not available.
 * 
   */
  display_name?: string;
  /**
   * The user's email address, as entered by the user when creating their account. _**Important!** This email address is unverified; there is no proof that it actually belongs to the user._ _This field is only available when the current user has granted access to the [user-read-email](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
 * 
   */
  email?: string;
  /**
   * The user's explicit content settings. _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
 * 
   */
  explicit_content?: ExplicitContentSettingsObject;
  /**
   * Known external URLs for this user.
   */
  external_urls?: ExternalUrlObject;
  /**
   * Information about the followers of the user.
   */
  followers?: FollowersObject;
  /**
   * A link to the Web API endpoint for this user.
 * 
   */
  href?: string;
  /**
   * The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for the user.
 * 
   */
  id?: string;
  /**
   * The user's profile image.
   */
  images?: Array<ImageObject>;
  /**
   * The user's Spotify subscription level: "premium", "free", etc. (The subscription level "open" can be considered the same as "free".) _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
 * 
   */
  product?: string;
  /**
   * The object type: "user"
 * 
   */
  type?: string;
  /**
   * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the user.
 * 
   */
  uri?: string;
};
