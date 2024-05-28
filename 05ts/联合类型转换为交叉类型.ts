type UnionToIntersection<U> =(U extends any ? (K:U) => void: never) extends (K: infer P)=> void ? P: never
// 测试用例
type U0 = UnionToIntersection<string | number> // never
type U1 = UnionToIntersection<{ name: string } | { age: number }> // { name: string; } & { age: number; }
const a:U1 = {name:'string', age: 1}
