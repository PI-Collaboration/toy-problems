import makeATree from './utils.js';
import balancedBinaryTree from '.././balanced-binary-tree/balancedBinaryTree.js';

describe('makeATree makes a binary tree when given an array', () => {
  it('[] results in a node with a default value of 0', () => {
    const tree = makeATree([]);
    expect(tree.val === 0).toBe(true);
  });
  it('[] results in a node with no branches', () => {
    const tree = makeATree([]);
    expect(tree.right === null && tree.left === null).toBe(true);
  });
  it('[1] results in one node, with a value of 1', () => {
    const tree = makeATree([1]);
    expect(tree.val === 1 && tree.right === null && tree.left === null).toBe(true);
  });
  it('[1] results in node with no other branches', () => {
    const tree = makeATree([1]);
    expect(tree.val === 1 && tree.right === null && tree.left === null).toBe(true);
  });
  it('[1] results in one node, with a value of 1', () => {
    const tree = makeATree([1]);
    expect(tree.val === 1 && tree.right === null && tree.left === null).toBe(true);
  });
  it('[1] results in node with no other branches', () => {
    const tree = makeATree([1]);
    expect(tree.val === 1 && tree.right === null && tree.left === null).toBe(true);
  });
  it('[1,2] results in a tree, with a left branch with a value of 2 and no other branches', () => {
    const tree = makeATree([1, 2]);
    expect(tree.left.val === 2 && tree.left.left === null && tree.left.right === null).toBe(true);
  });
  it('[1,2] results in tree without a right branch', () => {
    const tree = makeATree([1, 2]);
    expect(tree.right === null).toBe(true);
  });
  it('[1,2,3,4,5,null,null,null,null,10,11] results in tree without a right branch', () => {
    const tree = makeATree([1, 2, 3, 4, 5, null, null, null, null, 10, 11]);
    expect(balancedBinaryTree(tree)).toBe(false);
  });
});
