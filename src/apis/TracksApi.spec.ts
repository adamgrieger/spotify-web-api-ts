import { TracksApi } from "./TracksApi";
import { Http } from "../helpers/Http";

jest.mock("../helpers/Http");

const HttpMock = Http as jest.MockedClass<typeof Http>;

describe(TracksApi.name, () => {
  const httpMock = new HttpMock("token");

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getAudioAnalysisForTrack", () => {
    it("should get audio analysis for a track", () => {
      const tracks = new TracksApi(httpMock);
      tracks.getAudioAnalysisForTrack("foo");
      expect(httpMock.get).toBeCalledWith("/audio-analysis/foo");
    });
  });

  describe("getAudioFeaturesForTrack", () => {
    it("should get audio features for a track", () => {
      const tracks = new TracksApi(httpMock);
      tracks.getAudioFeaturesForTrack("foo");
      expect(httpMock.get).toBeCalledWith("/audio-features/foo");
    });
  });

  describe("getAudioFeaturesForTracks", () => {
    it("should get audio features for several tracks", () => {
      const tracks = new TracksApi(httpMock);
      tracks.getAudioFeaturesForTracks(["foo", "bar"]);
      expect(httpMock.get).toBeCalledWith("/audio-features", {
        params: {
          ids: ["foo", "bar"]
        }
      });
    });
  });

  describe("getTrack", () => {
    it("should get a track (without options)", () => {
      const tracks = new TracksApi(httpMock);
      tracks.getTrack("foo");
      expect(httpMock.get).toBeCalledWith("/tracks/foo", undefined);
    });

    it("should get a track (with options)", () => {
      const tracks = new TracksApi(httpMock);
      tracks.getTrack("foo", { market: "bar" });
      expect(httpMock.get).toBeCalledWith("/tracks/foo", {
        params: {
          market: "bar"
        }
      });
    });
  });

  describe("getTracks", () => {
    it("should get several tracks (without options)", () => {
      const tracks = new TracksApi(httpMock);
      tracks.getTracks(["foo", "bar"]);
      expect(httpMock.get).toBeCalledWith("/tracks", {
        params: {
          ids: ["foo", "bar"]
        }
      });
    });

    it("should get several tracks (with options)", () => {
      const tracks = new TracksApi(httpMock);
      tracks.getTracks(["foo", "bar"], { market: "baz" });
      expect(httpMock.get).toBeCalledWith("/tracks", {
        params: {
          ids: ["foo", "bar"],
          market: "baz"
        }
      });
    });
  });
});
