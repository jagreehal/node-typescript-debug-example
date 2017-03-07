import { add } from './calc';

describe('When using the add function', () => {
  it('should be able to add two numbers', async() => {

    let result = await add(1, 2);

    expect(result).toBe(2);
  });
});
