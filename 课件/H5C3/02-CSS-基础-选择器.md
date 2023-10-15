# CSS (网页的美容师)

CSS的出现，拯救了混乱的HTML，当让更加拯救了我们web开发者。 让我们的网页更加丰富多彩。

- HTML: 负责网页结构
- CSS: 负责网页样式
- js: 负责网页的交互行为

网页未使用css:

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646380619539-ab45b444-3949-4811-a553-37d2109dcb5d.png#averageHue=%23867463&clientId=u79ca88fe-1db6-4&from=paste&height=301&id=u155b365c&originHeight=376&originWidth=514&originalType=binary&ratio=1&rotation=0&showTitle=false&size=288546&status=done&style=none&taskId=ucb02d479-53a5-43da-8e4f-e74ea0f7ecd&title=&width=411.2)

使用css之后：

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646380637764-9fb18987-dff7-4f7d-923e-f3385eeaf96c.png#averageHue=%23bdc0c5&clientId=u79ca88fe-1db6-4&from=paste&height=316&id=u7587b137&originHeight=395&originWidth=462&originalType=binary&ratio=1&rotation=0&showTitle=false&size=209605&status=done&style=none&taskId=u7d88529f-dc57-4a5c-84df-02f31fe0a17&title=&width=369.6)

# CSS介绍

CSS(Cascading Style Sheets)

CSS通常称为CSS样式表或层叠样式表（级联样式表），主要用于设置HTML页面中的文本内容（字体、大小、对齐方式、颜色...）、盒子的外形（宽高、边框样式、边距...）以及版面的布局等外观显示样式。

# CSS设置样式规则

使用HTML时，需要遵从一定的规范。CSS亦如此，要想熟练地使用CSS对网页进行修饰，首先需要了解CSS样式规则，具体格式如下：

css样式在html中的书写位置：

```html
<head>
    <style type="text/CSS">
        选择器 {属性1:属性值1; 属性2:属性值2; 属性3:属性值3;} 
    </style>
</head>
```

如：给h1标签设置文本为红色，字体大小为25px

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646380724528-64608ee5-9480-49cc-8a61-4d7a042013dd.png#averageHue=%23f4f4e7&clientId=u79ca88fe-1db6-4&from=paste&height=246&id=u924a7a6c&originHeight=307&originWidth=1177&originalType=binary&ratio=1&rotation=0&showTitle=false&size=114001&status=done&style=none&taskId=u2a7c107a-bebc-4f2a-8c7e-daa4b253ad7&title=&width=941.6)

在上面的样式规则中:

1. 选择器用于指定CSS样式作用的HTML对象，花括号内是对该对象设置的具体样式。
2. 属性和属性值以“键值对”的形式出现。
3. 属性和属性值之间用英文“:”连接。
4. 多个“键值对”之间用英文“;”进行区分。



# CSS编写位置

## 内部样式表

内部样式表是将CSS代码集中写在HTML文档的head头部标签中，并且用style标签定义，其基本语法格式如下：

```html
<head>
    <!-- type属性可省略不写 -->
    <style type="text/CSS">
        选择器 {属性1:属性值1; 属性2:属性值2; 属性3:属性值3;}
    </style>
</head>
```


## 外部样式表（外链式）

外链式是将定义的样式放在后缀为`.css`扩展文件中，通过link标签引入。

```html
<head>
  <link href="CSS文件的路径" type="text/CSS" rel="stylesheet" />
</head>
```

- href：定义所链接外部样式表文件的URL，可以是相对路径，也可以是绝对路径。
- type：定义所链接文档的类型，在这里需要指定为“text/CSS”，表示链接的外部文件为CSS样式表。
- rel：定义当前文档与被链接文档之间的关系，在这里需要指定为“stylesheet”，表示被链接的文档是一个样式表文件。


## 行内样式（内联样式）

内联样式通过标签style属性来设置样式：

```html
<标签名 style="属性1:属性值1; 属性2:属性值2; 属性3:属性值3;"> 内容 </标签名>
<div style="color:red;font-size:30px">你好</div>
```


# CSS字体样式属性

## font-size:字体大小

font-size 设置字体大小，浏览器默认大小是16px,不能小于12，小于12会以12来计算。

