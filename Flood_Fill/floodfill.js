/**
 *   https://leetcode.com/problems/flood-fill/
 *
 *
 *  An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

    You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

    To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

    Return the modified image after performing the flood fill.

    Inputs : image(array), sr, sc, color (integers)
    Output: transformed image(array)
    Constraints:
      m == image.length
      n == image[i].length
      1 <= m , n <= 50
      0 <= image[i][j], color < 216
      0 <= sr < m
      0 <= sc < n
    Edge Cases:
      new color = original color
      empty cell in the direction of the next cell

    Explanation: Given an array 'image' with 'm' rows and 'n' columns,
    'sr' equal to an integer that represent a specific row, and
    'sc' that represent a specific column, and
    'color', also an integer, which will represent the value to replace all adjacent cells with whose value is equal to the original value of the cell orignally specified by 'sr' and 'sc'.
       Finally, return the transformed array.

    Approximation:
    n, sc = x, m, sr = y
    create a constant 'orignalColor' equal to the value  of the cell in 'image' at (sc,sr);
    change the value of the cell at sc,sr to the value of 'color'

    checkAndTransform
    if the cell up is not undefined AND is equal to o'originalColor'
      change the value of the cell to the value of 'color'
      checkAndTransform(r+1,c)
    if the cell down is not undefined AND is equal to o'originalColor'
      change the value of the cell to the value of 'color'
      checkAndTransform(r-1,c)
    if the cell left is not undefined AND is equal to o'originalColor'
      change the value of the cell to the value of 'color'
      checkAndTransform(r,c - 1)
    if the cell right is not undefined AND is equal to 'originalColor'
      change the value of the cell to the value of 'color'
      checkAndTransform(r, c + 1)

    return 'image'
 */

/*
    [0,0,0,0,0],     // check to see if it is land
    [0,0,0,0,1],
    [0,0,1,0,0]
*/

const floodFill = function (image, sr, sc, color) {
  if (color !== image[sr][sc]) {
    const startVal = image[sr][sc];
    const checkAndTransform = function (nextRow, nextCol) {
      if (image[nextRow] !== undefined ? image[nextRow][nextCol] !== undefined : false) {
        if (image[nextRow][nextCol] === startVal) {
          image[nextRow][nextCol] = color;
          checkAndTransform(nextRow + 1, nextCol); // down
          checkAndTransform(nextRow - 1, nextCol); // up
          checkAndTransform(nextRow, nextCol - 1); // left
          checkAndTransform(nextRow, nextCol + 1); // right
        }
      }
    };
    checkAndTransform(sr, sc);
    return image;
  }
  return image;
};

// const result = floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, color = 2); // Expected: => [[2,2,2],[2,2,0],[2,0,1]]

// const result2 = floodFill([[0, 0, 0], [0, 0, 0]], sr = 1, sc = 1, color = 0); // Expected: => [[0,0,0],[0,0,0]]

// console.log(result2, result);

export default floodFill;
