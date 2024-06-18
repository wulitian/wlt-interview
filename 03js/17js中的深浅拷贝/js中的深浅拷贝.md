# js中深浅拷贝

1.拷贝概念：

- 浅拷贝：原始类型为值传递，引用类型为引用传递

- 深拷贝：所有元素或属性完全复制与原对象完全分离，修改新对象不会影响原对象

2.浅拷贝（只拷贝一层，除了对象拷贝的是引用类型，其他都是直接赋值）

- 循环对象或数组直接复制

- Object.assign() （如果对象只有深一层可以实现深拷贝）

- {...obj} [...arr] Array.prototype.concat() Array.prototype.slice()

3.深拷贝（拷贝多层）

- JSON.parse(JSON.stringify(obj)) 弊端：抛弃对象的constructor,不管是什么都会变成Object，并且只能转换JSON格式对象 Function 正则，Symbol了转换不了

- Object.create(obj)

- 递归手动赋值
 思路是：解决循环引用问题使用weakMap,解决处理JS内置数据结构：Array、Map、Set、Object，其他情况均可通过new source.constructor(source)直接来拷贝值，这些包含了正则，函数，等等
