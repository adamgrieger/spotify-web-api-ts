import { Http } from '../helpers/Http';
import { PlayerApi } from './PlayerApi';

jest.mock('../helpers/Http');

const HttpMock = Http as jest.Mocked<typeof Http>;

describe('PlayerApi', () => {
  const http = new HttpMock('token');

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('addToQueue', () => {
    it("should add an item to the end of the user's current playback queue (without options)", () => {
      const player = new PlayerApi(http);
      player.addToQueue('foo');
      expect(http.post).toBeCalledTimes(1);
      expect(http.post).toBeCalledWith('/me/player/queue', {
        params: {
          uri: 'foo',
        },
      });
    });

    it("should add an item to the end of the user's current playback queue (with options)", () => {
      const player = new PlayerApi(http);
      player.addToQueue('foo', {
        device_id: 'bar',
      });
      expect(http.post).toBeCalledTimes(1);
      expect(http.post).toBeCalledWith('/me/player/queue', {
        params: {
          uri: 'foo',
          device_id: 'bar',
        },
      });
    });
  });

  describe('getCurrentlyPlayingTrack', () => {
    it("should get the user's currently playing track (without options)", () => {
      const player = new PlayerApi(http);
      player.getCurrentlyPlayingTrack();
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith(
        '/me/player/currently-playing',
        undefined,
      );
    });

    it("should get the user's currently playing track (with options)", () => {
      const player = new PlayerApi(http);
      player.getCurrentlyPlayingTrack({
        market: 'foo',
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/player/currently-playing', {
        params: {
          market: 'foo',
        },
      });
    });
  });

  describe('getMyDevices', () => {
    it("should get information about a user's available devices", () => {
      const player = new PlayerApi(http);
      player.getMyDevices();
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/player/devices');
    });
  });

  describe('getPlaybackInfo', () => {
    it("should get information about the user's current playback state (without options)", () => {
      const player = new PlayerApi(http);
      player.getPlaybackInfo();
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/player', undefined);
    });

    it("should get information about the user's current playback state (with options)", () => {
      const player = new PlayerApi(http);
      player.getPlaybackInfo({
        market: 'foo',
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/player', {
        params: {
          market: 'foo',
        },
      });
    });
  });

  describe('getRecentlyPlayedTracks', () => {
    it("should get the current user's recently played tracks (without options)", () => {
      const player = new PlayerApi(http);
      player.getRecentlyPlayedTracks();
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/player/recently-played', undefined);
    });

    it("should get the current user's recently played tracks (with options)", () => {
      const player = new PlayerApi(http);
      player.getRecentlyPlayedTracks({
        limit: 2,
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith('/me/player/recently-played', {
        params: {
          limit: 2,
        },
      });
    });
  });

  describe('next', () => {
    it("should skip to the next track in the user's queue (without options)", () => {
      const player = new PlayerApi(http);
      player.next();
      expect(http.post).toBeCalledTimes(1);
      expect(http.post).toBeCalledWith('/me/player/next', undefined);
    });

    it("should skip to the next track in the user's queue (with options)", () => {
      const player = new PlayerApi(http);
      player.next({
        device_id: 'foo',
      });
      expect(http.post).toBeCalledTimes(1);
      expect(http.post).toBeCalledWith('/me/player/next', {
        params: {
          device_id: 'foo',
        },
      });
    });
  });

  describe('pause', () => {
    it("should pause the user's playback (without options)", () => {
      const player = new PlayerApi(http);
      player.pause();
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/pause', undefined);
    });

    it("should pause the user's playback (with options)", () => {
      const player = new PlayerApi(http);
      player.pause({
        device_id: 'foo',
      });
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/pause', {
        params: {
          device_id: 'foo',
        },
      });
    });
  });

  describe('play', () => {
    it("should start or resume a user's playback (without options)", () => {
      const player = new PlayerApi(http);
      player.play();
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/play', undefined);
    });

    it("should start or resume a user's playback (with only query params)", () => {
      const player = new PlayerApi(http);
      player.play({
        device_id: 'foo',
      });
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/play', {
        params: {
          device_id: 'foo',
        },
      });
    });

    it("should start or resume a user's playback (with only body params)", () => {
      const player = new PlayerApi(http);
      player.play({
        context_uri: 'foo',
      });
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/play', {
        data: {
          context_uri: 'foo',
        },
      });
    });

    it("should start or resume a user's playback (with query and body params)", () => {
      const player = new PlayerApi(http);
      player.play({
        device_id: 'foo',
        context_uri: 'bar',
      });
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/play', {
        params: {
          device_id: 'foo',
        },
        data: {
          context_uri: 'bar',
        },
      });
    });
  });

  describe('previous', () => {
    it("should skip to the previous track in the user's queue (without options)", () => {
      const player = new PlayerApi(http);
      player.previous();
      expect(http.post).toBeCalledTimes(1);
      expect(http.post).toBeCalledWith('/me/player/previous', undefined);
    });

    it("should skip to the previous track in the user's queue (with options)", () => {
      const player = new PlayerApi(http);
      player.previous({
        device_id: 'foo',
      });
      expect(http.post).toBeCalledTimes(1);
      expect(http.post).toBeCalledWith('/me/player/previous', {
        params: {
          device_id: 'foo',
        },
      });
    });
  });

  describe('repeat', () => {
    it("should set the repeat mode for the user's playback (without options)", () => {
      const player = new PlayerApi(http);
      player.repeat('track');
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/repeat', {
        params: {
          state: 'track',
        },
      });
    });

    it("should set the repeat mode for the user's playback (with options)", () => {
      const player = new PlayerApi(http);
      player.repeat('track', {
        device_id: 'foo',
      });
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/repeat', {
        params: {
          state: 'track',
          device_id: 'foo',
        },
      });
    });
  });

  describe('seek', () => {
    it('should seek to the given position (without options)', () => {
      const player = new PlayerApi(http);
      player.seek(100);
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/seek', {
        params: {
          position_ms: 100,
        },
      });
    });

    it('should seek to the given position (with options)', () => {
      const player = new PlayerApi(http);
      player.seek(100, {
        device_id: 'foo',
      });
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/seek', {
        params: {
          position_ms: 100,
          device_id: 'foo',
        },
      });
    });
  });

  describe('shuffle', () => {
    it("should toggle shuffle for the user's playback (without options)", () => {
      const player = new PlayerApi(http);
      player.shuffle(true);
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/shuffle', {
        params: {
          state: true,
        },
      });
    });

    it("should toggle shuffle for the user's playback (with options)", () => {
      const player = new PlayerApi(http);
      player.shuffle(true, {
        device_id: 'foo',
      });
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/shuffle', {
        params: {
          state: true,
          device_id: 'foo',
        },
      });
    });
  });

  describe('transferPlayback', () => {
    it("should transfer a user's playback (without options)", () => {
      const player = new PlayerApi(http);
      player.transferPlayback(['foo']);
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player', {
        data: {
          device_ids: ['foo'],
        },
      });
    });

    it("should transfer a user's playback (with options)", () => {
      const player = new PlayerApi(http);
      player.transferPlayback(['foo'], {
        play: true,
      });
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player', {
        data: {
          device_ids: ['foo'],
          play: true,
        },
      });
    });
  });

  describe('volume', () => {
    it("should set the volume for the user's current playback state (without options)", () => {
      const player = new PlayerApi(http);
      player.volume(50);
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/volume', {
        params: {
          volume_percent: 50,
        },
      });
    });

    it("should set the volume for the user's current playback state (with options)", () => {
      const player = new PlayerApi(http);
      player.volume(50, {
        device_id: 'foo',
      });
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith('/me/player/volume', {
        params: {
          volume_percent: 50,
          device_id: 'foo',
        },
      });
    });
  });
});
