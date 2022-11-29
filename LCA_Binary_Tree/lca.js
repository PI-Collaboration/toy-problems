// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

import makeATree from '../utils.js';

const lca = (root, p, q) => {
  const helper = (root) => {
    if (root === null ) {
       return null;
    } 
    if (root.val === p || root.val === q) {
      return root
    }

    let left = helper(root.left);
    let right = helper(root.right);

    if (left && right) {
      return root;
    }
    if (left) {
      return left;
    }
    if (right) {
      return right;
    }
  }
 return helper(root);
};

export default lca;

const tree = makeATree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 7]);
console.log(lca(tree, 5, 4));
