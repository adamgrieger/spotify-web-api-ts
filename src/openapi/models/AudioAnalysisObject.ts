/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */

import type { Key } from './Key';
import type { Loudness } from './Loudness';
import type { Mode } from './Mode';
import type { SectionObject } from './SectionObject';
import type { SegmentObject } from './SegmentObject';
import type { Tempo } from './Tempo';
import type { TimeIntervalObject } from './TimeIntervalObject';
import type { TimeSignature } from './TimeSignature';

export type AudioAnalysisObject = {
  meta?: {
/**
 * The version of the Analyzer used to analyze this track.
 */
analyzer_version?: string;
/**
 * The platform used to read the track's audio data.
 */
platform?: string;
/**
 * A detailed status code for this track. If analysis data is missing, this code may explain why.
 */
detailed_status?: string;
/**
 * The return code of the analyzer process. 0 if successful, 1 if any errors occurred.
 */
status_code?: number;
/**
 * The Unix timestamp (in seconds) at which this track was analyzed.
 */
timestamp?: number;
/**
 * The amount of time taken to analyze this track.
 */
analysis_time?: number;
/**
 * The method used to read the track's audio data.
 */
input_process?: string;
};
  track?: {
/**
 * The exact number of audio samples analyzed from this track. See also `analysis_sample_rate`.
 */
num_samples?: number;
/**
 * Length of the track in seconds.
 */
duration?: number;
/**
 * This field will always contain the empty string.
 */
sample_md5?: string;
/**
 * An offset to the start of the region of the track that was analyzed. (As the entire track is analyzed, this should always be 0.)
 */
offset_seconds?: number;
/**
 * The length of the region of the track was analyzed, if a subset of the track was analyzed. (As the entire track is analyzed, this should always be 0.)
 */
window_seconds?: number;
/**
 * The sample rate used to decode and analyze this track. May differ from the actual sample rate of this track available on Spotify.
 */
analysis_sample_rate?: number;
/**
 * The number of channels used for analysis. If 1, all channels are summed together to mono before analysis.
 */
analysis_channels?: number;
/**
 * The time, in seconds, at which the track's fade-in period ends. If the track has no fade-in, this will be 0.0.
 */
end_of_fade_in?: number;
/**
 * The time, in seconds, at which the track's fade-out period starts. If the track has no fade-out, this should match the track's length.
 */
start_of_fade_out?: number;
loudness?: Loudness;
tempo?: Tempo;
/**
 * The confidence, from 0.0 to 1.0, of the reliability of the `tempo`.
 */
tempo_confidence?: number;
time_signature?: TimeSignature;
/**
 * The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`.
 */
time_signature_confidence?: number;
key?: Key;
/**
 * The confidence, from 0.0 to 1.0, of the reliability of the `key`.
 */
key_confidence?: number;
mode?: Mode;
/**
 * The confidence, from 0.0 to 1.0, of the reliability of the `mode`.
 */
mode_confidence?: number;
/**
 * An [Echo Nest Musical Fingerprint (ENMFP)](https://academiccommons.columbia.edu/doi/10.7916/D8Q248M4) codestring for this track.
 */
codestring?: string;
/**
 * A version number for the Echo Nest Musical Fingerprint format used in the codestring field.
 */
code_version?: number;
/**
 * An [EchoPrint](https://github.com/spotify/echoprint-codegen) codestring for this track.
 */
echoprintstring?: string;
/**
 * A version number for the EchoPrint format used in the echoprintstring field.
 */
echoprint_version?: number;
/**
 * A [Synchstring](https://github.com/echonest/synchdata) for this track.
 */
synchstring?: string;
/**
 * A version number for the Synchstring used in the synchstring field.
 */
synch_version?: number;
/**
 * A Rhythmstring for this track. The format of this string is similar to the Synchstring.
 */
rhythmstring?: string;
/**
 * A version number for the Rhythmstring used in the rhythmstring field.
 */
rhythm_version?: number;
};
  /**
   * The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats.
   */
  bars?: Array<TimeIntervalObject>;
  /**
   * The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums.
   */
  beats?: Array<TimeIntervalObject>;
  /**
   * Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness.
   */
  sections?: Array<SectionObject>;
  /**
   * Each segment contains a roughly conisistent sound throughout its duration.
   */
  segments?: Array<SegmentObject>;
  /**
   * A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments).
   */
  tatums?: Array<TimeIntervalObject>;
};
