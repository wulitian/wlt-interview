# js

#### 01js�еıհ�
##### �հ���ʲô
- �հ���һ�������ڲ�����һ���������ڲ��ĺ���ʹ���ڲ��ı������ⲿ�ĺ��������ڲ��ĺ�����������հ���
##### �հ������洢��λ��
- �հ��еı����洢��λ���Ƕ��ڴ棬����ŵ�ջ�ڴ��л�����ջ�Ļ��ն�����
##### �հ�������
- ����������˽�б����������Ӱ�죬�γɲ������ŵ�ջ�ڴ�
- ���������Ե�˽�л�
##### �հ�ע������
- �հ���Ҫע���ڴ�й©
##### ����ڴ�й©�İ취
performance����memory�������ҵ��ڴ�й©�����λ��
##### forѭ��let�����µıհ�
```
/**
 * ����var����ȫ���������µģ�������ִ��ʱi=5
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
##### forѭ��var�����µıհ�
```
/**
 * ����let�������ڱհ���ֱ𻺴�����������ִ��ʱi=5
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
##### IIFE��ִ�к����µıհ�
```
/**
 *  var ��������������������ʹ��IIFE�����γɱհ�����˽����������0,1,2
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
##### �հ��ı�������
```
/**
 *  �����ϼ�������������γɱհ������浱ǰ����
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
##### ѭ����ֵ�µıհ�
```
/**
 *  ���ڱհ����γ�10��˽�����������Ի�����ִ��0,1,2,3,4�����ȥ����ִ�к��������5��5
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
#### 02js�е���������ִ��������
##### js��������
###### �������飺

1. �������Ƕ����������������һ�׷��ʱ����Ĺ������׹����������������������ڵ�ǰ�������Լ�Ƕ�׵��������и��ݱ�������ʶ�������б������ҡ�

2. ���������������Ǳ�֤��ִ�л�����Ȩ���ʵ����б����ͺ�����������ʣ�ͨ���������������ǿ��Է��ʵ���㻷���ı����� ������

###### ��������

���ǲ��ұ�����һ�׹���

1. ����-js���������ִ��ȫ���̡�

2. ������-js�﷨�ʷ����빤����

3. ������- �����ռ���ά�������ı��������һ�׹���ȷ��ִ�д������Щ�����ķ���Ȩ�ޡ�

###### ������Ĳ���

���������ݵĽṹ�ͻ���֮���λ�ù�ϵ�������ṩ���㹻��λ����Ϣ����������Щ��Ϣ�����ұ�ʶ����λ��

###### ����������

1. �ʷ�������

with��䣬eval���

2. ����������

ȫ��������function ������

3. ��������

let,const,for��䣬switch case���ȣ�try/catch

###### ����

1. var �����������ڱ�������

2. ������������
##### js�б��������뺯������
�����������ƶ����������ˣ���׼��˵������ִ��������ʱ�����������׶Σ�
��һ�׶Σ�����vo��js���������ҵ���Ҫ�����ı����ͺ����������ٺ��ڴ�ռ䣬������洢���ڴ��У������ḳֵΪundefined,
�ڶ��׶Σ�����ִ�н׶Σ�����Ƕ��ͬ�������Ḳ�ǣ����������ڱ���������
##### js�е�ִ��������
###### ִ�������ķ���
- ȫ��ִ��������

- ����ִ��������

- eval����ִ��������
###### ִ��ջ
ִ��ջ���ǵ���ջ�����ڴ洢�������е�ִ�������ģ� ��������ִ�нű�ʱ���ȴ���ȫ��ִ��������ѹ��ջ
���������һ������ʱ����Ϊ�ú�������ִ��������ѹ��ջ���� �������ִ��ִ���������ڶ����ĺ�����ִ�к�
�ᵯ����Ȼ��������̻ᵽ�ﵱǰִ�������ĵ���һ�������� һ�����д���ִ����ϣ�js�����ִ��ջ���Ƴ�ȫ��ִ�������ġ�
#### 03js�е�this
##### this��ָ������
- �򵥽�����˭����ָ��˭
- ��ͷ����û��this
- ��㺯������ָ����������ʱ������thisָ��window��node����
- apply,call,bind,thisָ���һ������
- �ϸ�ģʽ��thisû��ִ�л���ʱָ��undefined
##### this�󶨵����ȼ�
new�� > ��ʾ��(apply/call/bind) > ��ʽ��(obj.test()) > Ĭ�ϰ�(������������)
##### ����������this��ָ��
```
/**
 * ��㺯������ʱthisָ��window����ʱ��ָ���thisָ��window
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
##### ���������е�thisָ��
```
/**
 * ��������this��ָ��ǰ����
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
##### ���캯������ʱthis��ָ��
```
/**
 * ���캯��������this��ָ��Ϊʵ������
 */
var that = undefined;

function fn(){
    that = this;
}

let obj = new fn();

console.log(obj === that)
```
##### call��apply��bind������thisָ��
```
/**
 * call,apply,bind���Ըı�this��ָ��ͨ����һ��������Ĭ�ϲ����൱��window��node�����¡�
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
##### ��ͷ��������this��ָ��
```
/**
 * ��ͷ����û��this�������������ϲ��ң���ǰ��window�µ�name
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
##### �ϸ�ģʽ��this��ָ��
```
/**
 * �ϸ�ģʽ��thisָ��undefined
 */
"use strict"

var fn = function(){
    console.log(this);
}

fn();
```
##### ���ȼ�-��ʾ������ʽ��
```
/**
 * ��ʾ�󶨸�����ʽ��
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
##### ���ȼ�-new������ʽ��
```
/**
 * new�����ȼ�������ʽ��
 */
var obj = {
  name: "obj",
  foo: function() {
    console.log(this)
  }
}

var f = new obj.foo()
```
##### ���ȼ�-new������ʾ��
```
// ����: new�ؼ��ֲ��ܺ�apply/callһ����ʹ��

// new�����ȼ�����bind
function foo() {
    console.log(this)
}

