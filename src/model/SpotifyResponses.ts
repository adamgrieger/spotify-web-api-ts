import * as SpotifyObjects from "./SpotifyObjects";

// +--------+
// | Albums |
// +--------+

export type GetAlbumResponse = SpotifyObjects.AlbumObject;

export type GetAlbumTracksResponse = SpotifyObjects.PagingObject<
  SpotifyObjects.SimplifiedTrackObject
>;

export interface GetAlbumsResponse {
  albums: Array<SpotifyObjects.AlbumObject | null>;
}

// +---------+
// | Artists |
// +---------+

export type GetArtistResponse = SpotifyObjects.ArtistObject;

export type GetArtistAlbumsResponse = SpotifyObjects.PagingObject<
  SpotifyObjects.SimplifiedAlbumObject
>;

export interface GetArtistTopTracksResponse {
  tracks: SpotifyObjects.TrackObject[];
}

export interface GetRelatedArtistsResponse {
  artists: SpotifyObjects.ArtistObject[];
}

export interface GetArtistsResponse {
  artists: Array<SpotifyObjects.ArtistObject | null>;
}

// +--------+
// | Browse |
// +--------+

export type GetCategoryResponse = SpotifyObjects.CategoryObject;

export interface GetCategoryPlaylistsResponse {
  playlists: SpotifyObjects.PagingObject<
    SpotifyObjects.SimplifiedPlaylistObject
  >;
}

export interface GetCategoriesResponse {
  categories: SpotifyObjects.PagingObject<SpotifyObjects.CategoryObject>;
}

export interface GetFeaturedPlaylistsResponse {
  message: string;
  playlists: SpotifyObjects.PagingObject<
    SpotifyObjects.SimplifiedPlaylistObject
  >;
}

export interface GetNewReleasesResponse {
  message?: string;
  albums: SpotifyObjects.PagingObject<SpotifyObjects.SimplifiedAlbumObject>;
}

export type GetRecommendationsResponse = SpotifyObjects.RecommendationsObject;

export interface GetAvailableGenreSeedsResponse {
  genres: string[];
}

// +--------+
// | Follow |
// +--------+

export type GetFollowedArtistsResponse = SpotifyObjects.CursorPagingObject<
  SpotifyObjects.ArtistObject
>;

// +---------+
// | Library |
// +---------+

export type GetMySavedAlbumsResponse = SpotifyObjects.PagingObject<
  SpotifyObjects.SavedAlbumObject
>;

export type GetMySavedTracksResponse = SpotifyObjects.PagingObject<
  SpotifyObjects.SavedTrackObject
>;

// +-----------------+
// | Personalization |
// +-----------------+

export type GetMyTopArtistsResponse = SpotifyObjects.PagingObject<
  SpotifyObjects.ArtistObject
>;

export type GetMyTopTracksResponse = SpotifyObjects.PagingObject<
  SpotifyObjects.TrackObject
>;

// +--------+
// | Player |
// +--------+

export interface GetMyDevicesResponse {
  devices: SpotifyObjects.DeviceObject[];
}
export type GetMyRecentlyPlayedTracksResponse = SpotifyObjects.CursorPagingObject<
  SpotifyObjects.PlayHistoryObject
>;

// +-----------+
// | Playlists |
// +-----------+

export interface PlaylistSnapshotIdResponse {
  snapshot_id: string;
}

export type GetMyPlaylistsResponse = SpotifyObjects.PagingObject<
  SpotifyObjects.SimplifiedPlaylistObject
>;

export type GetUserPlaylistsResponse = SpotifyObjects.PagingObject<
  SpotifyObjects.SimplifiedPlaylistObject
>;

export type GetPlaylistTracksResponse = SpotifyObjects.PagingObject<
  SpotifyObjects.PlaylistTrackObject
>;

// +--------+
// | Search |
// +--------+

export type SearchResponse = SpotifyObjects.PagingObject<
  | SpotifyObjects.AlbumObject
  | SpotifyObjects.SimplifiedAlbumObject
  | SpotifyObjects.TrackObject
  | SpotifyObjects.SimplifiedPlaylistObject
>;

// +--------+
// | Tracks |
// +--------+

export interface GetAudioFeaturesForTracksResponse {
  audio_features: SpotifyObjects.AudioFeaturesObject[];
}

export interface GetTracksResponse {
  tracks: SpotifyObjects.TrackObject[];
}
