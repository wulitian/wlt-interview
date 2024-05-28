type Foo = {
    a: number;
    b: string;
};

type Bar = {
    b: number;
};

type Merge<FirstType, SecondType> = Omit<FirstType, Extract<keyof FirstType, keyof SecondType>> & SecondType// 你的实现代码

const ab: Merge<Foo, Bar> = { a: 1, b: 2 };


