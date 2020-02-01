import * as SpotifyObjects from "./SpotifyObjects";

// +--------+
// | Albums |
// +--------+

export type GetAlbumResponse = SpotifyObjects.Album;

export interface GetAlbumsResponse {
  albums: SpotifyObjects.Album[];
}

export type GetAlbumTracksResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedTrack
>;

// +---------+
// | Artists |
// +---------+

export type GetArtistResponse = SpotifyObjects.Artist;

export type GetArtistAlbumsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedAlbum
>;

export interface GetArtistsResponse {
  artists: SpotifyObjects.Artist[];
}

export interface GetArtistTopTracksResponse {
  tracks: SpotifyObjects.Track[];
}

export interface GetRelatedArtistsResponse {
  artists: SpotifyObjects.Artist[];
}

// +--------+
// | Browse |
// +--------+

export interface GetAvailableGenreSeedsResponse {
  genres: string[];
}

export interface GetCategoriesResponse {
  categories: SpotifyObjects.Paging<SpotifyObjects.Category>;
}

export type GetCategoryResponse = SpotifyObjects.Category;

export type GetCategoryPlaylistsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedPlaylist
>;

export interface GetFeaturedPlaylistsResponse {
  message: string;
  playlists: SpotifyObjects.Paging<SpotifyObjects.SimplifiedPlaylist>;
}

export interface GetNewReleasesResponse {
  message: string;
  albums: SpotifyObjects.Paging<SpotifyObjects.SimplifiedAlbum>;
}

export interface GetRecommendationsResponse {
  seeds: SpotifyObjects.RecommendationSeed[];
  tracks: SpotifyObjects.SimplifiedTrack[];
}

// +--------+
// | Follow |
// +--------+

export interface GetFollowedArtistsResponse {
  artists: SpotifyObjects.CursorBasedPaging<SpotifyObjects.Artist>;
}
