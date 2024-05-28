## css

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
flex布局实现
#### css绘制三角形
```css
    .box{
        width: 0;
        height: 0;
        border-top: 100px solid transparent;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-bottom: 100px solid red;
    }
```
#### css中实现iframe自适应高
添加到iframe的load事件中
```js
function adjustIframe(){
    var ifm= document.getElementById("bi_iframe");
    ifm.height=document.documentElement.clientHeight;
    ifm.width=document.documentElement.clientWidth;
}
```
#### css中元素竖向百分比设定是相对于容器的
1. 元素竖向的百分比设定是相对于容器的宽度，而不是高度；
2. 对于一些表示竖向距离的属性，例如 padding-top , padding-bottom , margin-top , margin-bottom 等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。
#### css中全屏滚动
/* 全屏滚动父属性 */
scroll-snap-type: y mandatory;
/* 全屏滚动子属性 */
scroll-snap-align: start;
#### css中的媒体查询
| 特性名                                                       | 值                                                    | 应用场景                                                     |
| ------------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------ |
| width min-width max-width                                    | 显示区域的宽度（对打印机而言是打印表面）              | 改变布局以适应非常窄（如手机）或非常宽的显示器。             |
| height min-height max-height                                 | 显示区域的高度                                        | 改变布局以适应非常长或非常短的显示器                         |
| device-width min-device-width max-device-width               | 当前计算机或设备屏幕的宽度（或打印输出时纸面的宽度）  | 根据不同设备（如手机）调整布局                               |
| device-height min-device-height max-device-height            | 屏幕或纸面的高度                                      | 根据不同设备（如手机）调整布局                               |
| orientation                                                  | landscape（横向）或portrait（纵向）                   | 根据设备的朝向调整布局                                       |
| device-aspect-ratio min-device-aspect-ratio max-device-aspect-ratio | 显示区域的宽高比（1/1是正方形）                       | 根据窗口形状调整样式（问题可能比较复杂）                     |
| color min-color max-color                                    | 屏幕颜色的位深（1位表示黑白，目前主流显示器都是24位） | 检查是否支持彩色输出（比如是不是黑白打印）， 或者支持的颜色数量 |

1. 媒体查询常用属性:max-device-width：用于创建手机版网站,max-width：用于针对窗口宽度设定不同的样式orientation：用于根据平板电脑或iPad的横向或者竖向来改变布局

2. 媒体查询高级条件:

- 使用 and 关键字拼接媒体查询块
```
/** 正常样式 **/
@media (min-width: 600px) and (max-width: 700px) {
    /** 窗口宽度在600-700像素的样式 **/
}
@media (min-width: 500px) and (max-width:600px) {
    /** 窗口宽度在500-600像素的样式 **/
}
@media (max-width: 500px) {
    /** 窗口宽度小于500像素的样式 **/
}
```
- 使用 not 关键字（下面这个功能效果与上面那个一样）
```
/** 正常样式 **/
@media (not max-width: 600px) and (max-width: 700px) {
    /** 窗口宽度在600-700像素的样式 **/
}
 
@media (not max-width: 500px) and (max-width: 600px) {
    /** 窗口宽度在500-600像素的样式 **/
}
 
@media (max-width: 500px) {
    /** 窗口宽度小于500像素的样式 **/
}
```
- 替换整个样式表
```
<head>
  <link rel="stylesheet" media="(min-width: 568.01px)" href="hangge.css">
  <link rel="stylesheet" media="(max-width: 568px)" href="hangge_small.css">
<!--[if lt IE 9]>
    <link rel="stylesheet" href="hangge.css">
  <![endif]-->
</head>
```
- 识别特定的移动设备
  使用 max-device-width 可以区别普通计算机和移动设备。根据经验，将 max-device-width 设置为568像素就能够涵盖目前的iPhone和Android手机（不管横向还是竖向）：注意：对于高分辨率屏幕的手机上面规则也是适用的，这是由于高分屏手机引入像素比（pixel ratio）。以iPhone5为例，虽然它的物理像素是：640像素*1136像素，但它的像素比是2（两个物理像素对应一个CSS像素）。因此其声明的CSS像素是：320像素*568像素。
```
<link rel="stylesheet" media="(max-device-width: 568px)" href="hangge_mpbile.css">
```
- 检测平板
  对于iPad等平板，用户经常会改变方向。改变方向虽然会改变 max-width，但不会改变 max-device-width。 无论竖向还是横向，iPad始终报告自己的设备宽度为768像素。所以我们要组合使用 max-device-width 和 orientation 属性，以便区别iPad的方向应用不同的样式：

