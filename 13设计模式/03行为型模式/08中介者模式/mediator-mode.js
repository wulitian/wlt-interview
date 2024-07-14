/**
 * 中介者模式
 */

class A {
    constructor() {
        this.number = 0;
    }
}

class B {
    constructor() {
        this.number = 0;
    }
}

class Mediator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    setVal(val) {
        if (val === 'a') {
            this.a.number = 100;
        }
        if (val === 'b') {
            this.b.number = 200;
        }
    }
}


// 测试
let a = new A();
let b = new B();
let m = new Mediator(a, b);
m.setVal('a');
console.log(a);
m.setVal('b');
console.log(b);
