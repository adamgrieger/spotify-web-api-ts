import { Http } from "./helpers/Http";
import * as api from "./api";

export class SpotifyWebApi {
  private http: Http;

  public albums: api.AlbumsApi;

  public artists: api.ArtistsApi;

  public browse: api.BrowseApi;

  constructor(accessToken: string) {
    this.http = new Http(accessToken);

    this.albums = new api.AlbumsApi(this.http);
    this.artists = new api.ArtistsApi(this.http);
    this.browse = new api.BrowseApi(this.http);
  }

  getAccessToken() {
    return this.http.getAccessToken();
  }

  setAccessToken(accessToken: string) {
    this.http.setAccessToken(accessToken);
  }
}
