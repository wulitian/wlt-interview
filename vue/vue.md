## vue面试题

### ---------vue---------
#### 你知道style加scoped属性的用途和原理吗？
1. 作用：实现组件的私有化，不对全局造成样式污染，表示当前style属性只属于当前模块。
2. 用途：使css样式只在当前组件中生效
3. scoped会在DOM结构及css样式上加上唯一性的标记【data-v-something】属性，即CSS带属性选择器，以此完成类似作用域的选择方式，从而达到样式私有化，不污染全局的作用。
4. 修改第三方组件库如element-ui样式不生效的解决办法
   使用 >>> 可以穿透 scoped 属性，修改其他第三方组件的样式。
   使用 sass 或 less 的样式穿透 /deep/ 。
   使用两个 style 标签，一个带 scoped 属性，一个不带 scoped 属性，用来修改第三方组件的样式。
#### v-if和v-for的优先级是什么？如果这两个同时出现时，那应该怎么优化才能得到更好的性能？
vue2中v-if的优先级小于v-for
vue3中v-if的优先级大于v-for
尽量避免同时使用，vue.$options.render，可以打印出render函数便可以看出优先级，也可以阅读源码，会发现具体的优先级
#### v-show和v-if
1. v-show与v-if的共同点
   都能控制元素在页面是否显示
2. v-show与v-if的区别   
   控制手段：v-show隐藏则是为该元素添加css--display:none，dom元素依旧还在。v-if显示隐藏是将dom元素整个添加或删除
   编译过程：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换
   编译条件：v-if是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染
   v-show 由false变为true的时候不会触发组件的生命周期
   v-if由false变为true的时候，触发组件的beforeCreate、create、beforeMount、mounted钩子，由true变为false的时候触发组件的beforeDestory、destoryed方法
   性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；
3. v-show与v-if原理分析  
   v-show原理:不管初始条件是什么，元素总是会被渲染
   v-if原理:v-if在实现上比v-show要复杂的多，因为还有else else-if 等条件需要处理，这里我们也只摘抄源码中处理 v-if 的一小部分
   返回一个node节点，render函数通过表达式的值来决定是否生成DOM
4. v-show与v-if的使用场景
   v-if 与 v-show 都能控制dom元素在页面的显示
   v-if 相比 v-show 开销更大的（直接操作dom节点增加与删除）
   如果需要非常频繁地切换，则使用 v-show 较好
   如果在运行时条件很少改变，则使用 v-if 较好
#### vue组件之间的通信都有哪些？
常见使用场景可以分为三类:
父子组件通信: props;parent / children; provide / inject ; ref ;attrs / listeners
兄弟组件通信: eventBus ; vuex
跨级通信: eventBus；Vuex；provide / inject 、attrs / listeners
#### 请描述下vue的生命周期是什么？
activated -> onActivated
deactivated -> onDeactivated
#### vue生命周期总共有几个阶段？
beforeCreate -> 使用 setup()
created -> 使用 setup()
beforeMount -> onBeforeMount
mounted -> onMounted
beforeUpdate -> onBeforeUpdate
updated -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed -> onUnmounted
errorCaptured -> onErrorCaptured
activated -> onActivated
deactivated -> onDeactivated
#### vue生命周期的作用是什么？
它的生命周期中有多个事件钩子，让我们在合适的时机书写合适的逻辑，比如我们需要使用dom节点那就需要在mounted中写逻辑
#### DOM渲染在哪个周期中就已经完成了？
mounted
#### 组件进来请求接口时你是放在哪个生命周期？为什么？
一般在created 因为在这个生命周期我们常用到的都已经初始化好了,如果涉及dom 那就mounted
#### 第一次加载页面时会触发哪几个钩子？
beforeCreate, created, beforeMount, mounted
#### 在使用计算属性的时，函数名和data数据源中的数据可以同名吗？
不可以,因为不管是computed还是data都会挂载到vm实例上,如果同名的话,根据js编译代码从上往下执行的机制,前面的属性就会被后面定义的属性覆盖
props,methods,data,computed,watch这些都不可以同名
#### vue的属性名称与method的方法名称一样时会发生什么问题？
vue会把methods和data的东西，全部代理到vue生成对象中。
会产生覆盖所以最好不要同名
键名优先级：props > data > methods
#### vue中怎么重置data？
Object.assign(this.$data,this.$options.data())
#### vue渲染模板时怎么保留模板中的HTML注释呢？
在需要保留注释的标签上添加v-pre指令
#### watch,methods的属性用箭头函数定义结果会怎么样？
this是undefined，要更改的属性会报TypeError错误, Cannot read property 'xxx' of undefined。
因为箭头函数默绑定父级作用域的上下文，所以不会绑定vue实例，所以 this 是undefined。
#### 在vue项目中如何配置favicon？
1. 在public下放置favicon.ico文件
浏览器会自动爬去根目录的 favicon.ico 文件，然后自动呈现
2. 在index.html入口文件添加,也可以添加其他类型的网址图标，如：png图标

```
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
<link rel="shortcut icon" type="image/png" href="favicon.png"/>
```
3. 在HtmlWebpackPlugin插件中配置.

```
new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'index.html',
  inject: true,
  favicon: path.resolve('favicon.ico')
}）
```
#### 说说你对vue的错误处理的了解？
分为errorCaptured与errorHandler。
errorCaptured是组件内部钩子，可捕捉本组件与子孙组件抛出的错误，接收error、vm、info三个参数，return false后可以阻止错误继续向上抛出。
errorHandler为全局钩子，使用Vue.config.errorHandler配置，接收参数与errorCaptured一致，2.6后可捕捉v-on与promise链的错误，可用于统一错误处理与错误兜底。
#### 在vue事件中传入$event，使用e.target和e.currentTarget有什么区别？
event.currentTarget始终指向事件所绑定的元素,
而event.target指向事件发生时的元素。
#### 在.vue文件中style是必须的吗？那script是必须的吗？为什么？
template是必须的，而script与style都不是必须的
如果没有 template，则 [Vue warn]: Failed to mount component: template or render function not defined.
#### vue怎么实现强制刷新组件？
1. 刷新整个页面（最low的，可以借助route机制）
2. 使用v-if标记（比较low的）
3. 使用内置的forceUpdate方法（较好的）使用前需要在配置中启用。
```
import Vue from 'vue'
Vue.forceUpdate()
export default {
   methods: {
      handleUpdateClick() {
         // built-in
         this.$forceUpdate()
      }
   }
}
```
4. 使用key-changing优化组件（最好的）
#### vue自定义事件中父组件怎么接收子组件的多个参数？
直接把data传过去，或者分别传过去，父组件用arguments接收
#### vue给组件绑定自定义事件无效怎么解决？
检查事件名称是否正确：确保父组件和子组件使用的事件名称是一致的。
使用 v-on 绑定事件：确保在父组件中使用 v-on 指令绑定事件，并且正确指定了事件名称。
触发事件：确保在子组件中使用 $emit 触发事件，并且正确指定了事件名称。
使用修饰符：如果需要，可以使用 .native 修饰符，强制使用原生 DOM 事件。
#### vue变量名如果以_、$开头的属性会发生什么问题？怎么访问到它们的值？
以 _ 或 $ 开头**的属性不会被 Vue 实例代理，因为可能和 Vue 内置的属性、API 方法冲突。可以使用例如 **vm.$data._property
#### vue使用v-for遍历对象时，是按什么顺序遍历的？如何保证顺序？
1、会先判断是否有iterator接口，如果有循环执行next()方法
2、没有iterator的情况下，会调用Object.keys()方法，在不同浏览器中，JS引擎不能保证输出顺序一致
3、保证对象的输出顺序可以把对象放在数组中，作为数组的元素
#### vue如果想扩展某个现有的组件时，怎么做呢？
1. 常见的组件扩展方法有：mixins，slots，extends等
2. 混入mixins是分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。
3. 插槽主要用于vue组件中的内容分发，也可以用于组件扩展。
4. 组件选项中还有一个不太常用的选项extends，也可以起到扩展组件的目的
5. 混入的数据和方法不能明确判断来源且可能和当前组件内变量产生命名冲突，vue3中引入的composition api，可以很好解决这些问题，利用独立出来的响应式模块可以很方便的编写独立逻辑并提供响应式的数据，然后在setup选项中有机组合使用。例如：x`
```
// 复用逻辑1
function useXX() {}
// 复用逻辑2
function useYY() {}
// 逻辑组合
const Comp = {
	setup() {
		const {xx} = useXX()
		const {yy} = useYY()
		return {xx, yy}
	}
}
```
#### 说下$attrs和$listeners的使用场景
我们可能会有一些属性和事件没有在props中定义，这类称为非属性特性，结合v-bind指令可以直接透传给内部的子组件。
这类“属性透传”常常用于包装高阶组件时往内部传递属性，常用于爷孙组件之间传参。比如我在扩展A组件时创建了组件B组件，然后在C组件中使用B，此时传递给C的属性中只有props里面声明的属性是给B使用的，其他的都是A需要的，此时就可以利用v-bind="$attrs"透传下去。
最常见用法是结合v-bind做展开；$attrs本身不是响应式的，除非访问的属性本身是响应式对象。
vue2中使用listeners获取事件，vue3中已移除，均合并到attrs中，使用起来更方便了
#### 分析下vue项目本地开发完成后部署到服务器后报404是什么原因呢？
为什么 history 模式下有问题，vue是单页面应用时vue通过js模拟的路由，vue打包后只会打包出一个单页面此时nginx配置应该均指向这个页面，页面跳转交给vue本身实现。
为什么 hash 模式下没有问题 router hash 模式我们都知道是用符号 #表示的，如 website.com/#/login, hash 的值为 #/login
它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对服务端完全没有影响，因此改变 hash 不会重新加载页面
hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 website.com/#/login 只有 website.com 会被包含在请求中 ，因此对于服务端来说，即使没有配置location，也不会返回404错误
#### v-once的使用场景有哪些？
1. v-once是vue的内置指令，作用是仅渲染指定组件或元素一次，并跳过未来对其更新。
2. 如果我们有一些元素或者组件在初始化渲染之后不再需要变化，这种情况下适合使用v-once，这样哪怕这些数据变化，vue也会跳过更新，是一种代码优化手段。
3. 我们只需要作用的组件或元素上加上v-once即可。
4. vue3.2之后，又增加了v-memo指令，可以有条件缓存部分模板并控制它们的更新，可以说控制力更强了。
编译器发现元素上面有v-once时，会将首次计算结果存入缓存对象，组件再次渲染时就会从缓存获取，从而避免再次计算。
#### 说说你对vue的表单修饰符.lazy的理解
ue.js 中的 .lazy 修饰符可以延迟绑定的触发，直到用户输入内容才会更新数据。这是一个常用于绑定表单输入的高效方法，因为默认情况下，v-model 会在每一个输入事件 (如 keyup) 触发，而使用 .lazy 修饰符则只会在失去焦点时触发，从而减少不必要的更新。
#### vue为什么要求组件模板只能有一个根元素？
Vue2中 组件只能有一个根元素，是因为Vue的模板编译器在编译模板时，会将模板转换成一个render函数，而这个render函数只能返回一个单一的根节点。
在Vue中，每个组件必须有且只能有一个根元素。如果需要多个元素并列显示，可以使用一个父元素将它们包裹起来
Vue 3.x 中，采用了基于函数式编程的渲染方式，不再需要将模板转换成 render 函数。相反，Vue 3.x 使用了基于模板的编译方式，并且支持了 Fragment 的概念。Fragment 是一种虚拟节点，它可以包含多个子节点，并且不会在 DOM 树中创建任何实际的元素。
#### EventBus注册在全局上时，路由切换时会重复触发事件，如何解决呢？
是因为事件是全局的，它并不会随着组件的销毁而自动注销，需要手动调用注销方法来注销。 在组件的 beforeDestroy ,或 destroy 生命周期中执行注销方法，手动注销事件。
```
beforeDestroy() {
    //组件销毁前需要解绑事件。否则会出现重复触发事件的问题
    this.bus.$off(this.$route.path);
},
```
#### 在组件中怎么访问到根实例？
$root：这个属性用于获取 Vue 应用的根实例。在任何子组件中，你都可以通过 this.$root 访问到根实例。这在一些特殊情况下可能会有用，比如全局事件监听或全局状态管理。
#### vue组件里写的原生addEventListeners监听事件，要手动去销毁吗？为什么？
要，不然会造成多次绑定和内存泄露
```
window.addEventListener('resize',this.computeOffset,false);
window.removeEventListener('resize',this.computeOffset,false);
```
#### vue组件里的定时器要怎么销毁？
1. 通过 $once 一次性侦听一个事件，在组件内的 beforeDestroy 钩子函数中清除定时器：
```
mounted () {
  const that = this
  // 组件中保存定时器
  this.testSetinterval = setInterval(() => {
    setTimeout(() => {
      console.log('test clearInterval')
    }, 0)
  }, 2000)
  // 监听 beforeDestroy 事件
  this.$once('hook:beforeDestroy', () => {
    clearInterval(that.testSetinterval)
  })
}
```
2. 在组件内设置定时器，并存储由setInterval()返回的ID值,拦截前端路由，在组件内的 beforeDestroy 钩子函数中清除定时器
```
router.beforeEach((to, from, next) => {
  clearInterval(this.testSetinterval)
})
```
#### vue组件会在什么时候下被销毁？
页面关闭、路由跳转、v-if和改变key值
#### 使用vue渲染大量数据时应该怎么优化？说下你的思路！
列表分页：将大量数据分页加载，只渲染当前页的数据，可以减少初始加载时间和内存占用。可以通过分页组件或者手动控制数据源来实现。
虚拟滚动：当列表中的数据数量非常大时，使用虚拟滚动可以避免渲染所有的数据，只渲染可见区域的数据。可以使用第三方库如 vue-virtual-scroller 来实现虚拟滚动效果。
懒加载：当列表中的数据需要异步加载时，可以使用懒加载的方式，只有当用户滚动到某个位置时再去加载数据并渲染。这样可以避免一次性加载大量数据导致页面卡顿。可以使用第三方库如 vue-lazyload 来实现图片的懒加载。
列表项的复用：在列表中，尽量使用 v-for 的 key 属性，并保持唯一性，这样可以实现列表项的复用，减少 DOM 的创建和销毁，提高渲染性能。
数据缓存：对于静态的大量数据，可以将其缓存到本地或者使用浏览器的缓存机制，避免每次都从服务器获取数据。
使用异步更新：当需要更新大量数据时，可以使用异步更新的方式，将更新操作放在下一个事件循环中执行，避免阻塞主线程。
使用计算属性或者过滤器：对于需要对数据进行处理或者筛选的情况，可以使用计算属性或者过滤器来减少模板中的逻辑复杂度，提高渲染性能。
使用 keep-alive 缓存组件：对于频繁切换的组件，可以使用 keep-alive 组件进行缓存，避免重复渲染和销毁，提高性能和用户体验。
#### 你有使用过JSX吗？说说你对JSX的理解
jsx不是一门新的语言，是一种新的语法糖。让我们在js中可以编写像html一样的代码。
允许XML语法直接加入到JavaScript代码中，让你能够高效的通过代码而不是模板来定义界面
#### 说说你对provide和inject的理解
在Vue.js中，provide和inject方法是一对特殊的方法，用于在父组件中提供数据，然后在子组件中注入数据。通过使用provide和inject，我们可以在组件树中任意层次的组件之间进行数据的传递和共享，从而实现复杂的数据交互和状态管理的需求。
需要注意的是，provide和inject方法并不是响应式的，也不会进行深度监听，因此在使用时需要注意数据的变化和更新。同时，provide和inject方法只能在父组件和子组件之间进行数据的传递和共享，而无法在兄弟组件之间进行数据的共享。
#### `<template></template>`有什么用？
*隐藏性：不会显示在页面中
*任意性：可以写在页面的任意地方
*无效性： 没有一个根元素包裹，任何HTML内容都是无效的
#### vue的is这个特性你有用过吗？主要用在哪些方面？
1.限制组件，是为了解决在ul，或者ol中的li中；select的options中；table的tr中不能使用特定内容的问题
```
<ul>
  <li is="my-component"></li>
