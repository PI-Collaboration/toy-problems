// TIME: O(N)
// METHOD: pure recursion

const invertTree = function (root) {
  if (root) {
    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
  }
  return root;
};

function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const tree = new TreeNode(6);
const node1 = new TreeNode(2);
const node2 = new TreeNode(8);
const node3 = new TreeNode(0);
const node4 = new TreeNode(4);
const node5 = new TreeNode(7);
const node6 = new TreeNode(9);

tree.left = node1;
tree.right = node2;
node1.left = node3;
node1.right = node4;

node2.left = node5;
node2.right = node6;

console.log(invertTree(tree));
