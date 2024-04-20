// => 55
// reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y);
// => 155
// reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, 100);
// => NaN
// reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, undefined);

const reduce = (list, fn, ...init) => {
    let initLength = init.length
    let next = initLength > 0 ? init[0] : list[0];
    for (let i = initLength > 0 ? 0 : 1; i < list.length; i++) {
        next = fn(next, list[i])
    }
    return next
};
console.log(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y));
console.log(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, 100));
console.log(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, undefined));
