# css中居中

1. 父position:relative 子元素position:absolute, left:50% top:50%;margin-top margin-left 指定为负数绝对值为自身宽度一半(有宽度)

2. 父position:relative 子元素position:absolute, margin: auto（有宽度）left,right,bottom,top均为0

3. 父position:relative 子元素position:absolute, left:50% top:50%;transform:translateX(-50%)transform:translateY(-50%)

4. 父display:flex 子元素margin: 0 auto

5. 父设置三个属性 display:flex； align-items: center; justify-content: center;

