## html

#### html5中HTML和XHTML两者有什么区别
1. 什么是 XHTML?
- XHTML代表可扩展超文本标记语言，它是HTML和XML语言之间的交叉。XHTML与HTML几乎相同，但比HTML更严格。XHTML是定义为XML应用程序的HTML。所有主要浏览器都支持它。尽管XHTML与HTML几乎相同，但是正确创建代码更为重要，因为XHTML在语法和区分大小写方面比HTML严格。与HTML不同，XHTML文档使用标准XML解析器进行格式验证和解析，HTML使用相对宽松的HTML特定解析器。
2. 区别：
- 文档结构：比较强制,doctype,xml namespace,<html><head><title><body>
- 元素语法：xhtml正确嵌套，标签必须闭合，文档必须有一个跟元素，元素必须小写
- 属性语法：属性必须小写，属性值必须用引号，不允许属性简写（readonly,disabled）
#### html5中doctype作用，严格模式混杂模式如何区分，他们有何意义
1. doctype主要是告诉浏览器解析器按照什么方式解析这个文档
2. 严格模式下排版,js都是按照该浏览器最高标准运行
3. 混杂模式，页面宽松向后兼容显示，模拟老是浏览器防止站点无法工作，doctype不存在或者格式不正确会导致文档以混杂模式呈现。
#### html中doctype文档类型,charset编码方式
1. html5基于sgml其中dtd规定语言规则,文档声明时比较短
2. html4不是基于sgml文档声明时比较长后面都是一些约束
3. sgml为标准通用的标记语言
4. h5设置编码简单<meta charset="UTF-8">
   三种文档约束（Strict、Transitional、Frameset）
#### html5新的doctype和charset
1. html5不是SGML（文档内容描述的一种标准）子集
2. charset字符集编码，在meta标签中设置utf-8，解决编码问题
#### html5有哪些特性
1. 声明方式
- HTML4 规定了三种声明方式，分别是：严格模式、过渡模式 和 框架集模式；
- 而HTML5因为不是SGML的子集，只需要<!DOCTYPE>就可以了：
2. 语义化友好
   header,footer,article,aside,section,details,summary,dialog
3. 音频、视频
   audio video
4. 表单控件
   color,data,email,number,month,range,search,time,week等
5. api存储
   localStorage
   sessionStorage
6. 画布canvas
7. 地理位置geolocation
8. 拖拽释放drag,drop
#### html严格模式与混淆模式
1. Standards严格模式是浏览器根据规范去显示页面
2. Quirks混杂模式是以一种向后兼容的方式去显示
#### 聊聊meta标签
1. 提供给页面的一些元信息（名称 / 值对），有助于 SEO。
2. name：名称 / 值对中的名称。author、description、keywords、generator、revised、others。 把 content 属性关联到一个名称。
3. http-equiv没有 name 时，会采用这个属性的值。content-type、expires、refresh、set-cookie。把 content 属性关联到 http 头部
4. content名称 / 值对中的值， 可以是任何有效的字符串。 始终要和 name 属性或 http-equiv 属性一起使用
5. scheme用于指定要用来翻译属性值的方案
#### 网页中 mate viewport 具体参数使用
1. width    设置 viewport 宽度，为一个正整数，或字符串‘device-width’
2. device-width  设备宽度
3. height   设置 viewport 高度，一般设置了宽度，会自动解析出高度，可以不用设置
4. initial-scale    默认缩放比例（初始缩放比例），为一个数字，可以带小数
5. minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数
6. maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数
7. user-scalable    是否允许手动缩放
```html
<meta
    name="viewport"
    content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
/>
```
#### defer和async的区别
1. defer：defer 要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行。多个 defer 脚本会按照它们在页面出现的顺序加载。渲染完再执行
2. async：async 一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。多个 async 脚本是不能保证加载顺序的。==“下载完就执行”==
#### href与src的区别
1. src:src 表示引用资源，在请求 src 资源时会将其指向的资源下载并应用到文档中，用在 img，script，iframe 上，src 是页面内容不可缺少的一部分。
2. href:href 标识超文本引用，用在 link 和 a 等元素上，href 是引用和页面关联，用来建立当前元素和文档之间的链接。
3. 引用:与引入的区别
#### HTML 'data-'属性的作用是什么
1. data-xxx 为前端开发者提供自定义的属性，这些属性集可以通过对象的 dataset 属性获取，不支持该属性的浏览器可以通过 getAttribute 方法获取；
2. js访问可以用dataset.驼峰访问
3. css访问[data-columns='3']
#### html5中form如何关闭自动完成功能
1. 自动完成功能：
- html的输入框可以拥有自动完成功能，当你往输入框输入内容时候，浏览器从以前同名历史记录中查找出类似内容并列举在输入框下面，可以不用全部输入进去，可以直接选择
2. autocomplete="off"系统需要保密时可以使用此参数适用于text,search,url,telephone,email,password,datepicker,range,color,可以再需要的表单项加autocomplete = 'on'
#### html5中img中的title与alt有什么区别
1. img中alt属性：如果无法显示图片将显示alt内的文字内容
2. 元素title属性：在鼠标滚动元素上显示title
3. 通常当⿏标滑动到元素上的时候显示title,alt 是 <img> 的特有属性，是图⽚内容的等价描述，⽤于图⽚⽆法加载时显示、读屏器 阅读图⽚。可提图⽚⾼可访问性，除了纯装饰图⽚外都必须设置有意义的值，搜索引擎会重点分析。
#### title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别
1. title 与 h1
- h1 标签写在网页的 body 中，
- title 标签写在网页的 head 中，
- h1 标签控制一段文字的大小（从 h1~h6），
- title 是网页标题的意思，如<title>这是网页标题</title>。
2. b 与 strong 的区别
   <b>为了加粗而加粗，<strong>为了标明重点而加粗。它们的区别就再于一个是物理元素，一个是逻辑元素。物理元素所强调的是一种物理行为，比如说我把一段文字用 b 标记加粗了，我的意思是告诉浏览器应该给我加粗了显示这段文字，从单词的语义也可以分析得出，b 是 Bold（加粗）的简写，所以这个 B 标记所传达的意思只是加粗，没有任何其它的作用。而 Strong 我们从字面理解就可以知道他是强调的意思，所以我们用这个标记向浏览器传达了一个强调某段文字的消息，而这个 Strong 就是我们所说的逻辑元素，他是强调文档逻辑的，并非是通知浏览器应该如何显示。
