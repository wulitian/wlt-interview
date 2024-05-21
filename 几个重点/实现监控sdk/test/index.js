import JsError from './lib/jsError'
import Behavior from "./lib/behavior";
import Timing from "./lib/timing";
let jsError = new JsError();
let behavior = new Behavior();
let timing = new Timing();
jsError.init();
behavior.init();
timing.init();
// 1. 能触发 onerror,或者window.addEventListener('error', callback)
// let a = 0
// console.log(b)
// 2. Promise未显示处理使用unhandledrejection捕获
// 能触发 unhandledrejection ，因为未显式处理
// Promise.reject('test').then()
// // 能触发 unhandledrejection ，因为未显式处理
// Promise.reject('test').then(console.log)
// // 触发 unhandledrejection ，因为未显式处理
// Promise.reject('test')
let xhr = new XMLHttpRequest();
xhr.open('GET','http://localhost:3000/api/db-check',false);
xhr.send(null);
xhr.onreadystatechange = function(){
    if(xhr.readyState !== 4){
        console.log("请求有问题");
    }
    if(xhr.status === 200||xhr.status === 304){
        console.log(xhr.responseText);
    }else{
        console.log(xhr.responseText);
    }
}

