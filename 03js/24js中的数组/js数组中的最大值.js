//js数组中最大值
let a = [3, 4, 6, 2, 9, 11, 4];
let maxNum = Math.max.apply(null, a);
console.log(maxNum);//11

let arr = [3, 4, 6, 2, 9, 11, 4];
arr.sort(function (a, b) {
    return a - b
})
console.log(arr[0]);
console.log(arr[arr.length - 1]);

