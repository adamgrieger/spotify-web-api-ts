import {
  searchAlbumsFixture,
  searchArtistsFixture,
  searchEpisodesFixture,
  searchFixture,
  searchPlaylistsFixture,
  searchShowsFixture,
  searchTracksFixture,
} from '../fixtures';
import { Http } from '../helpers/Http';
import { searchHelper } from '../helpers/searchHelper';
import { SearchApi } from './SearchApi';

jest.mock('../helpers/searchHelper');

const searchHelperMock = searchHelper as jest.MockedFunction<
  typeof searchHelper
>;

function setup() {
  const http = new Http('token');
  const search = new SearchApi(http);

  return { http, search };
}

beforeEach(() => {
  jest.resetAllMocks();
});

describe('SearchApi', () => {
  describe('search', () => {
    beforeEach(() => {
      searchHelperMock.mockResolvedValue(searchFixture);
    });

    it('should search for an item (without options)', async () => {
      const { http, search } = setup();

      const response = await search.search('foo', ['album', 'artist']);

      expect(response).toEqual(searchFixture);
      expect(searchHelperMock).toBeCalledWith(
        http,
        'foo',
        ['album', 'artist'],
        undefined,
      );
    });

    it('should search for an item (with options)', async () => {
      const { http, search } = setup();

      const response = await search.search('foo', ['album', 'artist'], {
        limit: 2,
      });

      expect(response).toEqual(searchFixture);
      expect(searchHelperMock).toBeCalledWith(
        http,
        'foo',
        ['album', 'artist'],
        { limit: 2 },
      );
    });
  });

  describe('searchAlbums', () => {
    beforeEach(() => {
      searchHelperMock.mockResolvedValue(searchAlbumsFixture);
    });

    it('should search for an album (without options)', async () => {
      const { http, search } = setup();

      const response = await search.searchAlbums('foo');

      expect(response).toEqual(searchAlbumsFixture.albums);
      expect(searchHelperMock).toBeCalledWith(
        http,
        'foo',
        ['album'],
        undefined,
      );
    });

    it('should search for an album (with options)', async () => {
      const { http, search } = setup();

      const response = await search.searchAlbums('foo', { limit: 2 });

      expect(response).toEqual(searchAlbumsFixture.albums);
      expect(searchHelperMock).toBeCalledWith(http, 'foo', ['album'], {
        limit: 2,
      });
    });
  });

  describe('searchArtists', () => {
    beforeEach(() => {
      searchHelperMock.mockResolvedValue(searchArtistsFixture);
    });

    it('should search for an artist (without options)', async () => {
      const { http, search } = setup();

      const response = await search.searchArtists('foo');

      expect(response).toEqual(searchArtistsFixture.artists);
      expect(searchHelperMock).toBeCalledWith(
        http,
        'foo',
        ['artist'],
        undefined,
      );
    });

    it('should search for an artist (with options)', async () => {
      const { http, search } = setup();

      const response = await search.searchArtists('foo', { limit: 2 });

      expect(response).toEqual(searchArtistsFixture.artists);
      expect(searchHelperMock).toBeCalledWith(http, 'foo', ['artist'], {
        limit: 2,
      });
    });
  });

  describe('searchEpisodes', () => {
    beforeEach(() => {
      searchHelperMock.mockResolvedValue(searchEpisodesFixture);
    });

    it('should search for an episode (without options)', async () => {
      const { http, search } = setup();

      const response = await search.searchEpisodes('foo');

      expect(response).toEqual(searchEpisodesFixture.episodes);
      expect(searchHelperMock).toBeCalledWith(
        http,
        'foo',
        ['episode'],
        undefined,
      );
    });

    it('should search for an episode (with options)', async () => {
      const { http, search } = setup();

      const response = await search.searchEpisodes('foo', { limit: 2 });

      expect(response).toEqual(searchEpisodesFixture.episodes);
      expect(searchHelperMock).toBeCalledWith(http, 'foo', ['episode'], {
        limit: 2,
      });
    });
  });

  describe('searchPlaylists', () => {
    beforeEach(() => {
      searchHelperMock.mockResolvedValue(searchPlaylistsFixture);
    });

    it('should search for a playlist (without options)', async () => {
      const { http, search } = setup();

      const response = await search.searchPlaylists('foo');

      expect(response).toEqual(searchPlaylistsFixture.playlists);
      expect(searchHelperMock).toBeCalledWith(
        http,
        'foo',
        ['playlist'],
        undefined,
      );
    });

    it('should search for a playlist (with options)', async () => {
      const { http, search } = setup();

      const response = await search.searchPlaylists('foo', { limit: 2 });

      expect(response).toEqual(searchPlaylistsFixture.playlists);
      expect(searchHelperMock).toBeCalledWith(http, 'foo', ['playlist'], {
        limit: 2,
      });
    });
  });

  describe('searchShows', () => {
    beforeEach(() => {
      searchHelperMock.mockResolvedValue(searchShowsFixture);
    });

    it('should search for a show (without options)', async () => {
      const { http, search } = setup();

      const response = await search.searchShows('foo');

      expect(response).toEqual(searchShowsFixture.shows);
      expect(searchHelperMock).toBeCalledWith(http, 'foo', ['show'], undefined);
    });

    it('should search for a show (with options)', async () => {
      const { http, search } = setup();

      const response = await search.searchShows('foo', { limit: 2 });

      expect(response).toEqual(searchShowsFixture.shows);
      expect(searchHelperMock).toBeCalledWith(http, 'foo', ['show'], {
        limit: 2,
      });
    });
  });

  describe('searchTracks', () => {
    beforeEach(() => {
      searchHelperMock.mockResolvedValue(searchTracksFixture);
    });

    it('should search for a track (without options)', async () => {
      const { http, search } = setup();

      const response = await search.searchTracks('foo');

      expect(response).toEqual(searchTracksFixture.tracks);
      expect(searchHelperMock).toBeCalledWith(
        http,
        'foo',
        ['track'],
        undefined,
      );
    });

    it('should search for a track (with options)', async () => {
      const { http, search } = setup();

      const response = await search.searchTracks('foo', { limit: 2 });

      expect(response).toEqual(searchTracksFixture.tracks);
      expect(searchHelperMock).toBeCalledWith(http, 'foo', ['track'], {
        limit: 2,
      });
    });
  });
});
