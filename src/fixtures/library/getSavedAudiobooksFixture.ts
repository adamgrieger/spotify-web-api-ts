import {
  type PagingSimplifiedAudiobookObject,
  type SimplifiedAudiobookObject,
} from '../../openapi';

export const getSavedAudiobooksFixture: PagingSimplifiedAudiobookObject = {
  href: 'https://api.spotify.com/v1/me/shows?offset=0&limit=20',
  limit: 20,
  next: 'https://api.spotify.com/v1/me/shows?offset=1&limit=1',
  offset: 0,
  previous: 'https://api.spotify.com/v1/me/shows?offset=1&limit=1',
  total: 4,
  items: [
    {
      authors: [
        {
          name: 'string',
        },
      ],
      available_markets: ['string'],
      copyrights: [
        {
          text: 'string',
          type: 'string',
        },
      ],
      description: 'string',
      html_description: 'string',
      edition: 'Unabridged',
      explicit: false,
      external_urls: {
        spotify: 'string',
      },
      href: 'string',
      id: 'string',
      images: [
        {
          url: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
          height: 300,
          width: 300,
        },
      ],
      languages: ['string'],
      media_type: 'string',
      name: 'string',
      narrators: [
        {
          name: 'string',
        },
      ],
      publisher: 'string',
      type: 'audiobook',
      uri: 'string',
      total_chapters: 0,
    } as SimplifiedAudiobookObject,
  ],
};
