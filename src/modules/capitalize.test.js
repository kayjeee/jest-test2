/* eslint-disable import/no-unresolved */
import { capitalize } from './capitalize.js';

test('capitalize should capitalize the first character of a string', () => {
  const input = 'hello world';
  const expectedOutput = 'Hello world';

  const result = capitalize(input);

  expect(result).toBe(expectedOutput);
});
