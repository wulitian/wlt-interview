self.onmessage = function(event) {
    // �����������̵߳���Ϣ
    console.log('Received message from main thread:', event.data);
    // ������Ӧ�����߳�
    self.postMessage('Hello, main thread!');
};
