type IsNever<T> = [T] extends [never] ? true : false

type I0 = IsNever<never> // true
type I1 = IsNever<never | string> // false
type I2 = IsNever<null> // false

const a:I0 = true
const b:I1 = false
const c:I2 = false
