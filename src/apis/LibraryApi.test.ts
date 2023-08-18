import { type SpyInstance } from 'vitest';

import {
  getSavedAlbumsFixture,
  getSavedAudiobooksFixture,
  getSavedEpisodesFixture,
  getSavedShowsFixture,
  getSavedTracksFixture,
} from '../fixtures';
import { LibraryService } from '../openapi/services/LibraryService';

import { LibraryApi } from './LibraryApi';

const library = new LibraryApi();

describe('LibraryApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('areAlbumsSaved', () => {
    let areAlbumsSavedSpy: SpyInstance;
    beforeEach(() => {
      areAlbumsSavedSpy = vi
        .spyOn(LibraryService, 'checkUsersSavedAlbums')
        .mockResolvedValue([true, false]);
    });

    it("should check if an album is in user's library", async () => {
      const response = await library.isAlbumSaved('foo');

      expect(response).toBeTruthy();
      expect(areAlbumsSavedSpy).toHaveBeenCalledWith('foo');
    });

    it("should check the user's saved albums", async () => {
      const response = await library.areAlbumsSaved(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(areAlbumsSavedSpy).toHaveBeenCalledWith('foo,bar');
    });
  });
  describe('areAudiobooksSaved', () => {
    let areAudiobooksSavedSpy: SpyInstance;
    beforeEach(() => {
      areAudiobooksSavedSpy = vi
        .spyOn(LibraryService, 'checkUsersSavedAudiobooks')
        .mockResolvedValue([true, false]);
    });

    it("should check if an album is in user's library", async () => {
      const response = await library.isAudiobookSaved('foo');

      expect(response).toBeTruthy();
      expect(areAudiobooksSavedSpy).toHaveBeenCalledWith('foo');
    });

    it("should check the user's saved audiobooks", async () => {
      const response = await library.areAudiobooksSaved(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(areAudiobooksSavedSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('areEpisodesSaved', () => {
    let areEpisodesSavedSpy: SpyInstance;
    beforeEach(() => {
      areEpisodesSavedSpy = vi
        .spyOn(LibraryService, 'checkUsersSavedEpisodes')
        .mockResolvedValue([true, false]);
    });

    it("should check if an episode is in user's library", async () => {
      const response = await library.isEpisodeSaved('foo');

      expect(response).toBeTruthy();
      expect(areEpisodesSavedSpy).toHaveBeenCalledWith('foo');
    });

    it("should check the user's saved episodes", async () => {
      const response = await library.areEpisodesSaved(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(areEpisodesSavedSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('areShowsSaved', () => {
    let areShowsSavedSpy: SpyInstance;
    beforeEach(() => {
      areShowsSavedSpy = vi
        .spyOn(LibraryService, 'checkUsersSavedShows')
        .mockResolvedValue([true, false]);
    });

    it("should check if a show is in user's library", async () => {
      const response = await library.isShowSaved('foo');

      expect(response).toBeTruthy();
      expect(areShowsSavedSpy).toHaveBeenCalledWith('foo');
    });

    it("should check the user's saved shows", async () => {
      const response = await library.areShowsSaved(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(areShowsSavedSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('areTracksSaved', () => {
    let areTracksSavedSpy: SpyInstance;
    beforeEach(() => {
      areTracksSavedSpy = vi
        .spyOn(LibraryService, 'checkUsersSavedTracks')
        .mockResolvedValue([true, false]);
    });

    it("should check if a track is in user's library", async () => {
      const response = await library.isTrackSaved('foo');

      expect(response).toBeTruthy();
      expect(areTracksSavedSpy).toHaveBeenCalledWith('foo');
    });

    it("should check the user's saved tracks", async () => {
      const response = await library.areTracksSaved(['foo', 'bar']);

      expect(response).toEqual([true, false]);
      expect(areTracksSavedSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('getSavedAlbums', () => {
    let getSavedAlbumsSpy: SpyInstance;
    beforeEach(() => {
      getSavedAlbumsSpy = vi
        .spyOn(LibraryService, 'getUsersSavedAlbums')
        .mockResolvedValue(getSavedAlbumsFixture);
    });

    it("should get the current user's saved albums (without options)", async () => {
      const response = await library.getSavedAlbums();

      expect(response).toEqual(getSavedAlbumsFixture);
      expect(getSavedAlbumsSpy).toHaveBeenCalledWith(
        undefined,
        undefined,
        undefined,
      );
    });

    it("should get the current user's saved albums (with options)", async () => {
      const response = await library.getSavedAlbums({
        limit: 1,
        offset: 2,
        market: 'foo',
      });

      expect(response).toEqual(getSavedAlbumsFixture);
      expect(getSavedAlbumsSpy).toHaveBeenCalledWith(1, 2, 'foo');
    });
  });

  describe('getSavedAudiobooks', () => {
    let getSavedAudiobooksSpy: SpyInstance;
    beforeEach(() => {
      getSavedAudiobooksSpy = vi
        .spyOn(LibraryService, 'getUsersSavedAudiobooks')
        .mockResolvedValue(getSavedAudiobooksFixture);
    });

    it("should get the current user's saved audiobooks (without options)", async () => {
      const response = await library.getSavedAudiobooks();

      expect(response).toEqual(getSavedAudiobooksFixture);
      expect(getSavedAudiobooksSpy).toHaveBeenCalledWith(undefined, undefined);
    });

    it("should get the current user's saved audiobooks (with options)", async () => {
      const response = await library.getSavedAudiobooks({
        limit: 1,
        offset: 2,
      });

      expect(response).toEqual(getSavedAudiobooksFixture);
      expect(getSavedAudiobooksSpy).toHaveBeenCalledWith(1, 2);
    });
  });

  describe('getSavedEpisodes', () => {
    let getSavedEpisodesSpy: SpyInstance;
    beforeEach(() => {
      getSavedEpisodesSpy = vi
        .spyOn(LibraryService, 'getUsersSavedEpisodes')
        .mockResolvedValue(getSavedEpisodesFixture);
    });

    it("should get the current user's saved episodes (without options)", async () => {
      const response = await library.getSavedEpisodes();

      expect(response).toEqual(getSavedEpisodesFixture);
      expect(getSavedEpisodesSpy).toHaveBeenCalledWith(
        undefined,
        undefined,
        undefined,
      );
    });

    it("should get the current user's saved episodes (with options)", async () => {
      const response = await library.getSavedEpisodes({
        limit: 1,
        offset: 2,
        market: 'foo',
      });

      expect(response).toEqual(getSavedEpisodesFixture);
      expect(getSavedEpisodesSpy).toHaveBeenCalledWith('foo', 1, 2);
    });
  });

  describe('getSavedShows', () => {
    let getSavedShowsSpy: SpyInstance;
    beforeEach(() => {
      getSavedShowsSpy = vi
        .spyOn(LibraryService, 'getUsersSavedShows')
        .mockResolvedValue(getSavedShowsFixture);
    });

    it("should get the current user's saved shows (without options)", async () => {
      const response = await library.getSavedShows();

      expect(response).toEqual(getSavedShowsFixture);
      expect(getSavedShowsSpy).toHaveBeenCalledWith(undefined, undefined);
    });

    it("should get the current user's saved shows (with options)", async () => {
      const response = await library.getSavedShows({ limit: 1, offset: 2 });

      expect(response).toEqual(getSavedShowsFixture);
      expect(getSavedShowsSpy).toHaveBeenCalledWith(1, 2);
    });
  });

  describe('getSavedTracks', () => {
    let getSavedTracksSpy: SpyInstance;
    beforeEach(() => {
      getSavedTracksSpy = vi
        .spyOn(LibraryService, 'getUsersSavedTracks')
        .mockResolvedValue(getSavedTracksFixture);
    });

    it("should get the current user's saved tracks (without options)", async () => {
      const response = await library.getSavedTracks();

      expect(response).toEqual(getSavedTracksFixture);
      expect(getSavedTracksSpy).toHaveBeenCalledWith(
        undefined,
        undefined,
        undefined,
      );
    });

    it("should get the current user's saved tracks (with options)", async () => {
      const response = await library.getSavedTracks({
        limit: 1,
        offset: 2,
        market: 'foo',
      });

      expect(response).toEqual(getSavedTracksFixture);
      expect(getSavedTracksSpy).toHaveBeenCalledWith('foo', 1, 2);
    });
  });

  describe('removeSavedAlbums', () => {
    let removeSavedAlbumsSpy: SpyInstance;
    beforeEach(() => {
      removeSavedAlbumsSpy = vi
        .spyOn(LibraryService, 'removeAlbumsUser')
        .mockResolvedValue(undefined);
    });

    it('should remove an album for the current user', async () => {
      await library.removeSavedAlbum('foo');

      expect(removeSavedAlbumsSpy).toHaveBeenCalledWith('foo');
    });

    it('should remove albums for the current user', async () => {
      await library.removeSavedAlbums(['foo', 'bar']);

      expect(removeSavedAlbumsSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('removeSavedAudiobooks', () => {
    let removeSavedAudiobooksSpy: SpyInstance;
    beforeEach(() => {
      removeSavedAudiobooksSpy = vi
        .spyOn(LibraryService, 'removeAudiobooksUser')
        .mockResolvedValue(undefined);
    });

    it('should remove an audiobook for the current user', async () => {
      await library.removeSavedAudiobook('foo');

      expect(removeSavedAudiobooksSpy).toHaveBeenCalledWith('foo');
    });

    it('should remove audiobooks for the current user', async () => {
      await library.removeSavedAudiobooks(['foo', 'bar']);

      expect(removeSavedAudiobooksSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('removeSavedEpisodes', () => {
    let removeSavedEpisodesSpy: SpyInstance;
    beforeEach(() => {
      removeSavedEpisodesSpy = vi
        .spyOn(LibraryService, 'removeEpisodesUser')
        .mockResolvedValue(undefined);
    });

    it('should remove an episode for the current user', async () => {
      await library.removeSavedEpisode('foo');

      expect(removeSavedEpisodesSpy).toHaveBeenCalledWith('foo');
    });

    it('should remove episodes for the current user', async () => {
      await library.removeSavedEpisodes(['foo', 'bar']);

      expect(removeSavedEpisodesSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('removeSavedShows', () => {
    let removeSavedShowsSpy: SpyInstance;
    beforeEach(() => {
      removeSavedShowsSpy = vi
        .spyOn(LibraryService, 'removeShowsUser')
        .mockResolvedValue(undefined);
    });

    it('should remove a show for the current user (without options)', async () => {
      await library.removeSavedShow('foo');

      expect(removeSavedShowsSpy).toHaveBeenCalledWith('foo', undefined);
    });

    it('should remove a show for the current user (with options)', async () => {
      await library.removeSavedShow('foo', { market: 'bar' });

      expect(removeSavedShowsSpy).toHaveBeenCalledWith('foo', 'bar');
    });

    it('should remove shows for the current user (without options)', async () => {
      await library.removeSavedShows(['foo', 'bar']);

      expect(removeSavedShowsSpy).toHaveBeenCalledWith('foo,bar', undefined);
    });

    it('should remove shows for the current user (with options)', async () => {
      await library.removeSavedShows(['foo', 'bar'], { market: 'baz' });

      expect(removeSavedShowsSpy).toHaveBeenCalledWith('foo,bar', 'baz');
    });
  });

  describe('removeSavedTracks', () => {
    let removeSavedTracksSpy: SpyInstance;
    beforeEach(() => {
      removeSavedTracksSpy = vi
        .spyOn(LibraryService, 'removeTracksUser')
        .mockResolvedValue(undefined);
    });

    it('should remove a track for the current user', async () => {
      await library.removeSavedTrack('foo');

      expect(removeSavedTracksSpy).toHaveBeenCalledWith('foo');
    });

    it('should remove tracks for the current user', async () => {
      await library.removeSavedTracks(['foo', 'bar']);

      expect(removeSavedTracksSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('saveAlbums', () => {
    let saveAlbumsSpy: SpyInstance;
    beforeEach(() => {
      saveAlbumsSpy = vi
        .spyOn(LibraryService, 'saveAlbumsUser')
        .mockResolvedValue(undefined);
    });

    it('should save an album for the current user', async () => {
      await library.saveAlbum('foo');

      expect(saveAlbumsSpy).toHaveBeenCalledWith('foo');
    });

    it('should save albums for the current user', async () => {
      await library.saveAlbums(['foo', 'bar']);

      expect(saveAlbumsSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('saveAudiobooks', () => {
    let saveAudiobooksSpy: SpyInstance;
    beforeEach(() => {
      saveAudiobooksSpy = vi
        .spyOn(LibraryService, 'saveAudiobooksUser')
        .mockResolvedValue(undefined);
    });

    it('should save an audiobook for the current user', async () => {
      await library.saveAudiobook('foo');

      expect(saveAudiobooksSpy).toHaveBeenCalledWith('foo');
    });

    it('should save audiobooks for the current user', async () => {
      await library.saveAudiobooks(['foo', 'bar']);

      expect(saveAudiobooksSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('saveEpisodes', () => {
    let saveEpisodesSpy: SpyInstance;
    beforeEach(() => {
      saveEpisodesSpy = vi
        .spyOn(LibraryService, 'saveEpisodesUser')
        .mockResolvedValue(undefined);
    });

    it('should save an episode for the current user', async () => {
      await library.saveEpisode('foo');

      expect(saveEpisodesSpy).toHaveBeenCalledWith('foo');
    });

    it('should save episodes for the current user', async () => {
      await library.saveEpisodes(['foo', 'bar']);

      expect(saveEpisodesSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('saveShows', () => {
    let saveShowsSpy: SpyInstance;
    beforeEach(() => {
      saveShowsSpy = vi
        .spyOn(LibraryService, 'saveShowsUser')
        .mockResolvedValue(undefined);
    });

    it('should save a show for the current user', async () => {
      await library.saveShow('foo');

      expect(saveShowsSpy).toHaveBeenCalledWith('foo');
    });

    it('should save shows for the current user', async () => {
      await library.saveShows(['foo', 'bar']);

      expect(saveShowsSpy).toHaveBeenCalledWith('foo,bar');
    });
  });

  describe('saveTracks', () => {
    let saveTracksSpy: SpyInstance;
    beforeEach(() => {
      saveTracksSpy = vi
        .spyOn(LibraryService, 'saveTracksUser')
        .mockResolvedValue(undefined);
    });

    it('should save a track for the current user', async () => {
      await library.saveTrack('foo');

      expect(saveTracksSpy).toHaveBeenCalledWith('foo');
    });

    it('should save tracks for the current user', async () => {
      await library.saveTracks(['foo', 'bar']);

      expect(saveTracksSpy).toHaveBeenCalledWith('foo,bar');
    });
  });
});