```
<link rel="stylesheet"
    media="(max-device-width: 768px) and (orientation: portrait)"
    href="iPad_portrait.css">
<link rel="stylesheet"
    media="(max-device-width: 768px) and (orientation: landscape)"
    href="iPad_landscape.css">
```
#### css中的视差
1. background-attachment: fixed;
#### css哪些属性脱离文档流
1. 文档流定义：将窗口自上而下分成一行一行，并在每行中按从左至右依次排放元素，称为文档流，也称为普通流
2. 脱离文档流：文档原本占据文档流的位置会被后面元素补充
3. 脱离文档流的方式：定位浮动
- 定位:position:absolute,position:fixed
- 浮动：float也脱离文档流
#### css如何修改chrome记住密码后自动填充的黄色背景
1. chrome表单自动填充后，input文本框的背景会变成黄色的，通过审查元素可以看到这是由于chrome会默认给自动填充的input表单加上input:-webkit-autofill私有属性，然后对其赋予以下样式：
```css
input:-webkit-autofill {
    background-color: #FAFFBD;
    background-image: none;
    color: #000;
}
```

2. input文本框是纯色背景的:可以对input:-webkit-autofill使用足够大的纯色内阴影来覆盖input输入框的黄色背景,如果你有使用圆角等属性，或者发现输入框的长度高度不太对，可以对其进行调整，除了chrome默认定义的background-color，background-image，color不能用!important提升其优先级以外，
```css
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset;
        border: 1px solid #CCC!important;
        height: 27px!important;
        line-height: 27px!important;
        border-radius: 0 4px 4px 0;
    }
```
3. input文本框是使用图片背景的:只能取消自动填写功能(在form标签上直接关闭了表单的自动填充功能：autocomplete=“off”。或者通过js)
```js
$(function() {
      if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
        $(window).load(function(){
          $('ul input:not(input[type=submit])').each(function(){
            var outHtml = this.outerHTML;
            $(this).append(outHtml);
          });
        });
      }
    });
```
#### css手动写动画所需的最小时间间隔
多数显示器默认频率是 60Hz ，即 1 秒刷新 60 次，所以理论上最⼩间隔为1⁄60*1000ms ＝ 16.7ms
#### css选择器有哪些？哪些属性可以继承？优先级算法如何计算
1. 选择器
- id选择器
- 类选择器
- 标签选择器
- 相邻选择器
- 子代选择器
- 后代选择器
- 通配符选择器
- 属性选择器
- 伪类选择器
2. 可继承
- font-size
- font-family
- color
3. 不可继承
- border
- padding
- margin
- width
- height
4. 优先级算法
- 优先级就近原则，样式定义最近者为准;
- 载入样式以最后载入的定位为准;
- 优先级为: 从样式选择器看权重优先级：important > 内嵌样式 > ID > 类 > 标签 | 伪类 | 属性选择 > 伪对象 > 继承 > 通配符；
5. css3新增伪类
- p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
- p:last-of-type 选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
- p:only-of-type 选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
- p:only-child 选择属于其父元素的唯一子元素的每个 <p> 元素。
- p:nth-child(2) 选择属于其父元素的第二个子元素的每个 <p> 元素。
- :enabled :disabled 控制表单控件的禁用状态。
- :checked 单选框或复选框被选中。
#### css中如何实现固定长宽比的元素
1. width: 10px; aspect-ratio: 1;
2. 通过padding+display:inline-block设置缺点没头content的情况下才成比例
#### css中如何实现响应式布局大屏幕三等分、中屏幕二等分、小屏幕一等分
1. 使用 Grid 布局可以轻松解决这个问题，如若使用其它方案，控制好等分的同时再控制好间距也是一个十分头疼的问题:
grid-template-columns: 控制等分
gap: 控制间隙
```css
@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
 
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
 
.container {
  display: grid;
}
 
.conainer {
  gap: 1rem;
}
```
2. css中的bootstrap的框架中都支持这种设置，栅格系统配合上媒体查询可以实现
3. 终极解决方案
```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
/*
repeat: 用以 N 整分
auto-fill：表示自动填充
minmx: 即书面意思，最小宽度为 300px
*/
```

