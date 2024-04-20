// 打乱数组，有可能是 [1, 3, 2, 4]，但对原数组没有影响
// shuffle([1, 2, 3, 4]);
// 使用以下算法可实现洗牌算法:
// 第 N 项数字与前 N 项数字随机选一相互交换
// 第 N-1 项数字与前 N-1 项数字随机选一相互交换
// ...
// 第 2 项数字与前 2 项数字随机选一相互交换
function shuffle(arr) {
    let length = arr.length;
    let shuffleIndex;
    for (let i = 0; i < length; i++) {
        shuffleIndex = Math.floor(Math.random() * (i + 1));
         [arr[i], arr[shuffleIndex]] = [arr[shuffleIndex], arr[i]];
    }
    return arr
}

console.log(shuffle([1, 2, 3, 4]))
