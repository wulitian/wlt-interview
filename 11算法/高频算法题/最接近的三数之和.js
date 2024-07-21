// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
// 返回这三个数的和。
// 假定每组输入只存在恰好一个解。
// 示例 1：
// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
// 示例 2：
// 输入：nums = [0,0,0], target = 1
// 输出：0
function fn(arr, target) {
    arr.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum === target) {
                return target;
            }
            if(Math.abs(sum-target)< Math.abs(closestSum-target)) {
                closestSum = sum;
            }
            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return closestSum;
}

console.log(fn([-1, 2, 1, -4], 1))
console.log(fn([0, 0, 0], 1))
