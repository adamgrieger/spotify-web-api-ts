import {
  audioAnalysisFixture,
  audioFeaturesFixture,
  getAudioFeaturesForTracksFixture,
  getTracksFixture,
  trackFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';
import { spotifyAxios } from '../helpers/spotifyAxios';
import { TracksApi } from './TracksApi';

jest.mock('../helpers/spotifyAxios');

const spotifyAxiosMock = spotifyAxios as jest.MockedFunction<
  typeof spotifyAxios
>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('TracksApi', () => {
  describe('getAudioAnalysisForTrack', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(audioAnalysisFixture);
    });

    it('should get audio analysis for a track', async () => {
      const http = new Http('token');
      const tracks = new TracksApi(http);
      const response = await tracks.getAudioAnalysisForTrack('foo');

      expect(response).toEqual(audioAnalysisFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/audio-analysis/foo',
        'GET',
        'token',
        undefined,
      );
    });
  });

  describe('getAudioFeaturesForTrack', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(audioFeaturesFixture);
    });

    it('should get audio features for a track', async () => {
      const http = new Http('token');
      const tracks = new TracksApi(http);
      const response = await tracks.getAudioFeaturesForTrack('foo');

      expect(response).toEqual(audioFeaturesFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/audio-features/foo',
        'GET',
        'token',
        undefined,
      );
    });
  });

  describe('getAudioFeaturesForTracks', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getAudioFeaturesForTracksFixture);
    });

    it('should get audio features for several tracks', async () => {
      const http = new Http('token');
      const tracks = new TracksApi(http);
      const response = await tracks.getAudioFeaturesForTracks(['foo', 'bar']);

      expect(response).toEqual(getAudioFeaturesForTracksFixture.audio_features);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/audio-features',
        'GET',
        'token',
        {
          params: {
            ids: ['foo', 'bar'],
          },
        },
      );
    });
  });

  describe('getTrack', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(trackFixture);
    });

    it('should get a track (without options)', async () => {
      const http = new Http('token');
      const tracks = new TracksApi(http);
      const response = await tracks.getTrack('foo');

      expect(response).toEqual(trackFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/tracks/foo',
        'GET',
        'token',
        undefined,
      );
    });

    it('should get a track (with options)', async () => {
      const http = new Http('token');
      const tracks = new TracksApi(http);
      const response = await tracks.getTrack('foo', { market: 'bar' });

      expect(response).toEqual(trackFixture);
      expect(spotifyAxiosMock).toBeCalledWith('/tracks/foo', 'GET', 'token', {
        params: {
          market: 'bar',
        },
      });
    });
  });

  describe('getTracks', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getTracksFixture);
    });

    it('should get several tracks (without options)', async () => {
      const http = new Http('token');
      const tracks = new TracksApi(http);
      const response = await tracks.getTracks(['foo', 'bar']);

      expect(response).toEqual(getTracksFixture.tracks);
      expect(spotifyAxiosMock).toBeCalledWith('/tracks', 'GET', 'token', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });

    it('should get several tracks (with options)', async () => {
      const http = new Http('token');
      const tracks = new TracksApi(http);
      const response = await tracks.getTracks(['foo', 'bar'], {
        market: 'baz',
      });

      expect(response).toEqual(getTracksFixture.tracks);
      expect(spotifyAxiosMock).toBeCalledWith('/tracks', 'GET', 'token', {
        params: {
          ids: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });
});
