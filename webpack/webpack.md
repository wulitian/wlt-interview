## webpack面试题

### -------webpack理解与介绍-------

webpack最初实现了前端项目的模块化，起初前端都是以约定的方式进行划分的，这种形式会产生全局成员污染，模块与模块之间没有依赖关系，维护困难，没有私有空间，之后就出现了每个模块暴漏一个全局对象，这样可以解决模块依赖的的问题，后来又出现了立即执行函数的方式，这种方式不易维护，之中方式不受代码控制，难以维护，理想的方式就是页面中引入一个入口文件其余的模块通过代码控制按需引入（流行的就是commonjs，esmodule）,随着ts，less,scss等预处理器的前端项目变得十分复杂，需要通过模块化开发，使用一些特性提高开发效率，es6，ts，通过scss，less提高编写css的效率，监听文件变化实时反馈到浏览器，调高开发效率，js代码需要模块化，css需要模块化，图片资源需要模块化，开发完成还需要将代码压缩，合并，webpack刚好解决了这些问题。

### -------webpack的构建流程-------
1. 初始化参数，从配置文件盒shell语句中读取与合并参数，得到最终的参数
2. 开始编译，使用这些参数初始化compiler对象，加载所有配置插件，执行run方法开始编译
3. 确认入口，根据配置的entry找到所有入口文件
4. 编译模块，从入口出发，调用所有配置的loader对模块进行编译，再找到模块依赖的模块，递归知道所有入口依赖文件都通过
5. 完成模块编译，再使用loader编译完所有模块，得到的每一个模块编译后的产物，以及他们的依赖关系
6. 输入资源，根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk,再把每一个单独的文件加入到输出列表，这里可以修改输出的内容
7. 输出完成，再确认好输出内容后，根据配置确认输出的路径与文件名，把文件内容写到文件系统

### -------webpack的声明周期-------
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

### -------webpack的loader与plugin-------
#### 说说webpack常见的loader,解决了什么问题
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
#### webpack中css-loader,style-loader的区别，file-loader,url-loader的区别
webpack只能处理js相关的文件，所以像图片和css资源是处理不了的，css-loader的作用是将css文件转换成webpack能够处理的资源，而style-loader就是帮我们直接将css-loader解析后的内容挂载到html页面当中。
文件大小小于limit参数，url-loader将会把文件转为DataURL； 文件大小大于limit，url-loader会调用file-loader进行处理，参数也会直接传给file-loader。因此我们只需要安装url-loader即可
#### webpack一般怎么组织css
使用style-loader，css-loader，postcss-loader，sass-loader处理，
注意postcss-loader需要配置postcss.config.js使用autoprefixer插件，同时在package.json中表明兼容的浏览器列表，sass-loader除了安装sass-loader还需要安装sass包。
```
module: {
   rules: [
       {
           test: /\.(css|scss)$/,
           use: [
               'style-loader', // 将css-loader处理后的css放到html文件头部：安装style-loader
               'css-loader',  // webpack只认识js/json 通过css-loader认识css文件，并处理css之间引用关系：安装css-loader
               // postcss配合autoprefixer插件处理浏览器样式兼容 自动加上浏览器厂商，
               // 需配置postcss.config.js使用autoprefixer插件，
                   // module.exports={
                   //     plugins:[
                   //         require('autoprefixer')
                   //     ]
                   // }
               // 需配置package.json厂商列表
                   // "browserslist": [
                   //     "> 1%",
                   //     "last 2 versions"
                   //   ],
               // 安装postcss-loader，autoprefixer
               'postcss-loader',
               'sass-loader', // 处理引入sass样式（css-loader不认识sass模块），需要安装sass，sass-loader
           ]
       }
   ]
},
```
#### webpack如何配置sass需要哪些loader
处理 scss 文件，需要使用到 sass、sass-loader、css-loader 和 style-loader。sass-loader 用于将 scss/sass 文件编译为 css 文件，编译后的 css 文件依次经过 css-loader 和 style-loader 处理，最后通过style标签插入到HTML中。sass-loader 需要依赖 sass。
#### 说说webpack常见的plugin,解决了什么问题
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
#### 说说webpack中loader与plugin的区别，介绍编写思路
概念上：
1. loader是文件加载器，能够加载资源文件，并对这些文件进行一些处理，编译压缩等等，最终一起打包到指定文件中
2. plugin 赋予webpack各种灵活的功能，例如打包优化，资源管理，环境变量注入等等
运行时机上：
1. loader运行在打包文件之前
2. plugin在整个编译周期都起作用
#### webpack插件是如何实现的
webpack事件流： webpack就像一条生产线，要经过一系列流程才能将源文件转换成输出结果，这条生产线上每一个处理流程职责都是单一的，只有当前流程处理完才能进入下一个流程，而插件就像是插入到生产线中的一个功能，在特定的时机对生产线上的资源进行处理。webapck事件流通过tapable实现。
插件的具体工作方式： webpack在运行过程中的不同时机会广播不同的事件，插件监听对应的事件，执行对应回调函数完成webpack资源的处理，从而实现对webpack功能的扩展。
webpack插件实现步骤： 插件功能要求：在资源输出之前在控制台上打印所有输出资源路径。
1，插件是一个带有apply方法的对象，那么我们可以创建一个插件类来实例该插件对象
2，webpack会向插件对象apply方法通过参数注入compiler对象，从而接收到webpack暴露出来的一些api对webpack流程进行操作。
3，apply方法内通过compiler.hooks.xxxHook.xxxTap('插件名','插件执行函数')的方式选择合适的compiler时机执行当前插件功能。合适的时机即xxxHook，这个xxxHooks可以理解为react的生命周期，只不过这里对应的是compiler的不同阶段，xxxTap即向xxxHook对应时机添加监听，当该时机到了触发监听函数。
所以实现一个webpack插件并不复杂，当然我们需要先了解tapable库，因为compiler.hooks里面这些钩子对象就是tapable库中不同类型钩子的具体实现，webpack会在合适的时机通知钩子内的监听队列函数执行。同时向这些监听函数暴露webpack自身API从而监听函数能够操作webpack实现当前插件功能。
```
// 该插件目的即在资源输出之前在控制台上打印所有输出资源路径。
// 所以这里的插件执行时机是【资源输出之前】，插件做的事是【控制台打印所有输出资源路径】
class MyPlugin {
  // tips:这里并不需要向插件传配置 所以没写constructor
  // 2，实现类原型apply方法
  apply(compiler) {
    // 3，选中emit时机（即资源输出之前）使用tapAsync（因为emit是tapable中asyncSeriesHook具体实现，所以使用tapAsync添加）添加监听
    // 你要是想在其他时机做某事，可以查阅compiler.hooks有哪些，以及其对应时机
    // 4，监听函数接收到webpack暴露的api（complication）
    // complication也有complication.hooks供使用，对应complication各个阶段
    compiler.hooks.emit.tapAsync('MyPlugin', (complication, callback) => {
      // 5，监听函数内部根据webpack的api实现控制台打印所有输出资源路径,complication.assets即所有输出资源信息
      for (const path in complication.assets) {
        console.log('path:', path);
      }
      // 6，执行异步串行函数回调,这一步不用太在意，有callback执行就可以了，callback是干什么的看之前的tapable就知道了
      callback()
    })
  }
}
// 7，导出插件
module.exports = MyPlugin;
// 8，在webpack.config.js使用require引入该插件，plugins内使用即可
// const MyPlugin = require('./plugin/MyPlugin.js')
// module.exports = {
//   plugins: [
//     new MyPlugin(),
//   ]
//   // ...其他webapck配置
// }
```

