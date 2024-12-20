import { serialize } from '../method/serialize';
import { data } from '../mock/serialize.mocks';

describe('serialize', () => {
  test.each(data)('test', ({ param, result }) => {
    console.log(serialize);
    const string = serialize(param);
    console.log(string);
    expect(string).toBe(result);
  });
});
