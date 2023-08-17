import {
  type PagingSavedShowObject,
  type SavedShowObject,
} from '../../openapi';

export const getSavedShowsFixture: PagingSavedShowObject = {
  href: 'https://api.spotify.com/v1/me/shows?offset=0&limit=2',
  items: [
    {
      added_at: '2020-04-20T02:13:04Z',
      show: {
        available_markets: [
          'AR',
          'AT',
          'AU',
          'BE',
          'BG',
          'CA',
          'CH',
          'CL',
          'CR',
          'CZ',
          'DE',
          'DK',
          'EC',
          'EE',
          'FI',
          'FR',
          'GB',
          'GT',
          'HK',
          'HU',
          'ID',
          'IE',
          'IT',
          'JP',
          'LI',
          'LV',
          'MT',
          'MX',
          'MY',
          'NI',
          'NL',
          'NO',
          'NZ',
          'PA',
          'PE',
          'PH',
          'PL',
          'PT',
          'PY',
          'SE',
          'SG',
          'SV',
          'TH',
          'TR',
          'US',
          'UY',
        ],
        copyrights: [],
        description:
          "Learn more about the albums you love with Dissect, serialized music podcast from Spotify Studios. Dissect dives deep into albums like Kendrick Lamar's To Pimp a Butterfly (Season 1), Kanye West's My Beautiful Dark Twisted Fantasy (Season 2), Frank Ocean's Blonde (Season 3), and Tyler the Creator's Flower Boy (Season 4), forensically dissecting one song per episode.",
        explicit: true,
        external_urls: {
          spotify: 'https://open.spotify.com/show/2b025hq3gJ17tQdxS3aV43',
        },
        href: 'https://api.spotify.com/v1/shows/2b025hq3gJ17tQdxS3aV43',
        html_description:
          "<p>Learn more about the albums you love with Dissect, serialized music podcast from Spotify Studios. Dissect dives deep into albums like Kendrick Lamar's To Pimp a Butterfly (Season 1), Kanye West's My Beautiful Dark Twisted Fantasy (Season 2), Frank Ocean's Blonde (Season 3), and Tyler the Creator's Flower Boy (Season 4), forensically dissecting one song per episode.</p>",
        id: '2b025hq3gJ17tQdxS3aV43',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/7f2ffb09d7f47fcb31420c3299bfb4675c13877f',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/cd96ee6735f2a79f2ea39f8522375ef867923e59',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/1f2031fee48e1d27e8d1fea217de23554e22b74d',
            width: 64,
          },
        ],
        is_externally_hosted: false,
        languages: ['en'],
        media_type: 'audio',
        name: 'Dissect',
        publisher: 'Spotify Studios',
        total_episodes: 0,
        type: 'show',
        uri: 'spotify:show:2b025hq3gJ17tQdxS3aV43',
      },
    } as SavedShowObject,
    {
      added_at: '2020-04-06T16:55:17Z',
      show: {
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
          'IN',
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
        copyrights: [],
        description:
          'Nyheter på lätt svenska för dig som är ny i Sverige. Ansvarig utgivare: Klas Wolf-Watz',
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/show/7qV2tMPbnZu18p2h0w6vvR',
        },
        href: 'https://api.spotify.com/v1/shows/7qV2tMPbnZu18p2h0w6vvR',
        html_description:
          '<p>Nyheter på lätt svenska för dig som är ny i Sverige. Ansvarig utgivare: Klas Wolf-Watz</p>',
        id: '7qV2tMPbnZu18p2h0w6vvR',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/29126c05d08eac150b0e9a4cc61f13885c555ff1',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/1ec0eba6e85fb1bc30221fe10092488111533a15',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/8870c75630935db5290d2162245b611f0fb40b14',
            width: 64,
          },
        ],
        is_externally_hosted: false,
        languages: ['sv'],
        media_type: 'audio',
        name: 'Radio Sweden på lätt svenska',
        publisher: 'Sveriges Radio',
        total_episodes: 0,
        type: 'show',
        uri: 'spotify:show:7qV2tMPbnZu18p2h0w6vvR',
      },
    } as SavedShowObject,
  ],
  limit: 2,
  next: null,
  offset: 0,
  previous: null,
  total: 2,
};
