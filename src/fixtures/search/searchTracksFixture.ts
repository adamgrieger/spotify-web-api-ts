import { SearchTracksResponse } from '../../types/SpotifyResponses';

export const searchTracksFixture: SearchTracksResponse = {
  tracks: {
    href:
      'https://api.spotify.com/v1/search?query=vroom&type=track&offset=0&limit=1',
    items: [
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5',
              },
              href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
              id: '25uiPmTg16RbhZWAqwLBy5',
              name: 'Charli XCX',
              type: 'artist',
              uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5',
            },
          ],
          available_markets: [
            'AD',
            'AE',
            'AR',
            'AT',
            'AU',
            'BE',
            'BG',
            'BH',
            'BO',
            'BR',
            'CA',
            'CH',
            'CL',
            'CO',
            'CR',
            'CY',
            'CZ',
            'DE',
            'DK',
            'DO',
            'DZ',
            'EC',
            'EE',
            'EG',
            'ES',
            'FI',
            'FR',
            'GB',
            'GR',
            'GT',
            'HK',
            'HN',
            'HU',
            'ID',
            'IE',
            'IL',
            'IS',
            'IT',
            'JO',
            'JP',
            'KW',
            'LB',
            'LI',
            'LT',
            'LU',
            'LV',
            'MA',
            'MC',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'OM',
            'PA',
            'PE',
            'PH',
            'PL',
            'PS',
            'PT',
            'PY',
            'QA',
            'RO',
            'SE',
            'SG',
            'SK',
            'SV',
            'TH',
            'TN',
            'TR',
            'TW',
            'US',
            'UY',
            'VN',
            'ZA',
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/261QvR3MgGdyL2HyYIlgfd',
          },
          href: 'https://api.spotify.com/v1/albums/261QvR3MgGdyL2HyYIlgfd',
          id: '261QvR3MgGdyL2HyYIlgfd',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b27345fefe45b11cde997046d567',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e0245fefe45b11cde997046d567',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d0000485145fefe45b11cde997046d567',
              width: 64,
            },
          ],
          name: 'Vroom Vroom EP',
          release_date: '2016-02-26',
          release_date_precision: 'day',
          total_tracks: 4,
          type: 'album',
          uri: 'spotify:album:261QvR3MgGdyL2HyYIlgfd',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5',
            },
            href: 'https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5',
            id: '25uiPmTg16RbhZWAqwLBy5',
            name: 'Charli XCX',
            type: 'artist',
            uri: 'spotify:artist:25uiPmTg16RbhZWAqwLBy5',
          },
        ],
        available_markets: [
          'AD',
          'AE',
          'AR',
          'AT',
          'AU',
          'BE',
          'BG',
          'BH',
          'BO',
          'BR',
          'CA',
          'CH',
          'CL',
          'CO',
          'CR',
          'CY',
          'CZ',
          'DE',
          'DK',
          'DO',
          'DZ',
          'EC',
          'EE',
          'EG',
          'ES',
          'FI',
          'FR',
          'GB',
          'GR',
          'GT',
          'HK',
          'HN',
          'HU',
          'ID',
          'IE',
          'IL',
          'IS',
          'IT',
          'JO',
          'JP',
          'KW',
          'LB',
          'LI',
          'LT',
          'LU',
          'LV',
          'MA',
          'MC',
          'MT',
          'MX',
          'MY',
          'NI',
          'NL',
          'NO',
          'NZ',
          'OM',
          'PA',
          'PE',
          'PH',
          'PL',
          'PS',
          'PT',
          'PY',
          'QA',
          'RO',
          'SE',
          'SG',
          'SK',
          'SV',
          'TH',
          'TN',
          'TR',
          'TW',
          'US',
          'UY',
          'VN',
          'ZA',
        ],
        disc_number: 1,
        duration_ms: 193270,
        explicit: true,
        external_ids: {
          isrc: 'GBAHS1600092',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/5hyq3LBlCfjRQAFkdQwe8o',
        },
        href: 'https://api.spotify.com/v1/tracks/5hyq3LBlCfjRQAFkdQwe8o',
        id: '5hyq3LBlCfjRQAFkdQwe8o',
        is_local: false,
        name: 'Vroom Vroom',
        popularity: 63,
        preview_url:
          'https://p.scdn.co/mp3-preview/133b809685317900967444d9e98a535b45b083db?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:5hyq3LBlCfjRQAFkdQwe8o',
      },
    ],
    limit: 1,
    next:
      'https://api.spotify.com/v1/search?query=vroom&type=track&offset=1&limit=1',
    offset: 0,
    previous: null,
    total: 930,
  },
};