3. i 与 em 的区别
   同样，I 是 Italic（斜体），而 em 是 emphasize（强调）。所以说：物理元素是告诉浏览器我应该以何种格式显示文字，逻辑元素告诉浏览器这些文字有怎么样的重要性。
4. 自然样式标签：b, i, u, s, pre
5. 语义标签：strong, em, ins, del, code
#### html5中嵌入音频视频
audio video
1. 音频格式支持MP3，wav,ogg
#### html5标签使用场景
1. header,footer,aside,main,address,nav,section,hgroup,h1-h6
#### html全局属性
1. class :为元素设置类标识
2. data-* : 为元素增加⾃定义属性
3. draggable : 设置元素是否可拖拽
4. id : 元素 id ，⽂档内唯⼀
5. lang : 元素内容的的语⾔
6. style : ⾏内 css 样式
7. title : 元素相关的建议信息
#### html中canvas与svg
1. canvas是js绘制2d图形语言，svg是xml描述2d图形语言
2. canvas是h5，svg历史久远
3. canvas位图，svg矢量图
4. canvas可以引用图片，svg不行
5. canvas不支持事件处理，svg支持事件处理
6. canvas不可以被搜索引擎抓取，svg可以被搜索引擎抓取
#### html中cookie,sessionStorage,localStorage
cookie存储大小4k左右，在一段时间内不会失效，可以发送到服务端，cookie存储数量有限制：ie和火狐最多50个
localStorage存储大小5m左右，本地持久化存储，除非手动删除
sessionStorage存储大小5m左右，关闭当前标签页会删除
#### html中iframe
1. iframe优点：iframe 会阻塞主页面的 Onload 事件；
2. iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
3. 使用 iframe 之前需要考虑这两个缺点。如果需要使用 iframe，最好是通过 javascript 动态给 iframe 添加 src 属性值，这样可以可以绕开以上两个问题。
#### html新增标签与移除的标签
- 新增
1. 绘画：canvas
2. 媒体：video,audio
3. 离线缓存：localStorage，sessionStorage
4. 语义化标签：article,footer,main,header,nav,section
5. 表单控件：data,time,email,url,search
6. 新技术：webWorker,websocket,Geolocation
- 移除
1. 纯表现元素basefont,big,center,s,tt,u
2. 对性能有影响的元素frame,frameset,noframes
#### html新标签兼容性的处理
1. 使用document.createElement:IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签；浏览器支持新标签后，还需要添加标签默认的样式
2. 使用 html5shiv 框架:是判断是否小于 IE9 以下浏览器，如果是就执行这段 JS 代码 ，如果不是，就忽略掉。
#### label作用
1. label 元素不会向用户呈现任何特殊效果。
2. 如果您在 label 元素内点击文本，就会触发此控件。
#### table与css实现表格区别
1. 速度加载方面区别
- div读取就加载，读多少加载多少
- table加载是完成后加载在读取尾部标签加载
#### web标准是什么
1. WEB 标准不是某一个标准，而是一系列标准的集合。
2. 网页主要由三部分组成：结构，表现，行为
#### 对html语义化理解
1. 正确的标签做正确的事情
2. html语义化就是让页面结构化，便于浏览器，搜索引擎解析
3. 在没有样试时也可以一种文档格式显示，便于阅读
4. 搜索引擎的爬虫依赖于标记确定上下文关键字权重，利于seo优化
5. 便于阅读维护
#### 浏览器内核
1. ie:trident
2. 火狐：gecko
3. 苹果：webkit
4. 谷歌：blink
5. 欧朋：blink
#### 浏览器引擎
1. 渲染引擎：负责页面上一些标签
2. js引擎：解析js实现动态效果
#### 网页中用到图片的格式
1. png-8 、 png-24 、 jpeg 、 gif 、jpeg、 svg 、webp（谷歌开发的图⽚压缩体积⼤约只有 JPEG 的 2⁄3，WebP格式图像的体积要⽐JPEG格式图像⼩ 40%）、apng（是PNG的位图动画扩展可以实现png格式的动态图⽚效果。iOS safari 8 的⽀持）
#### 行内元素与块级元素
1. 行内元素有
a, b ,span ,img ,input ,select ,strong（强调的语气）
2. 块级元素有
div ,ul ,ol ,li ,dl ,dt ,dd ,h1 ,h2 ,h3 ,h4 p
#### html5离线存储的使用与原理
1. Application Cache
   HTML5 最早提供一种了一种缓存机制，可以使 web 的应用程序离线运行。我们使用 Application Cache 接口设置浏览器应该缓存的资源，即配置 manifest 文件， 在用户处于离线状态时，点击刷新按钮，应用也能正常加载与工作。不过该接口很快被标准废弃了，原因之一是这是个设计很不合理的接口，比如更新不及时，无法做到用 javascript 精细化控制，可用性很差，如果你不严格的遵循其规则，会遇到很多坑。取而代之的是更强大的 service-worker。
