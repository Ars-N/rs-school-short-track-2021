/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
// /////////////////////// поробовать залезть в мар \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const getMatrixElementsSum = (arr) => arr[0].map((_, ind) => arr.map((el) => el[ind])
  .reduce((acc, a, i, newArr) => (acc + (newArr[i - 1] === 0 ? 0 : a))))
  .reduce((a, b) => (a + b), 0);

module.exports = getMatrixElementsSum;
