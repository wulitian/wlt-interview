// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
// 示例 1：
// 输入：nums = [3,2,3]
// 输出：3
// 示例 2：
// 输入：nums = [2,2,1,1,1,2,2]
// 输出：2
// 投票算法
function fn(arr) {
    let curr = null;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            curr = arr[i]
        }
        count += arr[i] === curr ? 1 : -1
    }
    return curr;
}

console.log(fn([3, 2, 3]))
console.log(fn([2, 2, 1, 1, 1, 2, 2]))
