// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
// 示例 1:
// 输入: [3,2,1,5,6,4], k = 2
// 输出: 5
// 示例 2:
// 输入: [3,2,3,1,2,4,5,5,6], k = 4
// 输出: 4
function fn(arr, k) {
    function quickSort(arr) {
        if (arr.length < 2) return arr;
        let midVal = arr.splice(arr.length >> 1, 1)
        let leftArr = [];
        let rightArr = [];
        for (let i = 0; i < arr.length; i++) {
            //隐式转换[2]>1相当于2>1
            if (arr[i] < midVal) {
                leftArr.push(arr[i])
            } else {
                rightArr.push(arr[i])
            }
        }
        return [...quickSort(leftArr), ...midVal, ...quickSort(rightArr)]
    }
    let res = quickSort(arr);
    return res.length - k >= 0 ? res[res.length - k] : 0;
}

console.log(fn([3, 2, 1, 5, 6, 4], 2))
console.log(fn([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
