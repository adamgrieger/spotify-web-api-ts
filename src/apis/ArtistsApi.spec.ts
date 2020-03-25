import { Http } from "../helpers/Http";
import { ArtistsApi } from "./ArtistsApi";

jest.mock("../helpers/Http");

const HttpMock = Http as jest.Mocked<typeof Http>;

describe("ArtistsApi", () => {
  const http = new HttpMock("token");

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getArtist", () => {
    it("should get an artist", () => {
      const artists = new ArtistsApi(http);
      artists.getArtist("foo");
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/artists/foo");
    });
  });

  describe("getArtistAlbums", () => {
    it("should get an artist's albums (without options)", () => {
      const artists = new ArtistsApi(http);
      artists.getArtistAlbums("foo");
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/artists/foo/albums", undefined);
    });

    it("should get an artist's albums (with options)", () => {
      const artists = new ArtistsApi(http);
      artists.getArtistAlbums("foo", {
        country: "bar"
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/artists/foo/albums", {
        params: {
          country: "bar"
        }
      });
    });
  });

  describe("getArtists", () => {
    it("should get several artists", () => {
      const artists = new ArtistsApi(http);
      artists.getArtists(["foo", "bar"]);
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/artists", {
        params: {
          ids: ["foo", "bar"]
        }
      });
    });
  });

  describe("getArtistTopTracks", () => {
    it("should get an artist's top tracks", () => {
      const artists = new ArtistsApi(http);
      artists.getArtistTopTracks("foo", "bar");
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/artists/foo/top-tracks", {
        params: {
          country: "bar"
        }
      });
    });
  });

  describe("getRelatedArtists", () => {
    it("should get an artist's related artists", () => {
      const artists = new ArtistsApi(http);
      artists.getRelatedArtists("foo");
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/artists/foo/related-artists");
    });
  });
});
