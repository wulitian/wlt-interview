const cp = require('child_process');
const child = cp.fork('./child.js');
child.on('message', function(msg){
    console.log('老爸从儿子接受到数据:', msg);
});
child.send('我是你爸爸，送关怀来了!');
