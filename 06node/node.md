# node

### -----------------node原理----------------
#### Node如何高精度计时(纳秒)
在 Node.js 程序中，优先选 process.hrtime, 其次选 performance.now，最后才会是 Date.now
之所以这么选，是基于 精度 和 时钟同步 两方面考虑的。
```
const NS_PER_SEC = 1e9;
const time = process.hrtime(); // 这里第一次调用，返回 time 变量
// [ 1800216, 25 ]
setTimeout(() => {
  const diff = process.hrtime(time); // 用第一次返回的 time 变量作为入参放在第二次调用中，从而获取 diff 时间差值
  // [ 1, 552 ]
  console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
  // Benchmark took 1000000552 nanoseconds
}, 1000);
const start = process.hrtime.bigint();
// 191051479007711n
setTimeout(() => {
  const end = process.hrtime.bigint();
  // 191052633396993n

  console.log(`基准测试耗时 ${end - start} 纳秒`);
  // 基准测试耗时 1154389282 纳秒
}, 1000);
```
#### Node的全局对象有哪些？
Class:Buffer
process
console
clearInterval、setInterval
clearTimeout、setTimeout
global
#### process有哪些常用方法
process.stdin, process.stdout, process.stderr, process.on, process.env, process.argv, process.arch, process.platform, process.exit
#### console有哪些常用方法
console.log/console.info, console.error/console.warning, console.time/console.timeEnd, console.trace, console.table
#### Node的全局变量有哪些？
__dirname
__filename
exports
module
require
#### 你知道NodeJs是如何工作的吗？
node的工作原理： node使用chrome的V8引擎来解释编译JS语言，将编译后的代码传递给libuv，在libuv中进行区别是调用linux的libev/libio还是window的IOCP实现具体操作
node中事件环工作原理：node执行JS栈中的代码，发现宏任务将其放到对应的宏任务队列，微任务放到微任务队列。将JS栈中的代码执行完毕后，清空微任务队列，进入事件环，取出第一个宏任务进入JS执行栈执行。完毕后，清空微任务对列，进入宏任务取下一个，形成事件环
注意：process.nextTick微任务会在微任务队列中第一个执行
#### 你有使用过NodeJs吗？说说你对它的理解，它的运用场景有哪些呢？
node.js（简称Node）是一个基于Chrome V8引擎的JavaScript运行时环境。它允许开发者使用JavaScript语言在服务器端运行代码，实现了在服务器端构建高性能和可扩展性的网络应用程序。
Node.js的特点和功能包括：
非阻塞式、异步编程模型：Node.js采用事件驱动、非阻塞式I/O模型，使得在处理高并发请求时表现出色。它能够通过回调函数处理异步操作，而不会阻塞后续代码的执行，提高了应用程序的性能和响应速度。
跨平台：Node.js可在多种操作系统上运行，包括Windows、macOS、Linux等，这使得开发者可以在不同平台上构建和部署应用程序。
轻量高效：Node.js的设计目标是轻量高效，它采用了事件循环机制和单线程模型，不会为每个请求创建新的线程，相比传统的多线程服务器模型，更节省资源，适用于处理大量并发请求。
npm包管理器：Node.js附带npm（Node Package Manager）工具，是世界上最大的开源库生态系统之一。npm允许开发者轻松地安装、管理和共享JavaScript模块，加快了开发过程并促进了社区合作。
构建网络应用：Node.js的主要用途之一是构建高性能的网络应用，如Web服务器、实时聊天应用、API服务等。
#### Node和V8引擎是什么关系？
Node.js 的代码由C++ 编写，它与V8 引擎的交互是通过V8 的C++ 接口实现的,
Node.js 在编译时会将V8 引擎集成进去，并提供了一些额外的功能，如事件循环、模块加载等。 
因此，Node.js 实际上是一个基于V8 引擎的应用程序，它提供了额外的API，使得JavaScript 能够在服务器端运行
#### Node是基于单线程的吗？为什么？
js执行线程是单线程，把需要做的I/O交给libuv，自己马上返回做别的事情，然后libuv在指定的时刻回调就行了
#### Node的特性主要有哪些？
拥有高并发及适合“I/O”密集型应用的优势
超强的高并发能力、高性能
轻量级应用
开发速度高
生态丰富
#### 如何理解Node的异步非阻塞IO
阻塞I/O： 在发起I/O操作之后会一直阻塞着进程，不执行其他操作,直到得到响应或者超时为止；
非阻塞I/O：发起I/O操作不等得到响应或者超时就立即返回，让进程继续执行其他操作，但是要通过轮询方式不断地去check数据是否已准备好
多路复用I/O：又分为select、pool、epool。最大优点就是单个进程就可以同时处理多个网络连接的IO。
基本原理就是select/poll这个function会不断的轮询所负责的所有socket，当某个socket有数据到达了，就通知用户进程。
而epool通过callback回调通知机制.减少内存开销,不因并发量大而降低效率,linux下最高效率的I/O事件机制。
同步I/O：发起I/O操作之后会阻塞进程直到得到响应或者超时。前三者阻塞I/O，非阻塞I/O，多路复用I/O都属于同步I/O。
注意非阻塞I/O在数据从内核拷贝到用户进程时，进程仍然是阻塞的，所以还是属于同步I/O。
异步I/O：直接返回继续执行下一条语句，当I/O操作完成或数据返回时，以事件的形式通知执行IO操作的进程
node优势
传统的服务器语言大都是多线程。阻塞式I/O，在用户建立连接时，每个连接都是一个线程，十万个用户建立连接，就有十万个线程，
node采用 非阻塞异步I/O，最大的优势就是性能强，同样的服务器性能如果使用node可以比传统服务器语言多容纳100倍的用户，（I/O操作越多，node的优势越明显），擅长I/O密集型任务，可以使用在一些I/O密集型的高并发场景中。所以node的定位也选择非阻塞异步I/O也更加适合
#### node--max-old-space-size=4096是什么意思
修改最大内存限制，防止内存溢出。
#### 如何得知目前node版本的v8版本号
npm version
node -pe process.versions
node -p process.versions.v8
#### Node应用中如何利用多核心CPU的优势
Node.js 提供了cluster模块，可以轻松创建子进程来处理任务。通过将任务分配给不同的子进程，每个子进程可以在自己的线程上执行任务，从而实现多核机器的利用。
Node.js 也提供了worker_threads模块，可以创建真正的多线程应用程序。这个模块允许开发者创建和管理多个工作线程，每个线程都可以独立地执行任务。
利用的是 Node.js 的事件循环机制和异步非阻塞的 I/O 操作。Node.js 使用事件驱动的模型来处理请求，当有请求到达时，Node.js 将其放入事件队列中，然后通过事件循环来处理这些请求。在等待 I/O 操作的过程中，Node.js 不会阻塞其他请求的处理，而是继续处理其他请求。这样，即使 JavaScript 是单线程的，但在实际运行中，多个请求可以同时处理，充分利用了多核系统的能力。
#### 怎样充分利用多个CPU
一个CPU运行一个node实例
#### Node应用中如何查看gc的日志
通过开启参数 --trace-gc 与 --trace-gc-verbose
#### 简述node/v8中的垃圾回收机制
1. v8的功能
每个浏览器都有自己的JS引擎，而谷歌的Chrome浏览器使用的是V8这种引擎。 Js引擎的作用是将JavaScript编译成本地机器代码来供CPU执行。
2. 高级代码是如何执行的
   解释器执行的启动速度快,但是执行时的速度慢 
   一段代码=》解析器=》中间代码=》解析器=》输出结果
   编译执行的启动速度慢,但是执行时的速度快
   一段代码=》解析器=》中间代码=》编译器=》二进制代码=》输出结果
3. V8执行Js
   V8采用了一种权衡策略，在启动过程中采用了解释执行的策略，但是如果某段代码的执行频率超过一个值，那么V8就会采用优化编译器将其编译成执行效率更加高效的机器代码。
   当某段代码被标记为热点代码后，V8就会将这段字节码丢给优化编译器，优化编译器会在后台将字节码编译为二进制代码，然后再对编译后的二进制代码执行优化操作，优化后的二进制机器代码的执行效率会得到大幅提升。如果下面再执行到这段代码时，那么V8会优先选择 优化之后的二进制代码，这样代码的执行速度就会大幅提升。
   不过，和静态语言不同的是，JavaScript是一种非常灵活的动态语言，对象的结构和属性是可 以在运行时任意修改的，而经过优化编译器优化过的代码只能针对某种固定的结构，一旦在 执行过程中，对象的结构被动态修改了，那么优化之后的代码势必会变成无效的代码，这时候优化编译器就需要执行反优化操作，经过反优化的代码，下次执行时就会回退到解释器解释执行。
