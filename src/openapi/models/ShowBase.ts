/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CopyrightObject } from './CopyrightObject';
import type { ExternalUrlObject } from './ExternalUrlObject';
import type { ImageObject } from './ImageObject';

export type ShowBase = {
  /**
   * A list of the countries in which the show can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
 * 
   */
  available_markets: Array<string>;
  /**
   * The copyright statements of the show.
 * 
   */
  copyrights: Array<CopyrightObject>;
  /**
   * A description of the show. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
 * 
   */
  description: string;
  /**
   * A description of the show. This field may contain HTML tags.
 * 
   */
  html_description: string;
  /**
   * Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).
 * 
   */
  explicit: boolean;
  /**
   * External URLs for this show.
 * 
   */
  external_urls: ExternalUrlObject;
  /**
   * A link to the Web API endpoint providing full details of the show.
 * 
   */
  href: string;
  /**
   * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.
 * 
   */
  id: string;
  /**
   * The cover art for the show in various sizes, widest first.
 * 
   */
  images: Array<ImageObject>;
  /**
   * True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be `null` in some cases.
 * 
   */
  is_externally_hosted: boolean;
  /**
   * A list of the languages used in the show, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
 * 
   */
  languages: Array<string>;
  /**
   * The media type of the show.
 * 
   */
  media_type: string;
  /**
   * The name of the episode.
 * 
   */
  name: string;
  /**
   * The publisher of the show.
 * 
   */
  publisher: string;
  /**
   * The object type.
 * 
   */
  type: ShowBase.type;
  /**
   * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the show.
 * 
   */
  uri: string;
  /**
   * The total number of episodes in the show.
 * 
   */
  total_episodes: number;
};

export namespace ShowBase {

  /**
   * The object type.
 * 
   */
  export enum type {
    SHOW = 'show',
  }


}
