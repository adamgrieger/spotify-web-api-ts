import {
  type AudiobookObject,
  AudiobooksService,
  type ChapterObject,
  ChaptersService,
  type PagingSimplifiedChapterObject,
} from '../openapi';
import {
  type MarketOptions,
  type PagingMarketOptions,
} from '../types/SpotifyOptions';

export class AudiobooksApi {
  /**
   * ### Get an Audiobook
   *
   * Get Spotify catalog information for a single audiobook.
   * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
   *
   * **Required Scopes:** `user-read-playback-position` for reading the user's
   * resume points.
   *
   * @param audiobookId The Spotify ID for the audiobook.
   * @param options Optional request information.
   */
  public async getAudiobook(
    audiobookId: string,
    options?: MarketOptions,
  ): Promise<AudiobookObject> {
    return await AudiobooksService.getAnAudiobook(audiobookId, options?.market);
  }

  /**
   * ### Get Several Audiobooks
   *
   * Get Spotify catalog information for several audiobooks identified by their Spotify IDs.
   * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
   *
   * **Required Scopes:** `user-read-playback-position` for reading the user's
   * resume points.
   *
   *
   * @param audiobookIds A list of the Spotify IDs for the audiobooks.
   * @param options Optional request information.
   */
  public async getAudiobooks(
    audiobookIds: string[],
    options?: MarketOptions,
  ): Promise<AudiobookObject[]> {
    return await AudiobooksService.getMultipleAudiobooks(
      audiobookIds.join(','),
      options?.market,
    ).then(({ audiobooks }) => audiobooks);
  }

  /**
   * Get Audiobook Chapters
   *
   * Get Spotify catalog information about an audiobook's chapters.
   * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
   *
   * @param audiobookId The Spotify ID for the audiobook.
   * @param options Optional request information.
   */
  public async getAudiobookChapters(
    audiobookId: string,
    options?: PagingMarketOptions,
  ): Promise<PagingSimplifiedChapterObject> {
    return await AudiobooksService.getAudiobookChapters(
      audiobookId,
      options?.market,
      options?.limit,
      options?.offset,
    );
  }

  /**
   * Get a Chapter
   *
   * Get Spotify catalog information for a single chapter.
   * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
   *
   * @param chapterId The Spotify ID for the chapter.
   * @param options Optional request information.
   */
  public async getChapter(
    chapterId: string,
    options: MarketOptions,
  ): Promise<ChapterObject> {
    return await ChaptersService.getAChapter(chapterId, options?.market);
  }

  /**
   * Get Several Chapters
   *
   * Get Spotify catalog information for several chapters identified by their Spotify IDs.
   * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
   *
   * @param chapterIds A list of the Spotify IDs for the chapters.
   * @param options Optional request information.
   */
  public async getChapters(
    chapterIds: string[],
    options: MarketOptions,
  ): Promise<ChapterObject[]> {
    return await ChaptersService.getSeveralChapters(
      chapterIds.join(','),
      options?.market,
    ).then(({ chapters }) => chapters);
  }
}