4. v8执行js的流程整理
   初始化基础环境
   解析源码生成AST和作用域
   依据AST和作用域生成字节码
   解释执行字节码
   监听热点代码
   优化热点代码为二进制的机器代码
   反优化热点代码为二进制的机器代码
5. V8的内存结果
   V8的内存空间主要分成了堆内存和栈内存
   其中堆内存分为以下几块
   large object space 大于默认定义大小的空间的变量，就会存放在这里
   code space 代码空间(JIT), 即时编译器(我们刚刚提到的一种混合编译的方式)，相当于跑代码
   cell space | property space | map space
   新生代空间
   老生代空间
6. 内存大小
   新老生代内存空间的大小主要和操作系统有关
   • 64位操作系统是1.4G，32位是0.7G
   • 64位操作系统中 新生代空间是64MB，老生代是1400MB
   • 32位操作系统中 新生代空间为32MB，老生代是700MB
   • 最新版node(V14)的内存是2GB
为什么内存空间只分配了最多1.4G呢，相对于其他语言，这个内存空间并不是很大，这就要从JS语言的特性了。
最早的时候，JS是为了浏览器渲染使用，并且是异步单线程的，它没有考虑一些特殊情况比如node读写大文件，内存空间可能会超出1.4G。它认为JS是不需要持久化的，运行完就可以销毁，所以内存占用并不是很多。由于JS是异步单线程的，所以运行代码的时候，是不能运行垃圾回收的；运行垃圾回收的时候，也是不能运行JS代码的。如果垃圾越多，那么我们等待的时间也是越长的，你能接受这个等待的时间吗？所以，就没有必要设计那么大的内存空间。
如果我们需要使用大内存呢？有办法改变吗？
我们可以通过node设置max-old-space-size和max-new-space-size来更改新老生代的内存空间  
7. 新生代算法scavenge
   新生代对象主要通过scavenge算法，采用复制的方式实现的垃圾回收算法。它将堆内存一分为二，一个处于正在使用中，另一个处于闲置状态。正在使用中的semispace空间称为Form空间，处于闲置状态的空间称为To空间。当我们分配对象的时候，先是在Form空间中进行分配。当开始垃圾回收的时候，会检查From空间中的存活对象，这些存活对象将会被复制到To空间，而非存活对象将会被释放。完成复制后，Form空间和To空间的角色将会发生对换。
   缺点是空间利用率低，只能使用堆内存中的一半；
   优点是时间效率高，因为只复制存活的对象，新生代中的对象存活时间短，适合这个算法。
8. 什么是晋升，晋升条件？
   在scavenge过程中，From空间中的存活对象将会复制到To空间中去，然后将Form空间和To空间进行翻转。、From空间中的存活对象在复制到To空间之前需要进行检查。在满足一定条件下，需要将存活周期长的对象移动到老生代中，也就是完成对象晋升。
   对象是否经历过Scavenge
   To空间的内存占用比超过限制（25%）
8. 老生代算法 Mark-Sweep  
   Mark-Sweep（标记清除算法），它分为标记和清除两个阶段。在标记阶段遍历堆中的所有对象，并标记活着的对象，在接下来的清除阶段中，只清除没有被标记的对象。老生代中存活对象多，存活时间长所以采用Mark-Sweep算法对非存活对象进行清除。
   在标记前，垃圾回收器会将所有的数据设置为白色，然后回收器从根节点开始遍历，把所有能访问到的数据标记为黑色，遍历结束后，标记为黑色的就是存活的活动对象，而白色就是待清理的非存活对象。
8. Mark-compact算法
   在进行一次标记清除回收后，内存空间会出现不连续的状态，对后续的内存分配造成问题。为了解决内存碎片问题，Mark-compact（标记整理）算法被提出来，标记整理算法是在Mark-Sweep（标记清除）算法进行后对存活的对象进行整理，将存活对象往一端移动，移动完成后，直接清理掉边界外的内存。
9. 什么是全停顿？
   在垃圾回收的过程中为了保证回收的正确性，需要将JavaScript应用逻辑暂停下来，等到垃圾回收执行完成后再恢复JavaScript应用逻辑，这种行为被称为全停顿。
   在新生代和老生代的垃圾回收过程中，V8采用并行回收的机制，也就是说在主线程之外开启多个辅助线程帮助垃圾回收，达到减少回收时间的目的。于是引进了增量标记算法（Incremental Marking）。
10. Incremental Marking（增量标记算法）
    就是将一次完整的垃圾回收拆分为许多小的“步长”，让垃圾回收与应用逻辑交替执行   
11. 暂停的垃圾回收过程该如何无缝衔接般的恢复呢？—— 三色标记法
    在Mark-Sweep算法中我们知道可以把对象设置为黑色和白色进行区分，但是在Incremental Marking算法中，垃圾回收器暂停后重新启动，如何找到上次停顿的位置成了问题。为了解决这个问题，V8采用了三色标记法，每个对象都有两个标记位和一个标记工作表来实现标记，标记位的颜色分为白色、灰色、黑色。
    白色是未标记的对象；
    黑色是自身和成员变量都被标记的对象；
    灰色是自身被标记，但是所属的成员变量未被标记。
    一开始所有对象都是白色，从根节点开始遍历，先把遇到的这组对象标记为灰色并推入标记工作表中；
    当回收器从标记工作表中弹出对象并访问它的引用对象时，将其自身由灰色转变为黑色，并将下一个引用对象转为灰色；
    直到遍历到了尽头，剩下的白色对象就是需要被清理的目标。如果中途遇到了暂停，我们可以通过寻找灰色的对象节点来恢复执行。
12. 写屏障
    所以V8引入了写屏障的机制，每当引用发生变化时，如果有黑色对象指向白色对象，该机制会强制将白色对象改成灰色，从而保证下一次增量标记的正确性。
    
### -----------------path模块----------------
#### 如何获取项目的根路径？
process.cwd()

### -----------------fs模块----------------
#### Node创建文件夹、删除文件夹、删除文件、写入数据、读取数据、检测文件是否存在
```
const fs = require('fs');
// 创建文件同步
fs.mkdirSync(`${__dirname}/test`)
// 创建文件异步
fs.mkdir(`${__dirname}/test`, err => {
    if (err) {
        console.log(err)
    }
})
// 删除文件同步
fs.unlinkSync(`${__dirname}/test`)
// 删除文件异步
fs.unlink(`${__dirname}/test.txt`, err => {
    if (err) {
        console.error(err)
    }
})
// 删除文件夹同步
const fs = require('fs')
fs.rmdirSync(`${__dirname}/test`)
// 删除文件夹异步
const fs = require('fs')
fs.rmdir(`${__dirname}/test`, err => {
    if (err) {
        console.error(err)
    }
})
// 写入数据 fs.writeFile 方法可以将内容写入文件中。如果文件不存在，会自动创建文件。
const fs = require('fs')
const content = ' test\n'
const opt = {
    flag: 'a', // a：追加写入；w：覆盖写入
}
fs.writeFile('test.txt', content, opt, (err) => {
    if (err) {
        console.error(err)
    }
})
// 使用 fs.readFile 方法可以读取数据，第一个参数是文件名；第二个参数是回调，err 监听错误信息，data 是读取回来的数据。
// 需要注意的是，读取回来的 data 是一个二进制类型的数据，需要使用 toString() 方法转换成我们读得懂的数据。
const fs = require('fs')
fs.readFile('fileName', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    // data 是二进制类型，需要转换成字符串
    console.log(data.toString())
})
// 判断文件是否存在
const fs = require('fs')
const exist = fs.existsSync('fileName')
console.log(exist)
```
#### Node中如何判断一个路径是文件还是文件夹
```
const fs = require("fs");
let path = "/file";
fs.lstat(path, (err, stats) => {
    if(err) {
        return console.log(err); //Handle error
    }
    console.log(`Is file: ${stats.isFile()}`);
    console.log(`Is directory: ${stats.isDirectory()}`);
    console.log(`Is symbolic link: ${stats.isSymbolicLink()}`);
    console.log(`Is FIFO: ${stats.isFIFO()}`);
    console.log(`Is socket: ${stats.isSocket()}`);
    console.log(`Is character device: ${stats.isCharacterDevice()}`);
    console.log(`Is block device: ${stats.isBlockDevice()}`);
});
```
#### 有没有接触过fs-extra，它是解决什么问题的
fs-extra是fs的一个扩展，提供了非常多的便利API，并且继承了fs所有方法和为fs方法添加了promise的支持。
#### 内置的fs模块架构是什么样子的
POSIX文件Wrapper,对应于操作系统的原生文件操作
文件流 fs.createReadStream和fs.createWriteStream
同步文件读写,fs.readFileSync和fs.writeFileSync
异步文件读写, fs.readFile和fs.writeFile
#### Node中如何监控文件的变动
1. watchFile方法
   watchFile 方法通过轮询按照一定时间间隔监测文件变化； 在不同操作系统下行为相对一致；但是用 watchFile 监听过多文件时会导致内存占用过高
