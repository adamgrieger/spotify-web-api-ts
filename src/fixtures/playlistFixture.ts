import { Playlist } from '../types';

export const playlistFixture: Playlist = {
  collaborative: false,
  description: "An isomorphic TypeScript wrapper for Spotify's Web API",
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/44lbOkAFTkHFB7nNeUQ0du',
  },
  followers: {
    href: null,
    total: 0,
  },
  href: 'https://api.spotify.com/v1/playlists/44lbOkAFTkHFB7nNeUQ0du',
  id: '44lbOkAFTkHFB7nNeUQ0du',
  images: [],
  name: 'spotify-web-api-ts',
  owner: {
    display_name: 'griegs',
    external_urls: {
      spotify: 'https://open.spotify.com/user/griegs',
    },
    href: 'https://api.spotify.com/v1/users/griegs',
    id: 'griegs',
    type: 'user',
    uri: 'spotify:user:griegs',
  },
  primary_color: null,
  public: false,
  snapshot_id: 'MSw5ZmY3MTEzNGM0YjJhNjQxZWM1OGZlM2ZmNjVhNzAyZTE3NGY0MDU3',
  tracks: {
    href: 'https://api.spotify.com/v1/playlists/44lbOkAFTkHFB7nNeUQ0du/tracks',
    items: [],
    limit: 100,
    next: null,
    offset: 0,
    previous: null,
    total: 0,
  },
  type: 'playlist',
  uri: 'spotify:playlist:44lbOkAFTkHFB7nNeUQ0du',
};
