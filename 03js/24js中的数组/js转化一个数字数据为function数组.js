//js转化一个数字数据为function数组
let arr = [3, 5, 12, 55, 12, 321, 41, 0, 999];
Array.prototype.toFunction = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = (function (a) {
            return function () {
                return a;
            }
        })(this[i])
    }
    return this;
}
arr.toFunction();
console.log(arr)
console.log(arr[0])
console.log((arr[0])())