```
fs.watchFile('./file.txt', function (curr, prev) {
    // curr 文件当前的fs.Stats对象；prev 文件修改前的fs.Stats对象
    console.log(`当前修改的时间: ${curr.mtime}`);
    console.log(`上一次修改的时间: ${prev.mtime}`);
});
```
2 watch方法
watch 方法通过监听操作系统提供的各种事件实现对文件变化的监听，相较于 watchFile 方法性能更高，因此优先考虑使用 watch 方法。但是它在某些操作系统的某些情况下不可用（比如在 Windows 上，如果监视目录被移动或重命名，则不会触发任何事件）。此外，watch 方法还能监听文件夹。
```js
fs.watch('./file.txt', function (eventType, filename) {
    // eventType 是 'rename' 或 'change'
    // filename 是触发事件的文件名称
    console.log(eventType);
    console.log(filename);
});
```        
#### 怎么读取json配置文件?
主要有两种方式，
第一种是利用node内置的require('data.json')机制，直接得到js对象;
第二种是读入文件入内容，然后用JSON.parse(content)转换成js对象．
二者的区别是require机制情况下，如果多个模块都加载了同一个json文件，那么其中一个改变了js对象，其它跟着改变，这是由node模块的缓存机制造成的，只有一个js模块对象; 第二种方式则可以随意改变加载后的js变量，而且各模块互不影响，因为他们都是独立的，是多个js对象.
#### 怎样在NodeJs中加载HTML文件？
```
const fs = require('fs');
// 读取HTML文件
fs.readFile('path/to/file.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // 在这里可以对HTML文件进行处理或者输出
  console.log(data);
});
const fs = require('fs');
try {
  // 读取HTML文件
  const data = fs.readFileSync('path/to/file.html', 'utf8');
  // 在这里可以对HTML文件进行处理或者输出
  console.log(data);
} catch (err) {
  console.error(err);
}

```
#### Node中如何读取大文件的内容
fs.readFile在读取小文件时很方便，因为它是一次把文件全部读取到内存中；
假如我们要读取一个3G大小的电影文件，那么内存不就爆了么？node提供了流对象来读取大文件。
流的方式其实就是把所有的数据分成一个个的小数据块（chunk），一次读取一个chunk，分很多次就能读取特别大的文件，写入也是同理。
这种读取方式就像水龙头里的水流一样，一点一点的流出来，而不是一下子涌出来，所以称为流。
```
'use strict'
let fs = require("fs");

fs.readFile("MobyLinuxVM.vhdx", (err, data)=>{
    console.log(err);
});
let reader = fs.createReadStream("MobyLinuxVM.vhdx");
let writer = fs.createWriteStream("MobyLinuxVM-copy.vhdx");
let len = 0;
reader.on('data', (chunk)=>{
    //chunk是每次读取到的一小块字节
    console.log(chunk.length);
    len += chunk.length;
    writer.write(chunk, ()=>{
        console.log("写入了一个chunk");
    })
});
reader.on('end', ()=>{
   console.log("读取完毕,总大小："+len);
});

reader.pipe(writer);
```
如果chunk单次就超过2G可以尝试分片
```
const info = await fs.promises.stat(filepath)
const size = info.size
const SIZE = 128 * 1024 * 1024
let sizeLen = Math.floor(size/SIZE)
 let total = sizeLen +1 ;
 for(let i=0;i<=sizeLen;i++){
   if(sizeLen ===i){
     console.log(i*SIZE,size,total,123)
     readStremfunc(i*SIZE,size,total)
   }else{
     console.log(i*SIZE,(i+1)*SIZE,total,456)
     readStremfunc(i*SIZE,(i+1)*SIZE-1,total)
   }
 }
const readStremfunc = () => {
    const readStream =  fs.createReadStream(filepath,{start:start,end:end})
    readStream.setEncoding('binary')
    let data = ''
    readStream.on('data', chunk => {
        data = data + chunk
    })
    readStream.end('data', () => {
      ...
    })
}
```

### -----------------require模块----------------
#### node中module.exports与exports有什么区别
CommonJS规范最终返回module.exports,
重新为exports赋值，不会该改变module.exports结果
exports与module.exports 指向同一引用空间
#### 编写nodejs代码时为什么没法实时生效？
node只能编译解释当前文件的代码，当文件代码发生改变时node并不会知道，因此需要重新用node执行
#### Node中require时发生了什么，Node件查找的优先级以及Require方法的文件查找策略?
系统缓存→系统模块→文件模块→目录模块→node_modules目录
通过require函数导入其他模块（自定义模块、系统模块、第三方库模块）中的内容，require参数较为简单，但是内部的加载却是十分复杂的，其加载优先级也各自不同
1、缓存的模块优先级最高
2、如果是内置模块，则直接返回，优先级仅次缓存的模块
3、如果是绝对路径 / 开头，则从根目录找
4、如果是相对路径 ./开头，则从当前require文件相对位置找
5、如果文件没有携带后缀，先从js、json、node按顺序查找
6、如果是目录，则根据 package.json的main属性值决定目录下入口文件，默认情况为 index.js
7、如果文件为第三方模块，则会引入 node_modules 文件，如果不在当前仓库文件中，则自动从上级递归查找，直到根目录
#### nodejs中require方法是同步还是异步操作？为什么？
require是同步请求，require支持条件导入、动态导入等，因为require获取得到的是对应路径的module导出的内容。当导出内容发生变化时，再次导入得到的内容是最新的。读取文件采取的也是同步读取
#### 假设有a.js、b.js两个模块相互引用，会有什么问题？是否为陷入死循环？
两个模块相互引用，假设 a、b 两个模块，在 a 模块中应用了 b 模块，之后 b 模块又引用了 a 模块，那么后一个模块引用的是前一个模块未完成的副本，并不会导致死循环
```
// a.js
console.log('a模块start');
exports.test = 1;
undeclaredVariable = 'a模块未声明变量'
const b = require('./b');
console.log('a模块加载完毕: b.test值：',b.test);
// b.js
console.log('b模块start');
exports.test = 2;
const a = require('./a');
console.log('undeclaredVariable: ', undeclaredVariable);
console.log('b模块加载完毕: a.test值：', a.test);
// 运行node a.js打印结果
a模块start
b模块start
undeclaredVariable:  a模块未声明变量
b模块加载完毕: a.test值： 1
a模块加载完毕: b.test值： 2
```
启动 a.js 的时候，会加载 b.js，那么在 b.js 中又加载了 a.js，但是此时 a.js 模块还没有执行完，返回的是一个 a.js 模块的 exports 对象 未完成的副本 给到 b.js 模块。然后 b.js 完成加载之后将 exports 对象提供给了 a.js 模块
#### Node的模块缓存在哪？
node_cache和node_global
#### Node的模块加载机制是什么？
1. 优先成缓存中加载
   模块在第一次加载后会被缓存，意味着多次调用 require() 不会导致模块代码被多次执行
   注意：无论是什么模块都会优先从缓存内加载，以提高加载效率
2. 内置模块的加载机制
   内置模块是 Node.js官网提供的模块，其加载优先级最高
3. 自定义模块的加载机制
   必须以  ./ 或 ../ 开头的路径标识符，如果没有，则node 会当成内置模块或第三方模块加载
   如果省略文件的扩展名，Node.js会按顺序分别尝试加载以下的文件
   按照确切的文件名加载js、json、.node扩展名加载,加载失败终端报错。
