export type RepeatState = 'context' | 'off' | 'track';

export interface GetRecommendationsSeeds {
  seed_artists?: string[];
  seed_genres?: string[];
  seed_tracks?: string[];
}

export interface PlaylistDetails {
  collaborative?: boolean;
  description?: string;
  name?: string;
  public?: boolean;
}
