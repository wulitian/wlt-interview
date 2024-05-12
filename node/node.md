## node面试题

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
#### Node中如何读取可读流的内容

#### Node中如何读取大文件的内容

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
   按照确切的文件名加载,补全js、json、.node扩展名加载,加载失败终端报错。
4. 第三方模块的加载机制
   如果传递的是第三方模块（不是内置模块，也没有以 ./ 开头），则会从当前模块的父目录开始尝试从 /node_modulles 文件夹中加载第三模块
   如果没有找到对应的第三方模块，则移动到再上一层父目录中进行加载，直到文件系统的根目录
5. 目录作为模块
   当把目录作为模块标识符，传递给 require() 进行加载的时候，有三种加载方式
    1. 在被加载的目录下找 package.json 的文件，并找 main 属性，作为 require() 加载入口
    2. 如果没有，或者main不存在或无法解析，则会试图加载目录下的 index.js 文件
    3. 如果以上两步都失败了，则会打印错误消息
    
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
   Transform机制和Duplex一样，都是双向流，区别是Transfrom只需要实现一个函数_transfrom(chunk, encoding, callback);而Duplex需要分别实现_read(size)函数和_write(chunk, encoding, callback)函数.

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
#### 说说你对线程模型的理解
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
#### Node中服务端框架如何解析http的请求体body
#### Node中dns.resolve及dns.lookup有什么区别

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
#### Node中如何发送请求
#### node中如何监听异步资源async_hooks的生命周期
#### 如何获取你们Node项目的cpu profile快照
#### 如何实现一个timeout的中间件
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
#### 在Node项目中你有使用过哪些常用的中间件？
#### I/O多路复用轮询技术select和epoll的区别是什么？
#### 你是如何选择Node.js的版本的？
#### Node项目中，你是怎么记录日志的？
#### Node中如何查看函数异步调用栈
#### Node如何热部署（热更新）
#### 如何在生产环境部署一个Node应用
#### Node适用于哪些场景开发？
Node.js适合做一些高并发的，I/O密集型的应用。
当应用程序需要处理大量并发的I/O，而在向客户端发出响应之前，应用程序内部并不需要进行非常复杂的处理的时候，Node.js非常适合。Node.js也非常适合与web socket配合，开发长连接的实时交互应用程序。
#### 说说你对Node模块的理解

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
#### 你自己有写过koa的中间件吗？
#### koa中如果一个中间件没有调用await next()，结果会怎样？
#### koa中next()的原理是什么？
#### koa2相比koa1有什么改进呢？
#### 请说说koa的app.use()执行流程
#### 你知道egg.js和think.js吗？说说它们的区别是什么？
#### 你有使用过express和koa吗？它俩有什么区别？
Koa 和 Express 是两个流行的 Node.js Web 框架，它们有一些共同的核心设计思想和原理，同时也有一些区别。以下是它们的核心设计思想和原理的概述：
Express 的核心设计思想和原理：
中间件架构：Express 使用中间件架构来处理请求和响应。中间件是一个函数，可以访问请求对象（req）、响应对象（res）和下一个中间件函数（next）。每个请求都会经过一系列的中间件函数，每个中间件函数可以对请求和响应进行处理或者将控制权传递给下一个中间件函数。这种中间件架构使得开发者可以按照需要添加、删除或者修改中间件，从而实现灵活的请求处理逻辑。
路由系统：Express 提供了一个简单而灵活的路由系统，用于定义和处理不同的路由。开发者可以使用路由定义来匹配请求的 URL 和 HTTP 方法，并指定相应的处理函数。这使得开发者可以根据不同的 URL 和方法，定义不同的请求处理逻辑。
请求和响应对象：Express 提供了方便的请求对象（req）和响应对象（res），使开发者能够访问和操作请求和响应的各个方面，例如请求头、请求体、响应头、响应体等。这些对象提供了许多有用的方法和属性，使开发者能够更轻松地处理和操作请求和响应。
Koa 的核心设计思想和原理：
异步中间件流程控制：Koa 强调使用异步中间件来处理请求和响应，以提供更好的性能和可伸缩性。Koa 使用 async/await 或者返回 Promise 的中间件函数，使得中间件可以按照顺序执行异步操作，而不需要嵌套的回调函数。这种异步中间件流程控制使得代码更加清晰和易于理解。
上下文对象：Koa 引入了上下文对象（context），它是一个封装了请求和响应的对象。上下文对象提供了许多方便的方法和属性，使开发者能够更方便地访问和操作请求和响应的各个方面。上下文对象还提供了一些辅助方法，例如 throw 和 assert，用于处理错误和断言。
中间件洋葱模型：Koa 的中间件执行顺序遵循洋葱模型。这意味着每个中间件函数可以在处理请求之前和之后执行一些操作，从而形成一个环绕式的执行流程。这种洋葱模型使得中间件可以在请求处理过程中执行前置操作和后置操作，例如身份验证、日志记录等。
总的来说，Express 和 Koa 都是基于中间件架构的 Node.js Web 框架，它们的核心设计思想和原理都围绕着中间件的概念展开。Express 更加简单和直接，注重灵活性和易用性，而 Koa 则更加注重异步编程和中间件流程控制，提供了更强大的异步处理能力。开发者可以根据自己的需求和偏好选择适合的框架来构建 Node.js Web 应用程序。
#### express中间件的原理是什么
#### express项目的目录大致是什么结构的
首先，执行安装 express的指令：npm install express-generator-g。
然后，通过 express指令创建项目：express icketang。
创建的项目目录结构如下。
– ./app.js  应用核心配置文件（入口文件）
– ./bin  存放启动项目的脚本文件
– ./ package.json  存储项目的信息及模块依赖
– ./public 静态文件（css、js、img等）
– ./routes 路由文件（MVC中的 contro1ler）
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
### -----------------node架构----------------
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
#### 请简述重新登录refresh token的原理
#### 如何使用Consul进行服务注册与服务发现？
#### 使用Consul解决了哪些问题？
#### Consul的四大核心特性是什么？
#### 你了解Consul吗？说说它的运用场景有哪些？
#### pm2的cluster和fork两种模块有什么区别？如何选择？
#### 你了解什么是集群吗？
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
#### Mongodb如何批量更新文档？
#### 你对Mongodb有了解吗？
#### 如何构建一个简单的生产者与消费者模型？
#### 说说 MySQL和 MongoDB的区别。
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
#### 如何安装、启动一个RabbitMQ服务？
#### MQ的空间与时间解耦是什么？
#### RabbitMQ的应用场景有哪些？
#### 常用的主流消息中间件都有哪些？
#### 你有写过定时任务吗？是用第三方模块吗？
