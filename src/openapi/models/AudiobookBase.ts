/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorObject } from './AuthorObject';
import type { CopyrightObject } from './CopyrightObject';
import type { ExternalUrlObject } from './ExternalUrlObject';
import type { ImageObject } from './ImageObject';
import type { NarratorObject } from './NarratorObject';

export type AudiobookBase = {
  /**
   * The author(s) for the audiobook.
 * 
   */
  authors: Array<AuthorObject>;
  /**
   * A list of the countries in which the audiobook can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
 * 
   */
  available_markets: Array<string>;
  /**
   * The copyright statements of the audiobook.
 * 
   */
  copyrights: Array<CopyrightObject>;
  /**
   * A description of the audiobook. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
 * 
   */
  description: string;
  /**
   * A description of the audiobook. This field may contain HTML tags.
 * 
   */
  html_description: string;
  /**
   * The edition of the audiobook.
 * 
   */
  edition?: string;
  /**
   * Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown).
 * 
   */
  explicit: boolean;
  /**
   * External URLs for this audiobook.
 * 
   */
  external_urls: ExternalUrlObject;
  /**
   * A link to the Web API endpoint providing full details of the audiobook.
 * 
   */
  href: string;
  /**
   * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.
 * 
   */
  id: string;
  /**
   * The cover art for the audiobook in various sizes, widest first.
 * 
   */
  images: Array<ImageObject>;
  /**
   * A list of the languages used in the audiobook, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
 * 
   */
  languages: Array<string>;
  /**
   * The media type of the audiobook.
 * 
   */
  media_type: string;
  /**
   * The name of the audiobook.
 * 
   */
  name: string;
  /**
   * The narrator(s) for the audiobook.
 * 
   */
  narrators: Array<NarratorObject>;
  /**
   * The publisher of the audiobook.
 * 
   */
  publisher: string;
  /**
   * The object type.
 * 
   */
  type: AudiobookBase.type;
  /**
   * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.
 * 
   */
  uri: string;
  /**
   * The number of chapters in this audiobook.
 * 
   */
  total_chapters: number;
};

export namespace AudiobookBase {

  /**
   * The object type.
 * 
   */
  export enum type {
    AUDIOBOOK = 'audiobook',
  }


}