### -------css优化------
#### css中js为什么会放在下面，css放在上面
1. 浏览器从上到下依次解析html文档。
2. 将 css 文件放到头部， css 文件可以先加载。避免先加载 body 内容，导致页面一开始样式错乱，然后闪烁。
3. 将 javascript 文件放到 head 里面，就意味着必须等到所有的 javascript 代码都被 下载、解析和执行完成 之后才开始呈现页面内容。这样就会造成呈现页面时出现明显的延迟，窗口一片空白,为避免这样的问题一般将全部 javascript 文件放到 body 元素中页面内容的后面
#### css中的style标签写在body后与写在body前有什么区别
1. 页面加载自上而下 当然是先加载样式；
2. 如果放在body后，会出现文档样式暂时失效的现象；
#### css中什么是fouc
1. 文档短暂失效，在引用文档时方法不当，位置不对，会导致某些页面在ie下出现奇怪的现象，已无样式内容瞬间是闪动
2. 原因：使用了@important,将样式表放在了页面底部，样式表放在了html结构不同的位置了
3. 解决办法：link标签并放在head中
#### css中性能方面实践
1. css 压缩与合并、 Gzip 压缩
2. css ⽂件放在 head ⾥、不要⽤ @import
3. 尽量⽤缩写、避免⽤滤镜、合理使⽤选择器
#### css中让页面的字体变清晰，变细怎么做
1.CSS3里面加入了一个-webkit-font-smoothing属性。这个属性可以使页面上的字体抗锯齿,使用后字体看起来会更清晰舒服。加上之后就顿时感觉页面小清晰了。
- 为了对比明显先将-webkit-font-smoothing设置为none，非常模糊。
- 将-webkit-font-smoothing:antialiased，变得非常平滑，效果非常不错。
- 常用三个属性：none | subpixel-antialiased | antialiased
#### css优化、提高性能的方法有哪些
1. 加载性能，选择器性能，渲染性能，可维护性、健壮性
2. 修复解析错误
3. 避免使用多类选择符
4. IE6以及更古老的浏览器对类似多类选择器解析不正确
5. 移除空css
6. 去除空css规则
7. 尽量不用太多的web字体
8. 不声明过多的font-size
9. 不在选择符中使用id
10. 尽量考虑样式重用性
11. 不给h1-h6设置过多样式
12. 单位值为0不设置单位
13. 浏览器前缀在前，标准样式在后