## font-family:字体

font-family属性用于设置字体。网页中常用的字体有宋体、微软雅黑、黑体等，

例如将网页中所有段落文本的字体设置为微软雅黑

```
p{ font-family:"微软雅黑";}
```

可以同时指定多个字体，中间以逗号隔开，表示如果浏览器不支持第一个字体，则会尝试使用下一个，直到找到合适的字体。

| 字体名称 | 英文名称 |
| --- | --- |
| 宋体 | SimSun |
| 新宋体 | NSimSun |
| 黑体 | SimHei |
| 微软雅黑 | Microsoft YaHei |
| 楷体 | KaiTi |
| 隶书 | LiSu |
| 幼园 | YouYuan |
| 华文细黑 | STXihei |
| 细明体 | MingLiU |


为了照顾不同电脑的字体安装问题，我们尽量只使用宋体和微软雅黑中文字体

注意：

1. 现在网页中普遍使用14px+。
2. 尽量使用偶数的数字字号。ie6等老式浏览器支持奇数会有bug。
3. 各种字体之间必须使用英文状态下的逗号隔开。
4. 中文字体需要加英文状态下的引号，英文字体一般不需要加引号。当需要设置英文字体时，英文字体名必须位于中文字体名之前。
5. 如果字体名中包含空格、#、$等符号，则该字体必须加英文状态下的单引号或双引号，例如font-family: "Times New Roman";。
6. 尽量使用系统默认字体，保证在任何用户的浏览器中都能正确显示。

## font-weight:字体粗细

字体加粗除了用 b  和 strong 标签之外，可以使用CSS 来实现.

- font-weight: 属性用于定义字体的粗细，其可用属性值：normal、bold、bolder、lighter、一般也用数字去表示 如600-1000

```css
400 等价于 normal，
700 等价于 bold。
```

## 字体样式

设置斜体
```
font-style: italic; 
```

# CSS注释

```

 /*  需要注释的内容  */  
.box {
    width:30px;
    color: red;
}

p {
  font-size: 14px;                 /* 设置所有p标签的字体是14像素*/
}
```

# 开发者工具（devtool）

此工具是我们的必备工具，以后代码出了问题，我们首先第一反应就是：

“按F12”或者是 鼠标右键-检查  打开 开发者工具（devtool）。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646380774430-77266908-dd77-40a6-b264-3868dda7febb.png#averageHue=%23f7f6f4&clientId=u79ca88fe-1db6-4&from=paste&height=391&id=u71a956bd&originHeight=489&originWidth=1006&originalType=binary&ratio=1&rotation=0&showTitle=false&size=245636&status=done&style=none&taskId=ufec845b0-a57c-4e41-a1e2-d250ff0f0ec&title=&width=804.8)

css属性查看技巧：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646380790398-da945b0f-8eb8-4b63-884a-16006ee8ee9f.png#averageHue=%23f9f4f0&clientId=u79ca88fe-1db6-4&from=paste&height=466&id=ue0626c0d&originHeight=582&originWidth=685&originalType=binary&ratio=1&rotation=0&showTitle=false&size=108622&status=done&style=none&taskId=u8354b0a7-1c7a-48fa-93eb-b9ec0c17de6&title=&width=548)

小技巧：

1. ctrl+滚轮 可以 放大开发者工具代码大小。
2. 左边是HTML元素结构   右边是CSS样式。
3. 右边CSS样式可以改动数值和颜色查看更改后效果。

# 选择器（重点）

要想将CSS样式应用于特定的HTML元素，首先需要找到该目标元素。通过选择器就可以找到目标元素。

- [css选择器-mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)

## 标签选择器（元素选择器）

标签选择器是指用HTML标签名称作为选择器，按标签名称分类，为页面中某一类标签指定统一的CSS样式。其基本语法格式如下：

```
标签名 {
  属性1:属性值1; 
  属性2:属性值2; 
  属性3:属性值3; 
}  
```

## 类选择器

类选择器使用“.”（英文点号）进行标识，后面紧跟类名，其基本语法格式如下：

```
.类名{
  属性1:属性值1; 
  属性2:属性值2; 
  属性3:属性值3;
}
```

标签调用的时候用 class=“类名”  即可。如下：

