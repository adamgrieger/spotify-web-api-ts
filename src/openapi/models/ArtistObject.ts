/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalUrlObject } from './ExternalUrlObject';
import type { FollowersObject } from './FollowersObject';
import type { ImageObject } from './ImageObject';

export type ArtistObject = {
  /**
   * Known external URLs for this artist.
 * 
   */
  external_urls?: ExternalUrlObject;
  /**
   * Information about the followers of the artist.
 * 
   */
  followers?: FollowersObject;
  /**
   * A list of the genres the artist is associated with. If not yet classified, the array is empty.
 * 
   */
  genres?: Array<string>;
  /**
   * A link to the Web API endpoint providing full details of the artist.
 * 
   */
  href?: string;
  /**
   * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
 * 
   */
  id?: string;
  /**
   * Images of the artist in various sizes, widest first.
 * 
   */
  images?: Array<ImageObject>;
  /**
   * The name of the artist.
 * 
   */
  name?: string;
  /**
   * The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.
 * 
   */
  popularity?: number;
  /**
   * The object type.
 * 
   */
  type?: ArtistObject.type;
  /**
   * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
 * 
   */
  uri?: string;
};

export namespace ArtistObject {

  /**
   * The object type.
 * 
   */
  export enum type {
    ARTIST = 'artist',
  }


}
