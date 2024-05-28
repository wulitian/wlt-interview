// 假设你是一个商店老板，你需要给顾客找零 n 元钱，你手上钱的面值为：100元，50元，20元，10元，5元，2元，1元。
// 请问如何找零使得所需要的钱币数量最少？
// 例如：你需要找零126元，则所需钱币数量最少的方案为100元1张，20元1张，5元1张，1元1张。

function getNum(moneyArr, money) {
    const length = moneyArr.length;
    let index = 0;
    let number = 0;
    while (money !== 0 && index < length) {
        let floor = Math.floor(money / moneyArr[index]);
        if (floor !== 0) {
            money -= moneyArr[index] * floor;
            number += floor;
            if (money === 0) {
                return number;
            }
        }
        index++;
    }
}

console.log(getNum([100, 50, 20, 10, 5, 2, 1], 126))
