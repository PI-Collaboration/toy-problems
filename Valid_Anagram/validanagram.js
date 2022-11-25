/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/**
 * Constraints
 *  - 1 <= s.length, t.length <= 5 * 104
 *  - s and t consist of lowercase English letters
 * 
 * Edge Cases
 *  - input lengths do not match
 * 
 * Explanation
 *  Given two strings, if their lengths are not the same, return false.  Create a counter.   Traverse the first
 *  string, and if the counter does not contain a key, add the key and initiliaze with a value of 1, else increase 
 *  by 1.  Traverse the second string , and subtract 1 from the counter whose key matches the letter.  If the key is 
 *  undefined or if the value before subtracting 1 is 0, return false. Else all, return true.
 *  
 * Approximation
 * if the length of string 's' and 't' do not match
 *  return false
 * else
 *  create a constant 'counter' of type object intialized as empty
 *    traverse 's' in increments of one character
 *      if the key is undefined,
 *        add key to counter with a value of 1
 *      else
 *        add 1 to value of key corresponding to the character
 *    traverse 't' in increments of one character
 *      if the character does not have a corresponding in the counter OR if the value of the corresponding key is 0
 *        return false
 *      else
 *        subtract 1 from the value of the corresponding key
 *    return true
 *  
 */

// TIME: O(N)
// METHOD:  

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    } else {
        const counter = {};
        for (let char of s) {
            if (counter[char] === undefined) {
                counter[char] = 1;
            } else {
                counter[char] += 1;
            }
        }
        for (let char of t) {
            if (!counter[char]) {
                return false
            } else {
                counter[char] -= 1;
            }
        }
        return true;
    }
};


console.log(isAnagram('trs', 'str'))

/* 
function validAnagram(string1, string2) {

    if(string1.length !== string2.length) {
      return false;
    }
  
    let freqCounter1 = {};
    let freqCounter2 = {};
  
    for (let char of string1) {
      freqCounter1[char] = (freqCounter1[char] || 0) + 1;
    }
  
    for (let char of string2) {
      freqCounter2[char] = (freqCounter2[char] || 0) + 1;
    }
  
    for (let key in freqCounter1) {
      if (!(key in freqCounter2)) {
        return false;
      }
      // checking if the values match
      if (freqCounter1[key] !== freqCounter2[key]) {
        return false;
      }
    } 
    return true;
  
  } */