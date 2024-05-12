// 为函数添加入参的实现
type Fn = (a: number, b: string) => number
type AppendArgument<F extends (...arg: any) => any, A> = (x: A, ...rest: Parameters<F>) => ReturnType<F>;

type FinalFn = AppendArgument<Fn, boolean>;

let a: Fn = (a: number, b: string): number => {
    return 12;
}
let b: FinalFn = (x: boolean, a: number, b: string): number => {
    return 12;
}
a(123, '12');
b(false,123, '12');
// (x: boolean, a: number, b: string) => number

