# js中的Set,WeakSet,Map,WeakMap

#### Set

1. 介绍：Set 对象允许储存任何类型的唯一值，无论是原始值或者是对象引用,无序不重复。
- +0 与-0 在存储判断唯一性的时候是恒等的，所以不可以重复。
- undefined 和 undefined 是恒等的，所以不可以重复。
- NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个不能重复。

2. 属性方法

- size 属性：返回集合长度
- add(value)方法：添加元素
- delete(value)方法：删除元素
- has(value)方法：判断元素是否存在
- clear()方法：清空集合
- forEach()方法：集合遍历

3. 使用场景：数组去重、交集、并集、差集

#### WeakSet

1. 介绍：WeakSet 对象允许将弱引用对象存在一个集合中
- WeakSet 只能储存对象引用，不能存放值，而 Set 对象都可以
- WeakSet 对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑 WeakSet 对该对象的引用，如果没有其他的变量或者属性引用这个对象值，则这个对象将会被垃圾回收掉。（不考虑该对象还存在与 WeakSet 中），所以 WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到，被垃圾回收了。因此 ES6 规定，WeakSet 对象是无法被遍历的，也没有办法拿到它包含的所有元素。

2. 属性方法
- add(value)方法：添加元素
- delete(value)方法：删除元素
- has(value)方法：判断元素是否存在
- clear()方法：清空所有元素

#### Map

1. 介绍

Map 对象保存键值对，并且能够记住键的原始插入顺序，任何值（对象或者原始值）都可以左右一个键或者一个值
- +0 与-0 在存储判断唯一性的时候是恒等的，所以不可以重复。
- undefined 和 undefined 是恒等的，所以不可以重复。
- NaN 与 NaN 是不恒等的，但是只能存一个不能重复。

2. 属性方法
- size 属性：返回字典长度（类似于数组的长度 length）
- values()方法：返回一个可迭代对象，包含按顺序插入 Map 对象中每个元素的 value 值
- set(key,value)方法：向字典中添加新元素
- get(key)方法：通过键查找特定数值并返回
- has(key)方法：判断字典中是否存在键 key
- delete(key)方法：通过键 key 从字典中移出对应的数据
- clear()方法：清空字典
- forEach()方法：循环字典

#### WeakMap

1. 介绍

WeakMap 对象是一组键值得集合，其中的键是弱引用。注意：键必需是弱引用，而值可以是任意。
注意：WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。

2. 属性方法
- set(key,value)方法：设置一组 key 关联对象 
- delete(key)方法：移出 key 的关联对象
- has(value)方法：判断 WeakSet 对象中是否包含 value
- get(key)方法：返回 key 关联对象，没有则返回 undefined

#### 对比

1. Set
- 成员唯一，无序且不会重复
- 类似于数组集合，键值和键名是一致的（只有键值。没有键名）
- 可以遍历，方法有 add，delete，has

2. WeakSet
- 只能存储对应引用，不能存放值
- 成员都是弱引用，会被垃圾回收机制回收
- 不能遍历，方法有 add，delete，has

3. Map
- 键名唯一不可重复
- 类似于集合，键值对的集合，任何值都可以作为一个键或者一个值
- 可以遍历，可以转换各种数据格式，方法 get，set，has，delete

4. WeakMap
- 只接受对象为键名，不接受其他类型的值作为键名，键值可以是任意
- 键名是拖引用，键名所指向的对象，会被垃圾回收机制回收
- 不能遍历，方法 get，set，has，delete