var bar = foo.bind("aaa")
var obj = new bar()
```
#### 04call��apply��bind
##### �Աȣ�
- call() ��������һ������, �����һ��ָ����thisֵ�ͷֱ���ṩ�Ĳ���(�������б�)��call���ܺ�һЩ���������������Ļ����Դ�չ�������...��
- apply() ��������һ������, �����һ��ָ����thisֵ���Լ���Ϊһ�����飨����������Ķ���  arguments ��һ����������󡣴�����һ��function�Ĳ����б����ṩ�Ĳ�����
- bind() ��������һ���µĺ���, ��������ʱ������this�ؼ�������Ϊ�ṩ��ֵ���ڵ����º���ʱ�����κ��ṩ֮ǰ�ṩһ�������Ĳ������С�
##### ��ͬ�㣺
���Ǻ����������Ըı�thisָ�򣬶������������ݲ���
##### ��ͬ�㣺
- call() �� apply()ֻ�Ǵ��ݲ�����ͬ��call���ݲ����ǲ����б�apply������������Ķ����Ҹı�thisָ���ֱ��ִ��
- bind() ���ݲ����ǲ����б��ı�thisָ���ִ����Ҫ�ֶ�ִ��
##### call������ʵ��
```
/**
 *  ��ݴ���undefined��nullʱָ��window,���ö���ķ�ʽ���θı�thisָ��
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
    console.log("fn����ִ��", this.name);
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
##### apply������ʵ��
```
/**
 *  ��ݴ���undefined��nullʱָ��window,���ö���ķ�ʽ���θı�thisָ��ע�������������
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
    console.log("fn����ִ��", this.name);
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
##### bind������ʵ��
```
/**
 *  ��ݴ���undefined��nullʱָ��window,���ö���ķ�ʽ���θı�thisָ��ע�ⷵ�ص��Ǻ���
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
  console.log("fn����ִ��", this.name);
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
#### 05js�е�arguments
1. arguments ��һ����������󡣱�������һ�������Ĳ����б�
2. arguments.callee ָ��ǰִ�к���
3. arguments.caller ָ����õ�ǰ�����ĺ���
4. arguments.length ���ݵ�ǰ��������������
##### arguments����ʹ��
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
##### argumentsתarray
```
function foo(num1, num2) {
  // ����
  // var newArr = []
  // for (var i = 0; i < arguments.length; i++) {
  //   newArr.push(arguments[i] * 10)
  // }
  // console.log(newArr)

  // Array.prototype.slice��argumentsת��array
  var newArr2 = Array.prototype.slice.call(arguments)
  console.log(newArr2)

  var newArr3 = [].slice.call(arguments)
  console.log(newArr3)

  // 2.3.ES6���﷨
  var newArr4 = Array.from(arguments)
  console.log(newArr4)
  var newArr5 = [...arguments]
  console.log(newArr5)
}

foo(1, 2, 3, 4, 5)
```
##### ��ͷ������û��arguments
```
// 1.����һ:
// var foo = () => {
//   console.log(arguments)
// }

// foo()

// 2.������:
// function foo() {
//   var bar = () => {
//     console.log(arguments)
//   }
//   return bar
// }

// var fn = foo(123)
// fn()

// 3.������:
var foo = (num1, num2, ...args) => {
  console.log(args)
}

foo(1, 2, 3, 4, 5)
```
#### 06js�еĺ������ﻯ
##### ����
�� Javascript �к���ʽ��̵�һ����Ҫ��������صģ���һ�������ĺ�������ʵ�ַ�ʽ����Ҫ���������Լ��ݹ飬ͨ����ֲ����ķ�ʽ��������һ��������ĺ����������Դﵽ���ٴ������࣬���ӿɶ��Ե�Ŀ�ġ�
##### ��;
���ﻯʵ���ǰѼ������⸴�ӻ��ˣ����Ǹ��ӻ���ͬʱ��������ʹ�ú���ʱӵ���˸��Ӷ�����ɶ�
##### ��װ˼·
ͨ�������� length ���ԣ���ȡ�������βθ������βεĸ�����������Ĳ�������Ҳ�����ڵ��ÿ��ﻯ���ߺ���ʱ���ֶ�ָ������Ĳ�������
##### ���ﻯͨ�ú�����װ
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
#### 07js�е�with��eval��strict

##### with

�����γ��Լ���������

##### eval

1. eval() �����Ὣ������ַ������� JavaScript �������ִ�У����������ַ����Ǳ��ʽ�򷵻ر��ʽ��ֵ��������򷵻� undefined ��

2. Ӧ�ñ���ʹ��eval,����ȫ,�����ܣ�2��,һ�ν�����js���,һ��ִ�У���

##### strict

- ��ֹ���ⴴ��ȫ�ֱ���

- ������������ͬ�Ĳ�������

- ��Ĭ����

- ������ʹ��ԭ�ȵİ˽��Ƹ�ʽ 0123

- with��䲻����ʹ��

- eval���������������ñ�����

- �ϸ�ģʽ����ִ�к���(Ĭ�ϰ�)��ָ��undefined

- setTimeout������ָ��window
##### with����ʹ��
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
##### eval������ʹ��
```
var str = 'var message = "Hello World"; console.log(message);'

eval(str)
```
##### �ϸ�ģʽ����������
```
"use strict"

// 1. ��ֹ���ⴴ��ȫ�ֱ���
// name = "wulitian"
// console.log(name)
//
// function fn() {
//     age = 20
// }
//
// fn()
// console.log(age)

// 2.������������ͬ�Ĳ�������
// function fn2(x, y, x) {
//   console.log(x, y, x)
// }
//
// fn2(1, 2, 3)


// 3.��Ĭ����
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

// 4.������ʹ��ԭ�ȵİ˽��Ƹ�ʽ 0123
// var num = 0o123 // �˽���
// var num2 = 0x123 // ʮ������
// var num3 = 0b100 // ������
// console.log(num, num2, num3)

// 5.with��䲻����ʹ��

// 6.eval���������������ñ�����
// var str = '"use strict"; var name = "wulitian"; console.log(name);'
// eval(str)
// console.log(name)
```
##### �ϸ�ģʽ�µ�this
```
"use strict"

// ���ϸ�ģʽ��, ��ִ�к���(Ĭ�ϰ�)��ָ��undefined
// ֮ǰ��д�Ĵ�����, ��ִ�к���������û��ʹ�ù�thisֱ��ȥ����window
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

// setTimeout��this
// fn.apply(this = window)
setTimeout(function() {
  console.log(this)
}, 1000);
```
#### 08js��null��undefined��NaN
##### js��NaN
1. NaN ��ʾ����һ����,������������ number ���͡�

2. NaN �� NaN ����ȡ�

3. isNaN�����ж�һ�������ǲ�������
##### js��null��undefined����
1.null��ʾ�޶���ת��Ϊ��ֵΪ0

2.undefined��һ����ʾ���ޡ���ԭʼֵ,ת��Ϊ��ֵʱΪNaN

3.������δ��ʼ��������Ĭ��ֵΪundefined

4.null������ʾ��δ���ڵĶ���

5.null��ʾ��ֵ

6.undefined��ʾ���������ֵ
#### 09js�е�Set,WeakSet,Map,WeakMap

##### Set

1. ���ܣ�Set �����������κ����͵�Ψһֵ��������ԭʼֵ�����Ƕ�������,�����ظ���
- +0 ��-0 �ڴ洢�ж�Ψһ�Ե�ʱ���Ǻ�ȵģ����Բ������ظ���
- undefined �� undefined �Ǻ�ȵģ����Բ������ظ���
- NaN �� NaN �ǲ���ȵģ������� Set ��ֻ�ܴ�һ�������ظ���

2. ���Է���

- size ���ԣ����ؼ��ϳ���
- add(value)���������Ԫ��
- delete(value)������ɾ��Ԫ��
- has(value)�������ж�Ԫ���Ƿ����
- clear()��������ռ���
- forEach()���������ϱ���

3. ʹ�ó���������ȥ�ء��������������

##### WeakSet

1. ���ܣ�WeakSet �������������ö������һ��������
- WeakSet ֻ�ܴ���������ã����ܴ��ֵ���� Set ���󶼿���
- WeakSet �����д���Ķ���ֵ���Ǳ������õģ����������ջ��Ʋ����� WeakSet �Ըö�������ã����û�������ı����������������������ֵ����������󽫻ᱻ�������յ����������Ǹö��󻹴����� WeakSet �У������� WeakSet �������ж��ٸ���ԱԪ�أ�ȡ�����������ջ�����û�����У�����ǰ���Ա�������ܲ�һ�£���������֮���еĳ�Ա����ȡ�����������������ˡ���� ES6 �涨��WeakSet �������޷��������ģ�Ҳû�а취�õ�������������Ԫ�ء�

2. ���Է���
- add(value)���������Ԫ��
- delete(value)������ɾ��Ԫ��
- has(value)�������ж�Ԫ���Ƿ����
- clear()�������������Ԫ��

##### Map

1. ����

Map ���󱣴��ֵ�ԣ������ܹ���ס����ԭʼ����˳���κ�ֵ���������ԭʼֵ������������һ��������һ��ֵ
- +0 ��-0 �ڴ洢�ж�Ψһ�Ե�ʱ���Ǻ�ȵģ����Բ������ظ���
- undefined �� undefined �Ǻ�ȵģ����Բ������ظ���
- NaN �� NaN �ǲ���ȵģ�����ֻ�ܴ�һ�������ظ���

2. ���Է���
- size ���ԣ������ֵ䳤�ȣ�����������ĳ��� length��
- values()����������һ���ɵ������󣬰�����˳����� Map ������ÿ��Ԫ�ص� value ֵ
- set(key,value)���������ֵ��������Ԫ��
- get(key)������ͨ���������ض���ֵ������
- has(key)�������ж��ֵ����Ƿ���ڼ� key
- delete(key)������ͨ���� key ���ֵ����Ƴ���Ӧ������
- clear()����������ֵ�
- forEach()������ѭ���ֵ�

##### WeakMap

1. ����

WeakMap ������һ���ֵ�ü��ϣ����еļ��������á�ע�⣺�������������ã���ֵ���������⡣
ע�⣺WeakMap �����õ�ֻ�Ǽ����������Ǽ�ֵ����ֵ��Ȼ���������á�

2. ���Է���
- set(key,value)����������һ�� key ��������
- delete(key)�������Ƴ� key �Ĺ�������
- has(value)�������ж� WeakSet �������Ƿ���� value
- get(key)���������� key ��������û���򷵻� undefined

##### �Ա�

1. Set
- ��ԱΨһ�������Ҳ����ظ�
- ���������鼯�ϣ���ֵ�ͼ�����һ�µģ�ֻ�м�ֵ��û�м�����
- ���Ա����������� add��delete��has

2. WeakSet
- ֻ�ܴ洢��Ӧ���ã����ܴ��ֵ
- ��Ա���������ã��ᱻ�������ջ��ƻ���
- ���ܱ����������� add��delete��has

3. Map
- ����Ψһ�����ظ�
- �����ڼ��ϣ���ֵ�Եļ��ϣ��κ�ֵ��������Ϊһ��������һ��ֵ
- ���Ա���������ת���������ݸ�ʽ������ get��set��has��delete

4. WeakMap
- ֻ���ܶ���Ϊ�������������������͵�ֵ��Ϊ��������ֵ����������
- �����������ã�������ָ��Ķ��󣬻ᱻ�������ջ��ƻ���
- ���ܱ��������� get��set��has��delete
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
#### 10js�е�symbol
```
// Symbol.asyncIterator::�첽�ɵ���
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

// Symbol.hasInstance::��дinstanceof
!(function () {
    class Array1 {
        static [Symbol.hasInstance](instance) {
            console.log(1231);
            return Array.isArray(instance);
        }
    }

    console.log(Array instanceof Array1)
})()

// Symbol.isConcatSpreadable::����Array.prototype.concat()�����Ĳ���
!(function () {
    const arr1 = ['1', '2', '3'];
    const arr2 = ['a', 'b', 'c'];
    let a = arr1.concat(arr2);
    console.log(a)
    arr1[Symbol.isConcatSpreadable] = false;
    let b = arr1.concat(arr2);
    console.log(b)

    // ������
    const arrayLike = {
        [Symbol.isConcatSpreadable]: true,
        length: 2,
        0: '����',
        1: 23
    }
    let c = arr2.concat(arrayLike);
    console.log(c)

})()

// Symbol.iterator ������
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

// Symbol.match::ָ����ƥ�����������ʽ�������ַ�����String.prototype.match() ��������ô˺�����
!(function () {
    const reg = /foo/;
    reg[Symbol.match] = false;
    console.log('/foo/'.startsWith(reg));
    console.log('/baz/'.endsWith(reg));
})()

// Symbol.matchAll::����һ�����������õ����������ַ�������������ʽ��ƥ����˺������Ա� String.prototype.matchAll() �������á�
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
#### 11js�е�cookie��session
##### cookie::����

cookie�Ƿ�������ɵģ�
Cookie ���û�����������ڱ��ص�һС�����ݣ�������������´���ͬһ�������ٷ�������ʱ��Я�������͵��������ϡ�
1. �Ự״̬�������û���¼״̬�����ﳵ����Ϸ������������Ҫ��¼����Ϣ����
2. ���Ի����ã����û��Զ������á�����ȣ���
3. �������Ϊ���٣�����ٷ����û���Ϊ�ȣ���

##### cookie::Domain

�ñ�ʶָ���������Խ���cookie,��ָ��Ĭ��Ϊ��ǰ�ĵ��������������������ָ��domain����һ�������������

##### cookie::path

Path ��ʶָ���������µ���Щ·�����Խ��� Cookie���� URL ·��������������� URL �У������ַ� %x2F (/) ��Ϊ·���ָ�������·��Ҳ�ᱻƥ�䡣

##### cookie::Expires/Max-Age

Cookie�Ĺ���ʱ�䣬���ں󽫻��Զ�ɾ����

##### cookie::HttpOnly

Ϊ�˱���xss������Document.cookie�޷����ʴ���HttpOnly��ʶ��cookie��

##### cookie::Secure

���Ϊ Secure �� Cookie ֻӦͨ���� HTTPS Э����ܹ��������͸�����ˡ�

##### cookie::SameSite

SameSite Cookie ���������Ҫ��ĳ�� Cookie �ڿ�վ����ʱ���ᱻ���ͣ��Ӷ�������ֹ��վ����α�칥����CSRF����

##### cookie::�������

�ϰ汾������У����ӡ�Ԥ���ء�get����post����iframe��AJAX��image���ᷢ��cookie��

�°汾������У����ӡ�Ԥ���ء�get������cookie��post����iframe��AJAX��image��������cookie��

##### session::����

session��һ�ַ���˻��ƣ������ʹ��һ��ɢ�б�ṹ��������Ϣ����������ҪΪĳһ���ͻ��˴���һ��sessionʱ
���������ȼ������ͻ��˵��������Ƿ��Ѱ�����һ�� Session ID���������ֱ��ʹ�ã�����������һ��session,
��������һ��Session ID,Session ID���ظ��ֲ������ҳ�����

##### session::���䷽ʽ

cookie����

url����

�������ֶδ���

##### cookie��session����

- �洢λ�ã�Cookie �����ڿͻ��ˣ�Session �����ڷ���ˣ�
- ��Ч�ڣ�Cookie ���Դ洢�ܳ�ʱ�䣬Session ֻ�ܴ�����һ�λỰ�У�������ر�֮�� Session ��ʧЧ�ˣ�
- ��ȫ�ԣ�Cookie �洢�ڿͻ������ױ���ȡ�������ã�Session �ڷ���˱Ƚϰ�ȫ��
- �洢��С��Cookie �ܴ洢 4K �����ݣ�Session �ϴ�
- ��ȡ��ʽ��Cookie ��ֻ�ܱ��� ASCII �ַ��������������ȡ Unicode �ַ����߶��������ݣ������Ƚ��б��롣Session ���ܹ���ȡ�κ����͵����ݣ�
- ������ѹ����Session �Ǵ洢�ڷ���˵ģ��޴󲢷���ʱ���ʹ��������Դ���������Cookie �򲻴��ڴ����⣻
#### 12js�е�new
1. ������һ������
2. �´����Ķ����������__proto__�������������������캯����ԭ�Ͷ��� ��
3. ��this
4. �����¶���
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
#### 13js���������͵��ж�
1. typeof,�жϳ���null
2. Object.prototype.tostring.call()��ֵ��9��Number,Function,String,Boolean, Object,Array,Null,RegExp,Date
- ��Object.prototype.tostring.call()����tostring��ԭ��toStringΪObject��ԭ�ͷ�������Array ��function��������ΪObject��ʵ��������д��toString��������ͬ�Ķ������͵���toString����ʱ�����õ��Ƕ�Ӧ����д֮���toString������������ȥ����Object��ԭ��toString���������Բ���obj.toString()���ܵõ���������ͣ�ֻ�ܽ�objת��Ϊ�ַ������͡�
3. constructor/instanceof����
- �����������Ͳ�����constructor/instanceof�����
- ���ܼ������������ͣ���instanceof����ʱ��,ֻҪ��ǰ���������ʵ����ԭ������(����ͨ��ԭ����proto�ҵ���),�������Ľ������true
##### typeof
1. typeof���ڻ������ͣ�����null��������ʾ��ȷ������

2. typeOf���ڶ��󣬳��˺���������ʾobject

3. ����null��˵��Ȼ�ǻ����������ͣ����ǻ���ʾobject,���Ǵ��ںܾõ�bug

4. ��ȡ��ȷ���������Ϳ���ͨ��Object.prototype.tostring.call()���Ի�ȡ�ַ�����
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
instanceof ������ȷ���ж϶�������ͣ���Ϊ�ڲ�������ͨ���ж϶����ԭ�������ǲ������ҵ����͵� prototype
```
console.log(1 instanceof Number)
console.log("asd" instanceof String)
console.log([] instanceof Array)
console.log({} instanceof Object)
```
##### js�ж��������ͷ���
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
#### 13js�е�class
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
#### 14js�е��������
##### ������ʽ
1. ��������ʽ
2. ͨ�����캯����ʽ��new Object��
3. ������ʽ
4. class��ʽ
5. ������ʽ
6. ԭ�ͷ�ʽ
```
// 1ͨ��new Object()����
var obj1 = new Object()
obj1.name = "wulitian"
obj1.age = 28
obj1.getName = function () {
    console.log(this.name)
}

// 2��������ʽ
var obj2 = {
    name: "wulitian",
    age: 30,
    getName: function () {
        console.log(this.name)
    }
}

// 3������������
function obj3(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function () {
        return this.name;
    }
}

// 4class�ؼ��ִ���
class obj4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = function () {
            return this.name;
        }
    }
}

// 5������ʽ
function obj5() {
    const object = new Object();
    object.name = 'wulitian';
    object.age = 28;
    object.getName = function () {
        return this.name;
    }
    return object
}

// 6ԭ�ͷ�ʽ
function obj6() {
}

obj6.prototype.name = 'wulitian';
obj6.prototype.age = 28;
obj6.prototype.getName = function () {
    return this.name;
}
```

##### ����Ĳ���

1. ��ȡ����obj.name

2. �������obj.name

3. ɾ������delete obj.name

4. ѭ������ for in ѭ����ö�ٵĵ�����
```
var obj = {
  name: "why",
  age: 18
}

// ��ȡ����
console.log(obj.name)

// �����Ը�ֵ
obj.name = "wulitian"
console.log(obj.name)

// ɾ������
delete obj.name
console.log(obj)

// ����: ������ĳһ�����Ա���ֵ/������ĳ�����Ա�ɾ��/������ĳЩ�����ڱ���ʱ����������
// ��������
for (var key in obj) {
  console.log(key)
}
```

##### ��������defineProperty
1. ��ö�� enumerable
2. ��д writable
3. ������ configurable
4. get/set ����ֵ����
```
var obj = {
    name: "wulitian",
    age: 18,
}

Object.defineProperty(obj, "age", {
    enumerable: true,//��ö��
    writable: true,//��д
    configurable: true,//����ɾ���͸�ֵ
    value: 28//��ǰ����ֵ
})

console.log(obj)

// ��������������Ĭ��ֵΪ
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
// ���������������Ը�ֵ��ȡ���̵Ķ���
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
        enumerable: true,//��ö��
        writable: true,//��д
        configurable: true,//����ɾ���͸�ֵ
        value: 28//��ǰ����ֵ
    },
    age:{
        enumerable: true,//��ö��
        get: function () {
            return this._age
        },
        set: function (value) {
            this._age = value
        }
    }
})
// ��ȡ��������
console.log(Object.getOwnPropertyDescriptor(obj2,'age'))
console.log(Object.getOwnPropertyDescriptors(obj3))
```
##### Object���캯�����÷���
//��������������
Object.preventExtensions()
//����ɾ������
Object.seal()
//�������޸�����
Object.freeze()
```
var obj = {
    name: 'wulitian',
    age: 28
}

// 1.��ֹ����µ�����
Object.preventExtensions(obj)
obj.height = 2
console.log(obj)

// 2.��ֹɾ������
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

// 3.��ֹ�޸�����
Object.freeze(obj)

obj.name = "WULITIAN"
console.log(obj.name)
```
#### 15js�еļ̳�
##### ԭ�ͼ̳�

1. ˵��������ʵ����Ϊ����ԭ�͡�

2. �ŵ㣺������ʵ�֣������������ʵ�����������඼�ܷ��ʡ�

3. ȱ�㣺�޷�ʵ�ֶ�̳С���������ʵ��ʱ���������๹�캯���д�������

##### ���ù���̳�

1. ˵�������ø��๹�졣

2. �ŵ㣺��������๹�캯�����๹�캯���д��ݲ���������ʵ�ֶ�̳У�call����apply������ࣩ��

3. ȱ�㣺�������ڹ��캯���ж��壬�޷����ã����ܼ̳�ԭ������/������ֻ�ܼ̳и����ʵ�����Ժͷ�����

##### ԭ�Ͷ���+������ϼ̳�

1. ˵��������ʵ����Ϊ����ԭ�� + ���ø��๹�졣

2. �ŵ㣺�������Ը��ã����Լ̳����Ժͷ��������ҿ��Լ̳�ԭ�͵����Ժͷ�����

3. ȱ�㣺���ڵ��������θ��࣬���Բ���������ʵ����

##### ԭ��ʽ�̳У�ʵ���̳У�

1. ˵������������ڷ��ظ���ʵ������

2. �ŵ㣺�򵥣���ʵ�֡�

3. ȱ�㣺���ܶ�̳С�

##### �����̳�

1. ˵���������ԭ��ָ����ԭ�Ͳ����ֶ����ԡ�

2. �ŵ㣺������ԭ��֮�������

3. ȱ�㣺ԭ�����̳ж��ʵ����������������ָ����ͬ�����ڴ۸ĵĿ��ܡ��޷����ݲ�����

##### �������+������ϼ̳�

1. ˵���������ԭ��ָ����ԭ�Ͳ����ֶ�����+���ù��졣

2. �ŵ㣺���������ķ���ʹ�����ġ�

3. ȱ�㣺����û��ȱ�㡣

##### �����̳�

1. ˵������������ʵ�����ԡ�

2. �ŵ㣺֧�ֶ�̳С�

3. ȱ�㣺Ч�ʽϵͣ��ڴ�ռ�øߣ���ΪҪ������������ԣ����޷���ȡ���಻��ö�ٵķ���������ö�ٷ���������ʹ��for in ���ʵ�����

##### es6�̳�

1. ˵��������es6�йؼ���extends��

2. �ŵ㣺�ٷ�����ġ�

3. ȱ�㣺���ޡ�
```
//�������
function Car(name) {
    this.name = name;
    this.run = function(){
        console.log("����");
    }
}

Car.prototype.getName = function () {
    console.log("����")
}

// ԭ�ͼ̳�
!(function () {
    function Bc(){}
    Bc.prototype = new Car("����")
    let bc = new Bc();
    bc.getName();
})()

// ������ü̳�
!(function () {
    function Bc(name){
        Car.call(this,name);
    }
    let bc = new Bc("����");
    console.log(bc.name);
    bc.run();
})()

// ԭ�ͼ̳�+������ü̳�
!(function () {
    function Bc(name){
        Car.call(this,name);
    }
    Bc.prototype = new Car("����")
    let bc = new Bc("����");
    console.log(bc.name);
    bc.run();
})()

// ԭ��ʽ�̳�
!(function () {
    function Bc(name){
        return new Car(name);
    }
    let bc = new Bc("����");
    console.log(bc.name);
    bc.getName();
})()

// �����̳�
!(function () {
    function Bc(){}
    function obj(){}
    obj.prototype = Car.prototype;
    Bc.prototype = new obj();
    let bc = new Bc();
    console.log(bc)
    bc.getName()
})()

// ������ϼ̳�
!(function () {
    function Bc(name){
        Car.call(this,name);
    }
    function obj(){}
    obj.prototype = Car.prototype;
    Bc.prototype = new obj();
    Bc.prototype.constructor = Bc;
    let bc = new Bc("����");
    console.log(bc.name);
    bc.run();
    bc.getName();
})()

// �����̳�
!(function () {
    function Bc(){}
    let car = new Car("����");
    for(let p in car){
        Bc.prototype[p] = car[p];
    }
    let bc = new Bc();
    console.log(bc.name);
    bc.run();
    bc.getName();
})()

// es6�̳�
!(function () {
    class Bc extends Car{
        constructor(props) {
            super(props);
        }
    }

})()
```
#### 16js�е�ԭ��
1. Object �����ж���İְ֣����ж��󶼿���ͨ�� __proto__ �ҵ���
2. Function �����к����İְ֣����к���������ͨ�� __proto__ �ҵ���
3. Function.prototype �� Object.prototype ����������Ķ������������������������������������������������ͨ�������� new ������
4. Object.prototype.__proto__ָ��null��
5. ���еĶ���(���󣬺���)����__proto__����(��ʽԭ��)��ָ����ö���Ĺ��캯����ԭ�͡�
6. ֻ�к���function�ž���prototype����(��ʽԭ��)�����������һ��ָ�룬ָ��һ����������������;���ǰ�������ʵ����������Ժͷ��������ǰ�����������ԭ�Ͷ��󣩡�ԭ�Ͷ���Ҳ��һ�����ԣ�����constructor��������԰�����һ��ָ�룬ָ��ԭ���캯����
7. ������ prototype ��һ������Ҳ����ԭ�ͣ������ __proto__ ָ��ԭ�ͣ� __proto__ �������ԭ���������������ԭ����
```
// ���о�Ϊtrue
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
#### 17js�е���ǳ����
1.�������
- ǳ������ԭʼ����Ϊֵ���ݣ���������Ϊ���ô���
- ���������Ԫ�ػ�������ȫ������ԭ������ȫ���룬�޸��¶��󲻻�Ӱ��ԭ����
2.ǳ������ֻ����һ�㣬���˶��󿽱������������ͣ���������ֱ�Ӹ�ֵ��
- ѭ�����������ֱ�Ӹ���
- Object.assign() ���������ֻ����һ�����ʵ�������
- {...obj} [...arr] Array.prototype.concat() Array.prototype.slice()
3.�����������㣩
- JSON.parse(JSON.stringify(obj)) �׶ˣ����������constructor,������ʲô������Object������ֻ��ת��JSON��ʽ���� Function ����Symbol��ת������
- Object.create(obj)
- �ݹ��ֶ���ֵ
  ˼·�ǣ����ѭ����������ʹ��weakMap,�������JS�������ݽṹ��Array��Map��Set��Object�������������ͨ��new source.constructor(source)ֱ��������ֵ����Щ���������򣬺������ȵ�
```
// JS����ܽ�JS��ԭ��������֧�������Object.assign��{...obj}������ǳ�������������ǽ������ʹ��JSʵ�������JSON.sringify �� JSON.parse����JSʵ�������򵥵ķ����ˣ�ԭ������Ƚ�����ת��Ϊ�ַ�������ͨ��JSON.parse���½���һ������ �������ַ����ľ���Ҳ�ࣺܶ���ܸ���function������Symbolѭ�����ñ��� ��ͬ�����ûᱻ�ظ�����
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
##### ʵ��Object.create
```
Object.myCreate = function (proto, propertyObject = undefined) {
    console.log(typeof propertyObject)
    //�ж�һ�½ṹ�Ƿ������������Ľṹʡ�Բ����ص�
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
#### 18js�е�dom

##### js�е�dom����
1.����Ԫ��document.creatElement(��ǩ)

2.���Ԫ��parent.appendChild(childNode);

3.�ƶ�Ԫ��dom�в���Ԫ��appendChild��insertBefore�ǽ�dom�ڵ��ƶ���Ŀ�괦��dom����Ϊ�������ͣ�

4.���ƽڵ�oli.cloneNode(true)����true��ʾ��ȿ�¡���������false ��ʾǳ�ȿ�¡��ǳ�����������Ҳ���Ǹ��ƽڵ㼰�����ڵ�����ǳ�������ƽڵ㱾�����ƺ󷵻صĽڵ㸱�������ĵ����У�����û��Ϊ��ָ�����ڵ㡣��ˣ������ڵ㸱���ͳ�Ϊһ�����¶�����

5.ɾ���ڵ�parentNode.removeChild(childNode);

6.parentNode.replaceChild(newNode,oldNode);

7.parentNode.insertBefore(newEle, oldNode);

8.���ҽڵ�

- childNodes���ؽڵ㵽�ӽڵ��б�

- firstChild�����ؽڵ���׸��ӽڵ�;

- lastChild�����ؽڵ�����һ���ӽڵ�;

- nextSibling�����ؽڵ�֮�������ͬ���ڵ�;

- nodeName�����ؽڵ�����֣�����������;

- nodeType�����ؽڵ������;

- nodeValue�����û򷵻ؽڵ��ֵ������������;

- ownerDocument�����ؽڵ�ĸ�Ԫ�أ�document����;

- parentNode�����ؽڵ�ĸ��ڵ�;

- previousSibling�����ؽڵ�֮ǰ������ͬ���ڵ�;

- text�����ؽڵ㼰�������ı���IE���У�;

- xml�����ؽڵ㼰������XML��IE���У�;

9.�ڵ����ķ���

- appendChild()����ڵ���ӽڵ��б�Ľ�β����µ��ӽڵ�;

- cloneNode()�����ƽڵ�;

- hasChildNodes()���жϵ�ǰ�ڵ��Ƿ�ӵ���ӽڵ�;

- insertBefore()����ָ�����ӽڵ�ǰ�����µ��ӽڵ�;

- normalize()���ϲ����ڵ�Text�ڵ㲢ɾ���յ�Text�ڵ�;

- removeChild()��ɾ���������أ���ǰ�ڵ��ָ���ӽڵ�;

- replaceChild()�����½ڵ��滻һ���ӽڵ�;

10.IE6���з���

- selectNodes()����һ��XPath���ʽ��ѯѡ��ڵ�;

- selectSingleNode()�����Һ�XPath��ѯƥ���һ���ڵ�;

- transformNode()��ʹ��XSLT��һ���ڵ�ת��Ϊһ���ַ�����transformNodeToObject()��ʹ��XSLT��һ���ڵ�ת����Ϊһ���ĵ���

11.�����½ڵ㷽��

- createDocumentFragment() //����һ��DOMƬ��

- createElement() //����һ�������Ԫ��

- createTextNode() //����һ���ı��ڵ�

12.��ӡ��Ƴ����滻�����뷽��

- appendChild()

- removeChild()

- replaceChild()

- insertBefore() //�����е��ӽڵ�ǰ����һ���µ��ӽڵ�

13.���ҷ���

- getElementsByTagName() //ͨ����ǩ����

- getElementsByName() //ͨ��Ԫ�ص�Name���Ե�ֵ(IE�ݴ�������ǿ����õ�һ�����飬���а���id����nameֵ��)

- getElementById() //ͨ��Ԫ��Id��Ψһ��
- 
##### js��innerHTML��innerText��textContent��value��nodeValue���Ե�������ʲô��

1.innerHTML�Ǳ�ǩ�ڵ��ı�������html���롣

2.innerText��ǩ�ڵ��ı���������html���롣

3.textContent�����֧��innerText���ԣ����������

4.value��Ԫ�ص����ԡ�

5.nodeValue���ı��ڵ�textNode�����ԣ�DOM����

##### js�������js����һ��table
```
// js�������js����һ��table
    function createTable(row,column,id){
        for(let i = 0;i<row;i++){
            let tr = document.createElement("tr");
            for(let j = 0;j<column;j++){
                let td = document.createElement("td");
                td.innerText = "����"
                tr.appendChild(td);
            }
            document.getElementById(id).appendChild(tr);
        }
    }
    createTable(10,10,'table');
```
##### js���е�li��ɾ����
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
    // ����һ
    let ele = document.getElementsByTagName("li");
    for (let i = 0; i < ele.length; i++) {
        ele.item(i).parentNode.removeChild(ele.item(i))
        i--
    }

    // ������
    while (ele[0]) {
        ele[0].parentNode.removeChild(ele[0]);
    }
</script>
</body>
</html>
```
##### js�ҳ�name='A'
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
    // js�ҳ�name='A'
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
##### js�л�ȡstyleֵ
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
    // js�л�ȡstyleֵ
    function getStyleValue() {
        if(window.getComputedStyle){
            return window.getComputedStyle(document.getElementById('table'),null);//��׼�����
        }else{
            return document.getElementById('table').currentStyle;//currentStyle��IE������
        }
    }
    console.log(getStyleValue())
</script>
</body>
</html>
```
#### 19js�е��¼�
##### js���¼�����

1. dom0

- ��0��dom�¼�����ǩ��onclick��js��дonclick���¼��Ḳ��

2. dom2

- ����¼�����attachEvent(ie9����)��������1���¼�����,2��ʱ�䴦������֧�ֳ�ð�ݣ�ִ��˳�򣺴��ϵ���

- ����¼�����addEventListener��ie9�����ϣ���������1���¼�����,2��ʱ�䴦����,3��true��ʾ����׶Σ�falseð�ݽ׶����������������ð�ݷ�ʽ������ִ��˳�򣺴��µ���

- �Ƴ��¼�����detachEvent��ie9���£�

- �Ƴ��¼�����removeEventListener��ie9�����ϣ�

- ������1���¼�����,2��ʱ�䴦����,3��true��ʾ����׶Σ�falseð�ݽ׶����������������ð�ݷ�ʽ������

3. dom3��3��dom�¼���

�¼��磺UI�¼�(�û���ҳ�潻������scroll,load)�������¼�����ȡʧȥ����blur��focus������¼���ͨ�����ҳ��ִ�д���dbclick,mousewheel���ı��¼������ĵ��������ı�ʱ����textInput�������¼���ͨ�����̴���keydown,keypress���ϳ��¼��������ַ�ʱ����compositionstart���䶯�¼���dom�ṹ�任ʱ����DOMsubtreeModified��

4. dom�¼���

- �¼���ð��:һ��һ������ð֪�������html,document����ֹð���¼���������һ��stopPropagation()��return false,(��֯Ĭ����Ϊ�¼�������һ������preventDefault,�¼�Ŀ��srcElement) ��ie��ֹð��cancelBubble = true����֯Ĭ����ΪreturnValue = false,�¼�Ŀ��target��

- �¼��Ĳ���:��ð���෴

5. �¼�����event

- ���¼�����ʱ����ǰ����¼���һЩ������Ϣ���¼�Ԫ�أ��¼����͵ȣ��ᱻ������event�����У�ie8������event������Ϊwindow����

6. �¼�ѭ��event loop

1. ����HTML������script��ǩ����ʼִ�е�һ��������
2. �ں�����ִ��������������ִ�����е����������������󣬶�ʱ��������������ɺ󽫻ص��������������С�
3. �ں�����ִ��������΢�����ݲ�ִ�лص������Ƿ���΢��������С�
4. ������ִ����ɡ���ʼ����ִ��΢��������е�����
6. ΢����ִ�����������������΢���񣬴���ʽͬ�ϣ��ֱ������ԵĶ����С�
7. ΢���������պ󣬿�ʼִ�к���������е���һ������

- ������script,MacroTask��setTimeout ,setInterval,setImmediate ,I/O,UI rendering��

- ΢����MicroTask(promise.then,process.nextTick)

- ͬ������syncTask

- �첽����asyncTask

7. �¼�����ģʽ��

- �¼�����ԭ����������¼�ð�ݻ��ƣ�����ί�и�Ԫ�ش���������¼��Ķ��ע�ᣬ���ע�����Ƚϴ�Ӱ������

- �ŵ㣺��Լ�ڴ�ռ�ã������¼�ע�ᣬ�����Ӷ������������¼��󶨣�ɾ��Ҳ����Ҫ���

- ȱ�㣺���ܰ����е��¼������������׻��ң�ֻ������֧��ð�ݵ��¼���onclick

- �޷�������֧��ð�ݵ��¼��磺mouseleave & mouseenter,blur & focus

- ������¼���ð���ٲ��񣺱�׼���¼�ģ�����Ȳ����ð�ݣ�Ҫ��ʵ����ð�ݺ󲶻�����ò����ݻ�ִ�С�
##### js�¼�IE�������¼�������ʲô����
IE֧���¼�ð�ݣ�����¼�ð�ݻ��ƣ��¼��������
##### js�¼�����������
1.�¼�������

- ��׼������Ƿ���ʱ�Զ���������һ��ʵ�Σ�IE��ȫ�ֵ�window.event

- ���������e = e || window.event

2.�¼�Դ

- ��׼�������e.target��IE����e.srcElement

- ����취�ǣ�let target = e.target || e.srcElement

3.DOM�����¼���

- ��׼�������element.addEventListener��IE����element.attachEvent:

```
    if(ele.addEventListener){
        //....
    }else if(ele.attachEvent){
        //....
    }
```
- ��Ӧ�Ľ���󶨷�����removeEventListener �� IE�� detachEvent

4.��ֹ�¼�����

- ��׼�������e.stopPropagation��IE��e.cancelBubble = true�������

5.��ֹĬ����Ϊ

- ��׼�������e.preventDefault() ������IE��e.returnValue = false

6.������ĵ����������

- ��׼�������e.pageX��e.pageY����IE��֧�����������ԣ�����֧��clientX��clientY������������������������꣬����ͨ��scrollTop+clientY��ʵ�֡�

```
    e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+ e.clientX;
    e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+ e.clientY;
```
##### js�¼�ð�ݲ������
# js�¼�ð�ݲ������

1.�¼�ð�ݣ����¼�Դ���Ÿ���domһֱ����֪��document����ĳ��Ԫ�ص�ĳ�����¼�����ʱ����ô����Ԫ��ͬ����ʱ��Ҳ���������в��������¼����ᴫ���磺onfocus,onblur,onmouseenter,onmouseleave����

2.�¼����񣺴Ӹ�Ԫ�أ�html�����¼�Դ����ĳ��Ԫ��ĳ�����¼�������ʱ���ȴ�����Ԫ���¼���������Ԫ�ش���ֱ���¼�Դ

3.�¼�ί�л��������dom�������ƿ��Ը�document��һ���¼������¼��л�ȡ�¼�Դ�����ݲ�ͬ���¼�Դ����ͬ�����飨����һһ���¼���

```
    document.onclick=function(e){
        e=e||window.event;
        var  target=e.targrt||e.srcElement;//��ȡ�¼�Դ�ǹؼ���
        alert(target.nodeName);
        return false;
    }
```

4.DOM0 DOM2 DOM3
- DOM0Ϊ0��DOM
  һ���ڱ�ǩ��дonclick�¼�
  ������JSдonlicke=function����{}
  �ص㣺�¼��Ḳ��
- DOM2Ϊ2��DOM
  ����������ԭ������������������Ӻ��Ƴ��¼��������addEventListener()��removeEventListener()��IE�µ�DOM2�¼�ͨ��attachEvent�󶨺� detachEvent �����Ƴ��¼������ǽ��յĲ�����һ�����¼�ִ�й����Լ�д��������ͬ
  ע�⣺ IE9��֮��İ汾���ܼ��� addEventListener��
  addEventListener()��removeEventListener() ������������
  ��һ���������¼�������click, IE�� onclick����
  �ڶ����������¼������������
  ���������������true���ʾ�ڲ���׶ε��ã�Ϊfalse��ʾ��ð�ݽ׶ε��á�
  �������ǲ���Ҫ�����������������ΪIE8�����°汾ֻ֧��ð�����¼���
  addEventListener(��onclick��, handle):����ΪԪ����Ӷ���¼�������򣬴���ʱ�ᰴ�����˳�����ε��á�
  removeEventListener(��onclick��, handle):�����Ƴ�������ӵĺ�����
  �ص㣺�¼����Ḳ������ִ��
- DOM3Ϊ3��DOM  
  DOM3���¼���DOM2���¼��Ļ���������˸�����¼����ͣ�ȫ���������£�
- Ϊʲôû��DOM1���¼������أ���Ϊ1��DOM��׼�в�û�ж����¼���ص�����

| �¼����� | ˵��                                  | ����               |
| -------- | ------------------------------------- | ------------------ |
| UI�¼�   | ���û���ҳ���ϵ�Ԫ�ؽ���ʱ����        | load��scroll       |
| �����¼� | ��Ԫ�ػ�û�ʧȥ����ʱ����            | blur��focus        |
| ����¼� | ���û�ͨ�������ҳ��ִ�в���ʱ����    | dbclick��mouseup   |
| �����¼� | ��ʹ�������ֻ������豸ʱ����        | mousewheel         |
| �ı��¼� | �����ĵ��������ı�ʱ����              | textInput          |
| �����¼� | ���û�ͨ��������ҳ����ִ�в���ʱ����  | keydown��keypress  |
| �ϳ��¼� | ��ΪIME�����뷨�༭���������ַ�ʱ���� | compositionstart   |
| �䶯�¼� | ���ײ�DOM�ṹ�����仯ʱ����           | DOMsubtreeModified |

5.��ֹ�¼�ð��

```
    e=e||window.event;
        if(e.stopPropagation){
            e.stopPropagation();//���������
        }else{
            e.cancelBubble=true;//IE�����
        }
```

6.��ֹĬ���¼�
```
   e.preventDefault();
```
##### js���Ǹ�һ��domͬʱ����������¼���һ���ò���һ����ð�ݣ���ִ�м����¼���Ȼ�����ִ��ð�ݻ��ǲ���
�Ȳ��񣬺�ð�ݣ��κη����� w3c�¼�ģ�� �е��¼������ǽ��벶��׶Σ�ֱ���ﵽĿ��Ԫ�أ��ٽ���ð�ݽ׶Ρ�
#### 20js�е��첽
##### js��async��await
1. async await���첽д�����ս��������async������Generator�������﷨��,async����promise���󣬿���ʹ�á�then��ӻص���await����Ϻ���Ĵ��롣
2. async�ŵ�
- ����ִ����:���÷�ʽ����ͨ����һ����generator��Ҫ����ִ����then
- ���õ�����:async��await��Ƚ�*��yield
##### js��generator
1. generator�����ص���ǿ��Խ���������ִ��Ȩ����ִͣ��
2. ��������*�ű�ʾgenerator�������ڲ���yield�ؼ��֣�����ִ�к���ͨ������һ������ֱ�ӷ���return��ֵ���Ƿ���ָ�룬ͨ������ָ���next������������ִ��һ�����񷵻�ֵ�Ƕ������value��done��value��yieid���ʽ��ֵ��done��ʾ�Ƿ�ִ����ϡ�
##### js��promise
1. promise���������
- ����˻ص���������
- ����˴����������
- �����ͬʱͬʱ���ж���첽���������д����
2. promise��ʲô
- һ�� Promise �����ж������Ҫ��һ��ִ�о�������Ĵ��룬��������δ����У���ִ�������ص�������һ����ʾ�����ɹ���resolve����һ����ʾ����ʧ�ܣ�reject��
- promise�г�ʼ�� pending ״̬������ͨ������ resolve �� reject ����״̬ת��Ϊ resolved ���� rejected ״̬��״̬һ���ı�Ͳ����ٴα仯��������״̬�����ȶ�״̬
```
/*
  1. Promise ����һ���� ��ִ��������ʱ�� ��Ҫ����һ��ִ������ȥ ִ����������ִ��
  2. Promise ��������״̬ �ֱ�Ϊ �ɹ� fulfilled ʧ�� rejected �ȴ� pending
    pending -> fulfilled
    pending -> rejected
    һ��״̬ȷ���Ͳ��ɸ���
  3. resolve��reject��������������״̬��
    resolve: fulfilled
    reject: rejected
  4. then�����ڲ�����������ж�״̬ ���״̬�ǳɹ� ���óɹ��Ļص����� ���״̬��ʧ�� ����ʧ�ܻص����� then�����Ǳ�������ԭ�Ͷ����е�
  5. then�ɹ��ص���һ������ ��ʾ�ɹ�֮���ֵ thenʧ�ܻص���һ������ ��ʾʧ�ܺ��ԭ��
  6. ͬһ��promise���������then�����ǿ��Ա����ö�ε�
  7. then�����ǿ��Ա���ʽ���õ�, ����then�����Ļص������õ�ֵ������һ��then�����Ļص������ķ���ֵ
*/
const PENDING = 'pending'; // �ȴ�
const SUCCESS = 'success'; // �ɹ�
const REJECTED = 'rejected'; // ʧ��

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
            throw new Error('��������������')
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
            throw new Error('��������������')
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
        return reject(new TypeError('������ѭ������'))
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
//         reject('ʧ��')
//         // resolve('�ɹ�');
//     })
// }
//
// p2()
//     .then(value => console.log(value))
//     .catch(reason => console.log(reason))
```
#### 21js�е�script��ǩ����
##### scriptԪ��

1. ��ǩ����

- async����ѡ����ʾӦ��������ʼ���ؽű�����������ֹ����ҳ�涯��������������Դ��ȴ������ű����ء�ֻ���ⲿ�ű��ļ���Ч��
- charset����ѡ��ʹ��src����ָ���Ĵ����ַ�����������Ժ���ʹ�ã���Ϊ�������������ں�����ֵ��
- crossorigin����ѡ��������������CORS����Դ��Դ�������á�Ĭ�ϲ�ʹ��CORS��crossorigin= "anonymous"�����ļ����󲻱�����ƾ�ݱ�־��crossorigin="use-credentials"����ƾ�ݱ�־����ζ�ų�վ��������ƾ�ݡ�
- defer����ѡ����ʾ�ű������ӳٵ��ĵ���ȫ����������ʾ֮����ִ�С�ֻ���ⲿ�ű��ļ���Ч����IE7������İ汾�У������ڽű�Ҳ����ָ��������ԡ�
- integrity����ѡ������ȶԽ��յ�����Դ��ָ���ļ���ǩ������֤����Դ�����ԣ�SRI��Subresource Integrity����������յ�����Դ��ǩ�����������ָ����ǩ����ƥ�䣬��ҳ��ᱨ���ű�����ִ�С�������Կ�������ȷ�����ݷַ����磨CDN��Content Delivery Network�������ṩ�������ݡ�
- language��������������ڱ�ʾ������еĽű����ԣ���"JavaScript"��"JavaScript 1.2"��"VBScript"���������������������������ԣ���Ӧ����ʹ������
- src����ѡ����ʾ����Ҫִ�еĴ�����ⲿ�ļ���  ��Ƶ���� ͼ��������Ա aSINKz(1561821892@qq.com) ר�� ���ذ�Ȩ12 ��2�� HTML�е�JavaScript
- type����ѡ������language����ʾ������нű����Ե��������ͣ�Ҳ��MIME���ͣ������չ��������ֵʼ�ն���"text/javascript"������"text/javascript"��"text/ecmascript"���Ѿ������ˡ�JavaScript�ļ���MIME����ͨ����"application/x-javascript"��������type�������ֵ�п��ܵ��½ű������ԡ��ڷ�IE�����������Ч������ֵ����"application/javascript"��"application/ecmascript"��������ֵ��module����� ��ᱻ����ES6ģ�飬����ֻ����ʱ������в��ܳ���import��export�ؼ��֡�

2 ע������

- �����ڽű��г���console.log("</script>")�ᵼ�´�����ǰ������
- `<script src="example.js"/>`��html�в�������ʹ�á���xhtml�п��ԡ�
- �ڱ�ǩ�������ⲿ��Դ��ͬʱҲ��������д���룬�������ڴ��벻��ִ�С�
- Ϊ�˱�֤����js�ļ���Ԥ�ڵ��ļ����Լ���integrity���ԡ�
- ִ��˳�򣬴��ϵ�С����ִ�У����������defer��async�Ͳ�һ���ˣ���һ������ȵ�ǰһ��������ɲ��ܼ�����ʼ���͡�

2. ��ǩλ��

- Ӧ��jsͨ������body��󣬷�������ҳ�浼�°�����

2. �Ƴ�ִ�нű�

- ����defer����������������ص����ӳ�ִ�У����defer�ű���һ���ƳٵĽű����ڵڶ����ƳٵĽű�֮ǰִ�У���ñ�ֻ֤��һ���첽�ű����������Ҳ����ҳ��body���·�,��Ϊ��Щ��������ܺ���������ԣ���Ϊie8֮ǰ��֧�֡�

3. �첽ִ�нű�

- ����첽�ű����async�����ܱ�֤���ǵļ��ش����첽�ű���Ӧ���ڼ����ڼ��޸�dom��

4. ��̬���ؽű�

- ����ͨ����̬����script��ǩ����js�����ַ�ʽ�൱��async��ǣ��������ַ�ʽ�ᵼ�����ܽ��ͣ��������ַ�ʽ���ҳ��ǰ�����<link rel="preload" href="demo">����Ԥ���ء�

5. XHTML�еı仯

- ����ָ��type����text/javascript��������xhtml��ʹ�÷�����Ҫת�壬����ʹ��CDATA+ע����ʽ��
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

##### ���ڴ������ⲿ�ļ�

- ��ά���ԣ�һ��Ŀ¼����js�ļ�������ά����

- ���棺���ҳ�����һ��jsֻ�����һ�Σ�����ҳ����ظ��졣

- ����δ����http1,��http1.2�汾�����������http2�汾�в�ֶ���ļ����Ƹ���

##### �ĵ�ģʽ

- ����ģʽ

- ��׼ģʽ

- ׼��׼ģʽ

##### noscriptԪ��

���������֧�ֽű�����������ű����ص�ʱ�ͻ�ִ��noscript�ڵ����ݡ�
#### 22js�е�math
##### math�еĳ�������
1.Math.abs(number)����ֵ
2.Math.ceil(number)����ȡ��
3.Math.round(number)��������
4.Math.floor(number)����ȡ��
5.Math.random()�����0-1֮��ĸ�����
6.Math.max(number1,number2,...)���ֵ
7.Math.min(number1,number2,...)��Сֵ
8.Math.sqrt(number)��ƽ��
9.Math.pow(number1,number2)number2�η�
10.Math.sin(number)sinֵ
11.Math.cos(number)cosֵ
##### jsָ����Χ�������
```
 // ָ����Χ�������
    // �����һ�������ֵ���򲻰���
    function randomNum(first,last){
        return Math.round(Math.random()*(last-first+1)+first);
    }
    console.log(randomNum(1,20));
