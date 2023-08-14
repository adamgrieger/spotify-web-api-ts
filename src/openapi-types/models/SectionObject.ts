/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimeSignature } from './TimeSignature';

export type SectionObject = {
    /**
     * The starting point (in seconds) of the section.
     */
    start?: number;
    /**
     * The duration (in seconds) of the section.
     */
    duration?: number;
    /**
     * The confidence, from 0.0 to 1.0, of the reliability of the section's "designation".
     */
    confidence?: number;
    /**
     * The overall loudness of the section in decibels (dB). Loudness values are useful for comparing relative loudness of sections within tracks.
     */
    loudness?: number;
    /**
     * The overall estimated tempo of the section in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
     */
    tempo?: number;
    /**
     * The confidence, from 0.0 to 1.0, of the reliability of the tempo. Some tracks contain tempo changes or sounds which don't contain tempo (like pure speech) which would correspond to a low value in this field.
     */
    tempo_confidence?: number;
    /**
     * The estimated overall key of the section. The values in this field ranging from 0 to 11 mapping to pitches using standard Pitch Class notation (E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on). If no key was detected, the value is -1.
     */
    key?: number;
    /**
     * The confidence, from 0.0 to 1.0, of the reliability of the key. Songs with many key changes may correspond to low values in this field.
     */
    key_confidence?: number;
    /**
     * Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches.
     */
    mode?: SectionObject.mode;
    /**
     * The confidence, from 0.0 to 1.0, of the reliability of the `mode`.
     */
    mode_confidence?: number;
    time_signature?: TimeSignature;
    /**
     * The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. Sections with time signature changes may correspond to low values in this field.
     */
    time_signature_confidence?: number;
};

export namespace SectionObject {

    /**
     * Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches.
     */
    export enum mode {
        '_-1' = -1,
        '_0' = 0,
        '_1' = 1,
    }


}
