import { type GetCategoryPlaylistsResponse } from '../../types/SpotifyResponses';

export const getCategoryPlaylistsFixture: GetCategoryPlaylistsResponse = {
  playlists: {
    href: 'https://api.spotify.com/v1/browse/categories/sleep/playlists?offset=0&limit=2',
    items: [
      {
        collaborative: false,
        description: 'Gentle ambient piano to help you fall asleep.',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWZd79rJ6a7lp',
        id: '37i9dQZF1DWZd79rJ6a7lp',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0',
            width: null,
          },
        ],
        name: 'Sleep',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id:
          'MTU4NzEzOTMyNywwMDAwMDBiYjAwMDAwMTcxODhlMDM2YWYwMDAwMDE2Y2Y2OTUyYjAw',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWZd79rJ6a7lp/tracks',
          total: 236,
        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWZd79rJ6a7lp',
      },
      {
        collaborative: false,
        description: 'Soothing, minimalist ambient for deep sleep.',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWYcDQ1hSjOpY',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWYcDQ1hSjOpY',
        id: '37i9dQZF1DWYcDQ1hSjOpY',
        images: [
          {
            height: null,
            url: 'https://i.scdn.co/image/ab67706f00000002c601a6a746366286845b8fda',
            width: null,
          },
        ],
        name: 'Deep Sleep',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id:
          'MTU4Njc5Mzc3MCwwMDAwMDA0NjAwMDAwMTcxNzQ0NzZmNDUwMDAwMDE2ZDE1MjI3Zjk3',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWYcDQ1hSjOpY/tracks',
          total: 137,
        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWYcDQ1hSjOpY',
      },
    ],
    limit: 2,
    next: 'https://api.spotify.com/v1/browse/categories/sleep/playlists?offset=2&limit=2',
    offset: 0,
    previous: null,
    total: 43,
  },
};
