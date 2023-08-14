/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChapterRestrictionObject } from './ChapterRestrictionObject';
import type { ExternalUrlObject } from './ExternalUrlObject';
import type { ImageObject } from './ImageObject';
import type { ResumePointObject } from './ResumePointObject';

export type ChapterBase = {
    /**
     * A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.
 * 
     */
    audio_preview_url: string;
    /**
     * A list of the countries in which the chapter can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
 * 
     */
    available_markets?: Array<string>;
    /**
     * The number of the chapter
 * 
     */
    chapter_number: number;
    /**
     * A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
 * 
     */
    description: string;
    /**
     * A description of the episode. This field may contain HTML tags.
 * 
     */
    html_description: string;
    /**
     * The episode length in milliseconds.
 * 
     */
    duration_ms: number;
    /**
     * Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).
 * 
     */
    explicit: boolean;
    /**
     * External URLs for this episode.
 * 
     */
    external_urls: ExternalUrlObject;
    /**
     * A link to the Web API endpoint providing full details of the episode.
 * 
     */
    href: string;
    /**
     * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
 * 
     */
    id: string;
    /**
     * The cover art for the episode in various sizes, widest first.
 * 
     */
    images: Array<ImageObject>;
    /**
     * True if the episode is playable in the given market. Otherwise false.
 * 
     */
    is_playable: boolean;
    /**
     * A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.
 * 
     */
    languages: Array<string>;
    /**
     * The name of the episode.
 * 
     */
    name: string;
    /**
     * The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.
 * 
     */
    release_date: string;
    /**
     * The precision with which `release_date` value is known.
 * 
     */
    release_date_precision: ChapterBase.release_date_precision;
    /**
     * The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.
 * 
     */
    resume_point: ResumePointObject;
    /**
     * The object type.
 * 
     */
    type: ChapterBase.type;
    /**
     * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
 * 
     */
    uri: string;
    /**
     * Included in the response when a content restriction is applied.
 * 
     */
    restrictions?: ChapterRestrictionObject;
};

export namespace ChapterBase {

    /**
     * The precision with which `release_date` value is known.
 * 
     */
    export enum release_date_precision {
        YEAR = 'year',
        MONTH = 'month',
        DAY = 'day',
    }

    /**
     * The object type.
 * 
     */
    export enum type {
        EPISODE = 'episode',
    }


}
