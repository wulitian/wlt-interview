type obj = {
    [key in string]: never
}
const a:obj = {
    // a:1
};
type SomeType = {
    prop: string
}
// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值
function takeSomeTypeOnly<T1 extends SomeType, T2 = T1>(x: {
    [key in keyof T2]: key extends keyof T1 ? T2[key]: never
} ) { return x }

// 测试用例：
const x = { prop: 'a' };
takeSomeTypeOnly(x) // 可以正常调用

const y = { prop: 'a', additionalProp: 'x' };
// takeSomeTypeOnly(y) // 将出现编译错误
