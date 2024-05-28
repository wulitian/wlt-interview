const fs = require('fs');
fs.watchFile('test.txt', function (curr, prev) {
    console.log(curr)
    console.log(prev)
    console.log(`当前修改的时间: ${curr.mtime}`);
    console.log(`上一次修改的时间: ${prev.mtime}`);
})
fs.watch('test.txt', function (eventType, filename) {
    console.log(eventType)
    console.log(filename)
})
