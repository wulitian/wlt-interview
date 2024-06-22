# js

#### 01js中的闭包
##### 闭包是什么
- 闭包是一个函数内部调用一个函数，内部的函数使用内部的变量，外部的函数返回内部的函数，会产生闭包。
##### 闭包变量存储的位置
- 闭包中的变量存储的位置是堆内存，如果放到栈内存中会随着栈的回收而回收
##### 闭包的作用
- 保护函数的私有变脸不受外界影响，形成不被干扰的栈内存
- 方法和属性的私有化
##### 闭包注意事项
- 闭包需要注意内存泄漏
##### 检测内存泄漏的办法
performance面板和memory面板可以找到内存泄漏现象和位置
##### for循环let声明下的闭包
```
/**
 * 由于var声明全局作用域下的，当函数执行时i=5
 * @type {*[]}
 */
const arr = [];

for (let i = 0; i < 5; i++) {
    arr[i] = function () {
        console.log(i);
    }
}
arr[0]()
arr[1]()
arr[2]()
arr[3]()
arr[4]()
```
##### for循环var声明下的闭包
```
/**
 * 由于let声明存在闭包会分别缓存结果，当函数执行时i=5
 * @type {*[]}
 */
const arr = [];

for (var i = 0; i < 5; i++) {
    arr[i] = function () {
        console.log(i);
    }
}

arr[0]()
arr[1]()
arr[2]()
arr[3]()
arr[4]()
```
##### IIFE自执行函数下的闭包
```
/**
 *  var 声明变量不存在作用域使用IIFE包裹形成闭包缓存私有作用域结果0,1,2
 * @type {number}
 */
var arr = [];

for (var i = 0; i < 5; i++) {
    (function(j){
        setTimeout( arr[j] = function () {
            console.log(j);
        }, 0)
    })(i)
}
```
##### 闭包的变量缓存
```
/**
 *  存在上级作用域的引用形成闭包并缓存当前变量
 * @type {number}
 */
var n = 10
function fn(){
    var n =20
    function f() {
        n++;
        console.log(n)
    }
    return f
}

var x = fn()
x() // 21
```
##### 循环赋值下的闭包
```
/**
 *  存在闭包会形成10个私有作用域所以会依次执行0,1,2,3,4，如果去掉自执行函数会输出5个5
 * @type {number}
 */
for(var i = 0; i<5; i++){
    (function(j){
        setTimeout(function(){
            console.log(j)
        }, 1000)
    })(i)
}
```
#### 02js中的作用域与执行上下文
##### js中作用域
###### 作用域简介：

1. 作用域是定义变量的区域，它有一套访问变量的规则，这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量（标识符）进行变量查找。

2. 作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和 函数。

###### 作用域定义

就是查找变量的一套规则。

1. 引擎-js程序编译与执行全过程。

2. 编译器-js语法词法编译工作。

3. 作用域- 负责收集与维护声明的变量，组成一套规则，确定执行代码对这些变量的访问权限。

###### 作用域的查找

作用域气泡的结构和互相之间的位置关系给引擎提供了足够的位置信息，引擎用这些信息来查找标识符的位置

###### 作用域种类

1. 词法作用域

with语句，eval语句

2. 函数作用域

全局作用域，function 函数内

3. 块作用域

let,const,for语句，switch case语句等，try/catch

###### 提升

1. var 声明变量存在变量提升

2. 函数提升优先
##### js中变量提升与函数提升
将声明代码移动到函数顶端，标准的说是生成执行上下文时，会有两个阶段，
第一阶段：创建vo，js解析器会找到需要提升的变量和函数，并开辟好内存空间，函数会存储到内存中，变量会赋值为undefined,
第二阶段，代码执行阶段，如果是多个同名函数会覆盖，函数优先于变量提升。
##### js中的执行上下文
###### 执行上下文分类
- 全局执行上下文

- 函数执行上下文

- eval函数执行上下文
###### 执行栈
执行栈就是调用栈，用于存储代码运行的执行上下文， 当引擎在执行脚本时，先创建全局执行上下文压入栈
当引擎调用一个函数时，会为该函数创建执行上下文压入栈顶部 引擎会先执行执行上下文在顶部的函数，执行后，
会弹出，然后控制流程会到达当前执行上下文的下一个上下文 一旦所有代码执行完毕，js引擎从执行栈中移除全局执行上下文。
#### 03js中的this
##### this的指向问题
- 简单讲就是谁调用指向谁
- 箭头函数没有this
- 外层函数调用指向与两个定时器调用this指向window非node环境
- apply,call,bind,this指向第一个参数
- 严格模式下this没有执行环境时指向undefined
##### this绑定的优先级
new绑定 > 显示绑定(apply/call/bind) > 隐式绑定(obj.test()) > 默认绑定(独立函数调用)
##### 函数调用中this的指向
```
/**
 * 外层函数调用时this指向window，定时器指向的this指向window
 */
var name = 'wulitian';

function fn(){
    console.log(this.name);
}

fn();

setTimeout(function(){
    console.log(this); // window
}, 0);
```
##### 方法调用中的this指向
```
/**
 * 方法调用this会指向当前对象
 */
var name = 'wulitian';

const test = function fn() {
    console.log(this.name)
}

const obj = {
    name: "WULITIAN",
    test: test
}
obj.test();
```
##### 构造函数调用时this的指向
```
/**
 * 构造函数调用下this的指向为实例对象
 */
var that = undefined;

function fn(){
    that = this;
}

let obj = new fn();

console.log(obj === that)
```
##### call与apply与bind作用下this指向
```
/**
 * call,apply,bind可以改变this的指向通过第一个参数。默认不传相当于window非node环境下。
 */

var name = 'wulitian';

const obj = {
    name: 'WULITIAN',
    fn: function () {
        console.log(this.name)
    }
}

const obj2 = {
    name: 'WULITIAN2'
}

obj.fn();
obj.fn.call();
obj.fn.call(obj2);
obj.fn.apply();
obj.fn.apply(obj2);
obj.fn.bind()();
obj.fn.bind(obj2)();
```
##### 箭头函数调用this的指向
```
/**
 * 箭头函数没有this沿着作用域向上查找，当前是window下的name
 */
var name = 'wulitian';

const obj = {
    name: 'WULITIAN',
    fn: () => {
        console.log(this.name)
    }
}
obj.fn()
```
##### 严格模式下this的指向
```
/**
 * 严格模式下this指向undefined
 */
"use strict"

var fn = function(){
    console.log(this);
}

fn();
```
##### 优先级-显示高于隐式绑定
```
/**
 * 显示绑定高于隐式绑定
 */
function foo() {
  console.log(this)
}

var obj = {
  name: "obj",
  foo: foo.bind("aaa")
}

obj.foo()
```
##### 优先级-new高于隐式绑定
```
/**
 * new的优先级高于隐式绑定
 */
var obj = {
  name: "obj",
  foo: function() {
    console.log(this)
  }
}

var f = new obj.foo()
```
##### 优先级-new高于显示绑定
```
// 结论: new关键字不能和apply/call一起来使用

// new的优先级高于bind
function foo() {
    console.log(this)
}

var bar = foo.bind("aaa")
var obj = new bar()
```
#### 04call与apply与bind
##### 对比：
- call() 方法调用一个函数, 其具有一个指定的this值和分别地提供的参数(参数的列表)。call性能好一些（如果参数是数组的话可以传展开运算符...）
- apply() 方法调用一个函数, 其具有一个指定的this值，以及作为一个数组（或类似数组的对象  arguments 是一个类数组对象。代表传给一个function的参数列表。）提供的参数。
- bind() 方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。
##### 共同点：
都是函数，均可以改变this指向，都可以向函数传递参数
##### 不同点：
- call() 与 apply()只是传递参数不同，call传递参数是参数列表，apply是类似于数组的对象并且改变this指向后直接执行
- bind() 传递参数是参数列表，改变this指向后不执行需要手动执行
##### call函数的实现
```
/**
 *  便捷处理undefined、null时指向window,利用对象的方式隐形改变this指向
 */

Function.prototype.MyCall = function (thisArg, ...args) {
    var fn = this
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    thisArg.fn = fn
    var result = thisArg.fn(...args)
    delete thisArg.fn
    return result
}
var name = "wulitian"
function fn(a, b) {
    console.log(a);
    console.log(b);
    console.log("fn函数执行", this.name);
}

const obj = {
    name:"WULITIAN"
}

fn.call(undefined)
fn.call(obj)
fn.call(obj,1,2)
fn.MyCall(undefined)
fn.MyCall(obj)
fn.MyCall(obj,1,2)
```
##### apply函数的实现
```
/**
 *  便捷处理undefined、null时指向window,利用对象的方式隐形改变this指向注意参数是类数组
 */
Function.prototype.MyApply = function (thisArg, argArray) {
    let fn = this;
    thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg);
    thisArg.fn = fn;
    argArray = argArray || []
    result = thisArg.fn(...argArray)
    delete thisArg.fn;
    return result;
}

var name = "wulitian";

function fn(a, b) {
    console.log(a);
    console.log(b);
    console.log("fn函数执行", this.name);
}

const obj = {
    name: "WULITIAN"
}

fn.apply(undefined)
fn.apply(obj)
fn.apply(obj, [1,2])
fn.MyApply(undefined)
fn.MyApply(obj)
fn.MyApply(obj, [1,2])
```
##### bind函数的实现
```
/**
 *  便捷处理undefined、null时指向window,利用对象的方式隐形改变this指向注意返回的是函数
 */
Function.prototype.MyBind = function(thisArg, ...argArray) {
  let fn = this;
  thisArg = (thisArg === null||thisArg === undefined)?window:Object(thisArg);
  return function(...arg){
    thisArg.fn = fn;
    let finArg = [...arg,...argArray]
    thisArg.fn(...finArg)
    delete thisArg.fn
  }
}

var name = "wulitian";

function fn(a, b) {
  console.log(a);
  console.log(b);
  console.log("fn函数执行", this.name);
}

const obj = {
  name: "WULITIAN"
}

fn.bind(undefined)()
fn.bind(obj)()
fn.bind(obj, 1,2)()
fn.MyBind(undefined)()
fn.MyBind(obj)()
fn.MyBind(obj, 1,2)()
```
#### 05js中的arguments
1. arguments 是一个类数组对象。表明传给一个函数的参数列表
2. arguments.callee 指向当前执行函数
3. arguments.caller 指向调用当前函数的函数
4. arguments.length 传递当前函数参数的数量
##### arguments基本使用
```
function foo(num1, num2, num3) {
  console.log(arguments.length)
  console.log(arguments[1])
  console.log(arguments[2])
  console.log(arguments[4])
  console.log(arguments.callee)
  // arguments.callee()
}

foo(1, 2, 3, 4, 5)
```
##### arguments转array
```
function foo(num1, num2) {
  // 遍历
  // var newArr = []
  // for (var i = 0; i < arguments.length; i++) {
  //   newArr.push(arguments[i] * 10)
  // }
  // console.log(newArr)

  // Array.prototype.slice将arguments转成array
  var newArr2 = Array.prototype.slice.call(arguments)
  console.log(newArr2)

  var newArr3 = [].slice.call(arguments)
  console.log(newArr3)

  // 2.3.ES6的语法
  var newArr4 = Array.from(arguments)
  console.log(newArr4)
  var newArr5 = [...arguments]
  console.log(newArr5)
}

foo(1, 2, 3, 4, 5)
```
##### 箭头函数中没有arguments
```
// 1.案例一:
// var foo = () => {
//   console.log(arguments)
// }

// foo()

// 2.案例二:
// function foo() {
//   var bar = () => {
//     console.log(arguments)
//   }
//   return bar
// }

// var fn = foo(123)
// fn()

// 3.案例三:
var foo = (num1, num2, ...args) => {
  console.log(args)
}

foo(1, 2, 3, 4, 5)
```
#### 06js中的函数柯里化
##### 定义
是 Javascript 中函数式编程的一个重要概念。它返回的，是一个函数的函数。其实现方式，需要依赖参数以及递归，通过拆分参数的方式，来调用一个多参数的函数方法，以达到减少代码冗余，增加可读性的目的。
##### 用途
柯里化实际是把简答的问题复杂化了，但是复杂化的同时，我们在使用函数时拥有了更加多的自由度
##### 封装思路
通过函数的 length 属性，获取函数的形参个数，形参的个数就是所需的参数个数也可以在调用柯里化工具函数时，手动指定所需的参数个数
##### 柯里化通用函数封装
```
function add(x, y, z) {
    return x + y + z;
}

function curry(fn,arr=[]){
    let length = fn.length;
    return function(...arg){
        let newArr = [...arg,...arr]
        if(newArr.length === length){
            return fn(...newArr)
        }else{
            return curry(fn,newArr)
        }
    }
}

const curryAdd = curry(add);
console.log(curryAdd(1)(2)(3))
console.log(curryAdd(1)(2,3))
console.log(curryAdd(1,2,3))
```
#### 07js中的with与eval与strict

##### with

可以形成自己的作用域

##### eval

1. eval() 函数会将传入的字符串当做 JavaScript 代码进行执行，如果传入的字符串是表达式则返回表达式求值结果，否则返回 undefined 。

2. 应该避免使用eval,不安全,耗性能（2次,一次解析成js语句,一次执行）。

##### strict

- 禁止意外创建全局变量

- 不允许函数有相同的参数名称

- 静默错误

- 不允许使用原先的八进制格式 0123

- with语句不允许使用

- eval函数不会向上引用变量了

- 严格模式下自执行函数(默认绑定)会指向undefined

- setTimeout中依旧指向window
##### with语句的使用
```
// "use strict";

var message = "message"

var obj = {message: "obj message"}

function foo() {
    function bar() {
        with (obj) {
            console.log(message)
        }
    }

    bar()
}

foo()

var info = {name: "wulitian"}

with (info) {
    console.log(name)
}
```
##### eval函数的使用
```
var str = 'var message = "Hello World"; console.log(message);'

eval(str)
```
##### 严格模式常见的限制
```
"use strict"

// 1. 禁止意外创建全局变量
// name = "wulitian"
// console.log(name)
//
// function fn() {
//     age = 20
// }
//
// fn()
// console.log(age)

// 2.不允许函数有相同的参数名称
// function fn2(x, y, x) {
//   console.log(x, y, x)
// }
//
// fn2(1, 2, 3)


// 3.静默错误
// true.name = "a"
// NaN = 1
// var obj = {}
// Object.defineProperty(obj, "name", {
//   configurable: false,
//   writable: false,
//   value: "1"
// })
// console.log(obj.name)
// obj.name = "wulitian"
//
// delete obj.name

// 4.不允许使用原先的八进制格式 0123
// var num = 0o123 // 八进制
// var num2 = 0x123 // 十六进制
// var num3 = 0b100 // 二进制
// console.log(num, num2, num3)

// 5.with语句不允许使用

// 6.eval函数不会向上引用变量了
// var str = '"use strict"; var name = "wulitian"; console.log(name);'
// eval(str)
// console.log(name)
```
##### 严格模式下的this
```
"use strict"

// 在严格模式下, 自执行函数(默认绑定)会指向undefined
// 之前编写的代码中, 自执行函数我们是没有使用过this直接去引用window
function foo() {
  console.log(this)
}

var obj = {
  name: "wulitian",
  foo: foo
}

foo()

obj.foo()
var bar = obj.foo
bar()

// setTimeout的this
// fn.apply(this = window)
setTimeout(function() {
  console.log(this)
}, 1000);
```
#### 08js中null与undefined与NaN
##### js中NaN
1. NaN 表示不是一个数,但是它本身是 number 类型。

