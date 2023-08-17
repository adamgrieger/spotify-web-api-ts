import { type ArtistObject } from '../openapi';

export const artistFixture = {
  external_urls: {
    spotify: 'https://open.spotify.com/artist/5c3GLXai8YOMid29ZEuR9y',
  },
  followers: {
    href: null,
    total: 442801,
  },
  genres: [
    'british folk',
    'chamber pop',
    'folk',
    'folk rock',
    'freak folk',
    'indie folk',
    'melancholia',
    'rock',
    'roots rock',
    'singer-songwriter',
    'slow core',
  ],
  href: 'https://api.spotify.com/v1/artists/5c3GLXai8YOMid29ZEuR9y',
  id: '5c3GLXai8YOMid29ZEuR9y',
  images: [
    {
      height: 1484,
      url: 'https://i.scdn.co/image/d364b498f85ae764cd278fbba9a8ed7f00c3e434',
      width: 1000,
    },
    {
      height: 950,
      url: 'https://i.scdn.co/image/087fb05851e498c2791ca99000acf35b0fd49f19',
      width: 640,
    },
    {
      height: 297,
      url: 'https://i.scdn.co/image/9a74a7d885abe5da94ac812546d0146cfe4a1ceb',
      width: 200,
    },
    {
      height: 95,
      url: 'https://i.scdn.co/image/267080662cf3c019ea8020a4e0e8dd5a7be4d909',
      width: 64,
    },
  ],
  name: 'Nick Drake',
  popularity: 65,
  type: 'artist',
  uri: 'spotify:artist:5c3GLXai8YOMid29ZEuR9y',
} as ArtistObject;
