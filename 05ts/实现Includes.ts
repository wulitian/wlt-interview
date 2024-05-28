type Includes<T extends Array<any>, E> = E extends T[any] ? true: false

type I0 = Includes<[], 1> // false
type I1 = Includes<[2, 2, 3, 1], 2> // true
type I2 = Includes<[2, 3, 3, 1], 1> // true

const a:I0 = false;
const b:I1 = true;
const c:I2 = true;