2. NaN 和 NaN 不相等。

3. isNaN可以判断一个变量是不是数。
##### js中null与undefined区别
1.null表示无对象转换为数值为0

2.undefined是一个表示“无”的原始值,转换为数值时为NaN

3.当声明未初始化，变量默认值为undefined

4.null用来表示尚未存在的对象

5.null表示空值

6.undefined表示不存在这个值
#### 09js中的Set,WeakSet,Map,WeakMap

##### Set

1. 介绍：Set 对象允许储存任何类型的唯一值，无论是原始值或者是对象引用,无序不重复。
- +0 与-0 在存储判断唯一性的时候是恒等的，所以不可以重复。
- undefined 和 undefined 是恒等的，所以不可以重复。
- NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个不能重复。

2. 属性方法

- size 属性：返回集合长度
- add(value)方法：添加元素
- delete(value)方法：删除元素
- has(value)方法：判断元素是否存在
- clear()方法：清空集合
- forEach()方法：集合遍历

3. 使用场景：数组去重、交集、并集、差集

##### WeakSet

1. 介绍：WeakSet 对象允许将弱引用对象存在一个集合中
- WeakSet 只能储存对象引用，不能存放值，而 Set 对象都可以
- WeakSet 对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑 WeakSet 对该对象的引用，如果没有其他的变量或者属性引用这个对象值，则这个对象将会被垃圾回收掉。（不考虑该对象还存在与 WeakSet 中），所以 WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到，被垃圾回收了。因此 ES6 规定，WeakSet 对象是无法被遍历的，也没有办法拿到它包含的所有元素。

2. 属性方法
- add(value)方法：添加元素
- delete(value)方法：删除元素
- has(value)方法：判断元素是否存在
- clear()方法：清空所有元素

##### Map

1. 介绍

Map 对象保存键值对，并且能够记住键的原始插入顺序，任何值（对象或者原始值）都可以左右一个键或者一个值
- +0 与-0 在存储判断唯一性的时候是恒等的，所以不可以重复。
- undefined 和 undefined 是恒等的，所以不可以重复。
- NaN 与 NaN 是不恒等的，但是只能存一个不能重复。

2. 属性方法
- size 属性：返回字典长度（类似于数组的长度 length）
- values()方法：返回一个可迭代对象，包含按顺序插入 Map 对象中每个元素的 value 值
- set(key,value)方法：向字典中添加新元素
- get(key)方法：通过键查找特定数值并返回
- has(key)方法：判断字典中是否存在键 key
- delete(key)方法：通过键 key 从字典中移出对应的数据
- clear()方法：清空字典
- forEach()方法：循环字典

##### WeakMap

1. 介绍

WeakMap 对象是一组键值得集合，其中的键是弱引用。注意：键必需是弱引用，而值可以是任意。
注意：WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。

2. 属性方法
- set(key,value)方法：设置一组 key 关联对象
- delete(key)方法：移出 key 的关联对象
- has(value)方法：判断 WeakSet 对象中是否包含 value
- get(key)方法：返回 key 关联对象，没有则返回 undefined

##### 对比

1. Set
- 成员唯一，无序且不会重复
- 类似于数组集合，键值和键名是一致的（只有键值。没有键名）
- 可以遍历，方法有 add，delete，has

2. WeakSet
- 只能存储对应引用，不能存放值
- 成员都是弱引用，会被垃圾回收机制回收
- 不能遍历，方法有 add，delete，has

3. Map
- 键名唯一不可重复
- 类似于集合，键值对的集合，任何值都可以作为一个键或者一个值
- 可以遍历，可以转换各种数据格式，方法 get，set，has，delete

4. WeakMap
- 只接受对象为键名，不接受其他类型的值作为键名，键值可以是任意
- 键名是拖引用，键名所指向的对象，会被垃圾回收机制回收
- 不能遍历，方法 get，set，has，delete
```
// Set
!(function () {
    let set = new Set([1, 2, 3, 4]);
    let set2 = new Set({
        [Symbol.iterator]: function* () {
            yield 1;
            yield 2;
            yield 3;
        }
    });
    console.log(set2)
    set.add(5).delete(2);
    console.log(set.has(2))
    console.log(set.size)
    console.log(set);
    set.forEach((val, e) => {
        console.log(val)
        console.log(e)
    })
    for (let pair of set.keys()) {
        console.log(pair);
    }
    for (let pair of set.values()) {
        console.log(pair);
    }
    for (let pair of set.entries()) {
        console.log(pair);
    }
})()

// WeakSet
!(function () {
    const container = {};
    let weakSet = new WeakSet();
    weakSet.add(container)
    console.log(weakSet.has(container))
    console.log(weakSet)
})()

// Map
!(function () {
    let map = new Map([['a', '1'], ['b', '2']]);
    let map2 = new Map({
        [Symbol.iterator]: function* () {
            yield ["a", "1"];
            yield ["b", "2"];
            yield ["c", "3"];
        }
    });
    console.log(map2)
    map.set("c", "3");
    console.log(map.has("c"))
    console.log(map)
    map.forEach((key, val) => {
        console.log(key);
        console.log(val);
    })
    for (const mapElement of map.entries()) {
        console.log(mapElement)
    }
    for (const mapElement of map.keys()) {
        console.log(mapElement)
    }
    for (const mapElement of map.values()) {
        console.log(mapElement)
    }
})()
```
#### 10js中的symbol
```
// Symbol.asyncIterator::异步可迭代
!(function () {
    const obj = new Object();
    obj[Symbol.asyncIterator] = async function* () {
        yield "hello";
        yield "async";
        yield "iteration!";
    };
    console.log(obj);
    (async () => {
        for await (const x of obj) {
            console.log(x);
        }
    })();
})()

// Symbol.hasInstance::重写instanceof
!(function () {
    class Array1 {
        static [Symbol.hasInstance](instance) {
            console.log(1231);
            return Array.isArray(instance);
        }
    }

    console.log(Array instanceof Array1)
})()

// Symbol.isConcatSpreadable::配置Array.prototype.concat()方法的参数
!(function () {
    const arr1 = ['1', '2', '3'];
    const arr2 = ['a', 'b', 'c'];
    let a = arr1.concat(arr2);
    console.log(a)
    arr1[Symbol.isConcatSpreadable] = false;
    let b = arr1.concat(arr2);
    console.log(b)

    // 类数组
    const arrayLike = {
        [Symbol.isConcatSpreadable]: true,
        length: 2,
        0: '张三',
        1: 23
    }
    let c = arr2.concat(arrayLike);
    console.log(c)

})()

// Symbol.iterator 迭代器
!(function () {
    const myIterator = {};
    myIterator[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    }
    for (const myIteratorElement of myIterator) {
        console.log(myIteratorElement);
    }
})()

// Symbol.match::指定了匹配的是正则表达式而不是字符串。String.prototype.match() 方法会调用此函数。
!(function () {
    const reg = /foo/;
    reg[Symbol.match] = false;
    console.log('/foo/'.startsWith(reg));
    console.log('/baz/'.endsWith(reg));
})()

// Symbol.matchAll::返回一个迭代器，该迭代器根据字符串生成正则表达式的匹配项。此函数可以被 String.prototype.matchAll() 方法调用。
!(function () {
    const re = /[0-9]+/g;
    const str = '2016-01-02|2019-03-07';
    const result = re[Symbol.matchAll](str);
    console.log(result);
    console.log(Array.from(result, x => x[0]));
})()

const object1 = {
    property1: 42
};

object1[Symbol.unscopables] = {
    property1: true
};
console.log(object1)
with (object1) {
    console.log(property1);
    // expected output: Error: property1 is not defined
}
```
#### 11js中的cookie与session
##### cookie::介绍

cookie是服务端生成的；
Cookie 是用户浏览器保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。
1. 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）。
2. 个性化设置（如用户自定义设置、主题等）。
3. 浏览器行为跟踪（如跟踪分析用户行为等）。

##### cookie::Domain

该标识指定主机可以接受cookie,不指定默认为当前文档，不包含子域名，如果指定domain，则一般包含子域名。

##### cookie::path

Path 标识指定了主机下的哪些路径可以接受 Cookie（该 URL 路径必须存在于请求 URL 中）。以字符 %x2F (/) 作为路径分隔符，子路径也会被匹配。

##### cookie::Expires/Max-Age

Cookie的过期时间，过期后将会自动删除。

##### cookie::HttpOnly

为了避免xss攻击，Document.cookie无法访问带有HttpOnly标识的cookie。

##### cookie::Secure

标记为 Secure 的 Cookie 只应通过被 HTTPS 协议加密过的请求发送给服务端。

##### cookie::SameSite

SameSite Cookie 允许服务器要求某个 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。

##### cookie::发送情况

老版本浏览器中：链接、预加载、get表单、post表单、iframe、AJAX、image均会发送cookie。

新版本浏览器中，链接、预加载、get表单发送cookie，post表单、iframe、AJAX、image均不发送cookie。

##### session::介绍

session是一种服务端机制，服务端使用一种散列表结构来保存信息，当程序需要为某一个客户端创建一个session时
服务器首先检查这个客户端的请求里是否已包含了一个 Session ID，如果包含直接使用，不包含创建一个session,
并且生成一个Session ID,Session ID不重复又不容易找出规律

##### session::传输方式

cookie传输

url传输

表单隐藏字段传输

##### cookie与session区别

- 存储位置：Cookie 保存在客户端，Session 保存在服务端；
- 有效期，Cookie 可以存储很长时间，Session 只能存在于一次会话中，浏览器关闭之后 Session 就失效了；
- 安全性，Cookie 存储在客户端容易被盗取或者利用，Session 在服务端比较安全；
- 存储大小，Cookie 能存储 4K 的数据，Session 较大；
- 存取方式，Cookie 中只能保存 ASCII 字符串，假如需求存取 Unicode 字符或者二进制数据，需求先进行编码。Session 中能够存取任何类型的数据；
- 服务器压力，Session 是存储在服务端的，巨大并发的时候会使服务器资源急速飙升。Cookie 则不存在此问题；
#### 12js中的new
1. 新生成一个对象
2. 新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
3. 绑定this
4. 返回新对象
```
function myNew() {
    let obj = {};
    let Con = [].shift.call(arguments);
    obj.__proto__ = Con.prototype;
    let result = Con.apply(obj, arguments);
    return typeof result === "object" ? result : obj
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        console.log(this.name + this.age)
    }
}

let person = myNew(Person, 'wulitian', 28);
console.log(person)
class Pl{
    constructor() {
        this._name = "";
    }
    get name(){
        console.log(1231231233)
        return this._name;
    }
    set name(newName){
        console.log(222222222)
        this._name = newName;
    }
    static create(){
        return 1
    }
}
const t = new Pl(111);
console.log(Pl.create())
t.name = "aasdasdasd"
console.log(t.name)
```
#### 13js中数据类型的判断
1. typeof,判断除了null
2. Object.prototype.tostring.call()的值有9个Number,Function,String,Boolean, Object,Array,Null,RegExp,Date
- 用Object.prototype.tostring.call()不用tostring的原因toString为Object的原型方法，用Array ，function等类型作为Object的实例，都重写了toString方法，不同的对象类型调用toString方法时，调用的是对应的重写之后的toString方法，而不会去调用Object上原型toString方法，所以采用obj.toString()不能得到其对象类型，只能将obj转换为字符串类型。
3. constructor/instanceof方法
- 基本数据类型不能用constructor/instanceof来检测
- 不能检测基本数据类型，用instanceof检测的时候,只要当前的这个类在实例的原型链上(可以通过原型链proto找到它),检测出来的结果都是true
##### typeof
1. typeof对于基本类型，除了null都可以显示正确的类型

2. typeOf对于对象，除了函数都会显示object

3. 对于null来说虽然是基本数据类型，但是会显示object,这是存在很久的bug

4. 获取正确的数据类型可以通过Object.prototype.tostring.call()可以获取字符串。
```
console.log(typeof 1)
console.log(typeof "1")
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof true)
console.log(typeof function(){console.log(123)})
```
##### instanceof
instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype
```
console.log(1 instanceof Number)
console.log("asd" instanceof String)
console.log([] instanceof Array)
console.log({} instanceof Object)
```
##### js判断数据类型方法
```
let _typeof = function (data) {
    let value = /\[object (\w+)\]/.exec(
        Object.prototype.toString.call(data)
    );
    console.log(Object.prototype.toString.call(data))
    return value ? value[1].toLowerCase() : '';
}
console.log(_typeof('123'));      //"string"
console.log(_typeof(123));         //"number"
console.log(_typeof(123n));        //"bigint"
console.log(_typeof(null));       //"null"
console.log(_typeof(undefined));   //"undefined"
console.log(_typeof({}));          //"object"
console.log(_typeof([]));          //"array"
console.log(_typeof(/123/));       //"regexp"
```
#### 13js中的class
```
class Person {
    constructor() {
        this._name = "";
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    static create() {
        return 1
    }
}

const person = new Person();
console.log(Person.create())
person.name = "wulitian"
console.log(person.name)
```
#### 14js中的面向对象
##### 创建方式
1. 字面量方式
2. 通过构造函数方式（new Object）
3. 函数方式
4. class方式
5. 工厂方式
6. 原型方式
```
// 1通过new Object()创建
var obj1 = new Object()
obj1.name = "wulitian"
obj1.age = 28
obj1.getName = function () {
    console.log(this.name)
}

// 2字面量形式
var obj2 = {
    name: "wulitian",
    age: 30,
    getName: function () {
        console.log(this.name)
    }
}

// 3函数创建对象
function obj3(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function () {
        return this.name;
    }
}

// 4class关键字创建
class obj4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = function () {
            return this.name;
        }
    }
}

// 5工厂方式
function obj5() {
    const object = new Object();
    object.name = 'wulitian';
    object.age = 28;
    object.getName = function () {
        return this.name;
    }
    return object
}

// 6原型方式
function obj6() {
}

obj6.prototype.name = 'wulitian';
obj6.prototype.age = 28;
obj6.prototype.getName = function () {
    return this.name;
}
```

##### 对象的操作

1. 获取属性obj.name

2. 添加属性obj.name

3. 删除属性delete obj.name

4. 循环属性 for in 循环可枚举的得属性
```
var obj = {
  name: "why",
  age: 18
}

// 获取属性
console.log(obj.name)

// 给属性赋值
obj.name = "wulitian"
console.log(obj.name)

// 删除属性
delete obj.name
console.log(obj)

// 限制: 不允许某一个属性被赋值/不允许某个属性被删除/不允许某些属性在遍历时被遍历出来
// 遍历属性
for (var key in obj) {
  console.log(key)
}
```

