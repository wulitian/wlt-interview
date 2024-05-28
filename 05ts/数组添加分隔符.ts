type TrimLeft<V extends string> = V extends ` ${infer U}` ? TrimLeft<U>: V;
type TrimRight<V extends string> = V extends `${infer U} ` ? TrimRight<U>: V;
type Trim<V extends string> = TrimRight<TrimLeft<V>>
// 测试用例
type B = Trim<'   wulitian '>
//=> 'wulitian'
const a:B = 'wulitian'
