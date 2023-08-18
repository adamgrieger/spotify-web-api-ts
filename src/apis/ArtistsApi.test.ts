import { type SpyInstance } from 'vitest';

import { ArtistsService } from '../openapi/services/ArtistsService';
import {
  artistFixture,
  getArtistAlbumsFixture,
  getArtistTopTracksFixture,
  getArtistsFixture,
  getRelatedArtistsFixture,
} from '../fixtures';

import { ArtistsApi } from './ArtistsApi';

const artists = new ArtistsApi();

describe('ArtistsApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('getArtist', () => {
    let getArtistSpy: SpyInstance;
    beforeEach(() => {
      getArtistSpy = vi
        .spyOn(ArtistsService, 'getAnArtist')
        .mockResolvedValue(artistFixture);
    });

    it('should get an artist', async () => {
      const response = await artists.getArtist('foo');

      expect(response).toEqual(artistFixture);
      expect(getArtistSpy).toHaveBeenCalledWith('foo');
    });
  });

  describe('getArtistAlbums', () => {
    let getArtistAlbumsSpy: SpyInstance;
    beforeEach(() => {
      getArtistAlbumsSpy = vi
        .spyOn(ArtistsService, 'getAnArtistsAlbums')
        .mockResolvedValue(getArtistAlbumsFixture);
    });

    it("should get an artist's albums (without options)", async () => {
      const response = await artists.getArtistAlbums('foo');

      expect(response).toEqual(getArtistAlbumsFixture);
      expect(getArtistAlbumsSpy).toHaveBeenCalledWith(
        'foo',
        undefined,
        undefined,
        undefined,
        undefined,
      );
    });

    it("should get an artist's albums (with options)", async () => {
      const response = await artists.getArtistAlbums('foo', {
        market: 'bar',
        include_groups: ['album', 'appears_on', 'compilation', 'single'],
        limit: 1,
        offset: 2,
      });

      expect(response).toEqual(getArtistAlbumsFixture);
      expect(getArtistAlbumsSpy).toHaveBeenCalledWith(
        'foo',
        'album,appears_on,compilation,single',
        'bar',
        1,
        2,
      );
    });
  });

  describe('getArtists', () => {
    it('should get several artists', async () => {
      const getArtistsSpy = vi
        .spyOn(ArtistsService, 'getMultipleArtists')
        .mockResolvedValue(getArtistsFixture);
      const response = await artists.getArtists(['foo', 'bar']);

      expect(response).toEqual(getArtistsFixture.artists);
      expect(getArtistsSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('getArtistTopTracks', () => {
    it("should get an artist's top tracks", async () => {
      const getArtistTopTracksSpy = vi
        .spyOn(ArtistsService, 'getAnArtistsTopTracks')
        .mockResolvedValue(getArtistTopTracksFixture);
      const response = await artists.getArtistTopTracks('foo', 'bar');

      expect(response).toEqual(getArtistTopTracksFixture.tracks);
      expect(getArtistTopTracksSpy).toHaveBeenCalledWith('foo', 'bar');
    });
  });

  describe('getRelatedArtists', () => {
    it("should get an artist's related artists", async () => {
      const getRelatedArtistsSpy = vi
        .spyOn(ArtistsService, 'getAnArtistsRelatedArtists')
        .mockResolvedValue(getRelatedArtistsFixture);
      const response = await artists.getRelatedArtists('foo');

      expect(response).toEqual(getRelatedArtistsFixture.artists);
      expect(getRelatedArtistsSpy).toHaveBeenCalledWith('foo');
    });
  });
});
