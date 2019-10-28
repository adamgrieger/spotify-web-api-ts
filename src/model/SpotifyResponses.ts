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
