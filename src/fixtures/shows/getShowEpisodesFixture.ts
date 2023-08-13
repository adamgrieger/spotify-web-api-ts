import { type GetShowEpisodesResponse } from '../../types/SpotifyResponses';

export const getShowEpisodesFixture: GetShowEpisodesResponse = {
  href: 'https://api.spotify.com/v1/shows/0ofXAdFIQQRsCYj9754UFx/episodes?offset=0&limit=1',
  items: [
    {
      audio_preview_url:
        'https://p.scdn.co/mp3-preview/f99edb8b6c4fa06bdffaf8a456ea1043fd386882',
      description:
        'Business in the front, you know the rest. Listen in as we discuss the lifestyle choice that is the mullet.  Learn more about your ad-choices at https://news.iheart.com/podcast-advertisers',
      duration_ms: 896183,
      explicit: false,
      external_urls: {
        spotify: 'https://open.spotify.com/episode/2u0RVbP3tRtZTOQoY3twlB',
      },
      href: 'https://api.spotify.com/v1/episodes/2u0RVbP3tRtZTOQoY3twlB',
      id: '2u0RVbP3tRtZTOQoY3twlB',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/883c24ddeb1e8f393226a7b5be5b0084ad0b0205',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/c1d7aae424cc88eb7a2105e6eab3db957027b023',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/e640ac2a8b8432e2bab4b1e94cf4c96dec65dac1',
          width: 64,
        },
      ],
      is_externally_hosted: false,
      is_playable: true,
      language: 'en',
      languages: ['en'],
      name: "Short Stuff: Mullets: 'Nuff Said",
      release_date: '2020-04-29',
      release_date_precision: 'day',
      resume_point: {
        fully_played: false,
        resume_position_ms: 0,
      },
      type: 'episode',
      uri: 'spotify:episode:2u0RVbP3tRtZTOQoY3twlB',
    },
  ],
  limit: 1,
  next: 'https://api.spotify.com/v1/shows/0ofXAdFIQQRsCYj9754UFx/episodes?offset=1&limit=1',
  offset: 0,
  previous: null,
  total: 1490,
};
