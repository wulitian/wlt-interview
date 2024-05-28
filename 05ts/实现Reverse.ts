type Reverse<
    T extends Array<any>,
    R extends Array<any> = []
    > = T extends [infer T1, ...infer T2] ? Reverse<T2, [T1,...R]> : R
type R0 = Reverse<[]> // []
type R1 = Reverse<[1, 2, 3]> // [3, 2, 1]

const a: R0 = [];
const b: R1 = [3, 2, 1];
