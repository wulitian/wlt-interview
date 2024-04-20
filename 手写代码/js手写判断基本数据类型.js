// string, number, boolean, undefined, null, symbol, bigint
function isPrimitive(data) {
    const value = typeof data
    return (
        value === "string"||
        value === "number"||
        value === "boolean"||
        value === "symbol"||
        data == null
    )
}
console.log(isPrimitive('123'))
console.log(isPrimitive(123))
console.log(isPrimitive(true))
console.log(isPrimitive(undefined))
console.log(isPrimitive(null))
console.log(isPrimitive(Symbol("foo")))
