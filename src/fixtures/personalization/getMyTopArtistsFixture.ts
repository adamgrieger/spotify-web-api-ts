import { GetMyTopArtistsResponse } from '../../types/SpotifyResponses';

export const getMyTopArtistsFixture: GetMyTopArtistsResponse = {
  items: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/7Eu1txygG6nJttLHbZdQOh',
      },
      followers: {
        href: null,
        total: 427727,
      },
      genres: [
        'alternative dance',
        'electronica',
        'folktronica',
        'indie soul',
        'indietronica',
        'intelligent dance music',
        'new rave',
      ],
      href: 'https://api.spotify.com/v1/artists/7Eu1txygG6nJttLHbZdQOh',
      id: '7Eu1txygG6nJttLHbZdQOh',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/f96458025a0640bf1d3c8f764a42ec21d4db1eae',
          width: 640,
        },
        {
          height: 320,
          url:
            'https://i.scdn.co/image/4547d5656309079fdfc73bef86a3c327cd59a3ea',
          width: 320,
        },
        {
          height: 160,
          url:
            'https://i.scdn.co/image/e512f91d540d864906d36a850ecb9ad5d562d262',
          width: 160,
        },
      ],
      name: 'Four Tet',
      popularity: 69,
      type: 'artist',
      uri: 'spotify:artist:7Eu1txygG6nJttLHbZdQOh',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/2L2unNFaPbDxjg3NqzpqhJ',
      },
      followers: {
        href: null,
        total: 66312,
      },
      genres: [
        'bass music',
        'chillwave',
        'electronica',
        'indie jazz',
        'indietronica',
        'wonky',
      ],
      href: 'https://api.spotify.com/v1/artists/2L2unNFaPbDxjg3NqzpqhJ',
      id: '2L2unNFaPbDxjg3NqzpqhJ',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/5ae35abbcca16ff670722c6f8f176b2314e6526d',
          width: 640,
        },
        {
          height: 320,
          url:
            'https://i.scdn.co/image/fc8e55caa8a46d223a3e0c6d46afb9b02d1a4384',
          width: 320,
        },
        {
          height: 160,
          url:
            'https://i.scdn.co/image/b80db1c7becac12f9c63bb29d3990225dd29a934',
          width: 160,
        },
      ],
      name: 'Teebs',
      popularity: 47,
      type: 'artist',
      uri: 'spotify:artist:2L2unNFaPbDxjg3NqzpqhJ',
    },
  ],
  total: 50,
  limit: 2,
  offset: 0,
  href: 'https://api.spotify.com/v1/me/top/artists?limit=2&offset=0',
  previous: null,
  next: 'https://api.spotify.com/v1/me/top/artists?limit=2&offset=2',
};
