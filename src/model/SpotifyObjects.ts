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

export interface Copyright {
  text: string;
  type: "C" | "P";
}

export interface ExternalID {
  [key: string]: string;
}

export interface ExternalURL {
  [key: string]: string;
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

export interface Restrictions {
  reason: string;
}

export interface SimplifiedArtist {
  external_urls: ExternalURL;
  href: string;
  id: string;
  name: string;
  type: "artist";
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

export interface TrackLink {
  external_urls: ExternalURL;
  href: string;
  id: string;
  type: "track";
  uri: string;
}
