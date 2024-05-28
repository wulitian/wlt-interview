type NaiveFlat<T extends any[]> = T[number] extends any[] ? NaiveFlat<T[number]> : T[number]
// 测试用例：
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>;

type DeepFlat<T extends any[]> = {
    [key in keyof T]: T[key] extends any[] ? NaiveFlat<T[key]> : T[key];
}[number];

// 测试用例
type Deep = [['a'], ['b', 'c'], [['d']], [[[['e']]]]];
type DeepTestResult = DeepFlat<Deep>;

const a:NaiveResult = 'a';
const b:NaiveResult = 'b';
const c:NaiveResult = 'c';
const d:NaiveResult = 'd';
const a2:DeepTestResult = 'a';
const b2:DeepTestResult = 'b';
const c2:DeepTestResult = 'c';
const d2:DeepTestResult = 'd';
