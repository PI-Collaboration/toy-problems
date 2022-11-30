/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// Time: O(N)
// Space: O(N)

const twoSum = (array, target) => {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = i;
  }

  for (let i = 0; i < array.length; i++) {
    const temp = target - array[i];
    if (obj[temp] && obj[temp] !== array[i]) {
      return [obj[temp], i];
    }
  }
};

console.log(twoSum([2, 4, 6], 10));
