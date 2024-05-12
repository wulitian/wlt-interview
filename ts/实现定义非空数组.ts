type NonEmptyArray<T> = T[] & {0: T}// 你的实现代码

// const a: NonEmptyArray<string> = [] // 将出现编译错误
const b: NonEmptyArray<string> = ['Hello TS'] // 非空数据，正常使用

