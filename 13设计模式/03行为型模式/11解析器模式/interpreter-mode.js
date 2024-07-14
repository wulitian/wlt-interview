/**
 * 解析器模式
 */
!(function () {
    class Context {
        interpret(context) {
            return context
        }
    }

    class PlusExpression {
        constructor(expr1, expr2) {
            this.expr1 = expr1;
            this.expr2 = expr2;
        }
        interpret(a,b) {
            return this.expr1.interpret(a) + this.expr2.interpret(b);
        }
    }

    class MinusExpression {
        constructor(expr1, expr2) {
            this.expr1 = expr1;
            this.expr2 = expr2;
        }
        interpret(a,b) {
            return this.expr1.interpret(a) - this.expr2.interpret(b);
        }
    }

    /** 以下是测试代码 **/
    const context = new Context();
    const context2 = new Context();
    const minusExpression = new MinusExpression(context, context2)
    const plusExpression = new PlusExpression(context, context2)
    console.log(minusExpression.interpret(2,1))
    console.log(plusExpression.interpret(2,1))
})()
