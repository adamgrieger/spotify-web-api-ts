/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AlbumBase } from './AlbumBase';
import type { ArtistObject } from './ArtistObject';
import type { PagingSimplifiedTrackObject } from './PagingSimplifiedTrackObject';

export type AlbumObject = (AlbumBase & {
/**
 * The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.
 * 
 */
artists?: Array<ArtistObject>;
/**
 * The tracks of the album.
 * 
 */
tracks?: PagingSimplifiedTrackObject;
});
