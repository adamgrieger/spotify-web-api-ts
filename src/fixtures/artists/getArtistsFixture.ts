import { type ArtistObject } from '../../openapi';

export const getArtistsFixture: { artists: ArtistObject[] } = {
  artists: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/2leze82lbuNUn3K4c7nS1B',
      },
      followers: {
        href: null,
        total: 5954,
      },
      genres: ['bass music', 'dubstep', 'future garage'],
      href: 'https://api.spotify.com/v1/artists/2leze82lbuNUn3K4c7nS1B',
      id: '2leze82lbuNUn3K4c7nS1B',
      images: [
        {
          height: 400,
          url: 'https://i.scdn.co/image/2f5e42dfdf965ae8fc2715253ea1f99df9449c12',
          width: 600,
        },
        {
          height: 133,
          url: 'https://i.scdn.co/image/3f5985f856a080f7939385f083aeb138172c73fc',
          width: 200,
        },
        {
          height: 43,
          url: 'https://i.scdn.co/image/0a848ead4be86b0b056bd2f253da5d5af4a455c1',
          width: 64,
        },
      ],
      name: '2562',
      popularity: 16,
      type: 'artist',
      uri: 'spotify:artist:2leze82lbuNUn3K4c7nS1B',
    } as ArtistObject,
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/77bG3jpmWXOxpmZcVjPayy',
      },
      followers: {
        href: null,
        total: 4242,
      },
      genres: ['bass music', 'future garage'],
      href: 'https://api.spotify.com/v1/artists/77bG3jpmWXOxpmZcVjPayy',
      id: '77bG3jpmWXOxpmZcVjPayy',
      images: [
        {
          height: 1000,
          url: 'https://i.scdn.co/image/6c2a159aebbcee44d5245147edaaa84e904c939f',
          width: 1000,
        },
        {
          height: 640,
          url: 'https://i.scdn.co/image/50146b5d8d5c22c1901157933b833bbfa3f31fd6',
          width: 640,
        },
        {
          height: 200,
          url: 'https://i.scdn.co/image/6b54682700e4d82d2e8dc8ba3cc746aa89267cc9',
          width: 200,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/795cef648268204f0b498fbd38e860517ce3aa8b',
          width: 64,
        },
      ],
      name: 'A Made Up Sound',
      popularity: 12,
      type: 'artist',
      uri: 'spotify:artist:77bG3jpmWXOxpmZcVjPayy',
    } as ArtistObject,
  ],
};
