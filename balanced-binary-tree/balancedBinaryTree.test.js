import { isBalanced, TreeNode } from './balancedBinaryTree.js';

const trees = [];
let node1 = new TreeNode(3);
let node2 = new TreeNode(9);
let node3 = new TreeNode(20);
let node4 = new TreeNode(15);
let node5 = new TreeNode(7);
node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;
trees.push(node1);

node1 = new TreeNode(1);
node2 = new TreeNode(2);
node3 = new TreeNode(2);
node4 = new TreeNode(3);
node5 = new TreeNode(3);
const node6 = new TreeNode(4);
const node7 = new TreeNode(4);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node6;
node4.right = node7;
trees.push(node1);

const testCases = ['when a tree is balanced, the function outputs TRUE', 'when a tree is NOT balanced, the function outputs FALSE'];
const testOutputs = [true, false];

describe('this function tests whether a tree is balnced or not', () => {
  testCases.forEach((a, b) => {
    it(a, () => {
      expect(isBalanced(trees[b])).toBe(testOutputs[b]);
    });
  });
});