```
#### 23js�е��ַ���
##### js���ַ������õķ���
1.charAt ��ȡָ������λ�õ��ַ�
2.charCodeAt ��ȡָ������λ�õ��ַ���Ӧ��ASCII��ֵ
3.indexof/lastIndexof ��ȡĳ���ַ����ڵ�һ�Σ����һ�Σ�����λ�õ�������û�еĻ�����-1������ͨ�������������ַ������Ƿ����ĳһ���ַ���
4.toUpperCase/tolowerCase���ַ����е���ĸת��д|Сд��
5.split����ָ���ķָ�������һ���ַ�����ֳ����飬�������join��Ӧ��
6.substr��substr(n,m)������n��ʼ��ȡm���ַ����ѽ�ȡ�ַ�����һ���µ��ַ�����
7.substring��substring(n,m)������n��ʼ��ȡ������m����������m�������ҵ����ַ����س�һ���µ��ַ�����
8.slice��slice(n��m)��substring���÷�����˼һ����ֻ��slice����֧�ָ�����Ϊ���������ָ���������ʱ�����ַ����ĳ���+�������������磺ary.slice(-6,-2)����ʵ��ary.slice(ary.length-6,ary.length-2)
9.Replace��replace(��Ҫ�滻�����ַ���,���滻�ɵ����ַ���)�ַ������ַ��滻�ķ���������Ӧ��������ͳһ�Ľ����滻�������������ǻ���ϸ�Ľ���replace��ǿ��Ӧ�ã�
10.Match�������к�����ƥ�䵽�����ݶ����в��񣨲��ܲ���С�����е����ݣ�
11.trim�� ȥ���ַ�����ĩβλ�õĿհ��ַ��������ݣ�
##### js��replace�еļ���д��
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
##### js��trim���ݴ���
```
String.prototype.trim = function(){
    return this.replace(/^\s+/,'').replace(/\s+$/,'');
}
console.log(' 12312 '.trim())
```
##### js��ȥ�������ظ��ַ�
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
##### js���ַ�����ת
```
String.prototype.reverse = function(){
   return this.split('').reverse().join("")
}
console.log('abc'.reverse());
```
##### js���ַ���ת�շ�
```
let str = 'border-bottom-color';
let strRg = str.replace(/\-([a-z])/g, (val,val2)=>{
    return val2.toUpperCase()
})
console.log(strRg);
```
##### js�в��ҳ��������ַ�
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
#### 24js�е�����
##### js�����鳣�õķ���
es5

- �ı�����ķ�����push(),unshift(),pop(),shift(),splice(),sort(),reverse()

- ���ı�����ķ�����slice(),concat(),join(),indexOf(),lastIndexOf(),filter(),map(),every(),some(),forEach(),find(),findIndex(),includes()

1. push()������ĩβ��ӷ��س���

2. unshift()ǰ�����ײ���ӷ��س���

3. pop()��ɾ��β��ɾ�����ر�ɾ��Ԫ��

4. shift()ǰɾ���ײ�ɾ������ɾ����Ԫ��

5. splice()�޸�ɾ�������������ɾ������ɾ��Ԫ����ɵ�����

6. slice()���У�����������

7. concat()ƴ�ӣ��ϲ����鷵��������

8. join()ת�ַ��������ı�ԭ���飬����ת������ַ�

9. sort()���򣺰���ascii�����򣬷�������������

10. reverse()��ת�����صߵ��������

11. indexOf(ĳԪ�أ�startIndex) �����ҵ���indexû���ҵ�����-1,��startIndex��ʼ������ĳԪ���������е�λ�ã������ڣ��򷵻ص�һ��λ�õ��±�,���򷵻�-1

12. lastIndexOf()��indexOf()��ͬ���������ڴ�β�����ײ���ѯ

13. filter()���ˣ�������������������������Ԫ����ɵ�������

14. map() ��ʽ�����飺���������ʽ��ԭ���飬���ظ�ʽ���������

15. every()ȫ���㣺 �������ÿһ����и����ĺ�������ÿһ����� ture,�򷵻� true��

16. some()�������㣺�������ÿһ����и����ĺ�����������һ������� ture,�򷵻� true��

17. forEach()��������;�����жϣ�û�з���ֵ��

es6

1. find()���ҵ�һ��Ԫ�أ��ҵ������е�һ������������Ԫ�أ��Ҳ�������undefined

2. findIndex()���ҵ�һ�����������ص�һ�������������±꣬��ֹͣѰ��

3. includes()�������ж��Ƿ�������ز���

4. Array.isArray()�����жϣ��ж����Ƿ������鷵�ز���
##### js��������������������
1. �����������������ʲô�����������������󶼿������������ʣ�������length���ԣ���ͬ�������鲻�ܵ�������ķ�����

2. �����飺ӵ��length���ԣ�Ԫ�ر����ڶ����У�����ͨ���������ʣ�����û�����鷽��push,slice,indexOf

3. ��������󣺳�������arguments��document.getElementsByTagName()

4. ������ת�����飺Array.from(),Array.prototype.slice.call()
##### js������ƽ��ֵ
ƽ��ֵȥ��һ�������ȥ��һ����С����������������鷽��sort���򣬽������鷽��pop,shift,ȥ�����ֵ��Сֵ�����������join��������Ӻ�ͨ��evalִ�С�ʵ���������length�õ�ƽ����
##### js�����е����ֵ
```
//js���������ֵ
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
##### js����ȥ��
1.ԭ����ĵ�һ��Ԫ�طŵ��������У�������ԭ����Ƚϣ������ͬ�������������С�
2.����sort() �����������ڵıȽϣ������ͬ��������������
3.���ö�������Ψһ�ԣ����û�����������洢���µ�������
4.����indexOf
5.����lastIndexOf
6.����includes,����filter+includes,����forEach+includes,����reduce+includes
7.��������ԭ���ϵ�splice
8.����hasOwnProperty
9.����map
10.����ES6�е�set����
```
//js����ȥ��
let arr = ['1', '1', 3, 1, 4, 6, 4, 2, 9, 11, 4, '1', '20', '20', 30, '3'];

// 1.�������һλ�����������У�����ԭ����
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

// 2.��������sort()����֮��ǰ��Ƚ�(���������ʹ��ڲ�ͬʱ�ᵼ�²�׼)
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

// 3.���ö������Ե����ԣ����û�и����Դ���������
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

// 4.���������±�indexOf
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

// 5.��������lastIndexOf
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

// 6.����includes
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

// 7.����forEach+includes
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

// 8.����filter+includes
function fn8(oldArr) {
    let newArr = []
    oldArr.filter((e) => {
        return newArr.includes(e) ? '' : newArr.push(e)
    })
    console.log(newArr)
}

fn8(arr)

// 9.����reduce+includes
function fn9(oldArr) {
    let newArr = oldArr.reduce(function (prev, cur) {
        return prev.includes(cur) ? prev : [...prev, cur]
    }, [])
    console.log(newArr)
}

fn9(arr)

// 10.����splice
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

// 11.����hasOwnProperty
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

// 12.����map
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

// 13.����ES6�е�set
function fn13(oldArr) {
    let newArr = Array.from(new Set(oldArr));
    console.log(newArr)
}

fn13(arr)
```
##### js���鰴�մ�С����
```
// ���鰴�մӴ�С��˳������let arr=['90px','100px','10px','45px','30px'];
let arr = ['90px', '100px', '10px', '45px', '30px'];
arr.sort((a, b) => {
    a = parseInt(a);
    b = parseInt(b);
    return a - b
})
console.log(arr)
```
##### js���������ֻ�������
```
//js��������������������滻������
let a = ['Ҽ', '��', '��', '��', '��', '½', '��', '��', '��', 'ʰ', '��', 'Ǫ', '��', '��'];
let arr = ['Ҽ', '��', 3, 4, '��'];
let ss = arr.toString().replace(/\d/g, function (n) {
    return a[n];
})
console.log(ss);
```
##### jsת��һ����������Ϊfunction����
```
//jsת��һ����������Ϊfunction����
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
##### js����һ�����飬���б���Ķ���СдӢ���ַ���������Ҫ�������ճ��˵�һ����ĸ����ַ����ֵ�˳������
```
// js����һ�����飬���б���Ķ���СдӢ���ַ���������Ҫ�������ճ��˵�һ����ĸ����ַ����ֵ�˳������
// �� a С�� b���� a - b С���㣬�򷵻�һ��С�����ֵ�����齫�����������С�
// �� a ���� b���򷵻� 0��
// �� a ���� b, �� a - b �����㣬�򷵻�һ���������ֵ�����齫���ս������С�
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
##### js��1--100000�����֣����������������˳����ô�ҵ�������������
```
// js��1--10000�����֣����������������˳����ô�ҵ������������֣�
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
##### js��10000�²��ظ��������������ȡ5000���ظ���������β�����õĲ�ͬ��� 
```
// js��10000�²��ظ��������������ȡ5000���ظ���������β�����õĲ�ͬ���
// 1����һ������ķ����ܵķ�����ÿ��ȥ�������ֶ�Ҫͨ��ѭ������indexOf�ж��Ƿ����µ������У�
// 2���ڶ����Ǵ�10000�����������ȡһ�����ŵ�һ���µ������У�Ȼ��ɾ��������֣�����5000�ζ��ܱ�֤�����ظ���
// 3������ȥ�ص�˼�룬��10000�����ֶ����ɶ�����±꣬����ռ���ڴ�̫�ࣻ
// 4����ѷ����Ǵ�10000�����������ȡ��һ����Ȼ����������һ��Ԫ����䵽ȡ���Ŀ�ȱ�����������鳤�ȱ��9999������5000�μ��������Ŀ��Ҫ�󣻿�����spliceɾ�������е�һ��ͦ���׵ģ�ΪʲôҪ�������һ��Ԫ��������ȡ���Ŀ�ȱ�أ�����漰���ڴ��֪ʶ�����������ȥ�����ǵ�10�����֣���spliceɾ����10�����֣���ôʵ���ϼ������Ѻ���9990�����ֶ���ǰ�ƶ�һ����λ������ʱ�临�Ӷ��ر�ߣ�
// let arr = [];
// let newArr = []
// for (let i = 0; i <10000 ; i++) {
//     arr[i] = i;
// }
// for (let i = 0; i <5000 ; i++) {
//     let random = Math.round(Math.random()*arr.length-1)
//     newArr.push(arr[random]);
//     arr[random] = arr[arr.length-1];//���һ����ڵ�ǰҪɾ������Ŀ
//     arr.length = arr.length-1;//ɾ�����һ��
// }
// console.log(newArr);