##### 属性描述defineProperty
1. 可枚举 enumerable
2. 可写 writable
3. 可配置 configurable
4. get/set 属性值描述
```
var obj = {
    name: "wulitian",
    age: 18,
}

Object.defineProperty(obj, "age", {
    enumerable: true,//可枚举
    writable: true,//可写
    configurable: true,//可以删除和赋值
    value: 28//当前属性值
})

console.log(obj)

// 定义了属性描述默认值为
Object.defineProperty(obj, "age", {
    // value: undefined,
    // configurable: false,
    // enumerable: false,
    // writable: false
})
var obj2 = {
    name: "wulitian",
    _age: 20
}
let newAge = 30;
// 属性描述符对属性赋值读取过程的定义
Object.defineProperty(obj2, "age", {
    get: function () {
        return this._age
    },
    set: function (value) {
        this._age = value
    }
})
var obj3 = {
    name: "wulitian",
    _age: 20
}
Object.defineProperties(obj3, {
    name:{
        enumerable: true,//可枚举
        writable: true,//可写
        configurable: true,//可以删除和赋值
        value: 28//当前属性值
    },
    age:{
        enumerable: true,//可枚举
        get: function () {
            return this._age
        },
        set: function (value) {
            this._age = value
        }
    }
})
// 获取属性描述
console.log(Object.getOwnPropertyDescriptor(obj2,'age'))
console.log(Object.getOwnPropertyDescriptors(obj3))
```
##### Object构造函数常用方法
//不可以新增属性
Object.preventExtensions()
//不可删除属性
Object.seal()
//不可以修改属性
Object.freeze()
```
var obj = {
    name: 'wulitian',
    age: 28
}

// 1.禁止添加新的属性
Object.preventExtensions(obj)
obj.height = 2
console.log(obj)

// 2.禁止删除属性
// for (var key in obj) {
//   Object.defineProperty(obj, key, {
//     configurable: false,
//     enumerable: true,
//     writable: true,
//     value: obj[key]
//   })
// }

Object.seal(obj)

delete obj.name
console.log(obj.name)

// 3.禁止修改属性
Object.freeze(obj)

obj.name = "WULITIAN"
console.log(obj.name)
```
#### 15js中的继承
##### 原型继承

1. 说明：父类实例作为子类原型。

2. 优点：简单易于实现，父类的新增的实例与属性子类都能访问。

3. 缺点：无法实现多继承。创建子类实例时，不能向父类构造函数中传参数。

##### 借用构造继承

1. 说明：借用父类构造。

2. 优点：解决了子类构造函数向父类构造函数中传递参数，可以实现多继承（call或者apply多个父类）。

3. 缺点：方法都在构造函数中定义，无法复用，不能继承原型属性/方法，只能继承父类的实例属性和方法。

##### 原型对象+构造组合继承

1. 说明：父类实例作为子类原型 + 借用父类构造。

2. 优点：函数可以复用，可以继承属性和方法，并且可以继承原型的属性和方法。

3. 缺点：由于调用了两次父类，所以产生了两份实例。

##### 原型式继承（实例继承）

1. 说明：子类对象内返回父类实例对象。

2. 优点：简单，易实现。

3. 缺点：不能多继承。

##### 寄生继承

1. 说明：子类的原型指向父类原型并保持独立性。

2. 优点：保持了原型之间独立。

3. 缺点：原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。无法传递参数。

##### 构造借用+寄生组合继承

1. 说明：子类的原型指向父类原型并保持独立性+借用构造。

2. 优点：这是最成熟的方法使用最多的。

3. 缺点：几乎没有缺点。

##### 拷贝继承

1. 说明：拷贝父类实例属性。

2. 优点：支持多继承。

3. 缺点：效率较低，内存占用高（因为要拷贝父类的属性），无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）。

##### es6继承

1. 说明：借助es6中关键词extends。

2. 优点：官方提出的。

3. 缺点：暂无。
```
//父类对象
function Car(name) {
    this.name = name;
    this.run = function(){
        console.log("开车");
    }
}

Car.prototype.getName = function () {
    console.log("奔驰")
}

// 原型继承
!(function () {
    function Bc(){}
    Bc.prototype = new Car("奔驰")
    let bc = new Bc();
    bc.getName();
})()

// 构造借用继承
!(function () {
    function Bc(name){
        Car.call(this,name);
    }
    let bc = new Bc("奔驰");
    console.log(bc.name);
    bc.run();
})()

// 原型继承+构造借用继承
!(function () {
    function Bc(name){
        Car.call(this,name);
    }
    Bc.prototype = new Car("奔驰")
    let bc = new Bc("奔驰");
    console.log(bc.name);
    bc.run();
})()

// 原型式继承
!(function () {
    function Bc(name){
        return new Car(name);
    }
    let bc = new Bc("奔驰");
    console.log(bc.name);
    bc.getName();
})()

// 寄生继承
!(function () {
    function Bc(){}
    function obj(){}
    obj.prototype = Car.prototype;
    Bc.prototype = new obj();
    let bc = new Bc();
    console.log(bc)
    bc.getName()
})()

// 寄生组合继承
!(function () {
    function Bc(name){
        Car.call(this,name);
    }
    function obj(){}
    obj.prototype = Car.prototype;
    Bc.prototype = new obj();
    Bc.prototype.constructor = Bc;
    let bc = new Bc("奔驰");
    console.log(bc.name);
    bc.run();
    bc.getName();
})()

// 拷贝继承
!(function () {
    function Bc(){}
    let car = new Car("奔驰");
    for(let p in car){
        Bc.prototype[p] = car[p];
    }
    let bc = new Bc();
    console.log(bc.name);
    bc.run();
    bc.getName();
})()

// es6继承
!(function () {
    class Bc extends Car{
        constructor(props) {
            super(props);
        }
    }

})()
```
#### 16js中的原型
1. Object 是所有对象的爸爸，所有对象都可以通过 __proto__ 找到它
2. Function 是所有函数的爸爸，所有函数都可以通过 __proto__ 找到它
3. Function.prototype 和 Object.prototype 是两个特殊的对象，他们由引擎来创建除了以上两个特殊对象，其他对象都是通过构造器 new 出来的
4. Object.prototype.__proto__指向null。
5. 所有的对象(对象，函数)都有__proto__属性(隐式原型)，指向构造该对象的构造函数的原型。
6. 只有函数function才具有prototype属性(显式原型)。这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）。原型对象也有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数。
7. 函数的 prototype 是一个对象，也就是原型，对象的 __proto__ 指向原型， __proto__ 将对象和原型连接起来组成了原型链
```
// 下列均为true
function Person() {}
    let person = new Person();
    console.log(Person.constructor === Function)
    console.log(Person.prototype === person.__proto__)
    console.log(Person.__proto__ === Function.prototype)
    console.log(Person.prototype.constructor === Person)
    console.log(Person.prototype.__proto__ === Object.prototype)
    console.log(Function.constructor === Function)
    console.log(Function.__proto__ === Function.prototype)
    console.log(Function.prototype.constructor === Function)
    console.log(Function.prototype.__proto__===Object.prototype)
    console.log(Object.constructor === Function)
    console.log(Object.__proto__ === Function.prototype)
    console.log(Object.__proto__ === Function.__proto__)
    console.log(Object.prototype.constructor === Object)
    console.log(Object.prototype === Function.prototype.__proto__)
    console.log(Object.prototype.__proto__ === null)
```
#### 17js中的深浅拷贝
1.拷贝概念：
- 浅拷贝：原始类型为值传递，引用类型为引用传递
- 深拷贝：所有元素或属性完全复制与原对象完全分离，修改新对象不会影响原对象
2.浅拷贝（只拷贝一层，除了对象拷贝的是引用类型，其他都是直接赋值）
- 循环对象或数组直接复制
- Object.assign() （如果对象只有深一层可以实现深拷贝）
- {...obj} [...arr] Array.prototype.concat() Array.prototype.slice()
3.深拷贝（拷贝多层）
- JSON.parse(JSON.stringify(obj)) 弊端：抛弃对象的constructor,不管是什么都会变成Object，并且只能转换JSON格式对象 Function 正则，Symbol了转换不了
- Object.create(obj)
- 递归手动赋值
  思路是：解决循环引用问题使用weakMap,解决处理JS内置数据结构：Array、Map、Set、Object，其他情况均可通过new source.constructor(source)直接来拷贝值，这些包含了正则，函数，等等
```
// JS深拷贝总结JS的原生方法不支持深拷贝，Object.assign和{...obj}都属于浅拷贝，下面我们讲解如何使用JS实现深拷贝。JSON.sringify 和 JSON.parse这是JS实现深拷贝最简单的方法了，原理就是先将对象转换为字符串，再通过JSON.parse重新建立一个对象。 但是这种方法的局限也很多：不能复制function、正则、Symbol循环引用报错 相同的引用会被重复复制
const obj = {
    re: /hello/,
    f() {
    },
    date: new Date(),
    map: new Map(),
    list: [1, 2, 3],
    a: 3,
    b: 4,
};
const obj2 = {loop2: obj, name: "obj2"};
let cp = JSON.parse(JSON.stringify(obj));
console.log(cp)
obj.loop = obj2;

function deepClone(source, cache = new WeakMap()) {
    if (typeof source !== 'object') {
        return source;
    }
    if (cache.has(source)) {
        return cache.get(source)
    }
    let res = new source.constructor();
    cache.set(source, res);

    if (source instanceof Array) {
        source.forEach(e => {
            res.push(deepClone(e, cache))
        })
    } else if (source instanceof Set) {
        for (const s of source) {
            res.add(deepClone(s, cache))
        }

    } else if (source instanceof Map) {
        for (const [k, v] of source) {
            res.set(k, deepClone(v, cache))
        }
    } else if (deepClone instanceof Object) {
        for (const k in source) {
            res[k] = deepClone(source[k], cache)
        }
    } else {
        res = new source.constructor(source)
    }
    return res;
}
console.log(deepClone(obj))
```
##### 实现Object.create
```
Object.myCreate = function (proto, propertyObject = undefined) {
    console.log(typeof propertyObject)
    //判断一下结构是否是属性描述的结构省略不是重点
    function fn() {
    }

    fn.prototype = proto;
    let obj = new fn();
    if (propertyObject) {
        Object.defineProperties(obj, propertyObject)
    }
    if (proto === null) {
        obj.__proto__ = null
    }
    return obj
}

let obj = Object.myCreate({b:1},{a: {
        writable:false,
        value: 1,
        configurable:false,
        enumerable: true,
    }})
console.log(obj)
for (const key in obj) {
    console.log(key)
}
delete obj.a
obj.a = 2
console.log(obj)
```
#### 18js中的dom

##### js中的dom操作
1.创建元素document.creatElement(标签)

2.添加元素parent.appendChild(childNode);

3.移动元素dom中操作元素appendChild和insertBefore是将dom节点移动到目标处（dom对象为引用类型）

4.复制节点oli.cloneNode(true)参数true表示深度克隆（深拷贝），false 表示浅度克隆（浅拷贝），深拷贝也就是复制节点及整个节点数；浅拷贝复制节点本身。复制后返回的节点副本属于文档所有，但并没有为它指定父节点。因此，整个节点副本就成为一个‘孤儿’：

5.删除节点parentNode.removeChild(childNode);

6.parentNode.replaceChild(newNode,oldNode);

7.parentNode.insertBefore(newEle, oldNode);

8.查找节点

- childNodes返回节点到子节点列表；

- firstChild—返回节点的首个子节点;

- lastChild—返回节点的最后一个子节点;

- nextSibling—返回节点之后紧跟的同级节点;

- nodeName—返回节点的名字，根据其类型;

- nodeType—返回节点的类型;

- nodeValue—设置或返回节点的值，根据其类型;

- ownerDocument—返回节点的根元素（document对象）;

- parentNode—返回节点的父节点;

- previousSibling—返回节点之前紧跟的同级节点;

- text—返回节点及其后代的文本（IE独有）;

- xml—返回节点及其后代的XML（IE独有）;

9.节点对象的方法

- appendChild()—向节点的子节点列表的结尾添加新的子节点;

- cloneNode()—复制节点;

- hasChildNodes()—判断当前节点是否拥有子节点;

- insertBefore()—在指定的子节点前插入新的子节点;

- normalize()—合并相邻的Text节点并删除空的Text节点;

- removeChild()—删除（并返回）当前节点的指定子节点;

- replaceChild()—用新节点替换一个子节点;

10.IE6独有方法

- selectNodes()—用一个XPath表达式查询选择节点;

- selectSingleNode()—查找和XPath查询匹配的一个节点;

- transformNode()—使用XSLT把一个节点转换为一个字符串。transformNodeToObject()—使用XSLT把一个节点转换成为一个文档。

11.创建新节点方法

- createDocumentFragment() //创建一个DOM片段

- createElement() //创建一个具体的元素

- createTextNode() //创建一个文本节点

12.添加、移除、替换、插入方法

- appendChild()

- removeChild()

- replaceChild()

- insertBefore() //在已有的子节点前插入一个新的子节点

13.查找方法

- getElementsByTagName() //通过标签名称

- getElementsByName() //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)

- getElementById() //通过元素Id，唯一性
- 
##### js中innerHTML，innerText，textContent，value、nodeValue属性的区别是什么？

1.innerHTML是标签内的文本，解析html代码。

2.innerText标签内的文本，不解析html代码。

3.textContent火狐不支持innerText属性，用它替代。

4.value表单元素的属性。

5.nodeValue是文本节点textNode的属性（DOM）。

##### js如果利用js生成一个table
```
// js如果利用js生成一个table
    function createTable(row,column,id){
        for(let i = 0;i<row;i++){
            let tr = document.createElement("tr");
            for(let j = 0;j<column;j++){
                let td = document.createElement("td");
                td.innerText = "内容"
                tr.appendChild(td);
            }
            document.getElementById(id).appendChild(tr);
        }
    }
    createTable(10,10,'table');
```
##### js所有的li都删除掉
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>wulitian-study</title>
</head>
<body>
<ul id="ul">
    <li>node</li>
    <li>node</li>
    <li>node</li>
    <li>node</li>
    <li>node</li>
</ul>
<script>
    // 方法一
    let ele = document.getElementsByTagName("li");
    for (let i = 0; i < ele.length; i++) {
        ele.item(i).parentNode.removeChild(ele.item(i))
        i--
    }

    // 方法二
    while (ele[0]) {
        ele[0].parentNode.removeChild(ele[0]);
    }
</script>
</body>
</html>
```
##### js找出name='A'
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>wulitian-study</title>
</head>
<body>
<div name="A">1111</div>
<div name="B">2222</div>
<div name="A">3333</div>
<script>
    // js找出name='A'
    let ele = document.getElementsByTagName("div");
    let result = '';
    for (let i = 0; i <ele.length ; i++) {
        let eleIndex = ele.item(i)
        let attr= eleIndex.getAttribute('name')
        if(eleIndex&&(attr==='A')){
            result+=(!result?'':',')+ele.item(i).innerText;
        }
    }
    console.log(result)

</script>
</body>
</html>
```
##### js中获取style值
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>wulitian-study</title>
    <style>
        #table{
            background: red;
        }
    </style>
