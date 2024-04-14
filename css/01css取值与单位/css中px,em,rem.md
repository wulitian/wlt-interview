# css中px,em,rem

#### 精简回答：

1. ie8及以下不支持em，与rem

2. rem 相对于根html的字体大小，找到设计图宽度，与当前字体的比例动态设置html的font-size,如果font-size:10px,1rem=10px

3. em 相对于父元素font-size大小，浏览器默认字体大小为16px，可以设置font-size:62.5%便于运算，10px=1em
