/**
 * 责任链模式
 */
!(function () {

    const User1 = function (type, pass) {
        if (type === "a" && pass) {
            console.log('用户1审批通过');
        } else {
            console.log('用户1未审批')
            return 'next'
        }
    }
    const User2 = function (type, pass) {
        if (type === "b" && pass) {
            console.log('用户2审批通过');
        } else {
            console.log('用户2未审批')
            return 'next'
        }
    }
    const User3 = function (type, pass) {
        if (type === "c" && pass) {
            console.log('用户3审批通过');
        } else {
            console.log('用户3未审批');
            console.log('没有用户审批通过请假失败');
        }
    }

    const Handle = function (fn) {
        this.fn = fn;
        this.receiver = null;
    }
    Handle.prototype.setReceiver = function (receiver) {
        this.receiver = receiver;
    }
    Handle.prototype.passRequest = function () {
        let returnMsg = this.fn.apply(this, arguments);
        if (returnMsg === 'next') {
            return this.receiver && this.receiver.passRequest.apply(this.receiver, arguments);
        }
        return returnMsg;
    }

    function Client() {
        let user1 = new Handle(User1);
        let user2 = new Handle(User2);
        let user3 = new Handle(User3);
        user1.setReceiver(user2);
        user2.setReceiver(user3);
        console.log(user1)
        return user1;
    }

    let client = new Client();
    client.passRequest('a', true);
    client.passRequest('b', false);
    client.passRequest('c', true);
    client.passRequest('d', false);

})()

!(function () {
    class User1 {
        approval(type, pass) {
            if (type === "a" && pass) {
                console.log('用户1审批通过');
            } else {
                console.log('用户1未审批')
                return 'next'
            }
        }
    }

    class User2 {
        approval(type, pass) {
            if (type === "b" && pass) {
                console.log('用户2审批通过');
            } else {
                console.log('用户2未审批')
                return 'next'
            }
        }
    }

    class User3 {
        approval(type, pass) {
            if (type === "c" && pass) {
                console.log('用户3审批通过');
            } else {
                console.log('用户3未审批');
                console.log('没有用户审批通过请假失败');
            }
        }
    }

    class Handle {
        constructor(fn) {
            this.fn = fn;
            this.receiver = null;
        }

        setReceiver(receiver) {
            this.receiver = receiver;
        }

        passRequest(a, b) {
            let returnMsg = this.fn.approval(a, b);
            if (returnMsg === 'next') {
                return this.receiver && this.receiver.passRequest(a, b);
            }
            return returnMsg;
        }
    }

    let u1 = new User1();
    let u2 = new User2();
    let u3 = new User3();
    let user1 = new Handle(u1);
    let user2 = new Handle(u2);
    let user3 = new Handle(u3);
    user1.setReceiver(user2);
    user2.setReceiver(user3);
    user1.passRequest('a', true);
    user1.passRequest('d', false);
    user1.passRequest('c', true);
    user1.passRequest('d', false);
})()