### -------css兼容性------
#### css中ie6兼容问题
1. <!DOCTYPE HTML>文档类型的声明。 
- 产生条件：IE6浏览器，当我们没有书写这个文档声明的时候，会触发IE6浏览器的怪异解析现象
- 解决办法：书写文档声明
2. 不同浏览器当中，很多的标签的默认样式不同，如默认的外部丁内补丁
- 产生条件：不同浏览器
- 解决办法：利用CSS reset文件进行样式的清除，然后再根据需要进行设置
3. 横向双倍外边距
- 产生条件：在IE6中块元素浮动后，会出现横向双倍margin现象
- 解决办法： 在float标签的样式控制中加入display：inline
4. 默认行高
- 产生条件：IE6、IE7、遨游浏览器；设置的文字高度超出盒模型内容区域设置的高度
- 解决办法：给超出高度的标签设置overflow：hidden；或者将文字的行高line-height设置为小于块的高度
5. img外部的border
- 产生条件：img外部有a标签，即img标签有链接时
- 解决办法：设置img边框border:0
6. 图片默认有间距
- 产生条件：img标签（每个img之后敲了回车）
- 解决办法：为img设置float的浮动布局方式
7. 经典3像素bug
- 产生条件：IE6浏览器，浮动块元素与未浮动块元素处于同一行，有默认的3px间距
- 解决办法：设置非浮动元素浮动
8. a标签hover不适用于所有标签
- 产生条件：IE6浏览器中hover只支持a标签的使用，不支持一切其它标签使用
- 解决办法：合理用a标签嵌套其他行内标签或者用javascript模拟a的hover效果
9. table标签当中border-color属性设置无效
- 产生条件：IE6中table设置属性border-color无效
- 解决办法：运用CSS样式进行控制，而不是使用属性进行样式的处理
10. png格式图片
- 产生条件：IE6浏览器，不支持透明
- 解决办法：使用javascript进行处理；或者使用gif、jpg图像替代掉png图片的使用，png8的模式可以解决透明和非透明，不能解决半透明
11. 透明rgba与opacity
- 产生条件：IE6不支持此两种透明的设置方法；
- 解决办法：使用IE6当中的滤镜filter替代掉，如：opacity:0.6;filter:alpha(opacity=60)。
12.子选择器在IE6中不能使用
- 产生条件：IE6浏览器，使用E>F子选择器；
- 解决办法：采用其他选择器或者采用后代选择器进行控制，如：div p{margin:10px;} div p p{margin:0;}替代掉 div>p{margin:10px;}。
13.不支持最大最小宽高
- 产生条件：IE6浏览器，标签的最低高度/宽度设置（min/max-height）
- 解决办法：为IE6单独设置hack，即_height:最小高度值；_width：最小宽度值（对于IE6，当实际宽高超出定义的宽高时，元素会自动调整宽高）。对于最大高度和最大宽度，没有必要设置兼容，当前对于开发者来说，只需要保证IE6下正常显示即可，无需在它身上花费太多功夫。
14. 纵向居中，IE6不支持display:table-cell
- 产生条件：IE6浏览器，设置一个元素在另一个元素中垂直方向上居中对齐，不能够支持以单元格的方式来显示元素；
- 解决办法：如果是单行文本，采用line-height和height的配合使得文本垂直居中，如果中间是其他元素或者多行文本，采用其他方法进行居中处理，处理方法有多种。
15. input 聚焦框颜色与样式不同
- 产生条件：各个浏览器表现不同；
- 处理方法：使用outline:none，清除默认样式之后再统一设置。
16. 鼠标移上小手效果
- 产生条件：IE6，cursor:hand ：IE完全支持。但是在firefox是不支持的，没有效果。cursor:pointer ：是CSS2.0的标准。所以firefox是支持的，但是IE5.0既之前版本不支持。IE6开始支持。
- 解决办法：设置两种cursor:pointer  cursor:hand。
17.子标签无法撑开父标签的高度
- 产生条件：父标签内部含一个或多个子标签，父标签没有设置浮动，而子标签发生浮动；   处理方法：
- 方法1：在子标签最后添加清除浮动的设置<div style='height:0;clear:both'></div>;
- 方法2：为父标签添加{overflow:hidden;}的样式；
- 方法3：为父标签设置固定高度。
18.li的间距问题
- 产生条件：IE6浏览器 li标签设置宽高，且li里面的元素发生了浮动；
- 处理方法：
- 方法1：li不设置宽高；
- 方法2：li内部的标签不进行浮动。
19.行内元素布局混乱
产生条件：行内元素为包含框时，如果包含框包含的绝对定位元素以百分比为单位进行定位；
处理方法：在行内元素当中加入{zoom:1}，触发IE的hasLayout。
20.多显示一个字
- 产生条件：多个浮动元素中间夹杂HTML注释语句，浮动元素宽度设置为100%；则在下一行多显示一个上一行的最后一个字符；
- 处理方法：果断删掉注释！
21. CSS优先级 ！important
- 产生条件：IE6当中，在同一组CSS属性中，!important不起作用；
- 处理方法：单独设置。
22. img图片下部高度多余5px
- 产生条件：IE6浏览器；
- 处理方法：将图片转化为块级对象，即display:block。
#### css中overflow scroll不能横向滚动怎么处理
1.当设置div宽度，里面的内容不设置宽度时候；使用overflow: scroll是上下滚动，左右不滚动；设置内部的元素p超过父级的宽度；然后设置overflow: scroll是上下和左右都有滚动条；分别设置就可以了overflow-x:scroll;overflow-y:hidden;或者设置overflow后，在单独设置；overflow:auto;overflow-y:hidden;
#### css中position:fixed在安卓下无效怎么处理
1. 对父级元素设置transform: none; 或者display：inline
#### css中怎么让Chrome支持小于12px的文字
1. html, body {-webkit-text-size-adjust: none;}新版的不会有问题
2. 通过scale（0.8）缩放
#### css中浮动元素引起的问题怎么处理
1. 父元素的高度无法被撑开，影响与父元素同级的元素
2. 与浮动元素同级的非浮动元素会跟随其后
3. 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构
#### css常见的hack有哪些
1. 大部分特殊字符IE浏览器支持，其他主流浏览器firefox，chrome，opera，safari不支持 (opera可识别除外)。
2. \9    ：所有IE浏览器都支持
3. _和-  ：仅IE6支持
4. '* '  ：IE6、E7支持
5. \0    ：IE8、IE9支持，opera部分支持
6. \9\0  ：IE8部分支持、IE9支持
7. \0\9  ：IE8、IE9支持
8. IE的if条件
```html
<!–[if IE]> Only IE <![endif]–> //所有的IE可识别 
<!–[if IE 5.0]> Only IE 5.0 <![endif]–> //只有IE5.0可以识别 
<!–[if lt IE 6]> Only IE 6- <![endif]–> //仅IE6可识别 
<!–[if lte IE 7]> Only IE 7/- <![endif]–> //仅IE7可识别 
```

