import { type SpyInstance } from 'vitest';

import {
  searchAlbumsFixture,
  searchArtistsFixture,
  searchAudiobooksFixture,
  searchEpisodesFixture,
  searchFixture,
  searchPlaylistsFixture,
  searchShowsFixture,
  searchTracksFixture,
} from '../fixtures';
import { SearchService } from '../openapi/services/SearchService';

import { SearchApi } from './SearchApi';

const search = new SearchApi();

const searchOptions = {
  limit: 1,
  offset: 2,
  market: 'bar',
  include_external: 'audio',
} as const;

describe('SearchApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('search', () => {
    let searchSpy: SpyInstance;
    beforeEach(() => {
      searchSpy = vi
        .spyOn(SearchService, 'search')
        .mockResolvedValue(searchFixture);
    });

    it('should search for an item (without options)', async () => {
      const response = await search.search('foo', ['album', 'artist']);

      expect(response).toEqual(searchFixture);
      expect(searchSpy).toHaveBeenCalledWith(
        'foo',
        ['album', 'artist'],
        undefined,
        undefined,
        undefined,
        undefined,
      );
    });

    it('should search for an item (with options)', async () => {
      const response = await search.search(
        'foo',
        ['album', 'artist'],
        searchOptions,
      );

      expect(response).toEqual(searchFixture);
      expect(searchSpy).toHaveBeenCalledWith(
        'foo',
        ['album', 'artist'],
        'bar',
        1,
        2,
        'audio',
      );
    });
  });

  describe('searchAlbums', () => {
    let searchAlbumsSpy: SpyInstance;
    beforeEach(() => {
      searchAlbumsSpy = vi
        .spyOn(SearchService, 'search')
        .mockResolvedValue(searchAlbumsFixture);
    });

    it('should search for an album (without options)', async () => {
      const response = await search.searchAlbums('foo');

      expect(response).toEqual(searchAlbumsFixture.albums);
      expect(searchAlbumsSpy).toHaveBeenCalledWith(
        'foo',
        ['album'],
        undefined,
        undefined,
        undefined,
        undefined,
      );
    });

    it('should search for an album (with options)', async () => {
      const response = await search.searchAlbums('foo', searchOptions);

      expect(response).toEqual(searchAlbumsFixture.albums);
      expect(searchAlbumsSpy).toHaveBeenCalledWith(
        'foo',
        ['album'],
        'bar',
        1,
        2,
        'audio',
      );
    });
  });

  describe('searchArtists', () => {
    let searchArtistsSpy: SpyInstance;
    beforeEach(() => {
      searchArtistsSpy = vi
        .spyOn(SearchService, 'search')
        .mockResolvedValue(searchArtistsFixture);
    });

    it('should search for an artist (without options)', async () => {
      const response = await search.searchArtists('foo');

      expect(response).toEqual(searchArtistsFixture.artists);
      expect(searchArtistsSpy).toHaveBeenCalledWith(
        'foo',
        ['artist'],
        undefined,
        undefined,
        undefined,
        undefined,
      );
    });

    it('should search for an artist (with options)', async () => {
      const response = await search.searchArtists('foo', searchOptions);

      expect(response).toEqual(searchArtistsFixture.artists);
      expect(searchArtistsSpy).toHaveBeenCalledWith(
        'foo',
        ['artist'],
        'bar',
        1,
        2,
        'audio',
      );
    });
  });

  describe('searchAudiobooks', () => {
    let searchAudiobooksSpy: SpyInstance;
    beforeEach(() => {
      searchAudiobooksSpy = vi
        .spyOn(SearchService, 'search')
        .mockResolvedValue(searchAudiobooksFixture);
    });

    it('should search for an audiobook (without options)', async () => {
      const response = await search.searchAudiobooks('foo');

      expect(response).toEqual(searchAudiobooksFixture.audiobooks);
      expect(searchAudiobooksSpy).toHaveBeenCalledWith(
        'foo',
        ['audiobook'],
        undefined,
        undefined,
        undefined,
        undefined,
      );
    });

    it('should search for an audiobook (with options)', async () => {
      const response = await search.searchAudiobooks('foo', searchOptions);

      expect(response).toEqual(searchAudiobooksFixture.audiobooks);
      expect(searchAudiobooksSpy).toHaveBeenCalledWith(
        'foo',
        ['audiobook'],
        'bar',
        1,
        2,
        'audio',
      );
    });
  });

  describe('searchEpisodes', () => {
    let searchEpisodesSpy: SpyInstance;
    beforeEach(() => {
      searchEpisodesSpy = vi
        .spyOn(SearchService, 'search')
        .mockResolvedValue(searchEpisodesFixture);
    });

    it('should search for an episode (without options)', async () => {
      const response = await search.searchEpisodes('foo');

      expect(response).toEqual(searchEpisodesFixture.episodes);
      expect(searchEpisodesSpy).toHaveBeenCalledWith(
        'foo',
        ['episode'],
        undefined,
        undefined,
        undefined,
        undefined,
      );
    });

    it('should search for an episode (with options)', async () => {
      const response = await search.searchEpisodes('foo', searchOptions);

      expect(response).toEqual(searchEpisodesFixture.episodes);
      expect(searchEpisodesSpy).toHaveBeenCalledWith(
        'foo',
        ['episode'],
        'bar',
        1,
        2,
        'audio',
      );
    });
  });

  describe('searchPlaylists', () => {
    let searchPlaylistsSpy: SpyInstance;
    beforeEach(() => {
      searchPlaylistsSpy = vi
        .spyOn(SearchService, 'search')
        .mockResolvedValue(searchPlaylistsFixture);
    });

    it('should search for a playlist (without options)', async () => {
      const response = await search.searchPlaylists('foo');

      expect(response).toEqual(searchPlaylistsFixture.playlists);
      expect(searchPlaylistsSpy).toHaveBeenCalledWith(
        'foo',
        ['playlist'],
        undefined,
        undefined,
        undefined,
        undefined,
      );
    });

    it('should search for a playlist (with options)', async () => {
      const response = await search.searchPlaylists('foo', searchOptions);

      expect(response).toEqual(searchPlaylistsFixture.playlists);
      expect(searchPlaylistsSpy).toHaveBeenCalledWith(
        'foo',
        ['playlist'],
        'bar',
        1,
        2,
        'audio',
      );
    });
  });

  describe('searchShows', () => {
    let searchShowsSpy: SpyInstance;
    beforeEach(() => {
      searchShowsSpy = vi
        .spyOn(SearchService, 'search')
        .mockResolvedValue(searchShowsFixture);
    });

    it('should search for a show (without options)', async () => {
      const response = await search.searchShows('foo');

      expect(response).toEqual(searchShowsFixture.shows);
      expect(searchShowsSpy).toHaveBeenCalledWith(
        'foo',
        ['show'],
        undefined,
        undefined,
        undefined,
        undefined,
      );
    });

    it('should search for a show (with options)', async () => {
      const response = await search.searchShows('foo', searchOptions);

      expect(response).toEqual(searchShowsFixture.shows);
      expect(searchShowsSpy).toHaveBeenCalledWith(
        'foo',
        ['show'],
        'bar',
        1,
        2,
        'audio',
      );
    });
  });

  describe('searchTracks', () => {
    let searchTracksSpy: SpyInstance;
    beforeEach(() => {
      searchTracksSpy = vi
        .spyOn(SearchService, 'search')
        .mockResolvedValue(searchTracksFixture);
    });

    it('should search for a track (without options)', async () => {
      const response = await search.searchTracks('foo');

      expect(response).toEqual(searchTracksFixture.tracks);
      expect(searchTracksSpy).toHaveBeenCalledWith(
        'foo',
        ['track'],
        undefined,
        undefined,
        undefined,
        undefined,
      );
    });

    it('should search for a track (with options)', async () => {
      const response = await search.searchTracks('foo', searchOptions);

      expect(response).toEqual(searchTracksFixture.tracks);
      expect(searchTracksSpy).toHaveBeenCalledWith(
        'foo',
        ['track'],
        'bar',
        1,
        2,
        'audio',
      );
    });
  });
});
