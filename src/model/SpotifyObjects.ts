export interface Album {
  album_type: "album" | "single" | "compilation";
  artists: SimplifiedArtist[];
  available_markets: string[];
  copyrights: Copyright[];
  external_ids: ExternalID;
  external_urls: ExternalURL;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions: Restrictions;
  tracks: Paging<SimplifiedTrack>;
  type: "album";
  uri: string;
}

export interface Artist {
  external_urls: ExternalURL;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
}

export interface Category {
  href: string;
  icons: Image[];
  id: string;
  name: string;
}

export interface Copyright {
  text: string;
  type: "C" | "P";
}

export interface Cursor {
  after: string;
}

export interface CursorBasedPaging<T> {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  cursors: Cursor;
  total: number;
}

export interface ExternalID {
  [key: string]: string;
}

export interface ExternalURL {
  [key: string]: string;
}

export interface Followers {
  href: string | null;
  total: number;
}

export interface GetRecommendationsSeeds {
  seed_artists?: string[];
  seed_genres?: string[];
  seed_tracks?: string[];
}

export interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

export interface Paging<T> {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface PublicUser {
  display_name: string | null;
  external_urls: ExternalURL;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  type: "user";
  uri: string;
}

export interface RecommendationSeed {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string | null;
  id: string;
  initialPoolSize: number;
  type: "artist" | "track" | "genre";
}

export interface RegularError {
  error: {
    status: number;
    message: string;
  };
}

export interface Restrictions {
  reason: string;
}

export interface SimplifiedAlbum {
  album_group?: "album" | "single" | "compilation" | "appears_on";
  album_type: "album" | "single" | "compilation";
  artists: SimplifiedArtist[];
  available_markets: string[];
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions: Restrictions;
  type: "album";
  uri: string;
}

export interface SimplifiedArtist {
  external_urls: ExternalURL;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}

export interface SimplifiedPlaylist {
  collaborative: boolean;
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: PublicUser;
  public: boolean | null;
  snapshot_id: string;
  tracks: Tracks;
  type: "playlist";
  uri: string;
}

export interface SimplifiedTrack {
  artists: SimplifiedArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalURL;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: TrackLink;
  restrictions: Restrictions;
  name: string;
  preview_url: string;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
}

export interface Track {
  album: SimplifiedAlbum;
  artists: SimplifiedArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalID;
  external_urls: ExternalURL;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: TrackLink;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
}

export interface TrackLink {
  external_urls: ExternalURL;
  href: string;
  id: string;
  type: "track";
  uri: string;
}

export interface Tracks {
  href: string;
  total: number;
}
