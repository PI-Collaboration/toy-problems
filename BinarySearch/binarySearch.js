/*
 Given an array of integers nums which is sorted in ascending order,
  and an integer target, write a function to search target in nums.
  
  If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

*/

/*
    I - sorted array 
    O - Index  of target number 
    C - No duplicates, Sorted in ascending, never empty 
    E - What is traget is not in array 

    Justification - find the index of target

    Explanation -
        pick a middle point the length of array divided by 2 floor 
        loop thorough the half of the array 
        if the target is less than the mid point then take the left half 
        if its greater than mid point then take middle to end end of array 

   /*
  create midpoint = Math.floor(array.length / 2);

   while(arry[midpoint] !== target) {
        if (array.length === 1) {
           return array[0] === target 
        }
         if (target < array[midpoint] ) {
            array = array.splice(midpoint, array.lengh -1); 
         } else {
            array = array.splice(0, midpoint); 
         }
         midpoint = Math.floor(array.length / 2)

    }

   return midpoint
         
   */

/*
 1 <= nums.length <= 10^4
-10^4 < nums[i], target < 10^4
All the integers in nums are unique.
nums is sorted in ascending order. 
*/

/* Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4 */

/* Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1 */



