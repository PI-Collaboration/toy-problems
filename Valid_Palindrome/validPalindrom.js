var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replaceAll(replace(/[^a-z0-9]/gi, ''))

    let j = s.length-1
    for (let i = 0; i < Math.round(s.length/2); i++) { //testing for middle character in odd-length strings is redundant because it will always math itself (be TRUE)
      if (s[i] !== s[j]) {
        return false;
      }
      j--
    }
    return true;
};

var isPalindrome = function(s) {
    let filteredWord = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
  
      let j = filteredWord.length -1;
      for (let i = 0; i < j; i++) {
          if (filteredWord[i] !== filteredWord[j]) {
              return false;
          }
          j--;
      }
      return true;
  };

console.log(iusPalind)