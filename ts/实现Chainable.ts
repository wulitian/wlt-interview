declare const config: Chainable

type Chainable<T = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<T & { [P in K]: V }>;
    get(): { [P in keyof T]: T[P] };
}

const result = config
    .option('age', 7)
    .option('name', 'a')
    .option('address', { value: 'b' })
    .get()

type ResultType = typeof result
