import isValid from '../Valid_Parentheses/validparentheses.js';

describe('all these bracket combinations should return \'TRUE\'', () => {
  const testCases = ['one pair of curly braces', 'one pair of brackets', 'one pair of parenthesis', 'Two pairs of any brackets', 'Three pairs of any brackets'];
  const testInputs = ['{}', '[]', '()', '(){}', '[]{}()'];
  testCases.forEach((a, b) => {
    it(a, () => {
      expect(isValid(testInputs[b])).toBe(true);
    });
  });
});

describe('all these bracket combinations should return \'FALSE\'', () => {
  const testCases = ['a non bracket character', 'mismatched pair 1', 'mismatched pair 2', 'mismatched pair 3', 'two mismatched pairs 1', 'three mismathced pairs', 'uneven number of characters'];
  const testInputs = ['p', '{]', '[}', '(]', '[]{[', '[]{}({', '[][][]{'];
  testCases.forEach((a, b) => {
    it(a, () => {
      expect(isValid(testInputs[b])).toBe(false);
    });
  });
});
