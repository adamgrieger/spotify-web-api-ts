// +---------+
// | General |
// +---------+

export interface DeviceIdOptions {
  device_id?: string;
}

export interface MarketOptions {
  market?: string;
}

export interface PagingOptions {
  limit?: number;
  offset?: number;
}

export type PagingMarketOptions = MarketOptions & PagingOptions;

// +---------+
// | Artists |
// +---------+

export interface GetArtistAlbumsOptions extends PagingMarketOptions {
  include_groups?: Array<'album' | 'appears_on' | 'compilation' | 'single'>;
}

// +--------+
// | Browse |
// +--------+

export interface GetCategoriesOptions extends PagingOptions {
  country?: string;
  locale?: string;
}

export interface GetCategoryOptions {
  country?: string;
  locale?: string;
}

export interface GetCategoryPlaylistsOptions extends PagingOptions {
  country?: string;
}

export interface GetFeaturedPlaylistsOptions extends PagingOptions {
  country?: string;
  locale?: string;
  timestamp?: string;
}

export interface GetNewReleasesOptions extends PagingOptions {
  country?: string;
}

export interface GetRecommendationsOptions extends MarketOptions {
  limit?: number;
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

// +-----------------+
// | Personalization |
// +-----------------+

export interface PersonalizationOptions extends PagingOptions {
  time_range?: 'long_term' | 'medium_term' | 'short_term';
}

// +--------+
// | Player |
// +--------+

export interface GetCurrentlyPlayingTrackOptions extends MarketOptions {
  additional_types?: Array<'episode'>;
}

export interface GetPlaybackInfoOptions extends MarketOptions {
  additional_types?: Array<'episode'>;
}

export interface GetRecentlyPlayedTracksOptions {
  after?: number;
  before?: number;
  limit?: number;
}

export interface PlayOptions extends DeviceIdOptions {
  context_uri?: string;
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

export interface GetPlaylistOptions extends MarketOptions {
  additional_types?: Array<'episode'>;
  fields?: string;
}

export interface GetPlaylistItemsOptions extends PagingMarketOptions {
  additional_types?: Array<'episode'>;
  fields?: string;
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

export interface SearchOptions extends PagingMarketOptions {
  include_external?: 'audio';
}
