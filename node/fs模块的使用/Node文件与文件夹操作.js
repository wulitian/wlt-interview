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

