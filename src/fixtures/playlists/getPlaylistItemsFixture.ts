import { GetPlaylistItemsResponse } from '../../types';

export const getPlaylistItemsFixture: GetPlaylistItemsResponse = {
  href:
    'https://api.spotify.com/v1/playlists/6SAtV2bMjUbQTV37X51F3u/tracks?offset=0&limit=1',
  items: [
    {
      added_at: '2019-07-10T01:12:07Z',
      added_by: {
        external_urls: {
          spotify: 'https://open.spotify.com/user/griegs',
        },
        href: 'https://api.spotify.com/v1/users/griegs',
        id: 'griegs',
        type: 'user',
        uri: 'spotify:user:griegs',
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5cMgGlA1xGyeAB2ctYlRdZ',
              },
              href: 'https://api.spotify.com/v1/artists/5cMgGlA1xGyeAB2ctYlRdZ',
              id: '5cMgGlA1xGyeAB2ctYlRdZ',
              name: 'Gang Starr',
              type: 'artist',
              uri: 'spotify:artist:5cMgGlA1xGyeAB2ctYlRdZ',
            },
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/0uBm0Bp9aHtt0BOmg4HCjJ',
          },
          href: 'https://api.spotify.com/v1/albums/0uBm0Bp9aHtt0BOmg4HCjJ',
          id: '0uBm0Bp9aHtt0BOmg4HCjJ',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b2730fa94d62fd6cea145ef9bbb5',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e020fa94d62fd6cea145ef9bbb5',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d000048510fa94d62fd6cea145ef9bbb5',
              width: 64,
            },
          ],
          name: 'Moment Of Truth',
          release_date: '1998-01-01',
          release_date_precision: 'day',
          total_tracks: 20,
          type: 'album',
          uri: 'spotify:album:0uBm0Bp9aHtt0BOmg4HCjJ',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5cMgGlA1xGyeAB2ctYlRdZ',
            },
            href: 'https://api.spotify.com/v1/artists/5cMgGlA1xGyeAB2ctYlRdZ',
            id: '5cMgGlA1xGyeAB2ctYlRdZ',
            name: 'Gang Starr',
            type: 'artist',
            uri: 'spotify:artist:5cMgGlA1xGyeAB2ctYlRdZ',
          },
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 247333,
        episode: false,
        explicit: true,
        external_ids: {
          isrc: 'USVI29800594',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/3JHx8dYpC7DuAAtgzCshaa',
        },
        href: 'https://api.spotify.com/v1/tracks/3JHx8dYpC7DuAAtgzCshaa',
        id: '3JHx8dYpC7DuAAtgzCshaa',
        is_local: false,
        name: 'Moment Of Truth',
        popularity: 0,
        preview_url: null,
        track: true,
        track_number: 8,
        type: 'track',
        uri: 'spotify:track:3JHx8dYpC7DuAAtgzCshaa',
      },
      video_thumbnail: {
        url: null,
      },
    },
  ],
  limit: 1,
  next:
    'https://api.spotify.com/v1/playlists/6SAtV2bMjUbQTV37X51F3u/tracks?offset=1&limit=1',
  offset: 0,
  previous: null,
  total: 51,
};
