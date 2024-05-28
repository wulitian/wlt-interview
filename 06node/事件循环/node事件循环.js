// 先找到同步任务，输出script start
// 遇到第一个 setTimeout，将里面的回调函数放到 timer 队列中
// 遇到第二个 setTimeout，300ms后将里面的回调函数放到 timer 队列中
// 遇到第一个setImmediate，将里面的回调函数放到 check 队列中
// 遇到第一个 nextTick，将其里面的回调函数放到本轮同步任务执行完毕后执行
// 执行 async1函数，输出 async1 start
// 执行 async2 函数，输出 async2，async2 后面的输出 async1 end进入微任务，等待下一轮的事件循环
// 遇到第二个，将其里面的回调函数放到本轮同步任务执行完毕后执行
// 遇到 new Promise，执行里面的立即执行函数，输出 promise1、promise2
// then里面的回调函数进入微任务队列
// 遇到同步任务，输出 script end
// 执行下一轮回到函数，先依次输出 nextTick 的函数，分别是 nextTick1、nextTick2
// 然后执行微任务队列，依次输出 async1 end、promise3
// 执行timer 队列，依次输出 setTimeout0
// 接着执行 check 队列，依次输出 setImmediate
// 300ms后，timer 队列存在任务，执行输出 setTimeout2
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}

async function async2() {
    console.log('async2')
}

console.log('script start')

setTimeout(function () {
    console.log('setTimeout0')
}, 0)

setTimeout(function () {
    console.log('setTimeout2')
}, 300)

setImmediate(() => console.log('setImmediate'));

process.nextTick(() => console.log('nextTick1'));

async1();

process.nextTick(() => console.log('nextTick2'));

new Promise(function (resolve) {
    console.log('promise1')
    resolve();
    console.log('promise2')
}).then(function () {
    console.log('promise3')
})

console.log('script end')