```
 <div class="类名1 类名2 类名3">你好css</div>
```

类选择器最大的优势是可以为元素对象定义单独或相同的样式。

小技巧：

```
1.长名称或词组可以使用中横线来为选择器命名。
2.不建议使用“_”下划线来命名CSS选择器。
3.不要纯数字、中文等命名， 尽量使用英文字母来表示。
```

课堂案例：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646380807088-7bd84050-be25-4fb7-91eb-d03337b7aaf0.png#averageHue=%23fcebe2&clientId=u79ca88fe-1db6-4&from=paste&height=124&id=u0888d622&originHeight=155&originWidth=453&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29253&status=done&style=none&taskId=u296bc16f-a071-4462-a475-ee60979825a&title=&width=362.4)

```html
<head>
        <meta charset="utf-8">
        <style>
        span {
        	font-size: 100px;
        }
        .blue {
        	color: blue;
        }
        .red {
        	color: red;
        }
        .orange {
			color: orange;
        }
		.green {
			color: green;
		}
        </style>
    </head>
    <body>
    	<span class="blue">G</span>
    	<span class="red">o</span>
    	<span class="orange">o</span>
    	<span class="blue">g</span>
    	<span class="green">l</span>
    	<span class="red">e</span>
    </body>
```

## id选择器

id选择器使用“#”进行标识，后面紧跟id名，其基本语法格式如下：

```
#id名{属性1:属性值1; 属性2:属性值2; 属性3:属性值3; }
```

该语法中，id名即为HTML元素的id属性值，大多数HTML元素都可以定义id属性，元素的id值是唯一的，只能对应于文档中某一个具体的元素。

用法与基本和类选择器相同。

## id选择器和类选择器区别

W3C标准规定，在同一个页面内，不允许有相同名字的id对象出现，但是允许相同名字的class。

类选择器（class） 好比人的名字，  是可以多次重复使用的

id选择器:好比人的身份证号码， 全国是唯一的， 不得重复。

通配符选择器: 用`*`号表示，他是所有选择器中作用范围最广的，能匹配页面中所有的元素。其基本语法格式如下：

```
* { 属性1:属性值1; 属性2:属性值2; 属性3:属性值3; }
```

例如下面的代码，使用通配符选择器定义CSS样式，清除所有HTML标记的默认内外边距。

```css
* {
  margin: 0;                  
  padding: 0; 
}
```

## 属性选择器符选择器

CSS 属性选择器通过已经存在的属性名或属性值匹配元素

```
语法：
 [attr]： 匹配含有属性attr的元素
 [attr=value]: 匹配属性attr的值为value的元素
 [attr^=value]： 匹配属性attr的值为value开头的元素
 [attr$=value]： 匹配属性attr的值为value结尾的元素
 [attr*=value]： 匹配属性attr的值含有value的元素
```

例子：选择所有具有 title 属性的a元素（不论这个属性的值是什么）

```
a[title]  {
    color: red;
}
```

[参见属性选择器-mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)

# CSS复合（组合）选择器

复合选择器是由两个或多个基础选择器，通过不同的方式组合而成的,目的是为了可以找到更加精准的元素。

## 分组(并集)选择器

是将不同的选择器通过`逗号`组合在一起的方法，这样可以为它们定义相同的CSS样式。

```
 /* 分组选择器，用逗号隔开 */
h2, .h3, div {
    color: red;
    font-size: 30px;
}
```

## 后代（子孙）选择器

后代选择器，用来选择元素或元素组的后代，其写法就是把外层标签写在前面，内层标签写在后面，中间用`空格`分隔。

```
 /* 后代（子孙）选择器 （会找多层） */
#star  li { 
    margin: 6px;
    padding: 8px;
    background-color: green;
}
```

## 子元素选择器

选择前一个元素的直接子代的节点。中间用大于号`>`分隔。

```
 /* 子元素选择器 （一层） */
#star >  li {
    background-color: pink;
    margin: 6px;
    padding: 8px;
}
```

## 一般兄弟组合器

组合器选择兄弟元素，也就是说，后一个节点在前一个节点后面的任意位置，并且共享同一个父节点。

语法：`A ~ B`

例子：
`p ~ span` 匹配同一父元素下，p元素后的所有 span 元素。

