/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
// 12,7,8,14,4
function getDNSStats(domains) {
  const res = [];
  const arr = domains.map((a) => a.split('.').reverse()).flat();
  console.log(arr);
  arr.map((a, i) => {
    res[a] = 0;
    return a;
  });
  arr.map((a) => {
    res[a] += 1;
    return a;
  });
  let keys = Object.keys(res);
  let values = Object.values(res);
  console.log('len',res.length);
  console.log('res', res);
}

console.log(getDNSStats([
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru',
]));

module.exports = getDNSStats;
