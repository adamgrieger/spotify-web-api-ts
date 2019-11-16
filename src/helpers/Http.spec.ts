import axios from "axios";
import { Http } from "./Http";
import { constructAxiosConfig } from "./constructAxiosConfig";

jest.mock("axios");

const axiosMock = axios as jest.Mocked<typeof axios>;

describe("Http", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should get the access token", () => {
    const http = new Http("token");
    expect(http.getAccessToken()).toBe("token");
  });

  it("should set the access token", () => {
    const http = new Http("token");
    http.setAccessToken("newToken");
    expect(http.getAccessToken()).toBe("newToken");
  });

  describe("get", () => {
    it("should correctly call axios for GET requests (without config)", () => {
      const http = new Http("token");
      http.get("foo");
      expect(axiosMock.get).toBeCalledTimes(1);
      expect(axiosMock.get).toBeCalledWith(
        "foo",
        constructAxiosConfig("token")
      );
    });

    it("should correctly call axios for GET requests (with config)", () => {
      const http = new Http("token");
      http.get("foo", {
        params: {
          bar: "baz"
        }
      });
      expect(axiosMock.get).toBeCalledTimes(1);
      expect(axiosMock.get).toBeCalledWith("foo", {
        ...constructAxiosConfig("token"),
        params: {
          bar: "baz"
        }
      });
    });
  });
});
