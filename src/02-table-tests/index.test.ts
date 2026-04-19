import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 5, b: 3, action: Action.Add, expected: 8 },
  { a: 10, b: 0, action: Action.Add, expected: 10 },
  { a: 10, b: 4, action: Action.Subtract, expected: 6 },
  { a: 7, b: 7, action: Action.Subtract, expected: 0 },
  { a: 3, b: 4, action: Action.Multiply, expected: 12 },
  { a: 0, b: 100, action: Action.Multiply, expected: 0 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 9, b: 3, action: Action.Divide, expected: 3 },
  { a: 2, b: 8, action: Action.Exponentiate, expected: 256 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
  { a: 1, b: 2, action: 'invalid', expected: null },
  { a: 'two', b: 2, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return $expected for a=$a, b=$b, action=$action',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
