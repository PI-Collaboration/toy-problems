/**
 * Inputs:
 *  list node
 * Outputs:
 *  boolean
 * Constraints:
 *  no null inputs, list can be empty
 *  Node.val = integer (whole NUMBER)
 * pos is -1 or a valid index in the linked-list
 * Edge Cases
 * 
 * Explanation
 * - zero indexed linked list
 * - keep track of index 
 * 
 * Visual
 * 
 * 
 */

var hasCycle = function (head) {
  const headKeys = Object.keys(head); // []

  if (headKeys.includes('beenHereProof')) {
    return true
  } else if (head.next === null) {
    return false
  } else {
    head.beenHereProof = true;
    hasCycle(head.next)
  }
  return false
};
const cycleList = { val: 2, next: { val:0, next:{ val: 4, next: null}}}
cycleList.next.next.next = cycleList;
const headList = {val: 3, next: cycleList}

console.log(hasCycle(headList))