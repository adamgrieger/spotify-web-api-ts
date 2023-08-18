import { type DeviceObject } from '../../openapi';

export const getMyDevicesFixture: { devices: DeviceObject[] } = {
  devices: [
    {
      id: 'string',
      is_active: false,
      is_private_session: false,
      is_restricted: false,
      name: 'Kitchen speaker',
      type: 'computer',
      volume_percent: 59,
    },
  ],
};