4. 第三方模块的加载机制
   如果传递的是第三方模块（不是内置模块，也没有以 ./ 开头），则会从当前模块的父目录开始尝试从 /node_modules 文件夹中加载第三方模块
   如果没有找到对应的第三方模块，则移动到再上一层父目录中进行加载，直到文件系统的根目录
5. 目录作为模块
   当把目录作为模块标识符，传递给 require() 进行加载的时候，有三种加载方式
    1. 在被加载的目录下找 package.json 的文件，并找 main 属性，作为 require() 加载入口
    2. 如果没有，或者main不存在或无法解析，则会试图加载目录下的 index.js 文件
    3. 如果以上均失败了，则会打印错误消息
    
### -----------------buffer模块----------------
#### 如何使用nodejs对base64进行编解码？
要将字符串转换为Base64编码的字符串，我们首先需要使用Buffer.from()方法根据给定的字符串创建一个缓冲区。此方法采用两个参数，即纯文本字符串和字符编码，并为给定的编码创建缓冲区或二进制数据数组。如果未指定字符编码，则将使用UTF-8作为默认值。
```
//plain-textstring
conststr='Base64EncodinginNode.js';
//createabuffer
constbuff=Buffer.from(str,'utf-8');
//encodebufferasBase64
constbase64=buff.toString('base64');
//printBase64string
console.log(base64);
//QmFzZTY0IEVuY29kaW5nIGluIE5vZGUuanM=
```
Base64解码过程与编码过程非常相似。您需要做的就是通过使用base64作为Buffer.from()的第二个参数从Base64编码字符串中创建一个缓冲区，然后使用toString()方法将其解码为UTF-8字符串。
```
//Base64encodedstring
constbase64='QmFzZTY0IEVuY29kaW5nIGluIE5vZGUuanM=';
//createabuffer
constbuff=Buffer.from(base64,'base64');
//decodebufferasUTF-8
conststr=buff.toString('utf-8');
//printnormalstring
console.log(str);
//Base64EncodinginNode.js
```

### -----------------stream模块----------------
#### 在Node中流(stream)分为几类，有哪些应用场景
1. 什么是Stream?
   stream是基于事件EventEmitter的数据管理模式．由各种不同的抽象接口组成，主要包括可写，可读，可读写，可转换等几种类型．
2. Stream有什么好处?
   非阻塞式数据处理提升效率，片断处理节省内存，管道处理方便可扩展等.
3. Stream有哪些典型应用?
   文件，网络，数据转换，音频视频等.
4. 怎么捕获Stream的错误事件?
   监听error事件，方法同EventEmitter.
5. 有哪些常用Stream?分别什么时候使用?
   Readable为可被读流，在作为输入数据源时使用；
   Writable为可被写流,在作为输出源时使用；
   Duplex为可读写流,它作为输出源接受被写入，同时又作为输入源被后面的流读出．
   Transform机制和Duplex一样，都是双向流，区别是Transform只需要实现一个函数_transform(chunk, encoding, callback);而Duplex需要分别实现_read(size)函数和_write(chunk, encoding, callback)函数.
#### Node中如何读取可读流的内容
on('data')，on('readable')，pipe()

### -----------------EventEmitter模块----------------
#### 请解释下你对EventEmitter的理解
EventEmitter是node中一个实现观察者模式的类，主要功能是监听和发射消息，用于处理多模块交互问题
#### EventEmitter应用
模块间传递消息
回调函数内外传递消息
处理流数据，因为流是在EventEmitter基础上实现的.
观察者模式发射触发机制相关应用
#### 怎么捕获EventEmitter的错误事件
监听error事件即可．如果有多个EventEmitter,也可以用domain来统一处理错误事件.
#### Node的回调有什么用吗？
由于Node的IO操作是异步的，不知道什么时候执行完毕，用户为了拿到异步操作的结果，采取回调函数的方式拿到操作的结果。因此回调中采取错误优先原则，防止异步操作中有错误，而拿不到错误结果。

### -----------------node进程与线程----------------
#### 你了解NodeJs的子进程吗？
node是异步非阻塞的，这对高并发非常有效．可是我们还有其它一些常用需求，比如和操作系统shell命令交互，调用可执行文件，创建子进程进行阻塞式访问或高CPU计算等，child-process就是为满足这些需求而生的．child-process顾名思义，就是把node阻塞的工作交给子进程去做．
#### Node中exec.fork与spawn有何区别
exec:
执行 shell 命令
创建新的 shell 进程
获取命令的输出和错误信息
适用场景：执行简单的 shell 命令，获取命令的输出和错误信息。
```
const { exec } = require('child_process');

exec('ls -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`Command output: ${stdout}`);
});
```
execFile:
执行指定的可执行文件
不通过 shell 执行命令
获取命令的输出和错误信息
适用场景：执行可执行文件，获取输出和错误信息。
```
const { execFile } = require('child_process');

execFile('myapp.exe', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console
```
fork:
衍生新的 Node.js 子进程
执行 JavaScript 文件
支持父子进程间通过消息进行通信
适用场景：并行执行 JavaScript 文件，父子进程间通过消息通信。
```
const { fork } = require('child_process');

const child = fork('child.js');

child.on('message', message => {
  console.log(`Parent received message: ${message}`);
});

child.send('Hello from parent!');
```
spawn:
执行命令
不创建 shell 进程
支持流式处理输入输出
适用场景：执行复杂命令，进行流式处理输入输出。
```
const { spawn } = require('child_process');

const child = spawn('ls', ['-l']);

child.stdout.on('data', data => {
  console.log(`Command output: ${data}`);
});

child.on('close', code => {
  console.log(`Command exited with code ${code}`);
});
```
#### Node如何进行进程间通信
使用child_process的fork．原理是子程序用process.on, process.send，父程序里用child.on,child.send进行交互.
```
1) fork-parent.js
var cp = require('child_process');
var child = cp.fork('./fork-child.js');
child.on('message', function(msg){
	console.log('老爸从儿子接受到数据:', msg);
});
child.send('我是你爸爸，送关怀来了!');

2) fork-child.js
process.on('message', function(msg){
	console.log("儿子从老爸接收到的数据:", msg);
	process.send("我不要关怀，我要银民币！");
});
```
#### Node中cluster的原理是什么
Cluster模块是Node.js的一个内置模块，它用于创建多进程集群，以充分利用多核CPU的计算资源，提高应用程序的性能和稳定性。
通过Cluster模块，Node.js应用可以创建多个子进程，每个子进程可以独立处理请求，共同组成一个进程集群，从而实现负载均衡和并发处理。
1. 导入Cluster模块：首先需要在Node.js应用中导入Cluster模块。
2. 判断是否为主进程：Cluster模块启动后，会默认创建一个主进程和多个子进程。我们需要判断当前进程是主进程还是子进程。
3. 启动子进程：在主进程中使用cluster.fork()方法创建多个子进程。每个子进程将执行在else分支中定义的代码块，通常用于处理请求和其他业务逻辑。
4. 请求分发：当有请求到达主进程时，Cluster模块会自动将请求分发给子进程，实现负载均衡。不同的子进程会独立地处理各自的请求，从而提高了应用程序的并发处理能力。
```
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length; // 获取CPU核心数
console.log(numCPUs)
if (cluster.isMaster) {
    // 主进程
    console.log(`Master ${process.pid} is running`);
    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork(); // 创建子进程
    }
} else {
    // 子进程
    console.log(`Worker ${process.pid} started`);
    // 在这里处理请求和其他业务逻辑
    http
        .createServer((req, res) => {
            res.writeHead(200);
            res.end(process.pid+'');
        })
        .listen(8000);
}
```
#### 怎样调节node执行单元的内存大小
用--max-old-space-size 和 --max-new-space-size 来设置 v8 使用内存的上限
#### child-process和process的stdin, stdout, stderror是一样的吗
概念都是一样的，输入，输出，错误，都是流．区别是在父程序眼里，子程序的stdout是输入流，stdin是输出流．
#### 线程与进程的区别
（1）一个程序至少有一个进程，一个进程至少有一个线程
（2）线程的划分尺度小于进程，使得多线程程序的并发性高。
（3）进程在执行过程中拥有独立的内存单元，而多个线程共享内存，极大地提高了程序的运行效率。
（4）线程在执行过程中与进程有区别。每个独立的线程都有程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。
（5）从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看作多个独立的应用来实现进程的调度、管理和资源分配。这是进程和线程的主要区别。

