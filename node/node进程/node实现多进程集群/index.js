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
