/**
 * 需求：“拉勾教育” 写入指定的文件
 * 01 一次性写入
 * 02 分批写入
 * 对比：
 */
let fs = require('fs')

let ws = fs.createWriteStream('test.txt', {
  highWaterMark: 3
})

// ws.write('拉勾教育')
let source = "拉勾教育".split('')
let num = 0
let flag = true

function executeWrite () {
  flag = true
  while(num !== 4 && flag) {
    flag = ws.write(source[num])
    num++
  }
}

executeWrite()

ws.on('drain', () => {
  console.log('drain 执行了')
  executeWrite()
})

// pipe
