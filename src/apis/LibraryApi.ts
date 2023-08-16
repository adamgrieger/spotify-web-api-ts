import {
  LibraryService,
  type PagingSavedAlbumObject,
  type PagingSavedEpisodeObject,
  type PagingSavedShowObject,
  type PagingSavedTrackObject,
  type PagingSimplifiedAudiobookObject,
} from '../openapi';
import {
  type GetSavedAlbumsOptions,
  type GetSavedAudiobooksOptions,
  type GetSavedEpisodesOptions,
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
   * Check User's Saved Audiobooks
   *
   * Check if one or more audiobooks are saved in the current user's library.
   *
   * @param audiobookIds The Spotify IDs of the audiobooks.
   */
  public async areAudiobooksSaved(audiobookIds: string[]): Promise<boolean[]> {
    return await LibraryService.checkUsersSavedAudiobooks(
      audiobookIds.join(','),
    );
  }

  /**
   * Check User's Saved Episodes
   *
   * Check if one or more episodes are saved in the current user's library.
   *
   * @param episodeIds The Spotify IDs of the episodes.
   */
  public async areEpisodesSaved(episodeIds: string[]): Promise<boolean[]> {
    return await LibraryService.checkUsersSavedEpisodes(episodeIds.join(','));
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
   * Get the Current User's Saved Audiobooks
   *
   * Get a list of audiobooks saved in the current user's library.
   *
   * @param options Optional request information.
   */
  public async getSavedAudiobooks(
    options?: GetSavedAudiobooksOptions,
  ): Promise<PagingSimplifiedAudiobookObject> {
    return await LibraryService.getUsersSavedAudiobooks(
      options?.limit,
      options?.offset,
    );
  }

  /**
   * Get the Current User's Saved Episodes
   *
   * Get a list of episodes saved in the current user's library.
   *
   * @param options Optional request information.
   */
  public async getSavedEpisodes(
    options?: GetSavedEpisodesOptions,
  ): Promise<PagingSavedEpisodeObject> {
    return await LibraryService.getUsersSavedEpisodes(
      options?.market,
      options?.limit,
      options?.offset,
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
   * Check User's Saved Audiobooks
   *
   * Check if an audiobook is saved in the current user's library.
   *
   * @param audiobookId The Spotify ID of the audiobook.
   */
  public async isAudiobookSaved(audiobookId: string): Promise<boolean> {
    const response = await this.areAudiobooksSaved([audiobookId]);
    return response[0];
  }

  /**
   * Check User's Saved Episodes
   *
   * Check if an episode is saved in the current user's library.
   *
   * @param episodeId The Spotify ID of the episode.
   */
  public async isEpisodeSaved(episodeId: string): Promise<boolean> {
    const response = await this.areEpisodesSaved([episodeId]);
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
   * Remove Audiobook for the Current User
   *
   * Remove an audiobook from the current user's library.
   *
   * @param audiobookId The Spotify ID of the audiobook.
   */
  public async removeSavedAudiobook(audiobookId: string): Promise<void> {
    await this.removeSavedAudiobooks([audiobookId]);
  }

  /**
   * Remove Audiobooks for the Current User
   *
   * Remove one or more audiobooks from the current user's library.
   *
   * @param audiobookIds The Spotify IDs of the audiobooks.
   */
  public async removeSavedAudiobooks(audiobookIds: string[]): Promise<void> {
    return await LibraryService.removeAudiobooksUser(audiobookIds.join(','));
  }

  /**
   * Remove Episode for the Current User
   *
   * Remove an episode from the current user's library.
   *
   * @param episodeId The Spotify ID of the episode.
   */
  public async removeSavedEpisode(episodeId: string): Promise<void> {
    await this.removeSavedEpisodes([episodeId]);
  }

  /**
   * Remove Episodes for the Current User
   *
   * Remove one or more episodes from the current user's library.
   *
   * @param episodeIds The Spotify IDs of the episodes.
   */
  public async removeSavedEpisodes(episodeIds: string[]): Promise<void> {
    return await LibraryService.removeEpisodesUser(episodeIds.join(','));
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
   * Save Audiobook for the Current User
   *
   * Save an audiobook to the current user's library.
   *
   * @param audiobookId The Spotify ID of the audiobook.
   */
  public async saveAudiobook(audiobookId: string): Promise<void> {
    await this.saveAudiobooks([audiobookId]);
  }

  /**
   * Save Audiobooks for the Current User
   *
   * Save one or more audiobooks to the current user's library.
   *
   * @param audiobookIds The Spotify IDs of the audiobooks.
   */
  public async saveAudiobooks(audiobookIds: string[]): Promise<void> {
    return await LibraryService.saveAudiobooksUser(audiobookIds.join(','));
  }

  /**
   * Save Episode for Current User
   *
   * Save an episode to the current user's library.
   *
   * @param episodeId The Spotify ID of the episode.
   */
  public async saveEpisode(episodeId: string): Promise<void> {
    await this.saveEpisodes([episodeId]);
  }

  /**
   * Save Episodes for Current User
   *
   * Save one or more episodes to the current user's library.
   *
   * @param episodeIds The Spotify IDs of the episodes.
   */
  public async saveEpisodes(episodeIds: string[]): Promise<void> {
    return await LibraryService.saveEpisodesUser(episodeIds.join(','));
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
