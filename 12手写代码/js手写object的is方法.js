// +0 === -0  // true is方法中不应该相等
// NaN === NaN // false is方法中应该相等
console.log(+0 === -0)

function is(a, b) {
    if (a === b) {
        return a !== 0 || b !== 0 || 1 / a === 1 / b
    } else {
        return a !== a || b !== b
    }

}
console.log(is(+0, -0))
console.log(is(NaN, NaN))
console.log(NaN === NaN)
