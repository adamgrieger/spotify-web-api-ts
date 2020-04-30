import { SearchPlaylistsResponse } from '../../types';

export const searchPlaylistsFixture: SearchPlaylistsResponse = {
  playlists: {
    href:
      'https://api.spotify.com/v1/search?query=garage&type=playlist&offset=0&limit=1',
    items: [
      {
        collaborative: false,
        description: '',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/7fdQkum2nvXwcaCKnBZ7rR',
        },
        href: 'https://api.spotify.com/v1/playlists/7fdQkum2nvXwcaCKnBZ7rR',
        id: '7fdQkum2nvXwcaCKnBZ7rR',
        images: [
          {
            height: null,
            url:
              'https://i.scdn.co/image/ab67706c0000da84b367e7b6daf27909411ee160',
            width: null,
          },
        ],
        name: "2019's Best Tracks: Garage & 2-step",
        owner: {
          display_name: 'Resident Advisor',
          external_urls: {
            spotify: 'https://open.spotify.com/user/residentadvisor',
          },
          href: 'https://api.spotify.com/v1/users/residentadvisor',
          id: 'residentadvisor',
          type: 'user',
          uri: 'spotify:user:residentadvisor',
        },
        primary_color: null,
        public: null,
        snapshot_id:
          'MjcsYmU5YjE2MDllODcxYzI4ODA5M2ZmNGY0ZDY1MzFhODVkYWViMTEwZg==',
        tracks: {
          href:
            'https://api.spotify.com/v1/playlists/7fdQkum2nvXwcaCKnBZ7rR/tracks',
          total: 19,
        },
        type: 'playlist',
        uri: 'spotify:playlist:7fdQkum2nvXwcaCKnBZ7rR',
      },
    ],
    limit: 1,
    next:
      'https://api.spotify.com/v1/search?query=garage&type=playlist&offset=1&limit=1',
    offset: 0,
    previous: null,
    total: 39136,
  },
};
