const isValid = function (s) {
  if (s.length === 1) {
    return false;
  } else {
    let isTrue = true;
    for (let i = 0; i < s.length; i += 2) {
      switch (s[i]) {
        case '[':
          if (s[i + 1] !== ']') {
            isTrue = false;
          }
          break;
        case '{':
          if (s[i + 1] !== '}') {
            isTrue = false;
          }
          break;
        case '(':
          if (s[i + 1] !== ')') {
            isTrue = false;
          }
          break;
        default:
      }
    }
    return isTrue;
  }
};
