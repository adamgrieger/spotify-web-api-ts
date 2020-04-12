export type Action =
  | "interrupting_playback"
  | "pausing"
  | "resuming"
  | "seeking"
  | "skipping_next"
  | "skipping_prev"
  | "toggling_repeat_context"
  | "toggling_shuffle"
  | "toggling_repeat_track"
  | "transferring_playback";

export type Album = {
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
};

export type Artist = {
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
};

export type Category = {
  href: string;
  icons: Image[];
  id: string;
  name: string;
};

export type Context = {
  uri: string;
  href: string | null;
  external_urls: ExternalURL | null;
  type: "album" | "artist" | "playlist";
};

export type Copyright = {
  text: string;
  type: "C" | "P";
};

export type CurrentlyPlaying = {
  context: Context | null;
  timestamp: number;
  progress_ms: number | null;
  is_playing: boolean;
  item: Track | null;
  currently_playing_type: "track" | "episode" | "ad" | "unknown";
  actions: Disallows;
};

export type CurrentlyPlayingContext = {
  device: Device;
  repeat_state: "off" | "track" | "context";
  shuffle_state: boolean;
  context: Context | null;
  timestamp: number;
  progress_ms: number | null;
  is_playing: boolean;
  item: Track | null;
  currently_playing_type: "track" | "episode" | "ad" | "unknown";
  actions: Disallows;
};

export type Cursor = {
  after: string;
};

export type CursorBasedPaging<T> = {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  cursors: Cursor;
  total: number;
};

export type Device = {
  id: string | null;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name: string;
  type: DeviceType;
  volume_percent: number | null;
};

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

export type Disallows = Record<Action, boolean>;

export type Episode = {
  audio_preview_url: string | null;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  resume_point: ResumePoint;
  show: SimplifiedShow;
  type: "episode";
  uri: string;
};

export type ExternalID = {
  [key: string]: string;
};

export type ExternalURL = {
  [key: string]: string;
};

export type Followers = {
  href: string | null;
  total: number;
};

export type GetRecommendationsSeeds = {
  seed_artists?: string[];
  seed_genres?: string[];
  seed_tracks?: string[];
};

export type Image = {
  height: number | null;
  url: string;
  width: number | null;
};

export type Paging<T> = {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export type PlayHistory = {
  track: SimplifiedTrack;
  played_at: string;
  context: Context;
};

export type Playlist = {
  collaborative: boolean;
  description: string | null;
  external_urls: ExternalURL;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: PublicUser;
  public: boolean | null;
  snapshot_id: string;
  tracks: Paging<PlaylistTrack>;
  type: "playlist";
  uri: string;
};

export type PlaylistDetails = {
  name?: string;
  public?: boolean;
  collaborative?: boolean;
  description?: string;
};

export type PlaylistTrack = {
  added_at: string | null;
  added_by: PublicUser | null;
  is_local: boolean;
  track: Track | Episode;
};

export type PublicUser = {
  display_name: string | null;
  external_urls: ExternalURL;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  type: "user";
  uri: string;
};

export type RecommendationSeed = {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string | null;
  id: string;
  initialPoolSize: number;
  type: "artist" | "track" | "genre";
};

export type RegularError = {
  error: {
    status: number;
    message: string;
  };
};

export type RepeatState = "track" | "context" | "off";

export type ResumePoint = {
  fully_played: boolean;
  resume_position_ms: number;
};

export type Restrictions = {
  reason: string;
};

export type SavedAlbum = {
  added_at: string;
  album: Album;
};

export type SavedTrack = {
  added_at: string;
  track: Track;
};

export type SearchType =
  | "album"
  | "artist"
  | "playlist"
  | "track"
  | "show"
  | "episode";

export type Show = {
  available_markets: string[];
  copyrights: Copyright[];
  description: string;
  explicit: boolean;
  episodes: Paging<SimplifiedEpisode>;
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean | null;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  type: "show";
  uri: string;
};

export type SimplifiedAlbum = {
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
};

export type SimplifiedArtist = {
  external_urls: ExternalURL;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
};

export type SimplifiedEpisode = {
  audio_preview_url: string | null;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  type: "episode";
  uri: string;
};

export type SimplifiedPlaylist = {
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
};

export type SimplifiedShow = {
  available_markets: string[];
  copyrights: Copyright[];
  description: string;
  explicit: boolean;
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean | null;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  type: "show";
  uri: string;
};

export type SimplifiedTrack = {
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
};

export type Track = {
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
};

export type TrackLink = {
  external_urls: ExternalURL;
  href: string;
  id: string;
  type: "track";
  uri: string;
};

export type Tracks = {
  href: string;
  total: number;
};
