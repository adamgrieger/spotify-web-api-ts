import { type SpyInstance } from 'vitest';

import {
  audiobookFixture,
  getAudiobookChaptersFixture,
  getAudiobooksFixture,
} from '../fixtures';
import { AudiobooksService } from '../openapi/services/AudiobooksService';

import { AudiobooksApi } from './AudiobooksApi';

const audiobooks = new AudiobooksApi();

describe('AudiobooksApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('getAudiobook', () => {
    let getAnAudiobookSpy: SpyInstance;
    beforeEach(() => {
      getAnAudiobookSpy = vi
        .spyOn(AudiobooksService, 'getAnAudiobook')
        .mockResolvedValue(audiobookFixture);
    });

    it('should get an audiobook (without options)', async () => {
      const response = await audiobooks.getAudiobook('foo');

      expect(response).toEqual(audiobookFixture);
      expect(getAnAudiobookSpy).toHaveBeenCalledWith('foo', undefined);
    });

    it('should get an audiobook (with options)', async () => {
      const response = await audiobooks.getAudiobook('foo', { market: 'bar' });

      expect(response).toEqual(audiobookFixture);
      expect(getAnAudiobookSpy).toHaveBeenCalledWith('foo', 'bar');
    });
  });

  describe('getAudiobooks', () => {
    let getAudiobooksSpy: SpyInstance;
    beforeEach(() => {
      getAudiobooksSpy = vi
        .spyOn(AudiobooksService, 'getMultipleAudiobooks')
        .mockResolvedValue(getAudiobooksFixture);
    });

    it('should get several audiobooks (without options)', async () => {
      const response = await audiobooks.getAudiobooks(['foo', 'bar']);

      expect(response).toEqual(getAudiobooksFixture.audiobooks);
      expect(getAudiobooksSpy).toHaveBeenCalledWith('foo,bar', undefined);
    });

    it('should get several audiobooks (with options)', async () => {
      const response = await audiobooks.getAudiobooks(['foo', 'bar'], {
        market: 'baz',
      });

      expect(response).toEqual(getAudiobooksFixture.audiobooks);
      expect(getAudiobooksSpy).toHaveBeenCalledWith('foo,bar', 'baz');
    });
  });

  describe('getAudiobookChapters', () => {
    let getAudiobookChaptersSpy: SpyInstance;
    beforeEach(() => {
      getAudiobookChaptersSpy = vi
        .spyOn(AudiobooksService, 'getAudiobookChapters')
        .mockResolvedValue(getAudiobookChaptersFixture);
    });

    it("should get an audiobook's chapters (without options)", async () => {
      const response = await audiobooks.getAudiobookChapters('foo');

      expect(response).toEqual(getAudiobookChaptersFixture);
      expect(getAudiobookChaptersSpy).toHaveBeenCalledWith(
        'foo',
        undefined,
        undefined,
        undefined,
      );
    });

    it("should get an audiobook's chapters (with options)", async () => {
      const response = await audiobooks.getAudiobookChapters('foo', {
        market: 'bar',
        limit: 1,
        offset: 2,
      });

      expect(response).toEqual(getAudiobookChaptersFixture);
      expect(getAudiobookChaptersSpy).toHaveBeenCalledWith('foo', 'bar', 1, 2);
    });
  });
});
