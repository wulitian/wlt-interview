
type Head<T extends Array<any>> = T[0] extends undefined ? never : T[0]

// 测试用例
type H0 = Head<[]> // never
type H1 = Head<[1]> // 1
type H2 = Head<[3, 2]> // 3
const b:H1 = 1
const c:H2 = 3