### -----------------node网络模块----------------
#### node的网络模块架构是什么样子的
node全面支持各种网络服务器和客户端，包括tcp, http/https, tcp, udp, dns, tls/ssl等.
#### Node中如何开启https
1. 生成SSL证书：您可以使用OpenSSL工具生成自签名证书，或者从权威机构购买证书。以下是使用OpenSSL生成自签名证书的命令：
```
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
2. 在您的Node.js应用程序中使用证书：将生成的证书文件添加到您的应用程序中，并在创建服务器实例时使用它们
```
const https = require('https');
const fs = require('fs');
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};
https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(443);

```
#### 使用nodejs可以获取客户端连接的真实IP吗？为什么？如何获取？
function getClientIP(req) {
   return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
   req.connection.remoteAddress || // 判断 connection 的远程 IP
   req.socket.remoteAddress || // 判断后端的 socket 的 IP
   req.connection.socket.remoteAddress;
};
#### Node中服务端框架如何解析http的请求体body
body-parser中间件

### -----------------node其他----------------
#### 在开发nodejs的时候如何做到多版本共存？
使用nvm版本切换可以通过nvm下载node各种版本，nvm use 对应的版本
#### 你有用过Node的哪些模板引擎呢？说下它们的区别
EJS：EJS是一个流行的JavaScript模板引擎，它允许在Node.js应用程序中使用HTML模板。
Handlebars.js：Handlebars.js是一个基于JavaScript的模板引擎，它为Node.js应用程序提供了类似于HTML的模板语法。
Pug：Pug是一个快速的、易于使用的模板引擎，它使用HTML作为模板，并使用JavaScript来解析和编译模板。
Mustache：Mustache是一个简单的模板引擎，它使用JavaScript来解析和编译模板。
Swig：Swig是一个用于Node.js的模板引擎，它允许在Node.js应用程序中使用HTML模板。
#### 程序总是崩溃，怎样找出问题在哪里?
node --prof 查看哪些函数调用次数多
memwatch和heapdump获得内存快照进行对比，查找内存溢出
#### 有哪些常用方法可以防止程序崩溃
try-catch-finally
EventEmitter/Stream error事件处理
domain统一控制
jshint静态检查
jasmine/mocha进行单元测试
#### 如何捕获NodeJS中的错误，有几种方法?
1、 try catch 方式
```
try {
    syncError()
} catch (e) {
    /*处理异常*/
    console.log(e.message)
}
```
2、 callback方式
```
fs.mkdir('/dir', function (e) {
    if (e) {
        /*处理异常*/
        console.log(e.message)
    } else {
        console.log('创建目录成功')
    }
})
```
3、 event方式
```
let events = require("events");
//创建一个事件监听对象
let emitter = new events.EventEmitter();
//监听error事件
emitter.addListener("error", function (e) {
    /*处理异常*/
    console.log(e.message)
});
//触发error事件
emitter.emit("error", new Error('出错啦'));

```
4、 Promise方式
```
new Promise((resolve, reject) => {
    syncError()
}).then(() => {
    //...
}).catch((e) => {
    /*处理异常*/
    console.log(e.message)
})
```
5、 Async/awiat方式
```
Async/Await是基于Promise的，所以Promise无法捕获的异常，Async/Await同样无法捕获
```
6、 process方式
```
process.on('uncaughtException', function (e) {
    /*处理异常*/
    console.log(e.message)
});
asyncError()
syncError()
```
7、domain方式
```
let domain = require('domain')
let d = domain.create()
d.on('error', function (e) {
    /*处理异常*/
    console.log(e.message)
})
d.run(asyncError)
d.run(syncError)
```
#### async都有哪些常用方法，分别是怎么用?
async是一个js类库，它的目的是解决js中异常流程难以控制的问题．async不仅适用在node.js里，浏览器中也可以使用
1、async.parallel并行执行完多个函数后，调用结束函数
```
async.parallel([
    function(){ ... },
    function(){ ... }
], callback);
```
2、async.waterfall依次执行多个函数，后一个函数以前面函数的结果作为输入参数
```
async.series([
    function(){ ... },
    function(){ ... }
]);
```
3、async.map异步执行多个数组，返回结果数组
```
async.map(['file1','file2','file3'], fs.stat, function(err, results){
    // results is now an array of stats for each file
});
```
4、async.filter异步过滤多个数组，返回结果数组
```
async.filter(['file1','file2','file3'], fs.exists, function(results){
    // results now equals an array of the existing files
});
```
#### 有没有用过continuous-local-storage，用在了哪里
continuous-local-storage是nodejs中类似本地存储的，它可以实现多个文件中数据共享
```js

//a.js
const storage=require('continuous-local-storage');
var space=stroage.createNameSpace('data');
space.set('user','xx')
 
