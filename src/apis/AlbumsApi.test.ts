import { type SpyInstance } from 'vitest';

import {
  albumFixture,
  getAlbumTracksFixture,
  getAlbumsFixture,
} from '../fixtures';
import { AlbumsService } from '../openapi/services/AlbumsService';

import { AlbumsApi } from './AlbumsApi';

const albums = new AlbumsApi();

describe('AlbumsApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('getAlbum', () => {
    let getAnAlbumSpy: SpyInstance;
    beforeEach(() => {
      getAnAlbumSpy = vi
        .spyOn(AlbumsService, 'getAnAlbum')
        .mockResolvedValue(albumFixture);
    });

    it('should get an album (without options)', async () => {
      const response = await albums.getAlbum('foo');

      expect(response).toEqual(albumFixture);
      expect(getAnAlbumSpy).toHaveBeenCalledWith('foo', undefined);
    });

    it('should get an album (with options)', async () => {
      const response = await albums.getAlbum('foo', { market: 'bar' });

      expect(response).toEqual(albumFixture);
      expect(getAnAlbumSpy).toHaveBeenCalledWith('foo', 'bar');
    });
  });

  describe('getAlbums', () => {
    let getAlbumsSpy: SpyInstance;
    beforeEach(() => {
      getAlbumsSpy = vi
        .spyOn(AlbumsService, 'getMultipleAlbums')
        .mockResolvedValue(getAlbumsFixture);
    });

    it('should get several albums (without options)', async () => {
      const response = await albums.getAlbums(['foo', 'bar']);

      expect(response).toEqual(getAlbumsFixture.albums);
      expect(getAlbumsSpy).toHaveBeenCalledWith('foo,bar', undefined);
    });

    it('should get several albums (with options)', async () => {
      const response = await albums.getAlbums(['foo', 'bar'], {
        market: 'baz',
      });

      expect(response).toEqual(getAlbumsFixture.albums);
      expect(getAlbumsSpy).toHaveBeenCalledWith('foo,bar', 'baz');
    });
  });

  describe('getAlbumTracks', () => {
    let getAlbumTracksSpy: SpyInstance;
    beforeEach(() => {
      getAlbumTracksSpy = vi
        .spyOn(AlbumsService, 'getAnAlbumsTracks')
        .mockResolvedValue(getAlbumTracksFixture);
    });

    it("should get an album's tracks (without options)", async () => {
      const response = await albums.getAlbumTracks('foo');

      expect(response).toEqual(getAlbumTracksFixture);
      expect(getAlbumTracksSpy).toHaveBeenCalledWith(
        'foo',
        undefined,
        undefined,
        undefined,
      );
    });

    it("should get an album's tracks (with options)", async () => {
      const response = await albums.getAlbumTracks('foo', {
        market: 'bar',
        limit: 1,
        offset: 2,
      });

      expect(response).toEqual(getAlbumTracksFixture);
      expect(getAlbumTracksSpy).toHaveBeenCalledWith('foo', 'bar', 1, 2);
    });
  });
});
