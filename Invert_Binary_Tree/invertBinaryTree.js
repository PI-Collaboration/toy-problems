// TIME: O(N)
// METHOD: pure recursion 

var invertTree = function(root) {
    if (root) {
        let temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);
    }
    return root;
}; 


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let tree = new TreeNode(4);
let node1 = new TreeNode(2);
let node2 = new TreeNode(7);
let node3 = new TreeNode(1);
let node4 = new TreeNode(3);
let node5 = new TreeNode(6);
let node6 = new TreeNode(9);

tree.left = node1;
tree.right = node2;
node1.left = node3;
node1.right = node4;

node2.left = node5;
node2.right = node6;

console.log(invertTree(tree));