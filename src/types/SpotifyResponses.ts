import {
  type Album,
  type Artist,
  type AudioFeatures,
  type Category,
  type CursorBasedPaging,
  type Episode,
  type Paging,
  type PlayHistory,
  type PlaylistItem,
  type RecommendationSeed,
  type SavedAlbum,
  type SavedShow,
  type SavedTrack,
  type SimplifiedAlbum,
  type SimplifiedEpisode,
  type SimplifiedPlaylist,
  type SimplifiedShow,
  type SimplifiedTrack,
  type Track,
} from './SpotifyObjects';

// +--------+
// | Albums |
// +--------+

export interface GetAlbumsResponse {
  albums: Array<Album | null>;
}

export type GetAlbumTracksResponse = Paging<SimplifiedTrack>;

// +---------+
// | Artists |
// +---------+

export type GetArtistAlbumsResponse = Paging<SimplifiedAlbum>;

export interface GetArtistsResponse {
  artists: Artist[];
}

export interface GetArtistTopTracksResponse {
  tracks: Track[];
}

export interface GetRelatedArtistsResponse {
  artists: Artist[];
}

// +--------+
// | Browse |
// +--------+

export interface GetAvailableGenreSeedsResponse {
  genres: string[];
}

export interface GetCategoriesResponse {
  categories: Paging<Category>;
}

export interface GetCategoryPlaylistsResponse {
  playlists: Paging<SimplifiedPlaylist>;
}

export interface GetFeaturedPlaylistsResponse {
  message: string;
  playlists: Paging<SimplifiedPlaylist>;
}

export interface GetNewReleasesResponse {
  albums: Paging<SimplifiedAlbum>;
}

export interface GetRecommendationsResponse {
  seeds: RecommendationSeed[];
  tracks: Track[];
}

// +----------+
// | Episodes |
// +----------+

export interface GetEpisodesResponse {
  episodes: Array<Episode | null>;
}

// +--------+
// | Follow |
// +--------+

export interface GetFollowedArtistsResponse {
  artists: CursorBasedPaging<Artist>;
}

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

export interface SnapshotIdResponse {
  snapshot_id: string;
}

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

export interface SearchAlbumsResponse {
  albums: Paging<SimplifiedAlbum>;
}

export interface SearchArtistsResponse {
  artists: Paging<Artist>;
}

export interface SearchEpisodesResponse {
  episodes: Paging<SimplifiedEpisode>;
}

export interface SearchPlaylistsResponse {
  playlists: Paging<SimplifiedPlaylist>;
}

export interface SearchShowsResponse {
  shows: Paging<SimplifiedShow>;
}

export interface SearchTracksResponse {
  tracks: Paging<Track>;
}

// +-------+
// | Shows |
// +-------+

export interface GetShowsResponse {
  shows: Array<SimplifiedShow | null>;
}

export type GetShowEpisodesResponse = Paging<SimplifiedEpisode>;

// +--------+
// | Tracks |
// +--------+

export interface GetAudioFeaturesForTracksResponse {
  audio_features: Array<AudioFeatures | null>;
}

export interface GetTracksResponse {
  tracks: Array<Track | null>;
}
