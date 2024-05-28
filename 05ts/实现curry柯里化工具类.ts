type Curry<F extends (...args: any[]) => any,
    P extends any[] = Parameters<F>,
    R = ReturnType<F>> = P extends [infer P1, ...infer P2] ?
    (P2 extends [] ? (arg: P[0]) => R : (arg: P[0]) => Curry<F, P2, R>)
    : () => R;
type F0 = Curry<() => number>; // () => number
type F1 = Curry<(a: number) => number>; // (arg: number) => number
type F2 = Curry<(a: number, b: string) => number>; //  (arg_0: number) => (b: string) => number

const a: F0 = () => 1
const b: F1 = (a) => 1
const c: F2 = (a) => (b) => 1
