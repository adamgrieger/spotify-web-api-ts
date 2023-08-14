/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalUrlObject } from './ExternalUrlObject';
import type { LinkedTrackObject } from './LinkedTrackObject';
import type { SimplifiedArtistObject } from './SimplifiedArtistObject';
import type { TrackRestrictionObject } from './TrackRestrictionObject';

export type SimplifiedTrackObject = {
    /**
     * The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist.
     */
    artists?: Array<SimplifiedArtistObject>;
    /**
     * A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
 * 
     */
    available_markets?: Array<string>;
    /**
     * The disc number (usually `1` unless the album consists of more than one disc).
     */
    disc_number?: number;
    /**
     * The track length in milliseconds.
     */
    duration_ms?: number;
    /**
     * Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown).
     */
    explicit?: boolean;
    /**
     * External URLs for this track.
 * 
     */
    external_urls?: ExternalUrlObject;
    /**
     * A link to the Web API endpoint providing full details of the track.
     */
    href?: string;
    /**
     * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.
 * 
     */
    id?: string;
    /**
     * Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied. If `true`, the track is playable in the given market. Otherwise `false`.
 * 
     */
    is_playable?: boolean;
    /**
     * Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the `linked_from` object contains information about the originally requested track.
     */
    linked_from?: LinkedTrackObject;
    /**
     * Included in the response when a content restriction is applied.
 * 
     */
    restrictions?: TrackRestrictionObject;
    /**
     * The name of the track.
     */
    name?: string;
    /**
     * A URL to a 30 second preview (MP3 format) of the track.
 * 
     */
    preview_url?: string;
    /**
     * The number of the track. If an album has several discs, the track number is the number on the specified disc.
 * 
     */
    track_number?: number;
    /**
     * The object type: "track".
 * 
     */
    type?: string;
    /**
     * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.
 * 
     */
    uri?: string;
    /**
     * Whether or not the track is from a local file.
 * 
     */
    is_local?: boolean;
};
