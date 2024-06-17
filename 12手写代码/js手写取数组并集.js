// //=> [2]
// union([2, 1], [2, 3]);
// //=> [1, 2, 3]
// union([1, 2, 2], [1, 2, 2]);
// //=> [1, 2]
// union([1, 2, 2], [1, 2, 2], [1, 2]);
function union(...args) {
 let res = args.reduce((x, y) => [...x,...y]);
 return [...new Set(res)]
}
console.log(union([2, 1], [2, 3]));
console.log(union([1, 2, 2], [1, 2, 2]));
console.log(union([1, 2, 2], [1, 2, 2], [1, 2]));
