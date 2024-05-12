type IsEqual<A, B> = [A] extends [B] ? [B] extends [A] ? true : false : false// 你的实现代码

// 测试用例
type E0 = IsEqual<1, 2>; // false
type E1 = IsEqual<{ a: 1 }, { a: 1 }> // true
type E2 = IsEqual<[1], []>; // false

const a:E0 = false
const b:E1 = true
const c:E2 = false