</head>
<body>
<table id="table"></table>
<script>
    // js中获取style值
    function getStyleValue() {
        if(window.getComputedStyle){
            return window.getComputedStyle(document.getElementById('table'),null);//标准浏览器
        }else{
            return document.getElementById('table').currentStyle;//currentStyle是IE的属性
        }
    }
    console.log(getStyleValue())
</script>
</body>
</html>
```
#### 19js中的事件
##### js中事件介绍

1. dom0

- （0级dom事件）标签上onclick，js中写onclick，事件会覆盖

2. dom2

- 添加事件监听attachEvent(ie9以下)参数：（1，事件名称,2，时间处理函数）支持吃冒泡，执行顺序：从上到下

- 添加事件监听addEventListener（ie9及以上）参数：（1，事件名称,2，时间处理函数,3，true表示捕获阶段，false冒泡阶段这个参数不传就是冒泡方式监听）执行顺序：从下到上

- 移除事件监听detachEvent（ie9以下）

- 移除事件监听removeEventListener（ie9及以上）

- 参数（1，事件名称,2，时间处理函数,3，true表示捕获阶段，false冒泡阶段这个参数不传就是冒泡方式监听）

3. dom3（3级dom事件）

事件如：UI事件(用户与页面交互触发scroll,load)，焦点事件（获取失去焦点blur，focus）鼠标事件（通过鼠标页面执行触发dbclick,mousewheel）文本事件（在文档中输入文本时触发textInput）键盘事件（通过键盘触发keydown,keypress）合成事件（输入字符时触发compositionstart）变动事件（dom结构变换时触发DOMsubtreeModified）

4. dom事件流

- 事件的冒泡:一层一层往上冒知道最外层html,document，阻止冒泡事件对象中有一个stopPropagation()，return false,(组织默认行为事件对象有一个方法preventDefault,事件目标srcElement) （ie阻止冒泡cancelBubble = true，组织默认行为returnValue = false,事件目标target）

- 事件的捕获:与冒泡相反

5. 事件对象event

- 当事件触发时，当前这个事件的一些基本信息（事件元素，事件类型等）会被保存在event对象中，ie8及以下event必须作为window对象，

6. 事件循环event loop

1. 解析HTML中遇到script标签，开始执行第一个宏任务。
2. 在宏任务执行中遇到宏任务，执行其中的请求（例如网络请求，定时器），在请求完成后将回调放入宏任务队列中。
3. 在宏任务执行中遇到微任务，暂不执行回调，而是放入微任务队列中。
4. 宏任务执行完成。开始依次执行微任务队列中的任务。
6. 微任务执行中遇到宏任务或者微任务，处理方式同上，分别放入各自的队列中。
7. 微任务队列清空后，开始执行宏任务队列中的下一个任务。

- 宏任务script,MacroTask（setTimeout ,setInterval,setImmediate ,I/O,UI rendering）

- 微任务MicroTask(promise.then,process.nextTick)

- 同步任务syncTask

- 异步任务asyncTask

7. 事件代理模式：

- 事件代理原理就是利用事件冒泡机制，可以委托父元素处理，解决了事件的多次注册，如果注册量比较大影响性能

- 优点：节约内存占用，减少事件注册，新增子对象无序增加事件绑定，删除也不需要解绑

- 缺点：不能把所有的事件都监听，容易混乱，只适用于支持冒泡的事件如onclick

- 无法代理，不支持冒泡的事件如：mouseleave & mouseenter,blur & focus

- 如何让事件先冒泡再捕获：标准的事件模型是先捕获后冒泡，要想实现先冒泡后捕获可以让捕获暂缓执行。
##### js事件IE与火狐的事件机制有什么区别
IE支持事件冒泡，火狐事件冒泡机制，事件捕获机制
##### js事件兼容性问题
1.事件对象本身

- 标准浏览器是发生时自动给方法传一个实参，IE是全局的window.event

- 解决方法：e = e || window.event

2.事件源

- 标准浏览器是e.target，IE下是e.srcElement

- 解决办法是：let target = e.target || e.srcElement

3.DOM二级事件绑定

- 标准浏览器是element.addEventListener，IE下是element.attachEvent:

```
    if(ele.addEventListener){
        //....
    }else if(ele.attachEvent){
        //....
    }
```
- 相应的解除绑定方法是removeEventListener 和 IE的 detachEvent

4.阻止事件传播

- 标准浏览器是e.stopPropagation，IE是e.cancelBubble = true这个属性

5.阻止默认行为

- 标准浏览器是e.preventDefault() 方法，IE是e.returnValue = false

6.相对于文档的鼠标坐标

- 标准浏览器是e.pageX，e.pageY，但IE不支持这两个属性，但都支持clientX，clientY，这是相对于浏览器的鼠标坐标，可以通过scrollTop+clientY来实现。

```
    e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+ e.clientX;
    e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+ e.clientY;
```
##### js事件冒泡捕获机制
# js事件冒泡捕获机制

1.事件冒泡：从事件源向着父级dom一直传递知道document，当某个元素的某类型事件触发时，那么他父元素同类型时间也出发（其中不是所有事件都会传播如：onfocus,onblur,onmouseenter,onmouseleave，）

2.事件捕获：从根元素（html）到事件源，当某个元素某类型事件被触发时，先触发根元素事件，向着子元素触发直至事件源

3.事件委托或代理：利用dom传播机制可以给document绑定一个事件，在事件中获取事件源；根据不同的事件源做不同的事情（不用一一绑定事件）

```
    document.onclick=function(e){
        e=e||window.event;
        var  target=e.targrt||e.srcElement;//获取事件源是关键；
        alert(target.nodeName);
        return false;
    }
```

4.DOM0 DOM2 DOM3
- DOM0为0级DOM
  一是在标签内写onclick事件
  二是在JS写onlicke=function（）{}
  特点：事件会覆盖
- DOM2为2级DOM
  监听方法，原生有两个方法用来添加和移除事件处理程序：addEventListener()和removeEventListener()。IE下的DOM2事件通过attachEvent绑定和 detachEvent 进行移除事件，他们接收的参数都一样。事件执行过程以及写法有所不同
  注意： IE9及之后的版本都能兼容 addEventListener了
  addEventListener()、removeEventListener() 有三个参数：
  第一个参数是事件名（如click, IE是 onclick）；
  第二个参数是事件处理程序函数；
  第三个参数如果是true则表示在捕获阶段调用，为false表示在冒泡阶段调用。
  这里我们不需要传入第三个参数，因为IE8级以下版本只支持冒泡型事件。
  addEventListener(‘onclick’, handle):可以为元素添加多个事件处理程序，触发时会按照添加顺序依次调用。
  removeEventListener(‘onclick’, handle):不能移除匿名添加的函数。
  特点：事件不会覆盖依次执行
- DOM3为3级DOM  
  DOM3级事件在DOM2级事件的基础上添加了更多的事件类型，全部类型如下：
- 为什么没有DOM1级事件处理呢？因为1级DOM标准中并没有定义事件相关的内容

| 事件类型 | 说明                                  | 举例               |
| -------- | ------------------------------------- | ------------------ |
| UI事件   | 当用户与页面上的元素交互时触发        | load、scroll       |
| 焦点事件 | 当元素获得或失去焦点时触发            | blur、focus        |
| 鼠标事件 | 当用户通过鼠标在页面执行操作时触发    | dbclick、mouseup   |
| 滚轮事件 | 当使用鼠标滚轮或类似设备时触发        | mousewheel         |
| 文本事件 | 当在文档中输入文本时触发              | textInput          |
| 键盘事件 | 当用户通过键盘在页面上执行操作时触发  | keydown、keypress  |
| 合成事件 | 当为IME（输入法编辑器）输入字符时触发 | compositionstart   |
| 变动事件 | 当底层DOM结构发生变化时触发           | DOMsubtreeModified |

5.阻止事件冒泡

```
    e=e||window.event;
        if(e.stopPropagation){
            e.stopPropagation();//其它浏览器
        }else{
            e.cancelBubble=true;//IE浏览器
        }
```

6.阻止默认事件
```
   e.preventDefault();
```
##### js我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡，会执行几次事件，然后会先执行冒泡还是捕获
先捕获，后冒泡；任何发生在 w3c事件模型 中的事件，首是进入捕获阶段，直到达到目标元素，再进入冒泡阶段。
#### 20js中的异步
##### js中async，await
1. async await最异步写法的终解决方案，async函数是Generator函数的语法糖,async返回promise对象，可以使用。then添加回调，await会阻断后面的代码。
2. async优点
- 内置执行器:调用方式与普通函数一样，generator需要调用执行器then
- 更好的语义:async和await相比较*和yield
##### js中generator
1. generator最大的特点就是可以交出函数的执行权，暂停执行
2. 函数多了*号表示generator函数，内部用yield关键字，他的执行和普通函数不一样不会直接返回return的值而是返回指针，通过调用指针的next方法调用它会执行一步任务返回值是对象包括value，done，value是yieid表达式的值，done表示是否执行完毕。
##### js中promise
1. promise解决的问题
- 解决了回调地域问题
- 解决了错误处理的问题
- 解决了同时同时进行多个异步操作代码编写困难
2. promise是什么
- 一个 Promise 对象中定义的主要是一段执行具体操作的代码，并且在这段代码中，会执行两个回调函数，一个表示操作成功（resolve），一个表示操作失败（reject）
- promise中初始是 pending 状态，可以通过函数 resolve 和 reject ，将状态转变为 resolved 或者 rejected 状态，状态一旦改变就不能再次变化。后两种状态属于稳定状态
```
/*
  1. Promise 就是一个类 在执行这个类的时候 需要传递一个执行器进去 执行器会立即执行
  2. Promise 中有三种状态 分别为 成功 fulfilled 失败 rejected 等待 pending
    pending -> fulfilled
    pending -> rejected
    一旦状态确定就不可更改
  3. resolve和reject函数是用来更改状态的
    resolve: fulfilled
    reject: rejected
  4. then方法内部做的事情就判断状态 如果状态是成功 调用成功的回调函数 如果状态是失败 调用失败回调函数 then方法是被定义在原型对象中的
  5. then成功回调有一个参数 表示成功之后的值 then失败回调有一个参数 表示失败后的原因
  6. 同一个promise对象下面的then方法是可以被调用多次的
  7. then方法是可以被链式调用的, 后面then方法的回调函数拿到值的是上一个then方法的回调函数的返回值
*/
const PENDING = 'pending'; // 等待
const SUCCESS = 'success'; // 成功
const REJECTED = 'rejected'; // 失败

class MyPromise {
    state = PENDING;
    value = undefined;
    reason = undefined;
    successCallback = [];
    failCallback = [];

    constructor(executor) {
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e);
        }
    }

    resolve = (value) => {
        if (this.state !== PENDING) return;
        this.state = SUCCESS;
        this.value = value;
        while (this.successCallback.length > 0) {
            this.successCallback.shift()();
        }
    }

    reject = (reason) => {
        if (this.state !== PENDING) return;
        this.state = REJECTED;
        this.reason = reason;
        while (this.failCallback.length > 0) {
            this.failCallback.shift()();
        }
    }

    then(successCallback, rejectCallback) {
        successCallback = successCallback ? successCallback : value => value;
        rejectCallback = rejectCallback ? rejectCallback : (reason) => {
            throw reason
        }
        let promise2 = new MyPromise((resolve, reject) => {
            if (this.state === SUCCESS) {
                setTimeout(() => {
                    try {
                        let x = successCallback(this.value);
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })

            } else if (this.state === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = rejectCallback(this.reason);
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })

            } else if (this.state === PENDING) {
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = successCallback(this.value);
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    })
                })
                this.failCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = rejectCallback(this.reason);
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    })
                })
            }

        })
        return promise2
    }

    finally(callback) {
        return this.then((value) => {
            return MyPromise.resolve(callback()).then(() => value)
        }, (reason) => {
            return MyPromise.resolve(callback()).then(() => throw reason)
        })
    }

    catch(callback) {
        return this.then(null, callback);
    }

    static race(array) {
        if (!Array.isArray(array)) {
            throw new Error('参数必须树数组')
        }
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < array.length; i++) {
                if (array[i] instanceof MyPromise) {
                    array[i].then(value => {
                        resolve(value)
                    }, reason => {
                        reject(reason)
                    })
                } else {
                    resolve(array[i])
                }
            }
        })

    }

    static all(array) {
        let arr = [];
        let index = 0
        if (!Array.isArray(array)) {
            throw new Error('参数必须树数组')
        }
        return new MyPromise((resolve, reject) => {
            function add(i, val){
                arr[i] = val;
                index++;
                if(index === array.length) {
                    resolve(arr)
                }
            }
            for (let i = 0; i < array.length; i++) {
                if (array[i] instanceof MyPromise) {
                    array[i].then(value => {
                        add(i,value)
                    }, reason => {
                        reject(reason)
                    })
                } else {
                    add(i,array[i])
                }
            }
        })
    }

    static resolve(value) {
        if (value instanceof MyPromise) {
            return value
        }
        return new MyPromise((resolve) => {
            resolve(value)
        })
    }

}

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('不可以循环引用'))
    }
    if (x instanceof MyPromise) {
        x.then(resolve, reject)
    } else {
        resolve(x)
    }
}

function p1() {
    return new MyPromise(function (resolve, reject) {
        setTimeout(() => {
            resolve('p1')
        }, 2000)
    })
}

let a = p1().then((resolve) => {
    console.log(resolve)
})

