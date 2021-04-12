/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbca should return 2a3bc1a
 *
 */
function encodeLine(str) {
  let count = 1;
  let res = '';
  const arr = str.split('');
  arr.map((a, i, arrq) => {
    if (arrq[i - 1] === a) { count += 1; }
    if (arr[i + 1] !== a) {
      if (count !== 1) { res += `${count}`; }
      res += `${a}`;
      count = 1;
    }
    return a;
  });
  return res;
}

module.exports = encodeLine;

