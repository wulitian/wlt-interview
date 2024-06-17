// string, number, boolean, undefined, null, symbol, bigint
function isPrimitive(data) {
    const obj = typeof data;
    if(
        obj === "string"
        || obj === "number"
        || obj === "boolean"
        || obj === "undefined"
        || obj === "symbol"
        || obj === "bigint"
        || (obj === "object" && data === null)
    ) {
        return true;
    }
    return false;
}

console.log(isPrimitive('223'))
console.log(isPrimitive(345))
console.log(isPrimitive(true))
console.log(isPrimitive(undefined))
console.log(isPrimitive(null))
console.log(isPrimitive(Symbol("foo")))
console.log(isPrimitive(123n))