// function p2() {
//     return new MyPromise(function (resolve, reject) {
//         reject('失败')
//         // resolve('成功');
//     })
// }
//
// p2()
//     .then(value => console.log(value))
//     .catch(reason => console.log(reason))
```
#### 21js中的script标签属性
##### script元素

1. 标签属性

- async：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。
- charset：可选。使用src属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。
- crossorigin：可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。crossorigin= "anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。
- defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。在IE7及更早的版本中，对行内脚本也可以指定这个属性。
- integrity：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Integrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN，Content Delivery Network）不会提供恶意内容。
- language：废弃。最初用于表示代码块中的脚本语言（如"JavaScript"、"JavaScript 1.2"或"VBScript"）。大多数浏览器都会忽略这个属性，不应该再使用它。
- src：可选。表示包含要执行的代码的外部文件。  视频讲解 图灵社区会员 aSINKz(1561821892@qq.com) 专享 尊重版权12 第2章 HTML中的JavaScript
- type：可选。代替language，表示代码块中脚本语言的内容类型（也称MIME类型）。按照惯例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"都已经废弃了。JavaScript文件的MIME类型通常是"application/x-javascript"，不过给type属性这个值有可能导致脚本被忽略。在非IE的浏览器中有效的其他值还有"application/javascript"和"application/ecmascript"。如果这个值是module，则代 码会被当成ES6模块，而且只有这时候代码中才能出现import和export关键字。

2 注意事项

- 在行内脚本中出现console.log("</script>")会导致代码提前结束。
- `<script src="example.js"/>`在html中不能正常使用。在xhtml中可以。
- 在标签上引用外部资源，同时也再行内书写代码，这是行内代码不会执行。
- 为了保证加载js文件是预期的文件可以加入integrity属性。
- 执行顺序，从上到小依次执行，如果设置了defer和async就不一定了，后一个必须等到前一个解释完成才能继续开始解释。

2. 标签位置

- 应用js通常放在body最后，放置阻塞页面导致白屏。

2. 推迟执行脚本

- 设置defer后，浏览器会立即下载但是延迟执行，多个defer脚本第一个推迟的脚本会在第二个推迟的脚本之前执行，最好保证只有一个异步脚本，并且最好也放在页面body最下方,因为有些浏览器可能忽略这个属性，因为ie8之前不支持。

3. 异步执行脚本

- 多个异步脚本标记async，不能保证他们的加载次序，异步脚本不应该在加载期间修改dom。

4. 动态加载脚本

- 可以通过动态生成script标签加载js，该种方式相当于async标记，不过这种方式会导致性能降低，适用这种方式最好页面前面加入<link rel="preload" href="demo">进行预加载。

5. XHTML中的变化

- 必须指定type类型text/javascript，其中在xhtml中使用符号需要转义，或者使用CDATA+注释形式。
```xhtml
<script type="text/javascript"> 
    //<![CDATA[  
    function compare(a, b) {  
        if (a < b) {  
            console.log("A is less than B");  
        } else if (a > b) {  
            console.log("A is greater than B");  
        } else {  
            console.log("A is equal to B");  
        }  
    } 
    //]]> 
</script> 
```

##### 行内代码与外部文件

- 可维护性：一个目录保存js文件更易于维护。

- 缓存：多个页面加载一个js只需加载一次，这样页面加载更快。

- 适用未来：http1,与http1.2版本大文优势最大，http2版本中拆分多个文件优势更大。

##### 文档模式

- 混杂模式

- 标准模式

- 准标准模式

##### noscript元素

当浏览器不支持脚本或者浏览器脚本被关掉时就会执行noscript内的内容。
#### 22js中的math
##### math中的常见方法
1.Math.abs(number)绝对值
2.Math.ceil(number)向上取整
3.Math.round(number)四舍五入
4.Math.floor(number)向下取整
5.Math.random()随机数0-1之间的浮点数
6.Math.max(number1,number2,...)最大值
7.Math.min(number1,number2,...)最小值
8.Math.sqrt(number)开平方
9.Math.pow(number1,number2)number2次方
10.Math.sin(number)sin值
11.Math.cos(number)cos值
##### js指定范围的随机数
```
 // 指定范围的随机数
    // 如果加一包括最大值否则不包括
    function randomNum(first,last){
        return Math.round(Math.random()*(last-first+1)+first);
    }
    console.log(randomNum(1,20));
```
#### 23js中的字符串
##### js中字符串常用的方法
1.charAt 获取指定索引位置的字符
2.charCodeAt 获取指定索引位置的字符对应的ASCII码值
3.indexof/lastIndexof 获取某个字符串在第一次（最后一次）出现位置的索引，没有的话返回-1，我们通常用这个来检测字符串中是否包含某一个字符；
4.toUpperCase/tolowerCase将字符串中的字母转大写|小写；
5.split按照指定的分隔符，讲一个字符串拆分成数组，和数组的join对应；
6.substr：substr(n,m)从索引n开始截取m个字符，把截取字符返回一个新的字符串；
7.substring：substring(n,m)从索引n开始截取到索引m处（不包含m），将找到的字符返回成一个新的字符串；
8.slice：slice(n，m)和substring的用法和意思一样，只是slice可以支持负数作为索引，出现负数索引的时候，用字符串的长度+负数索引，例如：ary.slice(-6,-2)，其实是ary.slice(ary.length-6,ary.length-2)
9.Replace：replace(“要替换的老字符”,“替换成的新字符”)字符串中字符替换的方法，可以应用正则来统一的进行替换，在正则中我们会详细的讲解replace的强大应用；
10.Match：把所有和正则匹配到的内容都进行捕获（不能捕获小分组中的内容）
11.trim： 去掉字符串中末尾位置的空白字符（不兼容）
##### js中replace中的几种写法
```
let str = 'border-bottom-color';
let strRg = str.replace(/\-([a-z])/g, '$1')
console.log(strRg);

let strRg2 = str.replace(/\-(?<a>[a-z])/g, `'$<a>'`)
console.log(strRg2);

let strRg3 = str.replace('-', '')
console.log(strRg3);

let strRg4 = str.replace(/\-([a-z])/g, (val, val2) => {
    console.log(val)
    console.log(val2)
    return val2.toUpperCase()
})
console.log(strRg4);
let strRg5 = str.replace(/\-([a-z])/g, function () {
    return RegExp.$1.toUpperCase();
})
console.log(strRg5);
```
##### js中trim兼容处理
```
String.prototype.trim = function(){
    return this.replace(/^\s+/,'').replace(/\s+$/,'');
}
console.log(' 12312 '.trim())
```
##### js中去除连续重复字符
```
function removeRepetition (str) {
  let result = '';
  if (str != '') {
    result = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== str[i - 1]) {
        result += str[i];
      }
    }
  }
  return result;
}
console.log(removeRepetition('aabbcc'))
```
##### js中字符串反转
```
String.prototype.reverse = function(){
   return this.split('').reverse().join("")
}
console.log('abc'.reverse());
```
##### js中字符串转驼峰
```
let str = 'border-bottom-color';
let strRg = str.replace(/\-([a-z])/g, (val,val2)=>{
    return val2.toUpperCase()
})
console.log(strRg);
```
##### js中查找出现最多的字符
```
//=> ['a', 6]
// getFrequentChar("aaabbaaacc");
//=> ['a', 3]
// getFrequentChar("aaa");
function getFrequentChar(str) {
    const obj = {}
    str.split('').forEach((e)=>{
        if(!obj[e]) {
            obj[e] = 1;
        } else {
            obj[e] = ++obj[e];
        }
    })
    console.log(obj)
    return Object.entries(obj).reduce((x,y)=>{
        return y[1] > x[1] ? y : x
    })
}
console.log(getFrequentChar("aaabbaaacc"));
console.log(getFrequentChar("aaa"));
```
#### 24js中的数组
##### js中数组常用的方法
es5

- 改变数组的方法：push(),unshift(),pop(),shift(),splice(),sort(),reverse()

- 不改变数组的方法：slice(),concat(),join(),indexOf(),lastIndexOf(),filter(),map(),every(),some(),forEach(),find(),findIndex(),includes()

1. push()后增：末尾添加返回长度

2. unshift()前增：首部添加返回长度

3. pop()后删：尾部删除返回被删除元素

4. shift()前删：首部删除返回删除的元素

5. splice()修改删除：对数组进行删除返回删除元素组成的数组

6. slice()剪切：返回新数组

7. concat()拼接：合并数组返回新数组

8. join()转字符串：不改变原数组，返回转换后的字符

9. sort()排序：按照ascii码排序，返回排序后的数组

10. reverse()翻转：返回颠倒后的数组

11. indexOf(某元素，startIndex) 返回找到的index没有找到返回-1,从startIndex开始，查找某元素在数组中的位置，若存在，则返回第一个位置的下标,否则返回-1

12. lastIndexOf()和indexOf()相同，区别在于从尾部向首部查询

13. filter()过滤：方法返回数组中满足条件的元素组成的新数组

14. map() 格式化数组：根据需求格式化原数组，返回格式化后的数组

15. every()全满足： 对数组的每一项都运行给定的函数，若每一项都返回 ture,则返回 true。

16. some()存在满足：对数组的每一项都运行给定的函数，若存在一项或多项返回 ture,则返回 true。

17. forEach()遍历：中途不能中断，没有返回值。

es6

1. find()查找第一个元素：找到数组中第一次满足条件的元素，找不到返回undefined

2. findIndex()查找第一个索引：返回第一个满足条件的下标，并停止寻找

3. includes()包含：判断是否包含返回布尔

4. Array.isArray()数组判断：判断是是否是数组返回布尔
##### js中数组与类似数组区别
1. 数组与类数组对象有什么区别：数组和类数组对象都可以用索引访问，并具有length属性，不同是类数组不能调用数组的方法。

2. 类数组：拥有length属性，元素保存在对象中，可以通过索引访问，但是没有数组方法push,slice,indexOf

3. 类数组对象：常见的有arguments，document.getElementsByTagName()

4. 类数组转换数组：Array.from(),Array.prototype.slice.call()
##### js中数组平均值
平均值去掉一个最大数去掉一个最小数，类数组借用数组方法sort排序，借用数组方法pop,shift,去除最大值最小值，借用数组的join方法传入加号通过eval执行。实现求和最后除length得到平均数
##### js数组中的最大值
```
//js数组中最大值
let a = [3, 4, 6, 2, 9, 11, 4];
let maxNum = Math.max.apply(null, a);
console.log(maxNum);//11

let arr = [3, 4, 6, 2, 9, 11, 4];
arr.sort(function (a, b) {
    return a - b
})
console.log(arr[0]);
console.log(arr[arr.length - 1]);
```
##### js数组去重
1.原数组的第一个元素放到新数组中，便利与原数组比较，如果不同则存放在新数组中。
2.利用sort() 数组排序相邻的比较，如果不同则存放在新数组中
3.利用对象属性唯一性，如果没有这个属性则存储到新的数组中
4.利用indexOf
5.利用lastIndexOf
6.利用includes,利用filter+includes,利用forEach+includes,利用reduce+includes
7.利用数组原型上的splice
8.利用hasOwnProperty
9.利用map
10.利用ES6中的set方法
```
//js数组去重
let arr = ['1', '1', 3, 1, 4, 6, 4, 2, 9, 11, 4, '1', '20', '20', 30, '3'];

