/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtistObject } from '../models/ArtistObject';
import type { AudioAnalysisObject } from '../models/AudioAnalysisObject';
import type { AudioFeaturesObject } from '../models/AudioFeaturesObject';
import type { PagingObject } from '../models/PagingObject';
import type { PagingPlaylistTrackObject } from '../models/PagingPlaylistTrackObject';
import type { PagingSavedTrackObject } from '../models/PagingSavedTrackObject';
import type { PagingSimplifiedTrackObject } from '../models/PagingSimplifiedTrackObject';
import type { RecommendationsObject } from '../models/RecommendationsObject';
import type { TrackObject } from '../models/TrackObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TracksService {

    /**
     * Get Album Tracks
 * 
     * Get Spotify catalog information about an album’s tracks.
 * Optional parameters can be used to limit the number of tracks returned.
 * 
     * @param id 
     * @param market 
     * @param limit 
     * @param offset 
     * @returns PagingSimplifiedTrackObject Pages of tracks
     * @throws ApiError
     */
    public static getAnAlbumsTracks(
id: string,
market?: string,
limit: number = 20,
offset?: number,
): CancelablePromise<PagingSimplifiedTrackObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/albums/{id}/tracks',
            path: {
                'id': id,
            },
            query: {
                'market': market,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Get Artist's Top Tracks
 * 
     * Get Spotify catalog information about an artist's top tracks by country.
 * 
     * @param id 
     * @param market 
     * @returns any A set of tracks
     * @throws ApiError
     */
    public static getAnArtistsTopTracks(
id: string,
market?: string,
): CancelablePromise<{
tracks: Array<TrackObject>;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/artists/{id}/top-tracks',
            path: {
                'id': id,
            },
            query: {
                'market': market,
            },
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Get Track
 * 
     * Get Spotify catalog information for a single track identified by its
 * unique Spotify ID.
 * 
     * @param id 
     * @param market 
     * @returns TrackObject A track
     * @throws ApiError
     */
    public static getTrack(
id: string,
market?: string,
): CancelablePromise<TrackObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tracks/{id}',
            path: {
                'id': id,
            },
            query: {
                'market': market,
            },
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Get Several Tracks
 * 
     * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
 * 
     * @param ids 
     * @param market 
     * @returns any A set of tracks
     * @throws ApiError
     */
    public static getSeveralTracks(
ids: string,
market?: string,
): CancelablePromise<{
tracks: Array<TrackObject>;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tracks',
            query: {
                'market': market,
                'ids': ids,
            },
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Get Playlist Items
 * 
     * Get full details of the items of a playlist owned by a Spotify user.
 * 
     * @param playlistId 
     * @param market 
     * @param fields 
     * @param limit 
     * @param offset 
     * @param additionalTypes 
     * @returns PagingPlaylistTrackObject Pages of tracks
     * @throws ApiError
     */
    public static getPlaylistsTracks(
playlistId: string,
market?: string,
fields?: string,
limit: number = 20,
offset?: number,
additionalTypes?: string,
): CancelablePromise<PagingPlaylistTrackObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/playlists/{playlist_id}/tracks',
            path: {
                'playlist_id': playlistId,
            },
            query: {
                'market': market,
                'fields': fields,
                'limit': limit,
                'offset': offset,
                'additional_types': additionalTypes,
            },
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Add Items to Playlist
 * 
     * Add one or more items to a user's playlist.
 * 
     * @param playlistId 
     * @param position 
     * @param uris 
     * @param requestBody 
     * @returns any A snapshot ID for the playlist
     * @throws ApiError
     */
    public static addTracksToPlaylist(
playlistId: string,
position?: number,
uris?: string,
requestBody?: Record<string, any>,
): CancelablePromise<{
snapshot_id?: string;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/playlists/{playlist_id}/tracks',
            path: {
                'playlist_id': playlistId,
            },
            query: {
                'position': position,
                'uris': uris,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Update Playlist Items
 * 
     * Either reorder or replace items in a playlist depending on the request's parameters.
 * To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
 * To replace items, include `uris` as either a query parameter or in the request's body.
 * Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
 * <br/>
 * **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
 * These operations can't be applied together in a single request.
 * 
     * @param playlistId 
     * @param uris 
     * @param requestBody 
     * @returns any A snapshot ID for the playlist
     * @throws ApiError
     */
    public static reorderOrReplacePlaylistsTracks(
playlistId: string,
uris?: string,
requestBody?: Record<string, any>,
): CancelablePromise<{
snapshot_id?: string;
}> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/playlists/{playlist_id}/tracks',
            path: {
                'playlist_id': playlistId,
            },
            query: {
                'uris': uris,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Remove Playlist Items
 * 
     * Remove one or more items from a user's playlist.
 * 
     * @param playlistId 
     * @param requestBody 
     * @returns any A snapshot ID for the playlist
     * @throws ApiError
     */
    public static removeTracksPlaylist(
playlistId: string,
requestBody?: {
/**
 * An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove.
 * For example: `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.
 * 
 */
tracks: Array<{
/**
 * Spotify URI
 */
uri?: string;
}>;
/**
 * The playlist's snapshot ID against which you want to make the changes.
 * The API will validate that the specified items exist and in the specified positions and make the changes,
 * even if more recent changes have been made to the playlist.
 * 
 */
snapshot_id?: string;
},
): CancelablePromise<{
snapshot_id?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/playlists/{playlist_id}/tracks',
            path: {
                'playlist_id': playlistId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Get User's Saved Tracks
 * 
     * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
 * 
     * @param market 
     * @param limit 
     * @param offset 
     * @returns PagingSavedTrackObject Pages of tracks
     * @throws ApiError
     */
    public static getUsersSavedTracks(
market?: string,
limit: number = 20,
offset?: number,
): CancelablePromise<PagingSavedTrackObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me/tracks',
            query: {
                'market': market,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Save Tracks for Current User
 * 
     * Save one or more tracks to the current user's 'Your Music' library.
 * 
     * @param ids 
     * @param requestBody 
     * @returns any Track saved
     * @throws ApiError
     */
    public static saveTracksUser(
ids: string,
requestBody?: Record<string, any>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/me/tracks',
            query: {
                'ids': ids,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Remove User's Saved Tracks
 * 
     * Remove one or more tracks from the current user's 'Your Music' library.
 * 
     * @param ids 
     * @param requestBody 
     * @returns any Track removed
     * @throws ApiError
     */
    public static removeTracksUser(
ids: string,
requestBody?: Record<string, any>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/me/tracks',
            query: {
                'ids': ids,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Check User's Saved Tracks
 * 
     * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
 * 
     * @param ids 
     * @returns boolean Array of booleans
     * @throws ApiError
     */
    public static checkUsersSavedTracks(
ids: string,
): CancelablePromise<Array<boolean>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me/tracks/contains',
            query: {
                'ids': ids,
            },
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Get User's Top Items
 * 
     * Get the current user's top artists or tracks based on calculated affinity.
 * 
     * @param type 
     * @param timeRange 
     * @param limit 
     * @param offset 
     * @returns any Pages of artists or tracks
     * @throws ApiError
     */
    public static getUsersTopArtistsAndTracks(
type: 'artists' | 'tracks',
timeRange: string = 'medium_term',
limit: number = 20,
offset?: number,
): CancelablePromise<(PagingObject & {
items?: Array<(ArtistObject | TrackObject)>;
})> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me/top/{type}',
            path: {
                'type': type,
            },
            query: {
                'time_range': timeRange,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Get Tracks' Audio Features
 * 
     * Get audio features for multiple tracks based on their Spotify IDs.
 * 
     * @param ids 
     * @returns any A set of audio features
     * @throws ApiError
     */
    public static getSeveralAudioFeatures(
ids: string,
): CancelablePromise<{
audio_features: Array<AudioFeaturesObject>;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/audio-features',
            query: {
                'ids': ids,
            },
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Get Track's Audio Features
 * 
     * Get audio feature information for a single track identified by its unique
 * Spotify ID.
 * 
     * @param id 
     * @returns AudioFeaturesObject Audio features for one track
     * @throws ApiError
     */
    public static getAudioFeatures(
id: string,
): CancelablePromise<AudioFeaturesObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/audio-features/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Get Track's Audio Analysis
 * 
     * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
 * 
     * @param id 
     * @returns AudioAnalysisObject Audio analysis for one track
     * @throws ApiError
     */
    public static getAudioAnalysis(
id: string,
): CancelablePromise<AudioAnalysisObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/audio-analysis/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

    /**
     * Get Recommendations
 * 
     * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
 *
 * For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
 * 
     * @param seedArtists 
     * @param seedGenres 
     * @param seedTracks 
     * @param limit 
     * @param market 
     * @param minAcousticness 
     * @param maxAcousticness 
     * @param targetAcousticness 
     * @param minDanceability 
     * @param maxDanceability 
     * @param targetDanceability 
     * @param minDurationMs 
     * @param maxDurationMs 
     * @param targetDurationMs 
     * @param minEnergy 
     * @param maxEnergy 
     * @param targetEnergy 
     * @param minInstrumentalness 
     * @param maxInstrumentalness 
     * @param targetInstrumentalness 
     * @param minKey 
     * @param maxKey 
     * @param targetKey 
     * @param minLiveness 
     * @param maxLiveness 
     * @param targetLiveness 
     * @param minLoudness 
     * @param maxLoudness 
     * @param targetLoudness 
     * @param minMode 
     * @param maxMode 
     * @param targetMode 
     * @param minPopularity 
     * @param maxPopularity 
     * @param targetPopularity 
     * @param minSpeechiness 
     * @param maxSpeechiness 
     * @param targetSpeechiness 
     * @param minTempo 
     * @param maxTempo 
     * @param targetTempo 
     * @param minTimeSignature 
     * @param maxTimeSignature 
     * @param targetTimeSignature 
     * @param minValence 
     * @param maxValence 
     * @param targetValence 
     * @returns RecommendationsObject A set of recommendations
     * @throws ApiError
     */
    public static getRecommendations(
seedArtists: string,
seedGenres: string,
seedTracks: string,
limit: number = 20,
market?: string,
minAcousticness?: number,
maxAcousticness?: number,
targetAcousticness?: number,
minDanceability?: number,
maxDanceability?: number,
targetDanceability?: number,
minDurationMs?: number,
maxDurationMs?: number,
targetDurationMs?: number,
minEnergy?: number,
maxEnergy?: number,
targetEnergy?: number,
minInstrumentalness?: number,
maxInstrumentalness?: number,
targetInstrumentalness?: number,
minKey?: number,
maxKey?: number,
targetKey?: number,
minLiveness?: number,
maxLiveness?: number,
targetLiveness?: number,
minLoudness?: number,
maxLoudness?: number,
targetLoudness?: number,
minMode?: number,
maxMode?: number,
targetMode?: number,
minPopularity?: number,
maxPopularity?: number,
targetPopularity?: number,
minSpeechiness?: number,
maxSpeechiness?: number,
targetSpeechiness?: number,
minTempo?: number,
maxTempo?: number,
targetTempo?: number,
minTimeSignature?: number,
maxTimeSignature?: number,
targetTimeSignature?: number,
minValence?: number,
maxValence?: number,
targetValence?: number,
): CancelablePromise<RecommendationsObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/recommendations',
            query: {
                'limit': limit,
                'market': market,
                'seed_artists': seedArtists,
                'seed_genres': seedGenres,
                'seed_tracks': seedTracks,
                'min_acousticness': minAcousticness,
                'max_acousticness': maxAcousticness,
                'target_acousticness': targetAcousticness,
                'min_danceability': minDanceability,
                'max_danceability': maxDanceability,
                'target_danceability': targetDanceability,
                'min_duration_ms': minDurationMs,
                'max_duration_ms': maxDurationMs,
                'target_duration_ms': targetDurationMs,
                'min_energy': minEnergy,
                'max_energy': maxEnergy,
                'target_energy': targetEnergy,
                'min_instrumentalness': minInstrumentalness,
                'max_instrumentalness': maxInstrumentalness,
                'target_instrumentalness': targetInstrumentalness,
                'min_key': minKey,
                'max_key': maxKey,
                'target_key': targetKey,
                'min_liveness': minLiveness,
                'max_liveness': maxLiveness,
                'target_liveness': targetLiveness,
                'min_loudness': minLoudness,
                'max_loudness': maxLoudness,
                'target_loudness': targetLoudness,
                'min_mode': minMode,
                'max_mode': maxMode,
                'target_mode': targetMode,
                'min_popularity': minPopularity,
                'max_popularity': maxPopularity,
                'target_popularity': targetPopularity,
                'min_speechiness': minSpeechiness,
                'max_speechiness': maxSpeechiness,
                'target_speechiness': targetSpeechiness,
                'min_tempo': minTempo,
                'max_tempo': maxTempo,
                'target_tempo': targetTempo,
                'min_time_signature': minTimeSignature,
                'max_time_signature': maxTimeSignature,
                'target_time_signature': targetTimeSignature,
                'min_valence': minValence,
                'max_valence': maxValence,
                'target_valence': targetValence,
            },
            errors: {
                401: `Bad or expired token. This can happen if the user revoked a token or
the access token has expired. You should re-authenticate the user.
`,
                403: `Bad OAuth request (wrong consumer key, bad nonce, expired
timestamp...). Unfortunately, re-authenticating the user won't help here.
`,
                429: `The app has exceeded its rate limits.
`,
            },
        });
    }

}