</ul>
```
2.动态组件，动态显示不同组件
#### vue的:class和:style有几种表示方式？
```
<template>
  <div class="home">
    <!-- 绑定一个class -->
     <div :class="bgc">绑定class</div>
     <!-- 绑定多个class -->
     <div :class="[classB, classC]">绑定多个class</div>
     <!-- 对象绑定 -->
     <div :class="classobj">对象绑定(对象值为true才显示) -- > 写法1</div>
     <div :class="{current: true, focus: false}">对象绑定(对象值为true才显示)  --- > 写法2</div>
     <div :class="{current: isCurrent, focus: isFocus}">将value设置为变量也可</div>
    <!-- 绑定style -->
    <div :style="{color: 'red', fontSize: '20px'}">绑定样式  对象绑定</div>
    <div :style="{color: color, fontSize: ft}">绑定样式  对象绑定  将属性值设置为变量 </div>
    <div :style="styleObj">绑定样式  对象绑定  将属性值设置为变量 </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      classA: 'bgc',
      classB: 'cb',
      classC: 'cc',
      classobj: {
        current: true,
        focus: false
      },
      isCurrent: true,
      isFocus: false,
      color: 'blue',
      ft: '30px',
      styleObj: {
        color: 'yellow',
        fontSize: '30px'
      }
    }
  }
}
</script>
```
#### vue怎么改变插入模板的分隔符？
可以在new Vue传入配置对象中设置delimiters，也可以Vue.config.delimiters = ['${', '}']
这么一改，所有用到 {{ }} 插值表达式的地方都要換成 ${ }
#### 组件中写name选项有什么作用？
1, 项目使用 keep-alive 时，可搭配组件 name 进行缓存过滤
2, DOM 做递归组件时需要调用自身 name
3, Vue-devtools 调试工具里显示的组见名称是由 Vue 中组件 name 决定的
#### 说说你对slot的理解有多少？slot使用场景有哪些？
v-slot属性只能在<template>上使用，但在只有默认插槽时可以在组件标签上使用
默认插槽名为default，可以省略default直接写v-slot
缩写为#时不能不写参数，写成#default
可以通过解构获取v-slot={user}，还可以重命名v-slot="{user: newName}"和定义默认值v-slot="{user = '默认值'}"
#### prop验证的type类型有哪几种？
• String
• Number
• Boolean
• Array
• Object
• Date
• Function
• Symbol
#### 怎么缓存当前打开的路由组件，缓存后想更新当前组件怎么办呢？
1.通过keep-alive组件可以缓存 组件,通过路由配置中的meta选项中的自定义属性trueorfalse决定缓存,或者使用include属性来添加缓存的组件
2.key值的改变组件会进行重建,因此可以再actived中改变key值
#### 说说你对vue组件的设计原则的理解
第一: 容错处理, 这个要做好, 极端场景要考虑到
第二: 缺省值(默认值)要有, 一般把应用较多的设为缺省值
第三: 颗粒化, 把组件拆分出来.
第四: 一切皆可配置, 如有必要, 组件里面使用中文标点符号, 还是英文的标点符号, 都要考虑到
第五: 场景化, 如一个dialog弹出, 还需要根据不同的状态封装成success, waring, 等
第六: 有详细的文档/注释和变更历史, 能查到来龙去脉, 新版本加了什么功能是因为什么
第七: 组件名称, 参数prop, emit, 名称设计要通俗易懂, 最好能做到代码即注释这种程度
第八: 可拓展性, 前期可能不需要这个功能, 但是后期可能会用上, 要预留什么, 要注意什么, 心里要有逼数
第九: 规范化,我这个input组件, 叫on-change, 我另外一个select组件叫change,
第十: 分阶段: 不是什么都要一期开发完成看具体业务
#### vue能监听到数组变化的方法有哪些？为什么这些方法能监听到呢？
push,pop,shift,unshift,reverse,splice,sort
内部进行了处理
#### vue中是如何使用event对象的？
使用不带圆括号的形式(@click="click")，event 对象将被自动当做实参传入；
使用带圆括号的形式(v-on:click="click()")，我们需要使用 $event 变量显式(@click="click($event, xxx)")传入 event 对象。
#### 说说你对v-clock和v-pre指令的理解
v-cloak指令只是在标签中加入一个v-cloak自定义属性，在HTML还编译完成之后该属性会被删除。
v-pre可以用来阻止预编译，有v-pre指令的标签内部的内容不会被编译，会原样输出。
#### 写出你知道的表单修饰符和事件修饰符
事件修饰符.stop(组织冒泡) .prevent(阻止浏览器默认行为) .capture(事件捕获从父级开始触发) .self(只捕获自身出发的) .once(只执行一次) .passive(不阻止浏览器默认行为)
表单修饰符.number .lazy .trim
#### vue父子组件双向绑定的方法有哪些？
1. prop向下传递，emit向上传递
2. v-model 通过v-model属性实现 （子组件需要定义model其中包括prop,event）
3. sync修饰符
4. vue3.0取消了sync修饰符换做v-model:title 语法代替
#### 说说你对vue的template编译的理解？
1. 将模板字符串解析成 AST（抽象语法树）
2. Vue 的编译器会遍历 AST，然后根据节点类型、属性、文本等信息，生成一个 JavaScript 函数，这个函数就是我们常说的“渲染函数”。
   渲染函数是一个接受一个参数的函数，这个参数就是 Vue 实例，它返回一个 VNode（虚拟节点）。在 Vue 中，VNode 用于描述真实 DOM 树中的节点
   其中，tag 表示节点的标签名；data 表示节点的属性和事件等信息；children 表示子节点；text 表示文本内容；elm 表示真实 DOM 节点；ns 表示节点的命名空间；context 表示渲染上下文；key 表示节点的唯一标识符。
3. 将 VNode 渲染成真实 DOM。
4. 最后会将渲染出来的组件挂载到实例上。
   render 函数和 h 函数
   h 函数用于创建 VNode，它接受三个参数：
   tag 表示节点的标签名、组件选项对象或者异步组件的工厂函数；
   data 表示节点的属性和事件和子节点等信息；
   children 表示子节点数组。
   render 函数则是一个更加底层的函数，它接受一个 createElement 函数作为参数，这个函数可以用来创建 VNode
   vue2.0中使用template实际上也是会先编译成render函数的
#### v-on可以绑定多个方法吗？
```
<button v-on="{'contextmenu':box,'click':click}">按钮</button>
<button v-on:click="sayHello; sayGoodbye">按钮</button>
<input  v-on:input="a"  v-on:blur="b"  />
```
#### 为什么vue使用异步更新组件？
正常情况下：内容更新->触发setter->触发Watcher的update->重新调用render->生成新的vdom->dom-diff->dom更新。这里的dom是内存中的
watcher中会有dep依赖收集如果你连续操作同一个key会进行依赖的的更新，最后当本次宏任务执行完，就会执行微任务其实就是watcher队列，不管你执行多少次watcher后面的流程只有一次。
#### 使用vue手写一个过滤器
通过|在数据后面填写过滤器名字，之后在vue中通过filters中定义这个过滤器，也可以接受参数。最后返回处理后的结果
#### vue怎么获取DOM节点？
ref
#### v-model是什么？有什么用呢？
v-model 指令的实现原理是基于计算属性和事件绑定。它会将表单元素的 value 属性绑定到一个计算属性上，并且在计算属性的 setter 中触发 input 事件来更新 Vue 实例中的数据
#### vue的响应式原理
1. 监听器observer 通过object.defineProperty实现数据响应式，通过get,set实现数据响应式，判断data中的数据类型如果是对象
2. 触发get时会进行依赖收集会将当前的watcher收集到dep中 
3. 当数据变化时会触发set，调用dep中的notify方法通知所用使用到当前数据的watcher进行更新
#### 你了解vue的diff算法吗？
diff 算法是一种通过同层的树节点进行比较的高效算法 比较只会在同层级进行, 不会跨层级比较在diff比较的过程中，循环从两边向中间比较。
当数据发生改变时，订阅者watcher就会调用patch给真实的DOM打补丁
通过isSameVnode进行判断，相同则调用patchVnode方法
patchVnode做了以下操作：
找到对应的真实dom，称为el
如果都有都有文本节点且不相等，将el文本节点设置为Vnode的文本节点
如果oldVnode有子节点而VNode没有，则删除el子节点
如果oldVnode没有子节点而VNode有，则将VNode的子节点真实化后添加到el
如果两者都有子节点，则执行updateChildren函数比较子节点
updateChildren主要做了以下操作：
设置新旧VNode的头尾指针
新旧头尾指针进行比较，循环向中间靠拢，
1：oldStart与newStart比较,
2：oldEnd与newEnd比较,
3：oldStart与newEnd比较,
4：oldEnd与newStart比较,
根据情况调用patchVnode进行patch重复流程、
其中oldStart与newEnd比较isSameVnode会把oldStart移动到移动到最后
其中oldEnd与newStart比较isSameVnode会把oldEnd移动到移动到最前
如果4中匹配都没成功分为两种情况
1： 如果新旧子节点都存在key
那么会根据旧的节点的key生成一张hash表，用新节点的key与hash表做匹配，匹配成功就判断节点是否为sameNode，如果是，就在真实dom中将成功的节点移到最前面，否则，将新节点插入到dom中对应的oldS位置，S指针向中间移动，被匹配old中的节点置为null。
如果没有key,则直接将S生成新的节点插入真实DOM
#### 你有使用过动态组件吗？说说你对它的理解
通过Vue内置组件 <component></component> 的 is 属性控制不同组件的渲染
#### vue打包成最终的文件有哪些？
vendor.js, app.js, app.css,
如果有设置到单独提取css，js的话
还有
1.xxx.css
2.xxx.js
#### ajax、fetch、axios这三都有什么区别？
ajax是js异步技术的术语，早起相关的api是xhr，它是一个术语。
fetch是es6新增的用于网络请求标准api，它是一个api。
axios是用于网络请求的第三方库，它是一个库。xhr+http
#### 你知道nextTick的原理吗？
在Vue2当中，nextTick的回调函数会经统一处理压入callbacks队列中执行，之后执行timerFunc timerFunc是根据当前环境支持什么方法则确定调用哪个，
分别有：Promise.then、MutationObserver、setImmediate、setTimeout等宏任务与微任务进行降级 无论是微任务还是宏任务，都会放到flushCallbacks使用，
等待下一次事件循环到了微任务或者宏任务，执行函数依次执行flushCallbacks中的回调。
而在Vue3当中，nextTick则是利用promise的链式调用，将用户放入的回调放在更新视图之后的then里面调用，用户调用多少次nextTick，就接着多少个then。
#### vue过渡动画实现的方式有哪些？
1.使用vue的transition标签结合css样式完成动画
2.利用animate.css结合transition实现动画
3.利用 vue中的钩子函数实现动画
#### 如何实现一个虚拟DOM？说说你的思路
1. 什么事虚拟dom?
虚拟dom vue框架与react框架都使用的虚拟dom,可以跨平台，实际上就是对真是dom的抽象，以javascript对象作为基础的树，用对象属性描述节点，通过一系列的操作使这个树
映射到真是环境上，在javascript中表现为object对象，最少包含标签名（tag）,属性（attr）,子元素对象（children），不同框架对这三个属性也有差异，
vue可以对这棵树进行创建节点，修改节点，删除节点，经过diff算法得出需要修改的最小部分，在更新视图，减少dom操作，提高性能。
2. 为什么需要虚拟dom
dom渲染是很慢的，大部分性能问题都是dom渲染引起的，正常渲染10次同一个div（每个div看起来简单实际上包含很多属性），其实开销是很大的，如果用虚拟dom可以通过diff算法减少操作
真实dom。
3. 虚拟dom的实现
createElement 创建 VNode 的过程，每个 VNode 有 children，children 每个元素也是一个VNode，这样就形成了一个虚拟树结构，用于描述真实的DOM树结构
#### 说说你对vue的extend（构造器）的理解，它主要是用来做什么的？
在Vue中，Vue.extend是一个构造器，用于创建一个可复用的Vue组件构造函数。
使用Vue.extend可以创建一个组件构造函数，该构造函数可以用于生成多个具有相同配置的组件实例。这样可以提高组件的复用性和可扩展性。
Vue.extend允许你在运行时动态创建组件。可以根据不同的条件或需要，通过组件构造函数创建新的组件实例。
Vue.extend允许你继承现有的组件构造函数，并对其进行扩展。这样可以创建一个新的组件，拥有父组件的特性并添加自己的定制逻辑。
#### vue项目有做过单元测试吗？
在Vue项目中进行单元测试是一种良好的实践，它可以帮助你验证组件的行为和逻辑是否正确，提高代码质量和可维护性。以下是在Vue项目中进行单元测试的一般步骤：
选择测试框架： 首先，选择一个适合的测试框架，常见的选择包括Jest、Mocha、Karma等。这些测试框架都对Vue进行了良好的支持。
安装和配置测试环境： 安装所选测试框架和相关的测试工具，并进行配置。这包括安装相关的依赖、配置测试运行器、创建测试配置文件等。
编写测试用例： 创建针对Vue组件的测试用例，覆盖组件的不同行为和逻辑。测试用例应该包括组件的各种情况和边界条件，以确保组件在不同场景下的正确性。
编写断言： 在测试用例中使用断言来验证组件的预期行为和输出结果。断言用于判断组件的状态、DOM渲染结果、事件触发等。
运行和分析测试结果： 运行测试用例，并分析测试结果。测试运行器将执行测试用例，并给出测试结果和统计信息。可以根据测试结果进行问题排查和优化改进。
测试覆盖率分析： 可选地，你可以使用工具来分析测试覆盖率，以评估测试用例对项目代码的覆盖程度。测试覆盖率工具可以帮助你发现未被测试到的代码块，并提供指导来改进测试覆盖率。
需要注意的是，在编写测试用例时，应该尽量遵循良好的测试原则，如单一职责、独立性、可重复性等。此外，还可以使用Vue提供的辅助函数和工具库来简化测试过程，如@vue/test-utils和vue-test-utils。
总之，单元测试是Vue项目中的一项重要实践，可以帮助你验证组件行为和逻辑的正确性。通过选择适当的测试框架、编写测试用例和断言，并运行测试并分析结果，你可以提高代码质量和可维护性，并增强项目的稳定性。
#### vue项目有使用过npm run build --report吗？
在Vue项目中，npm run build --report是一个用于构建项目并生成打包报告的命令。
当你执行npm run build --report命令时，Vue的构建工具（通常是Webpack）会开始打包你的项目。打包完成后，会生成一个报告文件，该报告文件包含了打包过程中生成的各种资源文件的详细信息，例如文件大小、依赖关系、模块分布等。
生成的报告文件通常是一个HTML文件，可以在浏览器中打开查看。报告文件会以可视化的方式展示项目的构建情况和资源分布，帮助你了解项目的打包情况，并找出潜在的问题和优化的机会。
通过查看报告文件，你可以获取有关打包过程中的各种指标和统计信息，例如每个文件的大小、模块之间的依赖关系、打包后的文件结构等。这些信息有助于你分析和优化项目的打包结果，以提高性能、减小文件大小，并优化加载速度。
需要注意的是，--report参数需要与npm run build命令一起使用才会生成打包报告。如果不使用该参数，将不会生成打包报告文件。
总之，npm run build --report命令在Vue项目中用于生成打包报告，提供了对项目打包结果的可视化分析，帮助你了解项目的构建情况和优化需求。
#### 如何解决vue打包vendor过大的问题？
使用 vue-router 路由懒加载
使用 gzip 压缩
使用 CDN 引入 js 和 css 文件
配置 webpack 的 external，不打包第三方库
配置 DllPlugin 和 DllReferencePlugin 将引用的依赖提取
webpack 打包 vue 速度慢，可以通过 webpack-bundle-analyzer 进行可是化分析，主要看依赖和 chunks 打包的时间。
减少文件依赖嵌套的深度
使用尽可能少的处理（loader、plugin）
DLL 处理第三方的包
多线程打包（HappyPack）
关闭 sourcemap
减少代码体积、压缩代码
优化 resolve.extensions 配置
优化 resolve.modules 配置
优化 resolve.alias 配置
使用 include 和 exclude
设置 babel-loader 缓存
另外打包慢，是一个综合因素，和 Vue 关系不大
确保 Webpack 、Npm、Node 及主要库版本要新，比如 4.x 比 3.x 提升很多，5.x 比 4.x 又提升很多。
loader 范围缩小到 src 项目文件，一些不必要的 loader 能关就关了
eslint 代码校验其实一个很费时间的步骤
可以把 eslint 范围缩小到 src，且只检查 *.js,*.vue文件
生产环境不开启 lint，使用 per-commit 或者 husky 在提交前校验
其它还是前边提到的，多进程运行，动态链接库(DllPlugin)
#### vue在开发过程中要同时跟N个不同的后端人员联调接口（请求的url不一样）时你该怎么办？
创建多个环境配置文件，分别对应不同的后端接口URL。
根据当前环境选择对应的后端接口URL。
根据需要切换后端接口URL，通过修改环境变量的方式来实现。
#### vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？
前端权限控制可以分为四个方面：
1. 接口权限:
   接口权限目前一般采用jwt的形式来验证，没有通过的话一般返回401，跳转到登录页面重新进行登录,登录完拿到token，将token存起来，通过axios请求拦截器进行拦截，每次请求的时候头部携带token
4. 路由权限:
   方案一: 初始化即挂载全部路由，并且在路由上标记相应的权限信息，每次路由跳转前做校验
   这种方式存在以下四种缺点：
      加载所有的路由，如果路由很多，而用户并不是所有的路由都有权限访问，对性能会有影响。
      全局路由守卫里，每次路由跳转都要做权限判断。
      菜单信息写死在前端，要改个显示文字或权限信息，需要重新编译
      菜单跟路由耦合在一起，定义路由的时候还有添加菜单显示标题，图标之类的信息，而且路由不一定作为菜单显示，还要多加字段进行标识
   方案二:初始化的时候先挂载不需要权限控制的路由，比如登录页，404等错误页。如果用户通过URL进行强制访问，则会直接进入404，相当于从源头上做了控制
   登录后，获取用户的权限信息，然后筛选有权限访问的路由，在全局路由守卫里进行调用addRoutes添加路由
   这种方式也存在了以下的缺点：
      全局路由守卫里，每次路由跳转都要做判断
      菜单信息写死在前端，要改个显示文字或权限信息，需要重新编译
      菜单跟路由耦合在一起，定义路由的时候还有添加菜单显示标题，图标之类的信息，而且路由不一定作为菜单显示，还要多加字段进行标识
2. 按钮权限:
   方案一: 按钮权限也可以用v-if判断,但是如果页面过多，每个页面页面都要获取用户权限role和路由表里的meta.btnPermissions，然后再做判断
   方案二: 通过自定义指令进行按钮权限的判断
3. 菜单权限:
   方案一: 菜单与路由分离，菜单由后端返回
   前端定义路由信息,name字段都不为空，需要根据此字段与后端返回菜单做关联，后端返回的菜单信息中必须要有name对应的字段，并且做唯一性校验,全局路由守卫里做判断
   每次路由跳转的时候都要判断权限，这里的判断也很简单，因为菜单的name与路由的name是一一对应的，而后端返回的菜单就已经是经过权限过滤的
   如果根据路由name找不到对应的菜单，就表示用户有没权限访问
   如果路由很多，可以在应用初始化的时候，只挂载不需要权限控制的路由。取得后端返回的菜单后，根据菜单与路由的对应关系，筛选出可访问的路由，通过addRoutes动态挂载
   这种方式的缺点：
      菜单需要与路由做一一对应，前端添加了新功能，需要通过菜单管理功能添加新的菜单，如果菜单配置的不对会导致应用不能正常使用
      全局路由守卫里，每次路由跳转都要做判断
   方案二: 菜单和路由都由后端返回,前端统一定义路由组件在将后端返回路由通过addRoutes动态挂载之间，需要将数据处理一下，将component字段换为真正的组件
   如果有嵌套路由，后端功能设计的时候，要注意添加相应的字段，前端拿到数据也要做相应的处理
   这种方法也会存在缺点：
      全局路由守卫里，每次路由跳转都要做判断
      前后端的配合要求更高
#### 说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？
文件夹和文件夹内部文件的语义一致性
单一入口/出口
就近原则，紧耦合的文件应该放到一起，且应以相对路径引用
公共的文件应该以绝对路径的方式从根目录引用
/src 外的文件不应该被引入
#### 在移动端使用vue，你觉得最佳实践有哪些？
vant，mint，uniapp
#### 你们项目为什么会选vue而不选择其它的框架呢？
Vue.js是一个轻巧、高性能、可组件化的MVVM库，同时拥有非常容易上手的API；vue是单页面应用，使页面局部刷新，不用每次跳转页面都要请求所有数据和dom，这样大大加快了访问速度和提升用户体验。而且他的第三方ui库很多节省开发时间
#### vue开发过程中你有使用什么辅助工具吗？
Vue Devtools
Vue Devtools是浏览器插件，用于调试和检查Vue应用程序。它提供了Vue组件层次结构、状态、事件等的实时查看和监控，以及性能分析和时间旅行调试等功能。
Vue CLI
Vue CLI是一个官方提供的脚手架工具，用于快速创建和构建Vue项目。它提供了项目初始化、开发服务器、打包构建、插件管理等一系列的命令和工具，简化了Vue项目的搭建和配置过程。
ESLint
ESLint是一个JavaScript代码检查工具，可帮助你在开发过程中捕捉潜在的错误和不规范的代码风格。在Vue项目中使用ESLint可以提高代码的质量和一致性，并帮助团队保持统一的编码规范。
Vue Router
Vue Router是Vue官方提供的路由管理工具，用于实现单页面应用的前端路由。它提供了路由配置、导航守卫、动态路由等功能，帮助你管理应用程序的路由和页面跳转。
Vuex
Vuex是Vue官方提供的状态管理工具，用于管理Vue应用程序中的全局状态。它提供了集中式的状态管理机制，帮助你管理和共享应用程序的状态，并提供了一些高级特性如模块化、热重载等。
Axios
Axios是一个基于Promise的HTTP客户端，用于在Vue应用中进行网络请求。它提供了简单易用的API，支持拦截器、并发请求、取消请求等功能，可以方便地与后端API进行通信。
Vues test Utils
Vue Test Utils是Vue官方提供的测试工具库，用于编写单元测试和集成测试。它提供了一系列API和工具，可以模拟Vue组件的渲染和交互，帮助你编写可靠的测试用例。
#### 为什么我们写组件的时候可以写在.vue里呢？可以是别的文件名后缀吗？
Webpack配置
如果你使用Webpack作为构建工具，可以通过修改Webpack配置文件来设置文件后缀名。
打开Webpack配置文件（一般是webpack.config.js或vue.config.js），找到相关的配置项。
配置项可以是resolve.extensions，用于指定Webpack解析模块时要尝试的文件后缀名。
例如，将.vue替换为.abc作为Vue组件文件的后缀：
```
module.exports = {
  // ...
  resolve: {
    extensions: ['.js', '.abc'], // 设置文件后缀名
  },
  // ...
};
```
Vue模板编译配置：
如果你使用Vue的单文件组件，并希望自定义模板文件的后缀名，可以在Vue的模板编译配置中进行设置。
在Vue的配置文件（如vue.config.js）中添加chainWebpack或configureWebpack选项，并使用module.rule配置来修改模板编译规则。
例如，将.html替换为.xyz作为Vue组件模板文件的后缀：
```
module.exports = {
  // ...
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          // 设置模板文件后缀名
          ...options.compilerOptions,
          fileExtension: '.xyz',
        };
        return options;
      });
  },
  // ...
};
```
#### vue-loader是什么？它有什么作用？
说起vue-loader,就不得不说一下loader了,在webpack官方文档中对loader的解释是: loader 用于对模块的源代码进行转换。它可以使你在 import 或"加载"模块时预处理文件。简单点说就是它可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！
vue-loader可以解析和转换.vue文件。提取出其中的逻辑代码 script,样式代码style,以及HTML 模板template，再分别把他们交给对应的loader去处理
#### 写出多种定义组件模板的方法
1. 使用字符串模板
可以直接在组件选项中使用template属性定义字符串模板。
```
Vue.component('my-component', {
   template: '<div>This is a component template</div>',
});
```
2. 使用单文件组件（sfc）
   单文件组件是一种将组件的模板、样式和逻辑封装在单个文件中的方式。
   在单文件组件中，使用标签定义组件的模板。
```
<template>
  <div>This is a component template</div>
