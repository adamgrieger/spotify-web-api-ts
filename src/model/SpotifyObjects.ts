export interface AlbumObject {
  album_type: "album" | "single" | "compilation";
  artists: SimplifiedArtistObject[];
  available_markets?: string[];
  copyrights: CopyrightObject[];
  external_ids: ExternalIdObject;
  external_urls: ExternalUrlObject;
  genres: string[];
  href: string;
  id: string;
  images: ImageObject[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions?: {
    reason: string;
  };
  total_tracks?: number;
  tracks: PagingObject<SimplifiedTrackObject>;
  type: "album";
  uri: string;
}

export interface ArtistObject {
  external_urls: ExternalUrlObject;
  followers: FollowersObject;
  genres: string[];
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
}

export interface AudioAnalysisObject {
  bars: TimeIntervalObject[];
  beats: TimeIntervalObject[];
  sections: SectionObject[];
  segments: SegmentObject[];
  tatums: TimeIntervalObject[];
}

export interface AudioFeaturesObject {
  acousticness: number;
  analysis_url: string;
  danceability: number;
  duration_ms: number;
  energy: number;
  id: string;
  instrumentalness: number;
  key: number;
  liveness: number;
  loudness: number;
  mode: number;
  speechiness: number;
  tempo: number;
  time_signature: number;
  track_href: string;
  type: "audio_features";
  uri: string;
  valence: number;
}

export interface CategoryObject {
  href: string;
  icons: ImageObject[];
  id: string;
  name: string;
}

export interface ContextObject {
  type: "artist" | "playlist" | "album";
  href: string;
  external_urls: ExternalUrlObject;
  uri: string;
}

export interface CopyrightObject {
  text: string;
  type: "C" | "P";
}

export interface CurrentlyPlayingContext {
  device: DeviceObject;
  repeat_state: "off" | "track" | "context";
  shuffle_state: boolean;
  context: ContextObject | null;
  timestamp: number;
  progress_ms: number | null;
  is_playing: boolean;
  item: TrackObject | null;
  currently_playing_type: "track" | "episode" | "ad" | "unknown";
}

export interface CurrentlyPlayingObject {
  context: ContextObject | null;
  timestamp: number;
  progress_ms: number | null;
  is_playing: boolean;
  item: TrackObject | null;
  currently_playing_type: "track" | "episode" | "ad" | "unknown";
}

export interface CursorObject {
  after: string;
}

export interface CursorPagingObject<T> {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  cursors: CursorObject;
  total: number;
}

export interface DeviceObject {
  id: string | null;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name: string;
  type: DeviceType;
  volume_percent: number | null;
}

export type DeviceType =
  | "Computer"
  | "Tablet"
  | "Smartphone"
  | "Speaker"
  | "TV"
  | "AVR"
  | "STB"
  | "AudioDongle"
  | "GameConsole"
  | "CastVideo"
  | "CastAudio"
  | "Automobile"
  | "Unknown";

export interface ErrorObject {
  status: number;
  message: string;
  reason?: string;
}

export interface ExternalIdObject {
  isrc?: string;
  ean?: string;
  upc?: string;
}

export interface ExternalUrlObject {
  spotify: string;
}

export interface FollowersObject {
  href: string | null;
  total: number;
}

export interface ImageObject {
  height?: number | null;
  url: string;
  width?: number | null;
}

export interface PagingObject<T> {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface PlayHistoryObject {
  track: SimplifiedTrackObject;
  played_at: string;
  context: ContextObject;
}

export interface PlaylistObject {
  collaborative: boolean;
  description: string | null;
  external_urls: ExternalUrlObject;
  followers: FollowersObject;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  owner: PublicUserObject;
  primary_color?: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: PagingObject<PlaylistTrackObject>;
  type: "playlist";
  uri: string;
}

export interface PlaylistTrackObject {
  added_at: string | null;
  added_by: PublicUserObject | null;
  is_local: boolean;
  track: TrackObject;
}

export interface PrivateUserObject {
  birthdate?: string;
  country?: string;
  display_name: string | null;
  email?: string;
  external_urls: ExternalUrlObject;
  followers?: FollowersObject;
  href: string;
  id: string;
  images?: ImageObject[];
  product?: string;
  type: "user";
  uri: string;
}

export interface PublicUserObject {
  display_name: string | null;
  external_urls: ExternalUrlObject;
  followers?: FollowersObject;
  href: string;
  id: string;
  images?: ImageObject[];
  type: "user";
  uri: string;
}

export interface RecommendationsObject {
  seeds: RecommendationsSeedObject[];
  tracks: SimplifiedTrackObject[];
}

export interface RecommendationsSeedObject {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string | null;
  id: string;
  initialPoolSize: number;
  type: "artist" | "track" | "genre";
}

export interface SavedAlbumObject {
  added_at: string;
  album: AlbumObject;
}

export interface SavedTrackObject {
  added_at: string;
  track: TrackObject;
}

export interface SectionObject {
  start: number;
  duration: number;
  confidence: number;
  loudness: number;
  tempo: number;
  tempo_confidence: number;
  key: number;
  key_confidence: number;
  mode: number;
  mode_confidence: number;
  time_signature: number;
  time_signature_confidence: number;
}

export interface SegmentObject {
  start: number;
  duration: number;
  confidence: number;
  loudness_start: number;
  loudness_max: number;
  loudness_max_time: number;
  loudness_end: number;
  pitches: number[];
  timbre: number[];
}

export interface SimplifiedAlbumObject {
  album_group?: "album" | "single" | "compilation" | "appears_on";
  album_type: "album" | "single" | "compilation";
  artists: SimplifiedArtistObject[];
  available_markets?: string[];
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions?: {
    reason: string;
  };
  total_tracks?: number;
  type: "album";
  uri: string;
}

export interface SimplifiedArtistObject {
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}

export interface SimplifiedPlaylistObject {
  collaborative: boolean;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  owner: PublicUserObject;
  primary_color?: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: "playlist";
  uri: string;
}

export interface SimplifiedTrackObject {
  artists: SimplifiedArtistObject[];
  available_markets?: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  is_playable?: boolean;
  linked_from?: TrackLinkObject;
  restrictions?: {
    reason: string;
  };
  name: string;
  preview_url: string | null;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
}

export interface TimeIntervalObject {
  start: number;
  duration: number;
  confidence: number;
}

export interface TrackLinkObject {
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  type: "track";
  uri: string;
}

export interface TrackObject {
  album: SimplifiedAlbumObject;
  artists: SimplifiedArtistObject[];
  available_markets?: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIdObject;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  is_playable?: boolean;
  linked_from?: TrackLinkObject;
  restrictions?: {
    reason: string;
  };
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
}