// js��15��30֮������30����ƽ��ֵ��Χ��20��24֮��
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
#### 25js�е�ʱ��
##### js��ʱ�䷽��
1.getFullYear()��
2.getMonth()+1�´�0��ʼ
3.getDate()��
4.getDay()+1���ڣ���0��ʼ������
5.getHours()ʱ
6.getMinutes()��
7.getSeconds()��
8.getMilliSeconds����
##### js��ʱ�䷽��getTime
getTime() �����ɷ��ص��£���ĳһʱ��㣩�� 1970 �� 1 �� 1 ��֮��ĺ�������(���ڵ���ʱ)
##### js��setInterval��setTimeout
1.window.setInterval(fn,1000);//ÿ��1000msִ��һ��fn����,����ֹͣ��
2.window.setTimeout(fn,1000);//1000ms��ֻ����һ��fn��������Ȼֻ����һ�Σ����Եݹ��������ģ��setInterval������
```js
window.setTimeout(fn, 1000 * 1)
function fn () {
  console.log(Date.now());
  fn();
}
```
##### js��ʵ����ʱ��
1. new Date("month dd,yyyy hh:mm:ss");
2. new Date("month dd,yyyy");
3. new Date(yyyy,mth,dd,hh,mm,ss);
4. new Date(yyyy,mth,dd);
5. new Date(ms);
ע�����һ����ʽ��������ʾ������Ҫ������ʱ���GMTʱ��1970��1��1��֮�����ĺ����������ֺ����ĺ������£�
month:��Ӣ�ı�ʾ�·����ƣ���January��December
mth:��������ʾ�·ݣ���0�����£��������������£�
dd:��ʾһ�����еĵڼ��죬��1��31
yyyy:��λ����ʾ�����
hh:Сʱ������0����ҹ����23����11�㣩
mm:����������0��59������
ss:��������0��59������
ms:��������Ϊ���ڵ���0������
```
let date = new Date(2019, 1,30,1,1,1);
let date2 = new Date('2019-01-01, 01:01:01');
let date3 = new Date('01 01 2019, 01:01:01');
let date4 = new Date('01 01 2019');
let date5 = new Date(2000);
console.log(date5)
```
#### 26js����������
1.��������:�����������ͣ�������������

2.������������

es5��

- String Number Boolean Null Undefined

es6:

- BigInt  Symbol

- BigInt:������ȶ�ʧ����ֱ�������ֺ����n

- Symbol:��������һ��Ψһ��ʶ���������������Ψһ������Symbol �������͵���һ�ص��������ԣ�for������in��object.keys() ���ܷ���

3.������������

Object function

4.��������������Ҫ������Ǵ洢λ�ò�ͬ

�����������ʹ洢��ջ�У�Undefined��Null��Boolean��Number��String��BigInt ��Symbol ��

Ӧ���������ʹ洢�ڶ��У���������ͺ�����
#### 27js�е�����ת��
1. תboolean:���ж�ʱ����ˣ�undefined�� null�� false�� NaN�� ''�� 0�� -0����ת����true
2. ����ת�����������ͣ����Ȼ����valueOf,Ȼ�����toString,������дSymbol.toPrimitive ���÷�����ת��������ʱ�������ȼ���ߡ�
#### 28js�е�����
##### js������ʽ

1.���壺������ʽ�����ַ����γɵ�����ģʽ��/������ʽ����/���η�(��ѡ)��

var patt=new RegExp(pattern,modifiers);

���߸��򵥵ķ�ʽ:

var patt=/pattern/modifiers;

