/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EpisodeObject } from './EpisodeObject';
import type { PlaylistUserObject } from './PlaylistUserObject';
import type { TrackObject } from './TrackObject';

export type PlaylistTrackObject = {
  /**
   * The date and time the track or episode was added. _**Note**: some very old playlists may return `null` in this field._
 * 
   */
  added_at?: string;
  /**
   * The Spotify user who added the track or episode. _**Note**: some very old playlists may return `null` in this field._
 * 
   */
  added_by?: PlaylistUserObject;
  /**
   * Whether this track or episode is a [local file](/documentation/web-api/concepts/playlists/#local-files) or not.
 * 
   */
  is_local?: boolean;
  /**
   * Information about the track or episode.
   */
  track?: (TrackObject | EpisodeObject);
};
