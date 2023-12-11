import { type AudioFeaturesObject } from '../openapi';

export const audioFeaturesFixture = {
  danceability: 0.787,
  energy: 0.855,
  key: 1,
  loudness: -8.152,
  mode: 1,
  speechiness: 0.122,
  acousticness: 0.00437,
  instrumentalness: 0.00218,
  liveness: 0.0565,
  valence: 0.592,
  tempo: 139.184,
  type: 'audio_features',
  id: '7JvuiP16UTKCnieS9E2Bg3',
  uri: 'spotify:track:7JvuiP16UTKCnieS9E2Bg3',
  track_href: 'https://api.spotify.com/v1/tracks/7JvuiP16UTKCnieS9E2Bg3',
  analysis_url:
    'https://api.spotify.com/v1/audio-analysis/7JvuiP16UTKCnieS9E2Bg3',
  duration_ms: 229108,
  time_signature: 4,
} as AudioFeaturesObject;
