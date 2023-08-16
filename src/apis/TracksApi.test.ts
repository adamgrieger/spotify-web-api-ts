import { type MockedClass } from 'vitest';

import {
  audioAnalysisFixture,
  audioFeaturesFixture,
  getAudioFeaturesForTracksFixture,
  getTracksFixture,
  trackFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';

import { TracksApi } from './TracksApi';

vi.mock('../helpers/Http');

const HttpMock = Http as MockedClass<typeof Http>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function setup() {
  const httpMock = new HttpMock('token');
  const tracks = new TracksApi();

  return { httpMock, tracks };
}

describe('TracksApi', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getAudioAnalysisForTrack', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(audioAnalysisFixture);
    });

    it.todo('should get audio analysis for a track', async () => {
      const { httpMock, tracks } = setup();

      const response = await tracks.getAudioAnalysisForTrack('foo');

      expect(response).toEqual(audioAnalysisFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/audio-analysis/foo');
    });
  });

  describe('getAudioFeaturesForTrack', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(audioFeaturesFixture);
    });

    it.todo('should get audio features for a track', async () => {
      const { httpMock, tracks } = setup();

      const response = await tracks.getAudioFeaturesForTrack('foo');

      expect(response).toEqual(audioFeaturesFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/audio-features/foo');
    });
  });

  describe('getAudioFeaturesForTracks', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(
        getAudioFeaturesForTracksFixture,
      );
    });

    it.todo('should get audio features for several tracks', async () => {
      const { httpMock, tracks } = setup();

      const response = await tracks.getAudioFeaturesForTracks(['foo', 'bar']);

      expect(response).toEqual(getAudioFeaturesForTracksFixture.audio_features);
      expect(httpMock.get).toHaveBeenCalledWith('/audio-features', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });
  });

  describe('getTrack', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(trackFixture);
    });

    it.todo('should get a track (without options)', async () => {
      const { httpMock, tracks } = setup();

      const response = await tracks.getTrack('foo');

      expect(response).toEqual(trackFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/tracks/foo', undefined);
    });

    it.todo('should get a track (with options)', async () => {
      const { httpMock, tracks } = setup();

      const response = await tracks.getTrack('foo', { market: 'bar' });

      expect(response).toEqual(trackFixture);
      expect(httpMock.get).toHaveBeenCalledWith('/tracks/foo', {
        params: {
          market: 'bar',
        },
      });
    });
  });

  describe('getTracks', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getTracksFixture);
    });

    it.todo('should get several tracks (without options)', async () => {
      const { httpMock, tracks } = setup();

      const response = await tracks.getTracks(['foo', 'bar']);

      expect(response).toEqual(getTracksFixture.tracks);
      expect(httpMock.get).toHaveBeenCalledWith('/tracks', {
        params: {
          ids: ['foo', 'bar'],
        },
      });
    });

    it.todo('should get several tracks (with options)', async () => {
      const { httpMock, tracks } = setup();

      const response = await tracks.getTracks(['foo', 'bar'], {
        market: 'baz',
      });

      expect(response).toEqual(getTracksFixture.tracks);
      expect(httpMock.get).toHaveBeenCalledWith('/tracks', {
        params: {
          ids: ['foo', 'bar'],
          market: 'baz',
        },
      });
    });
  });
});
