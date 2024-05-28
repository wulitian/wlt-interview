type Foo = {
    readonly a: number;
    readonly b: string;
    readonly c: boolean;
};
type CreateMutable<T> = {
    -readonly [key in keyof T]: T[key]
}
type Mutable<T, Key extends keyof T = keyof T> = CreateMutable<Pick<T,Key>> & Omit<T, Key>

const mutableFoo: Mutable<Foo, 'a'> = { a: 1, b: '2', c: true };

mutableFoo.a = 3; // OK
// mutableFoo.b = '6'; // Cannot assign to 'b' because it is a read-only property.

