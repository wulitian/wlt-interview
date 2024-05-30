self.onmessage = function(event) {
    // 处理来自主线程的消息
    console.log('Received message from main thread:', event.data);
    // 发送响应给主线程
    self.postMessage('Hello, main thread!');
};
