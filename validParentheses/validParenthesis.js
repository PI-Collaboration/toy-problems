var isValid = function(s) {
  if (s.length === 1) {
    return false;
  } else {
    for (let i = 0; i < s.length; i+=2)
      switch (s[i]) {
        case '[':
          if (s[i + 1] !== ']') {
           return false;
          }
          break;
        case '{':
          if (s[i + 1] !== '}') {
            return false;
          }
          break;
        case '(':
          if (s[i + 1] !== ')') {
            return false
          }
          break;
        default:
          return false;
      }
      return true;
    }
}
/**
 * Alt solution - use character codes instead to simplify code.
 * Time complexity remains the same.
 *
 * Tests
 * VALID INPUTS
 * 1. Single pair of brace
 * 2. Single pair of bracket
 * 3. Single pair of parenthesis
 * 4. Two pairs of any brackets
 * 5. Three pairs of any brackets
 *
 * INVALID INPUTS
 * 1. Single character
 * 2. Single pair of brace
 * 3. Single pair of bracket
 * 4. Single pair of parenthesis
 * 5. Two pairs of any brackets
 * 6. Three pairs of any brackets
 * 7. Uneven number of characters
 *
 */
//TRUE
console.log('All these tests should print \'TRUE\'');
console.log(isValid('{}'));
console.log(isValid('[]'));
console.log(isValid('()'));
console.log(isValid('(){}'));
console.log(isValid('[]{}()'));


//FALSE
console.log('These tests should print \'FALSE\'')
console.log(isValid('p'));
console.log(isValid('{]'));
console.log(isValid('[}'));
console.log(isValid('(]'));
console.log(isValid('[]{['));
console.log(isValid('[]{}({'));
console.log(isValid('[][][]{'));
