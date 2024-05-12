// 1. 代码执行后会依顺序执行程式，所以这时会先印出 'script start'，接着把setTimeout 把它放到宏任务列队
// 2. 然后呼叫 async1 函式，印出 'async1 start'
// 3. 然后呼叫 await async2() 所以印出 'async2'。注意， await 后的代码会被放到微任务列队，所以不会马上印出 'async1 end' 而是会把它放到微任务列队
// 4. 接着程式继续执行，遇到 new Promise 先印出里面的 'promise 1'
// 5. 然后呼叫 resolve ，把 .then 的放到微任务列队。程式继续执行，印出 'script end'
// 6. 这时候执行栈空了，所以去检查微任务列队，先印出第三步放的 'async1 end'
// 7. 因为微任务列队会一路执行到没东西，所以继续看微任务列队，发现里面还有刚刚第四步骤放入的 resolve 代码，所以印出 'promise2'
// 8. 这时微任务列队空了，去看宏任务列队，有第一步放入宏任务列队的 setTimeout 所以把它印出

async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}

async function async2() {
    console.log("async2");
}

console.log("script start");

setTimeout(function () {
    console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});

console.log("script end");
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
