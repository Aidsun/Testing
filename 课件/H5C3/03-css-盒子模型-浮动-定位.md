
# CSS三大核心模块

- 盒子模型
- 浮动
- 定位

其余的都是细节。要求大家这三部分，无论如何也要学的非常精通。

所谓盒子模型就是把HTML中所有的元素看作是一个矩形的盒子，也就是一个盛装内容的容器。

每个盒子都由元素的内容（content）、内边距（padding）、边框（border）和外边距（margin）组成。

如下图所示：

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646381583038-3e873f94-a294-42f6-b651-127f79de5000.png#averageHue=%23e1c892&clientId=u65219322-37d5-4&from=paste&height=172&id=ub5f7de11&originHeight=215&originWidth=225&originalType=binary&ratio=1&rotation=0&showTitle=false&size=20830&status=done&style=none&taskId=u30bc6a1a-a9d7-4cf0-9b2e-bad9cd9df88&title=&width=180)

案例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
         /* css reset */
         * {
             padding: 0;
             margin: 0;
            
         }

         .box {
            width: 100px;
             height: 100px;
             background-color: pink;
             border: 10px solid #ccc;
             padding: 80px;
         }

         /* 

         盒子总高度=content width + 2*padding + 2*border 
         盒子总高度=content height + 2*padding + 2*border

         */
    </style>
</head>
<body>
    <div class="box">
        content
    </div>
</body>
</html>
```

盒子模型图如下：

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646381596821-1d3a3cf4-19c3-4ea0-98d2-e548432122ea.png#averageHue=%23e5cfa0&clientId=u65219322-37d5-4&from=paste&height=173&id=u1c2f622f&originHeight=216&originWidth=251&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21211&status=done&style=none&taskId=u83c178ed-7be3-467a-8c34-1dbd40294b6&title=&width=200.8)

```
盒子总高度 = content width + 2*padding + 2*border 
盒子总高度 = content height + 2*padding + 2*border
```

## 盒子边框（border）

参考地址： [https://www.w3school.com.cn/css/css_border.asp](https://www.w3school.com.cn/css/css_border.asp)

语法：

```
/* 设置盒子的四边边框 */
border : border-width || border-style || border-color
```

其中边框风格`border-style`常用的值如下：

- none：没有边框（默认值）
- solid：单实线(最为常用的)
- dashed：虚线
- dotted：点线
- double：双实线

```css
.box {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
```

[详解Border](https://www.runoob.com/css/css-border.html)

## 内边距（padding）

padding属性用于设置边框与内容之间的距离。

- padding-top:上内边距
- padding-right:右内边距
- padding-bottom:下内边距
- padding-left:左内边距

padding设置几个数值表示的意思是不一样的。

| 值的个数 | 含义 |
| --- | --- |
| 1个值 | `padding: 3px;`
 表示上下左右都是3px |
| 2个值 | `padding: 3px 5px;`
表示 上下3px 左右 5px |
| 3个值 | `padding: 3px 5px 10px;`
 表示 上是3px 左右是5px 下是10px |
| 4个值 | `padding: 3px 5px 10px 15px;`
 表示 上3px 右是5px 下10px 左15px （顺时针方向） |


```css
.box {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  padding-top: 50px;
  padding-left: 80px;
}
```

> 注意：设置内边距和边框都会撑大盒子的原本大小,需要减去对应的数值才会保持原大小。


```css
.content {
  /* 内减：减去额外增加的内边距和边框，为了保证盒子的原本宽高大小 */
  width: 64px;
  height: 84px;
  background-color: skyblue;
  border: 2px solid #ccc;
  padding: 6px;
  margin: 10px auto;
}
```

## 盒子的实际总宽度和总高度

```
元素总宽度 = content width + 2*padding + 2*border
元素总高度 = content height + 2*padding + 2*border
```

所以一定要注意： 设置内边距和边框都会撑大盒子的原本大小,需要减去对应的数值才会保持原大小

## box-sizing(css3)

给元素设置一下box-sizing;盒子会自动进行内减。

```css
 .wrap {
            width: 150px;
            height: 180px;
            /* 设置盒子模型自动内减(不需要手动计算) */
            box-sizing: border-box;
            background-color: rgb(127, 202, 97);
            border: 2px solid rgb(29, 82, 150);
            padding: 6px;
            margin: 5px auto;
        }
```

## 外边距（margin）

margin属性用于设置与其他元素的距离。

- margin-top:上外边距
- margin-right:右外边距
- margin-bottom:下外边距
- margin-left:上外边距

同样margin设置几个数值表示的意思是不一样的。取值顺序和padding一致。

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  margin-top: 30px;
  margin-left: 100px;
}
```

## 外边距实现盒子（块元素）水平居中

可以让一个盒子实现水平居中，需要满足一下两个条件：

1. 必须是块级元素。
2. 盒子必须指定了宽度（width）

设置左右的外边距为auto，会把两边的剩余空间进行等分。就可使块级元素水平居中。

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  margin:0 auto; /* 写一个auto也行 */
}
```

## 圆角边框(CSS3)

语法格式：

```
border-radius: 左上角  右上角  右下角  左下角;
```

> 若只写一个值则同时设置四个角。


当一个正方形的盒子，圆角边框设置为自身宽度的一半就是圆形。

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 50%;
}
```

