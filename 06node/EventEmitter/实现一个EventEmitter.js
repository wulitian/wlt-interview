const EventEmitter = require('events').EventEmitter;
const util = require('util')
//写法一
// function MyEmitter() {
//     EventEmitter.call(this)
// }
// util.inherits(MyEmitter,EventEmitter)
//写法二
class MyEmitter extends EventEmitter{
    constructor(props) {
        super(props);
    }
}
const myEmitter = new MyEmitter()

myEmitter.on('hello',function(data){
    console.log(data)
})
myEmitter.emit('hello', '123')

