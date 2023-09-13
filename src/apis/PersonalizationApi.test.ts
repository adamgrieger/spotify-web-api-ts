import { type SpyInstance } from 'vitest';

import { getMyTopArtistsFixture, getMyTopTracksFixture } from '../fixtures';
import { UsersService } from '../openapi/services/UsersService';

import { PersonalizationApi } from './PersonalizationApi';

const personalization = new PersonalizationApi();

describe('PersonalizationApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('getMyTopArtists', () => {
    let getMyTopArtistsSpy: SpyInstance;
    beforeEach(() => {
      getMyTopArtistsSpy = vi
        .spyOn(UsersService, 'getUsersTopArtistsAndTracks')
        .mockResolvedValue(getMyTopArtistsFixture);
    });

    it("should get the current user's top artists (without options)", async () => {
      const response = await personalization.getMyTopArtists();

      expect(response).toEqual(getMyTopArtistsFixture);
      expect(getMyTopArtistsSpy).toHaveBeenCalledWith(
        'artists',
        undefined,
        undefined,
        undefined,
      );
    });

    it("should get the current user's top artists (with options)", async () => {
      const response = await personalization.getMyTopArtists({
        limit: 1,
        offset: 2,
        time_range: 'long_term',
      });

      expect(response).toEqual(getMyTopArtistsFixture);
      expect(getMyTopArtistsSpy).toHaveBeenCalledWith(
        'artists',
        'long_term',
        1,
        2,
      );
    });
  });

  describe('getMyTopTracks', () => {
    let getMyTopTracksSpy: SpyInstance;
    beforeEach(() => {
      getMyTopTracksSpy = vi
        .spyOn(UsersService, 'getUsersTopArtistsAndTracks')
        .mockResolvedValue(getMyTopTracksFixture);
    });

    it("should get the current user's top tracks (without options)", async () => {
      const response = await personalization.getMyTopTracks();

      expect(response).toEqual(getMyTopTracksFixture);
      expect(getMyTopTracksSpy).toHaveBeenCalledWith(
        'tracks',
        undefined,
        undefined,
        undefined,
      );
    });

    it("should get the current user's top tracks (with options)", async () => {
      const response = await personalization.getMyTopTracks({
        limit: 1,
        offset: 2,
        time_range: 'long_term',
      });

      expect(response).toEqual(getMyTopTracksFixture);
      expect(getMyTopTracksSpy).toHaveBeenCalledWith(
        'tracks',
        'long_term',
        1,
        2,
      );
    });
  });
});
