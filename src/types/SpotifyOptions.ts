// +---------+
// | General |
// +---------+

export type DeviceIdOptions = {
  device_id?: string;
};

export type MarketOptions = {
  market?: string;
};

// +--------+
// | Albums |
// +--------+

export type GetAlbumTracksOptions = {
  limit?: number;
  offset?: number;
  market?: string;
};

// +---------+
// | Artists |
// +---------+

export type GetArtistAlbumsOptions = {
  include_groups?: Array<'album' | 'single' | 'appears_on' | 'compilation'>;
  country?: string;
  limit?: number;
  offset?: number;
};

// +--------+
// | Browse |
// +--------+

export type GetCategoriesOptions = {
  country?: string;
  locale?: string;
  limit?: number;
  offset?: number;
};

export type GetCategoryOptions = {
  country?: string;
  locale?: string;
};

export type GetCategoryPlaylistsOptions = {
  country?: string;
  limit?: number;
  offset?: number;
};

export type GetFeaturedPlaylistsOptions = {
  locale?: string;
  country?: string;
  timestamp?: string;
  limit?: number;
  offset?: number;
};

export type GetNewReleasesOptions = {
  country?: string;
  limit?: number;
  offset?: number;
};

export type GetRecommendationsOptions = {
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
};

// +--------+
// | Follow |
// +--------+

export type FollowPlaylistOptions = {
  public?: boolean;
};

export type GetFollowedArtistsOptions = {
  limit?: number;
  after?: string;
};

// +---------+
// | Library |
// +---------+

export type GetSavedAlbumsOptions = {
  limit?: number;
  offset?: number;
  market?: string;
};

export type GetSavedShowsOptions = {
  limit?: number;
  offset?: number;
};

export type GetSavedTracksOptions = {
  limit?: number;
  offset?: number;
  market?: string;
};

export type RemoveSavedShowsOptions = {
  market?: string;
};

// +-----------------+
// | Personalization |
// +-----------------+

export type PersonalizationOptions = {
  limit?: number;
  offset?: number;
  time_range?: 'long_term' | 'medium_term' | 'short_term';
};

// +--------+
// | Player |
// +--------+

export type GetCurrentlyPlayingTrackOptions = {
  market?: string;
  additional_types?: Array<'episode'>;
};

export type GetPlaybackInfoOptions = {
  market?: string;
  additional_types?: Array<'episode'>;
};

export type GetRecentlyPlayedTracksOptions = {
  limit?: number;
  after?: number;
  before?: number;
};

export type PlayOptions = {
  device_id?: string;
  context_uri?: string;
  uris?: string[];
  offset?: { position: number } | { uri: string };
};

export type TransferPlaybackOptions = {
  play?: boolean;
};

// +-----------+
// | Playlists |
// +-----------+

export type AddTracksToPlaylistOptions = {
  position?: number;
};

export type CreatePlaylistOptions = {
  public?: boolean;
  collaborative?: boolean;
  description?: string;
};

export type GetMyPlaylistsOptions = {
  limit?: number;
  offset?: number;
};

export type GetPlaylistOptions = {
  fields?: string;
  market?: string;
  additional_types?: Array<'track' | 'episode'>;
};

export type GetPlaylistTracksOptions = {
  fields?: string;
  limit?: number;
  offset?: number;
  market?: string;
  additional_types?: Array<'track' | 'episode'>;
};

export type GetUserPlaylistsOptions = {
  limit?: number;
  offset?: number;
};

export type RemovePlaylistTracksByPositionOptions = {
  snapshot_id?: string;
};

export type ReorderPlaylistTracksOptions = {
  range_length?: number;
  snapshot_id?: string;
};

// +--------+
// | Search |
// +--------+

export type SearchOptions = {
  market?: string;
  limit?: number;
  offset?: number;
  include_external?: 'audio';
};

// +-------+
// | Shows |
// +-------+

export type GetShowEpisodesOptions = {
  limit?: number;
  offset?: number;
  market?: string;
};