### -------webpack优化-------
#### webpack的开发环境热更新过慢的优化方式
1. 合理的设置source-map类型建议设置为cheap-module-eval-source-map
2. 更少的使用loader且loader处理的范围应该要尽量小,HappyPack、ThreadLoader多进程工具也是要慎用，他可能对于启动速度有帮助，但对热更新来说反而是增加负担。
3. 更少的使用plugin像分包策略插件、压缩插件、css抽离插件等优化产物类的插件都是不需要的
4. 关掉分包，因为分包也需要进行大量的计算
5. 减少使用console.log打印
6. 开发环境不需要用hash/chunkhash
7. 手动修改路由表，只保留本次所需修改的路由，减少代码量也能有效提高热更新效率
#### webpack打包速度太慢进行优化
1，mode设置成production：生产模式默认会使用tree-shaking删除无用代码，开发模式不会开启tree-shaking
2，开发环境中使用babel-plugin-import插件对组件库按需加载
3，使用splitChunksPlugin将不会变化的第三方库还有共用代码抽离进行单独打包：splitChunks配置前面有写。
4，对于不是需要立即获取的资源可以采取异步加载的方式（import().then），异步加载资源也会被单独打包成chunk，减小主包体积。
5，开启@baebl/polyfill使用按需加载，既babel-loader配置presets添加{useBuiltsIns:usage}（不指定的话，polyfill会将所有api都实现）
```js
module:{
    rules:[
     {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env'], // 主要翻译工作由@babel/preset-env实现
                    { useBuiltIns: 'usage' } // 开启@babel/polyfill按需加载
                ]
            }
        }
    },
    ]
}
```
6，使用mini-css-webpack-plugin提取css成单独文件，减小主包体积
7，合理使用url-loader，过大的文件使用file-loader更为合理。对于大图还可以使用image-webapck-loader进行压缩。
#### webpack打包的体积太大如何优化
1，限定loader作用范围，比如我们只希望对src文件夹下面内容进行babel转义，node_modules不需要。
```js
 module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            ['@babel/preset-env'],
                        ]
                    }
                },
                // babel转义src文件夹内文件，因为文件夹形式需要使用绝对路径，所以path.resolve(__dirname,'src')
                include: path.resolve(__dirname,'src'), 
                // 当然如果我们只是不想处理node_modules中文件，也可以使用exclude
                exclude: /node_modules/
            }
        ]
    }
```
2，使用noParse通知webpack哪些模块不需要解析其依赖关系：因为依赖关系解析也是耗时操作，而有些第三方依赖内部肯定不会存在依赖，比如jquery，所以我们可以手动指定这些模块不需要进行依赖关系的解析。(这些模块中没有import，require等模块化的语句，所以不需要解析依赖关系，只需要对其进行打包处理)
```
 module:{
        noParse:/jquery|bootstrap|lodash/, // 匹配当前正则的文的内部不需要进行依赖关系的解析
        rules:[] // 其他loader
    }
```
3，使用resolve.modules指明模块查找时的路径，避免不必要的查找
```js
 module:{
        resolve:{
            // 指明模块查找从下面两个路径开始，src优先于node_modules，这个配置含义是因为正常情况下我们的代码存在src目录下，node_modules中是我们用到的第三方依赖，其他地方基本么有项目用到的代码。
            modules:[path.resolve(__dirname,'src'),/node_modules/]
        }
        rules:[] // 其他loader
    }
```
4，代码书写尽量添加文件后缀名，减少文件匹配resolve.extentions后缀时间。
5，使用高版本webpack，一般版本越高，工具优化越好。
6，使用thread-loader对loader单开线程处理：因为node中webpack是单线程的，使用thread-loader可以对loader处理模块单开线程进行处理，提高打包速度。thread-loader只需要放在耗时的loader前面即可，但不能放在style-loader之前，一般放在style-loader之后，因为thread-loader之后的loader没办法存取文件以及获取wbepack的配置
```
 module:{
        rules:[
            {
                test:/\.img$/,
                use:[
                    'thread-loader',
                    'url-loader'
                ]
            }
        ]
    }
```
7，使用cache-loader对loader处理结果缓存到磁盘，二次打包时候读取缓存，提高打包速度。注意：缓存的读写也需要时间，所以只在必要的时候使用。 
harder-source-webapack-plugin也可以提升二次打包时间，不过没用过。
```
module:{
        rules:[
            {
                test:/\.ext$/,
                use:[
                    'cache-loader', // cache-loader如果与thread-loader同时出现，先放cache-loader，再放置thread-loader
                    ...otherloaders
                ]
            }
        ]
    }
```
8，当然babel-loader也可以开启缓存处理，将之前转义的结果缓存起来，如果二次打包没有变化，可以直接使用缓存：
```
 module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:[['@babel/preset-env']],
                        cacheDirectory: true, // 开启babel-loader缓存 
                    }
                }
            }
        ]
    }
```
#### 如何实现webpack持久化缓存
webpack持久化存储：webpack持久化存储原理就是保证在模块内容不发生变化的同时，每次打包出来的chunk也不会发生变化，这样，浏览器缓存策略会缓存当前chunk，
只要chunk名不发生变化且服务器设置的缓存时间够长，那么浏览器就可以一直从缓存中读取chunk，从而实现webpack输出内容在浏览器上的持久化存储，而这里我们需要做的就是保证对于相同内容的文件输出的chunk也是相同的。
具体实现如下：
1，服务器端得设置HTTP缓存头信息开启浏览器缓存策略
2，抽离不经常变化的文件到单独的chunk，并使用contenthash作为文件名（或文件名的一部分），这里不变的文件比如css，稳定的第三方库，异步加载代码等。
2.1：抽离css：使用mini-css-extract-plugin抽离css代码，css输出chunk的文件名需要使用contenthash，具体配置如下：。
```
 module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCSSExtractPlugin.loader, // style-loader是将样式插入head，该loader抽离css
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new MiniCSSExtractPlugin({
            // 使用contenthash作为文件名一部分
            filename:'[name]_[contenthash].css'
        })
    ]
}
```
2.2：抽离稳定的第三方库/异步加载代码成为单独chunk：使用webpack的splitchunkplugin抽离第三方库代码，且输出chunk的文件名需要使用contenthash。
使用contenthash即保证第三方库内容不变，其输出的chunk的hash不变，具体配置如下：。
```
 output:{
        path:path.resolve(__dirname,'dist'),
        // 第三方库与入口文件使用filename
        filename:'[name]-[contenthash].js',
        // 异步加载代码使用chunkFilename
        chunkFilename:'[name]-[contenthash].js',
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                // 抽离第三方库到单独chunk中，output中filename配置了contenthash。
                vendor:{
                    name:'vendor',
                    minSize:0,
                    minChunks:0,
                    test:/[\\/]node_modules[\\/]/,
                    chunks:'all'
                }
            }
        }
    }
```
3，固定moduleID：chunk内容还包括了模块的id，模块的id如果使用的是数字，该数字会随着模块引用顺序变化而变化，这样就会导致即使模块内容没变，
但是引用顺序发生变化，那么最后输出的chunk中的模块id也发生变化，chunk发生变化，contenthash就跟着变化，所以我们要保证moduleID是固定的，我们一般将moduleID设置成路径或者路径生成的3位hash，
具体配置如下：
```
 optimization:{
   moduleIds: 'named' // 或者deterministic，即三位hash，不要使用natural，natural会使用数字作为moduleID
}
```
4，固定chunkID：同moduleID一样，chunk顺序的变化（入口配置中多个入口位置变化），也会导致contentHash发生变化，所以需要固定chunkID。不能让chunk使用数字作为ID。
```
optimization:{
   chunkIds: 'named' // 或者deterministic，即三位hash，不要使用natural，natural会使用数字作为chunkID
}
```
#### 为什么css文件不使用chunkhash
因为，css一般在入口js文件引入，视为js文件一部分，如果与入口文件共用一个chunkhash，那么单独改变css或者入口文件js内容都会导致chunkhash变化，所以为了避免这种情况，我们使用contenthash根据当前文件内容生成hash，保证css的chunk变化只根据css内容变化，不会收到其他文件影响。
#### webpack抽取的公共文件是怎么配置的
对于 多个入口（注意是多个入口） 重复引用的依赖（可能是自定义公共代码，也有可能是第三方库），
我们没必要把公共文件打进每个入口文件的chunk中，否则会造成打包代码冗余（即在每个入口文件打成的chunk中都存在公共文件代码）
我们可以使用webpack4.x中内置的splitChunksPlugin插件来提取公共文件成一个单独chunk，
在html中插入对应的入口文件chunk与公共文件chunk，。注意再webpack4之前使用的CommonsChunkPlugin，
本篇只介绍splitChunksPlugin配置。如下：注意minChunks配置含义
```
 optimization: {
        splitChunks: {
            // 除了 test、 priority 和 reuseExistingChunk 属性，其他属性都可以在该级（与cacheGroups平级）定义，cacheGroup会继承这些属性（即抽离cacheGroup中公共配置在这一级），这里为了方便看全写在cacheGroups中。
            // cacheGroups（缓存组）：这里自定义分割抽离代码规则           
            cacheGroups: {
                // 这里是vendor规则（规则名字可以自定义），该规则最终目的是抽离第三方模块文件
                vendor: {
                    // name: 用于自定义抽离出去的代码块（chunk）名称，这里抽离出去代码块[name]为vendor
                    // name详解：终抽离的文件也是一个chunk，所以其路径位置信息与output中filename配置相同。
                    // 我们这里output配置为 output: { path: path.resolve(__dirname, 'dist'),filename: './js/[name]_[chunkhash:8].js'},
                    // 所以vendor代码块最终路径为   根路径/js/vendor_[chunkhash:8].js
                    name: 'vendor',

                    // minSize:用于判定多大文件才需要抽离，过小文件可以不抽离，这里的界限是0kb，即不管多大都抽离。
                    // minSize详解：类似url-loader中limit，这里意思minSize之内体积的模块可以不用抽离，大于minSize体积代码抽离，因为有些公共文件体积很小就没有抽离的必要。
                    minSize: 0 * 1024,

                    // maxSize:用于判定多大文件才需要抽离，与minSize相反，大于该值才抽离，minSize判断优先级>maxSize。
                    maxSize: 0,

                    // minChunks: 根据依赖模块引用次数判定是否抽离，注意这里是根据入口文件引用公共模块次数来判断，比如当前打包多个入口文件，多个入口文件对公共模块A引用次数为m(一个入口文件内引用多次公共模块也只算做该入口文件只引用该公共模块一次)，minChunks设置为n，只有当m>=n的时候，该公共模块A才会被单独打包
                    // minSize详解：minChunks: 2即当前代码块被重复引用>=2次即抽离，该值最小为1
                    minChunks: 1,

                    // priority: 当前匹配规则优先级大小，优先级大的先匹配，先进行抽离，匹配完剩下未匹配文件交给优先级小的匹配抽离
                    // priority详解：此处vendor规则优先级为10，后面common优先级为1，所以先匹配vendor规则抽离公共代码，后匹配common规则
                    priority: 10,

                    // test：匹配当前test值的文件才可以进行抽离，不设置则任何文件均可能被抽离
                    // test详解：类似于loader中test，这里的test: /[\\/]node_modules[\\/]/ 即匹配模式为文件来自node_modules文件夹，也就是第三方模块才可以抽离，当然你也可以设置正则匹配任意你想抽离的文件类型
                    test: /[\\/]node_modules[\\/]/,

                    // chunks：该属性有三个值：async，all，initial，一般设置all，默认值为async
                    // async意味着只有动态导入（异步引入）模块会被优化
                    // initial意味着只有静态导入模块会被优化
                    // all意味着所有模块都将被splitChunksPlugin优化
                    chunks: 'all',

                    // reuseExistingChunk:true表示允许重用已有的代码块，不必再次发现该块引用时再次创建新快
                    reuseExistingChunk: true
                },
                // 这里是common规则，该规则最终目的是抽离自定义公共文件
                common: {
                    name: 'common',
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2,
                    priority: 1,
                    reuseExistingChunk: true
                }
            }
        }
    },
}
```
#### tree-shaking的原理
tree shaking： 移除JS上下文中未使用的代码，在webpack中它具体指的是只有导入和具体使用的模块内容才打包到文件中，从而尽可能消除打包文件中未使用的代码。
tree shaking实现依赖于ESM： 目前在ESM下才可以有效的工作，因为ESM语法的静态结构特性，我们在webpack对代码编译的时候就可以根据顶层导入，判定哪些资源是需要的，哪些资源是不需要的。而Commonjs的动态特性不能实现tree shaking，比如我们在语句中通过某些判断结果去确定是否导入Commonjs模块。显然这样我们不能在代码执行之前确定不需要哪些模块。
babel-loader与tree shaking一些冲突的地方： babel默认会将ESM编译成Commonjs模块，但这就会导致tree shaking失效，显然这不是我们期望的，所以我们可以设置babel-loader中module为false，告诉babel不要编译我们的模块代码。
```
 module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: '/node_modules/',
            use: {
                loader: 'babel-loader',
                options: {
                    // presets：处理JS文件规则，将ESnext 处理成 ES5
                    // { modules: false } 即告诉babel不要把我们的ESM编译成Commonjs
                    presets: [['@babel/preset-env', { modules: false }]],
                    // plugins：处理JS文件的插件，该插件用于处理JSX，如果不需要处理JSX，可不写该行代码
                    plugins: ['@babel/plugin-transform-react-jsx']
                }
            }
        },
    ]
}
```
如何开启tree shaking：
1，使用ESM模块语法（同时确保编译器没有把我们的ESM转换成CommonJS）
2，使用生产模式（mode : production）
#### webpack如何做到异步的
import函数（import().then()）进行异步加载:webpack4之后使用import函数进行异步加载，该函数返回Promise对象，我们可以在then中接收到加载的模块数据进行处理。具体流程为：
1，使用import函数异步加载模块的时候会将异步模块单独打包成一个chunk文件
2, 当需要加载异步模块的时候，会创建搞一个script标签，src为异步模块的url，并将该标签添加到html的head中，进行网络请求
3，异步模块资源请求成功后，会将异步模块添加到全局的__webpack_require__变量中，而import异步加载模块编译后的代码会去__webpack_require__变量中找到对应模块
4，最后执行该异步加载模块有关代码并删除之前创建的script标签（所以你会注意到当进行模块异步加载的时候，控制台中head标签会一闪一下，然后什么都不变。）
import导入同步模块的时候，import必须放在代码顶层（最前面），而使用import函数异步加载模块的时候可以随便放在代码中的某个位置，即import函数对于异步加载模块是动态加载的
对于打包后的的异步加载模块chunk名称我们可以再output中指定chunkFilename规定其名称，如果不设置该项，则默认名称规则匹配filename属性。
```
output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name]_[chunkhash:8].js', // 指定输出入口文件chunk名称
            chunkFilename: '[name]_[chunkhash:4].js', // 指定单独输出chunk名称
        }
```
#### 说说如何借助webpack来优化前端性能
1. js，css，html, 图片，文件压缩
2. Tree Shaking
3. 代码分离
4. 内联chunk
#### 如何提高webpack的构建速度
1. 优化 loader 配置
2. 合理使用 resolve.extensions
3. 优化 resolve.modules
4. 优化 resolve.alias
5. 使用 DLLPlugin 插件
6. 使用 cache-loader
7. terser 启动多线程
8. 合理使用 sourceMap

