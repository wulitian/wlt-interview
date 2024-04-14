## css面试题

### -------css取值单位------

#### css中px,em,rem
1. ie8及以下不支持em，与rem
2. rem 相对于根html的字体大小，找到设计图宽度，与当前字体的比例动态设置html的font-size,如果font-size:10px,1rem=10px
3. em 相对于父元素font-size大小，浏览器默认字体大小为16px，可以设置font-size:62.5%便于运算，10px=1em
4. 移动端实现响应式一般根据设计稿宽度除以10设置成字体大小，此时1rem就等于这个字体的大小，实现内部盒子时根据设计稿中盒子的像素计算出实际的rem之后进行设置
#### CSS中，使用 rem 作为单位有何缺点
可访问性不友好,不跟随系统字体
其实这也是现在很多舍弃rem的原因 1:1还原之后 你希望pad也和手机一样？ 大屏手机也和普通手机一样？ 这个我觉得你体验过其实会发现这里其实不是一个好的展示逻辑
#### css中rem、em、vw、vh 的值各是什么意思
1. rem相对于html字体大小单位1rem=html跟级font-size
2. em相对于父级字体大小的单位1em=父级font-size
3. vw相对于视口的宽度。视口被均分为100单位的vw
4. vh相对于视口的高度。视口被均分为100单位的vh

### -------css属性------
#### css3transform、animation、transition的区别
1. transition：CSS过渡，为一个元素在不同状态切换的时候定义不同的过渡效果。
    - transition-property 过渡效果的 CSS 属性的名称（height、width、opacity等）。
    - transition-duration 完成过渡效果需要时间。（0时不会过度）
    - transition-timing-function 规定速度效果的速度曲线。
    - transition-delay 过渡效果何时开始（延迟时间）。
2. transform：CSS转换，主要应用于元素的 2D 或者 3D转换，可以将元素 旋转、缩放、移动、倾斜等
    -  矩阵转换:matrix(n,n,n,n,n,n) matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
    -  移动转换:translate(x,y) translate3d(x,y,z) translateX(x) translateY(y) translateZ(z)
    -  缩放转换:scale(x[,y]?) scale3d(x,y,z) scaleX(x) scaleY(y) scaleZ(z)
    -  旋转转换:rotate(angle) rotate3d(x,y,z,angle) rotateX(x) rotateY(y) rotate(Z)
    -  倾斜转换:skew(x-angle,y-angle) skewX(x) skewY(y)
    -  元素透视:perspective(n)
3. animation：CSS动画，将元素的样式配置转换到另一个CSS配置。包括动画所使用的样式规则，以及用于指定动画开始、结束以及中间多个节点的关键帧
    -  animation-name 制定需要绑定的关键帧名称
    -  animation-duration 动画指定需要多少秒
    -  animation-timing-function 设置动画如何完成一个周期
    -  animation-delay 设置动画启动前延迟间隔
    -  animation-iteration-count  定义动画播放次数
    -  animation-direction 指定是否轮流反向播放动画
    -  animation-fill-mode 规定当动画不播放应用到元素上的样式
    -  animation-play-state 指定动画是否正在运行或暂停
    -  initial 设置属性为默认值
    -  inherit 从父元素继承属性
