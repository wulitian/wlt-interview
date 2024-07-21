// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 示例 1：
// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶
// 示例 2：
// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶
function fn(num) {
    let arr = new Array(num + 1).fill(0);
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
    for (let i = 3; i < arr.length; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    console.log(arr)
    return arr[arr.length-1];
}

console.log(fn(6))
