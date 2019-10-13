import { constructAxiosConfig } from "./constructAxiosConfig";
import { BASE_URL } from "../config";

describe("constructAxiosConfig", () => {
  it("should construct a valid axios config for use with Spotify", () => {
    const config = constructAxiosConfig("token");
    expect(config).toEqual({
      baseUrl: BASE_URL,
      headers: {
        Authorization: "Bearer token"
      }
    });
  });
});