// 1.将数组第一位放在新数组中，遍历原数组
function fn1(oldArr) {
    let newArr = [oldArr[0]];
    for (let i = 1; i < oldArr.length; i++) {
        let repeat = false;
        for (let j = 0; j < newArr.length; j++) {
            if (oldArr[i] === newArr[j]) {
                repeat = true;
                break;
            }
        }
        if (!repeat) {
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn1(arr)

// 2.将数组先sort()排序之后前后比较(当数据类型存在不同时会导致不准)
function fn2(oldArr) {
    let arr = oldArr.sort(function (a, b) {
        return a - b
    })
    let newArr = [oldArr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

fn2(arr)

// 3.利用对象属性的特性，如果没有改属性存入新数组
function fn3(oldArr) {
    let newArr = []
    let obj = {}
    for (let i = 0; i < oldArr.length; i++) {
        if (!obj[typeof oldArr[i] + oldArr[i]]) {
            obj[typeof oldArr[i] + oldArr[i]] = 1
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn3(arr)

// 4.利用数组下标indexOf
function fn4(oldArr) {
    let newArr = []
    for (let i = 0; i < oldArr.length; i++) {
        if (newArr.indexOf(oldArr[i]) == -1) {
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn4(arr)

// 5.利用数组lastIndexOf
function fn5(oldArr) {
    let newArr = []
    for (let i = 0; i < oldArr.length; i++) {
        if (newArr.indexOf(oldArr[i]) == -1) {
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn5(arr)

// 6.利用includes
function fn6(oldArr) {
    let newArr = []
    for (let i = 0; i < oldArr.length; i++) {
        if (!newArr.includes(oldArr[i])) {
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn6(arr)

// 7.利用forEach+includes
function fn7(oldArr) {
    let newArr = []
    oldArr.forEach((e, i) => {
        if (!newArr.includes(oldArr[i])) {
            newArr.push(oldArr[i])
        }
    })
    console.log(newArr)
}

fn7(arr)

// 8.利用filter+includes
function fn8(oldArr) {
    let newArr = []
    oldArr.filter((e) => {
        return newArr.includes(e) ? '' : newArr.push(e)
    })
    console.log(newArr)
}

fn8(arr)

// 9.利用reduce+includes
function fn9(oldArr) {
    let newArr = oldArr.reduce(function (prev, cur) {
        return prev.includes(cur) ? prev : [...prev, cur]
    }, [])
    console.log(newArr)
}

fn9(arr)

// 10.利用splice
function fn10(oldArr) {
    let copyOldArr = JSON.parse(JSON.stringify(oldArr));
    for (let i = 0; i < copyOldArr.length; i++) {
        for (let j = i + 1; j < copyOldArr.length; j++) {
            if (copyOldArr[i] === copyOldArr[j]) {
                copyOldArr.splice(j, 1);
                j--;
            }
        }
    }
    console.log(copyOldArr)
}

fn10(arr)

// 11.利用hasOwnProperty
function fn11(oldArr) {
    let newArr = []
    let obj = {}
    for (let i = 0; i < oldArr.length; i++) {
        if (!obj.hasOwnProperty(typeof oldArr[i] + oldArr[i])) {
            obj[typeof oldArr[i] + oldArr[i]] = 1
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn11(arr)

// 12.利用map
function fn12(oldArr) {
    let map = new Map();
    let newArr = []
    for (let i = 0; i < oldArr.length; i++) {
        if (!map.has(typeof oldArr[i] + oldArr[i])) {
            map.set(typeof oldArr[i] + oldArr[i], 1)
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn12(arr)

// 13.利用ES6中的set
function fn13(oldArr) {
    let newArr = Array.from(new Set(oldArr));
    console.log(newArr)
}

fn13(arr)
```
##### js数组按照大小排序
```
// 数组按照从大到小的顺序排序；let arr=['90px','100px','10px','45px','30px'];
let arr = ['90px', '100px', '10px', '45px', '30px'];
arr.sort((a, b) => {
    a = parseInt(a);
    b = parseInt(b);
    return a - b
})
console.log(arr)
```
##### js数组里数字换成中文
```
//js请把这个数组里面的数组替换成中文
let a = ['壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾', '佰', '仟', '万', '亿'];
let arr = ['壹', '贰', 3, 4, '伍'];
let ss = arr.toString().replace(/\d/g, function (n) {
    return a[n];
})
console.log(ss);
```
##### js转化一个数字数据为function数组
```
//js转化一个数字数据为function数组
let arr = [3, 5, 12, 55, 12, 321, 41, 0, 999];
Array.prototype.toFunction = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = (function (a) {
            return function () {
                return a;
            }
        })(this[i])
    }
    return this;
}
arr.toFunction();
console.log(arr)
console.log(arr[0])
console.log((arr[0])())
```
##### js中有一个数组，其中保存的都是小写英文字符串，现在要把它按照除了第一个字母外的字符的字典顺序排序
```
// js中有一个数组，其中保存的都是小写英文字符串，现在要把它按照除了第一个字母外的字符的字典顺序排序
// 若 a 小于 b，即 a - b 小于零，则返回一个小于零的值，数组将按照升序排列。
// 若 a 等于 b，则返回 0。
// 若 a 大于 b, 即 a - b 大于零，则返回一个大于零的值，数组将按照降序排列。
function selector(x, y) {
    if (typeof x == 'string' & typeof y == 'string') {
        let a = x.slice(1);
        let b = y.slice(1);
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    }
}
let arr = ['ac', 'ab', 'ca'];
arr.sort(selector)
console.log(arr)
```
##### js中1--100000个数字，丢了两个数后打乱顺序怎么找到丢的两个数字
```
// js中1--10000个数字，丢了两个数后打乱顺序怎么找到丢的两个数字？
let arr = [];
let obj = {}
for (let i = 1; i < 10001; i++) {
    arr[i] = i;
}
arr.splice(10, 2)
for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1;
}
for (let i = 1; i < 10001; i++) {
    if (!obj[i]) {
        console.log(i + 1)
    }
}
```
##### js在10000下不重复的数字中随机抽取5000不重复样本，多次操作获得的不同结果 
```
// js在10000下不重复的数字中随机抽取5000不重复样本，多次操作获得的不同结果
// 1、第一种是最耗费性能的方法是每次去除的数字都要通过循环或者indexOf判断是否在新的数组中；
// 2、第二个是从10000个数字中随机取一个，放到一个新的数组中，然后删除这个数字；这样5000次都能保证都不重复；
// 3、数组去重的思想，将10000个数字都当成对象的下标，但是占用内存太多；
// 4、最佳方案是从10000个数字中随机取出一个，然后把数组最后一个元素填充到取出的空缺处；这样数组长度编程9999，进行5000次即可完成题目的要求；看似用splice删除数组中的一项挺容易的；为什么要数组最后一个元素填补到随机取出的空缺呢？这个涉及到内存的知识，假设你随机去到的是第10个数字，用splice删除第10个数字，那么实际上计算机会把后面9990个数字都向前移动一个单位；导致时间复杂度特标高；
// let arr = [];
// let newArr = []
// for (let i = 0; i <10000 ; i++) {
//     arr[i] = i;
// }
// for (let i = 0; i <5000 ; i++) {
//     let random = Math.round(Math.random()*arr.length-1)
//     newArr.push(arr[random]);
//     arr[random] = arr[arr.length-1];//最后一项放在当前要删除的项目
//     arr.length = arr.length-1;//删除最后一项
// }
// console.log(newArr);

// js在15到30之间生成30个数平均值范围在20在24之间
// let arr = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let newArr = []
for (let i = 0; i < 15; i++) {
    let random = ((Math.random()) + i + 15).toFixed(2);
    newArr.push(random);
    let arr = [];
    for (let j = 1; j < 9; j++) {
        if (40 - random + j >= 15 && 40 - random + j <= 30) {
            arr.push(40 - random + j)
        }
    }
    let random2 = (Math.random() * arr.length + arr[0]).toFixed(2);
    newArr.push(random2);
}
console.log(newArr);
let sum = newArr.reduce((prev, next, index, array) => parseInt(prev) + parseInt(next))
console.log('reduce', sum)
console.log(sum / 30);
```
#### 25js中的时间
##### js中时间方法
1.getFullYear()年
2.getMonth()+1月从0开始
3.getDate()日
4.getDay()+1星期，从0开始星期日
5.getHours()时
6.getMinutes()分
7.getSeconds()秒
8.getMilliSeconds毫秒
##### js中时间方法getTime
getTime() 方法可返回当下（或某一时间点）距 1970 年 1 月 1 日之间的毫秒数。(用在倒计时)
##### js中setInterval和setTimeout
1.window.setInterval(fn,1000);//每隔1000ms执行一次fn方法,不会停止。
2.window.setTimeout(fn,1000);//1000ms后只运行一次fn方法，虽然只运行一次，可以递归调用自身模拟setInterval方法。
```js
window.setTimeout(fn, 1000 * 1)
function fn () {
  console.log(Date.now());
  fn();
}
```
##### js中实例化时间
1. new Date("month dd,yyyy hh:mm:ss");
2. new Date("month dd,yyyy");
3. new Date(yyyy,mth,dd,hh,mm,ss);
4. new Date(yyyy,mth,dd);
5. new Date(ms);
注意最后一种形式，参数表示的是需要创建的时间和GMT时间1970年1月1日之间相差的毫秒数。各种函数的含义如下：
month:用英文表示月份名称，从January到December
mth:用整数表示月份，从0（１月）到１１（１２月）
dd:表示一个月中的第几天，从1到31
yyyy:四位数表示的年份
hh:小时数，从0（午夜）到23（晚11点）
mm:分钟数，从0到59的整数
ss:秒数，从0到59的整数
ms:毫秒数，为大于等于0的整数
```
let date = new Date(2019, 1,30,1,1,1);
let date2 = new Date('2019-01-01, 01:01:01');
let date3 = new Date('01 01 2019, 01:01:01');
let date4 = new Date('01 01 2019');
let date5 = new Date(2000);
console.log(date5)
```
#### 26js的数据类型
1.数据类型:基本数据类型，引用数据类型

2.基本数据类型

es5：

- String Number Boolean Null Undefined

es6:

- BigInt  Symbol

- BigInt:解决精度丢失问题直接在数字后面加n

- Symbol:本质上是一种唯一标识符，可用作对象的唯一属性名Symbol 数据类型的另一特点是隐藏性，for···in，object.keys() 不能访问

3.引用数据类型

Object function

4.两种数据类型主要区别就是存储位置不同

基本数据类型存储在栈中（Undefined，Null，Boolean，Number、String、BigInt 、Symbol ）

应用数据类型存储在堆中（对象、数组和函数）
#### 27js中的类型转换
1. 转boolean:在判断时候除了：undefined， null， false， NaN， ''， 0， -0都会转换成true
2. 对象转基本数据类型，首先会调用valueOf,然后调用toString,并且重写Symbol.toPrimitive ，该方法在转基本类型时调用优先级最高。
#### 28js中的正则
##### js正则表达式

1.定义：正则表达式是由字符串形成的搜索模式（/正则表达式主体/修饰符(可选)）

var patt=new RegExp(pattern,modifiers);

或者更简单的方式:

var patt=/pattern/modifiers;

```
var re = new RegExp("\\w+");
var re = /\w+/;
```
2.正则表达模式：

|  修饰符   | 描述  |
|  ----  | ----  |
| i  | 执行对大小写不敏感的匹配 |
| g  | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止） |
| m  | 执行多行匹配 |

3.正则表达式修饰符：

方括号用于查找某范围的字符：

| 表达式             | 描述                               |
| ------------------ | ---------------------------------- |
| [abc]              | 查找方括号之间的任何字符。         |
| [^abc]             | 查找任何不在方括号之间的字符。     |
| [0-9]              | 查找任何从 0 至 9 的数字。         |
| [a-z]              | 查找任何从小写 a 到小写 z 的字符。 |
| [A-Z]              | 查找任何从大写 A 到大写 Z 的字符。 |
| [A-z]              | 查找任何从大写 A 到小写 z 的字符。 |
| [adgk]             | 查找给定集合内的任何字符。         |
| [^adgk]            | 查找给定集合外的任何字符。         |
| (red\|blue\|green) | 查找任何指定的选项。               |

元字符是拥有特殊含义的字符：

| 元字符 | 描述                                        |
| ------ | ------------------------------------------- |
| .      | 查找单个字符，除了换行和行结束符。          |
| \w     | 查找数字、字母及下划线。                    |
| \W     | 查找非单词字符。                            |
| \d     | 查找数字。                                  |
| \D     | 查找非数字字符。                            |
| \s     | 查找空白字符。                              |
| \S     | 查找非空白字符。                            |
| \b     | 匹配单词边界。                              |
| \B     | 匹配非单词边界。                            |
| \0     | 查找 NULL 字符。                            |
| \n     | 查找换行符。                                |
| \f     | 查找换页符。                                |
| \r     | 查找回车符。                                |
| \t     | 查找制表符。                                |
| \v     | 查找垂直制表符。                            |
| \xxx   | 查找以八进制数 xxx 规定的字符。             |
| \xdd   | 查找以十六进制数 dd 规定的字符。            |
| \uxxxx | 查找以十六进制数 xxxx 规定的 Unicode 字符。 |

量词：

| 量词     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| [n+]     | 匹配任何包含至少一个 n 的字符串 例如，/a+/ 匹配 "candy" 中的 "a"，"caaaaaaandy" 中所有的 "a"。 |
| [n*]     | 匹配任何包含零个或多个 n 的字符串。例如，/bo*/ 匹配 "A ghost booooed" 中的 "boooo"，"A bird warbled" 中的 "b"，但是不匹配 "A goat grunted"。 |
| [n?]     | 匹配任何包含零个或一个 n 的字符串。例如，/e?le?/ 匹配 "angel" 中的 "el"，"angle" 中的 "le"。 |
| [n{X}]   | 匹配包含 X 个 n 的序列的字符串。例如，/a{2}/ 不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。 |
| [n{X,}]  | X 是一个正整数。前面的模式 n 连续出现至少 X 次时匹配。例如，/a{2,}/ 不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。 |
| [n{X,Y}] | X 和 Y 为正整数。前面的模式 n 连续出现至少 X 次，至多 Y 次时匹配。例如，/a{1,3}/ 不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个 "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。 |
| [n$]     | 匹配任何结尾为 n 的字符串。                                  |
| [^n]     | 匹配任何开头为 n 的字符串。                                  |
| [?=n]    | 匹配任何其后紧接指定字符串 n 的字符串。                      |
| [?:n]    | 是非捕获性匹配，它使匹配不缓存起来，这点我要另起文章写，去掉了也不影响正确结果                      |
| [?!n]    | 匹配任何其后没有紧接指定字符串 n 的字符串。                  |

RegExp对象方法

| 方法       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| [compile]  | 在 1.5 版本中已废弃。 编译正则表达式。                       |
| [exec]     | 检索字符串中指定的值。返回找到的值，并确定其位置。 其中存放匹配的结果。如果未找到匹配，则返回值为 null。 |
| [test]     | 检索字符串中指定的值。返回 true 或 false。                   |
| [toString] | 返回正则表达式的字符串。                                     |

支持正则的String对象

| 方法      | 描述                                     | FF   | IE   |
| --------- | ---------------------------------------- | ---- | ---- |
| [search]  | 检索与正则表达式相匹配的值。返回首个索引 | 1    | 4    |
| [match]   | 找到一个或多个正则表达式的匹配。         | 1    | 4    |
| [replace] | 替换与正则表达式匹配的子串。             | 1    | 4    |
| [split]   | 把字符串分割为字符串数组。               | 1    | 4    |

RegExp对象属性

| 属性          | 描述                                               |
| ------------- | -------------------------------------------------- |
| [constructor] | 返回一个函数，该函数是一个创建 RegExp 对象的原型。 |
| [global]      | 判断是否设置了 "g" 修饰符                          |
| [ignoreCase]  | 判断是否设置了 "i" 修饰符                          |
| [lastIndex]   | 用于规定下次匹配的起始位置                         |
| [multiline]   | 判断是否设置了 "m" 修饰符                          |
| [source]      | 返回正则表达式的匹配模式                           |
##### js判断字符串由数字和字母组成
```
// js判断字符串由数字和字母组成
function check(number) {
    let reg = /^[0-9a-zA-Z]*$/;
    if (reg.test(number)) {
        return true;
    } else {
        return false;
    }
}
console.log(check('12ad'))
```
##### js去除字符串中连续重复的地方
```
// js去除字符串中连续重复的地方
function removeRepetition(str) {
    if (str !== '') {
        let result = str[0];
        for (let i = 1; i < str.length; i++) {
            if (str[i] !== str[i - 1]) {
                result += str[i];
            }
        }
    } else result = '';
    return result;
}

// js字符串去重
console.log(removeRepetition('345345333'))
let newStr = [...new Set('345345333')].join().replace(/\,/g, '')
console.log(newStr)
```
##### js实现千位分隔符
```
// js实现千位分隔符
// 将第一个逗号前面的数字作为第一组，后面所有数字为第二组，第二组是由多个三位的数字组合而成的，整体需要匹配捕获，但是每个三位数不需要匹配捕获所以加？：。
// RegExp.$1获取第一个分组，RegExp.$2获取第二个分组。
// match返回匹配到的数据，是数组类型。
function getStr(str) {
    let s = str;
    let reg = /^([1-9]\d{0,2})((?:\d{3})+)$/;
    if (reg.test(str)) {
        s = str.replace(reg, function () {
            return RegExp.$1 + ',' + RegExp.$2.match(/\d{3}/g);
        })
    }
    return s
}

console.log(getStr('123456789'));//123,456,789

function getStr2(str) {
    let count = 0;
    let strNew = '';
    for (let i = str.length; i >= 0; i--) {
        if (count % 3 === 0 && count != 0) {
            strNew += ',';
        }
        strNew += str.substr(i, 1);
        count++;
    }
    return strNew.split('').reverse().join('');
}
console.log(getStr2('60123761'));
```
##### js正则判断对称数
```
// js写一个正则表达式判断字符串是否是对称数
// 这个\1  \2......  都要和正则表达式集合()一起使用
// \1表示重复正则第一个圆括号内匹配到的内容
// \2表示重复正则第二个圆括号内匹配到的内容
let str = 'Woow';
let reg = /^([a-z])([a-z])\2\1$/i;
if (reg.test(str)) {
    console.log("对称")
} else {
    console.log("非对称")
}
```
##### js用正则分解超链接
```
// js用正则分解超链接
// 上次匹配的结果是由方法 RegExp.exec() 和 RegExp.test() 找到的，它们都以 lastIndex 属性所指的位置作为下次检索的起始点。这样，就可以通过反复调用这两个方法来遍历一个字符串中的所有匹配文本。
// 该属性是可读可写的。只要目标字符串的下一次搜索开始，就可以对它进行设置。当方法 exec() 或 test() 再也找不到可以匹配的文本时，它们会自动把 lastIndex 属性重置为 0。
// 重要事项：不具有标志 g 和不表示全局模式的 RegExp 对象不能使用 lastIndex 属性。
let str = '<a href="https://www.aaa.com/">超链接1</a><a href="https://www.bbb.com/?age=20">超链接2</a>';
function getUrl(str) {
    let reg = /<a href=([\"\'])([^'"]+)\1>([^'"]+)<\/a>/g;
    let arr = [];
    while (true) {
        reg.test(str);
        if (reg.lastIndex === 0) {
            break;
        }
        arr.push({name: RegExp.$3, url: RegExp.$2});
    }
    return arr;
}
console.log(getUrl(str));
```
##### 正则表达式中的关于？的几种用法
```
let str = 'abcdef'
let a = str.replace(/abcd(?=ef)/, (val,val2)=>{
    console.log(val)
    return val.toUpperCase()
})
let b = str.replace(/abcd(?!gh)/, (val,val2)=>{
    console.log(val)
    return val.toUpperCase()
})
let c = str.replace(/(?<=abcd)ef/, (val,val2)=>{
    console.log(val)
    return val.toUpperCase()
})
let d = str.replace(/(?<!abc)ef/, (val,val2)=>{
    console.log(val)
    return val.toUpperCase()
})
let e = str.replace(/(?:abcd)(ef)/, (val,val2)=>{
    console.log(val)
    console.log(RegExp.$1)
    return val.toUpperCase()
})
```
#### 29js中的循环
1. for:数组循环
2. for in：对象循环 最好写个判断obj[i].hasOwnProperty(i)因为也去原型链查找
3. for of：es6的 它允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代(Iterable data)的数据结构
4. while：数组循环
5. do while：数组循环
6. forEach：数组循环 forEach循环，循环数组中每一个元素并采取操作， 没有返回值，如果强制结束需要try catch
7. map：数组循环 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
8. filter：数组循环 方法是 Array 对象内置方法，它会返回通过滤的元素，不改变原来的数组。
9. some：数组循环 方法用于检测数组中的元素是否满足指定条件（函数提供）,返回 boolean 值，不改变原数组。
10. every：数组循环 方法用于检测数组所有元素是否都符合指定条件（通过函数提供），返回 boolean 值，不改变原数组。
11. reduce：数组循环 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
12. reduceRight：数组循环 它是从数组的末尾处向前开始计算
```
// 1.for循环
    // let arr = [1,2,3];
    // for (let i=0; i<arr.length; i++){
    //     console.log(i,arr[i])
    // }
    // 2.for in 循环
    //for in 循环主要用于遍历普通对象，i 代表对象的 key 值，obj[i] 代表对应的 value,当用它来遍历数组时候，多数情况下也能达到同样的效果，但是你不要这么做，这是有风险的，因为 i 输出为字符串形式，而不是数组需要的数字下标，这意味着在某些情况下，会发生字符串运算，导致数据错误，比如：'52'+1 = '521' 而不是我们需要的 53。
    // 另外 for in 循环的时候，不仅遍历自身的属性，还会找到 prototype 上去，所以最好在循环体内加一个判断，就用 obj[i].hasOwnProperty(i)，这样就避免遍历出太多不需要的属性。
    // let obj = {name:'zhou',age:'**'}
    // for(let i in obj){
    //     if(obj[i].hasOwnProperty(i)){
    //         console.log(i,obj[i])
    //     }
    // }
    // 3、while 循环
    // cars=["BMW","Volvo","Saab","Ford"];
    // var i=0;
    // while (cars[i])
    // {
    //     console.log(cars[i] + "<br>")
    //     i++;
    // };

    // 4、do while 循环
    // do while 循环是 while 循环的一个变体，它首先执行一次操作，然后才进行条件判断，是 true 的话再继续执行操作，是 false 的话循环结束。
    // let i = 3;
    // do{
    //     console.log(i)
    //     i--;
    // }
    // while(i>0)

    //5. Array forEach 循环
    // forEach循环，循环数组中每一个元素并采取操作， 没有返回值， 可以不用知道数组长度,他有三个参数，只有第一个是必需的，代表当前下标下的 value。
    // 另外请注意，forEach 循环在所有元素调用完毕之前是不能停止的，它没有 break 语句，如果你必须要停止，可以尝试 try catch 语句，就是在要强制退出的时候，抛出一个 error 给 catch 捕捉到，然后在 catch 里面 return，这样就能中止循环了，如果你经常用这个方法，最好自定义一个这样的 forEach 函数在你的库里。
    // let arr = [1,2,3];
    // arr.forEach(function(i,index){
    //     console.log(i,index)
    // })

    // 6.Array map()方法
    // map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
    // 注意：map 和 forEach 方法都是只能用来遍历数组，不能用来遍历普通对象。
    // let arr = [1,2,3];
    // let tt = arr.map(function(i){
    //     console.log(i)
    //     return i*2;
    // })
    // console.log(tt);

    // 7、Array filter() 方法
    // filter 方法是 Array 对象内置方法，它会返回通过过滤的元素，不改变原来的数组。
    // let arr = [1,2,34,5];
    // var newArr = arr.filter(function(i){
    //     return i>1;
    // })
    // console.log(newArr)

    // 8、Array some() 方法
    // some() 方法用于检测数组中的元素是否满足指定条件（函数提供）,返回 boolean 值，不改变原数组。
    // let arr = [1,2,34,5];
    // var newArr = arr.some(function(i){
    //     return i==2;
    // })
    // console.log(newArr)

    // 9、Array every() 方法
    // every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供），返回 boolean 值，不改变原数组。
    // let arr = [1,2,34,5];
    // var newArr = arr.every(function(i){
    //     return i>0;
    // })
    // console.log(newArr)

    // 10、Array reduce()方法
    // reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
    // let arr = [1,2,3,100];
    // let ad = arr.reduce(function(i,j){
    //     return i+j;
    // })
    // console.log(ad);

    // 11、Array reduceRight()方法
    // reduceRight()方法,和 reduce() 功能是一样的，它是从数组的末尾处向前开始计算。
    // let arr = [1,2,3,100];
    // let ad = arr.reduceRight(function(i,j){
    //     return i+j;
    // })
    // console.log(ad);

    // 12、for of 循环
    // for of 循环是 Es6 中新增的语句，用来替代 for in 和 forEach，它允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代(Iterable data)的数据结构,注意它的兼容性。
    // let arr = ['name','age'];
    // for(let i of arr){
    //     console.log(i)
    // }
    // console.log(arr)
```
#### 30js中的箭头函数
1. 没有this
2. 没有arguments
3. 不能通过new关键词调用
4. 没有new target
5. 没有原型
6. 没有super
#### 31js中的三种声明方式
1.var 是es5语法,let const es6语法
2.const定义常量
3.var 有变量提升
4.let const 有块级作用域 var 没有
5.作用于有全局作用域，函数作用域，块级作用域。
#### 32js中的基本引用数据类型
##### 日期（Date）
1. var now = new Date();//自动获取当前日期和时间不传参，自动获取当前日期和时间；传参，则需要传入表示该日期的毫秒数（从1970.1.1~指定时间）。
2. Date.parse()介绍：时间转为毫秒数
   参数：“月/日/年” “英文月名 日，年” “英文星期几 英文月名 日 年 时:分:秒:时区”，如Tue May 25 2004 00:00:00 GMT-0700
   YYYY-MM-DDTHH:mm:ss.sssZ(如2004-05-25T00:00:00)。
3. Date.UTC()介绍：时间转为毫秒数
其入参分别是年份、月份（一月是0，二月是1...）、天（1~31）、小时数（0~23）、分钟、秒以及毫秒数 只有年和月是必需的。其余不填时，假设为月中天数为1，其他全都为0
Date构造函数可以直接接收Date.parse和Date.UTC的参数，它会在内部自动调用parse/UTC进行转换。
4. Date.now() 返回调用此方法时的毫秒数
var start = Date.now();
此方法不是所有浏览器支持。不支持的浏览器中，替代方案
var start = new Date();
##### 继承的方法：toLocaleString()、toString()、valueOf()
前两者在不同浏览器中展示的日期和时间格式不同，没有太多用处；valueOf()返回日期的毫秒，可以使用valueOf()比较日期早晚。
##### 一些常用方法
getTime() 返回表示日期的毫秒数，与valueOf()方法返回的值相同
getFullYear() 取得四位数的年份
getMonth() 返回日期中的月份，其中0表示一月
getDate() 返回月份中的天数（1~31）
getDay() 返回星期中的星期几（0~6）
getHours() 返回日期中的小时数（0~23）
getMinutes() 返回日期中的分钟数（0~59）
getSeconds() 返回日期中的秒数（0~59）
getMilliseconds() 返回日期中的毫秒数

##### 原始值包装类型
1 Boolean
Boolean的实例会重写valueOf()方法，返回一个原始值true或false。toString()方法被调用时也会被覆盖，返回字符串“true”或“false”。
2 Number
Number类型也重写了valueOf()、toLocalString()和toString()方法。valueOf()方法返回Number对象表示的原始数值，另外两个方法返回数值字符串。toString()方法可选地接收一个表示基数地参数，并返回相应基数形式地数值字符串
- toFixed()返回指定小数位的数值字符串。
- toExponential()返回以科学计数法表示的数值字符串。接收一个参数，表示结果中小数的位数。
- toPrecision()方法会根据情况返回最合理的输出结果，可能是固定长度，也可能是科学计数法。这个方法接收一个参数，表示结果中数字的总位数。
- isInteger()用于辨别一个数值是否保存为整数。有时，小数位的0可能会让人误以为数值是一个浮点值。
3 String
a. 提取字符串方法
- slice()方法将所有负值参数都当成字符串长度加上负参数值
- substr()方法将第一个负参数值当成字符串长度加上该值，将第二个负参数转换为0。
- substring()方法会将所有负参数值都转换为0。
- 对比：这三个方法都返回调用他们的字符串的子字符串，而且都接收一或两个参数。第一个参数表示子字符串开始的位置，第二个参数表示子字符串结束的位置。
  对 slice()和 substring()而言，第二个参数是提取结束的位置（即该位置之前的字符会被提取出来）。
  对 substr()而言，第二个参数表示返回的子字符串数量。
b. 提取字符串方法
indexOf()和lastIndexOf()两个方法从字符串中搜索传入的字符串，并返回下标（如果没找到，则返回-1），区别在于前者从字符串开头向后开始查找，后者从字符串末尾向前开始查找。
这两个方法都可以接收第二个参数，表示开始搜索的位置。
c. 字符串包含方法
3个用于判断字符串种是否包含另一个字符串的方法：startWith()、endWith()和incluedes()，都返回一个表示是否包含的布尔值。区别在于
- startWith()检查开始于索引0的匹配项
- endWith()检查开始于索引(string.length - substring.length)的匹配项
- includes()检查整个字符串
#### 33js中的语法基础
##### 语法
- 区分大小写
js语法中是区分大小写的，比如run与Run是两个变量。
- 标识符
标识符就是变量、函数、属性的名字，组成为：第一个字符必须是一个字母、下划线（_）或美元符号（$）剩下的其他字符可以是字母、下划线、美元符号或数字。
- 注释
单行注释与多行注释
```js
// 单行注释
/* 这是多行 
注释 */
```
- 严格模式
严格模式是一种不同的JavaScript解析和执行模型，ECMAScript3的一些不规范写法在这种模式下会被处理，对于不安全的活动将抛出错误。要对整个脚本启用严格模式
在行首加入"use strict"。也可以在函数内单独加严格模式。
- 语句
1. js中可以省略最后的分号但是不推荐。
2. js中当if语句只有一条语句时可以省略花括号不推荐。
##### 关键字保留字
- 关键字：break do in typeof case else instanceof var catch export new void class extends return while const finally super with continue for switch yield debugger function this default if throw delete import try
- 保留字：enum implements package public interface protected static let private await
  关键字保留字不可以用作标识符，但是可以用作对象属性名，但是不建议用
##### 变量
- var
var声明存在变量提升，在全局作用域声明或去掉var声明的变量就会变成全局变量，支持重复多次声明。
- let
不存在变量提升，在全局声明不会变成全局变量存在块级作用域，重复声明会报错。存在暂时性死区，再声明之前调用会报错ReferenceError
- const
主要声明常量，如果尝试修改会报错，如果声明对象，修改对象内属性不会报错，也比较常用
- 声明风格及最佳实践
##### 数据类型
数据类型主要有6中undefined,null,string,number,boolean,symbol其中有一些资料也会介绍为7种包括bigint
- typeof
可以区分以下数据类型但是不能区分null与object,因为都会返回object
- "undefined"表示值未定义。
- "boolean"表示值为布尔值。
- "string"表示值为字符串。
- "number"表示值为数值。
- "object"表示值为对象（而不是函数）或null。
- "function"表示值为函数。
- "symbol"表示值为符号。
##### 操作符
操作符包括数学操作符加减、位操作符、关系操作符、相等操作符。
- 一元操作符
- 位操作符
- 布尔操作符
- 乘性操作符
- 指数操作符
- 加性操作符
- 关系操作符
- 相等操作符
- 条件操作符
- 赋值操作符
- 逗号操作符
##### 语句
- if语句
没啥说的这玩意没必要说。
- do-while语句
没啥说的这玩意没必要说，就是至少会执行一次。
- while语句
没啥说的这玩意没必要说。
- for语句
没啥说的这玩意没必要说。
- for-in语句
用于枚举对象中的非符号键属性
- for-of语句
用于遍历可迭代对象的元素
- 标签语句
- break与continue
break 直接退出循环 continue跳出本次魂环
- with
with语句的用途是将代码作用域设置为特定的对象
- switch
当与case值匹配上就会执行对应的case内的语句，如果没有break会继续执行下面的case,最后都会执行default。
##### js中['1', '2', '3'].map(parseInt)
1,NaN,NaN
##### js中alert(Number('08'))
弹出8,八进制字面值的第一位必须是0,然后是八进制数字0 到7,如果字面值中的数值超出了范围,那么前导的0将被忽略。
##### js中document.write和innerHTML的区别
1. document.write 只能重绘整个页面
2. innerHTML 可以重绘页面的一部分
##### js中switch case判断条件中,用到了break;还有的地方用到了return
1. 执行break会跳出switch ,然后执行switch下面的语句。不用break会发生击穿现象,执行到下一个case,
2. 执行return跳出方法。
##### js中var a=b=c=d=5是什么意思如果接下来再写一句,d=9,a,b,c的值会变化吗
一、js中var a=b=c=d=5是什么意思如果接下来再写一句,d=9,a,b,c的值会变化吗
1.初始化给a、b、c、d赋值都为5。
2.改变d后a、b、c值不会改变,
3.因为a、b、c、d都是值类型的变量,各自的值存在于自己的栈当中,当d变化了其他栈中的值不改变。
二、js中var a=b=c=d=[1,2,3,4,5]是什么意思?如果接下来写一句d[5]=9;a,b,c,的值会发生变化吗
1.初始化给a、b、c、d赋值都为[1,2,3,4,5]。
2.改变d后a、b、c值会改变,
3.因为a、b、c、d都是引用类型的数组,各自的值存在于自己的堆当中,地址存在栈中当d变化了其他堆中的值均改变。
三、js中var a=b=c=d=[1,2,3,4,5]是什么意思?如果接下来写一句d=[9];a,b,c,的值会发生变化吗
1.初始化给a、b、c、d赋值都为[1,2,3,4,5]。
2.改变d后a、b、c值不会改变,
3.因为a、b、c、d都是引用类型的数组,各自的值存在于自己的堆当中,地址存在栈中当d变化了其他堆中的值均改变。
- 栈: 存储值类型数据（栈也叫一级缓存）。
- 堆: 存储引用类型数据,在栈中存指向该堆内存地址的句柄（堆也叫二级缓存）。
##### js中var n=(1,2,3,4,5),n的值是多少
将会依次赋值 n=5
##### js中var str=true+11+null+9+undefined+‘zhuanbang’+false+null+9+[],str的值是多少
```
// 结果为 NaNzhuanbangfalsenull9
console.log(true + 11);//true转化为1，结果为12
console.log(true + 11 + null);//null转化为0，结果为12
console.log(true + 11 + null + 9);//12+9=21
console.log(true + 11 + null + 9 + undefined);//21 + undefined = NaN
console.log(true + 11 + null + 9 + undefined + "zhuanbang");//‘NaN’ + ‘zhuanbang’ = ‘NaNzhuanbang’
console.log(true + 11 + null + 9 + undefined + "zhuanbang" + false);//‘NaNzhuanbang’ + ‘false’ = ‘NaNzhuanbangfalse’
console.log(true + 11 + null + 9 + undefined + "zhuanbang" + false + null);//‘NaNzhuanbangfalse’ + ‘null’ =‘NaNzhuanbangfalsenull’
console.log(true + 11 + null + 9 + undefined + "zhuanbang" + false + null + 9);//‘NaNzhuanbangfalsenull’ + ‘9’ = ‘NaNzhuanbangfalsenull9’
console.log(true + 11 + null + 9 + undefined + "zhuanbang" + false + null + 9 + []);//‘NaNzhuanbangfalsenull9’ + ’ ’ = ‘NaNzhuanbangfalsenull9’
```
##### js中哪些操作会造成内存泄露
1. 定义：内存泄漏就是您不在需要但是他仍然存在，分配给应用的内存不能再重新分配，即使在内存不使用的情况下
2. 垃圾回收器：定期扫描并计算每个对象的其他对象数量如果一个对象的引用数量为0（没有对象引用过）那么对象内存将会被回收
3. setTimeout 的第一个参数使用字符串而非函数的话,会引发内存泄漏
4. 闭包
5. 控制日志
6. 循环引用（两个对象彼此引用，在对象不用的使用请设置为null）
7. dom插入顺序
##### js全局变量，局部变量
1. 全局变量：全局变量是在函数外定义的变量，在js中全局变量属于window对象，作用域是整个源程序，全局变量全部存储在变量存储区，程序开始执行时给全局变量分配存储区，程序运行完毕就释放
2. 局部变量：在特定的工程函数中可以访问的变量，作用域较小当函数执行结束释放。
##### js写一个从0到59依次循环的计时器
```
let time = 0
let a = setInterval(function () {
    if (time > 10) {
        time = 0
        return false
    }
    time++;
    console.log(time)
}, 1000)
```
##### js判断当天是星期几
```
// js判断当天是星期几
function weekDay() {
    let date = new Date();
    let week = date.getDay()
    switch (week) {
        case 0:
            console.log('星期日');
            break;
        case 1:
            console.log('星期一');
            break;
        case 2:
            console.log('星期二');
            break;
        case 3:
            console.log('星期三');
            break;
        case 4:
            console.log('星期四');
            break;
        case 5:
            console.log('星期五');
            break;
        case 6:
            console.log('星期六');
            break;
        default:
            break;
    }
}
weekDay()
```
##### js单线程与同步异步
1. 单线程：
   单线程意味着，如果在同个时间有多个任务的话，这些任务就需要进行排队，前一个任务执行完，才会执行下一个任务
   js为什呢为单线程：js作为浏览器的脚本语言，主要是实现与用户的交互，利用js实现对dom的操作，如果是多线程的话，一个线程在dom中添加内容，另一个线程要删除这个dom，这会带来很复杂的同步问题
2. 同步与异步
   为什么会有同步异步任务：因为js为单线程，此事处理时间只能处理一个任务，所有的任务都需要排队，如果前一任务时间太长后面的任务就得等待，因此js考虑到了了这个问题，主线程可以完全不用等待任务执行完成，可以先挂起到任务中，等到任务有了结果再回头执行之前的任务，
   同步任务：同步任务是指在主线程上排队执行的任务，只有前一个任务执行完毕，才能继续执行下一个任务，当我们打开网站时，网站的渲染过程，比如元素的渲染，其实就是一个同步任务
   异步任务：异步任务是指不进入主线程，而进入任务队列的任务，只有任务队列通知主线程，某个异步任务可以执行了，该任务才会进入主线程，当我们打开网站时，像图片的加载，音乐的加载，其实就是一个异步任务
   异步机制：
   （1）所有同步任务都在主线程上执行，行成一个执行栈
   （2）主线程之外，还存在一个任务队列，只要异步任务有了结果，就会在任务队列中放置一个事件
   （3）一旦执行栈中的所有同步任务执行完毕，系统就会读取任务队列，看看里面还有哪些事件，那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行
   （4）主线程不断的重复上面的第三步
##### js双十一倒计时
```
// js双十一倒计时
// 结束时间-系统开始时间
// 定时器本身不准timeout是在限定时间内，interval是在限定时间后。
// chrome为了优化网页性能，使得用户在离开网页后，暂停网页的计时器、运动等耗性能的部分，故此问题只能使用异步解决，使得计时线程在后台一直运行
// 前端的计时逻辑永远不会准，即便你初始化时间采用服务器时间。
// 因为网络传输误差你不知道，同时setTimeout和setInterval并不会非常精确，所以不要依赖前端计时器来处理重要逻辑，需要结合后台来保障。

function fn() {
    let date1 = new Date();//可以借助服务器辅助时间
    let date2 = new Date(2022, 11, 11, 0, 0, 0);
    let minutesVal = 60 * 1000;
    let dateValue = date2.getTime() - date1.getTime();
    let days = Math.floor(dateValue / (24 * 60 * minutesVal));
    let hoursValue = dateValue % (24 * 60 * minutesVal);
    let hours = Math.floor(hoursValue / (60 * minutesVal));
    let minutesValue = hoursValue % (60 * minutesVal);
    let minutes = Math.floor(minutesValue / minutesVal);
    let secondValue = minutesValue % (minutesVal);
    let second = Math.floor(secondValue / 1000);
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        second: second
    }
}

let diffTime = fn();
let str = `相差 ${diffTime.days}天 ${diffTime.hours}小时 ${diffTime.minutes}分 ${diffTime.second}秒`;
console.log(str);
```
##### js如何获取UA
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>wulitian-study</title>
</head>
<body>
<script>
    // js如何获取UA
    function browser() {
        let ua = navigator.userAgent;
        let ret = {},
            webkit = ua.match( /WebKit\/([\d.]+)/ ),
            chrome = ua.match( /Chrome\/([\d.]+)/ ) ||
                ua.match( /CriOS\/([\d.]+)/ ),

            ie = ua.match( /MSIE\s([\d\.]+)/ ) ||
                ua.match( /(?:trident)(?:.*rv:([\w.]+))?/i ),
            firefox = ua.match( /Firefox\/([\d.]+)/ ),
            safari = ua.match( /Safari\/([\d.]+)/ ),
            opera = ua.match( /OPR\/([\d.]+)/ );

        webkit && (ret.webkit = parseFloat( webkit[ 1 ] ));
        chrome && (ret.chrome = parseFloat( chrome[ 1 ] ));
        ie && (ret.ie = parseFloat( ie[ 1 ] ));
        firefox && (ret.firefox = parseFloat( firefox[ 1 ] ));
        safari && (ret.safari = parseFloat( safari[ 1 ] ));
        opera && (ret.opera = parseFloat( opera[ 1 ] ));
        return ret;
    }
    a = browser()
    console.log(a)
    a = null

</script>
</body>
</html>
```
##### js如何让alert弹出框中的信息换行
1.用\n来实现
2.其他转义字符
\n 回车换行
\t  横向跳到下一制表位置
\b  退格
\r   回车
\\   反斜线符“\”
\’ 单引号符
\”  双引号符
\ddd 1~3位八进制数所代表的字符
\xhh 1~2位十六进制所代表的字符
##### js如果利用JS生成一个table
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>wulitian-study</title>
</head>
<body>
<table id="table"></table>
<script>
    function createTable(row,column,id){
        for(let i = 0;i<row;i++){
            let tr = document.createElement("tr");
            for(let j = 0;j<column;j++){
                let td = document.createElement("td");
                td.innerText = "内容"
                tr.appendChild(td);
            }
            document.getElementById(id).appendChild(tr);
        }
    }
    createTable(10,10,'table');
</script>
</body>
</html>
```
##### js实现与加载图片
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>wulitian-study</title>
</head>
<body>
<img id ='imgObj' src='data:image/png;base64,*******'/>
<script>
    let imgObj = document.getElementById('imgObj');
    function addImg (tempSrc) {
        let imgObj1 = new Image();
        imgObj1.src = tempSrc;
        imgObj1.onload = function () {
            imgObj.src = this.src;
            imgObj.height = 50;
            imgObj.width = 50;
        }
    }
    addImg('data:image/png;base64,*******')// 这里是真正的显示文件省略了base64太长了占用篇幅
</script>
</body>
</html>
```
##### js实现如下语法的功能 var a=(5).plus(3).minus(6)
```
Number.prototype.plus = function (number) {
    return this + number;
}

Number.prototype.minus = function (number) {
    return this - number;
}

console.log((5).plus(3).minus(6))
```
##### js实现输出document对象中所有成员的名称和类型
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>wulitian-study</title>
</head>
<body>
<script>
    // js实现输出document对象中所有成员的名称和类型
    for (let key in document){
        console.log(key+'--'+document[key])
    }
</script>
</body>
</html>
```
##### js打印斐波那契数列
```
//js打印斐波那契数列,两相邻数的和等于下一项的值。
function printFibonacci(n) {
    let arr = n > 0 ? [1] : [];
    if (n > 1) {
        for (let index = 1; index < n; index++) {
            arr.push(arr[index - 1] + (index >= 2 ? arr[index - 2] : 0))
        }
        return arr;
    }
}

console.log(printFibonacci(20));
```
##### js选项卡的标签栏或者一排单选按钮，如何知道选择是第几个
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>wulitian-study</title>
</head>
<body>
<input type="radio" name="a"/>
<input type="radio" name="a"/>
<input type="radio" name="a"/>
<input type="radio" name="a"/>
<script>
    let oInputs = document.getElementsByTagName('input');
    for (let index = 0; index < oInputs.length; index++) {
        (function (index) {
            oInputs[index].onclick = function () {
                alert(index + 1)
            }
        })(index)
    }
</script>
</body>
</html>
```
#### 34js中的模块化
1. es6:export function(){} export default function(){}  import {aaa,bbb} from './xxx.js'

2. commonjs（node.js）:module.exports = {} exports.a = 1 var module = require('xxx.js')

3. AMD:define(['./aaa','./bbb'],function(a,b){a.done()b.done()})
#### 35js中的解构
##### 解构对象

1. 解构基础对象

```js
const Car = {name: "奔驰",price: 100000}
const {name, price} = Car;
```

2. 解构没有声明的对象

```js
const {name, price} = {name: "奔驰",price: 100000};
```

3. 解构对象并重命名

```js
const {name:n, price:p} = {name: "奔驰",price: 100000};
```

4. 解构默认值

```js
const {name:n = '奔驰', price:p = 200000} = {name: "奔驰",price: 100000};
```

5. 解构函数参数

```js
const {name:n = '奔驰', price:p = 200000} = {name: "奔驰",price: 100000};

function run({n}){
    console.log(n+"跑起来")
}
```

6. 解构嵌套对象

```js
const {introduce:{info}}= {name: "奔驰",price: 100000, introduce:{info: '这种车贼贵'}};

```

##### 解构数组

1. 解构基础数组

```js
const [a,b] = ['大众', '宝马'];
```

2. 解构默认值

```js
const [a,b="宝马"] = ['大众', '宝马'];
```

3. 在解构中交换变量

```js
let a = '大众';
let b = '宝马';
[b,a] = [a,b]
```

4. 解构函数返回值

```js
function getCar(){
    return ['大众', '宝马', '奔驰'];
}
let a,b,c;
[a,b,c] = getCar();
```
#### 36js中的错误处理

##### try catch语句

```js
try {
    // statements
} catch(e) {
    // statements
    console.log(e);
}
```
其中e形参中的两个成员e.name异常名称,e.message异常信息

##### finally字句

无论如何都将执行finally字句，当同时在try catch语句内return，catch捕获内return与finally内return 只会执行finally中的return。

##### 错误类型

- Error：基类。

- EvalError：eval函数抛出。

- RangeError：数组越界抛出。

- ReferenceError：找不到对象抛出。

- SyntaxError：eval中的字符串错误抛出。

- TypeError：变量中保存意外类型，不存在的方法时抛出。

- URIError：使用encodeURI或decodeURI()中URI格式不正确时抛出。

##### 抛出错误

当遇到throw时代码执行结束，我们可以自定义抛出的异常。

##### onerror事件

经过try catch处理的错误都会触发window对象上的onerror事件接受三个参数错误消息、错误所在的url、行号，如果在onerror事件加入return false，可以阻止浏览器报告错误的默认行为。其中image实例对象也支持onerror事件。

##### 错误类型

1. 类型转换

2. 数据类型错误

3. 通信错误

##### 通常把错误记录到服务器

通常可以借用image实例的src，因为这个不必担心跨域问题。
#### 37js中的proxy
```
// 实现监听对象并在读取与写入时提示用户正在读取或者正在写入某个属性
const obj = {
    name: 'wulitian',
    sex: '男'
}
const proxy = new Proxy(obj, {
    set(target, p, value, receiver) {
        console.log(`正在修改元素：将${p}属性设置为${value}`);
        obj[p] = value
    },
    get(target, p, receiver) {
        console.log(`正在获取：${p}`)
        return obj[p]
    }
})
console.log(proxy.name)
proxy.name = '123'
console.log(proxy)
```
#### 38js中的防抖节流
```
<!DOCTYPE html>
<html lang="ch">
<head>
    <meta charset="UTF-8">
    <title>js中的防抖节流</title>
</head>
<body style="height: 4000px;">
<script>
// 防抖(debounce)
// 当持续触发事件时，在一定的时间段内，只有最后一次触发的事件才会执行。
function debounce(fn, wait) {
    var timeout = null; //定义一个定时器
    return function() {
        if(timeout !== null)
            clearTimeout(timeout); //清除这个定时器
        timeout = setTimeout(fn, wait);
    }
}
function handle(){
    console.log(new Date())
}
window.addEventListener('scroll', debounce(handle, 1000))

// 节流(throttle)
// 时间戳方式
var throttle = function (func, delay) {
    var prev = Date.now();
    return function () {
        var now = Date.now();
        if (now - prev >= delay) {
            func();
            prev = Date.now();
        }
    }
}

// 定时器方式。
function throttle(func, delay){
    let timer = null;
    return () => {
        if(!timer) {
            timer = setTimeout(()=>{
                func()
                timer = null;
            },delay)
        }

    }
}
// 两种方式结合实现每次触发前先执行一次
function throttle(func, delay){
    let timer = null;
    let startTime = Date.now();
    return () =>{
        let curTime = Date.now();
        let remaining = delay - (curTime - startTime);
        clearTimeout(timer);
        if(remaining <= 0){
            console.log(1)
            func();
            startTime = Date.now();
        }else{
            console.log(2)
            timer = setTimeout(func, remaining);
        }
    }
}

function handle() {
    console.log('数据处理!');
}
window.addEventListener('scroll', throttle(handle, 1000));
</script>
</body>
</html>
```