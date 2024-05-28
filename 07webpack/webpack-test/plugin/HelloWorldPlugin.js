module.exports = class HelloWorldPlugin {
    apply(compiler) {
        compiler.hooks.done.tap("HelloWorldPlugin", () => {
            console.log("hello world");
        })
    }
}