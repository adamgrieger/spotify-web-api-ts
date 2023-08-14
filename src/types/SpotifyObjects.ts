export type Action =
  | 'interrupting_playback'
  | 'pausing'
  | 'resuming'
  | 'seeking'
  | 'skipping_next'
  | 'skipping_prev'
  | 'toggling_repeat_context'
  | 'toggling_repeat_track'
  | 'toggling_shuffle'
  | 'transferring_playback';

export interface Album {
  album_type: 'album' | 'compilation' | 'single';
  artists: SimplifiedArtist[];
  available_markets: string[];
  copyrights: Copyright[];
  external_ids: ExternalID;
  external_urls: ExternalURL;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImage[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: 'day' | 'month' | 'year';
  restrictions?: Restrictions;
  total_tracks: number;
  tracks: Paging<SimplifiedTrack>;
  type: 'album';
  uri: string;
}

export interface Artist {
  external_urls: ExternalURL;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  popularity: number;
  type: 'artist';
  uri: string;
}

export interface AudioAnalysis {
  bars: TimeInterval[];
  beats: TimeInterval[];
  meta?: unknown;
  sections: Section[];
  segments: Segment[];
  tatums: TimeInterval[];
  track?: unknown;
}

export interface AudioFeatures {
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
  type: 'audio_features';
  uri: string;
  valence: number;
}

export interface Category {
  href: string;
  icons: SpotifyImage[];
  id: string;
  name: string;
}

export interface Context {
  external_urls: ExternalURL | null;
  href: string | null;
  type: 'album' | 'artist' | 'playlist';
  uri: string;
}

export interface Copyright {
  text: string;
  type: 'C' | 'P';
}

export interface CurrentlyPlaying {
  actions: Disallows;
  context: Context | null;
  currently_playing_type: 'ad' | 'episode' | 'track' | 'unknown';
  is_playing: boolean;
  item: Episode | Track | null;
  progress_ms: number | null;
  timestamp: number;
}

export interface CurrentlyPlayingContext {
  actions: Disallows;
  context: Context | null;
  currently_playing_type: 'ad' | 'episode' | 'track' | 'unknown';
  device: Device;
  is_playing: boolean;
  item: Track | null;
  progress_ms: number | null;
  repeat_state: 'context' | 'off' | 'track';
  shuffle_state: boolean;
  timestamp: number;
}

export interface Cursor {
  after: string;
  before?: string;
}

export interface CursorBasedPaging<T> {
  cursors: Cursor;
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  total?: number;
}

export interface Device {
  id: string | null;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name: string;
  type: DeviceType;
  volume_percent: number | null;
}

export type DeviceType =
  | 'AudioDongle'
  | 'Automobile'
  | 'AVR'
  | 'CastAudio'
  | 'CastVideo'
  | 'Computer'
  | 'GameConsole'
  | 'Smartphone'
  | 'Speaker'
  | 'STB'
  | 'Tablet'
  | 'TV'
  | 'Unknown';

export interface Disallows {
  disallows: Partial<Record<Action, boolean>>;
}

export interface Episode {
  audio_preview_url: string | null;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: SpotifyImage[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language?: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: 'day' | 'month' | 'year';
  resume_point?: ResumePoint;
  show: SimplifiedShow;
  type: 'episode';
  uri: string;
}

export interface ExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
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

export interface Paging<T> {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface PlayHistory {
  context: Context | null;
  played_at: string;
  track: Track;
}

export interface Playlist {
  collaborative: boolean;
  description: string | null;
  external_urls: ExternalURL;
  followers: Followers;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: PublicUser;
  primary_color?: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: Paging<PlaylistItem>;
  type: 'playlist';
  uri: string;
}

export interface PlaylistDetails {
  collaborative?: boolean;
  description?: string;
  name?: string;
  public?: boolean;
}

export interface PlaylistItem {
  added_at: string | null;
  added_by: PublicUser | null;
  is_local: boolean;
  primary_color?: string | null;
  track: Episode | Track;
  video_thumbnail?: VideoThumbnail;
}

export interface PrivateUser {
  birthdate?: string;
  country?: string;
  display_name: string | null;
  email?: string;
  explicit_content?: ExplicitContent;
  external_urls: ExternalURL;
  followers: Followers;
  href: string;
  id: string;
  images: SpotifyImage[];
  product?: string;
  type: 'user';
  uri: string;
}

export interface PublicUser {
  display_name?: string | null;
  external_urls: ExternalURL;
  followers?: Followers;
  href: string;
  id: string;
  images?: SpotifyImage[];
  type: 'user';
  uri: string;
}

export interface RecommendationSeed {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string | null;
  id: string;
  initialPoolSize: number;
  type: 'ARTIST' | 'artist' | 'GENRE' | 'genre' | 'TRACK' | 'track';
}

export interface RegularError {
  error: {
    message: string;
    status: number;
  };
}

export type RepeatState = 'context' | 'off' | 'track';

export interface ResumePoint {
  fully_played: boolean;
  resume_position_ms: number;
}

export interface Restrictions {
  reason: string;
}

export interface SavedAlbum {
  added_at: string;
  album: Album;
}

export interface SavedShow {
  added_at: string;
  show: SimplifiedShow;
}

export interface SavedTrack {
  added_at: string;
  track: Track;
}

export type SearchType =
  | 'album'
  | 'artist'
  | 'episode'
  | 'playlist'
  | 'show'
  | 'track';

export interface Section {
  confidence: number;
  duration: number;
  key: number;
  key_confidence: number;
  loudness: number;
  mode: number;
  mode_confidence: number;
  start: number;
  tempo: number;
  tempo_confidence: number;
  time_signature: number;
  time_signature_confidence: number;
}

export interface Segment {
  confidence: number;
  duration: number;
  loudness_end: number;
  loudness_max: number;
  loudness_max_time: number;
  loudness_start: number;
  pitches: number[];
  start: number;
  timbre: number[];
}

export interface Show {
  available_markets: string[];
  copyrights: Copyright[];
  description: string;
  episodes: Paging<SimplifiedEpisode>;
  explicit: boolean;
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: SpotifyImage[];
  is_externally_hosted: boolean | null;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  type: 'show';
  uri: string;
}

export interface SimplifiedAlbum {
  album_group?: 'album' | 'appears_on' | 'compilation' | 'single';
  album_type:
    | 'ALBUM'
    | 'album'
    | 'COMPILATION'
    | 'compilation'
    | 'SINGLE'
    | 'single';
  artists: SimplifiedArtist[];
  available_markets?: string[];
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: 'day' | 'month' | 'year';
  restrictions?: Restrictions;
  total_tracks: number;
  type: 'album';
  uri: string;
}

export interface SimplifiedArtist {
  external_urls: ExternalURL;
  href: string;
  id: string;
  name: string;
  type: 'artist';
  uri: string;
}

export interface SimplifiedEpisode {
  audio_preview_url: string | null;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: SpotifyImage[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language?: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: 'day' | 'month' | 'year';
  resume_point?: ResumePoint;
  type: 'episode';
  uri: string;
}

export interface SimplifiedPlaylist {
  collaborative: boolean;
  description: string | null;
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: PublicUser;
  primary_color: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: Tracks;
  type: 'playlist';
  uri: string;
}

export interface SimplifiedShow {
  available_markets: string[];
  copyrights: Copyright[];
  description: string;
  explicit: boolean;
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: SpotifyImage[];
  is_externally_hosted: boolean | null;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  type: 'show';
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
  is_local: boolean;
  is_playable?: boolean;
  linked_from?: TrackLink;
  name: string;
  preview_url: string;
  restrictions?: Restrictions;
  track_number: number;
  type: 'track';
  uri: string;
}

export interface SpotifyImage {
  height: number | null;
  url: string;
  width: number | null;
}

export interface TimeInterval {
  confidence: number;
  duration: number;
  start: number;
}

export interface Track {
  album: SimplifiedAlbum;
  artists: SimplifiedArtist[];
  available_markets?: string[];
  disc_number: number;
  duration_ms: number;
  episode?: boolean;
  explicit: boolean;
  external_ids: ExternalID;
  external_urls: ExternalURL;
  href: string;
  id: string;
  is_local: boolean;
  is_playable?: boolean;
  linked_from?: TrackLink;
  name: string;
  popularity: number;
  preview_url: string | null;
  restrictions?: Restrictions;
  track?: boolean;
  track_number: number;
  type: 'track';
  uri: string;
}

export interface TrackLink {
  external_urls: ExternalURL;
  href: string;
  id: string;
  type: 'track';
  uri: string;
}

export interface Tracks {
  href: string;
  total: number;
}

export interface VideoThumbnail {
  url: string | null;
}
