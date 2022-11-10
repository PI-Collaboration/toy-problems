var isValid = function(s) {
    if (s.length === 1) {
      return false;
    } else {
      for (let i = 0; i < s.length; i+=2) {
        let isTrue = true;
        switch (s[i]) {
          case '[':
            console.log('hit bracket')
            if (s[i + 1] !== ']') {
             // return false
             isTrue = false;
            }
            break;
          case '{':
            console.log('hit curly')
            if (s[i + 1] !== '}') {
                isTrue = false;
             // return false
            }
            break;
          case '(':
            console.log('hit )')
            if (s[i + 1] !== ')') {
                isTrue = false;
              //return false
            }
            break;
            default :
            console.log('hit default')
        }
      }
      return isTrue
    }
}

console.log(isValid('[')) // false
console.log(isValid('[]'))
console.log(isValid('[]{}'))
console.log(isValid('[]{}]()'))