//b.js
const storage=require('continuous-local-storage');
var space=storage.getNameSpace('data');
console.log(space.get('user'))
```
#### 你是怎么调试NodeJs呢？有哪些方法？
1. 使用 console.log()
2. 使用断点调试node --debug app.js 和node-inspector
3. 通过设置日志级别输出对应的信息
#### Libuv是什么,他跟Node是什么关系
libuv是一个高性能的，事件驱动的I/O库，并且提供了跨平台（如windows, linux）的API。
libuv强制使用异步的，事件驱动的编程风格。它的核心工作是提供一个event-loop，还有基于I/O和其它事件通知的回调函数。
nodejs使用libuv监听各种异步事件
#### Node端如何向服务器上传文件
```
let storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')  //注意路径必须存在
    },
    //修改文件名称
    filename: function (req, file, cb) {
        let fileFormat = (file.originalname).split(".");
        cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
const upload = multer({ storage })
// 上传图片（form-data 形式，支持多文件上传）loginCheck
router.post('/upload-img', upload.single('file'), async ctx => {
    console.log(ctx.req.file)
    console.log('url', ctx.req.file.destination + ctx.req.file.filename)
    ctx.body = new SuccessRes({url: ctx.req.file.destination + ctx.req.file.filename})
})
```
#### Node中如何发送请求
1. HTTP/HTTPS模块
```
const https = require('https');

https.get('https://xxx', (response) => {
  let todo = '';

  // called when a data chunk is received.
  response.on('data', (chunk) => {
    todo += chunk;
  });

  // called when the complete response is received.
  response.on('end', () => {
    console.log(JSON.parse(todo).title);
  });

}).on("error", (error) => {
  console.log("Error: " + error.message);
});
```
2. Request
```
npm install request --save
const request = require('request');
request('https://xxx', { json: true }, (err, res, body) => {
  if (err) { 
      return console.log(err); 
  }
  console.log(body.id);
  console.log(body.title);
});
```
3. Needle
```
npm install needle --save
const needle = require('needle');

needle.get('https://xxx', {json: true}, (err, res) => {
   if (err) {
      return console.log(err);
   }
   let todo = res.body;
   console.log(todo.id);
   console.log(todo.title);
});
```
4. Axios
```
npm install axios --save
const axios = require('axios');

axios.get('https://xxx')
  .then(res => {
    console.log(res.data.id);
    console.log(res.data.title);
  })
  .catch(err => {
    console.log(err);
  });
```
5. SuperAgent
```
npm install superagent --save
const superagent = require('superagent');

superagent.get('https://xxx')
.end((err, res) => {
  if (err) { 
      return console.log(err); 
  }
  console.log(res.body.id);
  console.log(res.body.title);
});
```
6. Got
```
npm install got --save
const got = require('got');

got('https://xxx', { json: true })
    .then(res => {
      console.log(res.body.id);
      console.log(res.body.title);
    }).catch(err => {
      console.log(err.response.body);
    });
```
7. Node-fetch
```
npm install node-fetch --save
const fetch = require('node-fetch');

fetch('https://xxx')
    .then(res => res.json()) // expecting a json response
    .then(json => {
        console.log(json.id);
        console.log(json.title);
    })
    .catch(err => {
        console.log(err);
    });
```
#### node中如何监听异步资源async_hooks的生命周期
async_hooks模块是Node.js的核心模块，它提供了一组API，允许我们注册钩子函数来监听异步资源的生命周期。这些钩子函数会在异步资源的不同生命周期阶段被调用，从而让我们了解异步操作的状态。
```
const async_hooks = require('async_hooks');
// 创建一个钩子
const hook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    console.log('Init', asyncId, type, triggerAsyncId, resource);
  },
  before(asyncId) {
    console.log('Before', asyncId);
  },
  after(asyncId) {
    console.log('After', asyncId);
  },
  destroy(asyncId) {
    console.log('Destroy', asyncId);
  }
});
// 启用钩子
hook.enable();
// 创建一个异步操作
setTimeout(() => {
  console.log('Timeout callback');
}, 1000);
```
应用场景
async_hooks模块在多个场景下都非常有用：
性能优化：通过分析异步资源的生命周期，我们可以找到性能瓶颈，从而优化代码。
错误追踪：当异步操作出现错误时，我们可以通过async_hooks模块快速定位问题所在。
调试和日志记录：通过监听异步资源的生命周期，我们可以更详细地了解代码的执行过程，为调试和日志记录提供便利。
#### 如何获取你们Node项目的cpu profile快照
node --prof
node --prof-process
node --inspect app.js
performance面板
#### 如何检测并避免循环依赖
```
function isCircularReference(value) {
  const isObject = (value) =>
    Object.prototype.toString.call(value) === "[object Object]";
  const isPrimitive = (value) =>
    /Number|Boolean|String|Undefined|Null|Symbol/.test(
      Object.prototype.toString.call(value),
    );
  const memory = new WeakMap();
  let isCycled = false;
  const traverse = function (value) {
    if (!isPrimitive(value)) {
      if (memory.has(value)) {
        isCycled = true;
        return;
      }
      memory.set(value, true);
      const keys = Object.keys(value);
      for (const key of keys) {
        traverse(value[key]);
      }
    }
  };
  traverse(value);
  return isCycled;
}
```
#### 有没有使用过Node的inspect这个核心模块
util.inspect是Node.js中的一个模块，它提供了将任何JavaScript对象转换为字符串的功能。它通常用于调试和日志记录。
当您在Node.js中使用util.inspect函数时，它会返回一个表示传递对象的字符串。您可以通过传递不同的选项来自定义字符串的格式。例如，您可以指定缩进、深度、颜色等选项。
```
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
```
#### 在Node项目中你有使用过哪些常用的中间件？
中间件（Middleware）是介于应用系统和系统软件之间的一类软件，它使用系统软件所提供的基础服务（功能），衔接网络上应用系统的各个部分或不同的应用，能够达到资源共享、功能共享的目的
例如在express、koa等web框架中，中间件的本质为一个回调函数，参数包含请求对象、响应对象和执行下一个中间件的函数
在这些中间件函数中，我们可以执行业务逻辑代码，修改请求和响应对象、返回响应数据等操作
#### I/O多路复用轮询技术select和epoll的区别是什么？
#### 你是如何选择Node.js的版本的？
Node的版本规则
每个版本的ChangeLog，即该版本做了哪些变动
环境约束
项目约束
#### Node项目中，你是怎么记录日志的？
1. 记录有意义和目的
   不要添加不必要的日志，因为多余的日志信息会变成噪音。另外如果应用程序写日志的频率过高，将直接影响应用程序的性能。
2. 进行分割，避免造成大日志文件
   如果对日志不进行分割，将会导致日志文件非常大，在分析时会很麻烦。同时对于文件日志来说，文件过大也将影响性能。可以为单独的日志等级使用单独的日志文件，或者可以尝试使用大多数日志框架中可用的滚动日志文件特性。根据时间或大小对日志文件进行分割压缩。
3. 不应该有副作用
   这里说的副作用是指日志记录不能影响应用程序本身，不能因为日志记录导致严重的程序问题。
4. 不能记录任何敏感信息   
   在登录时，必须确保没有记录任何敏感信息，如用户登录名和密码、身份证、手机号码、银行卡号等。
5. Winston ：灵活的通用日志库
   Morgan ： HTTP请求记录器中间件
   Pino：超快（非常低的开销），纯原生 JSON 记录器
   Loglevel：JavaScript最小的轻量级简单日志记录
   log4js ：没有运行时依赖的日志框架   
#### Node中如何查看函数异步调用栈
async_hooks
#### Node如何热部署（热更新）
1. 代码没法实时生效的原因
   当我们通过require('xx/xx.js')去加载一个功能模块的时候，node会把require('xx/xx.js')得到的结果缓存在require.cache('xx/xx.js')中
   当我们多次调用require('xx/xx.js')，node就不再重新加载，而是直接从require.cache('xx/xx.js')读取缓存
   所以当小伙伴在服务器上修改xx/xx.js这个路径下的文件时，node只会去读取缓存，不会去加载小伙伴的最新代码
2. 原理
   扫描项目中的所有文件，将所有文件添加监听变化
   当文件变动就会算出缓存文件的地址并清空该缓存
   加载修改后的文件并检测当前文件的语法错误校验通过后重新加载这个文件并添加到缓存中
3. 常用的热部署工具
   Nodemon
#### Node适用于哪些场景开发？
Node.js适合做一些高并发的，I/O密集型的应用。
当应用程序需要处理大量并发的I/O，而在向客户端发出响应之前，应用程序内部并不需要进行非常复杂的处理的时候，Node.js非常适合。Node.js也非常适合与web socket配合，开发长连接的实时交互应用程序。
#### 说说你对Node模块的理解
模块化：Node模块采用了模块化的开发方式，将代码分割为小的模块，每个模块负责实现特定的功能。这种模块化的开发方式有助于代码的复用和维护，提高了开发效率。
文件级别作用域：Node模块在加载时会创建一个独立的作用域，模块内部的变量和函数在模块外部是不可见的。这种文件级别的作用域可以避免全局命名冲突，提供了更好的封装性。
CommonJS规范：Node模块遵循CommonJS规范，该规范定义了模块的导入和导出方式。通过使用require函数导入其他模块，可以在当前模块中使用导入模块的功能。使用module.exports或exports导出模块，使其他模块可以引用当前模块。
内置模块和第三方模块：Node.js提供了一些内置模块，如fs、http等，可以直接使用。同时，社区也有丰富的第三方模块，可以通过npm安装并引入使用。这些模块提供了很多常用的功能和工具，方便开发者快速构建应用。
#### 如何在生产环境部署一个Node应用

### -----------------node框架----------------
#### 说说koa洋葱模型有什么优点？它是如何实现洋葱模型的？
Koa的洋葱模型（Onion Model）是其核心设计之一，用于实现中间件的执行流程。洋葱模型的名字源于中间件的执行顺序，中间件形成了像洋葱一样层层包裹的结构，请求和响应在中间件层层传递，直到达到最内层的中间件，然后再回到外层。
洋葱模型的原理如下：
当有请求到达Koa应用时，Koa会依次按照注册的中间件顺序执行它们。
每个中间件都可以通过调用next()方法将控制权交给下一个中间件。
在执行中间件的过程中，如果中间件没有调用next()，那么后续的中间件将不会被执行，而是开始逆序执行之前所有的中间件的回调函数，直到达到最外层的中间件。
当最外层的中间件的回调函数执行完毕后，控制权会逆序传递回去，继续执行之前没有执行完毕的中间件的next()后面的代码。
这样，就形成了一个类似洋葱的结构，请求和响应在中间件之间层层传递，直到达到最内层，然后再回到外层，这就是Koa洋葱模型的核心原理。
```
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('middlewareA before');
  await next();
  console.log('middlewareA after');
});

app.use(async (ctx, next) => {
  console.log('middlewareB before');
  await next();
  console.log('middlewareB after');
});

app.use(async (ctx, next) => {
  console.log('middlewareC before');
  await next();
  console.log('middlewareC after');
});

app.listen(3000);
```
```
middlewareA before
middlewareB before
middlewareC before
middlewareC after
middlewareB after
middlewareA after
```
#### koa是如何解决跨域的？
1. 直接在每个请求中添加 header 信息
```
router.post('/', ctx => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.body = '跨域请求';
});
```
2. 为所有路由添加 header 信息
```
router.all('*', async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*")
  ctx.set("Access-Control-Allow-Headers", "X-Requested-With")
  ctx.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
  ctx.set("X-Powered-By",' 3.2.1')
  ctx.set("Content-Type", "application/json;charset=utf-8")
  next()
})
```
3. 抽离为中间件
```
/**
 * 关键点：
 * 1、如果需要支持 cookies,
 *    Access-Control-Allow-Origin 不能设置为 *,
 *    并且 Access-Control-Allow-Credentials 需要设置为 true
 *    (注意前端请求需要设置 withCredentials = true)
 * 2、当 method = OPTIONS 时, 属于预检(复杂请求), 当为预检时, 可以直接返回空响应体, 对应的 http 状态码为 204
 * 3、通过 Access-Control-Max-Age 可以设置预检结果的缓存, 单位(秒)
 * 4、通过 Access-Control-Allow-Headers 设置需要支持的跨域请求头
 * 5、通过 Access-Control-Allow-Methods 设置需要支持的跨域请求方法
 */
