import isBalanced from './balancedBinaryTree.js';
import makeATree from '../utils2.js';
const trees = [[3, 9, 20, null, null, 15, 7], [1, 2, 2, 3, 3, null, null, 4, 4], []];
const testCases = ['when a tree is balanced, the function outputs TRUE', 'when a tree is NOT balanced, the function outputs FALSE', 'empty set'];
const testOutputs = [true, false, true];

describe('this function tests whether a tree is balnced or not', () => {
  testCases.forEach((a, b) => {
    it(a, () => {
      expect(isBalanced(makeATree(trees[b]))).toBe(testOutputs[b]);
    });
  });
});
