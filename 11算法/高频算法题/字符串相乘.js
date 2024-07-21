// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
// 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
// 示例 1:
// 输入: num1 = "2", num2 = "3"
// 输出: "6"
// 示例 2:
// 输入: num1 = "123", num2 = "456"
// 输出: "56088"
function fn(num1, num2) {
    let reverseNum1 = num1.split('').reverse().join('');
    let reverseNum2 = num2.split('').reverse().join('');
    let arr = new Array(num1.length + num2.length).fill(0);
    for (let i = 0; i < reverseNum1.length; i++) {
        for (let j = 0; j < reverseNum2.length; j++) {
            arr[i + j] += (parseInt(reverseNum1[i]) * parseInt(reverseNum2[j]));
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10) {
            arr[i + 1] += Math.floor(arr[i] / 10);
            arr[i] = arr[i] % 10;
        }
    }
    while(arr[arr.length-1] === 0) {
        arr.pop();
    }
    return arr.reverse().join('');
}

console.log(fn('2', '3'))
console.log(fn('123', '456'))
