/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalUrlObject } from './ExternalUrlObject';
import type { FollowersObject } from './FollowersObject';
import type { ImageObject } from './ImageObject';
import type { PagingPlaylistTrackObject } from './PagingPlaylistTrackObject';
import type { PlaylistOwnerObject } from './PlaylistOwnerObject';

export type PlaylistObject = {
    /**
     * `true` if the owner allows other users to modify the playlist.
 * 
     */
    collaborative?: boolean;
    /**
     * The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.
 * 
     */
    description?: string | null;
    /**
     * Known external URLs for this playlist.
 * 
     */
    external_urls?: ExternalUrlObject;
    /**
     * Information about the followers of the playlist.
     */
    followers?: FollowersObject;
    /**
     * A link to the Web API endpoint providing full details of the playlist.
 * 
     */
    href?: string;
    /**
     * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
 * 
     */
    id?: string;
    /**
     * Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._
 * 
     */
    images?: Array<ImageObject>;
    /**
     * The name of the playlist.
 * 
     */
    name?: string;
    /**
     * The user who owns the playlist
 * 
     */
    owner?: PlaylistOwnerObject;
    /**
     * The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
 * 
     */
    public?: boolean;
    /**
     * The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
 * 
     */
    snapshot_id?: string;
    /**
     * The tracks of the playlist.
 * 
     */
    tracks?: PagingPlaylistTrackObject;
    /**
     * The object type: "playlist"
 * 
     */
    type?: string;
    /**
     * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
 * 
     */
    uri?: string;
};