```
var re = new RegExp("\\w+");
var re = /\w+/;
```
2.������ģʽ��

|  ���η�   | ����  |
|  ----  | ----  |
| i  | ִ�жԴ�Сд�����е�ƥ�� |
| g  | ִ��ȫ��ƥ�䣨��������ƥ��������ҵ���һ��ƥ���ֹͣ�� |
| m  | ִ�ж���ƥ�� |

3.������ʽ���η���

���������ڲ���ĳ��Χ���ַ���

| ���ʽ             | ����                               |
| ------------------ | ---------------------------------- |
| [abc]              | ���ҷ�����֮����κ��ַ���         |
| [^abc]             | �����κβ��ڷ�����֮����ַ���     |
| [0-9]              | �����κδ� 0 �� 9 �����֡�         |
| [a-z]              | �����κδ�Сд a ��Сд z ���ַ��� |
| [A-Z]              | �����κδӴ�д A ����д Z ���ַ��� |
| [A-z]              | �����κδӴ�д A ��Сд z ���ַ��� |
| [adgk]             | ���Ҹ��������ڵ��κ��ַ���         |
| [^adgk]            | ���Ҹ�����������κ��ַ���         |
| (red\|blue\|green) | �����κ�ָ����ѡ�               |

Ԫ�ַ���ӵ�����⺬����ַ���

| Ԫ�ַ� | ����                                        |
| ------ | ------------------------------------------- |
| .      | ���ҵ����ַ������˻��к��н�������          |
| \w     | �������֡���ĸ���»��ߡ�                    |
| \W     | ���ҷǵ����ַ���                            |
| \d     | �������֡�                                  |
| \D     | ���ҷ������ַ���                            |
| \s     | ���ҿհ��ַ���                              |
| \S     | ���ҷǿհ��ַ���                            |
| \b     | ƥ�䵥�ʱ߽硣                              |
| \B     | ƥ��ǵ��ʱ߽硣                            |
| \0     | ���� NULL �ַ���                            |
| \n     | ���һ��з���                                |
| \f     | ���һ�ҳ����                                |
| \r     | ���һس�����                                |
| \t     | �����Ʊ����                                |
| \v     | ���Ҵ�ֱ�Ʊ����                            |
| \xxx   | �����԰˽����� xxx �涨���ַ���             |
| \xdd   | ������ʮ�������� dd �涨���ַ���            |
| \uxxxx | ������ʮ�������� xxxx �涨�� Unicode �ַ��� |

���ʣ�

| ����     | ����                                                         |
| -------- | ------------------------------------------------------------ |
| [n+]     | ƥ���κΰ�������һ�� n ���ַ��� ���磬/a+/ ƥ�� "candy" �е� "a"��"caaaaaaandy" �����е� "a"�� |
| [n*]     | ƥ���κΰ���������� n ���ַ��������磬/bo*/ ƥ�� "A ghost booooed" �е� "boooo"��"A bird warbled" �е� "b"�����ǲ�ƥ�� "A goat grunted"�� |
| [n?]     | ƥ���κΰ��������һ�� n ���ַ��������磬/e?le?/ ƥ�� "angel" �е� "el"��"angle" �е� "le"�� |
| [n{X}]   | ƥ����� X �� n �����е��ַ��������磬/a{2}/ ��ƥ�� "candy," �е� "a"������ƥ�� "caandy," �е����� "a"����ƥ�� "caaandy." �е�ǰ���� "a"�� |
| [n{X,}]  | X ��һ����������ǰ���ģʽ n ������������ X ��ʱƥ�䡣���磬/a{2,}/ ��ƥ�� "candy" �е� "a"������ƥ�� "caandy" �� "caaaaaaandy." �����е� "a"�� |
| [n{X,Y}] | X �� Y Ϊ��������ǰ���ģʽ n ������������ X �Σ����� Y ��ʱƥ�䡣���磬/a{1,3}/ ��ƥ�� "cndy"��ƥ�� "candy," �е� "a"��"caandy," �е����� "a"��ƥ�� "caaaaaaandy" �е�ǰ������ "a"��ע�⣬��ƥ�� "caaaaaaandy" ʱ����ʹԭʼ�ַ���ӵ�и���� "a"��ƥ����Ҳ�� "aaa"�� |
| [n$]     | ƥ���κν�βΪ n ���ַ�����                                  |
| [^n]     | ƥ���κο�ͷΪ n ���ַ�����                                  |
| [?=n]    | ƥ���κ�������ָ���ַ��� n ���ַ�����                      |
| [?:n]    | �Ƿǲ�����ƥ�䣬��ʹƥ�䲻���������������Ҫ��������д��ȥ����Ҳ��Ӱ����ȷ���                      |
| [?!n]    | ƥ���κ����û�н���ָ���ַ��� n ���ַ�����                  |

RegExp���󷽷�

| ����       | ����                                                         |
| ---------- | ------------------------------------------------------------ |
| [compile]  | �� 1.5 �汾���ѷ����� ����������ʽ��                       |
| [exec]     | �����ַ�����ָ����ֵ�������ҵ���ֵ����ȷ����λ�á� ���д��ƥ��Ľ�������δ�ҵ�ƥ�䣬�򷵻�ֵΪ null�� |
| [test]     | �����ַ�����ָ����ֵ������ true �� false��                   |
| [toString] | ����������ʽ���ַ�����                                     |

֧�������String����

| ����      | ����                                     | FF   | IE   |
| --------- | ---------------------------------------- | ---- | ---- |
| [search]  | ������������ʽ��ƥ���ֵ�������׸����� | 1    | 4    |
| [match]   | �ҵ�һ������������ʽ��ƥ�䡣         | 1    | 4    |
| [replace] | �滻��������ʽƥ����Ӵ���             | 1    | 4    |
| [split]   | ���ַ����ָ�Ϊ�ַ������顣               | 1    | 4    |

RegExp��������

| ����          | ����                                               |
| ------------- | -------------------------------------------------- |
| [constructor] | ����һ���������ú�����һ������ RegExp �����ԭ�͡� |
| [global]      | �ж��Ƿ������� "g" ���η�                          |
| [ignoreCase]  | �ж��Ƿ������� "i" ���η�                          |
| [lastIndex]   | ���ڹ涨�´�ƥ�����ʼλ��                         |
| [multiline]   | �ж��Ƿ������� "m" ���η�                          |
| [source]      | ����������ʽ��ƥ��ģʽ                           |
##### js�ж��ַ��������ֺ���ĸ���
```
// js�ж��ַ��������ֺ���ĸ���
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
##### jsȥ���ַ����������ظ��ĵط�
```
// jsȥ���ַ����������ظ��ĵط�
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

// js�ַ���ȥ��
console.log(removeRepetition('345345333'))
let newStr = [...new Set('345345333')].join().replace(/\,/g, '')
console.log(newStr)
```
##### jsʵ��ǧλ�ָ���
```
// jsʵ��ǧλ�ָ���
// ����һ������ǰ���������Ϊ��һ�飬������������Ϊ�ڶ��飬�ڶ������ɶ����λ��������϶��ɵģ�������Ҫƥ�䲶�񣬵���ÿ����λ������Ҫƥ�䲶�����Լӣ�����
// RegExp.$1��ȡ��һ�����飬RegExp.$2��ȡ�ڶ������顣
// match����ƥ�䵽�����ݣ����������͡�
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
##### js�����ж϶Գ���
```
// jsдһ��������ʽ�ж��ַ����Ƿ��ǶԳ���
// ���\1  \2......  ��Ҫ��������ʽ����()һ��ʹ��
// \1��ʾ�ظ������һ��Բ������ƥ�䵽������
// \2��ʾ�ظ�����ڶ���Բ������ƥ�䵽������
let str = 'Woow';
let reg = /^([a-z])([a-z])\2\1$/i;
if (reg.test(str)) {
    console.log("�Գ�")
} else {
    console.log("�ǶԳ�")
}
```
##### js������ֽⳬ����
```
// js������ֽⳬ����
// �ϴ�ƥ��Ľ�����ɷ��� RegExp.exec() �� RegExp.test() �ҵ��ģ����Ƕ��� lastIndex ������ָ��λ����Ϊ�´μ�������ʼ�㡣�������Ϳ���ͨ��������������������������һ���ַ����е�����ƥ���ı���
// �������ǿɶ���д�ġ�ֻҪĿ���ַ�������һ��������ʼ���Ϳ��Զ����������á������� exec() �� test() ��Ҳ�Ҳ�������ƥ����ı�ʱ�����ǻ��Զ��� lastIndex ��������Ϊ 0��
// ��Ҫ��������б�־ g �Ͳ���ʾȫ��ģʽ�� RegExp ������ʹ�� lastIndex ���ԡ�
let str = '<a href="https://www.aaa.com/">������1</a><a href="https://www.bbb.com/?age=20">������2</a>';
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
##### ������ʽ�еĹ��ڣ��ļ����÷�
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
#### 29js�е�ѭ��
1. for:����ѭ��
2. for in������ѭ�� ���д���ж�obj[i].hasOwnProperty(i)��ΪҲȥԭ��������
3. for of��es6�� ����������� Arrays�����飩, Strings���ַ�����, Maps��ӳ�䣩, Sets�����ϣ��ȿɵ���(Iterable data)�����ݽṹ
4. while������ѭ��
5. do while������ѭ��
6. forEach������ѭ�� forEachѭ����ѭ��������ÿһ��Ԫ�ز���ȡ������ û�з���ֵ�����ǿ�ƽ�����Ҫtry catch
7. map������ѭ�� ��������һ�������飬�����е�Ԫ��Ϊԭʼ����Ԫ�ص��ú���������ֵ��
8. filter������ѭ�� ������ Array �������÷��������᷵��ͨ���˵�Ԫ�أ����ı�ԭ�������顣
9. some������ѭ�� �������ڼ�������е�Ԫ���Ƿ�����ָ�������������ṩ��,���� boolean ֵ�����ı�ԭ���顣
10. every������ѭ�� �������ڼ����������Ԫ���Ƿ񶼷���ָ��������ͨ�������ṩ�������� boolean ֵ�����ı�ԭ���顣
11. reduce������ѭ�� ��������һ��������Ϊ�ۼ����������е�ÿ��ֵ�������ң���ʼ���������ռ���Ϊһ��ֵ
12. reduceRight������ѭ�� ���Ǵ������ĩβ����ǰ��ʼ����
```
// 1.forѭ��
    // let arr = [1,2,3];
    // for (let i=0; i<arr.length; i++){
    //     console.log(i,arr[i])
    // }
    // 2.for in ѭ��
    //for in ѭ����Ҫ���ڱ�����ͨ����i �������� key ֵ��obj[i] �����Ӧ�� value,����������������ʱ�򣬶��������Ҳ�ܴﵽͬ����Ч���������㲻Ҫ��ô���������з��յģ���Ϊ i ���Ϊ�ַ�����ʽ��������������Ҫ�������±꣬����ζ����ĳЩ����£��ᷢ���ַ������㣬�������ݴ��󣬱��磺'52'+1 = '521' ������������Ҫ�� 53��
    // ���� for in ѭ����ʱ�򣬲���������������ԣ������ҵ� prototype ��ȥ�����������ѭ�����ڼ�һ���жϣ����� obj[i].hasOwnProperty(i)�������ͱ��������̫�಻��Ҫ�����ԡ�
    // let obj = {name:'zhou',age:'**'}
    // for(let i in obj){
    //     if(obj[i].hasOwnProperty(i)){
    //         console.log(i,obj[i])
    //     }
    // }
    // 3��while ѭ��
    // cars=["BMW","Volvo","Saab","Ford"];
    // var i=0;
    // while (cars[i])
    // {
    //     console.log(cars[i] + "<br>")
    //     i++;
    // };

    // 4��do while ѭ��
    // do while ѭ���� while ѭ����һ�����壬������ִ��һ�β�����Ȼ��Ž��������жϣ��� true �Ļ��ټ���ִ�в������� false �Ļ�ѭ��������
    // let i = 3;
    // do{
    //     console.log(i)
    //     i--;
    // }
    // while(i>0)

    //5. Array forEach ѭ��
    // forEachѭ����ѭ��������ÿһ��Ԫ�ز���ȡ������ û�з���ֵ�� ���Բ���֪�����鳤��,��������������ֻ�е�һ���Ǳ���ģ�����ǰ�±��µ� value��
    // ������ע�⣬forEach ѭ��������Ԫ�ص������֮ǰ�ǲ���ֹͣ�ģ���û�� break ��䣬��������Ҫֹͣ�����Գ��� try catch ��䣬������Ҫǿ���˳���ʱ���׳�һ�� error �� catch ��׽����Ȼ���� catch ���� return������������ֹѭ���ˣ�����㾭�����������������Զ���һ�������� forEach ��������Ŀ��
    // let arr = [1,2,3];
    // arr.forEach(function(i,index){
    //     console.log(i,index)
    // })

    // 6.Array map()����
    // map() ��������һ�������飬�����е�Ԫ��Ϊԭʼ����Ԫ�ص��ú���������ֵ��
    // ע�⣺map �� forEach ��������ֻ�������������飬��������������ͨ����
    // let arr = [1,2,3];
    // let tt = arr.map(function(i){
    //     console.log(i)
    //     return i*2;
    // })
    // console.log(tt);

    // 7��Array filter() ����
    // filter ������ Array �������÷��������᷵��ͨ�����˵�Ԫ�أ����ı�ԭ�������顣
    // let arr = [1,2,34,5];
    // var newArr = arr.filter(function(i){
    //     return i>1;
    // })
    // console.log(newArr)

    // 8��Array some() ����
    // some() �������ڼ�������е�Ԫ���Ƿ�����ָ�������������ṩ��,���� boolean ֵ�����ı�ԭ���顣
    // let arr = [1,2,34,5];
    // var newArr = arr.some(function(i){
    //     return i==2;
    // })
    // console.log(newArr)

    // 9��Array every() ����
    // every() �������ڼ����������Ԫ���Ƿ񶼷���ָ��������ͨ�������ṩ�������� boolean ֵ�����ı�ԭ���顣
    // let arr = [1,2,34,5];
    // var newArr = arr.every(function(i){
    //     return i>0;
    // })
    // console.log(newArr)

    // 10��Array reduce()����
    // reduce() ��������һ��������Ϊ�ۼ����������е�ÿ��ֵ�������ң���ʼ���������ռ���Ϊһ��ֵ
    // let arr = [1,2,3,100];
    // let ad = arr.reduce(function(i,j){
    //     return i+j;
    // })
    // console.log(ad);

    // 11��Array reduceRight()����
    // reduceRight()����,�� reduce() ������һ���ģ����Ǵ������ĩβ����ǰ��ʼ���㡣
    // let arr = [1,2,3,100];
    // let ad = arr.reduceRight(function(i,j){
    //     return i+j;
    // })
    // console.log(ad);

    // 12��for of ѭ��
    // for of ѭ���� Es6 ����������䣬������� for in �� forEach������������� Arrays�����飩, Strings���ַ�����, Maps��ӳ�䣩, Sets�����ϣ��ȿɵ���(Iterable data)�����ݽṹ,ע�����ļ����ԡ�
    // let arr = ['name','age'];
    // for(let i of arr){
    //     console.log(i)
    // }
    // console.log(arr)
