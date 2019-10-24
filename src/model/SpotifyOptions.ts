// +--------+
// | Albums |
// +--------+

export interface GetAlbumOptions {
  market?: string;
}

export interface GetAlbumsOptions {
  market?: string;
}

export interface GetAlbumTracksOptions {
  limit?: number;
  offset?: number;
  market?: string;
}
