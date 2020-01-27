import axios from "axios";
import { spotifyAxios } from "./spotifyAxios";
import { BASE_URL } from "../config";

jest.mock("axios");

const axiosMock = (axios as unknown) as jest.Mock;

describe("spotifyAxios", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should successfully call Spotify's Web API", async () => {
    axiosMock.mockResolvedValue({ data: "foo" });
    await spotifyAxios("foo", "GET", "token", {
      params: {
        bar: "baz"
      }
    });
    expect(axiosMock).toBeCalledWith({
      params: {
        bar: "baz"
      },
      baseURL: BASE_URL,
      headers: {
        Authorization: "Bearer token"
      },
      url: "foo",
      method: "GET"
    });
  });

  it("should handle errors", async () => {
    const testError = { message: "testMessage" };
    axiosMock.mockRejectedValue(testError);

    try {
      await spotifyAxios("foo", "GET", "token");
    } catch (error) {
      const err = error as Error;
      expect(err.message).toBe("testMessage");
    }
  });
});
