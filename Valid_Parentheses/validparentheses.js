// https://leetcode.com/problems/valid-parentheses/description/

// Time O(N)
// Space O(N)
// Data structure: Stack
/* var isValid = function(s) {
  if (s.length <= 1) {
      return false;
  }

  const obj = {
      '(': ')',
      '[': ']',
      '{': '}'
  }

  const stack = [];

  for (let i = 0; i < s.length; i++) {
      if (obj[s[i]]) {
          stack.push(obj[s[i]]);
      } else {
          let temp = stack.pop();
          if (s[i] !== temp) {
              return false;
          }
      }
  }
  return stack.length === 0;
}; */

const isValid = function (s) {
  if (s.length === 1) {
    return false;
  } else {
    for (let i = 0; i < s.length; i += 2) {
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
            return false;
          }
          break;
        default:
          return false;
      }
    }
    return true;
  }
};

export default isValid;
