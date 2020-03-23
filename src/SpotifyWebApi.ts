import { Http } from "./helpers/Http";
import * as api from "./api";

export class SpotifyWebApi {
  private http: Http;

  public albums: api.AlbumsApi;

  public artists: api.ArtistsApi;

  public browse: api.BrowseApi;

  public follow: api.FollowApi;

  public library: api.LibraryApi;

  public personalization: api.PersonalizationApi;

  public player: api.PlayerApi;

  constructor(accessToken: string) {
    this.http = new Http(accessToken);

    this.albums = new api.AlbumsApi(this.http);
    this.artists = new api.ArtistsApi(this.http);
    this.browse = new api.BrowseApi(this.http);
    this.follow = new api.FollowApi(this.http);
    this.library = new api.LibraryApi(this.http);
    this.personalization = new api.PersonalizationApi(this.http);
    this.player = new api.PlayerApi(this.http);
  }

  getAccessToken() {
    return this.http.getAccessToken();
  }

  setAccessToken(accessToken: string) {
    this.http.setAccessToken(accessToken);
  }
}
