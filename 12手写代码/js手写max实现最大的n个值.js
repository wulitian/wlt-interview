// 实现寻找到最大的一个值
// let arr = [1,8,10,20,4,20]

// 最大的一个值
function max(arr) {
    return arr.reduce((x, y) => x > y ? x : y)
}
// 返回最大的前n个值

let arr = [1, 8, 10, 20, 4, 20];
console.log(max(arr))