#### css中base64的优缺点
1. 优点：可以加密，同时还能够减少HTTP请求数量；HTTP请求是非常耗费服务器资源的；
2. 缺点：使用 base64导致css体积增大可能导致页面阻塞，消耗cpu编解码
3. 使用场景; 一般移动端背景图用base64
4. 内容编码后体积变大适用于小图片
#### css中display,float,position的关系
1. 当dispaly不是none时，定位不是absolute也不是fixed,浮动也是none,元素不是根元素，此时display是所设置的特定值
2. 当display不是none时，定位是absolute或者fixed，此时浮动会变为none，display(除inline-table)都换转换成block
3. 当display不是none时，定位不是absolute也不是fixed,浮动不是none，display(除inline-table)都换转换成block
4. 当display是none时，position,float不起作用
#### css中display属性有哪些
- none:隐藏不占据位置
- block:行内块显示
- inline-block:内联显示
- table:表格显示
- inline-table:内敛表格
- list-item:列表显示
- flex:弹性盒子
- inherit:继承父元素display值
#### css中默认display属性是多少
1. 内联元素: inline 块级元素: block
2. html 根元素的默认 display 为 block
#### css中float
1. 浮动原理？
- 浮动脱离文档流，不占据空间
2. css中设置浮动后，该元素的display值是多少？
- display:block
3. 浮动引起的问题？
- 父元素高度无法撑开
- 同级元素不浮动可能导致覆盖问题
4. 清除浮动方式？
- 父元素div加高
- 结尾处div加clear:both
- 父级div定义伪类:after与zoom
- 父级div定义overflow:hidden
- 父级div定义float也需要定义宽度
- 结尾br标签定义clear:both
#### css中的inline-block间隙问题
父元素font-size:0，
元素写在一行
设置父元素display:table;兼容其他浏览器word-spacing:-1em;
#### css中margin上下左右的四个值
1. 4个值时 上右下左
2. 3个值时 上 左右 下
3. 2个值时 上下 左右
4. 1个值时 上下左右
#### css中margin,padding的使用场景
1. margin使用场景：
- 需要在border外侧添加空白时
- 空白处不需要背景（色）时
- 上下两个盒子抵消空白时
2. padding使用场景
- 需要在border内测添加空白时
- 空白处需要背景（色）时
- 上下相连的两个盒子之间的空白，希望等于两者之和时。如15px+20px的padding，将得到35px的空白。
3.兼容性：
- 在IE5.x、IE6中，为float的盒子指定margin时，左侧margin可能会变成两倍的宽度。通过改用padding或指定盒子为display:inline可以解决。
#### css中position跟display,margin collapse,overflow,float特性叠加后会怎样
1. 两个或多个毗邻的普通流中的块元素垂直方向上的 margin 会折叠。
2. 只有垂直方向的 margin 才会折叠，也就是说，水平方向的 margin 不会发生折叠的现象。
3. 在 margin 都是正数的情况下，取其中 margin 较大的值为最终 margin 值。
4. 当 margin 都是负值的时候，取的是其中绝对值较大的，然后，从 0 位置，负向位移。
5. 当 margin一正一负折叠结果两者之和
6. 元素自身的 margin-bottom 和 margin-top 相邻时也会折叠
7. 浮动元素、inline-block 元素、绝对定位元素的 margin 不会和垂直方向上其他元素的 margin 折叠
#### css中margin叠加问题
1. 两个或者多个垂直方向相邻的普通流中的块级元素margin会折叠，水平方向不会折叠
2. margin都是正值取最大的，都是负值取绝对值最大的，元素自身的margin-bottom,margin-top也会折叠
3. 浮动元素，绝对定位，inline-block不会和垂直方向其他元素产生折叠
#### css中relative与absolute定位原点是什么
1. relative 的定位原点是相对正常位置；相对于文档流；”相对于”它的原始起点进行移动。
2. absolute 生成绝对定位的元素，相对于 static 定位以外的第一个祖先元素进行定位。左上角
3. fixed （老IE不支持）生成绝对定位的元素，相对于浏览器窗口进行定位。
4. static 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。
5. inherit规定从父元素继承 position 属性的值。
#### css中rgba和opacity的透明效果有什么不同
1. opacity 作⽤于元素，以及元素内的所有内容的透明度（子元素会继承）
2. rgba 只作⽤于元素的颜⾊或其背景⾊。（子元素不会继承）
#### css中的两种隐藏的区别
1. visibility:hidden，display:none
2. visibility:hidden占位隐藏（visibility:visible显示出子元素）
3. display:none不占位隐藏（回流，重绘，株连性）
#### css中为什么要初始化样式
1. 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
2. 初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。
#### css中可以继承的属性
可继承： font-size、 font-family 、color;
不可继承 ：border padding margin width height ;
#### css中可以让文字在垂直和水平方向重叠的两个属性
1. line-height行高
2. letter-spacing字间距
#### css中的定位方式有哪些
1. 默认值：initial（浏览器默认值）
2. 继承父级元素的定位机制：inherit
3. 默认：static（没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。 ）
4. 相对定位：relative（生成相对定位的元素，相对于其正常位置进行定位。可以使用top, bottom, left, right 或者 z-index 声明）
5. 绝对定位：absolute（生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 ”left”, ”top”, ”right” 以及 ”bottom” 或者 z-index 声明）
6. 固定定位：fixed（生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 ”left”, ”top”, ”right” 以及 ”bottom” 属性进行规定。fixed旧版本IE不支持）
7. 粘性定位：sticky该定位基于用户滚动的位置（它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。注意: Internet Explorer, Edge 15 及更早 IE 版本不支）
#### css3中的新特性有哪些
1. 圆角，阴影
2. 文字特效，线性渐变，旋转，缩放，定位，倾斜
3. 唯一微元素::selection
4. 媒体查询，多栏布局
5. border-image
#### css合并方法
避免使⽤ @import 引⼊多个 css ⽂件，可以使⽤ CSS ⼯具将 CSS 合并为⼀个 CSS ⽂ 件，例如使⽤ Sass\Compass 等
#### css引入样式的方法
1. inline（内联式，也称行内样式）
2. embedding（嵌入式）
3. linking（外部引用式）
4. 导入样式表（@import ）
#### css浮动引起的问题
1. 父元素高度无法撑开，影响与父级同级的元素
2. 与元素同级的元素不会紧跟其后
#### css清除浮动
1. 父元素div加高
2. 父级div定义伪类:after内容
   content: "";
   display: block;
   height: 0;
   visibility: hidden;
   clear: both;
   zoom: 1;