任务：

- 实现圆形

实现圆形：1.宽高一样 2.圆角设置自身宽高的一半（50%）

```css
/* 实现圆形：1.宽高一样 2.圆角设置自身宽高的一半（50%） */
.box {
  width: 100px;   /*  width:50%;相对于父容器的一半*/
  height: 100px;
  background-color: pink;
  margin: 100px auto;
  border-radius: 50%; /* 相对于自身宽度的一半 */
}
```

- 实现学校操场形状
设置为高度的一半。

```css
.box {
  width: 100px;   /*  width:50%;相对于父容器的一半*/
  height: 40px;
  background-color: pink;
  margin: 100px auto;
  border-radius: 20px;

}
```

- 实现三角形
原理： 宽度设置为0，一边设置颜色，其他三遍设置透明色（transparent）

```css
.box {
  width: 0px;
  height: 0px;
  border-width: 2px;
  border-style: solid;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: green;
  border-right-color: transparent;
  /* border-color: hotpink; */
  margin: 50px auto;
}
```

# 浮动(float)

## 文档流(normal flow)

这个单词很多人翻译为 文档流 ， 字面翻译  普通流 或者标准流都可以。

CSS的布局机制有3种：普通流（标准流）、浮动和定位。

html语言当中另外一个相当重要的概念。
标准流（文档流）：默认网页中的元素是按照`从上往下，从左往右`这种默认的排列方式进行布局，我们把这种布局方式称之为是流式布局。也称之为标准流。

三种布局直观表现：

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646381701796-cd2aff91-cfc8-4c39-a5d7-bccb1af3d677.png#averageHue=%233d95df&clientId=u01e58d95-8b40-4&from=paste&height=486&id=uc23cf76d&originHeight=607&originWidth=776&originalType=binary&ratio=1&rotation=0&showTitle=false&size=630525&status=done&style=none&taskId=ua37fb12a-2ceb-453e-b2c2-0bd984afed8&title=&width=620.8)

可见：浮动和定位他们会脱离标准流。

## 浮动(float)

浮动最早是用来实现`图文环绕`的效果，如下所示：

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646381712683-218245e0-009d-41c9-9b88-b52977285e9c.png#averageHue=%23dcdbdb&clientId=u01e58d95-8b40-4&from=paste&height=337&id=ubf735e78&originHeight=421&originWidth=896&originalType=binary&ratio=1&rotation=0&showTitle=false&size=337893&status=done&style=none&taskId=u6e547b9f-c269-4c86-9887-dfb2e3e1747&title=&width=716.8)

但是现在已经很少有这种排版效果了。

## 浮动作用

浮动的目的就是为了让多个盒子在**同一行**上显示。利用此特性来实现页面的特殊布局。

项目中常用的两种场景：

