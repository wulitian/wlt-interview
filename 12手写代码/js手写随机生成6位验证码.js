const random = (n) => {
    return Math.floor(Math.random() * (n + 1));
}
// 可以重复
function createRandomCode(n) {
    return [0, 0, 0, 0, 0, 0].map((e) => {
        return random(n)
    })
}
// 不可以重复
function createRandomCode2(n) {
    let arr = [];
    while (arr.length < 6) {
        let r = random(n);
        if (arr.indexOf(r) === -1) {
            arr.push(r)
        }
    }
    return arr;
}

console.log(createRandomCode(6))
console.log(createRandomCode2(6))