```css
p ~ span {
    color: red
}
```

## 紧邻兄弟组合器

组合器选择相邻元素，即后一个元素紧跟在前一个之后，并且共享同一个父节点。

语法：`A + B`

例子：`h2 + p` 会匹配所有紧邻在 h2 元素后的p元素。

```css
h2 + p {
    color: skyblue
}
```

## 交集选择器（了解）

同时找出符合多个条件的选择器。 即...又...的意思

```

/* 找出类名为title的h4标签 */
h4.title {
    color: red;
}

/* 找出类名为content且id为content的元素 */
.content#content {
    color:blueviolet;
}

/* 找出类名含有content又有info的元素 */
.content.info{
    background-color:chocolate;
}
```

# 元素模式

分为三大类：

- 块元素
- 行内元素
- 行内块元素

## 三者区别

### 块级元素的特点

1. 单独占父容器的一行，可设宽高和四边的内外边距
2. 块元素内部可以放其他元素（文本、行内、行内块、块元素), p和h1-h6标签除外
3. 高度是随着子元素自动撑高的。

> 注意：p和h1-h6里面只能放文本。


常见块元素有：`div、p、h1~h6、ul/li、...`

### 行内元素的特点

1. 多个在同一行显示，放不下自动流到父容器的下一行
2. 不能设宽高，可设水平方向内外边距，但不能设垂直方向的内外边距。 （但下内边距可设，但基本是不用的，一般行高来解决垂直距离）
3. 行内元素一半是文本级别的。里面只能放文本。除a标签外
常见的行内元素： span、a、b、i

> 注意： 行内元素仅能放文本，除a标签外，不要设置垂直方向内外边距，否则会有意外bug,导致布局错乱。


常见行内元素有：`a、span、i、b...`

### 行内块特点

即有行内和块元素特点：
块：可设宽高，可设四边的内外边距
行内： 在同一行
特点：可设宽高，可设四边的内外边距，多个行内块在同一行。

行内块元素： img、button、input

> button里面的文字是默认水平垂直居中的,input中的文本默认是垂直居中的


> 一般是不需要给button和input设置垂直方向的内边距


常见行内块元素有：`<img />、<input />、<button>、...`

### 小结

元素模式一共有三类：块元素、行内元素、行内块。

- 凡是`块`元素都可以设置宽高、四边的内外边距
- 凡是`行内`元素都是在同一行显示。

## 转换元素模式

通过css的display属性可以让元素发生模式转换

- display: none; 隐藏元素。（不占页面位置，但元素还在html结构中）
- display: block; 转为块元素。
- display: inline; 转为行内元素。
- display: inline-block; 转为行内块元素。

## 元素模式小结

元素模式共：块元素、行内元素、行内块

1.块元素（容器级别）：

   - 占父容器的一行，可设宽高和四边的内外边距
   - 高度由子内容自动撑高、内容可以放任何元素。但除了p和h1-h6

        	如：div、p、ul 、li h1-h6 

2. 行内元素（文本级别）：
   - 多个行内元素会在同一行，父容器放不小会流到下一行，不能设宽高，仅能设水平方向内外边距，不要设置垂直方向的内外边距
   - 内容的宽高就是元素的宽高,基本只能放文本。除a标签较特殊。 如：span、a
3. 行内块(即有块元素和行内元素特点)
   - 可设宽高和四边的内外边距，多个行内/行内块会在同一行。如： img、input、button

> 注意：

- button中的文本默认水平垂直居中。
- input中的文本默认是垂直居中

# CSS外观属性

## color:文本颜色

color属性用于定义文本的颜色，其取值方式有如下3种：

-  1.预定义的颜色值单词，如red，green，blue、pink、purple、orange等。 
-  2.十六进制，如#FF0000，#FF6600，#29D794等。实际工作中，十六进制是最常用的定义颜色的方式。 
-  3.RGB代码，如红色可以表示为`rgb(255,0,0)`    RGB=Red Green Blue 

十六进制数范围： 0-9, a-f

rgb数值范围：0-255

红色：#FF0000
绿色：#00ff00
蓝色：#0000ff

rgba可设置颜色透明度。 a（alpha）取值范围： 0-1

如：

