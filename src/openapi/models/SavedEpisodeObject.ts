/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EpisodeObject } from './EpisodeObject';

export type SavedEpisodeObject = {
  /**
   * The date and time the episode was saved.
 * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
 * 
   */
  added_at?: string;
  /**
   * Information about the episode.
   */
  episode?: EpisodeObject;
};
