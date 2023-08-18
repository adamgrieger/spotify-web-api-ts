import {
  type QueueObject,
  type SimplifiedAlbumObject,
  type SimplifiedArtistObject,
  type TrackObject,
} from '../../openapi';

export const getQueueFixture: QueueObject = {
  currently_playing: {
    album: {
      album_type: 'compilation',
      total_tracks: 9,
      available_markets: ['CA', 'BR', 'IT'],
      external_urls: {
        spotify: 'string',
      },
      href: 'string',
      id: '2up3OPMp9Tb4dAKM2erWXQ',
      images: [
        {
          url: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
          height: 300,
          width: 300,
        },
      ],
      name: 'string',
      release_date: '1981-12',
      release_date_precision: 'year',
      restrictions: {
        reason: 'market',
      },
      type: 'album',
      uri: 'spotify:album:2up3OPMp9Tb4dAKM2erWXQ',
      copyrights: [
        {
          text: 'string',
          type: 'string',
        },
      ],
      external_ids: {
        isrc: 'string',
        ean: 'string',
        upc: 'string',
      },
      genres: ['Egg punk', 'Noise rock'],
      label: 'string',
      popularity: 0,
      album_group: 'compilation',
      artists: [
        {
          external_urls: {
            spotify: 'string',
          },
          href: 'string',
          id: 'string',
          name: 'string',
          type: 'artist',
          uri: 'string',
        },
      ],
    },
    artists: [
      {
        external_urls: {
          spotify: 'string',
        },
        followers: {
          href: 'string',
          total: 0,
        },
        genres: ['Prog rock', 'Grunge'],
        href: 'string',
        id: 'string',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
            height: 300,
            width: 300,
          },
        ],
        name: 'string',
        popularity: 0,
        type: 'artist',
        uri: 'string',
      },
    ],
    available_markets: ['string'],
    disc_number: 0,
    duration_ms: 0,
    explicit: false,
    external_ids: {
      isrc: 'string',
      ean: 'string',
      upc: 'string',
    },
    external_urls: {
      spotify: 'string',
    },
    href: 'string',
    id: 'string',
    is_playable: false,
    linked_from: {},
    restrictions: {
      reason: 'string',
    },
    name: 'string',
    popularity: 0,
    preview_url: 'string',
    track_number: 0,
    type: 'track',
    uri: 'string',
    is_local: false,
  } as TrackObject,
  queue: [
    {
      album: {
        album_type: 'compilation',
        total_tracks: 9,
        available_markets: ['CA', 'BR', 'IT'],
        external_urls: {
          spotify: 'string',
        },
        href: 'string',
        id: '2up3OPMp9Tb4dAKM2erWXQ',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
            height: 300,
            width: 300,
          },
        ],
        name: 'string',
        release_date: '1981-12',
        release_date_precision: 'year',
        restrictions: {
          reason: 'market',
        },
        type: 'album',
        uri: 'spotify:album:2up3OPMp9Tb4dAKM2erWXQ',
        copyrights: [
          {
            text: 'string',
            type: 'string',
          },
        ],
        external_ids: {
          isrc: 'string',
          ean: 'string',
          upc: 'string',
        },
        genres: ['Egg punk', 'Noise rock'],
        label: 'string',
        popularity: 0,
        album_group: 'compilation',
        artists: [
          {
            external_urls: {
              spotify: 'string',
            },
            href: 'string',
            id: 'string',
            name: 'string',
            type: 'artist',
            uri: 'string',
          },
        ],
      } as SimplifiedAlbumObject,
      artists: [
        {
          external_urls: {
            spotify: 'string',
          },
          followers: {
            href: 'string',
            total: 0,
          },
          genres: ['Prog rock', 'Grunge'],
          href: 'string',
          id: 'string',
          images: [
            {
              url: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
              height: 300,
              width: 300,
            },
          ],
          name: 'string',
          popularity: 0,
          type: 'artist',
          uri: 'string',
        } as SimplifiedArtistObject,
      ],
      available_markets: ['string'],
      disc_number: 0,
      duration_ms: 0,
      explicit: false,
      external_ids: {
        isrc: 'string',
        ean: 'string',
        upc: 'string',
      },
      external_urls: {
        spotify: 'string',
      },
      href: 'string',
      id: 'string',
      is_playable: false,
      linked_from: {},
      restrictions: {
        reason: 'string',
      },
      name: 'string',
      popularity: 0,
      preview_url: 'string',
      track_number: 0,
      type: 'track',
      uri: 'string',
      is_local: false,
    } as TrackObject,
  ],
};
