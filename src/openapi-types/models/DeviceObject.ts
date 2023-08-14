/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeviceObject = {
  /**
   * The device ID.
   */
  id?: string | null;
  /**
   * If this device is the currently active device.
   */
  is_active?: boolean;
  /**
   * If this device is currently in a private session.
   */
  is_private_session?: boolean;
  /**
   * Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device.
   */
  is_restricted?: boolean;
  /**
   * A human-readable name for the device. Some devices have a name that the user can configure (e.g. \"Loudest speaker\") and some devices have a generic name associated with the manufacturer or device model.
   */
  name?: string;
  /**
   * Device type, such as "computer", "smartphone" or "speaker".
   */
  type?: string;
  /**
   * The current volume in percent.
   */
  volume_percent?: number | null;
};
