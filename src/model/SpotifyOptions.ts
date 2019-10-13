// +--------+
// | Albums |
// +--------+

export interface GetAlbumOptions {
  market?: string;
}

export interface GetAlbumTracksOptions {
  limit?: number;
  offset?: number;
  market?: string;
}

export interface GetAlbumsOptions {
  market?: string;
}

// +---------+
// | Artists |
// +---------+

export interface GetArtistAlbumsOptions {
  include_groups?: Array<"album" | "single" | "appears_on" | "compilation">;
  market?: string;
  limit?: number;
  offset?: number;
}

// +--------+
// | Browse |
// +--------+

export interface GetCategoryOptions {
  country?: string;
  locale?: string;
}

export interface GetCategoryPlaylistsOptions {
  country?: string;
  limit?: number;
  offset?: number;
}

export interface GetCategoriesOptions {
  country?: string;
  locale?: string;
  limit?: number;
  offset?: number;
}

export interface GetFeaturedPlaylistsOptions {
  locale?: string;
  country?: string;
  timestamp?: string;
  limit?: number;
  offset?: number;
}

export interface GetNewReleasesOptions {
  country?: string;
  limit?: number;
  offset?: number;
}

export interface GetRecommendationsSeeds {
  seed_artists?: string[];
  seed_genres?: string[];
  seed_tracks?: string[];
}

export interface GetRecommendationsOptions {
  limit?: number;
  market?: string;
  max_acousticness?: number;
  max_danceability?: number;
  max_duration_ms?: number;
  max_energy?: number;
  max_instrumentalness?: number;
  max_key?: number;
  max_liveness?: number;
  max_loudness?: number;
  max_mode?: number;
  max_popularity?: number;
  max_speechiness?: number;
  max_tempo?: number;
  max_time_signature?: number;
  max_valence?: number;
  min_acousticness?: number;
  min_danceability?: number;
  min_duration_ms?: number;
  min_energy?: number;
  min_instrumentalness?: number;
  min_key?: number;
  min_liveness?: number;
  min_loudness?: number;
  min_mode?: number;
  min_popularity?: number;
  min_speechiness?: number;
  min_tempo?: number;
  min_time_signature?: number;
  min_valence?: number;
  target_acousticness?: number;
  target_danceability?: number;
  target_duration_ms?: number;
  target_energy?: number;
  target_instrumentalness?: number;
  target_key?: number;
  target_liveness?: number;
  target_loudness?: number;
  target_mode?: number;
  target_popularity?: number;
  target_speechiness?: number;
  target_tempo?: number;
  target_time_signature?: number;
  target_valence?: number;
}

// +--------+
// | Follow |
// +--------+

export interface FollowPlaylistOptions {
  public?: boolean;
}

export interface GetFollowedArtistsOptions {
  limit?: number;
  after?: string;
}

// +---------+
// | Library |
// +---------+

export interface GetMySavedAlbumsOptions {
  limit?: number;
  offset?: number;
  market?: string;
}

export interface GetMySavedTracksOptions {
  limit?: number;
  offset?: number;
  market?: string;
}

// +-----------------+
// | Personalization |
// +-----------------+

export interface GetMyTopArtistsOptions {
  limit?: number;
  offset?: number;
  time_range?: "long_term" | "medium_term" | "short_term";
}

export interface GetMyTopTracksOptions {
  limit?: number;
  offset?: number;
  time_range?: "long_term" | "medium_term" | "short_term";
}

// +--------+
// | Player |
// +--------+

export interface GetMyCurrentPlaybackStateOptions {
  market?: string;
}

export interface GetMyCurrentlyPlayingTrackOptions {
  market?: string;
}

export interface PauseOptions {
  device_id?: string;
}

export interface SeekOptions {
  device_id?: string;
}

export interface SetRepeatOptions {
  device_id?: string;
}

export interface SetVolumeOptions {
  device_id?: string;
}

export interface SkipToNextOptions {
  device_id?: string;
}

export interface SkipToPreviousOptions {
  device_id?: string;
}

export interface SetShuffleOptions {
  device_id?: string;
}

export interface GetMyRecentlyPlayedTracksOptions {
  limit?: number;
  after?: number;
  before?: number;
}

export interface PlayOptions {
  device_id?: string;
  context_uri?: string;
  uris?: string[];
  offset?: { position: number } | { uri: string };
  position_ms?: number;
}

export interface TransferPlaybackOptions {
  play?: boolean;
}

// +-----------+
// | Playlists |
// +-----------+

export interface AddTracksToPlaylistOptions {
  position?: number;
}

export interface ChangePlaylistDetailsOptions {
  name?: string;
  public?: boolean;
  collaborative?: boolean;
  description?: string;
}

export interface CreatePlaylistOptions {
  public?: boolean;
  collaborative?: boolean;
  description?: string;
}

export interface GetMyPlaylistsOptions {
  limit?: number;
  offset?: number;
}

export interface GetUserPlaylistsOptions {
  limit?: number;
  offset?: number;
}

export interface GetPlaylistOptions {
  fields?: string[];
  market?: string;
}

export interface GetPlaylistTracksOptions {
  fields?: string[];
  limit?: number;
  offset?: number;
  market?: string;
}

export interface RemoveTracksFromPlaylistOptions {
  snapshot_id?: string;
}

export interface RemoveTracksFromPlaylistByPositionOptions {
  snapshot_id?: string;
}

export interface ReorderTracksInPlaylistOptions {
  range_length?: number;
  snapshot_id?: string;
}

// +--------+
// | Search |
// +--------+

export interface SearchOptions {
  market?: string;
  limit?: number;
  offset?: number;
  include_external?: "audio";
}

// +--------+
// | Tracks |
// +--------+

export interface GetTracksOptions {
  market?: string;
}

export interface GetTrackOptions {
  market?: string;
}
