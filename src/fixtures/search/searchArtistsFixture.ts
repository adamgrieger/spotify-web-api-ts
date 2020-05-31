import { SearchArtistsResponse } from '../../types/SpotifyResponses';

export const searchArtistsFixture: SearchArtistsResponse = {
  artists: {
    href:
      'https://api.spotify.com/v1/search?query=mos&type=artist&offset=0&limit=1',
    items: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/0Mz5XE0kb1GBnbLQm2VbcO',
        },
        followers: {
          href: null,
          total: 846722,
        },
        genres: [
          'alternative hip hop',
          'conscious hip hop',
          'east coast hip hop',
          'gangster rap',
          'hardcore hip hop',
          'hip hop',
          'rap',
          'southern hip hop',
        ],
        href: 'https://api.spotify.com/v1/artists/0Mz5XE0kb1GBnbLQm2VbcO',
        id: '0Mz5XE0kb1GBnbLQm2VbcO',
        images: [
          {
            height: 1000,
            url:
              'https://i.scdn.co/image/d39cd5769332fb51014cc1cc9934c8890fcd49f7',
            width: 1000,
          },
          {
            height: 764,
            url:
              'https://i.scdn.co/image/eae06411463fb7ffea6a433c9d22f11418a1f7da',
            width: 600,
          },
          {
            height: 255,
            url:
              'https://i.scdn.co/image/d5fec1743c5af5eb5fccecee7b5a6037eb3bfa87',
            width: 200,
          },
          {
            height: 81,
            url:
              'https://i.scdn.co/image/cc0165937957a92af9a0b6cf5e85f61ab8ed043b',
            width: 64,
          },
        ],
        name: 'Mos Def',
        popularity: 67,
        type: 'artist',
        uri: 'spotify:artist:0Mz5XE0kb1GBnbLQm2VbcO',
      },
    ],
    limit: 1,
    next:
      'https://api.spotify.com/v1/search?query=mos&type=artist&offset=1&limit=1',
    offset: 0,
    previous: null,
    total: 7827,
  },
};
