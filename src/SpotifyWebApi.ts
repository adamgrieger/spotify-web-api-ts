import { Http } from "./helpers/Http";
import * as apis from "./apis";

export class SpotifyWebApi {
  private http: Http;

  public albums: apis.AlbumsApi;

  public artists: apis.ArtistsApi;

  public browse: apis.BrowseApi;

  public follow: apis.FollowApi;

  public library: apis.LibraryApi;

  public personalization: apis.PersonalizationApi;

  public player: apis.PlayerApi;

  constructor(accessToken: string) {
    this.http = new Http(accessToken);

    this.albums = new apis.AlbumsApi(this.http);
    this.artists = new apis.ArtistsApi(this.http);
    this.browse = new apis.BrowseApi(this.http);
    this.follow = new apis.FollowApi(this.http);
    this.library = new apis.LibraryApi(this.http);
    this.personalization = new apis.PersonalizationApi(this.http);
    this.player = new apis.PlayerApi(this.http);
  }

  getAccessToken() {
    return this.http.getAccessToken();
  }

  setAccessToken(accessToken: string) {
    this.http.setAccessToken(accessToken);
  }
}
