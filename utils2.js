const makeATree = (arr) => {
  const node = { val: arr[0] || 0, left: null, right: null };
  const totalLevels = Math.floor(Math.log2(arr.length));
  const helper = (node, lastIndex, currentLevel) => {
    currentLevel++;
    if (currentLevel <= totalLevels) {
      if (arr[2 * lastIndex + 1] !== null) {
        if (arr[2 * lastIndex + 1] !== undefined) {
          node.left = { val: arr[2 * lastIndex + 1], left: null, right: null };
          helper(node.left, 2 * lastIndex + 1, currentLevel);
        }
      }
      if (arr[2 * lastIndex + 2] !== null) {
        if (arr[2 * lastIndex + 2] !== undefined) {
          console.log(arr[2 * lastIndex + 2]);
          node.right = { val: arr[2 * lastIndex + 2], left: null, right: null };
          helper(node.right, 2 * lastIndex + 2, currentLevel);
        }
      };
    };
  };
  helper(node, 0, 0);
  return node;
};

export default makeATree;
// console.log(JSON.stringify(makeATree([1, 2, 2, 3, 3, null, null, 4, 4]), null, 2));
