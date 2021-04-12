/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
const getCommonCharacterCount = (s1, s2) => s1.split('').sort()
  .reduce((acc, a, i) => {
    if (s1 && s2) {
      return s2.split('').sort().includes(a, i - 1) ? acc + 1 : acc;
    } return 0;
  }, 0);
module.exports = getCommonCharacterCount;