1. 多个元素在同一行。
2. 一个靠左对齐,一个靠右对齐

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646381725226-08d86f94-862f-4d89-810f-0366a3ef8c78.png#averageHue=%2381fe02&clientId=u01e58d95-8b40-4&from=paste&height=167&id=u10f1a983&originHeight=209&originWidth=1073&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12724&status=done&style=none&taskId=u46662361-6498-4103-a318-d5ae8359e81&title=&width=858.4)

## 什么是浮动？

元素的浮动是指设置了浮动属性的元素会`脱离标准流`的控制，移动到其父元素中指定位置的过程。

在CSS中，通过`float`属性来定义浮动，其基本语法格式如下：

```css

.box {
    float:left; /* 左浮动 */
}
```
| 属性值 | 描述 |
| --- | --- |
| left | 元素向父元素左浮动 |
| right | 元素向父元素右浮动 |
| none | 元素不浮动（默认值） |




## 浮动特点

-  浮动特点一：
元素一旦浮动后就会脱离标准流，朝着向左或向右方向移动，直到自己的边界紧贴着父元素或其他浮动元素的边界为止。  
> 元素一旦脱离标准流后就不在占据原来位置，其下面的元素会顶上来。且浮动元素的模式会发生转换，会转成行内块元素`inline-block`

-  浮动特点二：
浮动元素不能与行内、行内块元素、文本内容层叠,行内、行内块元素、文本内容将会被浮动元素推出。 

## 通栏平均分布型（使用最多）

