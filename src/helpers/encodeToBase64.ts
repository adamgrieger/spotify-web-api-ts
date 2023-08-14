export function encodeToBase64(str: string): string {
  return Buffer.from(str).toString('base64');
}
