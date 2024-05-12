type Responder = {
    text?: () => string;
    json?: () => string;
    secure?: boolean;
};
// 这里利用了联合类型作为泛型是 extends 会分发处理的特性，之后将去掉某个属性的类型与只有某个属性，且必填的类型做交叉合并
type RequireAtLeastOne<
    ObjectType,
    KeysType extends keyof ObjectType = keyof ObjectType,
    > = KeysType extends KeysType ? Required<Pick<ObjectType, KeysType>> & Partial<Omit<ObjectType, KeysType>> : never

// 表示当前类型至少包含 'text' 或 'json' 键
const responder: RequireAtLeastOne<Responder, 'text' | 'json'> = {
    json: () => '{"message": "ok"}',
    secure: true
};

