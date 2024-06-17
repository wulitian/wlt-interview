// string, number, boolean, undefined, null, symbol, bigint
function isPrimitive(data) {
    let obj = Object.prototype.toString.call(data);
    return obj.slice(8, obj.length - 1).toLowerCase();
}

console.log(isPrimitive('123'))
console.log(isPrimitive(123))
console.log(isPrimitive(true))
console.log(isPrimitive(undefined))
console.log(isPrimitive(null))
console.log(isPrimitive(Symbol("foo")))
console.log(isPrimitive(123n))