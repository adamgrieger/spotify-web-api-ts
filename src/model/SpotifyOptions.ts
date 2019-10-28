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

// +---------+
// | Artists |
// +---------+

export interface GetArtistAlbumsOptions {
  include_groups?: Array<"album" | "single" | "appears_on" | "compilation">;
  country?: string;
  limit?: number;
  offset?: number;
}
