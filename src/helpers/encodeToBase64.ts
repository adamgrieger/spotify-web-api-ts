export function encodeToBase64(str: string) {
  return Buffer.from(str).toString('base64');
}