3. 父级div定义overflow:hidden
4. 父级div定义display:inline-block
5. 父级div定义float也需要定义宽度
6. 结尾br/div标签定义clear:both
#### CSS如何设置一行超出显示省略号
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
#### CSS如何设置多行超出显示省略号
overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
或者
p {
position:relative;
line-height:1.5em;
/* 高度为需要显示的行数*行高，比如这里我们显示两行，则为3 */
height:3em;
overflow:hidden;
}
p:after {
content:"...";
position:absolute;
bottom:0;
right:0;
padding: 0 5px;
background-color: #fff;
}
这种需要知道行高属于手动伪类模拟实现
#### css中网站设置字体时，如何设置优先使用系统默认字体
font-family: system-ui;
#### css中如何更好地给元素设置 z-index
确保元素的z-index值是唯一的，否则可能会出现元素重叠的问题。
尽量将具有高z-index值的元素放在较低z-index值的元素的上面，以确保元素的堆叠顺序正确。
避免在多个元素上同时使用z-index，因为这可能会导致元素重叠或显示不正确。
如果需要设置多个元素的z-index值，可以使用CSS的层叠上下文（z-index stacking context）来解决。层叠上下文可以将元素分组，使得每个组内的元素按照z-index值的大小进行堆叠。
#### css中z-index: 999 元素一定会置于 z-index: 0 元素之上吗
z-index高数值不一定在低数值前面，因为有层叠上下文的概念。当处于两个兄弟层叠上下文时，子元素的层级显示不决定于自身的z-index，而取决于父级的z-index
#### css中display: inline 的元素设置 margin 和 padding 会生效吗
inline 元素的 margin 与 padding 左右生效，上下不生效
#### css里visibility属性有个collapse属性值干啥用的？在不同浏览器有什么区别
1. 当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局。被行或列占据的空间会留给其他内容使用。如果此值被用在其他的元素上，会呈现为 ”hidden”。
2. 在谷歌浏览器里，使用collapse值和使用hidden值没有什么区别。
3. 在火狐浏览器、Opera和IE11里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位置。

