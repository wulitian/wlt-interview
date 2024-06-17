// sum(1, 2, 3).valueOf(); //6
// sum(2, 3)(2).valueOf(); //7
// sum(1)(2)(3)(4).valueOf(); //10
// sum(2)(4, 1)(2).valueOf(); //9
// sum(1)(2)(3)(4)(5)(6).valueOf(); // 21

function sum(...args) {
    const fn = (...rest) => sum(...args, ...rest)
    fn.valueOf = () => args.reduce((x, y) => x + y)
    return fn
}

console.log(sum(1, 2,3).valueOf())
