# 布局整体思路

为了提高网页制作的效率，布局时通常有以下整体思路，具体如下：

1. 确定页面的版心（可视区）。 “版心”(可视区) 是指网页中主体内容所在的区域。一般在浏览器窗口中水平居中显示，常见的宽度值为960px、980px、1000px、1200px等。
2. 把网页分成区块，从上到下依次划分出来，分析区块中的的每一行，以及每个行模块中的列模块。
3. 把相同的区块归类,找共同点，抽离出公共的css,提高复用。
4. 写HTML骨架结构 ，CSS初始化，运用css盒子模型的原理，通过DIV+CSS布局来控制网页的各个模块。

# 元素的显示与隐藏

- display:none;
- visibility:hidden;
- opacity:0;

```
 /* 隐藏  display:none;  不占原来的空间，但结构还在页面中*/
/* display:none; */

/* 隐藏  visibility: hidden;;  占原来的空间，但结构还在页面中*/
/* visibility: hidden; */

/* 设置元素的透明度opacity: .2;：取值0-1之间，0就是完全不可见，但结构还在页面中 */
/*opacity:0;*/
```

# 透明度

- 整个元素透明： opacity: .5;
- 背景或文本颜色透明： rgba(75, 189, 118,0.5);

# overflow 溢出

检索或设置当对象的内容超过其指定高度及宽度时如何管理内容。

visible : 　不剪切内容也不添加滚动条。

auto : 　 超出自动显示滚动条，不超出不显示滚动条 （把内容关起来，溢出显示滚动条）

hidden : 　不显示超过对象尺寸的内容，超出的部分隐藏掉

scroll : 　不管超出内容否，总是显示滚动条

[控制某一边overflow-y](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-y)

> 通过设置给父容器设置overflow:hidden;解决浮动元素父容器高度为0的问题。


# CSS高级技巧

## CSS用户界面样式

所谓的界面样式， 就是更改一些用户操作样式， 比如 更改用户的鼠标样式， 表单轮廓等。但是比如滚动条的样式改动受到了很多浏览器的抵制，因此我们就放弃了。 防止表单域拖拽

### 鼠标样式cursor

设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。

```html
cursor :  default 箭头 | pointer 小手  | move 移动  |  text 文本 | not-allowed 不可用
```

鼠标放元素身上查看效果：

```html
    <style>
    button {
            border:0;
            outline:0;
            width: 100px;
            height: 40px;
            cursor: not-allowed;
            opacity: 0.6;
            border-radius: 4px;
    }
    </style>

    <div style="cursor: default;">default</div>
    <div style="cursor: pointer;">pointer</div>
    <div style="cursor: move;">move</div>
    <div style="cursor: text;">text</div>
    <div style="cursor: not-allowed;">not-allowed</div>

    <button>登录</button>
```

