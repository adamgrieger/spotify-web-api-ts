import {
  LibraryService,
  type PagingSavedAlbumObject,
  type PagingSavedShowObject,
  type PagingSavedTrackObject,
} from '../openapi';
import {
  type GetSavedAlbumsOptions,
  type GetSavedShowsOptions,
  type GetSavedTracksOptions,
  type RemoveSavedShowsOptions,
} from '../types/SpotifyOptions';

export class LibraryApi {
  /**
   * Check User's Saved Albums
   *
   * Check if one or more albums are saved in the current user's library.
   *
   * @param albumIds The Spotify IDs of the albums.
   */
  public async areAlbumsSaved(albumIds: string[]): Promise<boolean[]> {
    return await LibraryService.checkUsersSavedAlbums(albumIds.join(','));
  }

  /**
   * Check User's Saved Shows
   *
   * Check if one or more shows are saved in the current user's library.
   *
   * @param showIds The Spotify IDs of the shows.
   */
  public async areShowsSaved(showIds: string[]): Promise<boolean[]> {
    return await LibraryService.checkUsersSavedShows(showIds.join(','));
  }

  /**
   * Check User's Saved Tracks
   *
   * Check if one or more tracks are saved in the current user's library.
   *
   * @param trackIds The Spotify IDs of the tracks.
   */
  public async areTracksSaved(trackIds: string[]): Promise<boolean[]> {
    return await LibraryService.checkUsersSavedTracks(trackIds.join(','));
  }

  /**
   * Get the Current User's Saved Albums
   *
   * Get a list of albums saved in the current user's library.
   *
   * @param options Optional request information.
   */
  public async getSavedAlbums(
    options?: GetSavedAlbumsOptions,
  ): Promise<PagingSavedAlbumObject> {
    return await LibraryService.getUsersSavedAlbums(
      options?.limit,
      options?.offset,
      options?.market,
    );
  }

  /**
   * Get the Current User's Saved Shows
   *
   * Get a list of shows saved in the current user's library.
   *
   * @param options Optional request information.
   */
  public async getSavedShows(
    options?: GetSavedShowsOptions,
  ): Promise<PagingSavedShowObject> {
    return await LibraryService.getUsersSavedShows(
      options?.limit,
      options?.offset,
    );
  }

  /**
   * Get the Current User's Saved Tracks
   *
   * Get a list of tracks saved in the current user's library.
   *
   * @param options Optional request information.
   */
  public async getSavedTracks(
    options?: GetSavedTracksOptions,
  ): Promise<PagingSavedTrackObject> {
    return await LibraryService.getUsersSavedTracks(
      options?.market,
      options?.limit,
      options?.offset,
    );
  }

  /**
   * Check User's Saved Albums
   *
   * Check if an album is saved in the current user's library.
   *
   * @param albumId The Spotify ID of the album.
   */
  public async isAlbumSaved(albumId: string): Promise<boolean> {
    const response = await this.areAlbumsSaved([albumId]);
    return response[0];
  }

  /**
   * Check User's Saved Shows
   *
   * Check if a show is saved in the current user's library.
   *
   * @param showId The Spotify ID of the show.
   */
  public async isShowSaved(showId: string): Promise<boolean> {
    const response = await this.areShowsSaved([showId]);
    return response[0];
  }

  /**
   * Check User's Saved Tracks
   *
   * Check if a track is saved in the current user's library.
   *
   * @param trackId The Spotify ID of the track.
   */
  public async isTrackSaved(trackId: string): Promise<boolean> {
    const response = await this.areTracksSaved([trackId]);
    return response[0];
  }

  /**
   * Remove Album for the Current User
   *
   * Remove an album from the current user's library.
   *
   * @param albumId The Spotify ID of the album.
   */
  public async removeSavedAlbum(albumId: string): Promise<void> {
    await this.removeSavedAlbums([albumId]);
  }

  /**
   * Remove Albums for the Current User
   *
   * Remove one or more albums from the current user's library.
   *
   * @param albumIds The Spotify IDs of the albums.
   */
  public async removeSavedAlbums(albumIds: string[]): Promise<void> {
    return await LibraryService.removeAlbumsUser(albumIds.join(','));
  }

  /**
   * Remove Show for the Current User
   *
   * Remove a show from the current user's library.
   *
   * @param showId The Spotify ID of the show.
   * @param options Optional request information.
   */
  public async removeSavedShow(
    showId: string,
    options?: RemoveSavedShowsOptions,
  ): Promise<void> {
    await this.removeSavedShows([showId], options);
  }

  /**
   * Remove Shows for the Current User
   *
   * Remove one or more shows from the current user's library.
   *
   * @param showIds The Spotify IDs of the shows.
   * @param options Optional request information.
   */
  public async removeSavedShows(
    showIds: string[],
    options?: RemoveSavedShowsOptions,
  ): Promise<void> {
    return await LibraryService.removeShowsUser(
      showIds.join(','),
      options?.market,
    );
  }

  /**
   * Remove Track for the Current User
   *
   * Remove a track from the current user's library.
   *
   * @param trackId The Spotify ID of the track.
   */
  public async removeSavedTrack(trackId: string): Promise<void> {
    await this.removeSavedTracks([trackId]);
  }

  /**
   * Remove Tracks for the Current User
   *
   * Remove one or more tracks from the current user's library.
   *
   * @param trackIds The Spotify IDs of the tracks.
   */
  public async removeSavedTracks(trackIds: string[]): Promise<void> {
    return await LibraryService.removeTracksUser(trackIds.join(','));
  }

  /**
   * Save Album for the Current User
   *
   * Save an album to the current user's library.
   *
   * @param albumId The Spotify ID of the album.
   */
  public async saveAlbum(albumId: string): Promise<void> {
    await this.saveAlbums([albumId]);
  }

  /**
   * Save Albums for the Current User
   *
   * Save one or more albums to the current user's library.
   *
   * @param albumIds The Spotify IDs of the albums.
   */
  public async saveAlbums(albumIds: string[]): Promise<void> {
    return await LibraryService.saveAlbumsUser(albumIds.join(','));
  }

  /**
   * Save Show for the Current User
   *
   * Save a show to the current user's library.
   *
   * @param showId The Spotify ID of the show.
   */
  public async saveShow(showId: string): Promise<void> {
    await this.saveShows([showId]);
  }

  /**
   * Save Shows for the Current User
   *
   * Save one or more shows to the current user's library.
   *
   * @param showIds The Spotify IDs of the shows.
   */
  public async saveShows(showIds: string[]): Promise<void> {
    return await LibraryService.saveShowsUser(showIds.join(','));
  }

  /**
   * Save Track for the Current User
   *
   * Save a track to the current user's library.
   *
   * @param trackId The Spotify ID of the track.
   */
  public async saveTrack(trackId: string): Promise<void> {
    await this.saveTracks([trackId]);
  }

  /**
   * Save Tracks for the Current User
   *
   * Save one or more tracks to the current user's library.
   *
   * @param trackIds The Spotify IDs of the tracks.
   */
  public async saveTracks(trackIds: string[]): Promise<void> {
    return await LibraryService.saveTracksUser(trackIds.join(','));
  }
}
