import { Http } from "../helpers/Http";
import { SearchApi } from "./SearchApi";
import { searchHelper } from "../helpers/searchHelper";

jest.mock("../helpers/Http");
jest.mock("../helpers/searchHelper");

const HttpMock = Http as jest.MockedClass<typeof Http>;
const searchHelperMock = searchHelper as jest.MockedFunction<
  typeof searchHelper
>;

describe(SearchApi.name, () => {
  const httpMock = new HttpMock("token");

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe(SearchApi.prototype.search.name, () => {
    it("should search for an item (without options)", () => {
      const search = new SearchApi(httpMock);
      search.search("foo", ["album", "artist"]);
      expect(searchHelperMock).toBeCalledWith(
        httpMock,
        "foo",
        ["album", "artist"],
        undefined
      );
    });

    it("should search for an item (with options)", () => {
      const search = new SearchApi(httpMock);
      search.search("foo", ["album", "artist"], { limit: 2 });
      expect(searchHelperMock).toBeCalledWith(
        httpMock,
        "foo",
        ["album", "artist"],
        { limit: 2 }
      );
    });
  });

  describe(SearchApi.prototype.searchAlbums.name, () => {
    it("should search for an album (without options)", () => {
      const search = new SearchApi(httpMock);
      search.searchAlbums("foo");
      expect(searchHelperMock).toBeCalledWith(
        httpMock,
        "foo",
        ["album"],
        undefined
      );
    });

    it("should search for an album (with options)", () => {
      const search = new SearchApi(httpMock);
      search.searchAlbums("foo", { limit: 2 });
      expect(searchHelperMock).toBeCalledWith(httpMock, "foo", ["album"], {
        limit: 2
      });
    });
  });

  describe(SearchApi.prototype.searchArtists.name, () => {
    it("should search for an artist (without options)", () => {
      const search = new SearchApi(httpMock);
      search.searchArtists("foo");
      expect(searchHelperMock).toBeCalledWith(
        httpMock,
        "foo",
        ["artist"],
        undefined
      );
    });

    it("should search for an artist (with options)", () => {
      const search = new SearchApi(httpMock);
      search.searchArtists("foo", { limit: 2 });
      expect(searchHelperMock).toBeCalledWith(httpMock, "foo", ["artist"], {
        limit: 2
      });
    });
  });

  describe(SearchApi.prototype.searchEpisodes.name, () => {
    it("should search for an episode (without options)", () => {
      const search = new SearchApi(httpMock);
      search.searchEpisodes("foo");
      expect(searchHelperMock).toBeCalledWith(
        httpMock,
        "foo",
        ["episode"],
        undefined
      );
    });

    it("should search for an episode (with options)", () => {
      const search = new SearchApi(httpMock);
      search.searchEpisodes("foo", { limit: 2 });
      expect(searchHelperMock).toBeCalledWith(httpMock, "foo", ["episode"], {
        limit: 2
      });
    });
  });

  describe(SearchApi.prototype.searchPlaylists.name, () => {
    it("should search for a playlist (without options)", () => {
      const search = new SearchApi(httpMock);
      search.searchPlaylists("foo");
      expect(searchHelperMock).toBeCalledWith(
        httpMock,
        "foo",
        ["playlist"],
        undefined
      );
    });

    it("should search for a playlist (with options)", () => {
      const search = new SearchApi(httpMock);
      search.searchPlaylists("foo", { limit: 2 });
      expect(searchHelperMock).toBeCalledWith(httpMock, "foo", ["playlist"], {
        limit: 2
      });
    });
  });

  describe(SearchApi.prototype.searchShows.name, () => {
    it("should search for a show (without options)", () => {
      const search = new SearchApi(httpMock);
      search.searchShows("foo");
      expect(searchHelperMock).toBeCalledWith(
        httpMock,
        "foo",
        ["show"],
        undefined
      );
    });

    it("should search for a show (with options)", () => {
      const search = new SearchApi(httpMock);
      search.searchShows("foo", { limit: 2 });
      expect(searchHelperMock).toBeCalledWith(httpMock, "foo", ["show"], {
        limit: 2
      });
    });
  });

  describe(SearchApi.prototype.searchTracks.name, () => {
    it("should search for a track (without options)", () => {
      const search = new SearchApi(httpMock);
      search.searchTracks("foo");
      expect(searchHelperMock).toBeCalledWith(
        httpMock,
        "foo",
        ["track"],
        undefined
      );
    });

    it("should search for a track (with options)", () => {
      const search = new SearchApi(httpMock);
      search.searchTracks("foo", { limit: 2 });
      expect(searchHelperMock).toBeCalledWith(httpMock, "foo", ["track"], {
        limit: 2
      });
    });
  });
});
