type InferToString<T> = T extends string ? `${T}` : never;

// type JoinStrArray<
//     Arr extends string[],
//     Separator extends string,
//     Result extends string = ''
//     > = Arr extends [infer S1, ...infer S2] ?
//     S2 extends [] ? `${Result}${InferToString<S1>}`
//         : S2 extends string[] ? JoinStrArray<S2, Separator, `${Result}${InferToString<S1>}${Separator}`> : never
//     : Result;

type JoinStrArray<Arr extends string[], Separator extends string> =
    Arr extends [infer A, ...infer B]
    ? `${A extends string ? A : ''}${B extends [string, ...string[]]
        ? `${Separator}${JoinStrArray<B, Separator>}`
        : ''}`
    : '';
// 测试用例
type Names = ["one", "two", "three"]
type NamesComma = JoinStrArray<Names, ","> // "one,two,three"
type NamesSpace = JoinStrArray<Names, " "> // "one two three"
type NamesStars = JoinStrArray<Names, "⭐"> // "one⭐two⭐three"
