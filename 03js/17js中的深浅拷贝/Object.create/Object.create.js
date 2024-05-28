Object.myCreate = function (proto, propertyObject = undefined) {
    console.log(typeof propertyObject)
    //判断一下结构是否是属性描述的结构省略不是重点
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
