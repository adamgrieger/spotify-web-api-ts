import { SpotifyWebApi } from "./SpotifyWebApi";

describe("SpotifyWebApi", () => {
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
});
