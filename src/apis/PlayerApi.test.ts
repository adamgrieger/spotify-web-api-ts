import { type MockedClass } from 'vitest';

import {
  currentlyPlayingContextFixture,
  currentlyPlayingFixture,
  deviceFixture,
  getRecentlyPlayedTracksFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';

import { PlayerApi } from './PlayerApi';

vi.mock('../helpers/Http');

const HttpMock = Http as MockedClass<typeof Http>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function setup() {
  const httpMock = new HttpMock('token');
  const player = new PlayerApi();

  return { httpMock, player };
}

describe('PlayerApi', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('addToQueue', () => {
    it.todo(
      "should add an item to the user's playback queue (without options)",
      async () => {
        const { httpMock, player } = setup();

        await player.addToQueue('foo');

        expect(httpMock.post).toHaveBeenCalledWith('/me/player/queue', {
          params: {
            uri: 'foo',
          },
        });
      },
    );

    it.todo(
      "should add an item to the user's playback queue (with options)",
      async () => {
        const { httpMock, player } = setup();

        await player.addToQueue('foo', { device_id: 'bar' });

        expect(httpMock.post).toHaveBeenCalledWith('/me/player/queue', {
          params: {
            uri: 'foo',
            device_id: 'bar',
          },
        });
      },
    );
  });

  describe('getCurrentlyPlayingTrack', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(currentlyPlayingFixture);
    });

    it.todo(
      "should get the user's currently playing track (without options)",
      async () => {
        const { httpMock, player } = setup();

        const response = await player.getCurrentlyPlayingTrack();

        expect(response).toEqual(currentlyPlayingFixture);
        expect(httpMock.get).toHaveBeenCalledWith(
          '/me/player/currently-playing',
          undefined,
        );
      },
    );

    it.todo(
      "should get the user's currently playing track (with options)",
      async () => {
        const { httpMock, player } = setup();

        const response = await player.getCurrentlyPlayingTrack({
          market: 'foo',
        });

        expect(response).toEqual(currentlyPlayingFixture);
        expect(httpMock.get).toHaveBeenCalledWith(
          '/me/player/currently-playing',
          {
            params: {
              market: 'foo',
            },
          },
        );
      },
    );
  });

  describe('getMyDevices', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue([deviceFixture]);
    });

    it.todo("should get a user's available devices", async () => {
      const { httpMock, player } = setup();

      const response = await player.getMyDevices();

      expect(response).toEqual([deviceFixture]);
      expect(httpMock.get).toHaveBeenCalledWith('/me/player/devices');
    });
  });

  describe('getPlaybackInfo', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(currentlyPlayingContextFixture);
    });

    it.todo(
      "should get information about the user's current playback state (without options)",
      async () => {
        const { httpMock, player } = setup();

        const response = await player.getPlaybackInfo();

        expect(response).toEqual(currentlyPlayingContextFixture);
        expect(httpMock.get).toHaveBeenCalledWith('/me/player', undefined);
      },
    );

    it.todo(
      "should get information about the user's current playback state (with options)",
      async () => {
        const { httpMock, player } = setup();

        const response = await player.getPlaybackInfo({ market: 'foo' });

        expect(response).toEqual(currentlyPlayingContextFixture);
        expect(httpMock.get).toHaveBeenCalledWith('/me/player', {
          params: {
            market: 'foo',
          },
        });
      },
    );
  });

  describe('getRecentlyPlayedTracks', () => {
    beforeEach(() => {
      HttpMock.prototype.get.mockResolvedValue(getRecentlyPlayedTracksFixture);
    });

    it.todo(
      "should get the current user's recently played tracks (without options)",
      async () => {
        const { httpMock, player } = setup();

        const response = await player.getRecentlyPlayedTracks();

        expect(response).toEqual(getRecentlyPlayedTracksFixture);
        expect(httpMock.get).toHaveBeenCalledWith(
          '/me/player/recently-played',
          undefined,
        );
      },
    );

    it.todo(
      "should get the current user's recently played tracks (with options)",
      async () => {
        const { httpMock, player } = setup();

        const response = await player.getRecentlyPlayedTracks({ limit: 2 });

        expect(response).toEqual(getRecentlyPlayedTracksFixture);
        expect(httpMock.get).toHaveBeenCalledWith(
          '/me/player/recently-played',
          {
            params: {
              limit: 2,
            },
          },
        );
      },
    );
  });

  describe('pause', () => {
    it.todo("should pause a user's playback (without options)", async () => {
      const { httpMock, player } = setup();

      await player.pause();

      expect(httpMock.put).toHaveBeenCalledWith('/me/player/pause', undefined);
    });

    it.todo("should pause a user's playback (with options)", async () => {
      const { httpMock, player } = setup();

      await player.pause({ device_id: 'foo' });

      expect(httpMock.put).toHaveBeenCalledWith('/me/player/pause', {
        params: {
          device_id: 'foo',
        },
      });
    });
  });

  describe('play', () => {
    it.todo(
      "should start or resume a user's playback (without options)",
      async () => {
        const { httpMock, player } = setup();

        await player.play();

        expect(httpMock.put).toHaveBeenCalledWith('/me/player/play', undefined);
      },
    );

    it.todo(
      "should start or resume a user's playback (with only query params)",
      async () => {
        const { httpMock, player } = setup();

        await player.play({ device_id: 'foo' });

        expect(httpMock.put).toHaveBeenCalledWith('/me/player/play', {
          params: {
            device_id: 'foo',
          },
        });
      },
    );

    it.todo(
      "should start or resume a user's playback (with only body params)",
      async () => {
        const { httpMock, player } = setup();

        await player.play({ context_uri: 'foo' });

        expect(httpMock.put).toHaveBeenCalledWith('/me/player/play', {
          data: {
            context_uri: 'foo',
          },
        });
      },
    );

    it.todo(
      "should start or resume a user's playback (with query and body params)",
      async () => {
        const { httpMock, player } = setup();

        await player.play({ device_id: 'foo', context_uri: 'bar' });

        expect(httpMock.put).toHaveBeenCalledWith('/me/player/play', {
          params: {
            device_id: 'foo',
          },
          data: {
            context_uri: 'bar',
          },
        });
      },
    );
  });

  describe('seek', () => {
    it.todo(
      'should seek to a position in the currently playing track (without options)',
      async () => {
        const { httpMock, player } = setup();

        await player.seek(100);

        expect(httpMock.put).toHaveBeenCalledWith('/me/player/seek', {
          params: {
            position_ms: 100,
          },
        });
      },
    );

    it.todo(
      'should seek to a position in the currently playing track (with options)',
      async () => {
        const { httpMock, player } = setup();

        await player.seek(100, { device_id: 'foo' });

        expect(httpMock.put).toHaveBeenCalledWith('/me/player/seek', {
          params: {
            position_ms: 100,
            device_id: 'foo',
          },
        });
      },
    );
  });

  describe('setRepeat', () => {
    it.todo(
      "should set the repeat mode for the user's playback (without options)",
      async () => {
        const { httpMock, player } = setup();

        await player.setRepeat('track');

        expect(httpMock.put).toHaveBeenCalledWith('/me/player/repeat', {
          params: {
            state: 'track',
          },
        });
      },
    );

    it.todo(
      "should set the repeat mode for the user's playback (with options)",
      async () => {
        const { httpMock, player } = setup();

        await player.setRepeat('track', { device_id: 'foo' });

        expect(httpMock.put).toHaveBeenCalledWith('/me/player/repeat', {
          params: {
            state: 'track',
            device_id: 'foo',
          },
        });
      },
    );
  });

  describe('setShuffle', () => {
    it.todo(
      "should set the shuffle mode for the user's playback (without options)",
      async () => {
        const { httpMock, player } = setup();

        await player.setShuffle(true);

        expect(httpMock.put).toHaveBeenCalledWith('/me/player/shuffle', {
          params: {
            state: true,
          },
        });
      },
    );

    it.todo(
      "should set the shuffle mode for the user's playback (with options)",
      async () => {
        const { httpMock, player } = setup();

        await player.setShuffle(true, { device_id: 'foo' });

        expect(httpMock.put).toHaveBeenCalledWith('/me/player/shuffle', {
          params: {
            state: true,
            device_id: 'foo',
          },
        });
      },
    );
  });

  describe('setVolume', () => {
    it.todo(
      "should set the volume for the user's current playback (without options)",
      async () => {
        const { httpMock, player } = setup();

        await player.setVolume(50);

        expect(httpMock.put).toHaveBeenCalledWith('/me/player/volume', {
          params: {
            volume_percent: 50,
          },
        });
      },
    );

    it.todo(
      "should set the volume for the user's current playback (with options)",
      async () => {
        const { httpMock, player } = setup();

        await player.setVolume(50, { device_id: 'foo' });

        expect(httpMock.put).toHaveBeenCalledWith('/me/player/volume', {
          params: {
            volume_percent: 50,
            device_id: 'foo',
          },
        });
      },
    );
  });

  describe('skipToNext', () => {
    it.todo('should skip to the next track (without options)', async () => {
      const { httpMock, player } = setup();

      await player.skipToNext();

      expect(httpMock.post).toHaveBeenCalledWith('/me/player/next', undefined);
    });

    it.todo('should skip to the next track (with options)', async () => {
      const { httpMock, player } = setup();

      await player.skipToNext({ device_id: 'foo' });

      expect(httpMock.post).toHaveBeenCalledWith('/me/player/next', {
        params: {
          device_id: 'foo',
        },
      });
    });
  });

  describe('skipToPrevious', () => {
    it.todo('should skip to the previous track (without options)', async () => {
      const { httpMock, player } = setup();

      await player.skipToPrevious();

      expect(httpMock.post).toHaveBeenCalledWith(
        '/me/player/previous',
        undefined,
      );
    });

    it.todo('should skip to the previous track (with options)', async () => {
      const { httpMock, player } = setup();

      await player.skipToPrevious({ device_id: 'foo' });

      expect(httpMock.post).toHaveBeenCalledWith('/me/player/previous', {
        params: {
          device_id: 'foo',
        },
      });
    });
  });

  describe('transferPlayback', () => {
    it.todo("should transfer a user's playback (without options)", async () => {
      const { httpMock, player } = setup();

      await player.transferPlayback('foo');

      expect(httpMock.put).toHaveBeenCalledWith('/me/player', {
        data: {
          device_ids: ['foo'],
        },
      });
    });

    it.todo("should transfer a user's playback (with options)", async () => {
      const { httpMock, player } = setup();

      await player.transferPlayback('foo', { play: true });

      expect(httpMock.put).toHaveBeenCalledWith('/me/player', {
        data: {
          device_ids: ['foo'],
          play: true,
        },
      });
    });
  });
});
