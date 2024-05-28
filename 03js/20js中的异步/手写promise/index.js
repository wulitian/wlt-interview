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
