import axios from "axios";
import { SpotifyWebApi } from "./SpotifyWebApi";
import { constructAxiosConfig } from "./helpers/constructAxiosConfig";

jest.mock("axios");

describe("SpotifyWebApi", () => {
  const axiosMock = axios as jest.Mocked<typeof axios>;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should get the access token", () => {
    const spotify = new SpotifyWebApi("token");
    expect(spotify.getAccessToken()).toBe("token");
  });

  it("should set the access token", () => {
    const spotify = new SpotifyWebApi("token");
    spotify.setAccessToken("newToken");
    expect(spotify.getAccessToken()).toBe("newToken");
  });

  describe("Albums endpoints", () => {
    describe("getAlbum", () => {
      it("should get an album (without options)", () => {
        const spotify = new SpotifyWebApi("token");
        spotify.getAlbum("foo");
        expect(axiosMock.get).toBeCalledWith(
          "/albums/foo",
          constructAxiosConfig("token")
        );
      });

      it("should get an album (with options)", () => {
        const spotify = new SpotifyWebApi("token");
        spotify.getAlbum("foo", {
          market: "bar"
        });
        expect(axiosMock.get).toBeCalledWith("/albums/foo", {
          ...constructAxiosConfig("token"),
          params: {
            market: "bar"
          }
        });
      });
    });

    describe("getAlbums", () => {
      it("should get several albums (without options)", () => {
        const spotify = new SpotifyWebApi("token");
        spotify.getAlbums(["foo", "bar"]);
        expect(axiosMock.get).toBeCalledWith("/albums", {
          ...constructAxiosConfig("token"),
          params: {
            ids: ["foo", "bar"]
          }
        });
      });

      it("should get several albums (with options)", () => {
        const spotify = new SpotifyWebApi("token");
        spotify.getAlbums(["foo", "bar"], {
          market: "baz"
        });
        expect(axiosMock.get).toBeCalledWith("/albums", {
          ...constructAxiosConfig("token"),
          params: {
            ids: ["foo", "bar"],
            market: "baz"
          }
        });
      });
    });

    describe("getAlbumTracks", () => {
      it("should get an album's tracks (without options)", () => {
        const spotify = new SpotifyWebApi("token");
        spotify.getAlbumTracks("foo");
        expect(axiosMock.get).toBeCalledWith(
          "/albums/foo/tracks",
          constructAxiosConfig("token")
        );
      });

      it("should get an album's tracks (with options)", () => {
        const spotify = new SpotifyWebApi("token");
        spotify.getAlbumTracks("foo", {
          market: "bar"
        });
        expect(axiosMock.get).toBeCalledWith("/albums/foo/tracks", {
          ...constructAxiosConfig("token"),
          params: {
            market: "bar"
          }
        });
      });
    });
  });

  describe("Artists endpoints", () => {
    describe("getArtist", () => {
      it("should get an artist", () => {
        const spotify = new SpotifyWebApi("token");
        spotify.getArtist("foo");
        expect(axiosMock.get).toBeCalledWith(
          "/artists/foo",
          constructAxiosConfig("token")
        );
      });
    });

    describe("getArtistAlbums", () => {
      it("should get an artist's albums (without options)", () => {
        const spotify = new SpotifyWebApi("token");
        spotify.getArtistAlbums("foo");
        expect(axiosMock.get).toBeCalledWith(
          "/artists/foo/albums",
          constructAxiosConfig("token")
        );
      });

      it("should get an artist's albums (with options)", () => {
        const spotify = new SpotifyWebApi("token");
        spotify.getArtistAlbums("foo", {
          country: "bar"
        });
        expect(axiosMock.get).toBeCalledWith("/artists/foo/albums", {
          ...constructAxiosConfig("token"),
          params: {
            country: "bar"
          }
        });
      });
    });

    describe("getArtists", () => {
      it("should get several artists", () => {
        const spotify = new SpotifyWebApi("token");
        spotify.getArtists(["foo", "bar"]);
        expect(axiosMock.get).toBeCalledWith("/artists", {
          ...constructAxiosConfig("token"),
          params: {
            ids: ["foo", "bar"]
          }
        });
      });
    });

    describe("getArtistTopTracks", () => {
      it("should get an artist's top tracks", () => {
        const spotify = new SpotifyWebApi("token");
        spotify.getArtistTopTracks("foo", "bar");
        expect(axiosMock.get).toBeCalledWith("/artists/foo/top-tracks", {
          ...constructAxiosConfig("token"),
          params: {
            country: "bar"
          }
        });
      });
    });

    describe("getRelatedArtists", () => {
      it("should get an artist's related artists", () => {
        const spotify = new SpotifyWebApi("token");
        spotify.getRelatedArtists("foo");
        expect(axiosMock.get).toBeCalledWith(
          "/artists/foo/related-artists",
          constructAxiosConfig("token")
        );
      });
    });
  });
});
