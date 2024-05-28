const EventEmitter = require('events').EventEmitter;
const domain = require('domain');
const myDomain = domain.create();
class MyEmitter extends EventEmitter{
    constructor(props) {
        super(props);
    }
}
const emitter = new MyEmitter();
emitter.on('newListener', function(name, listener) {
    console.log("新事件的名字:", name);
    console.log("新事件的代码:", listener);
    setTimeout(function(){
        console.log("我是自定义延时处理机制");
    }, 1000);
});
emitter.on('hello', function(){
    console.log('hello　node');
});
emitter.on('hello2', function(){
    console.log('hello　node');
});

