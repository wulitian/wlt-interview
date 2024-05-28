const fs = require('fs')

const ws = fs.createWriteStream('test.txt', {
  flags: 'w', 
  mode: 438,
  fd: null,
  encoding: "utf-8",
  start: 0,
  highWaterMark: 3
})

let buf = Buffer.from('abc')

// 字符串 或者  buffer ===》 fs rs
/* ws.write(buf, () => {
  console.log('ok2')
}) */

/* ws.write('拉勾教育', () => {
  console.log('ok1')
}) */

/* ws.on('open', (fd) => {
  console.log('open', fd)
}) */

ws.write("2")

// close 是在数据写入操作全部完成之后再执行
/* ws.on('close', () => {
  console.log('文件关闭了')
}) */

// end 执行之后就意味着数据写入操作完成
ws.end('拉勾教育')


// error
ws.on('error', (err) => {
  console.log('出错了')
})