### -------css选择器------
#### css中样式（选择器）的优先级
1.!important>行内style样式>id>class>标签>通配符
2.后写的优先级高
#### css3中有哪些伪类
1. p:first-of-type选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
2. p:last-of-type选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
3. p:only-of-type 选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
4. p:only-child 选择属于其父元素的唯一子元素的每个 <p> 元素。
5. p:nth-child(2)选择属于其父元素的第二个子元素的每个 <p> 元素。
6. :enabled控制表单控件的禁用状态。
7. :disabled控制表单控件的禁用状态。
8. :checked单选框或复选框被选中。
9. :after在元素之前添加内容,也可以用来做清除浮动。
10. :before:在元素之后添加内容
11. :enabled控制表单控件的禁用状态。
12. :disabled控制表单控件的禁用状态。
13. :checked单选框或复选框被选中。
#### css伪元素
- 单双冒号都行：before,after,first-letter,first-line
- 仅双冒号：selection,placeholder,backdrop
#### first-child与p:first-of-type
- first-child匹配的结构上的第一个
- first-of-type匹配的是父元素中相同子元素的第几个
#### 双冒号与单冒号的的区别
- 单冒号表示css伪类
- 双冒号表示css伪元素

- 为了兼容css2中已有的伪元素使用单冒号after,before
#### css中before和after中双冒号单冒号有什么区别
1. 单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。
2. 双冒号是在当前规范中引入的，用于区分伪类和伪元素。但是伪类兼容现存样式，浏览器需要同时支持旧的伪类，比如:first-line、:first-letter、:before、:after等。
3. 对于CSS2之前已有的伪元素，比如:before和:after，单冒号和双冒号的写法::before和::after作用是一样的。如果只需要兼容webkit、firefox、opera等浏览器，建议对于伪元素采用双冒号的写法，如果不得不兼容IE浏览器，还是用CSS2的单冒号写法比较安全。
4. 这两个伪类下特有的属性 content ，用于在 CSS 渲染中向元素逻辑上的头部或尾部添加内容。注意这些添加不会改变文档内容，不会出现在 DOM 中，不可复制，仅仅是在 CSS 渲染层加入
#### css中伪类与伪元素区别
1. 伪类表状态
2. 伪元素是真的有元素
3. 前者单冒号，后者双冒号
#### css中如何匹配前N个子元素及最后N个子元素
如何匹配最前三个子元素: :nth-child(-n+3)
如何匹配最后三个子元素: :nth-last-child(-n+3)
#### css中属性选择器及类选择器的权重哪个高
它俩选择器群众一样高
#### css中'+' 与 '~' 选择器有什么不同
+ 选择器匹配紧邻的兄弟元素
~ 选择器匹配随后的所有兄弟元素

### -------css盒模型------
#### css中BFC,IFC,GFC,FF
1. BFC（块级上下文float 的值不为 none,overflow 的值不为 visible,position 的值不为 relative 和 static ,display 的值为 table-cell , table-caption , inline-block 中的任何⼀个）
2. IFC（内联上下文inline-block,inline）水平居中：text-align:center,垂直居中vertical- align : middle
3. GFC（网格上下文display:grid）
4. FFC（自适应格式化上下文display:flex）
#### css中对BFC的理解
1. BFC(块级上下文)：一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素在同一个 BFC 中的两个毗邻的块 级盒在垂直方向（和布局方向有关系）的 margin 会发生折叠。
2. 一个页面是由很多个 Box 组成的,元素的类型和 display 属性,决定了这个 Box 的类型。
3. 不同类型的 Box,会参与不同的 Formatting Context（决定如何渲染文档的容器）,因此Box内的元素会以不同的方式渲染,也就是说BFC内部的元素和外部的元素不会互相影响。
4. 触发BFC的条件：
- 根元素
- 浮动元素，float除none以外的值
- 绝对定位元素：position(absolute,fixed)
- display为以下其中之一的值inline-block，table-cell，table-caption，flex ,inline-flex
- overflow 除了 visible 以外的值（hidden，auto，scroll）
5. BFC的用处
- 可以阻止margin折叠：两个盒子有margin的时候，边距发生了折叠；对#one和#two添加float：left属性后，此时上下两个盒子的边距未发生折叠。float创建 BFC 的好处：可以将本元素的内外边距的折叠均变为正常。而其他的触发条件均不能控制自身外边距的折叠。
- 可以包含内部元素的浮动
- 可以阻止元素被浮动覆盖
#### css中的盒模型有几种
1.盒模型的组成：margin padding border content。
2.盒模型的分类：W3C模型,IE模型（IE8以下版本）。
3.盒模型的区别：
    W3C盒模型content范围：content不包含其他部分。
    IE盒模型content范围：content包含了border 和 padding，其内容真正的宽度是(width-padding-boder)。