2. service-worker
   正因为 Application Cache 一直无法有效解决离线资源精细化控制，service-worker（以下简称 sw）接口被设计出来了，比起 Application Cache，它提供独立的后台 JS 线程，是一种特殊的 worker 上下文访问环境。在渐进式 web 应用 pwa 中，sw 为 Network independent 特性提供了最核心的支持。
   借助 CacheStorage，我们可以在 sw 安装激活的生命周期中，按需填充缓存资源，然后在 fetch 事件中，拦截 http 请求，将缓存资源或者自定义消息返回给页面。
   service-worker 实现了真正的可用性及安全性。首先，相对于原有 web 应用逻辑是不可见，它类似于一个中间拦截服务，中间发生任何错误，都会退回到请求线上逻辑。其次，它只能在 https 下运行保证了安全性。
   sw 对于我们的离线化方案而言，有一个致命的问题，就是 ios webview 兼容性问题。ios 11.3 以上自带的 Safari 是支持 ws，然而， 苹果一贯的特性， 默认 UIWebView 不支持 service-worker。
   在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest ⽂件，如果是第⼀次访问 app ，那么浏览器就会根据manifest⽂件的内容下载相应的资源并且进⾏离线存储。如果已经访问过 app 并且资源已经离线存储了，那么浏览器就会使⽤离线的资源加载⻚⾯，然后浏览器会对⽐新的 manifest ⽂件与旧的 manifest ⽂件，如果⽂件没有发⽣改变，就不做任何操作，如果⽂件改变了，那么就会重新下载⽂件中的资源并进⾏离线存储。
#### 页面可见性用途
1. CSS属性 – visibility.其有两个常用属性值：hidden 与 visible. 分别表示不可见与可见。
   H5 引入的 Page Visibility API，能很有效地帮助我们完成这样的判断。这个 API 本身非常简单，由以下三部分组成。
