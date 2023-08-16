/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */

export type RecommendationSeedObject = {
  /**
   * The number of tracks available after min\_\* and max\_\* filters have been applied.
 * 
   */
  afterFilteringSize?: number;
  /**
   * The number of tracks available after relinking for regional availability.
 * 
   */
  afterRelinkingSize?: number;
  /**
   * A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be `null`.
 * 
   */
  href?: string;
  /**
   * The id used to select this seed. This will be the same as the string used in the `seed_artists`, `seed_tracks` or `seed_genres` parameter.
 * 
   */
  id?: string;
  /**
   * The number of recommended tracks available for this seed.
 * 
   */
  initialPoolSize?: number;
  /**
   * The entity type of this seed. One of `artist`, `track` or `genre`.
 * 
   */
  type?: string;
};
