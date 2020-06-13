import { stringifyParams } from './stringifyParams';

describe('stringifyParams', () => {
  it('should return an empty string when given an empty object', () => {
    expect(stringifyParams({})).toEqual('');
  });

  it('should stringify an object with one key', () => {
    expect(stringifyParams({ fooKey: 'fooValue' })).toEqual('fooKey=fooValue');
  });

  it('should stringify an object with multiple keys', () => {
    expect(
      stringifyParams({
        fooKey: 'fooValue',
        barKey: 'barValue',
      }),
    ).toEqual('fooKey=fooValue&barKey=barValue');
  });
});
