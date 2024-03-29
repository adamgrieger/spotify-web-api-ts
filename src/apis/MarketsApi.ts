import { MarketsService } from '../openapi';

export class MarketsApi {
  /**
   * Get Available Markets
   *
   * Get the list of markets where Spotify is available.
   */
  public async getMarkets(): Promise<string[]> {
    return await MarketsService.getAvailableMarkets().then(
      ({ markets }) => markets ?? [],
    );
  }
}
