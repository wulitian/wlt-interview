type Foo = {
    a: number;
    b?: string;
    c: boolean;
}
type SetOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
// type SetOptionalOmit<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;
// type SetRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
// type SetRequiredOmit<T, K extends keyof T> = Pick<T, K> & Required<Omit<T, K>>;

// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;

const obj: SomeOptional = {
    // a: 1,
    // b: '123',
    c: false
}

