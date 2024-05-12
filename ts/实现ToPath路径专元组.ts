type ToPath<S extends string> = S extends `${infer D1}.${infer D2}` ?
    D1 extends `${infer D3}[${infer D4}]` ? [D3, D4, ...ToPath<D2>] : [D1, ...ToPath<D2>] : [S]

//=> ['foo', 'bar', 'baz']
//=> ['foo', '0', 'bar', 'baz']
const a: ToPath<'foo.bar.baz'> = ['foo', 'bar', 'baz']
const b: ToPath<'foo[0].bar.baz'> = ['foo', '0', 'bar', 'baz']
