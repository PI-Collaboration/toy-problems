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
