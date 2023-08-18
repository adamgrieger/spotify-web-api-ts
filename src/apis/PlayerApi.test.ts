import { type SpyInstance } from 'vitest';

import {
  currentlyPlayingContextFixture,
  currentlyPlayingFixture,
  getMyDevicesFixture,
  getQueueFixture,
  getRecentlyPlayedTracksFixture,
} from '../fixtures';
import { PlayerService } from '../openapi/services/PlayerService';

import { PlayerApi } from './PlayerApi';

const player = new PlayerApi();

describe('PlayerApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('addToQueue', () => {
    let addToQueueSpy: SpyInstance;
    beforeEach(() => {
      addToQueueSpy = vi
        .spyOn(PlayerService, 'addToQueue')
        .mockResolvedValue(undefined);
    });

    it("should add an item to the user's playback queue (without options)", async () => {
      await player.addToQueue('foo');

      expect(addToQueueSpy).toHaveBeenCalledWith('foo', undefined);
    });

    it("should add an item to the user's playback queue (with options)", async () => {
      await player.addToQueue('foo', { device_id: 'bar' });

      expect(addToQueueSpy).toHaveBeenCalledWith('foo', 'bar');
    });
  });

  describe('getQueue', () => {
    it("should get the user's current queue", async () => {
      const getQueueSpy = vi
        .spyOn(PlayerService, 'getQueue')
        .mockResolvedValue(getQueueFixture);
      const response = await player.getQueue();

      expect(response).toEqual(getQueueFixture);
      expect(getQueueSpy).toHaveBeenCalledWith();
    });
  });

  describe('getCurrentlyPlayingTrack', () => {
    let getCurrentlyPlayingTrackSpy: SpyInstance;
    beforeEach(() => {
      getCurrentlyPlayingTrackSpy = vi
        .spyOn(PlayerService, 'getTheUsersCurrentlyPlayingTrack')
        .mockResolvedValue(currentlyPlayingContextFixture);
    });

    it("should get the user's currently playing track (without options)", async () => {
      const response = await player.getCurrentlyPlayingTrack();

      expect(response).toEqual(currentlyPlayingContextFixture);
      expect(getCurrentlyPlayingTrackSpy).toHaveBeenCalledWith(
        undefined,
        undefined,
      );
    });

    it("should get the user's currently playing track (with options)", async () => {
      const response = await player.getCurrentlyPlayingTrack({
        market: 'foo',
        additional_types: ['episode'],
      });

      expect(response).toEqual(currentlyPlayingContextFixture);
      expect(getCurrentlyPlayingTrackSpy).toHaveBeenCalledWith(
        'foo',
        'episode',
      );
    });
  });

  describe('getMyDevices', () => {
    it("should get a user's available devices", async () => {
      const getMyDevicesSpy = vi
        .spyOn(PlayerService, 'getAUsersAvailableDevices')
        .mockResolvedValue(getMyDevicesFixture);
      const response = await player.getMyDevices();

      expect(response).toEqual(getMyDevicesFixture.devices);
      expect(getMyDevicesSpy).toHaveBeenCalledWith();
    });
  });

  describe('getPlaybackInfo', () => {
    let getPlaybackInfoSpy: SpyInstance;
    beforeEach(() => {
      getPlaybackInfoSpy = vi
        .spyOn(PlayerService, 'getInformationAboutTheUsersCurrentPlayback')
        .mockResolvedValue(currentlyPlayingFixture);
    });

    it("should get information about the user's current playback state (without options)", async () => {
      const response = await player.getPlaybackInfo();

      expect(response).toEqual(currentlyPlayingFixture);
      expect(getPlaybackInfoSpy).toHaveBeenCalledWith(undefined, undefined);
    });

    it("should get information about the user's current playback state (with options)", async () => {
      const response = await player.getPlaybackInfo({
        market: 'foo',
        additional_types: ['episode'],
      });

      expect(response).toEqual(currentlyPlayingFixture);
      expect(getPlaybackInfoSpy).toHaveBeenCalledWith('foo', 'episode');
    });
  });

  describe('getRecentlyPlayedTracks', () => {
    let getRecentlyPlayedTracksSpy: SpyInstance;
    beforeEach(() => {
      getRecentlyPlayedTracksSpy = vi
        .spyOn(PlayerService, 'getRecentlyPlayed')
        .mockResolvedValue(getRecentlyPlayedTracksFixture);
    });

    it("should get the current user's recently played tracks (without options)", async () => {
      const response = await player.getRecentlyPlayedTracks();

      expect(response).toEqual(getRecentlyPlayedTracksFixture);
      expect(getRecentlyPlayedTracksSpy).toHaveBeenCalledWith(
        undefined,
        undefined,
        undefined,
      );
    });

    it("should get the current user's recently played tracks (with options)", async () => {
      const response = await player.getRecentlyPlayedTracks({
        limit: 1,
        after: 2,
        before: 3,
      });

      expect(response).toEqual(getRecentlyPlayedTracksFixture);
      expect(getRecentlyPlayedTracksSpy).toHaveBeenCalledWith(1, 2, 3);
    });
  });

  describe('pause', () => {
    let pauseSpy: SpyInstance;
    beforeEach(() => {
      pauseSpy = vi
        .spyOn(PlayerService, 'pauseAUsersPlayback')
        .mockResolvedValue(undefined);
    });

    it("should pause a user's playback (without options)", async () => {
      await player.pause();

      expect(pauseSpy).toHaveBeenCalledWith(undefined);
    });

    it("should pause a user's playback (with options)", async () => {
      await player.pause({ device_id: 'foo' });

      expect(pauseSpy).toHaveBeenCalledWith('foo');
    });
  });

  describe('play', () => {
    let playSpy: SpyInstance;
    beforeEach(() => {
      playSpy = vi
        .spyOn(PlayerService, 'startAUsersPlayback')
        .mockResolvedValue(undefined);
    });

    it("should start or resume a user's playback (without options)", async () => {
      await player.play();

      expect(playSpy).toHaveBeenCalledWith(undefined, {});
    });

    it("should start or resume a user's playback (with only query params)", async () => {
      await player.play({ device_id: 'foo' });

      expect(playSpy).toHaveBeenCalledWith('foo', {});
    });

    it("should start or resume a user's playback (with only body params)", async () => {
      await player.play({ context_uri: 'foo' });

      expect(playSpy).toHaveBeenCalledWith(undefined, {
        context_uri: 'foo',
      });
    });

    it("should start or resume a user's playback (with query and body params)", async () => {
      await player.play({ device_id: 'foo', context_uri: 'bar' });

      expect(playSpy).toHaveBeenCalledWith('foo', {
        context_uri: 'bar',
      });
    });
  });

  describe('seek', () => {
    let seekSpy: SpyInstance;
    beforeEach(() => {
      seekSpy = vi
        .spyOn(PlayerService, 'seekToPositionInCurrentlyPlayingTrack')
        .mockResolvedValue(undefined);
    });

    it('should seek to a position in the currently playing track (without options)', async () => {
      await player.seek(100);

      expect(seekSpy).toHaveBeenCalledWith(100, undefined);
    });

    it('should seek to a position in the currently playing track (with options)', async () => {
      await player.seek(100, { device_id: 'foo' });

      expect(seekSpy).toHaveBeenCalledWith(100, 'foo');
    });
  });

  describe('setRepeat', () => {
    let setRepeatSpy: SpyInstance;
    beforeEach(() => {
      setRepeatSpy = vi
        .spyOn(PlayerService, 'setRepeatModeOnUsersPlayback')
        .mockResolvedValue(undefined);
    });

    it("should set the repeat mode for the user's playback (without options)", async () => {
      await player.setRepeat('track');

      expect(setRepeatSpy).toHaveBeenCalledWith('track', undefined);
    });

    it("should set the repeat mode for the user's playback (with options)", async () => {
      await player.setRepeat('track', { device_id: 'foo' });

      expect(setRepeatSpy).toHaveBeenCalledWith('track', 'foo');
    });
  });

  describe('setShuffle', () => {
    let setShuffleSpy: SpyInstance;
    beforeEach(() => {
      setShuffleSpy = vi
        .spyOn(PlayerService, 'toggleShuffleForUsersPlayback')
        .mockResolvedValue(undefined);
    });

    it("should set the shuffle mode for the user's playback (without options)", async () => {
      await player.setShuffle(true);

      expect(setShuffleSpy).toHaveBeenCalledWith(true, undefined);
    });

    it("should set the shuffle mode for the user's playback (with options)", async () => {
      await player.setShuffle(true, { device_id: 'foo' });

      expect(setShuffleSpy).toHaveBeenCalledWith(true, 'foo');
    });
  });

  describe('setVolume', () => {
    let setVolumeSpy: SpyInstance;
    beforeEach(() => {
      setVolumeSpy = vi
        .spyOn(PlayerService, 'setVolumeForUsersPlayback')
        .mockResolvedValue(undefined);
    });

    it("should set the volume for the user's current playback (without options)", async () => {
      await player.setVolume(50);

      expect(setVolumeSpy).toHaveBeenCalledWith(50, undefined);
    });

    it("should set the volume for the user's current playback (with options)", async () => {
      await player.setVolume(50, { device_id: 'foo' });

      expect(setVolumeSpy).toHaveBeenCalledWith(50, 'foo');
    });
  });

  describe('skipToNext', () => {
    let skipToNextSpy: SpyInstance;
    beforeEach(() => {
      skipToNextSpy = vi
        .spyOn(PlayerService, 'skipUsersPlaybackToNextTrack')
        .mockResolvedValue(undefined);
    });

    it('should skip to the next track (without options)', async () => {
      await player.skipToNext();

      expect(skipToNextSpy).toHaveBeenCalledWith(undefined);
    });

    it('should skip to the next track (with options)', async () => {
      await player.skipToNext({ device_id: 'foo' });

      expect(skipToNextSpy).toHaveBeenCalledWith('foo');
    });
  });

  describe('skipToPrevious', () => {
    let skipToPreviousSpy: SpyInstance;
    beforeEach(() => {
      skipToPreviousSpy = vi
        .spyOn(PlayerService, 'skipUsersPlaybackToPreviousTrack')
        .mockResolvedValue(undefined);
    });

    it('should skip to the previous track (without options)', async () => {
      await player.skipToPrevious();

      expect(skipToPreviousSpy).toHaveBeenCalledWith(undefined);
    });

    it('should skip to the previous track (with options)', async () => {
      await player.skipToPrevious({ device_id: 'foo' });

      expect(skipToPreviousSpy).toHaveBeenCalledWith('foo');
    });
  });

  describe('transferPlayback', () => {
    let transferPlaybackSpy: SpyInstance;
    beforeEach(() => {
      transferPlaybackSpy = vi
        .spyOn(PlayerService, 'transferAUsersPlayback')
        .mockResolvedValue(undefined);
    });

    it("should transfer a user's playback (without options)", async () => {
      await player.transferPlayback('foo');

      expect(transferPlaybackSpy).toHaveBeenCalledWith({
        device_ids: ['foo'],
        play: undefined,
      });
    });

    it("should transfer a user's playback (with options)", async () => {
      await player.transferPlayback('foo', { play: true });

      expect(transferPlaybackSpy).toHaveBeenCalledWith({
        device_ids: ['foo'],
        play: true,
      });
    });
  });
});
