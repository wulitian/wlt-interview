interface Example {
    a: string;
    b: string | number;
    c: () => void;
    d: {};
}

type keyOf<T> = T[keyof T]
type ConditionalPick<T, U> = Pick<T, NonNullable<keyOf<{ [key in keyof T]: T[key] extends U ? key : null }>>>
// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>;

let fn: StringKeysOnly = {
    a:'a',
}

