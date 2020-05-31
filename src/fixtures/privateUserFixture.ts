import { PrivateUser } from '../types/SpotifyObjects';

export const privateUserFixture: PrivateUser = {
  birthdate: '',
  country: 'US',
  display_name: 'griegs',
  email: '',
  explicit_content: {
    filter_enabled: false,
    filter_locked: false,
  },
  external_urls: {
    spotify: 'https://open.spotify.com/user/griegs',
  },
  followers: {
    href: null,
    total: 6,
  },
  href: 'https://api.spotify.com/v1/users/griegs',
  id: 'griegs',
  images: [
    {
      height: null,
      url:
        'https://profile-images.scdn.co/images/userprofile/default/b8930521b38b961f00e23b500f1d8e88c6048133',
      width: null,
    },
  ],
  product: 'premium',
  type: 'user',
  uri: 'spotify:user:griegs',
};
