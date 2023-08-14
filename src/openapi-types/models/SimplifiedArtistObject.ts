/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalUrlObject } from './ExternalUrlObject';

export type SimplifiedArtistObject = {
    /**
     * Known external URLs for this artist.
 * 
     */
    external_urls?: ExternalUrlObject;
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
     * The name of the artist.
 * 
     */
    name?: string;
    /**
     * The object type.
 * 
     */
    type?: SimplifiedArtistObject.type;
    /**
     * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
 * 
     */
    uri?: string;
};

export namespace SimplifiedArtistObject {

    /**
     * The object type.
 * 
     */
    export enum type {
        ARTIST = 'artist',
    }


}
