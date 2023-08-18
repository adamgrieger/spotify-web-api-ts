import {
  type ChapterObject,
  type PagingSimplifiedChapterObject,
} from '../../openapi';

export const getAudiobookChaptersFixture: PagingSimplifiedChapterObject = {
  href: 'https://api.spotify.com/v1/me/shows?offset=0&limit=20',
  limit: 20,
  next: 'https://api.spotify.com/v1/me/shows?offset=1&limit=1',
  offset: 0,
  previous: 'https://api.spotify.com/v1/me/shows?offset=1&limit=1',
  total: 4,
  items: [
    {
      audio_preview_url:
        'https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17',
      available_markets: ['string'],
      chapter_number: 1,
      description:
        'A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.',
      html_description:
        '<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>',
      duration_ms: 1686230,
      explicit: false,
      external_urls: {
        spotify: 'string',
      },
      href: 'https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ',
      id: '5Xt5DXGzch68nYYamXrNxZ',
      images: [
        {
          url: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
          height: 300,
          width: 300,
        },
      ],
      is_playable: false,
      languages: ['fr', 'en'],
      name: 'Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators',
      release_date: '1981-12-15',
      release_date_precision: 'day',
      resume_point: {
        fully_played: false,
        resume_position_ms: 0,
      },
      type: 'episode',
      uri: 'spotify:episode:0zLhl3WsOCQHbe1BPTiHgr',
      restrictions: {
        reason: 'string',
      },
    } as ChapterObject,
  ],
};
