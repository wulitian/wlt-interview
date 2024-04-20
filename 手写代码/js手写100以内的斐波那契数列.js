// 0 1 1 2 3 5 8 ...斐波那契数列，n3=n1+n2

function fib(n) {
    const arr = [0];
    let a = 0;
    let b = 1;
    while (b < n) {
        arr.push(b);
        [a, b] = [b, a + b]
    }
    return arr
}

console.log(fib(100))

