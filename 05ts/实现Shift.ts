type Shift<T extends any[]> = T extends [infer L, ...infer R] ? [...R] : []

// 测试用例
type S0 = Shift<[1, 2, 3]> // [2, 3]
type S1 = Shift<['string', 'number', 'boolean']> // ['number', 'boolean']

const a: S0 = [2, 3]
const b: S1 = ['number', 'boolean']
