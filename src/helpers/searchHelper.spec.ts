import { searchHelper } from "./searchHelper";
import { Http } from "./Http";

jest.mock("./Http");

const HttpMock = Http as jest.MockedClass<typeof Http>;

describe(searchHelper.name, () => {
  const httpMock = new HttpMock("token");

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should search for an item (without options)", () => {
    searchHelper(httpMock, "foo", ["album", "artist"]);
    expect(httpMock.get).toBeCalledWith("/search", {
      params: {
        q: "foo",
        type: ["album", "artist"]
      }
    });
  });

  it("should search for an item (with options)", () => {
    searchHelper(httpMock, "foo", ["album", "artist"], { limit: 2 });
    expect(httpMock.get).toBeCalledWith("/search", {
      params: {
        q: "foo",
        type: ["album", "artist"],
        limit: 2
      }
    });
  });
});
