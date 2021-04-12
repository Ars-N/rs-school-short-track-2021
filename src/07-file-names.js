/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(/* names */) {
//   names.map((a, i, res) => {
//     if (names.indexOf(a) === names.lastIndexOf(a)) {
//       return a;
//     }
//     const arrA = names.filter((el) => el === a)
//       .map((val, ind) => (ind > 0 ? `${val}(${ind})` : a)).reverse();
//     // arrA.shift();
//     console.log(arrA);
//     names.forEach((val, ind, arr) => {
//       console.log('ara',arrA);
//       /*if (i > ind)*/ val === a ? res[i] = arrA.pop() : a;
//     });
//   });
//   // if (names.indexOf(a) !== names.includes(a, i - 1)) {
//   //   return recurs(arr);
//   // }
//   // recurs(names);
//   return names;
  throw new Error('Not implemented');
}

// const arrA = names.filter((el) => el === a)
//   .map((val, ind) => (ind > 0 ? `${val}(${ind})` : a)).reverse();
// arrA.pop();
// console.log(arrA)

// console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

/* if (names.indexOf(a) === names.includes(a, i - 1)) {
  return a;
} */
module.exports = renameFiles;
