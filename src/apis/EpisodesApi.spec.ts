import { Http } from "../helpers/Http";
import { EpisodesApi } from "./EpisodesApi";

jest.mock("../helpers/Http");

const HttpMock = Http as jest.Mocked<typeof Http>;

describe("EpisodesApi", () => {
  const http = new HttpMock("token");

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getEpisode", () => {
    it("should get an episode (without options)", () => {
      const episodes = new EpisodesApi(http);
      episodes.getEpisode("foo");
      expect(http.get).toBeCalledWith("/episodes/foo", undefined);
    });

    it("should get an episode (with options)", () => {
      const episodes = new EpisodesApi(http);
      episodes.getEpisode("foo", { market: "bar" });
      expect(http.get).toBeCalledWith("/episodes/foo", {
        params: {
          market: "bar"
        }
      });
    });
  });

  describe("getEpisodes", () => {
    it("should get several episodes (without options)", () => {
      const episodes = new EpisodesApi(http);
      episodes.getEpisodes(["foo", "bar"]);
      expect(http.get).toBeCalledWith("/episodes", {
        params: {
          ids: ["foo", "bar"]
        }
      });
    });

    it("should get several episodes (with options)", () => {
      const episodes = new EpisodesApi(http);
      episodes.getEpisodes(["foo", "bar"], { market: "baz" });
      expect(http.get).toBeCalledWith("/episodes", {
        params: {
          ids: ["foo", "bar"],
          market: "baz"
        }
      });
    });
  });
});
