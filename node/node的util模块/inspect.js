const util=require('util');

function Person(){
    this.name='wulitian';
    this.toString=function(){
        return this.name;
    };
}
const obj=new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));