module.exports = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*'); //允许来自所有域名请求(不携带cookie请求可以用*，如果有携带cookie请求必须指定域名)
    // ctx.set("Access-Control-Allow-Origin", "http://localhost:8080"); // 只允许指定域名http://localhost:8080的请求
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE'); // 设置所允许的HTTP请求方法
    ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type'); // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
    // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。
    ctx.set('Content-Type', 'application/json;charset=utf-8'); // Content-Type表示具体请求中的媒体类型信息
    ctx.set('Access-Control-Allow-Credentials', true); // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
    // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
    ctx.set('Access-Control-Max-Age', 300); // 该字段可选，用来指定本次预检请求的有效期，单位为秒。
    // 当请求方法是PUT或DELETE等特殊方法或者Content-Type字段的类型是application/json时，服务器会提前发送一次请求进行验证
    // 下面的的设置只本次验证的有效时间，即在该时间段内服务端可以不用进行验证
    ctx.set('Access-Control-Expose-Headers', 'myData'); // 需要获取其他字段时，使用Access-Control-Expose-Headers，
    // getResponseHeader('myData')可以返回我们所需的值
    /*
    CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：
        Cache-Control、
        Content-Language、
        Content-Type、
        Expires、
        Last-Modified、
        Pragma。
    */
    /* 解决OPTIONS请求 */
    if (ctx.method == 'OPTIONS') {
        ctx.body = '';
        ctx.status = 204;
    } else {
        await next();
    }
};
```
koa2-cors
```
app.use(
  cors({
    origin: function(ctx) { //设置允许来自指定域名请求
      return 'http://localhost:8080'; //只允许http://localhost:8080这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
);
```
#### koa中如果一个中间件没有调用await next()，结果会怎样？
后面的中间件不会执行
#### koa中next()的原理是什么？
中间件之间通过next 函数联系，当一个中间件调用 next() 后，会将控制权交给下一个中间件，直到下一个中间件不再执行 next() 时沿路返回，依次将控制权交给上一个中间件
#### koa2相比koa1有什么改进呢？
koa1的中间件使用generator函数，使用yield next进入下一个中间件，koa2中间件使用async函数，使用await next()进入下一个中间件
#### 请说说koa的app.use()执行流程
简单说其实就是把函数存放到this.middleware数组里，然后返回实例对象this。
#### 你有使用过express和koa吗？它俩有什么区别？
Koa 和 Express 是两个流行的 Node.js Web 框架，它们有一些共同的核心设计思想和原理，同时也有一些区别。以下是它们的核心设计思想和原理的概述：
Express 的核心设计思想和原理：
中间件架构：Express 使用中间件架构来处理请求和响应。中间件是一个函数，可以访问请求对象（req）、响应对象（res）和下一个中间件函数（next）。每个请求都会经过一系列的中间件函数，每个中间件函数可以对请求和响应进行处理或者将控制权传递给下一个中间件函数。这种中间件架构使得开发者可以按照需要添加、删除或者修改中间件，从而实现更灵活请求处理逻辑。
路由系统：Express 提供了一个简单而灵活的路由系统，用于定义和处理不同的路由。开发者可以使用路由定义来匹配请求的 URL 和 HTTP 方法，并指定相应的处理函数。这使得开发者可以根据不同的 URL 和方法，定义不同的请求处理逻辑。
请求和响应对象：Express 提供了方便请求对象（req）和响应对象（res），使开发者能够访问和操作请求和响应的各个方面，例如请求头、请求体、响应头、响应体等。这些对象提供了许多有用的方法和属性，使开发者能够更轻松地处理和操作请求和响应。
Koa 的核心设计思想和原理：
异步中间件流程控制：Koa 强调使用异步中间件来处理请求和响应，以提供更好的性能和可伸缩性。Koa 使用 async/await 或者返回 Promise 的中间件函数，使得中间件可以按照顺序执行异步操作，而不需要嵌套的回调函数。这种异步中间件流程控制使得代码更加清晰和易于理解。
上下文对象：Koa 引入了上下文对象（context），它是一个封装了请求和响应的对象。上下文对象提供了许多方便的方法和属性，使开发者能够更方便地访问和操作请求和响应的各个方面。上下文对象还提供了一些辅助方法，例如 throw 和 assert，用于处理错误和断言。
中间件洋葱模型：Koa 的中间件执行顺序遵循洋葱模型。这意味着每个中间件函数可以在处理请求之前和之后执行一些操作，从而形成一个环绕式的执行流程。这种洋葱模型使得中间件可以在请求处理过程中执行前置操作和后置操作，例如身份验证、日志记录等。
总的来说，Express 和 Koa 都是基于中间件架构的 Node.js Web 框架，它们的核心设计思想和原理都围绕着中间件的概念展开。Express 更加简单和直接，注重灵活性和易用性，而 Koa 则更加注重异步编程和中间件流程控制，提供了更强大的异步处理能力。开发者可以根据自己的需求和偏好选择适合的框架来构建 Node.js Web 应用程序。
#### express项目的目录大致是什么结构的
首先，执行安装 express的指令：npm install express-generator-g。
然后，通过 express指令创建项目：express xxx。
创建的项目目录结构如下。
– ./app.js  应用核心配置文件（入口文件）
– ./bin  存放启动项目的脚本文件
– ./ package.json  存储项目的信息及模块依赖
– ./public 静态文件（css、js、img等）
– ./routes 路由文件（MVC中的 controller）
– ./views 页面文件（jade模板）
#### express常用函数有哪些？
– express .Router—路由组件
– app.get—路由定向。
– app.configure——配置。
– app.set一设定参数。
– app.use——使用中间件。
#### express中如何获取路由的参数
使用 req.params.name来获取；使用req.body.username来获得表单传入参数 username；express的路由支持常用通配符有？、+、*、( )。
#### express response有哪些常用方法？
– res.download( )，弹出文件下载。
– res.end ( )，结束响应。
– res.json( )，返回json。
– res.jsonp( )，返回 jsonp。
– res.redirect ( )，重定向请求。
– res.render ( )，渲染模板。
– res.send ( )，返回多种形式数据。
– res.sendFile  ( )，返回文件。
– res.sendStatus( )，返回状态。

### -----------------node架构方面----------------
#### 如何实现jwt鉴权机制？说说你的思路
Token登录模式是一种在Web应用中进行身份验证和授权的常见方式。它基于令牌（Token）的概念，通过在客户端和服务器之间传递令牌来验证用户的身份和授权访问。
以下是Token登录模式的一般工作流程：
用户提供凭据：用户在登录页面上提供用户名和密码等凭据。
身份验证：服务器接收到用户提供的凭据后，进行身份验证。通常，服务器会检查用户名和密码是否匹配，并验证用户的身份。
生成令牌：如果身份验证成功，服务器会生成一个令牌（Token）。令牌是一个加密的字符串，其中包含有关用户身份和权限的信息。
令牌返回给客户端：服务器将生成的令牌发送回客户端作为登录凭据的一部分。通常，令牌会被存储在客户端的Cookie或本地存储中。
请求授权：客户端在后续的请求中将令牌包含在请求头、查询参数或Cookie中，并发送给服务器。
令牌验证：服务器接收到请求后，会验证令牌的有效性和完整性。服务器可以解密令牌并检查其中的信息，例如用户ID、角色、权限等。
授权访问：如果令牌验证成功，服务器会授权用户访问请求的资源或执行请求的操作。服务器可以使用令牌中的信息来确定用户的权限级别和可访问的资源。
令牌过期和刷新：令牌通常具有过期时间。当令牌过期时，客户端可以使用刷新令牌（Refresh Token）来获取新的令牌，而无需重新进行身份验证。
Token登录模式的主要优势包括：
无状态：服务器不需要在后端存储用户的会话信息，因为所有必要的信息都包含在令牌中。这使得服务器可以更轻松地进行水平扩展和负载均衡。
跨域支持：令牌可以在跨域请求中使用，因为令牌可以在请求头、查询参数或Cookie中传递。
安全性：令牌可以使用加密算法进行签名和验证，确保令牌的完整性和安全性。此外，令牌还可以通过设置短期过期时间和使用刷新令牌来增加安全性。
可扩展性：Token登录模式可以与其他身份验证和授权机制结合使用，例如多因素身份验证、单点登录（SSO）等。
总的来说，Token登录模式通过使用令牌来验证用户身份和授权访问，提供了一种安全、可扩展和无状态的身份验证机制。它已经成为现代Web应用中常见的身份验证方式之一。
#### Consul的四大核心特性是什么？
服务发现：可以方便的实现服务注册，通过DNS或者HTTP应用程序可以很容易的找到他所依赖的服务.
Key/Value存储：使用Key/Value进行数据存储。
多数据中心：Consul支持开箱即用的多数据中心。这意味着用户不需要担心建立额外的抽象层让业务扩展到多个区域
健康检查：可以对指定服务进行健康检查例如，Response Status是否为200，避免将流量转发到不健康的服务上。
#### pm2的cluster和fork两种模块有什么区别？如何选择？
如何选择模式？ 选择Cluster模式还是Fork模式取决于你的应用程序的特性和需求。 如果你的应用程序需要处理大量的并发请求，并且服务器具有多个CPU核心，则应该选择Cluster模式。 
如果你的应用程序只需要处理少量的并发请求，并且服务器只有一个CPU核心，则应该选择Fork模式。
#### 你了解什么是集群吗？
集群是一组相互独立的、通过高速网络互联的计算机，它们构成了一个组回，并以单一系统的模答式加以管理。 
一个客户与集群相互作用时，集群像是一个独立的服务器。 集群配置是用于提高可用性和可缩放性
#### 你知道什么是ORM吗？
ORM框架是通过对SQL语句进行封装，并将数据库的数据表和用户代码里的模型对象进行自动映射。
这样开发者使用时只需要调用模型对象的方法就能实现对数据库的增删改查，不用手写太多的SQL了。
Node.js中比较流行的ORM框架有：
Sequelize：基于JS，在Koa、Express、Egg这样的框架里操作数据库用Sequelize比较多，当然Sequelize经过一定扩展也可以支持TS。
TypeORM：基于TS，Nest框架首选TypeORM。
#### 说说你对BFF的理解
BFF（Backend For Frontend）,说白了就是中间层，由前端同学开发的后端项目。
最常见的BFF项目像SSR和GraphQL。SSR用来解决SEO问题，GraphQL用来聚合数据，解决API查询的问题。
#### 你知道什么是REPL吗？
交互式解释器如node环境的命令行窗口，windows系统的终端
#### Mongodb如何批量更新文档？
```
// 字段拼接指定字符
db.collName.find().forEach(
  function(e){
    db.collName.update({'_id': e._id}, {'fieldName' : e.fieldName+ 'xxx'}}, false, true)
  }
)
// 字段替换指定字符
db.collName.find().forEach(
  function(e){
    db.collName.update({'_id': e._id}, {'fieldName' : e.fieldName.replace('xxx', '需要替换成的指定字符')}}, false, true)
  }
)
// update() 方法用于更新已存在的文档
// query : update的查询条件，类似sql update查询内where后面的。
// update : update的对象和一些更新的操作符（如$,$inc…）等，也可以理解为mysql 中update查询内set后面的
// upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
// multi : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
// writeConcern :可选，抛出异常的级别。
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
```
（1） MySQL是传统的关系型数据库， MongoDB则是非关系型数据库。
（2） MongoDB以BSON结构进行存储，在存储海量数据方面有着很明显的优势。
（3）与传统关系型数据库相比， NoSQL有着非常显著的性能和扩展性优势。
（4）与传统的关系型数据库（如与 MySQL）相比， MongoDB的优点如下。
弱一致性（最终一致），更能保证用户的访问速度。
使用文档结构的存储方式，能够更便捷地获取数据。
#### 有没有了解过Redis？
用Redis实现缓存：将热门数据和热门页面存到Redis进行缓存，比如热门商品信息，商品页面和网站首页。
缓存遇到的问题：缓存穿透、缓存雪崩、缓存击穿。
Redis的进阶功能：Redis有各种数据结构，除了缓存之外，还能实现很多功能。比如：消息队列、附近的人、排行榜等等。
Redis持久化：Redis可以将缓存持久化到本地，持久化策略包括RDB和AOF。
集群：如果单机Redis不够用的话，可以考虑搭建Redis集群，Redis集群有主从和哨兵两种模式。
Redis对于后端来说，是一个专门的话题，我将会在我的后端面试手册中详细讲解，感兴趣的小伙伴可以持续关注。
#### RabbitMQ的应用场景有哪些？
一、接收模式
1. 单发送单接收
2. 单发送多接收
3. Publish/Subscribe(发布、订阅模式)
4. 路由 Routing (按路线发送接收)
5. 主题交换机Topics (按topic发送接收)
6. 远程过程调用 PRC
7. 发布者确认
二、四种交换机介绍
1. 直连交换机（Direct exchange）： 具有路由功能的交换机，绑定到此交换机的时候需要指定一个routing_key，交换机发送消息的时候需要routing_key，会将消息发送道对应的队列
2. 扇形交换机（Fanout exchange）： 广播消息到所有队列，没有任何处理，速度最快
3. 主题交换机（Topic exchange）： 在直连交换机基础上增加模式匹配，也就是对routing_key进行模式匹配，*代表一个单词，#代表多个单词
4. 首部交换机（Headers exchange）： 忽略routing_key，使用Headers信息（一个Hash的数据结构）进行匹配，优势在于可以有更多更灵活的匹配规则
三、Rabbitmq如何保证消息不丢失
生产者提交给消息服务器时，使用确认机制
消息服务器对应的队列、交换机等都持久化，保证数据的不丢失
消费者采用消息确认机制，保证数据的不丢失
#### 你有写过定时任务吗？是用第三方模块吗？
一、安装
npm install node-schedule 或 yarn add node-schedule
二、基础用法
使用 schedule.scheduleJob() 即可创建一个定时任务，一个简单的上手示例：
```
const schedule = require('node-schedule');
// 当前时间的秒值为 10 时执行任务，如：2018-7-8 13:25:10
let job = schedule.scheduleJob('10 * * * * *', () => {
   console.log(new Date());
});
```
如何运行示例？（首先确保安装了 Node.js）
1、新建一个 *.js 文件，如：test.js，粘贴示例代码；
2、终端（或命令行）cd 到当前文件的所在目录；
3、终端执行 node test.js 即可执行代码；
4、console 会在终端界面直接输出内容；
5、Ctrl + C 可退出执行；
时间数值按下表表示
*  *  *  *  *  *
┬  ┬  ┬  ┬  ┬  ┬
│  │  │  │  │  |
│  │  │  │  │  └ 星期几，取值：0 - 7，其中 0 和 7 都表示是周日
│  │  │  │  └─── 月份，取值：1 - 12
│  │  │  └────── 日期，取值：1 - 31
│  │  └───────── 时，取值：0 - 23
│  └──────────── 分，取值：0 - 59
└─────────────── 秒，取值：0 - 59（可选）
也可以指定一个具体的时间，如：
```
const schedule = require('node-schedule');
// 定义一个未来的时间
let date = new Date(2016, 6, 13, 15, 50, 0);
// 定义一个任务
let job = schedule.scheduleJob(date, () => {
   console.log(new Date());
});
```
三、进阶用法
除了基础的用法，我们还可以使用一些更为灵活的方法来实现定时任务。
3.1、隔一段时间执行一次
```
const schedule = require('node-schedule');
// 定义规则
let rule = new schedule.RecurrenceRule();
rule.second = [0, 10, 20, 30, 40, 50]; // 每隔 10 秒执行一次
// 启动任务
let job = schedule.scheduleJob(rule, () => {
   console.log(new Date());
});
```
rule 支持设置的值有 second、minute、hour、date、dayOfWeek、month、year 等。一些厂家的用法，如：
每秒执行
rule.second = [0,1,2,3......59];
每分钟 0 秒执行
rule.second = 0;
每小时 30 分执行
rule.minute = 30;
rule.second = 0;
每天 0 点执行
rule.hour =0;
rule.minute =0;
rule.second =0;
每月 1 号的 10 点执行
rule.date = 1;
rule.hour = 10;
rule.minute = 0;
rule.second = 0;
每周一、周三、周五的 0 点和 12 点执行
rule.dayOfWeek = [1,3,5];
rule.hour = [0,12];
rule.minute = 0;
rule.second = 0;
四、取消任务
可以使用 cancel() 终止一个运行中的任务。
job.cancel();
