import { getMarketsFixture } from '../fixtures';
import { MarketsService } from '../openapi/services/MarketsService';

import { MarketsApi } from './MarketsApi';

const markets = new MarketsApi();

describe(MarketsApi.name, () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('getMarkets', () => {
    it('should get the current available markets', async () => {
      const getMarketsSpy = vi
        .spyOn(MarketsService, 'getAvailableMarkets')
        .mockResolvedValue(getMarketsFixture);
      const response = await markets.getMarkets();

      expect(response).toEqual(getMarketsFixture.markets);
      expect(getMarketsSpy).toHaveBeenCalledWith();
    });
  });
});
