import { type SpotifyWebApiOptions } from '../main/spotifyApi';

export function assertClientConfigs<
  Configs extends Partial<SpotifyWebApiOptions>,
>(configs: Configs): asserts configs is Required<Configs> {
  // find all configs that are falsy
  const missing = Object.entries(configs).flatMap(([key, val]) =>
    val ? [] : key,
  );

  if (missing.length) {
    const missingText = missing.join(' and ');
    throw new Error(`${missingText} must be set before calling this function!`);
  }
}
