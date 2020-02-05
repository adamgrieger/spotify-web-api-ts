import { Http } from "../helpers/Http";
import { LibraryApi } from "./LibraryApi";

jest.mock("../helpers/Http");

const HttpMock = Http as jest.Mocked<typeof Http>;

describe("LibraryApi", () => {
  const http = new HttpMock("token");

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("areAlbumsSaved", () => {
    it("should check if one or more albums are saved in the current user's library", () => {
      const library = new LibraryApi(http);
      library.areAlbumsSaved(["foo", "bar"]);
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/me/albums/contains", {
        params: {
          ids: ["foo", "bar"]
        }
      });
    });
  });

  describe("areTracksSaved", () => {
    it("should check if one or more tracks are saved in the current user's library", () => {
      const library = new LibraryApi(http);
      library.areTracksSaved(["foo", "bar"]);
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/me/tracks/contains", {
        params: {
          ids: ["foo", "bar"]
        }
      });
    });
  });

  describe("getSavedAlbums", () => {
    it("should get a list of the albums saved in the current user's library (without options)", () => {
      const library = new LibraryApi(http);
      library.getSavedAlbums();
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/me/albums", undefined);
    });

    it("should get a list of the albums saved in the current user's library (with options)", () => {
      const library = new LibraryApi(http);
      library.getSavedAlbums({
        limit: 2
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/me/albums", {
        params: {
          limit: 2
        }
      });
    });
  });

  describe("getSavedTracks", () => {
    it("should get a list of the tracks saved in the current user's library (without options)", () => {
      const library = new LibraryApi(http);
      library.getSavedTracks();
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/me/tracks", undefined);
    });

    it("should get a list of the tracks saved in the current user's library (with options)", () => {
      const library = new LibraryApi(http);
      library.getSavedTracks({
        limit: 2
      });
      expect(http.get).toBeCalledTimes(1);
      expect(http.get).toBeCalledWith("/me/tracks", {
        params: {
          limit: 2
        }
      });
    });
  });

  describe("removeSavedAlbums", () => {
    it("should remove one or more albums from the current user's library", () => {
      const library = new LibraryApi(http);
      library.removeSavedAlbums(["foo", "bar"]);
      expect(http.delete).toBeCalledTimes(1);
      expect(http.delete).toBeCalledWith("/me/albums", {
        data: {
          ids: ["foo", "bar"]
        }
      });
    });
  });

  describe("removeSavedTracks", () => {
    it("should remove one or more tracks from the current user's library", () => {
      const library = new LibraryApi(http);
      library.removeSavedTracks(["foo", "bar"]);
      expect(http.delete).toBeCalledTimes(1);
      expect(http.delete).toBeCalledWith("/me/tracks", {
        data: {
          ids: ["foo", "bar"]
        }
      });
    });
  });

  describe("saveAlbums", () => {
    it("should save one or more albums to the current user's library", () => {
      const library = new LibraryApi(http);
      library.saveAlbums(["foo", "bar"]);
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith("/me/albums", {
        data: {
          ids: ["foo", "bar"]
        }
      });
    });
  });

  describe("saveTracks", () => {
    it("should save one or more tracks to the current user's library", () => {
      const library = new LibraryApi(http);
      library.saveTracks(["foo", "bar"]);
      expect(http.put).toBeCalledTimes(1);
      expect(http.put).toBeCalledWith("/me/tracks", {
        data: {
          ids: ["foo", "bar"]
        }
      });
    });
  });
});