2. document.hidden：表示页面隐藏的布尔值，页面隐藏包括页面在后台标签中，或者浏览器最小化（被遮盖的不算）
3. document.visibilityState：
- hidden：页面在后台标签页中或者浏览器最小化
- visible：页面在前台标签页中
- prerender：页面在屏幕外执行预渲染处理 document.hidden 的值为 true
- unloaded：页面正在从内存中卸载
4. Visibilitychange 事件：当文档从可见变为不可见或者从不可见变为可见时，会触发该事件。
   document.addEventListener('visibilitychange', function() {
   var isHidden = document.hidden;
   if (isHidden) {
   // 动画停止
   // 服务器轮询停止 等等
   } else {
   // 动画开始
   // 服务器轮询
   }
   });
#### 锚点的作用与设置
1. 锚点是文档中某行的一个记号，类似于书签，用于链接到文档中的某个位置。定义锚点后，可以创建直接跳至该锚点（比如页面中某个小节）的链接，这样使用者就无需不停地滚动页面来寻找他们需要的信息了。在使用<a>元素创建锚点时，可以使用 name 属性为其命名对其他元素可以使用 id 属性为其命名
#### 如何实现浏览器多个标签页通信
浏览器存储：
1. localStorage:在一个标签页里面使用localStorage.setItem(key,value)添加(修改、删除)内容;在另一个标签页里面监听storage事件。即可得到localStorage存储的值，实现不同标签页之间的通信。
2. cookie+setInterval,将要传递的信息存储在cookie中，每隔一定时间读取cookie信息， 即可随时获取要传递的信息。在A页面将需要传递的消息存储在cookie当中在B页面设置setInterval,以一定的时间间隔去读取cookie的值。(不停地问cookie)
   监听服务事件：
3. WebSocket是全双工（full-duplex）通信自然可以实现多个标签页之间的通信（服务器可以主动发数据给浏览器；浏览器也可以主动发数据给服务器）。WebSocket 是HTML 5新增的协议，它的目的是在浏览器和服务器之间建立一个不受限的双向通信的通道，比如说，服务器可以在任意时刻发送消息给浏览器。
   为什么WebSocket连接可以实现全双工通信而HTTP连接不行呢?
   实际上通讯协议是建立在TCP协议之上的, TCP协议本身就实现了全双工通信，但是HTTP协议的请求-应答机制限制了全双工通信。WebSocket连接建立以后，其实只是简单规定了一下:接下来，咱们通信就不使用HTTP协议了，直接互相发数据吧。安全的WebSocket连接机制和HTTPS类似。首先，浏览器用wss://xx创建WebSocket连接时， 会先通过HTTPS创建安全的连接，然后，该HTTPS连接升级为WebSocket连接，底层通信走的仍然是安全的SSL/TLS协议。
   WebSocket特点
- (1)建立在 TCP 协议之上，服务器端的实现比较容易。
- (2)与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
- (3)数据格式比较轻量,性能开销小，通信高效。
- (4)可以发送文本，也可以发送二进制数据。
- (5)没有同源限制，客户端可以与任意服务器通信。
- (6)协议标识符是ws (如果加密,则为wss)，服务器网址就是URL。
4. SharedWorker：普通的 webWorker 直接使用 new Worker() 即可创建，这种 webWorker 是当前页面专有的。然后还有种共享 worker(SharedWorker)，这种是可以多个标签页、iframe共同使用的。SharedWorker 可以被多个 window 共同使用，但必须保证这些标签页都是同源的(相同的协议，主机和端口号)
#### 在页面绘制圆形点击区域
1. 用 map+area 或者 svg 的；
2. border-radius 的。
#### 实现不使用border画出1px的高线
1. <div style="height:1px;overflow:hidden;background:red"></div>
#### 怎样处理 移动端1px被渲染成2px问题
1. meta 标签中的 viewport 属性 ，initial-scale 设置为 1rem 按照设计稿标准走，外加利用 transform 的 scale(0.5) 缩小一倍即可； 2 全局处理
2. meta 标签中的 viewport 属性 ，initial-scale 设置为 0.5rem 按照设计稿标准走即可
#### 验证码是干什么的，为了解决什么问题
1. 用来鉴别人还是机器的方法，防止账号被机器或者工具恶意操作。
2. 是为了增加密码破解的时间成本。对于那些设置弱口令的用户来说，由于验证码的存在，他人破解用户密码（暴力 / 穷举）时间成本大大的增加。
3. 区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水；有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断登陆尝试。