### -------与webpack类似的工具-------
#### 与webpack类似的工具有哪些，介绍一下区别
1. gulp
基于 nodejs 的 steam 流打包 定位是基于任务流的自动化构建工具 gulp 是通过 task 对整个开发过程进行构建
gulp 优点： 流式写法简单直观 API 简单，代码量少 易于学习和使用 适合多页面应用开发
gulp 缺点： 异常处理比较麻烦 工作流程顺序难以精细控制 不太适合单页或者自定义模块的开发
2. webpack
webpack 是模块化管理工具和打包工具。通过 loader 装换，任何形式的资源都可以视为模块，比如 CommonJS 模块、AMD 模块、ES6 模块、CSS、图片等。它可以将许多松散的模块按照依赖和打包规则打包成符合生产环境部署的前端资源
还可以将按需加载的模块进行代码分割，等到实际需要的时候再异步加载
它的定位是模块打包器，而 gulp 属于构建工具。webpack 可以代替 gulp 的一些功能，但不是一个职能的工具，可以配合使用
webpack 优点： 可以模块化打包任何资源 适配任何模块系统 适合单页面应用的开发
webpack 缺点 学习成本高，配置复杂 通过 babel 编译后的 JS 代码体积较大
3. rollup
rollup 下一代 ES6 模块化工具，最大的亮点是利用 ES6 模块设计，利用 tree-shaking 生成更简洁、更简单的代码
rollup 优点 用标准化的格式(ES6)来写代码，通过减少死代码尽可能地缩小包体积
rollup 缺点 对代码拆分、静态资源、CommonJS 模块支持并不好
4. parcel
parcel 是快速、零配置的 web 应用程序打包器
目前 parcel 只能用来构建运行在浏览器中的网页，这也是它的出发点和关注点
parcel 优点 parcel 内置了常见场景的构建方案及其依赖，无需安装各种依赖 parcel 能以 HTML 为入口，自动检测和打包依赖资源 parcel 默认支持模块热更新，开箱即用
parcel 缺点 不支持 sourceMap 不支持 tree-shaking 配置不灵活(零配置)
5. Vite
vite是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：
一个开发服务器，它基于 原生 ES 模块 提供了丰富的内建功能，如速度很快的 【模块热更新HMR】
一套构建指令，它使用 Rollup打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源
Vite主要特点如下：
快速的冷启动：vite会直接启动开发服务器，不需要进行打包操作，所以不需要分析模块的依赖、不需要编译，因此启动速度非常快
即时的模块热更新
真正的按需编译：利用现代浏览器支持ES Module的特性，当浏览器请求某个模块的时候，再根据需要对模块的内容进行编译，这种方式大大缩短了编译时间
Vite 优点：vite热更新，实现按需编译，按模块更新。（特点：快） vite在生产环境通过Rollup进行打包（特点：打包体积小），生成esm模块包。（特点：快）
Vite 缺点： 生态：生态不如webpack，wepback在于loader和plugin非常丰富 ,prod环境的构建：目前用的Rollup，原因在于esbuild对于css和代码分割不是很友好 ,还没有被大规模使用,很多问题或者诉求没有真正暴露出来
#### 前端为何要进行打包和构建
代码层面：
编译高级语法和特性(ES6, TS, less/sass/stylus)
体积更小，加载更快(tree-shaking, uglify, compose)
兼容性处理和错误检查(polyfill, postcss, eslint)
工程化和流程层面：
统一、高效的开发环境
统一的构建流程和产出标准
集成公司的构建规范(提测、上线等)
### -------webpack综合-------
#### 说说webpack的热更新是如何做到的，原理是什么
1. webpack compiler 将js源代码编译成bundle.js
2. HMR Server: 将热更新的文件传输给HMR Runtime
3. Bundle Server: 静态资源文件服务器，提供文件访问，路径
4. HMR Runtime: stock服务器，会注入到浏览器，更新文件变化
5. bundle.js: 构建输出文件
6. 在HMR Runtime和HMR Server 之间建立websocket
#### webpack如何做到异步加载，为什么要异步加载模块，以及两种异步加载模块方式区别
webpack如何做到异步加载：webpack4之前主要是用require.ensure进行异步加载，webpack4之后主要使用import().then进行异步加载模块。
为什么要异步加载模块：有些包体积很大，而且在页面初次加载我们并不需要使用它，那么为了提升首屏速度可以选择对该包进行异步加载的方式，即用到的时候再加载该资源。
require.ensure进行异步加载:没用过，webpack4之前的模块异步加载方案，原理时webpack静态加载require.ensure，将异步模块分离成单独chunk，当用到该异步模块时，该模块会被webpack通过jsonp加载到浏览器。（即再没用到该模块之前，浏览器并不加载该模块）
import函数（import().then()）进行异步加载:webpack4之后使用import函数进行异步加载，该函数返回Promise对象，我们可以在then中接收到加载的模块数据进行处理。具体流程为：
1，使用import函数异步加载模块的时候会将异步模块单独打包成一个chunk文件
2, 当需要加载异步模块的时候，会创建搞一个script标签，src为异步模块的url，并将该标签添加到html的head中，进行网络请求
3，异步模块资源请求成功后，会将异步模块添加到全局的__webpack_require__变量中，而import异步加载模块编译后的代码会去__webpack_require__变量中找到对应模块
4，最后执行该异步加载模块有关代码并删除之前创建的script标签（所以你会注意到当进行模块异步加载的时候，控制台中head标签会一闪一下，然后什么都不变。）
import导入同步模块的时候，import必须放在代码顶层（最前面），而使用import函数异步加载模块的时候可以随便放在代码中的某个位置，即import函数对于异步加载模块是动态加载的
```
 // 当前为入口文件
    app.onclick = function () {
        // 点击该标签时异步加载asyncjs模块 
        import('./javascript/asyncjs').then(e => {
            console.log('asyncjs_content,', e);
        })
    }
```
对于打包后的的异步加载模块chunk名称我们可以再output中指定chunkFilename规定其名称，如果不设置该项，则默认名称规则匹配filename属性。
```
 output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name]_[chunkhash:8].js', // 指定输出入口文件chunk名称
            chunkFilename: '[name]_[chunkhash:4].js', // 指定单独输出chunk名称
        }
```
#### dev-server是如何跑起来的
1. 安装webpack-dev-server
2. 配置文件目录，端口，是否自动打开浏览器等
3. npx webpack-dev-server或者配置到package.json中script启动
#### 说说webpack中proxy的工作原理，为什么能解决跨域
1. proxy工作原理实质上是利用http-proxy-middleware 这个http代理中间件，实现请求转发给其他服务器
2. 在开发阶段， webpack-dev-server 会启动一个本地开发服务器，所以我们的应用在开发阶段是独立运行在
   localhost的一个端口上，而后端服务又是运行在另外一个地址上所以在开发阶段中，由于浏览器同源策略的原因，当本地访问后端就会出现跨域请求的问题
   通过设置webpack
   proxy实现代理请求后，相当于浏览器与服务端中添加一个代理者当本地发送请求的时候，代理服务器响应该请求，并将请求转发到目标服务器，目标服务器响应数据后再将数据返回给代理服务器，最终再由代理服务器将数据响应给本地在代理服务器传递数据给本地浏览器的过程中，两者同源，并不存在跨域行为，这时候浏览器就能正常接收数据