```
#### 30js�еļ�ͷ����
1. û��this
2. û��arguments
3. ����ͨ��new�ؼ��ʵ���
4. û��new target
5. û��ԭ��
6. û��super
#### 31js�е�����������ʽ
1.var ��es5�﷨,let const es6�﷨
2.const���峣��
3.var �б�������
4.let const �п鼶������ var û��
5.��������ȫ�������򣬺��������򣬿鼶������
#### 32js�еĻ���������������
##### ���ڣ�Date��
1. var now = new Date();//�Զ���ȡ��ǰ���ں�ʱ�䲻���Σ��Զ���ȡ��ǰ���ں�ʱ�䣻���Σ�����Ҫ�����ʾ�����ڵĺ���������1970.1.1~ָ��ʱ�䣩��
2. Date.parse()���ܣ�ʱ��תΪ������
   ����������/��/�ꡱ ��Ӣ������ �գ��ꡱ ��Ӣ�����ڼ� Ӣ������ �� �� ʱ:��:��:ʱ��������Tue May 25 2004 00:00:00 GMT-0700
   YYYY-MM-DDTHH:mm:ss.sssZ(��2004-05-25T00:00:00)��
3. Date.UTC()���ܣ�ʱ��תΪ������
����ηֱ�����ݡ��·ݣ�һ����0��������1...�����죨1~31����Сʱ����0~23�������ӡ����Լ������� ֻ��������Ǳ���ġ����಻��ʱ������Ϊ��������Ϊ1������ȫ��Ϊ0
Date���캯������ֱ�ӽ���Date.parse��Date.UTC�Ĳ������������ڲ��Զ�����parse/UTC����ת����
4. Date.now() ���ص��ô˷���ʱ�ĺ�����
var start = Date.now();
�˷����������������֧�֡���֧�ֵ�������У��������
var start = new Date();
##### �̳еķ�����toLocaleString()��toString()��valueOf()
ǰ�����ڲ�ͬ�������չʾ�����ں�ʱ���ʽ��ͬ��û��̫���ô���valueOf()�������ڵĺ��룬����ʹ��valueOf()�Ƚ���������
##### һЩ���÷���
getTime() ���ر�ʾ���ڵĺ���������valueOf()�������ص�ֵ��ͬ
getFullYear() ȡ����λ�������
getMonth() ���������е��·ݣ�����0��ʾһ��
getDate() �����·��е�������1~31��
getDay() ���������е����ڼ���0~6��
getHours() ���������е�Сʱ����0~23��
getMinutes() ���������еķ�������0~59��
getSeconds() ���������е�������0~59��
getMilliseconds() ���������еĺ�����

##### ԭʼֵ��װ����
1 Boolean
Boolean��ʵ������дvalueOf()����������һ��ԭʼֵtrue��false��toString()����������ʱҲ�ᱻ���ǣ������ַ�����true����false����
2 Number
Number����Ҳ��д��valueOf()��toLocalString()��toString()������valueOf()��������Number�����ʾ��ԭʼ��ֵ��������������������ֵ�ַ�����toString()������ѡ�ؽ���һ����ʾ�����ز�������������Ӧ������ʽ����ֵ�ַ���
- toFixed()����ָ��С��λ����ֵ�ַ�����
- toExponential()�����Կ�ѧ��������ʾ����ֵ�ַ���������һ����������ʾ�����С����λ����
- toPrecision()�����������������������������������ǹ̶����ȣ�Ҳ�����ǿ�ѧ�������������������һ����������ʾ��������ֵ���λ����
- isInteger()���ڱ��һ����ֵ�Ƿ񱣴�Ϊ��������ʱ��С��λ��0���ܻ���������Ϊ��ֵ��һ������ֵ��
3 String
a. ��ȡ�ַ�������
- slice()���������и�ֵ�����������ַ������ȼ��ϸ�����ֵ
- substr()��������һ��������ֵ�����ַ������ȼ��ϸ�ֵ�����ڶ���������ת��Ϊ0��
- substring()�����Ὣ���и�����ֵ��ת��Ϊ0��
- �Աȣ����������������ص������ǵ��ַ��������ַ��������Ҷ�����һ��������������һ��������ʾ���ַ�����ʼ��λ�ã��ڶ���������ʾ���ַ���������λ�á�
  �� slice()�� substring()���ԣ��ڶ�����������ȡ������λ�ã�����λ��֮ǰ���ַ��ᱻ��ȡ��������
  �� substr()���ԣ��ڶ���������ʾ���ص����ַ���������
b. ��ȡ�ַ�������
indexOf()��lastIndexOf()�����������ַ���������������ַ������������±꣨���û�ҵ����򷵻�-1������������ǰ�ߴ��ַ�����ͷ���ʼ���ң����ߴ��ַ���ĩβ��ǰ��ʼ���ҡ�
���������������Խ��յڶ�����������ʾ��ʼ������λ�á�
c. �ַ�����������
3�������ж��ַ������Ƿ������һ���ַ����ķ�����startWith()��endWith()��incluedes()��������һ����ʾ�Ƿ�����Ĳ���ֵ����������
- startWith()��鿪ʼ������0��ƥ����
- endWith()��鿪ʼ������(string.length - substring.length)��ƥ����
- includes()��������ַ���
#### 33js�е��﷨����
##### �﷨
- ���ִ�Сд
js�﷨�������ִ�Сд�ģ�����run��Run������������
- ��ʶ��
��ʶ�����Ǳ��������������Ե����֣����Ϊ����һ���ַ�������һ����ĸ���»��ߣ�_������Ԫ���ţ�$��ʣ�µ������ַ���������ĸ���»��ߡ���Ԫ���Ż����֡�
- ע��
����ע�������ע��
```js
// ����ע��
/* ���Ƕ��� 
ע�� */
```
- �ϸ�ģʽ
�ϸ�ģʽ��һ�ֲ�ͬ��JavaScript������ִ��ģ�ͣ�ECMAScript3��һЩ���淶д��������ģʽ�»ᱻ�������ڲ���ȫ�Ļ���׳�����Ҫ�������ű������ϸ�ģʽ
�����׼���"use strict"��Ҳ�����ں����ڵ������ϸ�ģʽ��
- ���
1. js�п���ʡ�����ķֺŵ��ǲ��Ƽ���
2. js�е�if���ֻ��һ�����ʱ����ʡ�Ի����Ų��Ƽ���
##### �ؼ��ֱ�����
- �ؼ��֣�break do in typeof case else instanceof var catch export new void class extends return while const finally super with continue for switch yield debugger function this default if throw delete import try
- �����֣�enum implements package public interface protected static let private await
  �ؼ��ֱ����ֲ�����������ʶ�������ǿ����������������������ǲ�������
##### ����
- var
var�������ڱ�����������ȫ��������������ȥ��var�����ı����ͻ���ȫ�ֱ�����֧���ظ����������
- let
�����ڱ�����������ȫ������������ȫ�ֱ������ڿ鼶�������ظ������ᱨ��������ʱ��������������֮ǰ���ûᱨ��ReferenceError
- const
��Ҫ������������������޸Ļᱨ��������������޸Ķ��������Բ��ᱨ��Ҳ�Ƚϳ���
- ����������ʵ��
##### ��������
����������Ҫ��6��undefined,null,string,number,boolean,symbol������һЩ����Ҳ�����Ϊ7�ְ���bigint
- typeof
�������������������͵��ǲ�������null��object,��Ϊ���᷵��object
- "undefined"��ʾֵδ���塣
- "boolean"��ʾֵΪ����ֵ��
- "string"��ʾֵΪ�ַ�����
- "number"��ʾֵΪ��ֵ��
- "object"��ʾֵΪ���󣨶����Ǻ�������null��
- "function"��ʾֵΪ������
- "symbol"��ʾֵΪ���š�
##### ������
������������ѧ�������Ӽ���λ����������ϵ����������Ȳ�������
- һԪ������
- λ������
- ����������
- ���Բ�����
- ָ��������
- ���Բ�����
- ��ϵ������
- ��Ȳ�����
- ����������
- ��ֵ������
- ���Ų�����
##### ���
- if���
ûɶ˵��������û��Ҫ˵��
- do-while���
ûɶ˵��������û��Ҫ˵���������ٻ�ִ��һ�Ρ�
- while���
ûɶ˵��������û��Ҫ˵��
- for���
ûɶ˵��������û��Ҫ˵��
- for-in���
����ö�ٶ����еķǷ��ż�����
- for-of���
���ڱ����ɵ��������Ԫ��
- ��ǩ���
- break��continue
break ֱ���˳�ѭ�� continue�������λ껷
- with
with������;�ǽ���������������Ϊ�ض��Ķ���
- switch
����caseֵƥ���Ͼͻ�ִ�ж�Ӧ��case�ڵ���䣬���û��break�����ִ�������case,��󶼻�ִ��default��
##### js��['1', '2', '3'].map(parseInt)
1,NaN,NaN
##### js��alert(Number('08'))
����8,�˽�������ֵ�ĵ�һλ������0,Ȼ���ǰ˽�������0 ��7,�������ֵ�е���ֵ�����˷�Χ,��ôǰ����0�������ԡ�
##### js��document.write��innerHTML������
1. document.write ֻ���ػ�����ҳ��
2. innerHTML �����ػ�ҳ���һ����
##### js��switch case�ж�������,�õ���break;���еĵط��õ���return
1. ִ��break������switch ,Ȼ��ִ��switch�������䡣����break�ᷢ����������,ִ�е���һ��case,
2. ִ��return����������
##### js��var a=b=c=d=5��ʲô��˼�����������дһ��,d=9,a,b,c��ֵ��仯��
һ��js��var a=b=c=d=5��ʲô��˼�����������дһ��,d=9,a,b,c��ֵ��仯��
1.��ʼ����a��b��c��d��ֵ��Ϊ5��
2.�ı�d��a��b��cֵ����ı�,
3.��Ϊa��b��c��d����ֵ���͵ı���,���Ե�ֵ�������Լ���ջ����,��d�仯������ջ�е�ֵ���ı䡣
����js��var a=b=c=d=[1,2,3,4,5]��ʲô��˼?���������дһ��d[5]=9;a,b,c,��ֵ�ᷢ���仯��
1.��ʼ����a��b��c��d��ֵ��Ϊ[1,2,3,4,5]��
2.�ı�d��a��b��cֵ��ı�,
3.��Ϊa��b��c��d�����������͵�����,���Ե�ֵ�������Լ��Ķѵ���,��ַ����ջ�е�d�仯���������е�ֵ���ı䡣
����js��var a=b=c=d=[1,2,3,4,5]��ʲô��˼?���������дһ��d=[9];a,b,c,��ֵ�ᷢ���仯��
1.��ʼ����a��b��c��d��ֵ��Ϊ[1,2,3,4,5]��
2.�ı�d��a��b��cֵ����ı�,
3.��Ϊa��b��c��d�����������͵�����,���Ե�ֵ�������Լ��Ķѵ���,��ַ����ջ�е�d�仯���������е�ֵ���ı䡣
- ջ: �洢ֵ�������ݣ�ջҲ��һ�����棩��
- ��: �洢������������,��ջ�д�ָ��ö��ڴ��ַ�ľ������Ҳ�ж������棩��
##### js��var n=(1,2,3,4,5),n��ֵ�Ƕ���
�������θ�ֵ n=5
##### js��var str=true+11+null+9+undefined+��zhuanbang��+false+null+9+[],str��ֵ�Ƕ���
```
// ���Ϊ NaNzhuanbangfalsenull9
console.log(true + 11);//trueת��Ϊ1�����Ϊ12
console.log(true + 11 + null);//nullת��Ϊ0�����Ϊ12
console.log(true + 11 + null + 9);//12+9=21
console.log(true + 11 + null + 9 + undefined);//21 + undefined = NaN
console.log(true + 11 + null + 9 + undefined + "zhuanbang");//��NaN�� + ��zhuanbang�� = ��NaNzhuanbang��
console.log(true + 11 + null + 9 + undefined + "zhuanbang" + false);//��NaNzhuanbang�� + ��false�� = ��NaNzhuanbangfalse��
console.log(true + 11 + null + 9 + undefined + "zhuanbang" + false + null);//��NaNzhuanbangfalse�� + ��null�� =��NaNzhuanbangfalsenull��
console.log(true + 11 + null + 9 + undefined + "zhuanbang" + false + null + 9);//��NaNzhuanbangfalsenull�� + ��9�� = ��NaNzhuanbangfalsenull9��
console.log(true + 11 + null + 9 + undefined + "zhuanbang" + false + null + 9 + []);//��NaNzhuanbangfalsenull9�� + �� �� = ��NaNzhuanbangfalsenull9��
```
##### js����Щ����������ڴ�й¶
1. ���壺�ڴ�й©������������Ҫ��������Ȼ���ڣ������Ӧ�õ��ڴ治�������·��䣬��ʹ���ڴ治ʹ�õ������
2. ����������������ɨ�貢����ÿ����������������������һ���������������Ϊ0��û�ж������ù�����ô�����ڴ潫�ᱻ����
3. setTimeout �ĵ�һ������ʹ���ַ������Ǻ����Ļ�,�������ڴ�й©
4. �հ�
5. ������־
6. ѭ�����ã���������˴����ã��ڶ����õ�ʹ��������Ϊnull��
7. dom����˳��
##### jsȫ�ֱ������ֲ�����
1. ȫ�ֱ�����ȫ�ֱ������ں����ⶨ��ı�������js��ȫ�ֱ�������window����������������Դ����ȫ�ֱ���ȫ���洢�ڱ����洢��������ʼִ��ʱ��ȫ�ֱ�������洢��������������Ͼ��ͷ�
2. �ֲ����������ض��Ĺ��̺����п��Է��ʵı������������С������ִ�н����ͷš�
##### jsдһ����0��59����ѭ���ļ�ʱ��
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
##### js�жϵ��������ڼ�
```
// js�жϵ��������ڼ�
function weekDay() {
    let date = new Date();
    let week = date.getDay()
    switch (week) {
        case 0:
            console.log('������');
            break;
        case 1:
            console.log('����һ');
            break;
        case 2:
            console.log('���ڶ�');
            break;
        case 3:
            console.log('������');
            break;
        case 4:
            console.log('������');
            break;
        case 5:
            console.log('������');
            break;
        case 6:
            console.log('������');
            break;
        default:
            break;
    }
}
weekDay()
```
##### js���߳���ͬ���첽
1. ���̣߳�
   ���߳���ζ�ţ������ͬ��ʱ���ж������Ļ�����Щ�������Ҫ�����Ŷӣ�ǰһ������ִ���꣬�Ż�ִ����һ������
   jsΪʲ��Ϊ���̣߳�js��Ϊ������Ľű����ԣ���Ҫ��ʵ�����û��Ľ���������jsʵ�ֶ�dom�Ĳ���������Ƕ��̵߳Ļ���һ���߳���dom��������ݣ���һ���߳�Ҫɾ�����dom���������ܸ��ӵ�ͬ������
2. ͬ�����첽
   Ϊʲô����ͬ���첽������ΪjsΪ���̣߳����´���ʱ��ֻ�ܴ���һ���������е�������Ҫ�Ŷӣ����ǰһ����ʱ��̫�����������͵õȴ������js���ǵ�����������⣬���߳̿�����ȫ���õȴ�����ִ����ɣ������ȹ��������У��ȵ��������˽���ٻ�ͷִ��֮ǰ������
   ͬ������ͬ��������ָ�����߳����Ŷ�ִ�е�����ֻ��ǰһ������ִ����ϣ����ܼ���ִ����һ�����񣬵����Ǵ���վʱ����վ����Ⱦ���̣�����Ԫ�ص���Ⱦ����ʵ����һ��ͬ������
   �첽�����첽������ָ���������̣߳�������������е�����ֻ���������֪ͨ���̣߳�ĳ���첽�������ִ���ˣ�������Ż�������̣߳������Ǵ���վʱ����ͼƬ�ļ��أ����ֵļ��أ���ʵ����һ���첽����
   �첽���ƣ�
   ��1������ͬ�����������߳���ִ�У��г�һ��ִ��ջ
   ��2�����߳�֮�⣬������һ��������У�ֻҪ�첽�������˽�����ͻ�����������з���һ���¼�
   ��3��һ��ִ��ջ�е�����ͬ������ִ����ϣ�ϵͳ�ͻ��ȡ������У��������滹����Щ�¼�����Щ��Ӧ���첽�������ǽ����ȴ�״̬������ִ��ջ����ʼִ��
   ��4�����̲߳��ϵ��ظ�����ĵ�����
##### js˫ʮһ����ʱ
```
// js˫ʮһ����ʱ
// ����ʱ��-ϵͳ��ʼʱ��
// ��ʱ������׼timeout�����޶�ʱ���ڣ�interval�����޶�ʱ���
// chromeΪ���Ż���ҳ���ܣ�ʹ���û����뿪��ҳ����ͣ��ҳ�ļ�ʱ�����˶��Ⱥ����ܵĲ��֣��ʴ�����ֻ��ʹ���첽�����ʹ�ü�ʱ�߳��ں�̨һֱ����
// ǰ�˵ļ�ʱ�߼���Զ����׼���������ʼ��ʱ����÷�����ʱ�䡣
// ��Ϊ���紫������㲻֪����ͬʱsetTimeout��setInterval������ǳ���ȷ�����Բ�Ҫ����ǰ�˼�ʱ����������Ҫ�߼�����Ҫ��Ϻ�̨�����ϡ�

