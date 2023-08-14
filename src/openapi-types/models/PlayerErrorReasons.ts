/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * * `NO_PREV_TRACK` - The command requires a previous track, but there is none in the context.
 * * `NO_NEXT_TRACK` - The command requires a next track, but there is none in the context.
 * * `NO_SPECIFIC_TRACK` - The requested track does not exist.
 * * `ALREADY_PAUSED` - The command requires playback to not be paused.
 * * `NOT_PAUSED` - The command requires playback to be paused.
 * * `NOT_PLAYING_LOCALLY` - The command requires playback on the local device.
 * * `NOT_PLAYING_TRACK` - The command requires that a track is currently playing.
 * * `NOT_PLAYING_CONTEXT` - The command requires that a context is currently playing.
 * * `ENDLESS_CONTEXT` - The shuffle command cannot be applied on an endless context.
 * * `CONTEXT_DISALLOW` - The command could not be performed on the context.
 * * `ALREADY_PLAYING` - The track should not be restarted if the same track and context is already playing, and there is a resume point.
 * * `RATE_LIMITED` - The user is rate limited due to too frequent track play, also known as cat-on-the-keyboard spamming.
 * * `REMOTE_CONTROL_DISALLOW` - The context cannot be remote-controlled.
 * * `DEVICE_NOT_CONTROLLABLE` - Not possible to remote control the device.
 * * `VOLUME_CONTROL_DISALLOW` - Not possible to remote control the device's volume.
 * * `NO_ACTIVE_DEVICE` - Requires an active device and the user has none.
 * * `PREMIUM_REQUIRED` - The request is prohibited for non-premium users.
 * * `UNKNOWN` - Certain actions are restricted because of unknown reasons.
 * 
 */
export enum PlayerErrorReasons {
    NO_PREV_TRACK = 'NO_PREV_TRACK',
    NO_NEXT_TRACK = 'NO_NEXT_TRACK',
    NO_SPECIFIC_TRACK = 'NO_SPECIFIC_TRACK',
    ALREADY_PAUSED = 'ALREADY_PAUSED',
    NOT_PAUSED = 'NOT_PAUSED',
    NOT_PLAYING_LOCALLY = 'NOT_PLAYING_LOCALLY',
    NOT_PLAYING_TRACK = 'NOT_PLAYING_TRACK',
    NOT_PLAYING_CONTEXT = 'NOT_PLAYING_CONTEXT',
    ENDLESS_CONTEXT = 'ENDLESS_CONTEXT',
    CONTEXT_DISALLOW = 'CONTEXT_DISALLOW',
    ALREADY_PLAYING = 'ALREADY_PLAYING',
    RATE_LIMITED = 'RATE_LIMITED',
    REMOTE_CONTROL_DISALLOW = 'REMOTE_CONTROL_DISALLOW',
    DEVICE_NOT_CONTROLLABLE = 'DEVICE_NOT_CONTROLLABLE',
    VOLUME_CONTROL_DISALLOW = 'VOLUME_CONTROL_DISALLOW',
    NO_ACTIVE_DEVICE = 'NO_ACTIVE_DEVICE',
    PREMIUM_REQUIRED = 'PREMIUM_REQUIRED',
    UNKNOWN = 'UNKNOWN',
}
