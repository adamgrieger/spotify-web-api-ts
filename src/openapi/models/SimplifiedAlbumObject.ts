/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */

import type { AlbumBase } from './AlbumBase';
import type { SimplifiedArtistObject } from './SimplifiedArtistObject';

export type SimplifiedAlbumObject = (AlbumBase & {
/**
 * The field is present when getting an artist's albums. Compare to album_type this field represents relationship between the artist and the album.
 * 
 */
album_group?: SimplifiedAlbumObject.album_group;
/**
 * The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.
 * 
 */
artists: Array<SimplifiedArtistObject>;
});

export namespace SimplifiedAlbumObject {

  /**
   * The field is present when getting an artist's albums. Compare to album_type this field represents relationship between the artist and the album.
 * 
   */
  export enum album_group {
    ALBUM = 'album',
    SINGLE = 'single',
    COMPILATION = 'compilation',
    APPEARS_ON = 'appears_on',
  }


}
