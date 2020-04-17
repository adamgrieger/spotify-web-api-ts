import * as SpotifyObjects from './SpotifyObjects';

// +--------+
// | Albums |
// +--------+

export type GetAlbumsResponse = {
  albums: Array<SpotifyObjects.Album | null>;
};

export type GetAlbumTracksResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedTrack
>;

// +---------+
// | Artists |
// +---------+

export type GetArtistAlbumsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedAlbum
>;

export type GetArtistsResponse = {
  artists: SpotifyObjects.Artist[];
};

export type GetArtistTopTracksResponse = {
  tracks: SpotifyObjects.Track[];
};

export type GetRelatedArtistsResponse = {
  artists: SpotifyObjects.Artist[];
};

// +--------+
// | Browse |
// +--------+

export type GetAvailableGenreSeedsResponse = {
  genres: string[];
};

export type GetCategoriesResponse = {
  categories: SpotifyObjects.Paging<SpotifyObjects.Category>;
};

export type GetCategoryPlaylistsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedPlaylist
>;

export type GetFeaturedPlaylistsResponse = {
  message: string;
  playlists: SpotifyObjects.Paging<SpotifyObjects.SimplifiedPlaylist>;
};

export type GetNewReleasesResponse = {
  message: string;
  albums: SpotifyObjects.Paging<SpotifyObjects.SimplifiedAlbum>;
};

export type GetRecommendationsResponse = {
  seeds: SpotifyObjects.RecommendationSeed[];
  tracks: SpotifyObjects.SimplifiedTrack[];
};

// +----------+
// | Episodes |
// +----------+

export type GetEpisodesResponse = Array<SpotifyObjects.Episode | null>;

// +--------+
// | Follow |
// +--------+

export type GetFollowedArtistsResponse = {
  artists: SpotifyObjects.CursorBasedPaging<SpotifyObjects.Artist>;
};

// +---------+
// | Library |
// +---------+

export type GetSavedAlbumsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SavedAlbum
>;

export type GetSavedTracksResponse = SpotifyObjects.Paging<
  SpotifyObjects.SavedTrack
>;

// +-----------------+
// | Personalization |
// +-----------------+

export type GetMyTopArtistsResponse = SpotifyObjects.Paging<
  SpotifyObjects.Artist
>;

export type GetMyTopTracksResponse = SpotifyObjects.Paging<
  SpotifyObjects.Track
>;

// +--------+
// | Player |
// +--------+

export type GetRecentlyPlayedTracksResponse = SpotifyObjects.CursorBasedPaging<
  SpotifyObjects.PlayHistory
>;

// +-----------+
// | Playlists |
// +-----------+

export type GetMyPlaylistsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedPlaylist
>;

export type GetPlaylistTracksResponse = SpotifyObjects.Paging<
  Array<SpotifyObjects.Track | SpotifyObjects.Episode>
>;

export type SnapshotIdResponse = {
  snapshot_id: string;
};

// +--------+
// | Search |
// +--------+

export type SearchResponse = SpotifyObjects.Paging<
  | SpotifyObjects.SimplifiedAlbum
  | SpotifyObjects.Artist
  | SpotifyObjects.SimplifiedEpisode
  | SpotifyObjects.SimplifiedPlaylist
  | SpotifyObjects.SimplifiedShow
  | SpotifyObjects.Track
>;

export type SearchAlbumsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedAlbum
>;

export type SearchArtistsResponse = SpotifyObjects.Paging<
  SpotifyObjects.Artist
>;

export type SearchEpisodesResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedEpisode
>;

export type SearchPlaylistsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedPlaylist
>;

export type SearchShowsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedShow
>;

export type SearchTracksResponse = SpotifyObjects.Paging<SpotifyObjects.Track>;

// +-------+
// | Shows |
// +-------+

export type GetShowsResponse = Array<SpotifyObjects.Show | null>;

export type GetShowEpisodesResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedEpisode
>;

// +--------+
// | Tracks |
// +--------+

export type GetAudioFeaturesForTracksResponse = {
  audio_features: Array<SpotifyObjects.AudioFeatures | null>;
};

export type GetTracksResponse = {
  tracks: Array<SpotifyObjects.Track | null>;
};
