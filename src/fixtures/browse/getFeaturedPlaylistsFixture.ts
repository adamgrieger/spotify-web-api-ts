import { GetFeaturedPlaylistsResponse } from '../../types';

export const getFeaturedPlaylistsFixture: GetFeaturedPlaylistsResponse = {
  message: "Editor's picks",
  playlists: {
    href:
      'https://api.spotify.com/v1/browse/featured-playlists?timestamp=2020-04-19T03%3A06%3A33&offset=0&limit=2',
    items: [
      {
        collaborative: false,
        description:
          '<a href="spotify:genre:edm_dance">Dance music</a> for the heart <3',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWSRc3WJklgBs',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWSRc3WJklgBs',
        id: '37i9dQZF1DWSRc3WJklgBs',
        images: [
          {
            height: null,
            url:
              'https://i.scdn.co/image/ab67706f00000002314724fc7ca36a4fce2f1b6a',
            width: null,
          },
        ],
        name: 'Heart Beats',
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
          'MTU4NzI2NTU2MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl',
        tracks: {
          href:
            'https://api.spotify.com/v1/playlists/37i9dQZF1DWSRc3WJklgBs/tracks',
          total: 140,
        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DWSRc3WJklgBs',
      },
      {
        collaborative: false,
        description:
          'That’s how its supposed to be. Living young, wild and free!',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX843Qf4lrFtZ',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX843Qf4lrFtZ',
        id: '37i9dQZF1DX843Qf4lrFtZ',
        images: [
          {
            height: null,
            url:
              'https://i.scdn.co/image/ab67706f00000002e2c938563967c4f22c76ed74',
            width: null,
          },
        ],
        name: 'Young, Wild & Free',
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
          'MTU4NzI2NTU3OSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl',
        tracks: {
          href:
            'https://api.spotify.com/v1/playlists/37i9dQZF1DX843Qf4lrFtZ/tracks',
          total: 100,
        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DX843Qf4lrFtZ',
      },
    ],
    limit: 2,
    next:
      'https://api.spotify.com/v1/browse/featured-playlists?timestamp=2020-04-19T03%3A06%3A33&offset=2&limit=2',
    offset: 0,
    previous: null,
    total: 12,
  },
};
