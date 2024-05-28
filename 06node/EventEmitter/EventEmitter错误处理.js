const EventEmitter = require('events').EventEmitter;
const domain = require('domain');
const myDomain = domain.create();
class MyEmitter extends EventEmitter{
    constructor(props) {
        super(props);
    }
}
myDomain.on('error', function(err){
    console.log('domain接收到的错误事件:', err);
});
myDomain.run(function(){
    const emitter1 = new MyEmitter();
    emitter1.emit('error', '错误事件来自emitter1');
    const emitter2 = new MyEmitter();
    emitter2.emit('error', '错误事件来自emitter2');
});