#### module chunk 和 bundle
webpack 中一切皆模块，每个文件都是一个模块
chunk 是 webppack 打包过程中 modules 的集合，它是打包过程中的概念，(enrty, splitChunk, runtimeChunk, import 异步加载会产生 chunk)
bundle 打包后最终输出的一个或多个文件
#### chunk 和 bundle 之间的关系
大多数情况下一个 chunk 对应一个 bundle
如果加了 source-map ，一个 chunk 就对应两个 bundle
chunk 是打包过程中的概念，bundle 是打包完成后输出的代码块，chunk 在构建完成后就呈现为 bundle
#### webpack 中 hash、chunkhash、contenthash 的区别
hash: 是整个项目的 hash 值，其根据每次编译的内容计算得到的，每次编译后都会生成新的 hash，即修改任何文件都会导致所有文件的 hash 值跟着变化
chunkhash: chunkhash 和 hash 不一样，它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的哈希值
contenthash: 使用 chunkhash 存在一个问题，就是当在一个 JS 文件中引入 css 文件，编译后它们的 hash 值是相同的，而且只要 js 文件发生改变，关联的 css 的 hash 也会跟着改变，这个时候可以在 mini-css-extract-plugin 里设置 contenthash，保证 css 文件所处的模块里就算其他文件内容发生改变，只要 css 文件内容不变，那么不会重构建
#### source-map 是什么
source-map 是为了解决开发代码和实际运行代码不一致时，帮助我们 debug 到原始代码的技术
webpack 通过配置生成 source-map 文件，map 文件是一种对应编译文件和原始文件的方法
source-map 类型： 看似配置项很多，其实是五个关键字 eval、source-map、cheap、module 和 inline 的任意组合
none: 不生成 .map 文件
eval: 不生成 .map 文件，可以通过 eval 函数的 sourceURL 找到对应的文件
source-map: 生成 .map 文件，可以定位代码错误的行和列
cheap: 生成 .map 文件，不包含列信息，代码报错只能定位到哪一行
module: 包含 Loader 的 source-map
inline: 不生成 .map 文件，将 .map 文件作为 dataUrl 嵌入
#### 实际项目中采用哪种 source-map 呢？
1. 开发环境：eval-cheap-module-source-map
原因： 因为现在都是模块化的开发方式，所以需要调试 loader 转换前的源代码。
一般都会配置每行编写的代码不超过 80 行，所以能过定位到错误所在的行就够了。
虽然这种模式下启动打包相对会比较慢，但是使用 webpack-dev-server 都是在监视的模式下重新打包，它重新打包的速度还是很快的。
2. 生产环境：none
source-map 文件会暴露我们的源代码到生产环境，如果没有控制好 source-map 文件的访问权限，可能被他人复现项目源码，不安全。
调试是开发阶段的事，而不应该到了生产环境，让全民去公测。
#### Import与CommonJS打包过程中有什么不同
es6模块调用commonjs模块
可以直接使用commonjs模块，commonjs模块将不会被webpack的模块系统编译而是原样输出，并且commonjs模块没有default属性
es6模块调用es6模块
被调用的es6模块不会添加{esModule:true}，只有调用者才会添加{esModule:true}，并且可以进行tree-shaking操作，如果被调用的es6模块只是import进来，但是并没有被用到，那么被调用的es6模块将会被标记为/* unused harmony default export */，在压缩时此模块将被删除(如果被调用的es6模块里有立即执行语句，那么这些语句将会被保留)
commonjs模块引用es6模块
es6模块编译后会添加{__esModule:true}。如果被调用的es6模块中恰好有export default语句，那么编译后的es6模块将会添加default属性
commonjs模块调用commonjs模块
commonjs模块会原样输出
#### A，B两个条件如何做到webpack只打包条件为true的
new DefinePlugin({
'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), // production
}),
然后if (process.env.NODE_ENV === '$$$') {
require('@#$%^&');
}
#### 使用import时，webpack对node_modules里的依赖会做什么
Webpack 默认情况下会按照以下规则解析模块：
1: 核心模块：如果你导入的模块是node的核心模块（如 fs、path 等），Webpack 会直接将其视为核心模块，不会进行解析和处理。
2: 相对路径/绝对路径：如果你导入的模块使用相对路径或绝对路径（如 ./foo、…/bar 或 /path/to/module），Webpack 会根据路径进行解析并将其打包到输出的 bundle 文件中。
3: 模块路径：如果你导入的模块是通过模块路径（如 lodash 等）导入的，Webpack 会根据配置中的解析规则来解析这些模块。其中，Webpack 默认会从当前模块所在目录开始向上逐级查找 node_modules 目录，并寻找符合模块路径的模块。
如果找到匹配的模块，Webpack 会将其打包到输出的 bundle 文件中。
如果找不到匹配的模块，Webpack 将抛出一个解析错误。
Webpack 通常只处理 JavaScript 模块，对于其他类型的模块（如 CSS、图片等），可能需要使用相应的 loader 来处理和导入。
如果使用了 Webpack 的别名（alias）功能或其他自定义的解析规则，Webpack 会根据这些配置来解析模块路径。
#### webpack打包hash码是如何生成的，随机值存在一样的情况如何避免
避免相同随机值 webpack在计算hash后分割chunk。产生相同随机值可能是因为这些文件属于同一个chunk，可以将某一个文件提到独立的chunk(如放入entry)
#### 一个活动项目包含多个活动，webpack如何单独打包某一个活动
如果是期望提取某个模块成单独的chunk，我们可以是使用splitChunksPlugin（webpack4之前是 CommonsChunkPlugin）进行提取，splitChunksPlugin在前面《webpack抽取公共文件如何配置》有说明使用方法
如果是期望对一个库内的对个内容只打包使用到的内容（即目前不能tree-shaking的时候），可以是使用babel-plugin-import，前面《import {Button} from 'antd'，打包的时候只打包button，分模块加载，是如何做到的》有说明。
#### 你是怎么配置开发环境的
1，使用html-webapck-plugin输出html文件：可以通过配置指定输出html按照什么模板生成，也可以指定输出html引入的chunks，还可以配置多个html-webapck-plugin输出多个html
2，使用(style-loader|mini-css-extract-plugin.loader)，css-loader,postcss-loader，sass-loader处理样式文件：
style-loader将最终css插入heml的head中（style标签）
mini-css-extract-plugin.loader：配合该插件将css样式提取到单独文件
css-loader将css样式模块处理成一个样式资源
postcss-loader：配合autoprefixer插件将样式对不同浏览器中做兼容处理
sass-loader：处理sass样式文件
3，使用url-loader处理图片等其他格式文件：可以配置limit控制输出是具体文件还是base64格式数据
4，使用babel-loader等loader处理es6+模块：需要安装的模块由babel-loader,@babel/core,@babel/preset-env,@babel/polyfill，@babel/polyfill配置useBuiltIns开启polyfill按需加载。
5，配置webpack.config.js中的devServer：建立当前资源服务器，可以实现资源热加载，资源转发，资源压缩等功能
6，使用mini-css-extract-plugin提取css资源
7，使用webapck自带splitChunksPlugin对不经常改变第三方库以及公共代码提取到单独文件输出
8，使用contentHash生成hash，实现资源缓存：相较于hash/chunkHash，这两个可以更精确的生成hash，避免每次改动代码所有hash都变化，尽量控制到只发生改动的模块的hash值发生变化。
9，使用devtool使用sourcemap定位出问题的源代码位置，而不是打包之后的代码位置：devtool在开发环境默认设置为source-map，即开启问题代码定位功能，设置fasle，则关闭，一般开发环境设置cheap-module-eval-source-map，生产环境设置cheap-module-source-map。
10, cache-loader与babel-loader开启缓存，提高第二次打包速度：babel-loader设置cacheDirectory:true，cache-loader则放在需要缓存的loader前面。
11，loader配置中使用exclude/include缩小loader匹配范围
12，配置resolve.alias配置模块路径别名，使得模块引入时更简单
13，使用module中的noParse指明一些没有依赖引入的模块，告诉webpack打包时候不需要对其进行依赖关系解析。
#### webpack 如何处理图片
webpack处理图片可以使用file-loader，浏览器即可http请求图片资源，如果期望减少http请求，可以使用url-loader配合file-loader使用，url-loader限定大小之内将图片处理成base64资源，浏览器直接使用，大于限定则使用file-loader处理，浏览器http请求该图片资源。
file-loader：图片资源全部依靠浏览器请求http资源
```
   module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                use: 'file-loader'  // 安装file-loader
            },
        ]
   }
```
url-loader：根据图片大小处理图片资源
```
 module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: 'url-loader',  // 安装file-loader url-loader
                    options: {
                        name: '[name]_[hash].[ext]', // 对于输出文件重命名为name_hash.后缀
                        outputPath: 'images/',  // 图片输出文件位于输出文件夹下images文件夹中
                        limit: 3 * 1024,    // 小于3kb使用base64，大于使用资源请求方式
                    }
                }
            },
        ]
}
```
#### webpack 多入口打包（即如何实现分模块打包）
```
 entry: {
       // 对main与other入口打包生成两个chunk
       main: './src/index.js',
       other:'./src/other.js',
       // 也可以通过数组的方式,将多个文件打包成一个chunk
       cache_: ['./src/javascript/cache1.js','./src/javascript/cache2.js',]
      // 这样最终会生成三个chunk，即main.js, other.js, cache_.js

    },
    output: {
        path: path.resolve(__dirname, 'dist'), //             指定打包文件输出目录，默认根目录下创建dist文件夹作为输出目录
        filename: '[name].js', // 使用占位符形式输出多个入口文件打包后的chunk
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index1.html', // 指定html模板文件生成输出html
            chunks:['main'], // 指定当前html文件依赖的js文件（chunk）
        }),
         new HtmlWebpackPlugin({
            template:'./src/index2.html',
            // html-webpack-plugin中chunks配置当前html文件使用哪个入口打包的chunk，这里是数组形式，用到那个chunk放哪个，可以放多个，如果不设置该属性，默认所有chunk都使用。
            chunks:['other']
        }),
    ]
}
```
#### webpack 使用动态链接库文件的作用
在使用 webpack 进行打包时，如果项目中包含大量的第三方库或模块，每次打包都需要重新编译这些模块，导致打包时间较长，并且生成的包体积很大。 
打包出动态链接库文件后，只需要在依赖的版本改变后需要再次打包出新的动态链接库文件外，其他时间 webpack 只需要将项目中需要的模块和动态链接库文件链接起来，而不需要重新编译这些模块，从而减少了打包的时间，并且减小打包后的体积
#### webpack 使用动态链接库文件的步骤
创建一个配置文件，用于打包动态库文件
```
const path = require('path')
module.exports = {
    entry: {
      vue: ['vue', 'vue-router', 'vuex']
    },
    output: {
       filename: '[name].dll.js',
       path: path.resolve(__dirname, './dist'),
       library: '[name]_dll'
    },
   plugins: [
      new webpack.DllPlugin({
      name: '[name]_dll',
      path: path.resolve(__dirname, './dist/[name]-manifest.json')
   })]
}
```
根据配置文件运行打包命令，生成动态链接库文件和对应的 manifest 文件
在 webpack 配置文件中，引用动态链接库文件
```
// webpack.config.js
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
module.exports = {
// ...
plugins: [
   new webpack.DllReferencePlugin({
      manifest: require('./dist/vue-minifest.json')
   }),
   new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'dist/vue.dll.js')
   })
   ]
}
```
DllReferencePlugin 用于告诉 webpack 使用哪个 manifest 文件来动态加载链接库，对应的 js 文件会被拷贝到 dist 目录下。AddAssetHtmlPlugin 用于在 html 文件中自动加载链接库的 js 文件