```css
.title {
  color: rgba(0,0,0.5)
}
```

## 文本的装饰

text-decoration   通常我们用于给文本修改装饰效果
```css
 text-decoration: line-through; // 删除线
 text-decoration: none; // 无修饰
```
| 值 | 描述 |
| --- | --- |
| none | 默认。定义标准的文本。 |
| underline | 定义文本下的一条线。下划线 也是我们链接自带的 |
| overline | 定义文本上的一条线。 |
| line-through | 定义穿过文本下的一条线。 |


## text-align:水平对齐方式

`text-align`属性用于设置父容器中文本内容（或行内元素）的水平对齐方式，其可用属性值如下：

- left：左对齐（默认值）
- right：右对齐
- center：居中对齐

## line-height:行高

line-height属性用于设置行间距，就是行与行之间的距离，即字符的垂直间距。

把容器设置高度和行高相等，可以实现容器中单行文本垂直居中

```css
.box {
  // 单行文本垂直居中
  line-height: 100px;
  height: 100px;
}
```

# CSS 背景(background)

- background-color: 背景色

```
.box {
    background-color: skyblue;
    /* 背景透明度rgba a=> alpha 取值 0-1 */
    background-color: rgba(88,200,150,0.5);
}
```

- background-image: 背景图片

```css
.box {
    background-image: url(./image/kobe.jpg);
    background-repeat: no-repeat;
}
```


-  background-repeat: 背景平铺方式。默认xy轴平铺
| 值 | 说明 |
| --- | --- |
| repeat | 背景图像将向垂直和水平方向重复。默认值 |
| repeat-x | 只有水平位置会重复背景图像 |
| repeat-y | 只有垂直位置会重复背景图像 |
| no-repeat | background-image不会重复 |
| inherit | 指定background-repea属性设置应该从父元素继承 |

-  背景渐变 

语法：

```css
background-image: linear-gradient(red, yellow, blue);
```

- background-position: 背景定位

```css
.box {
    background-image: url(./image/kobe.jpg)
    background-repeat: no-repeat;
    background-position: top center;
}
```

- background-size: 设置背景图片大小。常用的以下两个值： 
   - cover: 会进行等比例缩放，直至背景图宽高完全铺满容器为止。注意：超出容器部分会被截断
   - contain: 会进行等比例缩放，直至背景图的宽或高先碰到容器的边界才会停止缩放。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646380836304-b37bc9bd-5ef3-4459-9f50-d16ce44769d3.png#averageHue=%23f6e7d1&clientId=u79ca88fe-1db6-4&from=paste&height=286&id=ub6c222a9&originHeight=357&originWidth=922&originalType=binary&ratio=1&rotation=0&showTitle=false&size=14993&status=done&style=none&taskId=uad657128-f98e-41e7-a7c6-f09af76ea41&title=&width=737.6)
```css
.box { 
  background-image: url(./image/kobe.jpg);
  background-repeat: no-repeat; 
  background-size: cover; 
}
```

-  background:  是一种 CSS 简写属性（复合属性），用于一次性集中定义各种背景属性，如将背景颜色、 背景图片 、背景平铺方式等定义在一起。  
```css
.box {
    background-image:red url(./image/kobe.jpg) no-repeat top;
}
```

