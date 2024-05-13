const fs = require('fs')

let ws = fs.createWriteStream('test.txt', {
  highWaterMark: 3
})

let flag = ws.write('1')
console.log(flag)

flag = ws.write('2')
console.log(flag)

// 如果 flag 为 false 并不是说明当前数据不能被执行写入
// 

ws.on('drain', () => {
  console.log('11')
})