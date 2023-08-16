/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */

import type { ExternalUrlObject } from './ExternalUrlObject';
import type { ImageObject } from './ImageObject';
import type { PlaylistOwnerObject } from './PlaylistOwnerObject';
import type { PlaylistTracksRefObject } from './PlaylistTracksRefObject';

export type SimplifiedPlaylistObject = {
  /**
   * `true` if the owner allows other users to modify the playlist.
 * 
   */
  collaborative?: boolean;
  /**
   * The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.
 * 
   */
  description?: string;
  /**
   * Known external URLs for this playlist.
 * 
   */
  external_urls?: ExternalUrlObject;
  /**
   * A link to the Web API endpoint providing full details of the playlist.
 * 
   */
  href?: string;
  /**
   * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
 * 
   */
  id?: string;
  /**
   * Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._
 * 
   */
  images?: Array<ImageObject>;
  /**
   * The name of the playlist.
 * 
   */
  name?: string;
  /**
   * The user who owns the playlist
 * 
   */
  owner?: PlaylistOwnerObject;
  /**
   * The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
 * 
   */
  public?: boolean;
  /**
   * The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
 * 
   */
  snapshot_id?: string;
  /**
   * A collection containing a link ( `href` ) to the Web API endpoint where full details of the playlist's tracks can be retrieved, along with the `total` number of tracks in the playlist. Note, a track object may be `null`. This can happen if a track is no longer available.
 * 
   */
  tracks?: PlaylistTracksRefObject;
  /**
   * The object type: "playlist"
 * 
   */
  type?: string;
  /**
   * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
 * 
   */
  uri?: string;
};
