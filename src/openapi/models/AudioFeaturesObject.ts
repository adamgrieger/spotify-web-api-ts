/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */

import type { Key } from './Key';
import type { Loudness } from './Loudness';
import type { Mode } from './Mode';
import type { Tempo } from './Tempo';
import type { TimeSignature } from './TimeSignature';

export type AudioFeaturesObject = {
  /**
   * A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
 * 
   */
  acousticness?: number;
  /**
   * A URL to access the full audio analysis of this track. An access token is required to access this data.
 * 
   */
  analysis_url?: string;
  /**
   * Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
 * 
   */
  danceability?: number;
  /**
   * The duration of the track in milliseconds.
 * 
   */
  duration_ms?: number;
  /**
   * Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
 * 
   */
  energy?: number;
  /**
   * The Spotify ID for the track.
 * 
   */
  id?: string;
  /**
   * Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
 * 
   */
  instrumentalness?: number;
  key?: Key;
  /**
   * Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
 * 
   */
  liveness?: number;
  loudness?: Loudness;
  mode?: Mode;
  /**
   * Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.
 * 
   */
  speechiness?: number;
  tempo?: Tempo;
  time_signature?: TimeSignature;
  /**
   * A link to the Web API endpoint providing full details of the track.
 * 
   */
  track_href?: string;
  /**
   * The object type.
 * 
   */
  type?: AudioFeaturesObject.type;
  /**
   * The Spotify URI for the track.
 * 
   */
  uri?: string;
  /**
   * A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
 * 
   */
  valence?: number;
};

export namespace AudioFeaturesObject {

  /**
   * The object type.
 * 
   */
  export enum type {
    AUDIO_FEATURES = 'audio_features',
  }


}