4.css3中定义的box-sizing。
5.content-box:宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。
6.border-box:宽度和高度和内边距和边框分别应用到元素的内容框。在宽度和高度之内绘制元素的内边距和边框。

### -------css布局------
#### css上下左右居中居中对齐
1. 父position:relative 子元素position:absolute,left:50% top:50%;margin-top margin-left 指定为负数绝对值为自身宽度一半(有宽度)
2. 父position:relative 子元素position:absolute,margin: auto（有宽度）left,right,bottom,top均为0
3. 父position:relative 子元素position:absolute,left:50% top:50%;transform:translateX(-50%)transform:translateY(-50%)
5. 父display:flex 子元素margin: 0 auto
6. 父设置三个属性 display:flex； align-items: center; justify-content: center;
#### css中如何实现表格单双行条纹样式
tr设置nth-child(2n)/nth-child(even): 双行样式
tr设置nth-child(2n+1)/nth-child(odd): 单行样式
#### css中如何实现左侧固定300px，右侧自适应的布局
box{ width:100%;; height:100%; display:flex; } .one{ width:300px; height:300px; background-color: #afa; } .two{ flex:1; height:300px; background-color: #ae5aca; }
#### css中div,css布局与table布局的优缺点
1. 改版是只需要修改css
2. 页面加载速度更快
3. 表现与结构相分离
4. 易于seo优化
#### css中的flex布局(弹性盒模型)
设为Flex布局以后（ display: flex;），子元素的float、clear和vertical-align属性将失效。
采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。
它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。
容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。
主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。
1. 容器的属性：以下6个属性设置在容器上（justify-content和align-items、flex-wrap:wrap最常用的）。
- justify-content：定义了项目在主轴上的对齐方式。它可能取5个值
  center： 居中
  flex-start（默认值）：左对齐
  flex-end：右对齐
  space-between：两端对齐，项目之间的间隔都相等。
  space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
- align-items：属性定义项目在交叉轴上如何对齐。它可能取5个值。
  center：交叉轴的中点对齐。
  flex-start：交叉轴的起点对齐。
  flex-end：交叉轴的终点对齐。
  baseline: 项目的第一行文字的基线对齐。
  stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
- flex-flow：flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
- flex-direction：属性决定主轴的方向（即项目的排列方向）；
  row（默认值）：主轴为水平方向，起点在左端。
  row-reverse：主轴为水平方向，起点在右端。
  column：主轴为垂直方向，起点在上沿。
  column-reverse：主轴为垂直方向，起点在下沿。
- flex-wrap：默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。它可能取三个值。
  （1）nowrap（默认）：不换行。
  （2）wrap：换行，第一行在上方。【这个属性经常用】
  （3）wrap-reverse：换行，第一行在下方。
- align-content：属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
  flex-start：与交叉轴的起点对齐。
  flex-end：与交叉轴的终点对齐。
  center：与交叉轴的中点对齐。
  space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
  space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。stretch（默认值）：轴线占满整个交叉轴。
2. 项目的属性总结：以下6个属性设置在项目上。（align-self、flex、order）
- align-self：
  属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch；该属性可能取6个值，除了auto，其他都与align-items属性完全一致。auto / flex-start / flex-end / center / baseline / stretch;
- flex：
  属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
- order：
  属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
- flex-grow：
  属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
- flex-shrink：
  flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。
- flex-basis：
  flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
其中  
flex: initial; // 0 1 auto
flex: auto; // 1 1 auto
flex: none; // 0 0 auto
flex: 1 0px; // n等分
#### css中flex布局中 order 有何作用
属性定义Flex布局中子元素的排列顺序，数值越小，排列越靠前，默认为0。
#### css中flex布局中 align-content 与 align-items 有何区别
align-content 作用于纵轴多行元素，一行元素不起作用
align-items 作用于纵轴单行元素
#### css中Flex布局中的 flex-basis 与 width 有何区别
flex-basis用于在flex布局时候给定项目的一个初始值， 默认情况下是auto，也就是说根据容器宽度去自动计算，width是给定项目固定宽度。
当flex布局的主轴是水平方向即flex-direction: row;那么flex-basis设定的就是初始宽度，如果同时存在width，width会覆盖flex-basis属性
当flex布局的主轴是垂直方向即flex-direction: column;那么flex-basis设定的就是初始高度，如果同时存在height，width会覆盖flex-basis属性; demo示例
#### css中line-height 的值分别取 [2, 2em, 200%] 有什么区别?
父元素: fontSize: 18px; lineHeight: 1.5em(27px，150% 同理); ，它的 lineHeight 计算下来为 27px，会被子元素继承
子元素: fontSize: 30px，子元素的 lineHeight 被继承为 27px，出现问题
#### css中某元素的 fontSize: 2rem; lineHeight: 1.5em; 此时 lineHeight 为多少像素
rem是相对长度单位，相对于根元素。 em也是相对长度单位，相对于父元素。 浏览器默认 1rem = 16px 所以font-size : 2rem = 2 _ 16px = 32px line-height: 1.5em ，em相对于父元素的font-size (32px) ==> line-height: 1.5em = 1.5 _ 32 = 48px
#### css中Grid布局如何实现类似 flex: row-reverse
.grid-container {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1rem;
/*direction: ltr;*/
/*direction: rtl;*/
}
#### css中画一个 100x100 的方框，其中文字可以正常换行，文字过多超过方框显示滚动条
主要使用 word-wrap: break-word 或 break-all 和 overflow: scroll 实现
#### css中的响应式设计
1. 什么是响应式：一个网站兼容多个终端而不是为每个终端都定制特定版本
2. 响应式基本原理：基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理
3. 响应式优点：面对不同分辨率设备灵活性强、能够快捷解决多设备显示适应问题。
4. 响应式缺点：兼容各种设备工作量大，效率低下、代码累赘，会出现隐藏无用的元素，加载时间加长、其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果一定程度上改变了网站原有的布局结构，会出现用户混淆的情况。
5. 如何兼容低版本ie：media-queries.js 或 respond.js等
```html
<!--[if lt IE 9]> <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script> <![endif]-->
```
6. 响应式步骤：
- Meta 标签：为了适应屏幕，多数的移动浏览器会把HTML网页缩放到设备屏幕的宽度。你可以使用meta标签的viewport属性来设置。下面的代码告诉浏览器使用设备屏幕宽度作为内容的宽度，并且忽视初始的宽度设置。这段代码写在 <head>里面
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- html结构
- Media Queries:响应式网页设计的关键告诉浏览器如何根据特定的屏幕宽口来加载网页
```css
@media screen and (max-width: 300px) {
    body {
        background-color:lightblue;
    }
}
```
#### css实现3d盒子
transform-style: preserve-3d;
内部实现就是使用transform中的沿着xyz轴旋转，偏移
#### css实现三栏布局
1. 浮动
2. 定位
3. flex
4. table布局
5. grid布局
#### css实现品字
#### css绘制三角形
#### css中实现iframe自适应高
#### css中元素竖向百分比设定是相对于容器的
#### css中全屏滚动
#### css中的媒体查询
#### css中的视差
#### css什么是响应式如何兼容ie
#### css哪些属性脱离文档流
#### css如何修改chrome记住密码后自动填充的黄色背景
#### css手动写动画所需的最小时间间隔
#### css媒体查询media query适配布局方法
#### css选择器有哪些？哪些属性可以继承？优先级算法如何计算
#### css中子元素垂直居中，并且该子元素的长度/宽度为父容器宽度(width)一半的正方形
#### css中如何实现固定长宽比的元素
#### css中如何实现响应式布局大屏幕三等分、中屏幕二等分、小屏幕一等分

### -------css优化------
#### css中js为什么会放在下面，css放在上面
#### css中的style标签写在body后与卸载body前有什么区别
#### css中什么是fouc
#### css中性能方面实践
#### css中让页面的字体变清晰，变细怎么做
#### css优化、提高性能的方法有哪些

### -------css兼容性------
#### css中ie6兼容问题
#### css中overflow scroll不能横向滚动怎么处理
#### css中position:fixed在安卓下无效怎么处理
#### css中怎么让Chrome支持小于12px的文字
#### css中浮动元素引起的问题怎么处理
#### css常见的hack有哪些

### -------css其他------
#### css3的特性
#### css中的bfc
#### css中link与@import
#### css中的优先级
#### css中清除浮动
#### css中脱离文档流
#### css中的图片格式问题
1. jpg一般能够把图片压缩小一点，就是压缩率高；
2. png能够实现图片的透明效果；而jpg透明的部分会是白色的，同时8位的png是不能设置透明度的，只有24位可以；
3. gif一般用来做冻土，比如等待加载的动画图片等；
4. webp Android，iOS支持。客户端里的图片显示都可以考虑webp，体积小了、流量少了、加载快了，图片质量也得到保障（同时肉眼几乎无法看出差异）
5. 转换：
- PNG 转 WebP 的压缩率要高于 PNG 原图压缩率，同样支持有损与无损压缩
- 转换后的 WebP 体积大幅减少，
- 转换后的 WebP 支持 Alpha 透明和 24-bit 颜色数，不存在 PNG8 色彩不够丰富和在浏览器中可能会出现毛边的问题
- JPEG 转 WebP 的效果更佳
#### css中的sprites
1. 定义：CSS Sprites 其实就是把网页中一些背景图片整合到一张图片文件中，称作雪碧图，精灵图
2. 使用：利用 CSS 的”background-image”，”background-repeat”，”background-position” 的组合进行背景定位，background-position 可以用数字能精确的定位出背景图片的位置。
3. 优点：这样可以减少很多图片请求的开销，因为请求耗时比较长
4. 缺点：不好维护
#### css中的雪碧图与base64与图片格式
#### css中预编译器
#### css中在网页中应该使用奇数还是偶数的字体
#### 浏览器是如何解析css的
#### 自定义字体的使用场景
#### 写 CSS 时如何避免命名样式冲突
#### 前端开发中如何进行多主题配置
#### 你做前端有多少时间花在写 css 上
#### 你用 css 实现过什么不错的效果
#### 如何实现一个 loading 动画
#### normalize.css 与 reset.css 又何区别
#### 什么是媒体查询，JS 可以监听媒体查询吗
#### css中如何设置方格背景
#### 如何自定义滚动条的样式
#### 如何使用 CSS 实现网站的暗黑模式 (Dark Mode)
#### 为什么会发生样式抖动
#### css加载会阻塞DOM树的解析和渲染吗
#### 有哪些 css 属性不能展示动画效果
#### css 动画与 js 动画哪个性能更好
#### 有没有使用过 css variable，它解决了哪些问题
#### 谈谈你对 styled-component 的看法
#### 简述下 css specificity
#### css美化checkbox
