// 联合类型作为泛型的时候 extends 会触发分发执行
// 联合类型T 写成 [T] 就变成了普通类型，extends的时候不会分发执行
// 这里第一步的 T extends any 肯定为真，这个其实就是利用其分发的特性，后面的 [T] 就是一个联合类型拆开后的某一个，因此如果是联合类型的话 [U] extends [T] 一定为否
type IsUnion<T, U = T> = T extends any ? [U] extends [T] ? false: true : never
type I0 = IsUnion<string|number> // true
type I1 = IsUnion<string|never> // false
type I2 = IsUnion<string|unknown> // false
// 测试一下never结论就是 [U] extends [T]是false时代表是联合类型
type I3 = string|never extends never ? true: false;
const d:I3 = false
const a:I0 = true
const b:I1 = false
const c:I2 = false