### -------css其他------
#### css3的特性
1. 圆角border-radius，阴影box-shadow
2. 文本特效text-shadow,线性渐变gradient,转换transform
3. 选择器p:first-of-type,p:last-of-type，p:only-of-type，p:only-child，p:nth-child，enable，disable，checked，after，before，伪元素::selection
4. 媒体查询，flex布局
5. border-image
#### css中link与@import
1. link是标签，@import是css提供的
2. 兼容性：link不存在兼容问题，@import兼容性不好ie5以上
3. 性能：link是加载页面时同时加载@import等到页面加载完毕再加载
#### css中的优先级
1. !important,行内style,id,class,标签，*
2. 出现相同优先级：从上到下，从右向左
#### css中脱离文档流
1. 定位position:absolute,fixed
2. 浮动float:right,left
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
1. 雪碧图减少与http的请求
2. base64一半首页背景用base64,不需要请求,消耗cpu性能
3. 图片格式
- jpg一般能够把图片压缩小一点，就是压缩率高；
- png能够实现图片的透明效果；而jpg透明的部分会是白色的，同时8位的png是不能设置透明度的，只有24位可以；
- gif一般用来做冻土，比如等待加载的动画图片等；
- webp Android，iOS支持。客户端里的图片显示都可以考虑webp，体积小了、流量少了、加载快了，图片质量也得到保障（同时肉眼几乎无法看出差异）
4。 图片转换：
- PNG 转 WebP 的压缩率要高于 PNG 原图压缩率，同样支持有损与无损压缩
- 转换后的 WebP 体积大幅减少，
- 转换后的 WebP 支持 Alpha 透明和 24-bit 颜色数，不存在 PNG8 色彩不够丰富和在浏览器中可能会出现毛边的问题
- JPEG 转 WebP 的效果更佳
#### css中预编译器
1. stylus/sass/less区别
1. 均具有“变量”、“混合”、“嵌套”、“继承”、“颜⾊混合”五⼤基本特性
2. Scss 和 LESS 语法较为严谨， LESS 要求⼀定要使⽤⼤括号“{}”， Scss 和 Stylus 可以通过缩进表示层次与嵌套关系
3. Scss ⽆全局变量的概念， LESS 和 Stylus 有类似于其它语⾔的作⽤域概念
4. Sass 是基于 Ruby 语⾔的，⽽ LESS 和 Stylus 可以基于 NodeJS NPM 下载相应库后进⾏编译
#### css中在网页中应该使用奇数还是偶数的字体
1.浏览器的原因：其一是为了迁就ie6，万恶的ie6会把定义为13px的字渲染成14px，还有一个原因是，偶数宽的汉字，比如12px宽的汉字，去掉1像素的间距，填充了像素的实际宽是11px，这样汉字的中竖线左右是平分的，以“中”这个字为例，在12像素时，竖线在中间，左右各5像素，显得均衡。其二像谷歌一些比较流行的浏览器一般会有个默认的最小字体，而且对奇数字体渲染的不太好看
2. 偶数字号相对更容易和 web 设计的其他部分构成比例关系。比如：当我用了 14 px 的正文字号，我可能会在一些地方用 14 × 0.5 = 7 px 的 margin，在另一些地方用 14 × 1.5 = 21 px 的标题字号。Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，而 13、15、17 px 时用的是小一号的点阵（即每个字占的空间大了 1 px，但点阵没变），于是略显稀疏。
#### 浏览器是如何解析css的
1. CSS 选择器解析的时候是从上到下从右往左解析的；浏览器css匹配核心算法的规则是以 right-to-left 方式匹配节点的。
2. 这样做是为了使规则能够快、准、狠地与render树上的节点匹配，通俗地将就是 就近原则。
3. 而如果采取 right-to-left 的方式，那么只要发现最右边选择器不匹配，就可以直接舍弃了，避免了许多无效匹配。
#### 自定义字体的使用场景
1. 宣传/品牌/ banner 等固定⽂案
2. 字体图标
#### 写 CSS 时如何避免命名样式冲突
1. 使用BEM方式
2. scoped css 会对当前组件(scope)下所有元素生成唯一的属性或类名，对所有 CSS 规则将携带唯一属性实现作用域的命名保护
3. module css 会对类名进行 hash 化
#### 你做前端有多少时间花在写 css 上
如果说是开发阶段，我会用 20%-30% 的时间写 CSS。
比你想象的时间更少？
我们开发的是一套内部的管理系统。
其中一个原因是在 UI 设计时遵循了 element-ui 的规范，而开发使用的 UI 框架为 element-ui，因此大多数的界面并不需要写大量的 CSS，因为预设样式已足够使用。
另外一个不得不提的原因是，针对业务场景，我们开发了一批公共组件，剩余的开发部分只需要对组件进行排列组合即可。
最后是，我们的系统对动效的要求不高，不需要花费大量时间去调整动效。
#### normalize.css 与 reset.css 又何区别
normalize.css: 会保留有用的样式，比如 h1 的字体大小
reset.css: 把所有样式都重置，比如 h1、h2、h3 的字体大小都进行了重置，保持了无样式
#### css中如何设置方格背景
background: linear-gradient(90deg, rgba(200, 200, 200, 0.1) 3%, transparent 0),
linear-gradient(rgba(200, 200, 200, 0.1) 3%, transparent 0);
background-size: 20px 20px;
#### 如何自定义滚动条的样式
滚动条相关样式都是伪元素，以 scrollbar 打头，有以下伪元素，从 -webkit 中可见兼容性一般，不过无所谓，现在 Chrome 浏览器占大头

