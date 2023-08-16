// +---------+
// | General |
// +---------+

export interface DeviceIdOptions {
  device_id?: string;
}

export interface MarketOptions {
  market?: string;
}

// +--------+
// | Albums |
// +--------+

export interface GetAlbumTracksOptions {
  limit?: number;
  market?: string;
  offset?: number;
}

// +---------+
// | Artists |
// +---------+

export interface GetArtistAlbumsOptions {
  include_groups?: Array<'album' | 'appears_on' | 'compilation' | 'single'>;
  limit?: number;
  market?: string;
  offset?: number;
}

// +--------+
// | Browse |
// +--------+

export interface GetCategoriesOptions {
  country?: string;
  limit?: number;
  locale?: string;
  offset?: number;
}

export interface GetCategoryOptions {
  country?: string;
  locale?: string;
}

export interface GetCategoryPlaylistsOptions {
  country?: string;
  limit?: number;
  offset?: number;
}

export interface GetFeaturedPlaylistsOptions {
  country?: string;
  limit?: number;
  locale?: string;
  offset?: number;
  timestamp?: string;
}

export interface GetNewReleasesOptions {
  country?: string;
  limit?: number;
  offset?: number;
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
  after?: string;
  limit?: number;
}

// +---------+
// | Library |
// +---------+

export interface GetSavedAlbumsOptions {
  limit?: number;
  market?: string;
  offset?: number;
}

export interface GetSavedAudiobooksOptions {
  limit?: number;
  offset?: number;
}

export interface GetSavedEpisodesOptions {
  limit?: number;
  market?: string;
  offset?: number;
}

export interface GetSavedShowsOptions {
  limit?: number;
  offset?: number;
}

export interface GetSavedTracksOptions {
  limit?: number;
  market?: string;
  offset?: number;
}

export interface RemoveSavedShowsOptions {
  market?: string;
}

// +-----------------+
// | Personalization |
// +-----------------+

export interface PersonalizationOptions {
  limit?: number;
  offset?: number;
  time_range?: 'long_term' | 'medium_term' | 'short_term';
}

// +--------+
// | Player |
// +--------+

export interface GetCurrentlyPlayingTrackOptions {
  additional_types?: Array<'episode'>;
  market?: string;
}

export interface GetPlaybackInfoOptions {
  additional_types?: Array<'episode'>;
  market?: string;
}

export interface GetRecentlyPlayedTracksOptions {
  after?: number;
  before?: number;
  limit?: number;
}

export interface PlayOptions {
  context_uri?: string;
  device_id?: string;
  offset?: { position: number } | { uri: string };
  uris?: string[];
}

export interface TransferPlaybackOptions {
  play?: boolean;
}

// +-----------+
// | Playlists |
// +-----------+

export interface AddItemsToPlaylistOptions {
  position?: number;
}

export interface CreatePlaylistOptions {
  collaborative?: boolean;
  description?: string;
  public?: boolean;
}

export interface GetMyPlaylistsOptions {
  limit?: number;
  offset?: number;
}

export interface GetPlaylistOptions {
  additional_types?: Array<'episode'>;
  fields?: string;
  market?: string;
}

export interface GetPlaylistItemsOptions {
  additional_types?: Array<'episode'>;
  fields?: string;
  limit?: number;
  market?: string;
  offset?: number;
}

export interface GetUserPlaylistsOptions {
  limit?: number;
  offset?: number;
}

export interface RemovePlaylistItemsByPositionOptions {
  snapshot_id?: string;
}

export interface ReorderPlaylistItemsOptions {
  range_length?: number;
  snapshot_id?: string;
}

// +--------+
// | Search |
// +--------+

export interface SearchOptions {
  include_external?: 'audio';
  limit?: number;
  market?: string;
  offset?: number;
}

// +-------+
// | Shows |
// +-------+

export interface GetShowEpisodesOptions {
  limit?: number;
  market?: string;
  offset?: number;
}
