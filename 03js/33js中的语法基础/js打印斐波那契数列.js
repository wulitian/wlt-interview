//js打印斐波那契数列,两相邻数的和等于下一项的值。
function printFibonacci(n) {
    let arr = n > 0 ? [1] : [];
    if (n > 1) {
        for (let index = 1; index < n; index++) {
            arr.push(arr[index - 1] + (index >= 2 ? arr[index - 2] : 0))
        }
        return arr;
    }
}

console.log(printFibonacci(20));

