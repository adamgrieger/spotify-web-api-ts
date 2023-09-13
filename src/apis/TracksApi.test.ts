import { type SpyInstance } from 'vitest';

import {
  audioAnalysisFixture,
  audioFeaturesFixture,
  getAudioFeaturesForTracksFixture,
  getTracksFixture,
  trackFixture,
} from '../fixtures';
import { TracksService } from '../openapi/services/TracksService';

import { TracksApi } from './TracksApi';

const tracks = new TracksApi();

describe('TracksApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('getAudioAnalysisForTrack', () => {
    it('should get audio analysis for a track', async () => {
      const getAudioAnalysisForTrackSpy = vi
        .spyOn(TracksService, 'getAudioAnalysis')
        .mockResolvedValue(audioAnalysisFixture);
      const response = await tracks.getAudioAnalysisForTrack('foo');

      expect(response).toEqual(audioAnalysisFixture);
      expect(getAudioAnalysisForTrackSpy).toHaveBeenCalledWith('foo');
    });
  });

  describe('getAudioFeaturesForTrack', () => {
    it('should get audio features for a track', async () => {
      const getAudioFeaturesForTrackSpy = vi
        .spyOn(TracksService, 'getAudioFeatures')
        .mockResolvedValue(audioFeaturesFixture);
      const response = await tracks.getAudioFeaturesForTrack('foo');

      expect(response).toEqual(audioFeaturesFixture);
      expect(getAudioFeaturesForTrackSpy).toHaveBeenCalledWith('foo');
    });
  });

  describe('getAudioFeaturesForTracks', () => {
    it('should get audio features for several tracks', async () => {
      const getAudioFeaturesForTracksSpy = vi
        .spyOn(TracksService, 'getSeveralAudioFeatures')
        .mockResolvedValue(getAudioFeaturesForTracksFixture);
      const response = await tracks.getAudioFeaturesForTracks(['foo', 'bar']);

      expect(response).toEqual(getAudioFeaturesForTracksFixture.audio_features);
      expect(getAudioFeaturesForTracksSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('getTrack', () => {
    let getTrackSpy: SpyInstance;
    beforeEach(() => {
      getTrackSpy = vi
        .spyOn(TracksService, 'getTrack')
        .mockResolvedValue(trackFixture);
    });

    it('should get a track (without options)', async () => {
      const response = await tracks.getTrack('foo');

      expect(response).toEqual(trackFixture);
      expect(getTrackSpy).toHaveBeenCalledWith('foo', undefined);
    });

    it('should get a track (with options)', async () => {
      const response = await tracks.getTrack('foo', { market: 'bar' });

      expect(response).toEqual(trackFixture);
      expect(getTrackSpy).toHaveBeenCalledWith('foo', 'bar');
    });
  });

  describe('getTracks', () => {
    let getTracksSpy: SpyInstance;
    beforeEach(() => {
      getTracksSpy = vi
        .spyOn(TracksService, 'getSeveralTracks')
        .mockResolvedValue(getTracksFixture);
    });

    it('should get several tracks (without options)', async () => {
      const response = await tracks.getTracks(['foo', 'bar']);

      expect(response).toEqual(getTracksFixture.tracks);
      expect(getTracksSpy).toHaveBeenCalledWith('foo,bar', undefined);
    });

    it('should get several tracks (with options)', async () => {
      const response = await tracks.getTracks(['foo', 'bar'], {
        market: 'baz',
      });

      expect(response).toEqual(getTracksFixture.tracks);
      expect(getTracksSpy).toHaveBeenCalledWith('foo,bar', 'baz');
    });
  });
});
