// js中1--10000个数字，丢了两个数后打乱顺序怎么找到丢的两个数字？
let arr = [];
let obj = {}
for (let i = 1; i < 10001; i++) {
    arr[i] = i;
}
arr.splice(10, 2)
for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1;
}
for (let i = 1; i < 10001; i++) {
    if (!obj[i]) {
        console.log(i + 1)
    }
}
