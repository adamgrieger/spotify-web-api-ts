import { SearchEpisodesResponse } from '../../types/SpotifyResponses';

export const searchEpisodesFixture: SearchEpisodesResponse = {
  episodes: {
    href:
      'https://api.spotify.com/v1/search?query=institutionalized&type=episode&offset=0&limit=1',
    items: [
      {
        audio_preview_url:
          'https://p.scdn.co/mp3-preview/08b6302abfd04a5b570c98778386c2292698eb3b',
        description:
          'Our season long examination of Kendrick Lamar’s To Pimp a Butterfly continues with the album’s fourth track "Institutionalized." After the introduction to the album’s ever-important narrative poem, Kendrick begins to unpack the complexities of his new life of stardom. It begins with Institutionalized, a bouncing, head-nodding track that details Kendrick’s frustrations with his Compton friends’ behavior at the BET awards. By naming the song "Institutionalized," Kendrick alludes to broader issues that plague our country and manifest in the behavior of the impoverished and repressed population. In the wake of the Black Lives Matter movement, the recent trend of athletes, musicians, and entertainers using their influence to shed light on social issues is evidence that perhaps many celebrities are more aware of the potential of their platforms.',
        duration_ms: 1731892,
        explicit: true,
        external_urls: {
          spotify: 'https://open.spotify.com/episode/5VhaAEtTrKQ1NSneHsXK6C',
        },
        href: 'https://api.spotify.com/v1/episodes/5VhaAEtTrKQ1NSneHsXK6C',
        id: '5VhaAEtTrKQ1NSneHsXK6C',
        images: [
          {
            height: 640,
            url:
              'https://i.scdn.co/image/79396b6b84ae10498489feb7d22640caaed34269',
            width: 640,
          },
          {
            height: 300,
            url:
              'https://i.scdn.co/image/d8cfa4ec49dd676b85ddbda5c8f79c6ea039cf15',
            width: 300,
          },
          {
            height: 64,
            url:
              'https://i.scdn.co/image/f21af3f28df2e76b417b8c839787ae42ae049a3e',
            width: 64,
          },
        ],
        is_externally_hosted: false,
        is_playable: true,
        language: 'en',
        languages: ['en'],
        name: 'S1E6 - Institutionalized by Kendrick Lamar',
        release_date: '2018-05-01',
        release_date_precision: 'day',
        type: 'episode',
        uri: 'spotify:episode:5VhaAEtTrKQ1NSneHsXK6C',
      },
    ],
    limit: 1,
    next:
      'https://api.spotify.com/v1/search?query=institutionalized&type=episode&offset=1&limit=1',
    offset: 0,
    previous: null,
    total: 63,
  },
};
