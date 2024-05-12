type Item = 'a,b,c';

type Split<
    S extends string,
    Delimiter extends string,
    > = S extends `${infer S1}${Delimiter}${infer S2}` ? [S1,...Split<S2, Delimiter>]: [S]

type ElementType = Split<Item, ','>; // ["a", "b", "c"]

const a:ElementType = ["a", "b", "c"]