比如小米    [ 小米官网 ](http://www.mi.com) 、   [ 锤子官网 ](http://www.smartisan.com/)

通栏：宽度是整个屏幕的宽度：

版心：网页的中心内容主体的部分，且都是水平居中

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646381747740-d200eeef-3bba-4f44-8d81-04b49278dd84.png#averageHue=%23f2f3f3&clientId=u01e58d95-8b40-4&from=paste&height=584&id=u7bb0e53f&originHeight=730&originWidth=970&originalType=binary&ratio=1&rotation=0&showTitle=false&size=74797&status=done&style=none&taskId=u89fac8e1-21b2-44a2-b2dc-2c2af4829b0&title=&width=776)

## 清除浮动（浮动带来的问题）

## 为什么要清除浮动

浮动本质是用来做一些文字混排效果的，其作用可以让多个元素在一行显示。

但是用浮动布局有时会出现一些问题！ 但是，你不能说浮动不好 。

由于浮动元素不再占用标准文档流的位置，所以它会对后面的元素排版产生影响，为了解决这些问题，此时就需要在该元素中清除浮动。

准确地说，并不是清除浮动，而是**清除浮动后造成的影响**

## 清除浮动本质

清除浮动主要为了解决父元素因为子元素浮动引起父元素**高度为0 **的问题。

如果两个盒子设置浮动以后，他们在撑起外层div 的高度就会消失， 从而导致父盒子变成无高度

**子元素浮动为什么会导致父容器高度为0的呢：**

因为子元素浮动之后，会脱离文档流，不占空间，父容器就检测不到它的高度，也就无法撑开父容器的高度，所以高度为0px

1. **如下，我给父盒子设置一个boder，内部放两个盒子，未给他们设置浮动，则他们会默认撑开父盒子**

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646381845267-7901f805-e123-472c-92c7-f9dac94448f2.png#averageHue=%2366aff7&clientId=uc9d8d3e6-1704-4&from=paste&height=221&id=u70ad2565&originHeight=276&originWidth=939&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51509&status=done&style=none&taskId=u37b99dc9-b1bc-4fc3-a36c-f60fd7314d7&title=&width=751.2)

2. **当给两个子盒子加上float属性的时候 **，然后父盒子因为没设置高度，变成一条线，下面的盒子就会正常文档流顶上来

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646381862043-cf9d91b0-44f6-4ce0-b0e8-1550618c3565.png#averageHue=%2374eb9a&clientId=uc9d8d3e6-1704-4&from=paste&height=199&id=uc65eae0e&originHeight=249&originWidth=1160&originalType=binary&ratio=1&rotation=0&showTitle=false&size=92324&status=done&style=none&taskId=u234d1901-b2a2-4f88-a21b-453e1b43511&title=&width=928)
总结一下：

当父元素不给高度的时候，内部元素不浮动时会撑开父盒子，而浮动的时候，父元素变成一条线。

造成原因：元素浮动时候会脱离文档流，那么原来在标准流中的父盒子就检测不到浮动元素的高度。所以父盒子就没有高度，这种现象叫做浮动造成父盒子高度坍塌的现象。

## 清除浮动的方法

记住，清除浮动就是把浮动的盒子圈到里面，让父盒子闭合出口和入口不让他们出来影响其他元素。

在CSS中，clear属性用于清除浮动，其基本语法格式如下：

```
选择器{clear:属性值;}
```
| 属性值 | 描述 |
| --- | --- |
| left | 不允许左侧有浮动元素（清除左侧浮动的影响） |
| right | 不允许右侧有浮动元素（清除右侧浮动的影响） |
| both | 同时清除左右两侧浮动的影响 |


### 增加标签法

是W3C推荐的做法是通过在浮动元素末尾添加一个空的标签例如`<div style=”clear:both”></div>`，或则其他标签br等亦可

```html
 .clear{
      	clear:both;
  }
<body>
    <div class="father clearfix">
        <div class="son1">son1</div>
        <div class="son2">son2</div>
        <div class="clear">额外标签法</div>
    </div>
    <div class="footer"></div>
</body>
```

优点：通俗易懂，方便

缺点：添加无意义标签，语义化差

不建议使用

### 父级添加overflow属性（父元素添加overflow:hidden）

通过触发BFC方式，实现清除浮动 。  [快速理解BFC](https://ww24kobe.github.io/htmlcss/%E5%BF%AB%E9%80%9F%E7%90%86%E8%A7%A3BFC.html)

```css
 .fahter{
      	width: 400px;
     	border: 1px solid red;
        overflow: hidden;
  }
```

优点：代码简洁

缺点：内容增多的时候容易造成不会自动换行导致内容被隐藏掉，无法显示要溢出的元素

### 使用after伪元素清除浮动[推荐使用]

```html
<style>
    .clearfix:after{ /*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
 	    clear:both;
        height: 0;   /*解决浏览器兼容问题*/
        visibility: hidden; /*解决浏览器兼容问题*/
    }
    .clearfix{
        *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
    }
</style>

<body>
    <div class="father clearfix">
        <div class="son1">son1</div>
        <div class="son2">son2</div>
    </div>
    <div class="footer"></div>
</body>
```

优点：符合闭合浮动思想，结构语义化正确

缺点：ie6-7不支持伪元素：after，使用*zoom:1触发hasLayout.

### 使用before和after双伪元素清除浮动[推荐使用]

```html

<style>
.clearfix:after,.clearfix:before{
        content: "";
        display: table;  /*触发bfc*/
    }
.clearfix:after{
	clear: both;
}
.clearfix{
	*zoom: 1;
}
</style>

<body>
    <div class="fahter clearfix">
        <div class="son1">son1</div>
        <div class="son2">son2</div>
    </div>
    <div class="footer"></div>
</body>
```

优点：代码更简洁

缺点：用***zoom:1**触发hasLayout.仅有IE6识别此语法
# 定位(position)

如果，说浮动， 关键在一个 “浮” 字上面， 那么 我们的定位，关键在于一个 “位” 上。。

## 为什么要用定位？

那么定位最长应用的场景在哪里呢？   来看几幅图片，你一定会有感悟！

- 两个箭头压在轮播图上：

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646382061056-75bb85d5-cc23-4edd-832d-c39c54494255.png#averageHue=%23a8afe7&clientId=u89a44080-1372-4&from=paste&height=277&id=uf5b009e0&originHeight=346&originWidth=650&originalType=binary&ratio=1&rotation=0&showTitle=false&size=272592&status=done&style=none&taskId=u8cbd15c7-94d6-4e76-a1fc-515b98da162&title=&width=520)

- 播放按钮图片压在视频封面上

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646382068290-6dd2efa9-0624-4a7b-91a5-f792577a7c23.png#averageHue=%235a594f&clientId=u89a44080-1372-4&from=paste&height=240&id=u3777dc6c&originHeight=300&originWidth=371&originalType=binary&ratio=1&rotation=0&showTitle=false&size=67306&status=done&style=none&taskId=u2439c223-690e-4a83-99f3-2aeb62f62ea&title=&width=296.8)

- 京东网站固定在浏览器左侧的菜单

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646382078910-a7eaf881-dc15-4c12-8d32-e5d3c70f7a0c.png#averageHue=%23f3f3f3&clientId=u89a44080-1372-4&from=paste&height=387&id=u8df99263&originHeight=484&originWidth=258&originalType=binary&ratio=1&rotation=0&showTitle=false&size=18249&status=done&style=none&taskId=u5cd269f9-8b88-4f03-900d-ae8b4597fbd&title=&width=206.4)

以上的实现，如果用标准流或者浮动，实现会比较复杂或者难以实现，此时我们用定位来做就非常合适！

## 什么时候用定位

两个场景：

- 元素压在某个元素的上面
- 元素固定在浏览器的某个地方

## 元素的定位属性

元素的定位属性主要包括`定位模式`和`偏移量`两部分。

1、定位模式

在CSS中，position属性用于定义元素的定位模式，其基本语法格式如下：

选择器{position:属性值;}

position属性的常用值

| 值 | 描述 |
| --- | --- |
| static | 静态定位（标准流中默认定位方式） |
| relative | 相对定位，相对于原来在标准流的位置进行定位 |
| absolute | 绝对定位，相对于其上一个已经定位的祖先父元素进行定位 |
| fixed | 固定定位，相对于浏览器窗口进行定位 |


后面给元素定位都要结合：`定位模式和偏移量`

2、偏移量

| 偏移量属性 | 描述 |
| --- | --- |
| top | 距离顶端偏移量 |
| bottom | 距离底部偏移量 |
| left | 距离左侧偏移量 |
| right | 距离右侧偏移量 |


基本语法：

```
.box {
    position: relative: /* 相对定位 */
    top: 30px;
    left: 100px;
}
```

## 静态定位(static)

静态定位：一个元素的静态定位可以简单理解为这个元素在普通文档流中的位置，就是这个元素的`position`为`static`，`float`为`none`时，元素在文档中所处的位置。

在静态定位模式下，无法通过偏移量属性（top、bottom、left或right）来改变元素的位置。

## 相对定位relative(自恋型)

相对定位：是将元素相对于它在原来标准流中的位置进行定位。当position属性的取值为relative时，可以将元素定位于相对位置,其位置是由`top、` `right` 、`bottom`、 `left`四个偏移量属性决定的

基本语法：

```
.box1 {
    width: 200px;
    height: 200px;
    position: relative: /* 相对定位 */
    top: 30px;
    left: 30px;
    background-color: blue;
}
```

**特点：**

- 相对于自己在原来标准流中的位置进行定位，以自己的左上角为基准点进行移动。
- 相对定位不脱离标准流，**继续占着原来的位置**。它后面的元素仍以标准流方式对待它。

## 绝对定位absolute (拼爹型)

绝对定位：当position属性的取值为absolute时，可以将元素的定位模式设置为绝对定位。

其位置是由`top`、 `right`、 `bottom`、 `left`四个偏移量属性决定的

基本语法：

```
.box1 {
    width: 200px;
    height: 200px;
    position: absolute: /* 绝对定位 */
    top: 30px;
    left: 30px;
    background-color: blue;
}
```

**特点：**

-  绝对定位元素是相对于其最近的祖先元素且`position`属性为`relative`、`absolute`或`fixed`的元素进行定位，若不满足，则相对于`HTML文档`（即HTML元素）进行定位。 
-  绝对定位会完全脱离标准流，不再占原来的位置, 
-  绝对定位的元素会自动转换成行内块元素。 

> 思考 脱离标准流会有什么影响？

### 子绝父相【相对不脱流，绝对靠近祖】

相对定位会根据元素在正常文档流中的位置进行定位调整，但不会脱离文档流。也就是说，相对定位不会影响其他元素的布局。绝对定位会将元素脱离正常文档流，并相对于其最近的已定位祖先元素进行定位。如果没有已定位的祖先元素，则相对于文档的初始包含块进行定位。

这个“子绝父相”太重要了，是我们学习定位的口诀，时时刻刻记住的。

这句话的意思是 子元素是绝对定位的话， 父元素要用相对定位。

原因：

- 子绝：子元素绝对定位，基于父元素定位，要压在父元素上面。
- 父相：父元素相对定位，要保留在原来标准流中的位置。

这就是子绝父相的由来。

> 有些场景子绝父绝也是可以的，


## 绝对定位的盒子水平/垂直居中

定位元素水平垂直居中

- 垂直居中： top：50%， margin-top:自身负一半
- 水平居中： left：50%， margin-left:自身负一半

注意：

> margin:auto: 仅针对标准流中的块元素水平居中

> text-align: 仅针对标准流中的文本、行内、行内块元素水平居中。

## 固定定位fixed(认死理型)

固定定位：始终相对于浏览器窗口进行定位。

不管浏览器滚动条如何滚动也不管浏览器窗口的大小如何变化，该元素都会始终显示在浏览器窗口的固定位置。

**特点：**

- 固定定位会完全脱离标准流，不再占原来的位置,
- 固定定位的元素会自动转换成行内块元素。

基本语法:

```
.box1 {
    width: 200px;
    height: 200px;
    position: fixed: /* 绝对定位 */
    right: 50px;
    bottom: 200px;
    background-color: blue;
}
```

> 注意：ie6等低版本浏览器不支持固定定位。


## 定位元素的层叠顺序（z-index）

当对多个元素同时设置定位时，定位元素之间有可能会发生重叠。如下：

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646382102215-6e1b4a09-d472-4928-869a-7cac7bfac905.png#averageHue=%23cacaca&clientId=u89a44080-1372-4&from=paste&height=258&id=u4c7dc678&originHeight=322&originWidth=470&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12499&status=done&style=none&taskId=udba00b24-6608-4960-9acb-24eec2240a2&title=&width=376)

在CSS中，要想调整重叠定位元素的堆叠顺序，可以对定位元素应用z-index层叠等级属性，其取值可为正整数、负整数和0。 值越大就越居上。

基本语法：

```
.box1 {
    width: 200px;
    height: 200px;
    position: absolute: /* 绝对定位 */
    top: 30px;
    left: 30px;
    background-color: blue;
    z-index:1;
}


.box2 {
    position: absolute: /* 绝对定位 */
    width: 200px;
    height: 200px;
    background-color: pink;
    top: 80px;
    left: 80px;
    z-index:2;
}
```

box2的z-index的值大于box1，所以会压在box1上面

注意：

1. z-index的默认属性值是0，取值越大，定位元素在层叠元素中越居上。
2. 如果取值相同，则根据书写顺序，后来居上。
3. 后面数字一定不能加单位。
4. 只有相对定位，绝对定位，固定定位有此属性，其余标准流，浮动，静态定位都无此属性。

## 四种定位总结
| 定位模式 | 是否脱标占有位置 | 是否可以使用偏移量 | 说明 |
| --- | --- | --- | --- |
| 静态 static | 不脱标，正常模式 | 不可以 | 默认模式（标准流） |
| 相对定位relative | 不脱标，占有位置 | 可以 | 相对自身在标准流中的位置进行定位（自恋型） |
| 绝对定位absolute | 完全脱标，不占有位置，自动转成行内块元素 | 可以 | 相对于具有定位属性的祖先元素进行定位（拼爹型） |
| 固定定位fixed | 完全脱标，不占有位置，自动转成行内块元素 | 可以 | 相对于浏览器进行定位（认死理型） |


## 粘性定位

粘性定位可以被认为是相对定位和固定定位的混合。

默认是相对在原来标准流中的位置，当滚动到浏览器顶部时，会吸附在顶部，变成固定定位。

```
.box { 
    position: sticky; 
    top: 10px; 
}
```

