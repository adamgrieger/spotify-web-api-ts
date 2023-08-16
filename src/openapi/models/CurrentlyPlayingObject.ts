/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContextObject } from './ContextObject';
import type { EpisodeObject } from './EpisodeObject';
import type { TrackObject } from './TrackObject';

export type CurrentlyPlayingObject = {
  /**
   * A Context Object. Can be `null`.
   */
  context?: ContextObject;
  /**
   * Unix Millisecond Timestamp when data was fetched
   */
  timestamp?: number;
  /**
   * Progress into the currently playing track or episode. Can be `null`.
   */
  progress_ms?: number;
  /**
   * If something is currently playing, return `true`.
   */
  is_playing?: boolean;
  /**
   * The currently playing track or episode. Can be `null`.
   */
  item?: (TrackObject | EpisodeObject);
  /**
   * The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.
 * 
   */
  currently_playing_type?: string;
};
