import { encodeToBase64 } from './encodeToBase64';

describe('encodeToBase64', () => {
  it('should encode a string into its Base64 representation', () => {
    expect(encodeToBase64('foo')).toBe('Zm9v');
  });
});
