/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */

import type { EpisodeObject } from './EpisodeObject';
import type { TrackObject } from './TrackObject';

export type QueueObject = {
  /**
   * The currently playing track or episode. Can be `null`.
   */
  currently_playing?: (TrackObject | EpisodeObject);
  /**
   * The tracks or episodes in the queue. Can be empty.
   */
  queue?: Array<(TrackObject | EpisodeObject)>;
};
