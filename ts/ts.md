## ts

#### 什么是TypeScript，它与JavaScript有何不同？
ts是js的超集，为该语言提供静态类型检测，允许开发人员自定义变量、函数参数、函数返回值的数据类型有助于编译时检测数据类型
#### 解释TypeScript中静态类型的概念及其好处。
TypeScript 中的静态类型可以在开发过程中指定变量、函数参数和返回值的数据类型。这有助于及早捕获与类型相关的错误，从而提高代码质量和可维护性。
#### TypeScript中的接口是什么？
TypeScript 中的接口定义了对象结构的契约，指定其属性和方法的名称和类型。它们促进强大的类型检查并实现更好的代码组织。
#### 使用TypeScript相对于纯JavaScript有什么好处？
TypeScript 提供了多种好处，包括静态类型、更好的代码分析和工具支持、改进的代码可读性、早期错误检测、更轻松的代码重构以及增强的代码文档。它还使开发人员能够编写更易于维护和扩展的应用程序。
#### 如何在TypeScript的接口中定义可选属性？
使用？表示
```
interface p{
    name: string,
    age?:10
}
```
#### 解释TypeScript中联合类型的概念并提供示例。
联合类型允许一个变量有多种类型。它通过使用 | 来表示类型之间的符号。这允许变量存储任何指定类型的值
```
type p = string|number
```
#### TypeScript中的类型断言是什么？
当无法自动推断类型时，TypeScript 中的类型断言允许您显式告诉编译器变量的类型。这是使用 <type> 或 as type 语法实现的。这是一个例子：
```
let length: any = '5';
let numberLength: number = <number>length; // Using <type> syntax
let stringLength: number = length as number; // Using "as type" synta
```
#### 如何在TypeScript中定义具有可选参数和默认参数的函数？
使用？定义可选参数
```
function greet(name: string, message: string = 'Hello', times?: number): void {
  ...
}
```
#### TypeScript中的泛型是什么？
TypeScript 中的泛型允许您创建可与各种类型一起使用的可重用组件或函数。它们支持强类型，同时保持使用不同数据类型的灵活性
```
function identity<T>(arg: T): T {
  return arg;
}
const result1 = identity<number>(42); // Explicitly specifying the type
const result2 = identity('hello'); // Inferring the type
```
#### 通过示例解释TypeScript中的“keyof”关键字。
TypeScript 中的“keyof”关键字是一个类型运算符，它返回表示对象键的文字类型的联合。它允许您对对象键执行类型安全操作
```
interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // "name" | "age"
```
#### TypeScript中的类型保护是什么？它们如何工作？
类型防护是 TypeScript 表达式，它在运行时检查变量的类型，并允许您根据类型执行不同的操作。它们可以实现更好的类型推断，并提供一种更有效地处理联合类型的方法
```
function printValue(value: string | number): void {
  if (typeof value === 'string') {
    console.log(`The value is a string: ${value}`);
  } else if (typeof value === 'number') {
    console.log(`The value is a number: ${value}`);
  }
```
#### 解释TypeScript中条件类型的概念。
```
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
function add(a: number, b: number): number {
  return a + b;
}
type AddReturnType = ReturnType<typeof add>; // number
```
#### TypeScript中的映射类型是什么？
TypeScript 中的映射类型允许您通过将属性映射到新类型来基于现有类型创建新类型。它们使您能够轻松修改现有类型或向现有类型添加属性
```
interface Person {
  name: string;
  age: number;
}
type PersonWithOptionalProperties = { [K in keyof Person]?: Person[K] };
const john: Person = { name: 'John', age: 30 };
const johnWithOptionalProperties: PersonWithOptionalProperties = { name: 'John' };
```
#### 解释TypeScript中的“部分”实用程序类型。
TypeScript 中的“部分”实用程序类型用于使现有类型的所有属性成为可选。它允许您从现有类型创建具有可选属性的新类型
```
interface Person {
  name: string;
  age: number;
}
type PartialPerson = Partial<Person>;
const john: PartialPerson = { name: 'John' };
```
#### TypeScript中的“只读”实用程序类型是什么？它是如何工作的？
TypeScript 中的“Readonly”实用程序类型用于使现有类型的所有属性变为只读。它可以防止对象创建后修改其属性.
```
interface Person {
  readonly name: string;
  age: number;
}
const john: Readonly<Person> = { name: 'John', age: 30 };
john.age = 31; // Error: Cannot assign to 'age' because it is a read-only property
```
#### 映射类型中的“键重新映射”和“值重新映射”是什么？
键重映射”和“值重映射”是 TypeScript 中映射类型的两个特性。“键重新映射”允许您使用 as 关键字更改现有类型的键
```
//key映射
interface Person {
  name: string;
  age: number;
}
type MappedPerson = { [K in keyof Person as `new_${K}`]: Person[K] };
const john: MappedPerson = { new_name: 'John', new_age: 30 };
//val映射
type ValueRemapped<T> = T extends 'a' ? 'x' : T extends 'b' ? 'y' : 'z';
type Result = ValueRemapped<'a' | 'b' | 'c'>; // Result: 'x' | 'y' | 'z'
```
#### 解释TypeScript中的“Pick”实用程序类型。
TypeScript 中的“Pick”实用程序类型允许您通过从现有类型中选择特定属性来创建新类型。它有助于创建现有类型的子集
```
interface Person {
  name: string;
  age: number;
  city: string;
}
type PersonInfo = Pick<Person, 'name' | 'age'>;
const john: PersonInfo = { name: 'John', age: 30 };
```
#### TypeScript中的“Omit”实用程序类型是什么？它是如何工作的？
TypeScript 中的“Omit”实用程序类型允许您通过从现有类型中排除特定属性来创建新类型。它有助于创建删除了某些属性的类型。
```
interface Person {
  name: string;
  age: number;
  city: string;
}
type PersonWithoutCity = Omit<Person, 'city'>;
const john: PersonWithoutCity = { name: 'John', age: 30 };
```
#### TypeScript中的“条件映射类型”是什么？
条件映射类型将条件类型和映射类型结合起来，根据条件执行类型转换。它们允许您根据现有类型的属性创建动态类型
```
interface Person {
  name: string;
  age: number;
}
type MappedConditional<T> = {
  [K in keyof T]: T[K] extends number ? string : T[K];
};
const john: MappedConditional<Person> = { name: 'John', age: '30' };
```
#### 条件类型中“keyof”和“in”关键字的用途是什么？
条件类型中的“keyof”关键字用于获取对象类型的键的并集。它允许您以类型安全的方式使用对象的键。“in”关键字检查属性键是否存在于从“keyof”获得的键的并集中
```
// keyof是取联合类型
type p<T extends object, K keyof T>(o:T, k:K):T[K]{
    return t[k]
}
// in取联合类型的某一个
type name = 'firstName' | 'lastName';
type TName = {
  [key in name]: string;
};
```
#### 解释TypeScript中的“排除”实用程序类型。
TypeScript 中的“排除”实用程序类型允许您通过从联合中排除某些类型来创建新类型。它有助于创建联合类型的子集
```
type Color = 'red' | 'green' | 'blue';
type PrimaryColors = Exclude<Color, 'green' | 'blue'>;
const primary: PrimaryColors = 'red'; // Okay
const invalidColor: PrimaryColors = 'green'; // Error: Type '"green"' is not assignable to type 'PrimaryColors'.
```
#### TypeScript中的“模板文字类型”是什么？
TypeScript 中的模板文字类型允许您使用模板文字语法来操作类型中的字符串。它们提供了一种基于字符串模式创建复杂类型的方法。
```
type Greeting<T extends string> = `Hello, ${T}!`;
type GreetJohn = Greeting<'John'>; // Result: "Hello, John!"
type GreetJane = Greeting<'Jane'>; // Result: "Hello, Jane!"
```
#### 解释条件类型中的“infer”关键字。
条件类型中的“infer”关键字用于从条件类型中的另一种类型推断出类型。它允许您捕获类型并将其分配给类型变量。
```
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
function add(a: number, b: number): number {
  return a + b;
}
type AddReturnType = ReturnType<typeof add>; // Result: number
```
#### TypeScript中的“keyof”和“typeof”关键字有何用途？。
keyof”关键字用于获取对象类型的键的并集，“typeof”关键字用于获取值的类型
```
interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // Result: "name" | "age"
const john = { name: 'John', age: 30 };
type JohnType = typeof john; // Result: { name: string, age: number }
```
#### TypeScript中的“const断言”是什么？
```
// 以下是作为只读的对象
function getConfig() {
  const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
  } as const;
  return config;
}
const config = getConfig();
```
#### TypeScript中的“私有”和“受保护”访问修饰符是什么？
“Private”和“protected”是 TypeScript 中的访问修饰符，用于控制类成员的可见性和可访问性。
#### 解释TypeScript条件类型中的“keyof T extends K”构造。
TypeScript 条件类型中的“keyof T extends K”构造用于使用“extends”关键字根据指定条件过滤对象类型的键
```
type FilterProperties<T, K> = {
  [P in keyof T as T[P] extends K ? P : never]: T[P];
};
interface Person {
  name: string;
  age: number;
  email: string;
}
type StringProperties = FilterProperties<Person, string>;
// Result: {
//   name: string;
//   email: string;
// }
type NumberProperties = FilterProperties<Person, number>;
// Result: {
//   age: number;
// }
```
#### TypeScript中的“mixins”是什么？
TypeScript 中的 Mixins 允许您通过将某个类与一个或多个其他类组合来向该类添加行为。它支持代码重用和组合
```
class Printable {
  print() {
    console.log(this.toString());
  }
}
class MyObject {
  constructor(private name: string) {}
  toString() {
    return `Object: ${this.name}`;
  }
}
interface MyObject extends Printable {}
const myObj = new MyObject('example');
```
#### 解释TypeScript中“声明合并”的概念。
TypeScript 中的“声明合并”是编译器将同一实体的多个声明合并到单个定义中的过程。它允许您扩展接口、函数、类和枚举
```
interface Person {
  name: string;
}
interface Person {
  age: number;
}
const john: Person = { name: 'John', age: 30 };
console.log(john); // Output: { name: 'John', age: 30 }
```
#### TypeScript中的“noUncheckedIndexedAccess”编译器选项是什么？为什么它很有用？
TypeScript 中的“noUncheckedIndexedAccess”编译器选项用于在使用索引访问属性时捕获潜在的未定义或空值。它通过避免运行时错误来帮助提高代码安全性。
```
// tsconfig.json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true
  }
}

const data: { [key: string]: number } = {
  apple: 1,
  banana: 2,
};
const fruit = 'pear';
const count = data[fruit]; // Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ apple: number; banana: number; }'.
```
#### TypeScript中的“装饰器”是什么？
```
function MyClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = 'decorated property';
    hello = 'overridden';
  };
}
@MyClassDecorator
class MyClass {
  hello: string;
  constructor() {
    this.hello = 'world';
  }
}
const myClassInstance = new MyClass();
console.log(myClassInstance.hello); // Output: "overridden"
console.log((myClassInstance as any).newProperty); // Output: "decorated property"
```
#### 解释TypeScript中的“abstract”关键字。
TypeScript 中的“abstract”关键字用于定义抽象类和方法。抽象类不能直接实例化；它们只能被延长。抽象方法在抽象类中没有实现
```
abstract class Shape {
  abstract area(): number;
}
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
const circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483
```
#### 什么是TypeScript中的“条件类型”，它们为什么有用？
TypeScript 中的条件类型允许您根据条件执行类型转换。它们使您能够创建依赖于其他类型之间关系的动态类型
```
type IsString<T> = T extends string ? true : false;
type CheckString = IsString<string>; // Result: true
type CheckNumber = IsString<number>; // Result: false
```
#### TypeScript中属性的“只读”修饰符是什么？
TypeScript 中的“readonly”修饰符用于使类或接口的属性变为只读，这意味着它们的值一旦设置就无法更改
```
class Person {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const john = new Person('John');
console.log(john.name); // Output: "John"
john.name = 'Jane'; // Error: Cannot assign to 'name' because it is a read-only property.
```
#### 解释TypeScript中的“as const”断言。
TypeScript 中的“as const”断言用于推断数组和对象的文字类型。它告诉编译器该值应被视为常量，而不是扩展到其基本类型
```

const fruits = ['apple', 'banana'] as const;
const person = {
  name: 'John',
  age: 30,
} as const;
// The type of fruits is: readonly ["apple", "banana"]
// The type of person is: {
//   readonly name: "John";
//   readonly age: 30;

```
#### TypeScript中的“模块增强”是什么？
TypeScript 中的模块扩充允许您在外部模块中添加新声明或扩展现有声明。当您想要向第三方库添加功能时，它非常有用
```

declare module 'external-library' {
  export function greet(name: string): string;
}
// Augment the module
// augmentations.d.ts
declare module 'external-library' {
  export function goodbye(name: string): string;
}
// Usage
import { greet, goodbye } from 'external-library';
console.log(greet('John')); // Output: "Hello, John!"
console.log(goodbye('John')); // Output: "Goodbye, John!
```
#### TypeScript中的“keyof”运算符有何用途？
TypeScript 中的“keyof”运算符用于获取对象类型的键的并集。它允许您以类型安全的方式使用对象的键
```
interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // Result: "name" | "age"
```
#### TypeScript中“typeof”运算符的用途是什么？
TypeScript 中的“typeof”运算符用于在编译时获取值或变量的类型。当您想要根据变量的类型执行类型检查时，它非常有用
```
const name = 'John';
type NameType = typeof name; // Result: string
function printType(value: any): void {
  const type = typeof value;
  console.log(`The type of ${value} is ${type}.`);
}
printType(42); // Output: "The type of 42 is number."
printType(true); // Output: "The type of true is boolean."
printType('Hello'); // Output: "The type of Hello is string."
```
#### TypeScript接口中的“索引签名”是什么？
TypeScript 接口中的索引签名允许您根据属性的名称定义属性的类型。它们用于定义具有动态属性名称的对象
```
interface Dictionary {
  [key: string]: number;
}
const data: Dictionary = {
  apple: 1,
  banana: 2,
};
const value = data['banana'];
console.log(value); // Output: 2
```
#### TypeScript中的“类型谓词”是什么？
TypeScript 中的类型谓词用于缩小条件块中值的类型范围。它们提供了一种执行类型检查并获取更具体类型的方法。
```
function isString(value: any): value is string {
  return typeof value === 'string';
}
function printLength(value: string | number): void {
  if (isString(value)) {
    console.log(`The length of the string is ${value.length}.`);
  } else {
    console.log(`The value is a number: ${value}`);
  }
}
printLength('Hello'); // Output: "The length of the string is 5."
printLength(42); // Output: "The value is a number: 42."
```