-  [案例-知乎登录背景图](https://www.zhihu.com/signin?next=%2F) 
-  [深圳小汽车摇号背景图](https://www.szxqcjj.com/) 
-  [参见background](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background) 

# CSS继承性

所谓继承性是指书写CSS样式表时，子标签会继承父标签的某些样式，如文本颜色和字体大小行高等。
想要设置一个可继承的属性，只需将它设置在父元素即可。

简单的理解就是：  子承父业。

**css继承性， 会继承哪些属性：**

-  只有文字的属性能够继承，盒子的属性不能继承 
-  文字属性：color、font-系列（如：font-size、font-weight、font-family）、line-系列(line-height)、text-系列(text-decoration) 
-  盒子属性: background-系列、width、height、padding、border-系列、margin、浮动、定位 

# css选择器优先级

1. 权值： 选择器的针对性越强，权值越高。
2. 把各选择器出现的权重进行累加求和，权重越大优先级越高。权重一样，后者覆盖前者。

下面列表中，选择器类型的优先级是递增的：

```
个：标签、伪元素(1)
十：类伪类、属性选择器(10)
百：id(100)
千： style(1000)
无穷大： !important(∞)
```

示例:

```css
/* 100 + 10 + 1 = 111 */
#box .list a {
  color: red;
}

/* 10 + 10 + 1 = 21 */
.box .list a {
  color: blue;  
}
```

上面选择器的权重111大于21，所以是文本是红色

如果写了一个css样式不生效：原因一般以下两个：

- 单词拼错。
- 权重不够。
> 可通过浏览器控制台进行调试。

##  important 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            color: red!important;
        }

        div {
            color: pink;
        }
    </style>
</head>
<body>
    <!-- style写 important 天下无敌，没法覆盖它-->
    <div style="color:#ccc !important;">刘德华</div>
    <div style="color:#ccc;">郭富城</div>
</body>
</html>
```

# 
| 样式表 | 优点 | 缺点 | 使用情况 | 控制范围 |
| --- | --- | --- | --- | --- |
| 行内样式表 | 书写方便，权重(优先级)高 | 没有实现样式和结构相分离 | 较少 | 控制一个标签（少） |
| 内部样式表 | 部分结构和样式相分离 | 没有彻底分离 | 较多 | 控制一个页面（中） |
| 外部样式表 | 完全实现结构和样式相分离 | 需要引入 | **最多，强烈推荐** | 控制整个站点（多） |

# 伪类选择器

伪类选择器用于向某些选择器添加特殊的效果。比如给链接、div添加特殊效果， 比如可以选择 第1个，第n个元素。

**伪类选择器**

```
:link      /* 未访问的时候 */
:visited   /* 已访问的时候 */
:hover     /* 鼠标悬浮的时候 */  开发时使用最多,重点掌握
:active    /* 鼠标按下的时候 */
```

> 注意写的时候，他们的顺序尽量不要颠倒 按照 lvha 的顺序。


```
a:hover {   
	color: skyblue; 
}
```

- :first-child :选取属于其父元素的首个子元素的指定选择器
- :last-child :选取属于其父元素的最后一个子元素的指定选择器
- :nth-child(n) ： 匹配属于其父元素的第 N 个子元素，不论元素的类型
- :nth-last-child(n) ：选择器匹配属于其元素的第 N 个子元素的每个元素，不论元素的类型，从最后一个子元素开始计数。
n 可以是数字、关键词或公式

```css
ul li:first-child { /*  选择第一个孩子 */
    color: pink; 
}
ul li:last-child {   /* 最后一个孩子 */
    color: purple;
}
ul li:nth-child(4) {   /* 选择第4个孩子  n  代表 第几个的意思 */ 
	color: skyblue;
}
```

# 伪元素选择器（CSS3)

1. ::first-letter文本的第一个单词字母或字（如中文、日文、韩文等）
2. ::first-line 文本第一行；
3. ::selection 可改变选中文本的样式；

》 以上伪元素选择器在实际开发中用的较少，了解即可。

```css
p::first-letter {
  font-size: 30px;
  color: red;
}

/* 首行特殊样式 */
p::first-line {
  color: skyblue;
}

p::selection {
  font-size: 50px;
  color: orange;
}
```

# 伪元素

CSS伪元素是用来添加一些选择器的特殊效果，或对元素进行加以修饰用的。

它分为前伪元素和后伪元素。

-  ::before: 前伪元素 
-  ::after ：后伪元素 

在元素内部的开始位置和结束位置创建一个伪元素，且该元素默认为行内元素，它必须要结合content属性使用，否则伪元素就不起作用,conent指定伪元素的内容。若没有内容则留空即可

```
div::before {
    content:"123";
    color: red;
}
div::after {
    content:"456";
}

a::after {
    content:"";
}
```

之所以被称为伪元素，是因为在页面中没有对应的html结构，所以伪元素的结构无法审查。但是其所有用法和表现行为与真正的页面元素一样，可以对其使用诸如页面元素一样的css样式，因此被称为伪元素。

> /_ 注意：伪元素默认是行内元素，不会增加页面额外的标签。仅仅起到装饰性的作用 _/


> ":" 与 "::" 区别在于区分伪类和伪元素

