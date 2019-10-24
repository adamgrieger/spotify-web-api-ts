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
