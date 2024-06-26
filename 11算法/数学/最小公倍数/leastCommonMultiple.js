/**
 * 计算两个数的最大公约数（最大公因数，也称最大公约数、最大公因子，指两个或多个整数共有约数中最大的一个）
 * 使用欧几里得算法也称为辗转相除法   递归法与递减法
 * @param x
 * @param y
 */
function euclideanAlgorithmRecursion(x, y) {
    return (y === 0) ? x : euclideanAlgorithmRecursion(y, x % y)
}

function leastCommonMultiple(a, b) {
    return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / euclideanAlgorithmRecursion(a, b);
}

console.log(leastCommonMultiple(18,12))