课堂案例：[飞书按钮](https://www.feishu.cn/suite/passport/page/login/?app_id=11&redirect_uri=https%3A%2F%2Fwww.feishu.cn%2F)

### 防止拖拽文本域resize

`resize：none`  属性可以防止 火狐 谷歌等浏览器随意的拖动 文本域。

- 右下角可以拖拽：

```
<textarea></textarea>
```

- 右下角不可以拖拽：

```html
<textarea  style="resize: none;"></textarea>
```

## letter-spacing字间距

letter-spacing属性用于定义字间距，所谓字间距就是`字符与字符`之间的空白。其属性值可为不同单位的数值，允许使用负值，默认为normal。

## word-spacing单词间距

word-spacing属性用于定义`单词与单词`之间的间距，对中文字符无效。和letter-spacing一样，其属性值可为不同单位的数值，允许使用负值，默认为normal。

```css
p {
    letter-spacing: 3px; /* 字间距 */
    word-spacing: 20px; /* 单词间距 */
}
```

## text-indent文本缩进

```css
p {
     text-indent: 20px;
}
```

## white-space 文本不换行

```css
p {
    white-space:nowrap;
}
```

## box-shadow盒子阴影

语法：

```
box-shadow: h-shadow v-shadow blur spread color inset;
```
| 值 | 说明 |
| --- | --- |
| _h-shadow_ | 必需的。水平阴影的位置。允许负值 |
| _v-shadow_ | 必需的。垂直阴影的位置。允许负值 |
| _blur_ | 可选。模糊距离 |
| _spread_ | 可选。阴影的大小 |
| _color_ | 可选。阴影的颜色。默认黑色 |


```
.box{
	width:300px;
	height:100px;
	background-color:yellow;
	box-shadow: 10px 3px 25px 10px #888888;
}
```

参考地址：

- [https://www.runoob.com/cssref/css3-pr-box-shadow.html](https://www.runoob.com/cssref/css3-pr-box-shadow.html)
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

## 文字阴影(CSS3)[了解]

语法：

```css
text-shadow: h-shadow v-shadow blur color;
```
| 值 | 描述 |
| --- | --- |
| _h-shadow_ | 必需。水平阴影的位置。允许负值。 |
| _v-shadow_ | 必需。垂直阴影的位置。允许负值。 |
| _blur_ | 可选。模糊的距离。 |
| _color_ | 可选。阴影的颜色。参阅 [CSS 颜色值](https://www.runoob.com/cssref/css-colors-legal.html)
。 |


## 背景渐变

```
/* 线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向 */
background-image: linear-gradient(to right top,#b7c6cc, #33d433);

/* 径向渐变 */
background-image: radial-gradient(rgb(209, 130, 130) 5%, rgb(114, 187, 114) 15%, rgb(129, 129, 150) 80%);
```

```
.box {
    height: 200px;
    width: 800px
    background-image: linear-gradient(to right, red , yellow);
}
```

```
 <style>
        * {
            padding: 0;
            margin: 0;
        }
        html,body {
            height: 100%;
        }
        body {
            /* 线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向 */
            background-image: linear-gradient(to right top,#b7c6cc, #33d433);

            /* 径向渐变 */
            background-image: radial-gradient(rgb(209, 130, 130) 5%, rgb(114, 187, 114) 15%, rgb(129, 129, 150) 80%);
        }
    </style>
```

# w3c盒子模型和IE盒子模型的区别

- w3c标准盒子模型： content部分不包含了padding和border
- IE盒子模型：总宽度（高度）部分包含了padding和border

可以使用css3属性`box-sizing: border-box` 转化IE盒子模型，会自动进行内减。

# **浏览器前缀**

设置**浏览器前缀**，可以解决部分浏览器不兼容css的问题

| 浏览器前缀 | 浏览器 |
| --- | --- |
| -webkit- | Google Chrome, Safari, Android Browser |
| -moz- | Firefox |
| -o- | Opera |
| -ms- | Internet Explorer, Edge |
| -khtml- | Konqueror |


```css
 box-sizing: border-box;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
-ms-box-sizing: border-box;
```

- [caniuse](https://caniuse.com/): 查看css属性的浏览器兼容性情况

# 溢出的文字省略号显示

## 单行文本溢出显示省略号

必须满足三个条件

```css
/*1.先强制一行内显示文本*/
white-space:nowrap (默认normal自动换行)
/*2.超出的部分隐藏*/
overflow:hidden;
/*3.文字用省略号替代超出的部分*/
text-overflow:ellipsis;
```

## 多行文本溢出显示省略号

多行文本溢出显示省略号,有较大兼容性问题,适合于webKit浏览器或移动端(移动端大部分是webkit内
核)

```css
overflow:hidden;
text-overflow:ellipsis;

/*弹性伸缩盒子模型显示*/
display:-webkit-box;

/*限制在一个块元素显示的文本的行数*/
-webkit-line-clamp:2;

/*设置或检索伸缩盒对象的子元素的排列方式*/
-webkit-box-orient:vertical;
```

可以定义为公共的类，提高复用性

```
 /* 两行显示省略号 */
.text-ellipsisl2{
    overflow:hidden;
    text-overflow:ellipsis;

    /*弹性伸缩盒子模型显示*/
    display:-webkit-box;

    /*限制在一个块元素显示的文本的行数*/
    -webkit-line-clamp:2;

    /*设置或检索伸缩盒对象的子元素的排列方式*/
    -webkit-box-orient:vertical;
}

/* 单行显示省略号 */
.text-ellipsisl1{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
```

# [CSS行高（line-height）及文本垂直居中原理](https://segmentfault.com/a/1190000005122321)

-  在浏览器中，会将给每一段文本生成一个行框，行框的高度就是行高。行框由上间距、文本高度（font-size）、下间距组成，且上间距的距离与下间距的距离是相等的。所以文字默认在这一行中是垂直居中的。
所以，height = line-height时，可实现单行文本垂直居中 
-  且行框默认有四条线，顶线、中线、基线、底线。默认元素的高度就是由文本的行高给撑起来的。行高也可以说是上一行基线到下一行基线的距离 
-  block box：块盒子。如div 
-  line box: 行盒子。如span 

盒子的高度会自动被子内容撑大，是因为子内容的行高`line-height`把父容器给撑开了。

文本之间默认是以`基线`对齐

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646382294873-4e3f3bcf-e2cc-4057-8bbb-644ba2aad66a.png#averageHue=%23bcbebb&clientId=u6795c7f5-bfc5-4&from=paste&height=262&id=ue12f001c&originHeight=327&originWidth=842&originalType=binary&ratio=1&rotation=0&showTitle=false&size=88166&status=done&style=none&taskId=ufedde2ef-f4e1-4497-90ad-80370dc2839&title=&width=673.6)

# vertical-align属性应用

CSS中的`vertical-align`属性使用场景： 经常用于设置图片或者表单（行内块元素）和文字垂直对齐。

> 官方解释： 用于设置一个元素的垂直对齐方式，但是它只针对于行内元素或者行内块元素有效


语法：

```
vertical-align: baseline | top | middle |bottom
```
| 值 | 描述 |
| --- | --- |
| baseline | 默认。默认基线对齐。 |
| top | 图片与元素顶线对齐 |
| middle | 图片与元素中线对齐 |
| bottom | 图片与元素底线对齐 |


> 注意： 图片、表单都属于行内块元素，默认的vertical-align是基线对齐


参考文章：

[CSS行高（line-height）及文本垂直居中原理](https://segmentfault.com/a/1190000005122321)

[css行高line-height的一些深入理解及应用](https://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/)

**使用场景：解决图片底部默认空白缝隙问题**。

bug:  图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。

解决办法两种：

- 给图片添加`vertical-align: middle | top |bottom`。（推荐）
- 把图片转化为块级元素 `display:block`

# 雪碧图（精灵图）

所谓的精灵图就是将多张小图合并在一起，可以减少http请求，从而减轻了服务器压力。

如何获取其中的小图呢？

1. 通过ps工具量取小图的宽高及在大图中的xy坐标，
2. 在页面中定义一个盒子，宽高就是小图的宽高。
3. 给小图设置背景图，在通过背景定位background-position指定上面的xy坐标即可。（xy一般为负数）

## 遮盖层

```
遮盖：
    1. 全屏遮盖 
                实现方式1：（fixed， top/left/right/botom都设置0）
                实现方式2：（fixed， top/left/都设置0 宽高都设置为100%）
    2. 区域遮盖
                实现方式1：（absolute， top/left/right/botom都设置0）
                实现方式2：（absolute， top/left/都设置0 宽高都设置为100%）
```

> top/left/right/botom都设置0代表紧贴着父容器的边，没有缝隙。若都设置为10px,则就会与父容器边缘隔开10px。


## 还原ps设计稿步骤

ui美工把设计稿给到我们之后

-  
   1. 看整体结构，确定版心宽度。和那些行是通栏的宽度
- 2.量取：宽度和高度、内边距和外边距。文字大小和颜色
- 注意行高和字体大小的关系

## 对伪元素（::before和::after）的理解，及常见应用场景

- 伪元素：之所以被称为伪元素，是因为他们不是真正的页面元素，html没有对应的元素，但是其所有用法和表现行为与真正的页面元素一样，可以对其使用诸如页面元素一样的css样式，表面上看上去貌似是页面的某些元素来展现，实际上是css样式展现的行为，因此被称为伪元素。且无法审查伪元素的结构。
- 应用场景：主要起装饰作用，如字体图标、网页小图标、清除浮动、0.5水平线-0.5边框等

> 伪元素默认是行内元素，会继承父元素部分的属性，使用最多就是设置 content: "" 这样的空元素，然后给这个空元素加上各种样式。


# 字体图标的使用

之前网页中要显示小图标，我们都是通过图片的形式加载的。

但是图片也有其缺陷，如不但增加了总文件的大小，还增加了很多额外的"http请求"，这都会大大降低网页的性能的。更重要的是图片不能很好的进行“缩放”，因为图片放大和缩小会失真。

此时，一个非常重要的技术出现了， 这就是字体图标（iconfont).

## 字体图标优点

- 可以做出跟图片一样可以做的事情,改变透明度、旋转度，大小、颜色等..
- 字体图标其本质就是文字，可以跟文本一样文字的颜色、大小等等...
- 本身体积更小，但携带的信息并没有削减。
- 几乎支持所有的浏览器

## 字体图标制作流程

- UI人员使用svg制作图标，交给前端。注意：svg矢量图放大不会失真
- 前端人员拿到svg图标可以去相应的网站把svg图标转成图标字体文件。如免费的[icommon.io](https://icomoon.io/app/#/select)网站可以实现。
- 前端下载生成的字体文件，在html中引入进行使用字体图标

推荐以下三种字体库，前端使用较多：

- fontswesome字体图标：[http://www.fontawesome.com.cn/](http://www.fontawesome.com.cn/)
- 阿里iconfont字体图标：[https://www.iconfont.cn/](https://www.iconfont.cn/)
- icommon字体图片：[https://icomoon.io/](https://icomoon.io/)

# 谈谈外边距margin合并和塌陷问题，及如何解决

-  **margin合并**： 所谓的外边距合并就是，当两个垂直外边距相遇时，它们将形成一个外边距。合并的外边距的高度只会保留其最大者的外边距高度
解决办法： 
   - 给其中一元素加一层父级再通过设置 overflow:hidden触发BFC。但是这方法改变了HTML结构,不建议。
   - 直接给下方元素设置margin-top 或上方元素 margin-bottom 即可
-  **margin塌陷**: 一个父盒子里面套了一个小盒子，如果这个父盒子里面没有文字，也没有边框（border），也没有padding-top （这三个条件中没有一个满足的），当我们给小盒子设置margin-top的时候，会发现父盒子会跟着一起往下掉，这个现象就叫做margin塌陷 

解决办法：

给父元素设置overflow:hidden触发BFC机制来解决

# BFC机制

块格式化上下文（Block Formatting Context，BFC），它是一个独立的渲染区域。也就是说触发了[BFC](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)的容器就是页面上的一个完全隔离开的容器,容器里的子元素绝对不会影响到外面的元素。

**下列方式会创建块格式化上下文**

-  浮动元素（元素的 float 不是 none） 
-  绝对定位元素（元素的 position 为 absolute 或 fixed） 
-  行内块元素（元素的 display 为 inline-block） 
-  表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值） 
-  overflow 值不为 visible 的块元素。  如：overflow: hidden; 

常用场景：

-  浮动元素的父元素高度塌陷。 触发bfc之后，会检测到浮动元素的高度，把父给撑开。 
-  解决外边距塌陷和重叠(合并)问题。 [解决margin合并-塌陷](http://blog.w0824.com/htmlcss/margin%E5%90%88%E5%B9%B6-%E5%A1%8C%E9%99%B7%E9%97%AE%E9%A2%98%E5%8F%8A%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html#margin%E5%90%88%E5%B9%B6) 

浏览器html常见的三个bug:

- 浮动坍塌
- 外边距合并
- 外边距塌陷

都可以触发BFC机制来解决。

# auto和%的区别

- width: auto: 元素不设置width默认为auto。其包含padding、border、margin的大小。
- width: 100%: 会强制将元素变成和父元素一样宽，在给子元素添加额外的空间如padding会在父盒子中溢出。

# 网站tab标签页favicon图标

在线制作favicon图标：

[https://tool.lu/favicon/](https://tool.lu/favicon/)

# 两栏布局

要求：**左侧固定，右侧自适应**。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646382628431-0b3cc540-442f-4cb4-be70-fd185f0d07c7.png#averageHue=%23a8ee61&clientId=u4d9d7014-01a7-4&from=paste&height=424&id=ub64ba2ef&originHeight=846&originWidth=787&originalType=binary&ratio=1&rotation=0&showTitle=false&size=136914&status=done&style=none&taskId=uf17d1167-118d-472d-a9a9-6a7461279d7&title=&width=394)

方式四的解释：

请问position后面可以同时设置left和right吗?如果可以那这两个同时设置值方向如何取?

直接上结论：同时设置 left 和 right 属性的话，根据文档方向是 LTR（从左向右），则 left 属性生效；反之如果是 RTL，则 right 属性生效。这里再补充一点，什么时候会希望文档方向使用 RTL 呢？最重要的一个例子就是阿拉伯语的网站，都是从右往左读的（如阿拉伯半岛电视台网站 http://www.aljazeera.net/portal）。而绝大部分的中文、英文网站，都是 LTR 也就是从左向右读的。

一个绝对定位的元素，同时指明了left和right。如果没有其他属性影响(没有指明width)，那么这个元素会拉伸去满足left和right。比如设置了left:0;right:0;的效果就和单独设置width:100%;一样。不过如果同时又设置了宽度，那么right属性将会被忽略。top和bottom同理

# 三栏布局

圣杯布局和双飞翼布局都是实现**三栏布局**的方法，效果都是一样的。

核心：**左右定宽，中间自适应**。 要求中间内容先渲染。
## 圣杯布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      .header {
        height: 30px;
        background: red;
      }

      .content {
        display: flex;
      }

      .middle,.left,.right {
        height: 80px;
      }
      .middle {
        order:2;
        flex:1;
        background: green;
      }

      .left {
        order:1;
        width: 200px;
        background: yellow;
      }

      .right {
        order:3;
        width: 100px;
        background: pink;
      }

      .footer {
        height: 30px;
        background: red;
      }


    </style>
  </head>
  <body>
    <div class="header">header</div>
    <div class="content">
      <!-- 注意：中间一列middle要先定义在最前面，因为网站最核心内容是中间区域，要最先渲染。 -->
      <div class="middle">middle</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <div class="footer">footer</div>
  </body>
</html>
```

> 注意：中间一列middle要先定义在最前面，因为网站最核心内容是中间区域，要最先渲染。

## 双飞翼布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      .header {
        height: 30px;
        background: red;
      }

      .content {
        display: flex;
      }

      .middle-wapper, .middle, .left, .right {
        height: 80px;
      }

      .middle-wapper {
        order:2;
        flex: 1;
      }

      .middle {
        background: green;
      }

      .left {
        order:1;
        width: 200px;
        background: yellow;
      }

      .right {
        order:3;
        width: 100px;
        background: pink;
      }

      .footer {
        height: 30px;
        background: red;
      }


    </style>
  </head>
  <body>
    <div class="header">header</div>
    <div class="content">
      <div class="middle-wapper">
        <div class="middle">middle</div>
      </div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <div class="footer">footer</div>
  </body>
</html>
```

# iframe标签

[iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe)标签作用：把一个网页嵌套到另一个网页中。

```html
<iframe width="300" height="200" src="https://baidu.com">
</iframe>
```

# css3动画

css3实现动画主要有以下三个属性

- transition: 强调属性的过渡。 让动画更加平滑。[可过渡的属性](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)
- transform: 强调变换。如旋转（rotate）、缩放(scale)、移动(translate)、倾斜(skew)等
- animation: 把元素样式从一个状态，慢慢转变为另一个状态。强调动画的每一帧。8个属性

> 一般含有数值的都是可以动画或过渡的


## transition过渡

transition属性是以下四个属性的简写属性。：

- transition-property(过度的属性，all则针对所有属性进行过渡)，
- transition-duration（过渡(持续)的时间），
- transition-timing-function  （过渡的变化曲线默认是ease）
- transition-delay（过度的延时执行时间，默认是0）

示例代码：

```html
<style>
  .box {
    width: 200px;
    height: 200px;
    background-color: #ccc;
  }

  .box:hover {
    /* 一般含有数值的都是可以动画或过渡的 */
    width: 300px;
    height: 400px;
    margin-top: 50px;
    margin-left: 100px;
    background-color: pink;
    /* 
    transition属性是以下四个属性的简写属性。： 
    transition-property(过度的属性，all则针对所有属性进行过渡)，
    transition-duration（过渡(持续)的时间），
    transition-timing-function  （过渡的变化曲线）
    transition-delay（过度的延时执行时间，默认是0） 
    */

    transition: all .6s linear ;
    /* transition-property: width,height,margin-top,margin-left; */
  }
</style>

<div class="box"></div>
```

## 过渡曲线

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646382565389-aa1d567a-1a8c-4125-82da-9732320e9594.png#averageHue=%23f2f2f1&clientId=u3e8a7d19-eb56-4&from=paste&height=219&id=u9192827b&originHeight=274&originWidth=844&originalType=binary&ratio=1&rotation=0&showTitle=false&size=50809&status=done&style=none&taskId=u5928a282-89ec-44f5-a649-78e6d70a243&title=&width=675.2)

transition-timing-function过渡曲线：

- ease: 先快后慢
- linear: 匀速
- ease-in: 先慢后快
- ease-out: 先快后慢
- ease-in-out: 先慢在快后慢
- cubic-bezier(.79,1.62,0,1.26)： 通过贝塞尔曲线自己去调整


参考：[贝塞尔曲线](https://cubic-bezier.com)
## transform变换


注意与transition的区别：

- transition:强调过度
- transform:强调变换

常见的变换操作：

- 旋转（rotate）
- 缩放(scale)
- 移动(translate)
- 倾斜(skew)



# animation 动画帧
## transition缺点
transition需要有特定的触发条件，如：hover,而且他有局限性，只能实现初始的动画，不能设置动画过程中的每一帧，所以transition只能实现一些简单的动画效果。

解决办法：用animation


动画本质就是由一帧一帧的连续的画面构成的。

而animation: 可以元素样式从一个状态，慢慢转变为另一个状态，控制动画运动的每一帧。

## animation基本使用

示例：控制元素的移动和缩小。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: absolute;
        background-color: skyblue;
        animation: Test 2s infinite;
      }

      @keyframes Test {
        /* from等价于0%,to等价于100% */
        0% {
          left: 0;
        }
        50% {
          left: 500px;
          transform: scale(0.5);
        }
        100% {
          left: 0;
        }
      }
    </style>
  </head>
  <body>
    <div id="box"></div>
  </body>
</html>

```


参考：[https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)


animation完整属性： 共8个属性
**animation** ： [animation-name](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-name)，[animation-duration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration), [animation-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function)，[animation-delay](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-delay)，[animation-iteration-count](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-iteration-count)，[animation-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction)，[animation-fill-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode) 和 [animation-play-state](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-play-state) 

注意：

1. 默认 情况下，如果设置了第100%帧动画，动画执行完毕之后是直接跳回到最初始状态。可以加forwards属性让动画维持在最后的状态
2. 默认 动画只执行1次。可以指定infinite关键字，无限执行
3. 如果中间某帧没有指定，则其会自动计算过渡效果

## loading加载案例

```css
<style>
.loading {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid red;
  margin: 200px auto;
  /* transparent 透明 */
  border-top-color: transparent;
  animation: aniSpin .6s linear 0s infinite;
}

@keyframes aniSpin{
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(1turn)
  }
}
</style>

<div class="loading"></div>
```

## 动画的注意事项

- 若动画帧设置的属性和原本元素存在属性的冲突了，将会被动画帧中的属性给覆盖。
- 注意属性的冲突。若元素本身有个`bottom:0`,又被动画帧添加上`top:0`,最终组合成为
`div {top:0; bottom:0}`,这样是不会生效的。
# 
# 网站seo优化-TDK

> 百度百科SEO解释：SEO（Search Engine Optimization）：汉译为搜索引擎优化。是一种方式：利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。目的是让其在行业内占据领先地位，获得品牌收益。很大程度上是网站经营者的一种商业行为，将自己或自己公司的排名前移。


**网站SEO优化常用之TDK标签:**

TDK对每个seoer来说都是熟悉的不能再熟悉的html标签了。
TDK分别表示Title、Keywords和Description三大最常见的优化标签。

- Title页面标题
- keywords页面关键词
- description页面描述。（严格意义上来说是除了title，其他两个均为mate标签的属性）

下面是jd首页的seo做法：

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646382326301-9ce16584-4cb7-48a0-89a4-2baf6e1a0319.png#averageHue=%23faefee&clientId=u6795c7f5-bfc5-4&from=paste&height=349&id=u0938b251&originHeight=436&originWidth=906&originalType=binary&ratio=1&rotation=0&showTitle=false&size=181661&status=done&style=none&taskId=u0a602743-b264-4a37-bca3-6451bfad18d&title=&width=724.8)

# 优雅降级和渐进增强
## 什么是渐进增强（progressive enhancement）？

针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

> 类似 爬山，由低出往高处爬


## 优雅降级 graceful degradation
一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

类似蹦极，由高处往低处下落
区别：渐进增强是向上兼容，优雅降级是向下兼容。

个人建议： 现在互联网发展很快， 连微软公司都抛弃了ie浏览器，转而支持 edge这样的高版本浏览器，我们很多情况下没有必要再时刻想着低版本浏览器了，而是一开始就构建完整的效果，根据实际情况，修补低版本浏览器问题。

 