::-webkit-scrollbar — 整个滚动条.
::-webkit-scrollbar-button — 滚动条上的按钮 (上下箭头).
::-webkit-scrollbar-thumb — 滚动条上的滚动滑块.
::-webkit-scrollbar-track — 滚动条轨道.
::-webkit-scrollbar-track-piece — 滚动条没有滑块的轨道部分.
::-webkit-scrollbar-corner — 当同时有垂直滚动条和水平滚动条时交汇的部分.
::-webkit-resizer — 某些元素的corner部分的部分样式(例:textarea的可拖动按钮).
但其实最常用的是以下几个伪元素：滚动条、滑块、轨道，如下滚动条设置成功
::-webkit-scrollbar {
width: 6px;
height: 6px;
}
::-webkit-scrollbar-track {
border-radius: 3px;
background: rgba(0, 0, 0, 0);
box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
}
::-webkit-scrollbar-thumb {
border-radius: 3px;
background: rgba(0, 0, 1, 0);
box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}
#### 如何使用 CSS 实现网站的暗黑模式 (Dark Mode)
@media (prefers-color-scheme: dark) {
:root {
}
}
#### css加载会阻塞DOM树的解析和渲染吗
css加载会直接影响网页的渲染，因为只有css加载完毕，构建完 CSSOM 后，渲染树(Render Tree)才会构建，然后渲染成位图

如果html中有加载script的话，还会间接影响DOM树的解析，因为javascript的下载、解析和执行和阻塞DOM树的解析，而javascript中有可能访问CSSOM，比如 Element.getBoundingClientRect，因此CSSOM构建完毕以后才会开始javascript的执行，间接阻塞dom树的解析
#### 有哪些 css 属性不能展示动画效果
display,height css不能在display:none和display:block之间进行动画，也不能在height:0和height:auto之间进行动画
#### css 动画与 js 动画哪个性能更好
CSS3的动画：
1.在性能上会稍微好一些，浏览器会对CSS3的动画做一些优化（比如专门新建一个图层用来跑动画） 　　
2.代码相对简单 　　
3.在动画控制上不够灵活 　　
4.兼容性不好 　　
5.部分动画功能无法实现（如滚动动画，视差滚动等） 
JavaScript的动画： 正好弥补了css缺点，控制能力很强，可以单帧的控制、变换，同时写得好完全可以兼容IE6，并且功能强大。 
总结： 对于一些复杂控制的动画，使用javascript会比较好。而在实现一些小的交互动效的时候，可以多考虑CSS
#### 谈谈你对 styled-component 的看法
优点： 可维护性高， 易读性好， 可抽象， 可扩展性好。
缺点： runtime 对性能有一定的影响。 不能直接用postcss
生态：twin.macos tailwind
#### css美化checkbox
隐藏check自定义实现，通过伪类checked
#### 如何实现一个 loading 动画
使用svg比较简单
