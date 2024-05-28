interface Foo {
    [key: string]: any;
    [key: number]: any;
    bar(): void;
}

type RemoveIndexSignature<T> = {[key in keyof T as number extends key ? never: string extends key? never: key]: T[key]}

type FooWithOnlyBar = RemoveIndexSignature<Foo>; //{ bar: () => void; }

const a:FooWithOnlyBar = {
    bar() {
    }
}
