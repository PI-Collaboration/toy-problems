const makeATree = (arr) => {
  const node = { val: arr[0], left: null, right: null };
  const totalLevels = Math.sqrt(arr.length + 1) - 1;
  const helper = (node, lastIndex, currentLevel) => {
    currentLevel++;
    if (currentLevel <= totalLevels) {
      if (arr[2 * lastIndex + 1] !== null) {
        node.left = { val: arr[2 * lastIndex + 1], left: null, right: null };
        helper(node.left, 2 * lastIndex + 1, currentLevel);
      }
      if (arr[2 * lastIndex + 2] !== null) {
        node.right = { val: arr[2 * lastIndex + 1 + 1], left: null, right: null };
        helper(node.right, 2 * lastIndex + 1 + 1, currentLevel);
      }
    }
  };
  helper(node, 0, 0);
  return node;
};

console.log(JSON.stringify(makeATree([6,2,8,0,4,7,9,null,null,3,5]),'',2))
//export default makeATree;