#### js压缩，合并，打包原理是什么以及为什么需要压缩，合并，打包
压缩原理：通过去掉注释代码、换行符、空格，缩短变量名长度（规范的变量名函数名对于代码阅读有很大帮助，而对于机器而言没有太大意义）来减少代码体积。常用插件uglifyjs-webpack-plugin
合并原理：将多个模块代码根据依赖关系合并成一个模块，减少http资源请求数量，提高资源请求速度。常用工具combo
打包原理：模块化打包一般至少有一个入口文件，从入口文件开始根据代码中出现的import/require等语法判断模块间依赖关系，递归解析模块内容及模块依赖资源，其中可能涉及到模块中代码的编译转换优化等，然后整合出所有用到模块的依赖关系树，最终根据依赖关系树将结果打包到目标文件中。常用工具webpack。
为什么要压缩合并打包：这些操作可以减小资源体积，降低http资源请求数量，从而加快http资源请求速度。
#### webpack中的compiler与compilation对象以及他们之间区别。
compiler：compiler只在webpack启动时构建一次，由webpack所有配置项构建生成。它代表webpack从启动到关闭的整个生命周期。
compilation：compilation代表的只是一次新的编译，只要文件有改动，compilation就会被重新创建，从而生成一组新的编译资源。一个 Compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息，简单来讲就是把本次打包编译的内容存到内存里。Compilation 对象也提供了插件需要自定义功能的回调，以供插件做自定义处理时选择使用拓展。
compiler，compilation区别：compiler代表webpack从启动到关闭的整个生命周期，而compilation代表的只是一次新的编译，只要文件有改动，compilation就会被重新创建
#### webpack如何把js，css，html文件单独打成一个包
javascript：webpack会根据入口js文件根据其内部依赖引用关系最终将js打成一个包
抽离css：使用mini-css-extract-plugin/extract-text-webpack-plugin抽离css文件。以mini-css-extract-plugin配置为例：
```
 module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                // MiniCSSExtractPlugin.loader配合MiniCSSExtractPlugin插件 抽离最终css代码到一个样式文件中，并在html文件头部使用link标签引入
                MiniCSSExtractPlugin.loader, 
                'css-loader',
                // ... 根据需求添加其他样式loader 
            ]
        },
    ]
 }
 plugins: [
    new MiniCSSExtractPlugin({
        filename: 'main_[contenthash].css', // 规定最终抽离css文件名
    }),
 ]
}
```
html：使用html-webpack-plugin将自定义html文件作为模板单独打包输出，多个html文件可以使用多个html-webpack-plugin插件处理。
```
plugins:[
          new HtmlWebpackPlugin({
          template: './src/index.html', // 使用的html模板路径
          // filename:'index.html' , // 打包输出的html文件名称，默认index.html
          // chunks:['main'], // 指定chunks（即对象形式入口配置，对应入口的key）作为引入js资源
    }),
        // // 指定打包多个html
        // new HtmlWebpackPlugin({
        //     template: './src/ccc.html',
        //     filename:'ccc.html'
        //     chunks:['others'],
        // }),
    ]
```
#### webpack如何将样式资源直接输出到html的head的style标签内
使用html-inline-css-webpack-plugin，配合mini-css-webpack-plugin，html-inline-css-webpack-plugin需要放在html-webpack-plugin后。
```
  const HtmlInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default
  module: {
        rules: [
            {
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                ]
            }
        ]
    },
  plugins: [
        new MiniCSSExtractPlugin({
            filename: "[name][contenthash:8].css",
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html', // 使用的html模板路径
        }),
        new HtmlInlineCSSWebpackPlugin(),
    ]
}
```
