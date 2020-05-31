import {
  Album,
  Artist,
  AudioFeatures,
  Category,
  CursorBasedPaging,
  Episode,
  Paging,
  PlayHistory,
  PlaylistItem,
  RecommendationSeed,
  SavedAlbum,
  SavedShow,
  SavedTrack,
  SimplifiedAlbum,
  SimplifiedEpisode,
  SimplifiedPlaylist,
  SimplifiedShow,
  SimplifiedTrack,
  Track,
} from './SpotifyObjects';

// +--------+
// | Albums |
// +--------+

export type GetAlbumsResponse = {
  albums: Array<Album | null>;
};

export type GetAlbumTracksResponse = Paging<SimplifiedTrack>;

// +---------+
// | Artists |
// +---------+

export type GetArtistAlbumsResponse = Paging<SimplifiedAlbum>;

export type GetArtistsResponse = {
  artists: Artist[];
};

export type GetArtistTopTracksResponse = {
  tracks: Track[];
};

export type GetRelatedArtistsResponse = {
  artists: Artist[];
};

// +--------+
// | Browse |
// +--------+

export type GetAvailableGenreSeedsResponse = {
  genres: string[];
};

export type GetCategoriesResponse = {
  categories: Paging<Category>;
};

export type GetCategoryPlaylistsResponse = {
  playlists: Paging<SimplifiedPlaylist>;
};

export type GetFeaturedPlaylistsResponse = {
  message: string;
  playlists: Paging<SimplifiedPlaylist>;
};

export type GetNewReleasesResponse = {
  albums: Paging<SimplifiedAlbum>;
};

export type GetRecommendationsResponse = {
  seeds: RecommendationSeed[];
  tracks: Track[];
};

// +----------+
// | Episodes |
// +----------+

export type GetEpisodesResponse = {
  episodes: Array<Episode | null>;
};

// +--------+
// | Follow |
// +--------+

export type GetFollowedArtistsResponse = {
  artists: CursorBasedPaging<Artist>;
};

// +---------+
// | Library |
// +---------+

export type GetSavedAlbumsResponse = Paging<SavedAlbum>;

export type GetSavedShowsResponse = Paging<SavedShow>;

export type GetSavedTracksResponse = Paging<SavedTrack>;

// +-----------------+
// | Personalization |
// +-----------------+

export type GetMyTopArtistsResponse = Paging<Artist>;

export type GetMyTopTracksResponse = Paging<Track>;

// +--------+
// | Player |
// +--------+

export type GetRecentlyPlayedTracksResponse = CursorBasedPaging<PlayHistory>;

// +-----------+
// | Playlists |
// +-----------+

export type GetMyPlaylistsResponse = Paging<SimplifiedPlaylist>;

export type GetPlaylistItemsResponse = Paging<PlaylistItem>;

export type GetUserPlaylistsResponse = Paging<SimplifiedPlaylist>;

export type SnapshotIdResponse = {
  snapshot_id: string;
};

// +--------+
// | Search |
// +--------+

export type SearchResponse = Partial<
  SearchAlbumsResponse &
    SearchArtistsResponse &
    SearchEpisodesResponse &
    SearchPlaylistsResponse &
    SearchShowsResponse &
    SearchTracksResponse
>;

export type SearchAlbumsResponse = {
  albums: Paging<SimplifiedAlbum>;
};

export type SearchArtistsResponse = {
  artists: Paging<Artist>;
};

export type SearchEpisodesResponse = {
  episodes: Paging<SimplifiedEpisode>;
};

export type SearchPlaylistsResponse = {
  playlists: Paging<SimplifiedPlaylist>;
};

export type SearchShowsResponse = {
  shows: Paging<SimplifiedShow>;
};

export type SearchTracksResponse = {
  tracks: Paging<Track>;
};

// +-------+
// | Shows |
// +-------+

export type GetShowsResponse = {
  shows: Array<SimplifiedShow | null>;
};

export type GetShowEpisodesResponse = Paging<SimplifiedEpisode>;

// +--------+
// | Tracks |
// +--------+

export type GetAudioFeaturesForTracksResponse = {
  audio_features: Array<AudioFeatures | null>;
};

export type GetTracksResponse = {
  tracks: Array<Track | null>;
};
