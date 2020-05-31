import { SearchAlbumsResponse } from '../../types/SpotifyResponses';

export const searchAlbumsFixture: SearchAlbumsResponse = {
  albums: {
    href:
      'https://api.spotify.com/v1/search?query=merriweather&type=album&offset=0&limit=1',
    items: [
      {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4kwxTgCKMipBKhSnEstNKj',
            },
            href: 'https://api.spotify.com/v1/artists/4kwxTgCKMipBKhSnEstNKj',
            id: '4kwxTgCKMipBKhSnEstNKj',
            name: 'Animal Collective',
            type: 'artist',
            uri: 'spotify:artist:4kwxTgCKMipBKhSnEstNKj',
          },
        ],
        available_markets: ['CA', 'US'],
        external_urls: {
          spotify: 'https://open.spotify.com/album/5O9OXl9zAWMJTzawofxuan',
        },
        href: 'https://api.spotify.com/v1/albums/5O9OXl9zAWMJTzawofxuan',
        id: '5O9OXl9zAWMJTzawofxuan',
        images: [
          {
            height: 640,
            url:
              'https://i.scdn.co/image/ab67616d0000b273400b0756273d1168643d8891',
            width: 640,
          },
          {
            height: 300,
            url:
              'https://i.scdn.co/image/ab67616d00001e02400b0756273d1168643d8891',
            width: 300,
          },
          {
            height: 64,
            url:
              'https://i.scdn.co/image/ab67616d00004851400b0756273d1168643d8891',
            width: 64,
          },
        ],
        name: 'Merriweather Post Pavilion',
        release_date: '2009-01-20',
        release_date_precision: 'day',
        total_tracks: 11,
        type: 'album',
        uri: 'spotify:album:5O9OXl9zAWMJTzawofxuan',
      },
    ],
    limit: 1,
    next:
      'https://api.spotify.com/v1/search?query=merriweather&type=album&offset=1&limit=1',
    offset: 0,
    previous: null,
    total: 66,
  },
};