</template>
```   
3. 使用渲染函数
   渲染函数是一种以JavaScript函数的形式来定义组件的模板的方式。
   渲染函数接收一个createElement函数作为参数，通过调用createElement函数来创建虚拟DOM。
```
Vue.component('my-component', {
   render: function(createElement) {
      return createElement('div', 'This is a component template');
   },
});
```
4. 使用JSX（需要Babel或TypeScript支持）
   JSX是一种将HTML结构和JavaScript代码组合在一起编写组件的语法扩展。
   使用JSX可以更直观地描述组件的结构和交互。
```
Vue.component('my-component', {
   render() {
      return <div>This is a component template</div>;
   },
});
```
#### 说说你对SPA单页面的理解，它的优缺点分别是什么？
什么事SPA？
SPA（single-page application），翻译过来就是单页应用SPA是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，
这种方法避免了页面之间切换打断用户体验在单页应用中，所有必要的代码（HTML、JavaScript和CSS）都通过单个页面的加载而检索，
或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面页面在任何时间点都不会重新加载，也不会将控制转移到其他页面。
MPA：每个页面都是一个主页面，都是独立的当我们在访问另一个页面的时候，都需要重新加载html、css、js文件
|                |  单页面应用（SPA）      |  多页面应用（MPA）  |
|  ------------  | --------------------  |  ---------------- |
| 组成            | 一个主页面和多个页面片段  |  多个主页面         |
| 刷新方式         | 局部刷新               |  整页刷新           |
| url模式         | 哈希模式               |  历史模式           |
| SEO搜索引擎优化  | 难实现，可使用SSR方式改善 |  容易实现           |
| 数据传递        | 容易                   |  通过url、cookie、localStorage等传递  |
| 页面切换        | 速度快，用户体验良好      |  切换加载资源，速度慢，用户体验差   |
| 维护成本        | 相对容易                |  相对复杂           |
#### 在vue项目中如何引入第三方库（比如jQuery）？有哪些方法可以做到？
1. 使用CDN链接 可以通过在HTML模板中直接引入外部CDN链接来使用第三方库，比如在index.html文件中引入jQuery的CDN链接：
2. 使用npm安装并直接引入 可以通过npm安装第三方库，并在Vue组件中直接引入使用，比如通过npm安装jQuery：
3. 使用Vue插件 对于一些常用的第三方库，比如jQuery、Lodash等，可以使用对应的Vue插件来集成和引入，比如vue-jquery插件：
4. 使用externals配置 还可以通过webpack的externals配置来引入第三方库，避免在打包过程中将其打包进最终的bundle中，比如在webpack配置文件中配置externals：
#### 你有使用过render函数吗？有什么好处？
render函数的作用是，当场景中用 template 实现起来代码冗长繁琐而且有大量重复，这个时候使用就可以极大的简化代码
render和template的区别？
相同之处：render 函数跟template一样都是创建html模板
不同之处：
Template适合逻辑简单，render适合复杂逻辑。
使用者template理解起来相对容易，但灵活性不足；自定义render函数灵活性高，但对使用者要求较高。
render的性能较高，template性能较低。
使用render函数渲染没有编译过程，相当于使用者直接将代码给程序。所以，使用它对使用者要求高，且易出现错误
Render 函数的优先级要比template的级别要高，但是要注意的是Mustache(双花括号)语法就不能再次使用
template和render不能一起使用，否则无效
#### 写出你常用的指令有哪些？
v-once v-pre v-clock v-for v-html v-text v-model
#### 你有用过事件总线(EventBus)吗？说说你的理解
在Vue中，事件总线是一种用于组件间通信的机制，允许不同组件之间进行事件的发布和订阅。
事件总线本质上是一个中央事件管理器，充当了组件之间的中介。它提供了一种简单而强大的方式，使得组件能够进行解耦，通过事件的方式进行通信，而不需要直接引用和依赖其他组件。
使用事件总线可以有效地解决跨组件通信的问题，特别是当组件层级较深或组件之间没有直接父子关系时。它可以减少组件之间的耦合性，提高代码的可维护性和可重用性。
// 创建事件总线实例
const eventBus = new Vue();
// 在组件A中订阅事件
eventBus.$on('eventName', (data) => {
// 处理事件的回调逻辑
});
// 在组件B中发布事件
eventBus.$emit('eventName', eventData);
#### 如何引入scss？引入后如何使用？
安装scss依赖包：
npm install sass-loader --save-dev
npm install node-sass --save-dev
在build文件夹下修改 webpack.base.conf.js 文件：
在 module 下的 rules 里添加配置，如下：
```
{ test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
```
应用：在vue文件中应用scss时，需要在style样式标签上添加lang=”scss”，即
```
<style lang="scss">
```
#### 使用vue开发过程你是怎么做接口管理的？
1. 手动管理:最简单的方式是手动创建一个文件或目录，用于存放所有的接口请求函数。可以根据模块或功能将接口进行分类，每个接口对应一个函数，函数中使用Axios或其他HTTP库发送请求。
```
// api/user.js
import axios from 'axios';
export function getUser(id) {
  return axios.get(`/api/user/${id}`);
}
// api/product.js
import axios from 'axios';
export function getProduct(id) {
  return axios.get(`/api/product/${id}`);
}
```
2. 使用接口管理工具
   可以使用专门的接口管理工具来管理接口。这些工具提供了接口定义、自动生成请求函数、接口文档等功能，可以更方便地管理和维护接口。
   示例：
   Swagger：一个流行的开源工具，用于设计、构建和文档化RESTful API。
   Postman：一个功能强大的API测试和开发工具，提供接口管理和文档化功能。
3. 使用插件或库：
   有一些专门的插件或库可以用于管理接口，例如vue-axios、@nuxtjs/axios等。这些插件提供了在Vue中集成Axios的便捷方式，并支持配置和管理接口。
   使用插件或库可以简化接口的配置和调用，并提供一些额外的功能，如拦截器、全局配置等。
#### 你认为vue的核心是什么？
Vue.js 的核心是其轻量级的、响应式的、组件化的 MVVM（Model-View-ViewModel）架构。
响应式数据： Vue.js 使用响应式数据机制来跟踪数据的变化，并在数据变化时自动更新相关的视图。通过使用 Vue.js 的数据绑定语法和响应式系统，可以在数据发生改变时，自动更新相关联的视图。
组件化开发： Vue.js 提供了组件化的开发方式，将页面拆分成多个独立、可复用的组件。每个组件都包含自己的模板、逻辑和样式，可以组合和嵌套形成更复杂的应用。组件化开发使得代码更易于维护和重用，提高了开发效率。
虚拟 DOM： Vue.js 使用虚拟 DOM 来提高渲染性能。通过将真实 DOM 结构转换成虚拟 DOM 对象，可以在内存中进行快速操作和计算。Vue.js 通过比对新旧虚拟 DOM 的差异，最小化了对实际 DOM 的操作，从而提高了渲染效率。
指令系统： Vue.js 的指令系统允许开发者通过特殊的 HTML 属性来扩展和操作 DOM。指令是带有前缀 v- 的特殊属性，可以用于控制 DOM 元素的行为和样式。Vue.js 提供了一系列内置的指令，同时也允许开发者自定义指令来满足特定的需求。
工具库和生态系统： Vue.js 提供了一系列的工具和插件，如路由器（Vue Router）、状态管理器（Vuex）、构建工具（Vue CLI）等，来辅助开发者构建复杂的单页应用。此外，Vue.js 还拥有丰富的社区生态系统，包括第三方组件库、插件和开发工具，为开发者提供了更多的选择和支持。
#### 删除数组用delete和Vue.delete有什么区别？
JavaScript中的delete运算符可以删除对象的属性，但是它不适用于数组。如果你试图使用delete运算符删除数组中的元素，你会发现该元素的值变为undefined，而数组的长度并没有改变。
Vue.js提供了一个名为Vue.delete的方法，它可以帮助我们在删除数组元素时触发响应式更新。与原生JavaScript的delete运算符不同，Vue.delete方法只能用于删除对象或数组的属性，而不能删除整个对象或数组。
使用原生JavaScript的delete运算符删除数组元素时，数组的长度没有改变，而且被删除元素的值变成了undefined。而使用Vue.delete方法删除数组元素时，数组的长度减少了一项，并且触发了相应的更新操作
#### 动态给vue的data添加一个新的属性时会发生什么？怎样解决？
页面不会更新，Vue不允许在已经创建的实例上动态添加新的响应式属性
若想实现数据与视图同步更新，可采取下面三种解决方案：
Vue.set()
Object.assign()
$forcecUpdated()
#### 组件和插件有什么区别？
组件用于构建应用程序的特定部分，通常是一个可重用的UI元素，如按钮、导航栏等。
插件是用于添加全局或局部功能的库，可以包括路由、状态管理、自定义指令等。
组件通常包括模板、脚本和样式，以及特定的数据和方法。
插件是以包的形式引入的，它们不一定与UI相关，而是添加一些功能或能力到Vue应用程序中。
总的来说，Vue组件和插件都是Vue生态系统中的关键元素，但它们用于不同的目的和场景。
#### 说说你使用vue过程中遇到的问题（坑）有哪些，你是怎么解决的？
数据量大的表格很卡顿，Object.freeze()解决
#### 说说你对选项el,template,render的理解
当Vue选项对象中有render渲染函数时，Vue构造函数将直接使用渲染函数渲染DOM树，当选项对象中没有render渲染函数时，Vue构造函数首先通过将template模板编译生成渲染函数，然后再渲染DOM树，而当Vue选项对象中既没有render渲染函数，也没有template模板时，会通过el属性获取挂载元素的outerHTML来作为模板，并编译生成渲染函数。
换言之，在进行DOM树的渲染时，render渲染函数的优先级最高，template次之且需编译成渲染函数，而挂载点el属性对应的元素若存在，则在前两者均不存在时，其innerHTML才会用于编译与渲染。
#### vue实例挂载的过程是什么？
new Vue的时候调用会调用_init方法,定义 set、get、delete、watch 等方法定义on、off、emit、off等事件 定义 _update、forceUpdate 、destroy生命周期
调用$mount进行页面的挂载
挂载的时候主要是通过mountComponent方法
定义updateComponent更新函数
执行render生成虚拟DOM
_update将虚拟DOM生成真实DOM结构，并且渲染到页面中
#### vue在组件中引入插件的方法有哪些？
1. 全局引入：将插件在应用的入口文件中全局引入，使其在所有组件中可用。在main.js或类似的入口文件中使用Vue.use()方法引入插件。
```
// main.js
import Vue from 'vue';
import MyPlugin from 'my-plugin';
Vue.use(MyPlugin);
```
2. 局部引入:在需要使用插件的组件中进行局部引入。可以在组件的<script>块中使用import语句引入插件，然后在components选项或directives选项中使用。
3. 插件选项引入: 一些插件允许通过传递选项来进行引入和配置。可以在组件的选项中通过plugins属性来引入插件并进行配置
```
export default {
  plugins: [
    MyPlugin({
      // 插件配置选项
    })
  ]
};
```
#### 分别说说vue能监听到数组或对象变化的场景，还有哪些场景是监听不到的？无法监听时有什么解决方案？
1. 可以监听的场景
1.1 数组变化的场景：
当你使用数组的变异方法（如 push、pop、splice、shift 等）来修改数组时，Vue能够检测到数组的变化并更新视图。
示例：
this.items.push('new item'); // Vue能监听到数组变化
this.items.splice(0, 1); // Vue能监听到数组变化
1.2 对象属性变化的场景：
当你直接修改对象的属性或使用 Vue.set 或 this.$set 方法来添加新的响应式属性时，Vue能够检测到对象的属性变化并更新视图。
示例：
this.obj.message = 'new message'; // Vue能监听到对象属性变化
Vue.set(this.obj, 'newProp', 'new property'); // Vue能监听到对象属性变化
2. 无法监听的场景
2.1 直接修改数组索引或对象属性：
如果通过直接修改数组索引或对象属性的方式来进行变化，Vue无法自动检测到变化。
示例：
this.items[0] = 'modified item'; // Vue无法监听到数组变化
this.obj.name = 'modified name'; // Vue无法监听到对象属性变化
解决方案：
对于数组，应该使用变异方法（如 splice）来修改数组，或者使用 this.$set 来更新指定索引的值。
对于对象，应该使用 Vue.set 或 this.$set 来添加新的响应式属性，或者使用 Object.assign 或展开运算符（...）创建新的对象。
2.2 通过下标直接修改数组长度：
如果通过修改数组的 length 属性来改变数组的长度，Vue无法自动检测到变化。
示例：
this.items.length = 0; // Vue无法监听到数组变化
解决方案：
应该使用变异方法（如 splice）来修改数组，或者重新赋值一个新的数组来替换原来的数组。
总结来说，Vue能监听到数组或对象变化的主要场景是通过变异方法或特定的操作进行的修改。对于无法监听到的情况，可以使用特定的方法（如 this.$set、Vue.set）或采取其他策略来实现响应式更新。
#### 为什么data属性必须声明为返回一个初始数据对应的函数呢？
对象为引用类型，当重用组件时，由于数据对象都指向同一个data对象，当在一个组件中修改data时，其他重用的组件中的data会同时被修改；而使用返回对象的函数，由于每次返回的都是一个新对象（Object的实例），引用地址不同，则不会出现这个问题。
#### 怎么在watch监听开始之后立即被调用？
在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：
```
  let vm=new Vue({
        el:"#first",
        data:{msg:'liuneng'},
        watch:{
 
            msg:{
                handler (newMsg,oldMsg){
                    console.log(newMsg);
                },
                immediate:true
            }
        }
    })
```
#### watch怎么深度监听对象变化？
```
watch: {
    obj: {
      handler(newValue, oldValue) {
        console.log("obj 发生了变化");
      },
      deep: true,
      immediate: true,
    },
}
```
#### watch和计算属性有什么区别？
1. Computed 的响应是 deep 的响应，即在计算过程中用到的对象的属性发生变化，是可以被监听到的。
watch的响应默认是非deep的，deep: false默认。
immediate同理
```
computed: {
   fullName: function () {
      // this.name 的属性 firstName/lastName 变化时 fullName 会响应。
      return this.name.firstName + ' ' + this.name.lastName
   }
},
watch: {
   name: function () {
   // this.name 的属性 firstName/lastName 变化时不会触发。
   },
   deep: false, // 默认是false
}
```
2. watch支持异步设置数据, computed不支持异步计算数据。
3. watch不支持缓存，监听的数据改变，直接会触发会setter，computed支持
4. watch主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作，可以看作是 computed 和 methods 的结合体；
#### vue如何监听键盘事件？
1. 按键修饰符
在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：
```
<input v-on:keyup.enter="submit">
```
你可以直接将 KeyboardEvent.key 暴露的任意有效按键名转换为 kebab-case 来作为修饰符
```
<input v-on:keyup.page-down="onPageDown">
```
为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名：
- enter
- tab
- delete (捕获“删除”和“退格”键)
- esc
- space
- up
- down
- left
- right
  你还可以通过全局 config.keyCodes 对象自定义按键修饰符别名：
```
Vue.config.keyCodes.f1 = 112
``` 
2. 系统修饰键
可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。
- .ctrl
- .alt
- .shift
- .meta
```
<!-- 按下Alt + 释放C触发 -->
<input @keyup.alt.67="clear">
<!-- 按下Alt + 释放任意键触发 -->
<input @keyup.alt="other">
<!-- 按下Ctrl + enter时触发 -->
<input @keydown.ctrl.13="submit">
```
对于elementUI的input，我们需要在后面加上.native, 因为elementUI对input进行了封装，原生的事件不起作用
```
<input v-model="form.name" placeholder="昵称" @keyup.enter="submit">
<el-input v-model="form.name" placeholder="昵称" @keyup.enter.native="submit"></el-input>
```
3. .exact修饰符
   .exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。
```
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button v-on:click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button v-on:click.exact="onClick">A</button>
```   
4. 鼠标按钮修饰符
   .left
   .right
   .middle
   这些修饰符会限制处理函数仅响应特定的鼠标按钮
5. 如果我们要监听全局的按键操作方法，显然，将其绑定在页面元素上是不行的。
```
mounted() {
    document.onkeydown = function (event) {
        let key = window.event.keyCode;
        if (key === 65 && event.ctrlKey) { 
            // 监听ctrl+A组合键            
            window.event.preventDefault(); //关闭浏览器默认快捷键            
            console.log('crtl+ a组合键')        
        } else if(key === 83 && event.ctrlKey) {             
            window.event.preventDefault(); //关闭浏览器快捷键
            console.log('保存');
        }
    }
}
```
shift、Control、Alt 在JS中也可用“window.event.shiftKey”、“window.event.ctrlKey”、“window.event.altKey” 代替。
#### 怎么在vue中使用插件？
它的主要作用是“增强vue”,能够完成更加强大的功能，可以用于：实现全局过滤器、实现自定义指令、定义混入、添加全局方法……；
1. 自定义插件
创建插件:
```
export default {
    install(Vue) {
        // 1、全局过滤器
        Vue.filter('mySlice', function (value) { //只要字符串的前四位
            return value.slice(0, 4);
        })
        // 2、自定义指令,定义全局指令
        Vue.directive('fbind', { //1、全局自定义指令的方法
            bind(element, binding) {
                element.value = binding.value;
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在的模板被重新解析时候
            update(element, binding) {
                element.value = binding.value;
            }
        })
        // 3、定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })
        // 4、添加全局方法
        Vue.prototype.alert = function () {
            alert('hello world')
        }
    }
}
```
引入插件:
import plugins from './plugins'
使用插件:
Vue.use(plugins)
2. 使用封装好的插件
1、安装插件
通过：npm install xxx;//在控制台安装插件；
2、引入
通过：import xxx from "xxx"
3、使用插件
通过：Vue.use(xxx)
#### 你知道vue2.0兼容IE哪个版本以上吗？
在Vue2.0中完全兼容IE10以上,部分兼容IE9,不支持IE8及一下版本,因为Vue的响应式原理是基于es5的Object.defineProperty的，而这个方法不支持ie8及以下的
#### 你有写过自定义指令吗？自定义指令的生命周期（钩子函数）有哪些？
bind：在指令绑定到元素时调用，只调用一次。
inserted：在被绑定元素插入到父节点时调用。
update：在组件更新时调用，可能会触发多次。
componentUpdated：在组件及其子组件更新完成后调用。
unbind：在指令从元素上解绑时调用。
#### 你有使用做过vue与原生app交互吗？说说vue与ap交互的方法
我的做法就是让app在webview把app的方法暴露在window上让前端调用、反之app调用前端的方法也需要前端把方法暴露在window上(window.xxx = 方法或值 ),
页面销毁的时候移除方法(delete window.xxx)
#### 使用vue写一个tab切换
```
<div id="App">
    <ul class="tab-tit">
        <li v-for="(title,index) in tabTitle" @click="cur=index" :class="{active:cur==index}">{{title}}</li>
    </ul>
    <div class="tab-content">
        <div v-for="(m,index) in tabMain" v-show="cur==index">{{m}}</div>
    </div>
</div>
 <script type="text/javascript">
     window.onload = function(){
        var app = new Vue({
         el:'#app',
         data:{
             tabTitle: ['标题一', '标题二', '标题三', '标题四'],
             tabMain: ['内容一', '内容二', '内容三', '内容四'],
             cur: 0 //默认选中第一个tab
         }
     })
 }
 </script>
```
#### vue中什么是递归组件？举个例子说明下？
Tree、Menu这类组件中会被用到。
```
<template>
  <li>
    <div> {{ model.name }}</div>
    <ul v-show="isOpen" v-if="isFolder">
      <!-- 注意这里：组件递归渲染了它自己 -->
      <TreeItem
        class="item"
        v-for="model in model.children"
        :model="model">
      </TreeItem>
    </ul>
  </li>
<script>
export default {
  name: 'TreeItem',
  // ...
}
```
如果某个组件通过组件名称引用它自己，这种情况就是递归组件。
实际开发中类似Tree、Menu这类组件，它们的节点往往包含子节点，子节点结构和父节点往往是相同的。这类组件的数据往往也是树形结构，这种都是使用递归组件的典型场景。
使用递归组件时，由于我们并未也不能在组件内部导入它自己，所以设置组件name属性，用来查找组件定义，如果使用SFC，则可以通过SFC文件名推断。组件内部通常也要有递归结束条件，比如model.children这样的判断。
查看生成渲染函数可知，递归组件查找时会传递一个布尔值给resolveComponent，这样实际获取的组件就是当前组件本身。
#### 说说你对Object.defineProperty的理解
```
Object.defineProperty(obj, 'propertyName', {
    value: xxx,
    writable: true, // 默认是可写的
    configurable: false, // 默认是不可配置的，删除或更改任何属性都会失败
    enumerable: false, //  默认是不可枚举的，for...in 遍历不到
  get() {},
  set(newVal) {}
})
```
Object.defineProperty 定义一个对象的属性，三个参数都必填，第三个参数是属性描述符对象
经过Object.defineProperty()定义的属性，再次调用Object.defineProperty()定义相同的属性，会报错 Uncaught TypeError: Cannot redefine property
而且你通过.key修改属性值，也无法修改。因为Object.defineProperty()定义的属性是不可修改的。
但是，一开始就存在的属性，可以通过.key或Object.defineProperty()重复修改
ES5有两种属性，数据属性和访问器属性
数据属性有4个属性描述符来描述它：
Configurable 是否可配置（能否删除，能否修改属性的描述符），能否改成访问器属性，默认为true
Enumerable 是否可枚举，默认为true
writable 默认为false，只有true时，value才能被赋值语句修改
Value 该属性的属性值，默认为undefined
访问器属性
访问器属性不包含数据值，包含getter和setter函数（不是必须，默认为undefined）
当一个属性设置了 get 和 set，它就是一个访问器属性
getter在读取访问器属性时被触发，setter在修改访问器属性时被触发
访问器属性只能通过Object.defineProperty()来定义
#### vue边界情况有哪些？
异步更新问题：在 Vue 的更新过程中，数据更新是异步执行的。这意味着在修改数据后，DOM 并不会立即更新，而是在下一个事件循环中进行更新。这可能导致在修改数据后立即访问 DOM 或计算属性时，获取到的还是旧的数据。为了解决这个问题，可以使用 $nextTick 方法或侦听器来获取更新后的 DOM 或计算属性值。
数组变动检测问题：Vue 可以检测到数组变动的方法包括 push()、pop()、shift()、unshift()、splice() 和 sort()。然而，当直接通过索引修改数组元素或使用 length 属性时，Vue 无法检测到变动。为了解决这个问题，可以使用 Vue.set 或 this.$set 方法来修改数组元素，或者使用 splice() 方法来删除或添加元素。
对象属性添加问题：当给一个已经创建的 Vue 实例添加新的属性时，新属性不会触发响应式更新。这是因为 Vue 在创建实例时会将数据进行响应式转换，后续添加的属性并没有进行相同的转换。为了让新属性也具有响应式能力，可以使用 Vue.set 或 this.$set 方法。
动态属性问题：在模板中使用动态属性时，Vue 会对属性表达式进行求值。然而，某些表达式可能无法在模板编译阶段进行求值，例如使用非响应式的数据或在计算属性中使用的动态属性。为了解决这个问题，可以使用计算属性或方法来处理动态属性。
异步组件渲染问题：当使用异步组件时，可能会出现组件在渲染之前被访问的情况。这可能导致组件状态尚未准备好，或者组件还未加载完成。为了解决这个问题，可以使用异步组件的 v-if 或 v-show 来确保组件在渲染之前已经加载完成。
#### 说说你对MVC、MVP、MVVM模式的理解
MVC
前端的MVC 与后端类似，具备着 View、Controller 和 Model。
Model：负责保存应用数据，与后端数据进行同步。
Controller：负责业务逻辑，根据用户行为对 Model 数据进行修改。
View：负责视图展示，将 Model 中的数据可视化出来。
MVP
MVP与MVC很接近，P指的是Presenter，presenter可以理解为一个中间人，
它负责着View和Model之 间的数据流动，防止View和Model之间直接交流。
presenter 负责和 Model 进行双向交互，还和 View 进行双向交互。这种交互方式，相对于 MVC 来说少了一些灵活，VIew 变成了被动视图，并且本身变得很小。
虽然它分离了View和Model。但是应用逐渐变大之后，导致presenter的体积增大，难以维护。要解决这个问题，或许可以从 MVVM 的思想中找到答案。
MVVM
MVVM 可以分解成(Model-View-VIewModel)。ViewModel 可以理解为在 presenter基础上的进阶版。
ViewModel 通过实现一套数据响应式机制自动响应Model中数据变化；
同时 ViewModel 会实现一套更新策略自动将数据变化转换为视图更新；
通过事件监听响应View中用户交互修改 Model 中数据。
这样在 ViewModel 中就减少了大量DOM操作代码。
MVVM 在保持 View 和 Model 松耦合的同时，还减少了维护它们关系的代码，使用户专注于业务逻辑，兼顾开发效率和可维护性。
#### 说下你对指令的理解？
在Vue中，指令（Directives）是一种特殊的属性，用于给HTML元素赋予特定的行为或功能。指令以v-作为前缀，通过在元素上添加指令来达到特定的效果。
Vue提供了一些内置指令，同时也允许开发者自定义指令来满足特定的需求。
1. 操作dom
这类指令用于操作HTML DOM元素，改变元素的样式、属性、内容等。
v-bind：用于动态地绑定元素的属性或组件的属性。
v-model：用于在表单元素和组件之间实现双向数据绑定。
v-show：根据表达式的值决定元素是否显示。
v-if/v-else/v-else-if：根据条件决定是否渲染元素。
v-for：用于循环渲染元素列表。
2. 响应式交互
这类指令用于处理用户交互，响应用户的输入或操作。
v-on（简写为@）：用于监听DOM事件，执行相应的方法或表达式。
v-click-outside：在点击元素之外的区域时触发相应的方法。
v-debounce：延迟执行方法，避免频繁触发。
除了这些内置指令，开发者还可以通过自定义指令来扩展Vue的功能。自定义指令可以用于封装特定的DOM操作、实现可复用的行为或功能，以及与第三方库的集成等。
指令的使用方式通常是在元素上使用v-前缀，后面跟上指令名称和相应的参数。指令还可以带有修饰符，用于改变指令的行为。例如，v-on:click表示在点击事件上触发指定的方法，v-bind:title表示将元素的title属性绑定到指定的数据。
通过使用指令，开发者可以更方便地操作DOM、实现交互功能和处理数据绑定，使得Vue应用的开发变得更加灵活和高效。
#### 怎么给vue定义全局的方法？
1. 将方法挂载到 Vue.prototype 上面
```
// 在项目入口的 main.js 里配置
import Vue from 'vue'
// 重置 message 防止重复点击重复弹出message弹框
import { message as Message } from "./resetMessage"
Vue.prototype.$message = Message
// 挂载之后，使用 this.$message 就可以调用
export default {
    mounted() {
        this.$message.success('操作成功')
    }
}
```
2. 利用全局混入 mixin
```
// mixin.js
export default {
    data() {
        
    },
    methods: {
        randomString(encode = 36, number = -8) {
            return Math.random() // 生成随机数字, 0.123456
                .toString(encode) // 转化成36进制, "0.4fzyo82mvyr"
                .slice(number) // 截取为 "yo82mvyr"
        }
    }
}
// 在项目入口 main.js 里配置
import Vue from 'vue'
import mixin from '@/mixin'
Vue.mixin(mixin)
// 在组件中使用
export default {
    mounted() {
        this.randomString()
    }
}
```
3. 使用Plugin方式
   Vue.use的实现没有挂载的功能，只是触发了插件的install方法，本质还是使用了Vue.prototype。
```
// plugin.js
import { message as Message } from "./resetMessage"

// install 是默认的方法。
// 当外界在 use 这个组件或函数的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
const install = Vue {
    Vue.prototype.$message = Message
    ...
}
export default {
    install
}
// 在项目入口 main.js 里配置
import Vue from 'vue'
import plugin from '@/plugin'
Vue.use(plugin);
// 在组件中使用
export default {
    mounted() {
        this.$message.success('操作成功')
    }
}
```  
4. vue 组件中写全局函数
```
// 创建全局方法
this.$root.$on("fn", function () {
  // ...
});
// 销毁全局方法
this.$root.$off("fn");
// 调用全局方法
this.$root.$emit("fn");
```
#### 你有使用过vue开发多语言项目吗？说说你的做法？
// 1. 安装vue语言包插件npm i vue-i18n
// 2. 创建中文语言包对象
// 3. 创建英文语言包对象
// 4. 组合语言包对象
// 5. 创建 VueI18n 实例，并为 messages 和 locale 属性赋值
// 6. 挂载 i18n
```
import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// 1、创建中文语言包对象
const zh = {
  username: '用户名',
  email: '邮箱',
  mobile: '手机'
}
// 2、创建英文语言包对象
const en = {
  username: 'Username',
  email: 'Email',
  mobile: 'Mobile'
}
// 3、组合语言包对象
const messages = {
  zh,
  en
}
// 4、创建 VueI18n 实例，并为 messages 和 locale 属性赋值
const i18n = new VueI18n({
  messages,
  locale: 'en'
})
Vue.config.productionTip = false
// 5、挂载 i18n
new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
```
通过 navigator.language 方法可以获取浏览器当前使用的语言，基本就代表了用户所使用的语言
// 获取浏览器当前使用的语言，并进行处理
```
const i18n = new VueI18n({
   messages,
   locale: navigator.language // 获取浏览器的语言
})
```
组件中加入语言切换按钮
```
<button @click="translate('zh')">切换为中文</button>
<button @click="translate('en')">切换为英文</button>
methods: {
   translate(lang) {
   this.$i18n.locale = lang
   },
},
```
#### vue2.0不再支持v-html中使用过滤器了怎么办？
在method中定义方法
```
htmlFilter(htmlString){
   return htmlString.replace(/+s/g,’’)
}
```
在vue中 v-html="htmlFilter(htmlString)"即可
#### 怎么解决vue打包后静态资源图片失效的问题？
1、确定线上环境是否在根路径上，配置资源根目录，vue-cli2 和 vue-cli3 字段不一致（assetsPublicPath 和 publicPath ），如果项目是根路径上，用'/'，'./'都行，如果是在'/hc'这个路径上，用'./' 相对路径（需history模式），也可以用'/hc/'。 在'/hc'路径上，如果需要本地和线上保持一致，可以用环境做判断设置不同的publicPath值。
2、确定静态文件放置的位置。
①、如果放在public/static，不经过webpack打包， 放在public 又分使用绝对路径和相对路径。
②、如果放在assets， 经过webpack打包， 使用的是相对路径
3、路径是否是动态的，如果是动态，需要用require() 引入。
assets和static的区别(vue推荐使用功能assets)
相同点：
assets和static两个都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，
样式文件等都可以放在这两个文件下，这是相同点
不相同点：
assets中存放的静态资源文件在项目打包时，也就是运行npm run build时会将assets中放置的静态资源文件进行打包上传，所谓打包简单点可以理解为压缩体积，代码格式化。
而压缩后的静态资源文件最终也都会放置在static文件中跟着index.html一同上传至服务器。
static中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。
因为避免了压缩直接进行上传，在打包时会提高一定的效率，但是static中的资源文件由于没有进行压缩等操作，
所以文件的体积也就相对于assets中打包后的文件提交较大点。在服务器中就会占据更大的空间。
建议：
将项目中template需要的样式文件js文件等都可以放置在assets中，走打包这一流程。减少体积。
而项目中引入的第三方的资源文件如iconfoont.css等文件可以放置在static中，
因为这些引入的第三方文件已经经过处理，我们不再需要处理，直接上传。
#### 怎么解决vue动态设置img的src不生效的问题？
src被当做静态资源处理了，并没有进行编译。
为了解决动态的src没有进行编译的问题，我们可以使用require引入图片。
require是在运行时加载，而import是编译时加载；
如果希望使用import引入图片就需要提前导入图片。
#### 使用vue后怎么针对搜索引擎做SEO优化？
1. SSR 服务器渲染
   Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将他们直接发送到浏览器，最后将这些静态标记“激活”为客户端上完全可交互的应用程序。
   服务器渲染的 Vue.js 应用程序也可以被认为是“同构”或“通用”，因为应用程序的大部分代码都可以在服务器和客户端上运行。
   权衡之处：
   开发条件所限，浏览器特定的代码，只能在某些生命周期钩子函数（lifecyle hook）中使用；一些外部扩展库（external library）可能需要特殊处理，才能在服务器渲染应用程序中运行。
   环境和部署要求更高，需要 Node.js server 运行环境。
   高流量的情况下，请准备相应的服务器负载，并明智的采用缓存策略。
   优势：
   更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。
   更快的内容到达时间（time-to-content），特别是对于换忙的网络情况或运行缓慢的设备。
   不足：
   一套代码两套执行环境，会引起各种问题，比如服务端没有 window、document 对象，处理方式是增加判断，如果是客户端才执行。
   引用 npm 包，带有 dom 操作的，例如：wowjs，不能用 import 的方式。
   Nuxt asyncData 方法，初始化页面前先得到数据，但仅限于页面组件调用。
2. Nuxt 静态化
   Nuxt.js 框架，官方是这样介绍的，从头搭建一个服务端渲染的应用是相当复杂的，幸运的是，我们有一个优秀的社区项目 Nuxt.js 让这一切变得非常简单。Nuxt 是一个基于 Vue 生态的更高层的框架，为开发服务端渲染的 Vue 应用提供了极其便利的开发体验。更酷的是，你甚至可以用它来作为静态站点生成器。
   静态化是 Nuxt.js 打包的另一种方式，算是 Nuxt.js 的一个创新点，页面加载速度很快。
   在 Nuxt.js 执行 generate 静态化打包时，动态路由会被忽略。
   如果你的动态路由参数很多，例如商品详情，可能高达几千几万个。需要一个接口返回所有 id，然后打包时遍历 id，打包到本地，如果某个商品修改了或者下架了，又要重新打包，数量多的情况下打包也是非常慢的，非常不现实。
   优势：
   纯静态文件，访问速度超快。
   对比 SSR，不涉及到服务器负载方面问题。
   静态网页不宜遭到黑客攻击，安全性更高。
   不足：
   如果动态路由参数多的话不适用。
3. 预渲染 prerender-spa-plugin
   如果你只是用来改善少数营销页面（例如 /about，/contact等）的 SEO，那么你可能需要预渲染。无需使用 web 服务器实时动态编译 HTML，而是使用预渲染方式，在构建时（build time）简单的生成针对特定路由的静态 HTML 文件。优点是设置预渲染更简单，并可以将你的前端作为一个完全静态的站点。
   优势：
   改动小，引入插件配置即可
   不足：
   无法使用动态路由
   只适用少量页面的项目，页面多达几百个的情况下，打包回非常慢。
4. 使用 Phantomjs 针对爬虫做处理
   Phantomjs 是一个基于 webkit 内核的无头浏览器，即没有 UI 界面，只是其内的点击、翻页等人为相关操作需要程序设计实现。
   虽然“Phantomjs 宣布终止开发”，但是已经满足对 Vue 的 SEO 处理。
   这种解决方案其实是一种旁路机制，原理就是通过 Nginx 配置，判断访问的来源 UA 是否是爬虫访问，如果是则将搜索引擎的爬虫请求转发到一个 node serve，在通过 Phantomjs 来解析完整的 HTML，返回给爬虫。
   优势：
   完全不用改动项目代码，按原本的 SPA 开发即可，对比开发 SSR 成本小不要太多。
   对已用 SPA 开发完成的项目，可以直接使用。
   不足：
   部署需要 node 服务器支持。
   爬虫访问比网页访问要慢一些，因为要定时资源加载完成才返回给爬虫。
   如果被恶意模拟百度爬虫大量循环爬取，会造成服务器负载方面问题，解决办法是判断访问的 IP，是否是百度官方爬虫的 IP。
总结
如果构建大型网站，如商场类，别犹豫，直接上 SSR 服务器渲染，当然也有相应的坑等你，不过社区比较成熟，英文过关，一切问题都可以解决。
如果只是个人博客、公司官网的项目，其余三种都可以。
如果对已用 SPA 开发完成的项目进行 SEO 优化，而且支持 node 服务器，请使用 Phantomjs。
#### 使用vue开发一个todo小应用，谈下你的思路
结构: 输入部分( input )和输出部分( ul )
逻辑:用户输入之后,通过事件触发拿到用户输入的数据存起来,
将用户数据集合通过 v-for 渲染到页面上
当用户点击清单项,通过事件触发移出对应事件
#### 你有看过vue推荐的风格指南吗？列举出你知道的几条
1. 优先级A的规则：必要的 （规避错误）
组件名为多个单词
组件数据：组件的 data 必须是一个函数。
细致的 Prop 定义
总是用 :key 配合 v-for
避免 v-if 和 v-for 用在一起
为组件样式设置作用域
私有属性名：自定义私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)。
2. 优先级B的规则：强烈推荐 （增强可读性）
组件文件：只要有能够拼接文件的构建系统，就把每个组件单独分成文件。
单文件组件文件的大小写：要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。
基础组件名：应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。
单例组件名：只拥有单个活跃实例（每个页面只使用一次）的组件应该以 The 前缀命名，以示其唯一性。
紧密耦合的组件名：和父组件紧密耦合的子组件应该以父组件名作为前缀命名。
组件名中的单词顺序：组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。
自闭合组件：在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。
模版中的组件名大小写：在单文件组件和字符串模板中组件名应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的。
JS / JSX 中的组件名大小写：JS/JSX 中的组件名应该始终是 PascalCase 的，在较为简单的应用中只使用 Vue.component 进行全局组件注册时，可以使用 kebab-case 字符串。
完整单词的组件名
Prop 名大小写：在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。
多个特性的元素：多个特性的元素应该分多行撰写，每个特性一行。
模板中简单的表达式：组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。
简单的计算属性
带引号的特性值：非空 HTML 特性值应该始终带引号 (单引号或双引号，选你 JS 里不用的那个)。
指令缩写：指令缩写 (用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:) 应该要么都用要么都不用。
3. 优先级C的规则：推荐 （将选择和认知成本最小化）
组件 / 实例的选项的顺序
元素特性的顺序
组件 / 实例选项中的空行：在多个属性之间增加一个空行，特别是在这些选项一屏放不下，需要滚动才能都看到的时候。
单文件组件的顶级元素的顺序：总是让 <script>、<template> 和 <style> 标签的顺序保持一致。且 <style> 要放在最后，因为另外两个标签至少要有一个。
4. 优先级D的规则：谨慎使用 （有潜在危险的模式）
没有在 v-if / v-else-if / v-else 中使用 key
元素选择器应该避免在 scoped 中出现。
隐性的父子组件通信：应该优先通过 prop 和事件进行父子组件之间的通信，而不是 this.$parent 或改变 prop。
非 Flux 的全局状态管理：应该优先通过 Vuex 管理全局状态，而不是通过 this.$root 或一个全局事件总线。
#### 说说组件的命名规范
组件名：大驼峰
调用组件时：小驼峰且-分隔
如：命名：MyComponent，调用：my-component
#### vue性能的优化的方法有哪些？
1. 路由懒加载:我们知道 Vue 是单页应用，所以如果没有用懒加载，就会导致进入首页时需要加载的内容过多，时间过长，就会出现长时间的白屏，很不利于用户体验，SEO 也不友好
```
{
   path: '/home',
   component: () => import('@/components/Home') }
```
2. v-for
   在v-for遍历的同时使用key，key是唯一的字符串或者数字，尽量不要使用index。 v-for遍历的时候不要不要使用v-if
3. 图片懒加载
   图片懒加载就是对于有很多图片的页面，为了提高页面加载速度，只加载可视区域内的图片，可视区域外的等到滚动到可视区域后再去加载 可以使用vue-lazyload 或者自己封装自定义指令
4. 组件库或者其他库按需加载
   ui组件库可以在组件使用时按需加载具体的标签。 比如lodash库在使用时可以按需加载具体的一个方法
5. keepalive缓存
   比如在表单输入页面进入下一步后，再返回上一步到表单页时要保留表单输入的内容、比如在列表页>详情页>列表页，这样来回跳转的场景等
   我们都可以通过内置组件<keep-alive></keep-alive>来把组件缓存起来，在组件切换的时候不进行卸载，这样当再次返回的时候，就能从缓存中快速渲染，而不是重新渲染，以节省性能
6. 避免所有数据都是响应式数据
   有些数据固定时，就不做响应式处理， vue2.Object.freeze() 冻结一个对象 vue3 不用ref或者reactive包裹
7. 事件销毁
   vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件
   而对于定时器、addEventListener 注册的监听器等，就需要在组件销毁的生命周期钩子中手动销毁或解绑，以避免内存泄露
8. 函数时组件
   对于一些纯展示，没有响应式数据，没有状态管理，也不用生命周期钩子函数的组件，我们就可以设置成函数式组件，提高渲染性能，因为会把它当成一个函数来处理，所以开销很低
   原理是在patch过程中对于函数式组件的render生成的虚拟 DOM，不会有递归子组件初始化的过程，所以渲染开销会低很多
9. 公共代码提取
   对于公共的函数，或者数据可以提取到外部的js文件，在需要的地方的引用，提高了可维护性，和代码的可读性。 vue还可以使用mixin
10. computed缓存利用
    计算属性是由缓存的，可以利用计算缓存的属性，当依赖不变时，就不会重新计算结果值。
11. 合理利用v-if，v-for   
    v-if渲染只会渲染1-2次的dom。不要添加到回多次渲染的目标，然会重复的移除添加dom浪费新能， 多次渲染的使用v-show 只用改变css属性就行
12. webpack 里有个 externals，可以忽略不需要打包的库，
```
externals: {
'vue': 'Vue',
'vue-router': 'VueRouter',
'vuex': 'Vuex',
'axios': 'axios'
}
```
#### 从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织
1. 前端的项目目前来看主要分为小程序开发，H5页面开发、PC官网、后台管理系统开发、Native开发。不同的项目所涉及的知识点和环境不太一样，但是很多方面是相通的。
小程序:由于框架限定在Vue，所以这里指的是使用mpvue、WePY来开发小程序项目。
H5页面:这里主要是指微信页面、Webview中的H5页面开发
PC官网:为什么单独划出来是因为官方的开发主要是用来展示企业信息、产品，对交互、体验有一定的要求，会有一些炫酷的动画效果。还有就是官网有可能需要采用SSR（比如Vue的Nuxt.js）来做，来确定良好的SEO。
后台管理系统:后台管理系统主要功能在于数据的配置、权限的控制、数据报表的展示、日志功能等。通常又叫CMS，OA。
Native开发:这个通常就是指用前端技术去开PC应用、APP应用，比如Weex, Electron。
通吃型:比如uni-app， 可以一套代码编译成不同的平台源码。 不同的项目类型决定了其能够使用的生态、目录结构、特定的上下文。这里就以后台管理系统为例来说一下如何基于Vue来搭建一个项目。
2. 基于@vue/cli的选型
   2.1 后台管理系统中vue-router，vuex都是必选的，其它可以自行考虑
   2.2 ES6/7 or Typescript ?
   鉴于目前Typescript如此流行，很多流行的框架和库都采用其来写，IDE友好的智能提示、强类型结束等，在立项时是否考虑采用Typescript来写Vue项目。如果采用Typescript，是不是很羡慕Angular中的DI注入，那可以考虑在大型项目中引入inversify这个库；在开发过程中遇到一些库没有声明文件要学会定义声明文件，这个是Typescript初学者最头疼的问题。
   还有一个问题是团队中有多少人会Typescript，项目周期紧不紧，有没有时间来试错，踩坑。
   2.3 Sass/Less/Stylus/PostCss ?
   由于Vue项目开发本身样式自带scope，所以不需要像React那样去选css-in-js框架（目前在React最流行的是styled-components），但是如果我们在Vue中采用JSX的方式来定义组件，是否考虑引入vue-styled-components这个库（年久失修，完全脱节React版了，但依然是Vue中最好的选择）。在Vue中sass, less, stylus可以在<style>标签中通过lang=""来指定，如果你想使用PostCss也可以的，就是要自己花点时间去折腾一下。
   2.4 关于代码规范和风格
   这个主要的选择就是Prettier 和 Airbnb风格，如果配置不好，在IDE中满屏的红色波浪线和黄色的小灯光提示。
   在配置eslint或者tslint时主要考虑的点是是否要写分号，未定义变量等问题。
   2.5 关于测试
很多时间前端项目测试反而拖慢了项目的开发进度，但是在开源项目中良好的测试是保证项目质量的一个很重要方式。这里通常分为单元测试(Unit Testing)和端到端测试(E2E Testing),一般选择jest
3. 通用配置
   3.1 编辑器配置：.editorconfig这里最重要的是缩进方式，及Tab大小，建议2个空格作用缩进。
   3.2 Git忽略文件配置: .gitignore这里的配置决定了哪些文件会被版本控制所忽略
   3.3 Eslint配置: .eslintrc.js，.eslintignore
   3.4 PostCss配置: postcss.config.js这个文件自动生成，里面的内容就是指定autoprefixer兼容配置
   3.5 Babel配置: babel.config.js主要是配置Babel的plugins、presets和parse等
   3.6 StyleLint：.stylelintrc如果代码对样式有一定的规范的话，可以加一个，没有就不需要配置这个。
```
   {
      "extends": "stylelint-config-standard",
      "plugins": ["stylelint-scss"]
   }
```
   3.7 @vue/cli配置：vue.config.js，在这个里面我们可以对@vue/cli的Webpack进行配置和覆盖。
   3.8 Webpack配置：webpack.config.js因为在webpack中不能识别@vue/cli中的@路径，所以需要一个配置文件让webapck提示正常。具体怎么配置可以自行搜索
4. 版本控制：不管是多人协作开发还个一个人开发在使用git时都需要一套流程规范来执行。
   4.1 Git Flow
   这个每个团队的做法不太一样，有的采用多分支开发，有的采用单一master分支开发，有的还采用submodule的方式，有的在项目中使用了lerna来做多packages，甚至有的公司一个分支一个项目。
   在开发环境的区分上通常分为生产（线上）环境、预发布环境、开发环境，有的还有什么沙盒环境，很多做得好的公司基于Docker前后端都可以根据每一个commit来发布。
   有时候不想把有些代码提交上去，除了选择性提交单个文件外，还有使用git的stash功能，此外如果使用Webstorm可还可以使用其提供的Changelist来缓存修改，切换分支。
   4.2 Git Commit
   项目提交的描述如果没有一定的规范，随性而为的话，就会让其它人误解。通常提交采用英文作为描述，可以多行文字。在社区中有很多流行的方案(比如Conventional Commit)，更多的是采用Angular的方式。
   4.3 Change Log
   如果采用了社区统一的commit方式，那么我们就可以基于提交来生成变更记录，在每一次版本发布时自动关联Jira中的Issue。
   4.4 版本号生成
   这个通常是按照Semantic Versioning的规范来打tag，具休怎么做可以自行尝试
   在项目中通常使用gitHooks和husky这二个node包来配置上面提到的这些。在git钩子中我们在每次提交、push前跑一次单元测试、代码覆盖率。前端代码覆盖率一般来说没有必要加，不然很痛苦。
5. 项目文档和组件测试文档  
   除了在项目根目录放一个README.MD文件外，通常还需要一些比如CHANGELOG.md, PLAD.md等文档，还有一些组件的使用文档，可以考虑使用styleguide和storybook。
6. 持续集成和部署  
   目前开源项目通常采用Travis，而一般公司内部项目通常采用Jenkins来做持续集成，在部署上通常采用Docker，集群上使用KubeOperator来管理。或者github action
7. API请求方式
   通常采用Restfull的方式来请求数据，也可以采用GraphQL的方式来请求。如果采用Restfull的方式通常可以使用axios, fetch api。GraphQL可以使用Apollo Client。
8. 代理和数据Mock
   SPA页面开发通常都是配置代码来调用后端的接口数据，怎么配置可以参考@vue/cli文档。数据Mock主要用到一个mockjs
9. 项目用到的库
UI框架: Element, iView, vue-strap等,注：UI风格目前有Bookstrap、Antd和Google Materials三种风格，在项目搭建时这也是一个很重要的技术选型。
日期: moment, dayjs
URL解析: query-string, path-to-reqexp
实用方法: lodash
Cookie: js-cookie
混淆ID: hashids
图表: echarts
Ajax: axios, isomorphic-fetch, vue-apollo
拖拽: Vue.Draggable
Meta修改: vue-meta
10. 项目目录划分
    视图页面放在 pags或者views中
    静态文件放在static中
    资源文件放在assets中
    样式文件放在styles中
    辅助库放在utils中
    配置文件可以放在config或者constants中
    vuex的文件放在stores中，至于getters, actions, mutation, modules可以参考vuex的文档
    路由文件放在routes中
    所有组件放在components中
    共享代码也可以使用shared作为目录
    布局组件可以放在layouts目录中
11. 权限配置   
    主要分为页面权限（路由）、功能权限，采用多级角色划分方式。菜单配置数据直接通过接口返回
#### 你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解
Vue.js 使用的模板语法是基于自身实现的模板引擎，称为 Vue 模板编译器。
Vue 模板编译器是 Vue.js 的一部分，它负责将 Vue 模板转换为渲染函数。在运行时，Vue 模板编译器会将模板中的指令、表达式和文本等转换为对应的 JavaScript 代码，然后通过执行这些代码来生成最终的渲染结果。这种方式使得开发者可以使用类似 HTML 的模板语法来描述组件的结构和数据绑定，使代码更易读、易维护。
Vue 模板编译器支持以下特性：
插值表达式：使用双大括号 {{}} 进行文本插值。
指令：例如 v-bind、v-if、v-for 等，用于动态绑定属性、条件渲染和循环渲染等。
过滤器：通过管道符 | 对数据进行处理和格式化。
事件绑定：通过 v-on 指令来绑定 DOM 事件。
计算属性和监听器：通过 computed 和 watch 来实现对数据的监听和计算。
Vue 模板编译器在编译过程中会对模板进行静态分析，提取出模板中的静态内容，并生成可复用的渲染函数，从而提高运行时的性能。
需要注意的是，Vue 3.x 中的模板编译器和 Vue 2.x 中稍有不同，Vue 3.x 使用了基于 Proxy 的响应式系统和编译优化，以提供更好的性能和开发体验。
总的来说，Vue 模板编译器是 Vue.js 框架强大的一部分，它通过将模板转换为可执行的 JavaScript 代码，实现了数据绑定、指令和事件等功能，使得开发者能够更方便地构建交互式的用户界面。
#### 你知道vue中key的原理吗？说说你对它的理解
当我们在使用v-for时，需要给单元加上key
如果不用key，Vue会采用就地复地原则：最小化element的移动，并且会尝试尽最大程度在同适当的地方对相同类型的element，做patch或者reuse。
如果使用了key，Vue会根据keys的顺序记录element，曾经拥有了key的element如果不再出现的话，会被直接remove或者destoryed
用+new Date()生成的时间戳作为key，手动强制触发重新渲染
当拥有新值的rerender作为key时，拥有了新key的Comp出现了，那么旧key Comp会被移除，新key Comp触发渲染
#### 怎么配置使vue2.0+支持TypeScript写法？
配置ts-loader，tsconfig
增加类型扩展，让ts识别vue文件
vue文件中script里面换成ts写法， 需要增加几个ts扩展的package， 比如vue-property-decorator
#### vue首页白屏是什么问题引起的？如何解决呢？
VUE首页加载过慢，其原因是因为它是一个单页应用，需要将所有需要的资源都下载到浏览器端并解析。
考虑解决办法
1.使用首屏SSR + 跳转SPA方式来优化
2.改单页应用为多页应用，需要修改webpack的entry
3.改成多页以后使用应该使用prefetch的就使用
4.处理加载的时间片，合理安排加载顺序，尽量不要有大面积空隙
5.CDN资源还是很重要的，最好分开，也能减少一些不必要的资源损耗
6.使用Quicklink，在网速好的时候 可以帮助你预加载页面资源
7.骨架屏这种的用户体验的东西一定要上，最好借助stream先将这部分输出给浏览器解析
8.合理使用web worker优化一些计算
9.缓存一定要使用，但是请注意合理使用
10.最后可以借助一些工具进行性能评测，重点调优，例如使用performance自己实现下等
#### 说说你对单向数据流和双向数据流的理解
单向数据流：所有状态的改变可记录、可跟踪，源头易追溯；所有数据只有一份，组件数据只有唯一的入口和出口，使得程序更直观更容易理解，有利于应用的可维护性；一旦数据变化，就去更新页面(data-页面)，但是没有(页面-data)；如果用户在页面上做了变动，那么就手动收集起来(双向是自动)，合并到原有的数据中。
双向数据流：无论数据改变，或是用户操作，都能带来互相的变动，自动更新。
#### 用vue怎么实现一个换肤的功能？
1. 样式替换法，当使用某一个主题时就将当前所有的样式进行覆盖
2. 自定义自己的Element-ui配色，定义好配色后应用自己的配色样式
3. 动态修改elementUi的sass颜色变量
4. 将官方提供的变量整理出几套通用的颜色主题，定义好变量，当切换时使用不同的变量组，如果切换可以将对应的主题存储到本地缓存，
5. 也可以将定义主题方式提供一个页面让用户自己选择，这种方式过于精细化了，感觉没必要。我们可以开放给管理员，让管理人员维护更多的主题。
#### 有在vue中使用过echarts吗？踩过哪些坑？如何解决的？
在切换tab时 第二个tab的图表无法正常显示 切换tab时使用方法@tab-click="handleClick"加载图表的render函数
#### vue部署上线前需要做哪些准备工作？
在将Vue项目部署到线上环境之前，需要进行以下准备工作：
优化项目： 对项目进行优化，包括代码压缩、资源合并、图片压缩等，以减小项目的文件体积，提升加载速度和用户体验。
配置打包环境： 确保项目的打包配置适合线上环境。通常会有不同的打包配置，如开发环境、测试环境和生产环境。在生产环境下，需要关闭调试工具、启用代码压缩、启用缓存等，以提高性能和安全性。
设置路由模式： 根据线上环境的需求，设置合适的路由模式。通常有hash模式和history模式可供选择。如果需要更美观的URL，可以使用history模式，但需要服务器配置来支持。
配置服务器： 部署Vue项目需要将静态资源（如HTML、CSS、JavaScript文件）部署到Web服务器上。确保服务器配置正确，并设置适当的缓存策略、Gzip压缩等，以提高页面加载速度。
处理路由问题： 如果使用了Vue Router进行路由管理，需要配置服务器以支持前端路由。对于history模式，需要配置服务器重定向所有路由请求到主页面。
处理API请求： 确保API请求的跨域问题得到解决。如果API请求涉及跨域，可以在服务器上进行反向代理设置或使用CORS策略来解决。
配置环境变量： 根据不同的环境，设置适当的环境变量，如后端API的URL、调试开关等。这样可以在不同环境下使用不同的配置。
测试和验证： 在部署到线上环境之前，进行充分的测试和验证。确保应用在线上环境中正常运行，并解决可能出现的问题。
备份项目： 在部署之前，备份项目的源代码和相关资源。这样可以在出现问题时快速恢复
#### 你了解什么是函数式组件吗？
函数式组件：
需要提供一个render方法， 接受一个参数（createElement函数）， 方法内根据业务逻辑，通过createElement创建vnodes，最后return vnodes
createElement函数， 三个参数， 第一个参数是html标签或自定义组件，第二个参数一个obj（包含props， on...等等）， 第三个参数children(通过createElement构建， 或者字符串)
#### 说说你对vue的mixin的理解，有什么应用场景？
Mixin是面向对象程序设计语言中的类，提供了方法的实现。其他类可以访问mixin类的方法而不必成为其子类
Mixin类通常作为功能模块使用，在需要该功能时“混入”，有利于代码复用又避免了多继承的复杂
使用混入有两种方式，全局混入与局部混入。
替换型策略有props、methods、inject、computed，就是将新的同名参数替代旧的参数
合并型策略是data, 通过set方法进行合并和重新赋值
队列型策略有生命周期函数和watch，原理是将函数存入一个数组，然后正序遍历依次执行
叠加型有component、directives、filters，通过原型链进行层层的叠加
#### 说说你对proxy的理解
Proxy其功能非常类似于设计模式中的代理模式，常用功能如下：
拦截和监视外部对对象的访问
降低函数或类的复杂度
在复杂操作前对操作进行校验或对所需资源进行管理
vue3就是使用这种方式进行的响应式实现
#### 你了解什么是高阶组件吗？可否举个例子说明下？
高阶组件（Higher-Order Component，HOC）是一种在Vue中常用的设计模式，用于复用组件逻辑和增强组件功能。它是一个函数，接受一个组件作为参数，并返回一个新的组件。
HOC的主要作用是封装和包装组件，通过将通用的逻辑提取到HOC中，可以使组件更加简洁、可维护和可复用
```
// 定义一个高阶组件
const withLogging = (WrappedComponent) => {
  return {
    created() {
      console.log(`Component '${WrappedComponent.name}' created.`);
    },
    destroyed() {
      console.log(`Component '${WrappedComponent.name}' destroyed.`);
    },
    render(h) {
      return h(WrappedComponent, this.$slots.default);
    },
  };
};

// 定义一个普通组件
const MyComponent = {
  template: `
    <div>
      <h1>Hello, World!</h1>
    </div>
  `,
};
// 使用高阶组件包装普通组件
const MyEnhancedComponent = withLogging(MyComponent);
// 在应用中使用增强后的组件
new Vue({
  render: (h) => h(MyEnhancedComponent),
}).$mount("#app");
```
#### 说说你对keep-alive的理解是什么？

### ---------axios---------
#### 你了解axios的原理吗？有看过它的源码吗？
#### 为何官方推荐使用axios而不用vue-resource？
1.vue-resources不再更新了，vue作者尤大推荐axios。
2.axios更加强大
3.axios就是一个基于ES6的Promise的网络请求库，其实说干净了就是一个打包好的XMLHttpRequests，也就是说，这个也是一个ajax库。
4.axios
在浏览器里建立XHR
通过nodejs进行http请求
转换或者拦截请求数据或响应数据
支持Promise的API
可以取消请求
自动转换JSON
可以防御XSRF攻击！
5.vue-resources只提供了浏览器版本
#### 你有封装过axios吗？主要是封装哪方面的？
1. 和 后端协商好一些约定，请求头，状态码，请求超时时间
2. 设置接口请求前缀：根据开发、测试、生产环境的不同，前缀需要加以区分
3. 请求头 : 来实现一些具体的业务，必须携带一些参数才可以请求(例如：会员业务)
4. 状态码: 根据接口返回的不同status ， 来执行不同的业务，这块需要和后端约定好
4. 请求方法：根据get、post等方法进行一个再次封装，使用起来更为方便
5. 请求拦截器: 根据请求的请求头设定，来决定哪些请求可以访问
6. 响应拦截器： 这块就是根据 后端返回来的状态码判定执行不同业务
#### 如何中断axios的请求？
有时候，需要取消或中断 axios 请求，比如在上传一个大文件时，需要中断或者重新选择，这时再让之前的请求继续，就会无意义地占用带宽。
通过 cancel token 取消请求
第一步，创建 cancelTokenSource 对象，它有两个属性：
token: 传给请求，标记操作取消该请求。
cancel: 是个方法，需要取消时调用
```
const cancelTokenSource = axios.CancelToken.source();
```
第二步，发起请求时传入 token ；
```
axios.get('/foo', {
  cancelToken: cancelTokenSource.token
});
```
第三步，需要取消时执行 cancel 方法
```js
cancelTokenSource.cancel();
```
#### axios是什么？怎样使用它？怎么解决跨域的问题？
axios 的是一种异步请求，用法和 ajax 类似，安装 npm install axios --save 即可使用，请求中包括get,post,put, patch ,delete 等五种请求方式，解决跨域可以在请求头中添加 Access-Control-Allow-Origin，也可以在 index.js 文件中更改 proxyTable 配置等解决跨域问题.
#### 如果将axios异步请求同步化处理？
async await
### ---------vue-cli---------
#### vue-cli提供了的哪几种脚手架模板？
vue-cli2.x 好像有个simple和完整版的
vue-cli3.x 提供了自定义装箱配置 可以选装
    TypeScript
    PWA
    lint
    e2e
    css 预处理
    router
    vuex
#### vue-cli工程中常用的npm命令有哪些？
1. 下载 node_modules 资源包的命令：
```
npm install 安装 package.json 中 dependencies 字段和 devDependencies 字段中的所有模块
npm install --production 只安装 dependencies 字段的模块。

```
2. 启动 vue-cli 开发环境的 npm命令：
```
npm run dev 或 npm start
```
3. vue-cli 生成 生产环境部署资源 的 npm命令：
```
npm run build
```
4. 用于查看 vue-cli 生产环境部署资源文件大小的 npm命令：
```
npm run build --report
```
5. 用于安装开发环境依赖的包，将包信息添加到 package.json 里的 devDependencies节点
```
npm install --save-dev axios
或
npm install -D axios
或
npm i -D axios
install 可以简写为 i  --save-dev 可以简写为 -D
```
6. 用于安装生产环境依赖的包，将包信息添加到 package.json 里的dependencies节点
```
npm install --save axios
或
npm install -S axios
或
npm i -S axios
install 可以简写为 i  --save 可以简写为 -S
```
7. 删除包
```
npm uninstall 模块：删除模块，但不删除模块留在package.json中的对应信息
npm uninstall 模块 --save： 删除模块，同时删除模块留在package.json中dependencies下的对应信息
npm uninstall 模块 --save-dev： 删除模块，同时删除模块留在package.json中devDependencies下的对应信息
```
#### 在使用vue-cli开发vue项目时，自动刷新页面的原理你了解吗？
自动刷新页面并不是vue-cli的功能，而是webpack的hot-module-replacement-plugin插件在做这件事，这个插件是webpack自带的插件，用来做hmr的。如果需要配置hmr只需要在webpack.config.js的devServer字段写 下面的配置即可。
{
   contentBase: 服务器可以访问的根目录,
   hot:true, //开启热模块替换也就是hmr
   hotOnly:true //不刷新页面，只做hmr
}
而由于vue-cli3集成了webpack的配置，所以vue.config.js里面也有这个属性，配置写法是一样的
#### vue-cli生成的项目可以使用es6、es7的语法吗？为什么？
vue-cli 配置了babel,可以将es6,es7....etc在webpack打包的时候转换成es5的代码，所以上线的时候没有问题。但是脚手架只是配置了一些默认常见的用法， 可以根据babel官网配置一些尚在草案中的语法
#### vue-cli怎么解决跨域的问题？
在 vue.config.js 文件中配置 proxy 属性，将 API 请求代理到 API 服务器上，设置 devServer.proxy
#### vue-cli中你经常的加载器有哪些？
style,css,vue,postcss,url等
#### 怎么使用vue-cli3创建一个项目？
```
npm install -g @vue/cli
vue create hello-world
```
#### vue-cli3你有使用过吗？它和2.x版本有什么区别？
Vue CLI 的包名称由 vue-cli 改成了 @vue/cli
vue cli 3 npm install -g @vue/cli
vue create hello-world
vue cli 2.x npm install -g vue-cli
vue init webpack my-project
#### vue-cli默认是单页面的，那要弄成多页面该怎么办呢？
在vue.config.js配置文件下的pages配置项中配置多个页面，每个页面有一个对应的js入口
```
  pages:{
     index:{
       entry:'./src/main.js',
       template: './public/index.html',
       title:'首页'
     },
     login:{
       entry:'./src/pages/login.js',
       template:'./public/login.html',
       title:'登录'
     }
   }
```
#### 不用vue-cli，你自己有搭建过vue的开发环境吗？流程是什么？
#### 说下你了解的vue-cli原理？你可以自己实现个类vue-cli吗？
### ---------vue-router---------
#### vue-router怎么重定向页面？
1. 重定向也是通过 routes 配置来完成，下面例子是从 /home 重定向到 /：
const routes = [{ path: '/home', redirect: '/' }]
2. 重定向的目标也可以是一个命名的路由：
const routes = [{ path: '/home', redirect: { name: 'homepage' } }]
3. 甚至是一个方法，动态返回重定向目标：
const routes = [
   {
      // /search/screens -> /search?q=screens
      path: '/search/:searchText',
      redirect: to => {
      // 方法接收目标路由作为参数
      // return 重定向的字符串路径/路径对象
      return { path: '/search', query: { q: to.params.searchText } }
   },
]
#### vue-router怎么配置404页面？
```
{
   path: '/:catchAll(.*)',
   name: 404,
   component: ()=> import('../views/404.vue')
}
```
#### 切换路由时，需要保存草稿的功能，怎么实现呢？
```
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```
#### vue-router路由有几种模式？说说它们的区别？
hash模式
1、url路径会出现 # 字符
2、hash值不包括在 HTTP 请求中，它是交由前端路由处理，所以改变hash值时不会刷新页面，也不会向服务器发送请求
3、hash值的改变会触发hashchange事件
history模式
1、整个地址重新加载，可以保存历史记录，方便前进后退
2、使用 HTML5 API（旧浏览器不支持）和 HTTP服务端配置，没有后台配置的话，页面刷新时会出现404
#### vue-router有哪几种导航钩子（ 导航守卫 ）？
beforeRouteEnter 在进入当前组件对应的路由前调用
beforeRouteUpdate 在当前路由改变，但是该组件被复用时调用
beforeRouteLeave 在离开当前组件对应的路由前调用
#### 说说你对router-link的了解
vue-router插件的其中一个组件, 用于跳转路由, 类似于a标签, 它一般也会渲染成a标签, 但是可以通过tag来变更默认渲染元素, 通过to来跳转
#### vue-router如何响应路由参数的变化？
```
watch: {
   $route: {
      handler (to, from){
      console.log(to)
      console.log(from)
   },
   deep: true
}
```
#### 切换到新路由时，页面要滚动到顶部或保持原先的滚动位置怎么做呢？
1. 路由是history的情况下支持scrollBehavior
```
const router = new VueRouter({
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})
```
2. watch的方式实现
```
 watch:
 {
  '$route':function(to,from){
　　　　document.body.scrollTop = 0；
       document.documentElement.scrollTop = 0;
     }
  }
```
#### 在什么场景下会用到嵌套路由？
嵌套结构较多时需要用到嵌套路由
#### 如何获取路由传过来的参数？
1. 路由地址传参
```
{
   path: '/user/:id',
   name: 'user',
   component: user
}
this.$router.push({
 path: '/user/123',
})
this.$route.params.id
刷新参数不丢失
```
2. params传参
```
{
     path: '/user',
     name: 'user',
     component: user
}
this.$router.push({
   name: 'user',
   params: {
     id: id
   }
 })
this.$route.params.id
刷新参数丢失
```   
3. query传参
```
{
  path: '/user',
  name: 'user',
  component: user
}
this.$router.push({
   path: '/user',
   query: {
     id: id
   }
 })
this.$route.query.id
刷新参数不丢失
```
#### 说说active-class是哪个组件的属性？
active-class是 vue-router模块中router-link 组件中的属性，主要作用是用来实现选中样式的切换
#### 在vue组件中怎么获取到当前的路由信息？
this.$route可以获取，例如：this.$route.path
#### 怎么实现路由懒加载呢？
```
const UserDetails = () =>
 import(/* webpackChunkName: "group-user" */ './UserDetails.vue')
const UserDashboard = () =>
 import(/* webpackChunkName: "group-user" */ './UserDashboard.vue')
const UserProfileEdit = () =>
 import(/* webpackChunkName: "group-user" */ './UserProfileEdit.vue')
const router = new Router({
   routes: [
      {
         path: '/list',
         component: (resolve) => {
            // 这里是你的模块 不用import去引入了
            require(['@/components/list'], resolve)
         }
      }
   ]
})
const List = resolve => require.ensure([], () => resolve(require('@/components/list')),'list');
// 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载 
const router = new Router({
   routes: [
      {
         path: '/list',
         component: List,
         name: 'list'
      }
   ]
}))
```
#### 说说vue-router完整的导航解析流程是什么？
1.导航被触发。
2.在失活的组件里调用离开beforeRouteLeave守卫。
3.调用全局的 beforeEach 守卫。
4.在重用的组件里调用 beforeRouteUpdate 守卫（2.2+）。
5.在路由配置里调用 beforeEnter。
6.解析异步路由组件。
7.在被激活的组件里面调用 beforeRouterEnter。
8.调用全局的 beforeResolve 守卫（2.5+）。
9.导航被确认。
10.调用全局的 afterEach钩子。
11.触发 DOM 更新。
12.用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
#### 路由之间是怎么跳转的？有哪些方式？
1 根据路由路径：
```
<router-link to = "/page">跳转到page页面</router-link>
```
2. 根据路由名称
```
<router-link ：to = "{ name: 'page'}">跳转到page页面</router-link>
```
3. this.$router.push()
```
this.$router.push({ path: '/home', query: { id: '001' } })  
// 根据路由路径 + query 的方式跳转传参
this.$router.push({ name: 'home', query: { id: '001' } })   
// 根据路由名称 + query 的方式跳转传参
this.$router.push({ name: 'home', params: { id: '001' } })  
// 根据路由名称 + params 的方式跳转传参
```
#### 如果vue-router使用history模式，部署时要注意什么？
```
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
```
#### route和router有什么区别？
router 可以用来动态地改变URL，从而实现页面间的无刷新跳转。 
因此，route 和router 在功能上有所不同，
route 主要用于获取当前路由信息，
router 则是用于进行路由操作，例如跳转到指定的路由、前进、后退等
#### vue-router钩子函数有哪些？都有哪些参数？
每个守卫方法接收三个参数：
to: Route: 即将要进入的目标 路由对象
from: Route: 当前导航正要离开的路由
next: Function: 一定要调用该方法不然会阻塞路由。执行效果依赖 next 方法的调用参数。next()方法接收的参数：
next(): 进行管道中的下一个钩子。
next(false): 中断当前的导航。回到到 from 路由对应的地址。
next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。
next(error): 导航终止，且该错误会被传递给 router.onError() 注册过的回调。
1. 全局路由钩子
   beforeEach(to, from, next)前置守卫
   beforeResolve(to, from, next)解析守卫
   afterEach(to, from)后置守卫
2. 路由独享钩子
   beforeEnter(to, from, next)
3. 组件内导航钩子
   beforeRouteEnter：在渲染该组件的对应路由被 confirm 前调用
   beforeRouteUpdate：在当前路由改变，但是该组件被复用时调用
   beforeRouteLeave：导航离开该组件的对应路由时调用
   beforeRouteEnter 不能获取组件实例 this，因为当守卫执行前，组件实例被没有被创建出来，剩下两个钩子则可以正常获取组件实例 this
#### vue-router是用来做什么的？它有哪些组件？
Vue-router是Vue.js的官方路由库，用于单页面应用程序（SPAs）。它允许您定义不同的URL地址以映射到特定的Vue组件，并且支持动态匹配、嵌套路由、导航钩子等。
主要组件包括：
Router：根实例，用于整个应用程序的路由配置。
Route：表示单个路由规则，映射到特定的组件。
Router-Link：渲染可点击的超链接，用于导航到其它路由。
Router-View：代表当前激活的路由组件的渲染位置。
#### 你有看过vue-router的源码吗？说说看
#### 如果让你从零开始写一个vue路由，说说你的思路

### ---------vuex---------
#### 你有写过vuex中store的插件吗？
Vuex插件是一个函数，接受store作为唯一参数。我们可以在插件中访问store的state、getters、mutations和actions，并在插件中监听mutation的提交或者在提交mutation之前执行一些操作。
```
const myPlugin = store => {
  // 在每次 mutation 之后调用
  store.subscribe((mutation, state) => {
    console.log(`mutation ${mutation.type}`);
  });

  // 在提交 mutation 之前调用
  store.subscribeAction((action, state) => {
    console.log(`action ${action.type}`);
  });
};
export default myPlugin;
```
#### 你有使用过vuex的module吗？主要是在什么场景下使用？
把状态全部集中在状态树上，非常难以维护。
按模块分成多个module，状态树延伸多个分支，模块的状态内聚，主枝干放全局共享状态
#### vuex中actions和mutations有什么区别？
actions主要用于响应组件中的动作，通过 commit( )来触发 mutation 中函数的调用, 间接更新 state，不是必须存在的；
mutations主要用于操作修改数据，是必须存在的；
actions可以进行异步操作，可用于向后台提交数据或者接受后台的数据；
mutations中是同步操作，不能写异步代码、只能单纯的操作 state ，用于将数据信息写在全局数据状态中缓存，不能异步操作；
#### vuex使用actions时不支持多参数传递怎么办？
vuex使用actions时不支持多参数传递怎么办？
"在 Vuex 中，虽然 actions 不支持直接传递多个参数，但可以通过传递一个包含多个参数的对象来实现类似的功能。例如，将多个参数打包成一个对象，然后在 action 中解构该对象来获取各个参数。
```
// 在组件中 dispatch action 时传递多个参数
this.$store.dispatch('myAction', { param1: 'value1', param2: 'value2' });
// 在 Vuex store 中的 action 中解构参数对象
actions: {
myAction({ commit }, { param1, param2 }) {
// 在这里可以使用 param1 和 param2 参数
}
```
#### 你觉得vuex有什么优点缺点？
优点：
在vuex中，集中式存储和管理共享的数据，便于开发和维护
能够高效的实现组件之间的数据共享和传输，提高开发效率（就不用管是父子组件传值还是兄弟组件，还是祖先后代，直接高效的传值）
存储在vuex中的数据都是响应式的，能够实时的保持数据和页面的同步（比如localstorage就是办不到的）
缺点：
刷新浏览器，vuex中的state会重新变为初始状态
1.插件vuex-persistedstate（我个人没用过）
2.在刷新前将vuex中的数据直接保存到浏览器缓存中，页面刷新后，在页面刷新的时候再次请求远程数据，使之动态更新vuex数据，具体步骤：监听页面刷新事件，在页面刷新之前，将vuex里的数据存到sessionStorage里，然后在页面刷新之后，调取获取数据的接口，在接口还没有返回数据的时候，就先用sessionStorage里的数据，等接口返回数据后，就使用接口返回的，顺便更新vuex里的数据
#### 你觉得要是不用vuex的话会带来哪些问题？
1.传参数时对于多层嵌套的组件将会非常繁琐，对于兄弟组件更是无法传递
2.当不同视图的行为需要去修改数据时，无法追踪到数据的变更方向，导致无法维护代码
#### vuex怎么知道state是通过mutation修改还是外部直接修改的？
通过$watch监听mutation的commit函数中_committing是否为true
#### 请求数据是写在组件的methods中还是在vuex的action中？
将数据请求写在组件的methods中还是在Vuex的action中，取决于具体的项目需求和组件的复杂度。对于小型项目或者对数据状态要求不高的组件，可以考虑使用组件的methods来请求数据。而对于需要在多个组件之间共享数据或者进行复杂状态管理的项目，使用Vuex的action来请求数据更为合适。
#### 怎么监听vuex数据的变化？
可以通过watch选项或者watch方法监听状态
可以使用vuex提供的API：store.subscribe()
watch选项方式，可以以字符串形式监听$store.state.xx；subscribe方式，可以调用store.subscribe(cb),回调函数接收mutation对象和state对象，这样可以进一步判断mutation.type是否是期待的那个，从而进一步做后续处理。
watch方式简单好用，且能获取变化前后值，首选；subscribe方法会被所有commit行为触发，因此还需要判断mutation.type，用起来略繁琐，一般用于vuex插件中。
```
const app = createApp({
   watch: {
      '$store.state.counter'() {
         console.log('counter change!');
      }
   }
})
store.subscribe((mutation, state) => {
    if (mutation.type === 'add') {
      console.log('counter change in subscribe()!');
    }
})
```
#### 页面刷新后vuex的state数据丢失怎么解决？
办法一：将vuex中的数据直接保存到浏览器缓存中（sessionStorage、localStorage、cookie）
办法二：在页面刷新的时候再次请求远程数据，使之动态更新vuex数据
#### vuex的store有几个属性值？分别讲讲它们的作用是什么？
有五种，分别是 State、Getter、Mutation、Action、Module。
state
用于存储应用程序的状态，也就是数据。state是响应式的，只能通过提交mutations来修改。
getters
用于从state中派生出新的状态，类似于Vue组件中的计算属性。当依赖的state发生变化时，会重新计算getter的值。getter的返回值可以缓存起来，避免多次重复计算
mutations
在Vuex中，state是只读的，也就是说我们不能直接修改Vue应用程序的状态。为了修改Vuex中的state，必须通过提交(mutating)一个mutation来实现。
用于处理异步操作或批量操作，可以通过提交mutations间接地修改state。当我们需要进行异步操作时，就需要使用Vuex中的actions。在Vue组件中，我们可以直接调用异步操作的方法，而在Vuex中，我们必须先定义一个action来执行该异步操作，并通过提交mutation来修改state。
Mutation是一个同步函数，用于操作store中的state数据。它们接收当前state作为第一个参数，以及可能存在的负载payload作为第二个参数。Mutation只能通过commit方法触发，而且必须显式地调用。
```
const mutations = {
  increment(state, payload) { // 修改state的count属性
    state.count += payload.amount;
  }
}
// 在组件中提交该mutation
this.$store.commit('increment', { amount: 10 });
```
actions
用于处理异步操作或批量操作，可以通过提交mutations间接地修改state。当我们需要进行异步操作时，就需要使用Vuex中的actions。在Vue组件中，我们可以直接调用异步操作的方法，而在Vuex中，我们必须先定义一个action来执行该异步操作，并通过提交mutation来修改state。
Action通常是异步的操作，但也可以是同步操作，它们接收一个context对象作为参数，该对象包含和store实例具有相同方法和属性的对象。此外，actions可以返回一个Promise对象，表示异步操作的结果，或者可以返回一个值，表示同步操作的结果。
```
// 定义一个名为loadData的异步操作
const actions = {
  loadData(context) {
    axios.get('/api/data')
      .then(response => {
        // 数据成功返回，提交一个mutation来修改state
        context.commit('setResult', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

// 在组件中分发该action
this.$store.dispatch('loadData');
```
modules
用于将store拆分成更小的单元，每个模块都有自己的state、mutations、getters和actions，与整个store结构相同，可以进行嵌套。这些模块之间可以进行命名空间隔离，使其在使用上更加易于管理。
#### vuex的state、getter、mutation、action、module特性分别是什么？
State（状态）：State 是应用中的单一数据源，即存储应用中的所有状态变量。在 Vuex 中，State 是响应式的，当 State 发生变化时，相关的组件也会自动更新。
Getter（获取器）：Getter 是用于从 State 中派生出一些新的状态变量的函数。Getter 可以对 State 进行计算或过滤，然后返回派生出的新状态，供组件使用。
Mutation（突变）：Mutation 是用于修改 State 的唯一方式。每个 Mutation 都是一个函数，用于对 State 进行同步修改。Mutation 必须是同步函数，因此不能包含异步操作。
Action（动作）：Action 类似于 Mutation，用于提交 Mutation 来修改 State。不同之处在于，Action 可以包含异步操作，可以在 Action 中执行异步任务后再提交 Mutation。
Module（模块）：Module 是将 Vuex 拆分为多个模块的方式，每个模块都有自己的 State、Getter、Mutation 和 Action。通过模块化管理，可以更好地组织和维护大型的 Vuex 应用
#### 你理解的vuex是什么呢？哪些场景会用到？不用会有问题吗？有哪些特性？
状态管理, 当项目中有大量组件共用到一些状态的时候, 我就会考虑用.
其实不是每个项目都需要
不用就是参数控制比较麻烦, 比如多个兄弟组件公用参数.

