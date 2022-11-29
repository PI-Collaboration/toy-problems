// Definition for a binary tree node.
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 * Planning steps available after line 30
 */

const isBalanced = function (root) {
  let treeIsBalanced = true;
  const recFunc = (node, depth) => {
    if (node === null) {
      return depth;
    } else {
      const leftDepth = recFunc(node.left, depth + 1);
      const rightDepth = recFunc(node.right, depth + 1);
      if (treeIsBalanced && Math.abs(leftDepth - rightDepth) > 1) {
        treeIsBalanced = false;
      }
      return rightDepth > leftDepth ? rightDepth : leftDepth;
    }
  };
  recFunc(root, 0);
  return treeIsBalanced;
};

/**
 * height on the left and right subtree of ANY node differ by not more than 1.
 * Input: tree
 * Output: boolean
 * Constraints:
 *  The number of nodes in the tree is in the range [0, 5000].
 *  -104 <= Node.val <= 104
 * Edge Cases
 *  different levels on the subtrees
 *
 * Explanation
 *  Given a branch, traverse it depth first. Create a counter that starts at 0 at the root, and
 *  increases by one every time a node is traversed. Create a boolean tracker with 'treeIsbalanced' with an initial
 *  value of true.  Traverse to the left node and right node, increasing the
 *  counter at every node until there are no more nodes to traverse to. Return the
 *  final counter.  Compare the returned counter of the left node and right node.  If the diffence is greater
 *  than 1, change 'treeIsBalanced' to false. Return the final value of treeIBalanced.
 *
 * Approximation
 *  create a function named 'recFunc' which takes a number, 'previousDepth', and a node 'node'
 *    if 'node' is null
 *      return previousDepth
 *    else
 *      create a const 'leftDepth' equal to the recFunc with parameters of leftBranch and the previousDepth plus one
 *      create a const 'rightDepth' equal to the recFunc with parameters of rightBranch and the previousDepth plus one
 *      if 'treeIsBalanced' is true AND the absolut value of leftDepth minus rightDepth is greater than 1
 *        change the value of treeIsBalanced to false
 *      return the greater of the left and right depths
 *  call teh recursive function by passing in the original root and a starting value of zero
 *  return the value of treeIsBalanced
 */
export default isBalanced;
