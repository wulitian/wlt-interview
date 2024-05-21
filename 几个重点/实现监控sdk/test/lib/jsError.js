import {getCurrentUrl} from "../utils";

class JsError {
    // 资源
    resourceError() {
        window.addEventListener('error', e => {
            const target = e.target
            if (!target) return
            if (target.src || target.href) {
                const url = target.src || target.href
                const log = {
                    url,
                    type: 'error',
                    subType: 'resource',
                    startTime: e.timeStamp,
                    html: target.outerHTML,
                    resourceType: target.tagName,
                    pageURL: getCurrentUrl(),
                }
                console.log(log)
            }
        }, true)
    }
    // js语法
    grammarError() {
        window.onerror = (msg, url, line, column, error) => {
            const log = {
                msg,
                line,
                column,
                error: error.stack,
                subType: 'js',
                pageURL: url,
                type: 'error',
                startTime: performance.now(),
            }
            console.log(log)
        }
        return true
    }

    // promise错误未处理
    promiseError() {
        window.addEventListener('unhandledrejection', (e) => {
            const log = {
                reason: e.reason?.stack,
                subType: 'promise',
                type: 'error',
                startTime: e.timeStamp,
                pageURL: getCurrentUrl(),
            }
            console.log(log)
        }, true);
    }

    init() {
        this.resourceError()
        this.grammarError()
        this.promiseError()
    }
}

export default JsError

