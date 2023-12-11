import {
  type ArtistObject,
  type CursorPagingSimplifiedArtistObject,
} from '../../openapi';

export const getFollowedArtistsFixture: {
  artists: CursorPagingSimplifiedArtistObject;
} = {
  artists: {
    items: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/029y4wr8YYFoqPBahe8Ddz',
        },
        followers: {
          href: null,
          total: 23554,
        },
        genres: ['conscious hip hop', 'underground rap'],
        href: 'https://api.spotify.com/v1/artists/029y4wr8YYFoqPBahe8Ddz',
        id: '029y4wr8YYFoqPBahe8Ddz',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273fb09b3fbd064caabb3142c64',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02fb09b3fbd064caabb3142c64',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851fb09b3fbd064caabb3142c64',
            width: 64,
          },
        ],
        name: 'Common Market',
        popularity: 38,
        type: 'artist',
        uri: 'spotify:artist:029y4wr8YYFoqPBahe8Ddz',
      } as ArtistObject,
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/2L2unNFaPbDxjg3NqzpqhJ',
        },
        followers: {
          href: null,
          total: 66267,
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
            url: 'https://i.scdn.co/image/5ae35abbcca16ff670722c6f8f176b2314e6526d',
            width: 640,
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/fc8e55caa8a46d223a3e0c6d46afb9b02d1a4384',
            width: 320,
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/b80db1c7becac12f9c63bb29d3990225dd29a934',
            width: 160,
          },
        ],
        name: 'Teebs',
        popularity: 47,
        type: 'artist',
        uri: 'spotify:artist:2L2unNFaPbDxjg3NqzpqhJ',
      } as ArtistObject,
    ],
    next: 'https://api.spotify.com/v1/me/following?type=artist&after=2L2unNFaPbDxjg3NqzpqhJ&limit=2',
    total: 9,
    cursors: {
      after: '2L2unNFaPbDxjg3NqzpqhJ',
    },
    limit: 2,
    href: 'https://api.spotify.com/v1/me/following?type=artist&limit=2',
  },
};
