import { GetUserPlaylistsResponse } from '../../types';

export const getUserPlaylistsFixture: GetUserPlaylistsResponse = {
  href: 'https://api.spotify.com/v1/users/griegs/playlists?offset=1&limit=1',
  items: [
    {
      collaborative: false,
      description:
        'One song per artist, with some caveats. Features don&#x27;t count towards that artist&#x27;s slot. Collaborative efforts are treated separately (e.g. Freddie Gibbs &amp; Madlib, Black Star, etc.). Individual aliases of a single artist are considered separate (e.g. MF DOOM and Viktor Vaughn).',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/6SAtV2bMjUbQTV37X51F3u',
      },
      href: 'https://api.spotify.com/v1/playlists/6SAtV2bMjUbQTV37X51F3u',
      id: '6SAtV2bMjUbQTV37X51F3u',
      images: [
        {
          height: 640,
          url:
            'https://mosaic.scdn.co/640/ab67616d0000b2733a76edacefe2e7a589222787ab67616d0000b273b1178724f4be59abf7acc6c5ab67616d0000b273e3f907e70bc502a263ee1bc0ab67616d0000b273fab3bfcc801b1d28701da1df',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://mosaic.scdn.co/300/ab67616d0000b2733a76edacefe2e7a589222787ab67616d0000b273b1178724f4be59abf7acc6c5ab67616d0000b273e3f907e70bc502a263ee1bc0ab67616d0000b273fab3bfcc801b1d28701da1df',
          width: 300,
        },
        {
          height: 60,
          url:
            'https://mosaic.scdn.co/60/ab67616d0000b2733a76edacefe2e7a589222787ab67616d0000b273b1178724f4be59abf7acc6c5ab67616d0000b273e3f907e70bc502a263ee1bc0ab67616d0000b273fab3bfcc801b1d28701da1df',
          width: 60,
        },
      ],
      name: 'Artist Highlander',
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
      public: true,
      snapshot_id:
        'NjAsNjA1ZDIxNjFiZGJmNTkyMWNlMGFlYTZkY2E4ODIxMTEwMmYwOGUzOQ==',
      tracks: {
        href:
          'https://api.spotify.com/v1/playlists/6SAtV2bMjUbQTV37X51F3u/tracks',
        total: 52,
      },
      type: 'playlist',
      uri: 'spotify:playlist:6SAtV2bMjUbQTV37X51F3u',
    },
  ],
  limit: 1,
  next: 'https://api.spotify.com/v1/users/griegs/playlists?offset=2&limit=1',
  offset: 1,
  previous:
    'https://api.spotify.com/v1/users/griegs/playlists?offset=0&limit=1',
  total: 40,
};
