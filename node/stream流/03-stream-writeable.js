const {Writable} = require('stream')

class MyWriteable extends Writable{
  constructor() {
    super()
  }
  _write(chunk, en, done) {
    process.stdout.write(chunk.toString() + '<----')
    process.nextTick(done)
  }
}

let myWriteable = new MyWriteable()

myWriteable.write('测试', 'utf-8', () => {
  console.log('end')
})
