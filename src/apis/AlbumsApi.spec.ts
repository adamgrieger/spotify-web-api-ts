import { Http } from "../helpers/Http";
import { AlbumsApi } from "./AlbumsApi";

jest.mock("../helpers/Http");

const HttpMock = Http as jest.Mocked<typeof Http>;

describe("AlbumsApi", () => {
  const http = new HttpMock("token");

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getAlbum", () => {
    it("should get an album (without options)", () => {
      const albums = new AlbumsApi(http);
      albums.getAlbum("foo");
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/albums/foo", undefined);
    });

    it("should get an album (with options)", () => {
      const albums = new AlbumsApi(http);
      albums.getAlbum("foo", {
        market: "bar"
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/albums/foo", {
        params: {
          market: "bar"
        }
      });
    });
  });

  describe("getAlbums", () => {
    it("should get several albums (without options)", () => {
      const albums = new AlbumsApi(http);
      albums.getAlbums(["foo", "bar"]);
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/albums", {
        params: {
          ids: ["foo", "bar"]
        }
      });
    });

    it("should get several albums (with options)", () => {
      const albums = new AlbumsApi(http);
      albums.getAlbums(["foo", "bar"], {
        market: "baz"
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/albums", {
        params: {
          ids: ["foo", "bar"],
          market: "baz"
        }
      });
    });
  });

  describe("getAlbumTracks", () => {
    it("should get an album's tracks (without options)", () => {
      const albums = new AlbumsApi(http);
      albums.getAlbumTracks("foo");
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/albums/foo/tracks", undefined);
    });

    it("should get an album's tracks (with options)", () => {
      const albums = new AlbumsApi(http);
      albums.getAlbumTracks("foo", {
        market: "bar"
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/albums/foo/tracks", {
        params: {
          market: "bar"
        }
      });
    });
  });
});
