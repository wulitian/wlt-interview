// //=> [2]
// intersection([2, 1], [2, 3]);
// //=> [1, 2]
// intersection([1, 2, 2], [1, 2, 2]);
// //=> [1, 2]
// intersection([1, 2, 2], [1, 2, 2], [1, 2]);
function intersection(...args) {
 let arr = args.reduce((x,y)=>x.filter(e=>y.includes(e)));
 return [...new Set(arr)];
}
console.log(intersection([2, 1], [2, 3]));
console.log(intersection([1, 2, 2], [1, 2, 2]));
console.log(intersection([1, 2, 2], [1, 2, 2], [1, 2]));
