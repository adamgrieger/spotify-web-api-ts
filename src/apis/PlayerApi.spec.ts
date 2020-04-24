import { Http } from '../helpers/Http';
import { PlayerApi } from './PlayerApi';
import { spotifyAxios } from '../helpers/spotifyAxios';
import {
  currentlyPlayingFixture,
  deviceFixture,
  currentlyPlayingContextFixture,
  getRecentlyPlayedTracksFixture,
} from '../fixtures';

jest.mock('../helpers/spotifyAxios');

const spotifyAxiosMock = spotifyAxios as jest.MockedFunction<
  typeof spotifyAxios
>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('PlayerApi', () => {
  describe('addToQueue', () => {
    it("should add an item to the user's playback queue (without options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.addToQueue('foo');

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/queue',
        'POST',
        'token',
        {
          params: {
            uri: 'foo',
          },
        },
      );
    });

    it("should add an item to the user's playback queue (with options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.addToQueue('foo', { device_id: 'bar' });

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/queue',
        'POST',
        'token',
        {
          params: {
            uri: 'foo',
            device_id: 'bar',
          },
        },
      );
    });
  });

  describe('getCurrentlyPlayingTrack', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(currentlyPlayingFixture);
    });

    it("should get the user's currently playing track (without options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      const response = await player.getCurrentlyPlayingTrack();

      expect(response).toEqual(currentlyPlayingFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/currently-playing',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get the user's currently playing track (with options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      const response = await player.getCurrentlyPlayingTrack({ market: 'foo' });

      expect(response).toEqual(currentlyPlayingFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/currently-playing',
        'GET',
        'token',
        {
          params: {
            market: 'foo',
          },
        },
      );
    });
  });

  describe('getMyDevices', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue([deviceFixture]);
    });

    it("should get a user's available devices", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      const response = await player.getMyDevices();

      expect(response).toEqual([deviceFixture]);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/devices',
        'GET',
        'token',
        undefined,
      );
    });
  });

  describe('getPlaybackInfo', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(currentlyPlayingContextFixture);
    });

    it("should get information about the user's current playback state (without options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      const response = await player.getPlaybackInfo();

      expect(response).toEqual(currentlyPlayingContextFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get information about the user's current playback state (with options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      const response = await player.getPlaybackInfo({ market: 'foo' });

      expect(response).toEqual(currentlyPlayingContextFixture);
      expect(spotifyAxiosMock).toBeCalledWith('/me/player', 'GET', 'token', {
        params: {
          market: 'foo',
        },
      });
    });
  });

  describe('getRecentlyPlayedTracks', () => {
    beforeEach(() => {
      spotifyAxiosMock.mockResolvedValue(getRecentlyPlayedTracksFixture);
    });

    it("should get the current user's recently played tracks (without options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      const response = await player.getRecentlyPlayedTracks();

      expect(response).toEqual(getRecentlyPlayedTracksFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/recently-played',
        'GET',
        'token',
        undefined,
      );
    });

    it("should get the current user's recently played tracks (with options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      const response = await player.getRecentlyPlayedTracks({ limit: 2 });

      expect(response).toEqual(getRecentlyPlayedTracksFixture);
      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/recently-played',
        'GET',
        'token',
        {
          params: {
            limit: 2,
          },
        },
      );
    });
  });

  describe('pause', () => {
    it("should pause a user's playback (without options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.pause();

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/pause',
        'PUT',
        'token',
        undefined,
      );
    });

    it("should pause a user's playback (with options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.pause({ device_id: 'foo' });

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/pause',
        'PUT',
        'token',
        {
          params: {
            device_id: 'foo',
          },
        },
      );
    });
  });

  describe('play', () => {
    it("should start or resume a user's playback (without options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.play();

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/play',
        'PUT',
        'token',
        undefined,
      );
    });

    it("should start or resume a user's playback (with only query params)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.play({ device_id: 'foo' });

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/play',
        'PUT',
        'token',
        {
          params: {
            device_id: 'foo',
          },
        },
      );
    });

    it("should start or resume a user's playback (with only body params)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.play({ context_uri: 'foo' });

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/play',
        'PUT',
        'token',
        {
          data: {
            context_uri: 'foo',
          },
        },
      );
    });

    it("should start or resume a user's playback (with query and body params)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.play({ device_id: 'foo', context_uri: 'bar' });

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/play',
        'PUT',
        'token',
        {
          params: {
            device_id: 'foo',
          },
          data: {
            context_uri: 'bar',
          },
        },
      );
    });
  });

  describe('seek', () => {
    it('should seek to a position in the currently playing track (without options)', async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.seek(100);

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/seek',
        'PUT',
        'token',
        {
          params: {
            position_ms: 100,
          },
        },
      );
    });

    it('should seek to a position in the currently playing track (with options)', async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.seek(100, { device_id: 'foo' });

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/seek',
        'PUT',
        'token',
        {
          params: {
            position_ms: 100,
            device_id: 'foo',
          },
        },
      );
    });
  });

  describe('setRepeat', () => {
    it("should set the repeat mode for the user's playback (without options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.setRepeat('track');

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/repeat',
        'PUT',
        'token',
        {
          params: {
            state: 'track',
          },
        },
      );
    });

    it("should set the repeat mode for the user's playback (with options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.setRepeat('track', { device_id: 'foo' });

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/repeat',
        'PUT',
        'token',
        {
          params: {
            state: 'track',
            device_id: 'foo',
          },
        },
      );
    });
  });

  describe('setShuffle', () => {
    it("should set the shuffle mode for the user's playback (without options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.setShuffle(true);

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/shuffle',
        'PUT',
        'token',
        {
          params: {
            state: true,
          },
        },
      );
    });

    it("should set the shuffle mode for the user's playback (with options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.setShuffle(true, { device_id: 'foo' });

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/shuffle',
        'PUT',
        'token',
        {
          params: {
            state: true,
            device_id: 'foo',
          },
        },
      );
    });
  });

  describe('setVolume', () => {
    it("should set the volume for the user's current playback (without options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.setVolume(50);

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/volume',
        'PUT',
        'token',
        {
          params: {
            volume_percent: 50,
          },
        },
      );
    });

    it("should set the volume for the user's current playback (with options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.setVolume(50, { device_id: 'foo' });

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/volume',
        'PUT',
        'token',
        {
          params: {
            volume_percent: 50,
            device_id: 'foo',
          },
        },
      );
    });
  });

  describe('skipToNext', () => {
    it('should skip to the next track (without options)', async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.skipToNext();

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/next',
        'POST',
        'token',
        undefined,
      );
    });

    it('should skip to the next track (with options)', async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.skipToNext({ device_id: 'foo' });

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/next',
        'POST',
        'token',
        {
          params: {
            device_id: 'foo',
          },
        },
      );
    });
  });

  describe('skipToPrevious', () => {
    it('should skip to the previous track (without options)', async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.skipToPrevious();

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/previous',
        'POST',
        'token',
        undefined,
      );
    });

    it('should skip to the previous track (with options)', async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.skipToPrevious({ device_id: 'foo' });

      expect(spotifyAxiosMock).toBeCalledWith(
        '/me/player/previous',
        'POST',
        'token',
        {
          params: {
            device_id: 'foo',
          },
        },
      );
    });
  });

  describe('transferPlayback', () => {
    it("should transfer a user's playback (without options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.transferPlayback('foo');

      expect(spotifyAxiosMock).toBeCalledWith('/me/player', 'PUT', 'token', {
        data: {
          device_ids: ['foo'],
        },
      });
    });

    it("should transfer a user's playback (with options)", async () => {
      const http = new Http('token');
      const player = new PlayerApi(http);
      await player.transferPlayback('foo', { play: true });

      expect(spotifyAxiosMock).toBeCalledWith('/me/player', 'PUT', 'token', {
        data: {
          device_ids: ['foo'],
          play: true,
        },
      });
    });
  });
});
