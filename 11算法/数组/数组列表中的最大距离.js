// 给定m个数组，每个数组都已经按照升序排好序了。现在你需要从两个不同的数组中选择两个整数（每个数组选一个）并且计算它们的距离。
// 两个整数a和b之间的距离定义为它们差的绝对值|a-b|。你的任务就是去找到最大距离
//
// 输入：
// [[1,2,3],
//  [4,5],
//  [1,2,3]]
// 输出： 4
// 解释：
// 一种得到答案 4 的方法是从第一个数组或者第三个数组中选择 1，同时从第二个数组中选择 5 。

let maxDistance = function(arrays) {
    let res = 0, min = Infinity, max = -Infinity
    for(let i = 0; i < arrays.length; i++){
        let start = arrays[i][0]
        let end = arrays[i][arrays[i].length-1]
        res = Math.max(res,max-start,end-min)
        max = Math.max(max,end)
        min = Math.min(min,start)
    }
    return res
};
console.log(maxDistance([[1,2,3], [4,5], [1,2,3]]));