function fn() {
    let date1 = new Date();//���Խ�������������ʱ��
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
let str = `��� ${diffTime.days}�� ${diffTime.hours}Сʱ ${diffTime.minutes}�� ${diffTime.second}��`;
console.log(str);
```
##### js��λ�ȡUA
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>wulitian-study</title>
</head>
<body>
<script>
    // js��λ�ȡUA
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
##### js�����alert�������е���Ϣ����
1.��\n��ʵ��
2.����ת���ַ�
\n �س�����
\t  ����������һ�Ʊ�λ��
\b  �˸�
\r   �س�
\\   ��б�߷���\��
\�� �����ŷ�
\��  ˫���ŷ�
\ddd 1~3λ�˽�������������ַ�
\xhh 1~2λʮ��������������ַ�
##### js�������JS����һ��table
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
                td.innerText = "����"
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
##### jsʵ�������ͼƬ
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
    addImg('data:image/png;base64,*******')// ��������������ʾ�ļ�ʡ����base64̫����ռ��ƪ��
</script>
</body>
</html>
```
##### jsʵ�������﷨�Ĺ��� var a=(5).plus(3).minus(6)
```
Number.prototype.plus = function (number) {
    return this + number;
}

Number.prototype.minus = function (number) {
    return this - number;
}

console.log((5).plus(3).minus(6))
```
##### jsʵ�����document���������г�Ա�����ƺ�����
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>wulitian-study</title>
</head>
<body>
<script>
    // jsʵ�����document���������г�Ա�����ƺ�����
    for (let key in document){
        console.log(key+'--'+document[key])
    }
</script>
</body>
</html>
```
##### js��ӡ쳲���������
```
//js��ӡ쳲���������,���������ĺ͵�����һ���ֵ��
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
##### jsѡ��ı�ǩ������һ�ŵ�ѡ��ť�����֪��ѡ���ǵڼ���
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
#### 34js�е�ģ�黯
1. es6:export function(){} export default function(){}  import {aaa,bbb} from './xxx.js'

2. commonjs��node.js��:module.exports = {} exports.a = 1 var module = require('xxx.js')

3. AMD:define(['./aaa','./bbb'],function(a,b){a.done()b.done()})
#### 35js�еĽ⹹
##### �⹹����

1. �⹹��������

```js
const Car = {name: "����",price: 100000}
const {name, price} = Car;
```

2. �⹹û�������Ķ���

```js
const {name, price} = {name: "����",price: 100000};
```

3. �⹹����������

```js
const {name:n, price:p} = {name: "����",price: 100000};
```

4. �⹹Ĭ��ֵ

```js
const {name:n = '����', price:p = 200000} = {name: "����",price: 100000};
```

5. �⹹��������

```js
const {name:n = '����', price:p = 200000} = {name: "����",price: 100000};

function run({n}){
    console.log(n+"������")
}
```

6. �⹹Ƕ�׶���

```js
const {introduce:{info}}= {name: "����",price: 100000, introduce:{info: '���ֳ�����'}};

```

##### �⹹����

1. �⹹��������

```js
const [a,b] = ['����', '����'];
```

2. �⹹Ĭ��ֵ

```js
const [a,b="����"] = ['����', '����'];
```

3. �ڽ⹹�н�������

```js
let a = '����';
let b = '����';
[b,a] = [a,b]
```

4. �⹹��������ֵ

```js
function getCar(){
    return ['����', '����', '����'];
}
let a,b,c;
[a,b,c] = getCar();
```
#### 36js�еĴ�����

##### try catch���

```js
try {
    // statements
} catch(e) {
    // statements
    console.log(e);
}
```
����e�β��е�������Աe.name�쳣����,e.message�쳣��Ϣ

##### finally�־�

������ζ���ִ��finally�־䣬��ͬʱ��try catch�����return��catch������return��finally��return ֻ��ִ��finally�е�return��

##### ��������

- Error�����ࡣ

- EvalError��eval�����׳���

- RangeError������Խ���׳���

- ReferenceError���Ҳ��������׳���

- SyntaxError��eval�е��ַ��������׳���

- TypeError�������б����������ͣ������ڵķ���ʱ�׳���

- URIError��ʹ��encodeURI��decodeURI()��URI��ʽ����ȷʱ�׳���

##### �׳�����

������throwʱ����ִ�н��������ǿ����Զ����׳����쳣��

##### onerror�¼�

����try catch����Ĵ��󶼻ᴥ��window�����ϵ�onerror�¼�������������������Ϣ���������ڵ�url���кţ������onerror�¼�����return false��������ֹ�������������Ĭ����Ϊ������imageʵ������Ҳ֧��onerror�¼���

##### ��������

1. ����ת��

2. �������ʹ���

3. ͨ�Ŵ���

##### ͨ���Ѵ����¼��������

ͨ�����Խ���imageʵ����src����Ϊ������ص��Ŀ������⡣
#### 37js�е�proxy
```
// ʵ�ּ��������ڶ�ȡ��д��ʱ��ʾ�û����ڶ�ȡ��������д��ĳ������
const obj = {
    name: 'wulitian',
    sex: '��'
}
const proxy = new Proxy(obj, {
    set(target, p, value, receiver) {
        console.log(`�����޸�Ԫ�أ���${p}��������Ϊ${value}`);
        obj[p] = value
    },
    get(target, p, receiver) {
        console.log(`���ڻ�ȡ��${p}`)
        return obj[p]
    }
})
console.log(proxy.name)
proxy.name = '123'
console.log(proxy)
```
#### 38js�еķ�������
```
<!DOCTYPE html>
<html lang="ch">
<head>
    <meta charset="UTF-8">
    <title>js�еķ�������</title>
</head>
<body style="height: 4000px;">
<script>
// ����(debounce)
// �����������¼�ʱ����һ����ʱ����ڣ�ֻ�����һ�δ������¼��Ż�ִ�С�
function debounce(fn, wait) {
    var timeout = null; //����һ����ʱ��
    return function() {
        if(timeout !== null)
            clearTimeout(timeout); //��������ʱ��
        timeout = setTimeout(fn, wait);
    }
}
function handle(){
    console.log(new Date())
}
window.addEventListener('scroll', debounce(handle, 1000))

// ����(throttle)
// ʱ�����ʽ
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

// ��ʱ����ʽ��
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
// ���ַ�ʽ���ʵ��ÿ�δ���ǰ��ִ��һ��
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
    console.log('���ݴ���!');
}
window.addEventListener('scroll', throttle(handle, 1000));
</script>
</body>
</html>
```