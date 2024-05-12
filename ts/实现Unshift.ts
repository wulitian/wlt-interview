type Unshift<T extends any[], E> = [E, ...T]

// 测试用例
type Arr0 = Unshift<[], 1>; // [1]
type Arr1 = Unshift<[1, 2, 3], 0>; // [0, 1, 2, 3]

const a: Arr0 = [1]
const b: Arr1 = [0, 1, 2, 3]
