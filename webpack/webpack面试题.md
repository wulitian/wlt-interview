# 说说你对webpack的理解，解决了什么问题

webpack最初实现了前端项目的模块化，起初前端都是以约定的方式进行划分的，这种形式会产生全局成员污染，模块与模块之间没有依赖关系，维护困难，没有私有空间，之后就出现了每个模块暴漏一个全局对象，这样可以解决模块依赖的的问题，后来又出现了立即执行函数的方式，这种方式不易维护，之中方式不受代码控制，难以维护，理想的方式就是页面中引入一个入口文件其余的模块通过代码控制按需引入（流行的就是commonjs，esmodule）,随着ts，less,scss等预处理器的前端项目变得十分复杂，需要通过模块化开发，使用一些特性提高开发效率，es6，ts，通过scss，less提高编写css的效率，监听文件变化实时反馈到浏览器，调高开发效率，js代码需要模块化，css需要模块化，图片资源需要模块化，开发完成还需要将代码压缩，合并，webpack刚好解决了这些问题。

# 说说webpack的构建流程
1. 初始化参数，从配置文件盒shell语句中读取与合并参数，得到最终的参数
2. 开始编译，使用这些参数初始化compiler对象，加载所有配置插件，执行run方法开始编译
3. 确认入口，根据配置的entry找到所有入口文件
4. 编译模块，从入口出发，调用所有配置的loader对模块进行编译，再找到模块依赖的模块，递归知道所有入口依赖文件都通过
5. 完成模块编译，再使用loader编译完所有模块，得到的每一个模块编译后的产物，以及他们的依赖关系
6. 输入资源，根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk,再把每一个单独的文件加入到输出列表，这里可以修改输出的内容
7. 输出完成，再确认好输出内容后，根据配置确认输出的路径与文件名，把文件内容写到文件系统

# 说说webpack常见的loader,解决了什么问题
1. style-loader,将css添加到dmo内联样式中
2. css-loader,允许css文件通过require的方式引入，并返回css
3. less-loader,处理less
4. sass-loader,处理sass
5. postcss-loader,用postcss处理css
6. autoprefixer-loader，处理css属性前缀
7. file-loader,分发文件到output目录并返回相对路径
8. url-loader，类似于file-loader当文件小于设定的limit时返回一个data url
9. html-minify-loader,压缩html
10. babel-loader,用babel来转换es6语法

# 说说webpack常见的plugin,解决了什么问题
1. html-webpack-plugin：在 dist 下生成 html 文件。简化 HTML 文件创建 (依赖于 html-loader)
2. clean-webpack-plugin: 目录清理。把 dist 删除再生成打包结果
3. copy-webpack-plugin 因为 public 文件下的资源是固定的，直接拷贝到编译后的文件夹引入使用就可以，例如 favicon.ico
4. open-browser-webpack-plugin 启动webpack之后，自动打开浏览器
5. mini-css-extract-plugin: 分离样式文件，CSS 提取为独立文件，支持按需加载
6. webpack-parallel-uglify-plugin: 多进程执行代码压缩，提升构建速度
7. HappyPack Plugin: 开启多进程打包，提升打包速度
9. webpack-bundle-analyzer: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)
10. Dllplugin: 动态链接库，将项目中依赖的三方模块抽离出来，单独打包
11. DllReferencePlugin: 配合 Dllplugin，通过 manifest.json 映射到相关的依赖上去
12. Defineplugin: 允许编译时创建配置全局对象

# 介绍一下webpack的生命周期
1. beforeRnu 在webpack开始读取配置之前调用
2. run 在webpack编译时调用
3. watchRun 在使用webpack-dev-se5rver运行时调用
4. beforeCompile 在webpack编译前调用
5. compile 在webpack编译完成时调用
6. thisCompilation 在创建新的compilation时调用
7. compilation 在编译时每个webpack生成一个新的compilation对象时调用
8. emit 在生成资源之前调用
9. afterEmit 在生成资源之后调用
10. done 在webpack编译完成时调用
11. assetEmitted 所有资源都已经输出到目录后调用

# 说说webpack中loader与plugin的区别，介绍编写思路
概念上：
1. loader是文件加载器，能够加载资源文件，并对这些文件进行一些处理，编译压缩等等，最终一起打包到指定文件中
2. plugin 赋予webpack各种灵活的功能，例如打包优化，资源管理，环境变量注入等等
运行时机上：
1. loader运行在打包文件之前
2. plugin在整个编译周期都起作用

# 说说webpack的热更新是如何做到的，原理是什么
1. webpack compiler 将js源代码编译成bundle.js
2. HMR Server: 将热更新的文件传输给HMR Runtime
3. Bundle Server: 静态资源文件服务器，提供文件访问，路径
4. HMR Runtime: stock服务器，会注入到浏览器，更新文件变化
5. bundle.js: 构建输出文件
6. 在HMR Runtime和HMR Server 之间建立websocket

# 说说webpack中proxy的工作原理，为什么能解决跨域
1. proxy工作原理实质上是利用http-proxy-middleware 这个http代理中间件，实现请求转发给其他服务器
2. 在开发阶段， webpack-dev-server 会启动一个本地开发服务器，所以我们的应用在开发阶段是独立运行在
   localhost的一个端口上，而后端服务又是运行在另外一个地址上所以在开发阶段中，由于浏览器同源策略的原因，当本地访问后端就会出现跨域请求的问题
   通过设置webpack
   proxy实现代理请求后，相当于浏览器与服务端中添加一个代理者当本地发送请求的时候，代理服务器响应该请求，并将请求转发到目标服务器，目标服务器响应数据后再将数据返回给代理服务器，最终再由代理服务器将数据响应给本地在代理服务器传递数据给本地浏览器的过程中，两者同源，并不存在跨域行为，这时候浏览器就能正常接收数据

# 说说如何借助webpack来优化前端性能
1. js，css，html, 图片，文件压缩
2. Tree Shaking
3. 代码分离
4. 内联chunk

# 如何提高webpack的构建速度
1. 优化 loader 配置
2. 合理使用 resolve.extensions
3. 优化 resolve.modules
4. 优化 resolve.alias
5. 使用 DLLPlugin 插件
6. 使用 cache-loader
7. terser 启动多线程
8. 合理使用 sourceMap

# 与webpack类似的工具有哪些，介绍一下区别

# webpack与gulp区别

# tree-shaking的原理

# Import与CommonJS打包过程中有什么不同

# webpack中css-loader,style-loader的区别，file-loader,url-loader的区别

# webpack离线缓存静态资源-localStore

# A，B两个条件如何做到webpack只打包条件为true的

# webpack怎样处理内联css的

# webpack如何做到异步的

# webpack插件是如何实现的

# webpack抽取的公共文件是怎么配置的

# 使用import是，webpack对node_modules里面的以来会做什么

# webpack一般怎么组织css

# webpack如何配置sass需要哪些loader

# 如何配置把html,js,css 单独打包成一个文件

# 如何实现分模块打包，多入口

# webpack打包hash码是如何生成的，随机值存在一样的情况如何避免

# webpack为什么慢，如何进行优化

# webpack打包的体积太大如何优化

# 一个活动项目包含多个活动，webpack如何单独打包某一个活动

# 开发环境的热更新的优化方式

# 你是怎么配置开发环境的

# 如何实现webpack持久化缓存

# webpack做过哪些优化，开发效率方面，打包策略方面

# dev-server是如何跑起来的







