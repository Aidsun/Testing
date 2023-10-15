# 认识网页
网页就是指某个网站中的一个页面,网页主要由文字、图像和超链接等元素构成。当然，除了这些元素，网页中还可以包含音频、视频等。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373372222-baf9dec3-2960-44e4-a236-94136f062ba6.png#averageHue=%233e5fae&clientId=u2a9b9352-45c3-4&from=paste&height=1176&id=u2d8f3bbc&originHeight=1176&originWidth=1908&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1224932&status=done&style=none&taskId=u33f86b3c-2668-47a8-b7d8-d23ce9228bf&title=&width=1908)
# 网页是如何形成的呢?

网页就是由一堆代码(HTML+CSS+JS)组成的，最后通过浏览器解析，就渲染出我们肉眼看到的界面

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373388087-e3048381-9a4a-45fe-8b45-aa4531e253e7.png#averageHue=%238ea28d&clientId=u2a9b9352-45c3-4&from=paste&height=720&id=u3f99df2f&originHeight=720&originWidth=1872&originalType=binary&ratio=1&rotation=0&showTitle=false&size=791833&status=done&style=none&taskId=u4a179d97-a5e3-475e-ae1d-dcd0bb4673d&title=&width=1872)

# 常见浏览器介绍

浏览器是网页运行的平台，常用的浏览器有:

- IE(微软),浏览器的鼻祖
- 火狐（Firefox）
- 谷歌（Chrome），开发最常用
- 苹果的Safari。
- 360浏览器等等。

> 由于每个浏览器都产自于不同的厂商，所以其浏览器内构成也有所不同，这样就会导致一套代码在不同的浏览器下会呈现出不同的效果。需要我们开发者做兼容处理。最麻烦的就是要兼容IE浏览器。


# Web 标准

无规矩不成方圆，有了标准才会让我们的web发展的更加长远。

谁来制定交通规则呢？当然是交管部门

那谁来制定web标准呢？ W3C来制定！！！

[W3C](https://www.w3.org/Consortium/):全程 World Wide Web Consortium (W3C) ，万维网联盟  是一个国际社区，成员组织、全职员工和公众共同致力于开发 Web 标准，制定这些技术规范和指南，W3C 的使命是引领 Web 发挥其全部潜力。

制定的三个标准：

- 结构标准（HTML）：结构用于对网页元素进行整理和分类，通过HTML实现。
- 样式标准（CSS）：表现用于设置网页元素的版式、颜色、大小等外观样式，通过CSS实现。
- 行为标准（JavaScript）：行为是指网页交互的编写，通过js实现

网页（人）：

- 骨骼（HTML）
- 衣服 （CSS）
- 奔跑、跳跃 （Javascript） js

所以前端开发我们的源码文件后缀名基本都是以 `.html`、`.css`、`.js` 结尾的。当然还有一些静态资源文件如图片。其结尾多是以`.png`、`.jpg`、`.gif`结尾的

所以：

- HTML: 负责网页基本骨架结构。 相当于人的`骨骼`
- CSS：负责网页的外观。相当于人的`衣服`
- JavaScript: 负责网页的交互行为。相当于人的一些行为，如`走路、奔跑、跳跃`等。

了解 Web 标准规范和组织：[https://juejin.im/post/5c700b1de51d457fd033f496](https://juejin.im/post/5c700b1de51d457fd033f496)

# HTML 概述

HTML（英文HyperText Markup Language的缩写）中文译为“超文本标签（标记）语言”，主要是通过HTML标签对网页中的文本、图片、声音等内容进行描述。

```
<b> 我是加粗的字体 </b>  
<i> 我是倾斜的字体 </i>
```

# HTML骨架格式

写网页也要遵守一定的格式规范，如给别人写信、员工入职劳动合同等都要遵守相应格式。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373409090-aa1bb52b-1cca-4a28-88a3-2e9c76065f4f.png#averageHue=%23fdfed5&clientId=u2a9b9352-45c3-4&from=paste&height=1218&id=u4e22002d&originHeight=1218&originWidth=1662&originalType=binary&ratio=1&rotation=0&showTitle=false&size=944642&status=done&style=none&taskId=u3484cedc-a121-4f4c-9d78-4404bf97c2b&title=&width=1662)

同理：HTML 也有自己的格式规范：

```
<html>   
    <head>     
        <title>网页标题</title>
    </head>
    <body>
        网页内容写在这里
    </body>
</html>
```

课堂练习1：    书写我们的第一个HTML 页面！

1. 鼠标右键新建一个TXT格式的文本文件。
2. 后缀改为`.html`
3. 里面写入刚才的HTML骨架。
4. 选中文件打开方式用任意浏览器打开。

标签解释

-  HTML标签：
作用所有HTML中标签的一个根节点。 
-  head标签：
作用：用于存放title,meta,style,script,link等标签。 
-  title标签：
作用：让页面拥有一个属于自己的标题。 
-  body标签：
作用：网页的主体部分，网页内容标签都写在body中： 


# 普通文档流

网页默认是`从左往右`、`从上往下`的特点进行布局。这种布局方式我们称之为普通文档流。

# HTML标签分类



标签分为：双标签和单标签。

## 双标签
语法：
```
<标签名>内容</标签名>
```

该语法中“<标签名>”表示该标签的作用开始，一般称为“开始标签（start tag）”，“</标签名>” 表示该标签的作用结束，一般称为“结束标签（end tag）”。和开始标签相比，结束标签只是在前面加了一个关闭符“/”。

```
<body>我是文字</body>
```

## 单标签

语法：
```
<标签名 />
```

如：

```

    换行
<hr />    水平线
```

# HTML标签关系

标签关系只能是两种

- 嵌套关系
- 并列关系

## 嵌套关系

```
<head>  <title> </title>  </head>
```
## 并列关系

```
<head></head>
<body></body>
```


> 注意：标签不能交叉嵌套


测试题：请问下列哪个标签是错误的？

```
选项A  <head></head><body></body>
选项B  <div><b></b></div>
选项C  <head><title></head></title> 错误 不可以交叉嵌套
选项D  <body><div></div></body>
```

注意：

- 如果两个标签之间的关系是嵌套关系，子元素需要缩进一个tab键的身位。
- 如果是并列关系，要上下对齐。这样代码看起来结构非常清晰，便于阅读，也有利于后面的代码维护。

如：
```html
<div>
  <span>王者荣耀</span>
  <a>英雄联盟</a>
<div>
```

# html文档类型

```html
<!DOCTYPE html> 
```

作用：告诉浏览器，文档使用的是 html 5 的版本。  

`<!DOCTYPE>` 标签位于文档的最前面，用于告诉浏览器当前文档使用哪种 HTML 或 XHTML 标准规范，这样浏览器才会按照指定的文档类型进行解析。


注意：  一些老网站可能用的还是老版本的文档类型比如 XHTML之类的，但是我们学的是HTML5,而且HTML5的文档类型兼容很好(向下兼容的原则)，所以大家放心的使用HTML5的文档类型就好了。

html版本发展：[https://www.w3school.com.cn/html/html_doctype.asp](https://www.w3school.com.cn/html/html_doctype.asp)

# html5中设置字符集

作用：定义了当前文件使用的字符集,防止网页乱码。

```
<head>
    <meta charset="UTF-8">
</head>
```

中文字库：

- UTF-8: 国际标准字库。包含了人类所有语言的文字。 一个汉字三个字节。
- GBK/gb2312: 中国字库，标准字库。包含所有的简体中文，大部分繁体，一些特殊符号等。GBK包含全部中文字符    是GB2312的扩展，加入对繁体字的支持，兼容GB2312，gb2312 包括6763个汉字
- BIG5   繁体中文 港澳台等用

文件保存的编码需要和文件内容的编码格式一致，否则访问的时候会出现乱码情况。

> 记事本创建的文件可以另存为格式选择utf-8即可


如何避免呢？

记住一点，以后我们统一使用UTF-8 字符集, 这样就避免出现字符集不统一而引起乱码的情况了。

# 开发工具-编辑器

使用开发工具可以大大提升我们的开发效率，所谓工欲善其事必先利其器。

作为前端而言，常用编辑器：

- [VSCODE](https://code.visualstudio.com/)
- [Sublime](http://www.sublimetext.com/)
- [WebStorm](https://www.jetbrains.com/webstorm/)
- [Hbuilder](https://www.dcloud.io/hbuilderx.html)

> 不要用记事本! 不要用记事本! 不要用记事本! 因为记事本没有代码高亮提示，回车不会自动缩进，而且还会带来特殊BOM+编码格式，对程序造成错误。


> 编辑器没有优劣之分，用着习惯，好用即可。


一些快捷生成代码的技巧：

- sublime中或vscode中生成html骨架快捷键
输入`html:5`或`!`，在按下`tab`键生成。
- 输入开始标签如输入`b`,按下`tab`键自动补全结束标签。


# 标题标签

为了使网页更具有语义化，我们经常会在页面中用到标题标签，HTML提供了6个等级的标题，即

```
 <h1>、<h2>、<h3>、<h4>、<h5>和<h6>
```

标题标签语义：  作为标题使用，并且依据重要性递减

其基本语法格式如下：

```html
<h1>标题文本</h1>
```

# 段落标签

单词缩写：  paragraph  段落

在网页中要把文字有条理地显示出来，离不开段落标签，就如同我们平常写文章一样，整个网页也可以分为若干个段落

```
<p>文本内容</p>
```

是HTML文档中最常见的标签，默认情况下，文本在一个段落中会根据浏览器窗口的大小自动换行。p标签前后都会有一个换行

# 水平线标签

单词缩写：  horizontal  横线

```
<hr />
```

在网页中常常看到一些水平线将段落与段落之间隔开，使得文档结构清晰，层次分明。

课堂练习2：  实现以下新闻页面布局

# 特殊字符(转义符) （理解）

网页中若需要显示特殊的字符如单引号、双引号、版权等特殊符号，我们用以下特殊符号去实现：

| 源代码 | 显示结果 | 描述 |
| --- | --- | --- |
| `&lt;` | < | 小于号 |
| `&gt;` | > | 大于号 |
| `&copy;` | © | 版权 |
| `&trade;` | ™ | 商标 |
| `&nbsp;` |  | 空格 |
| `&yen;` | ¥ | 人民币 |

- [HTML特殊转义字符对照表](https://tool.oschina.net/commons?type=2)

# 换行标签

单词缩写：  break   打断、换行

在HTML中，一个段落中的文字会从左到右依次排列，直到浏览器窗口的右端，然后自动换行。如果希望某段文本强制换行显示，就需要使用换行标签

```html


```

# 文本格式化标签

在网页中，有时需要为文字设置粗体、斜体或下划线效果，这时就需要用到HTML中的文本格式化标签，使文字以特殊的方式显示。

- `b（加粗）、i(斜体)、 s(删除线)、u(下划线)` 只有使用 没有 强调的意思
- `strong、em、 del、ins`  语义更强烈

他们都是双标签

# 注释标签

在HTML中还有一种特殊的标签——注释标签。如果需要在HTML文档中添加一些便于阅读和理解但又不需要显示在页面中的注释文字，就需要使用注释标签。其基本语法格式如下：

```html
<!-- 注释语句 -->
```

如：

```html
<!-- a是超链接标签，实现页面跳转 -->   
<a href="http://baidu.com">百度</a>
```

注释内容不会显示在浏览器窗口中，但是作为HTML文档内容的一部分，也会被下载到用户的计算机上，查看源代码时就可以看到。

技巧：sublime或vscode中输入快捷键`ctrl + /`，可快速生成注释
# 标签属性

属性就是特性。比如 手机的颜色 手机的尺寸 ，他们都是手机的属性。可以描述手机更加丰富的信息。

使用HTML制作网页时，如果想让HTML标签提供更多的信息，可以使用HTML标签的属性加以设置。其基本语法格式如下：

```html
<标签名 属性1="属性值1" 属性2="属性值2" …> 内容 </标签名>
```

在上面的语法中，

-  1.标签可以拥有多个属性，必须写在开始标签中。 
-  2.属性之间不分先后顺序，标签名与属性、属性与属性之间均以空格分开。 
-  3.任何标签的属性都有默认值，省略该属性则取默认值 

采取`键值对`的格式即`key="value"`的格式

```html
<hr width="400" />
```

- 属性width，代表宽度值是400px

> px就是pixel的缩写,pixel即像素,它不是自然界的长度单位。px是我们电脑中最小的点。


# 图像标签

单词缩写：   image  图像

```html
<img src="图像URL地址" alt="图片加载失败展示" width="宽度" height="高度" />
```

- src: 此属于指明图像的url地址
- alt: 如果图片加载失败，则显示alt属性的内容

> 注意：如果图片宽高只设置一个，另一个会自动等比例缩放。


# 超链接标签

单词缩写：anchor 的缩写 。基本解释 锚, 铁锚 的

在HTML中创建超链接非常简单，其基本语法格式如下：

```html
<a href="跳转的URL地址" target="目标窗口的打开方式">文本</a>
```

-  href：此属性用于指定链接跳转的url地址，它就具有了超链接的功能。 
-  target：此属性用于指定链接页面的打开方式，其取值有`_self`和`_blank`两种，其中`_self`为默认值，`_blank`为在新窗口中打开方式。 

注意：

-  1.外部链接 需要添加 http:// www.baidu.com 
-  2.内部链接 直接链接内部页面名称即可 比如 < a href="index.html"> 首页  
-  3.如果当时没有确定链接目标时，通常将链接标签的href属性值定义为“#”(即href="#")，表示该链接暂时为一个空链接。 

### base 标签

base 可以设置整体链接的打开状态

base 写到  `<head></head>` 之间

```
<head>
    <!-- 控制页面上所有的a标签都在新窗口中打开 -->
    <base target="_blank" />
</head>
```

### 锚点定位

通过创建锚点链接，用户能够快速定位到目标内容。
创建锚点链接使用相应的id名标注跳转目标的位置。

```html
<a href=#id名称>链接文本</a>
```

如：

```
<a href=#tiyu>体育</a>
<a href=#yule>娱乐</a>
<a href=#caijing>财经</a>
<p id="tiyu">体育体育体育体育体育体育体育体育</p>
<p id="yule">娱乐娱乐娱乐娱乐娱乐娱乐娱乐娱乐</p>
<p id="caijing">财经财经财经财经财经财经财经财经</p>
```


# div span标签(重点)

div和span标签是没有语义的，即没有见词之意义的效果。 它是我们网页布局最重要的2个盒子（容器）。

-  div: 就是`division(分区)`的缩写,容器级别，一般用来作为其他标签和文本的容器。 
-  span: 一般用作文本的容器（文本级别） 

> div和span都是双标签


语法格式：

```html
<div>我是div标签1</div>
<div>我是div标签2</div> <span>我是span标签2</span>
<span>我是span标签3</span>
```

他们两个都是盒子,用来装我们网页元素的,只不过他们有区別,现在我们主要记住使用方法和特点就好了

- div独自占父容器的一行
- 多个span都是在同一行显示

### 元素模式

- 块元素 block（容器级别）：比较霸道，独自占父容器一行，可设宽高。有div、hr、h1~h6、p 等
- 行内元素 inline（文本级别）：相同的行内元素在同一行显示。有：span 、i、b、span、a、s、等


# 路径

路径指的是从起点到终点的位置

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373664108-7486cf1f-858d-423f-ac3f-ed0e9a43f679.png#averageHue=%23c6f4ba&clientId=u499ab397-22c9-4&from=paste&height=982&id=u80333f4a&originHeight=982&originWidth=1194&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1350058&status=done&style=none&taskId=u8a2817c0-ec13-440d-9c39-7cd54f24752&title=&width=1194)
实际工作中，通常新建一个文件夹专门用于存放图像文件，这时再插入图像，就需要采用“路径”的方式来指定图像文件的位置。

路径可以分为： 相对路径和绝对路径

## 相对路径

1. 图像文件和HTML文件位于同一文件夹：只需输入图像文件的名称即可，如<img src="logo.gif" />。或 <img src="./logo.gif" />。 `./是平级关系`
2. 图像文件位于HTML文件的上一级文件夹：在文件名之前加入“../” ，如果是上两级，则需要使用 “../ ../”，以此类推，如<img src="../logo.gif" />。

```
./ 代表当前目录
../ 代表上一级目录
../../  代表上两级目录
```

## 绝对路径

- 盘符根路径：“D:\web\img\logo.gif”，
- 或完整的网络地址，例如： [https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg](https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg)

# 列表标签

什么是列表？

容器里面装载着文字或图表的一种形式，叫列表。

列表最大的特点就是  整齐 、整洁、 有序
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373687132-6af344f3-1b6a-4d17-93ae-92cf8c87676d.png#averageHue=%233a3f3c&clientId=u499ab397-22c9-4&from=paste&height=1016&id=uac4d925d&originHeight=1016&originWidth=1454&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1918780&status=done&style=none&taskId=uf543981f-ae31-47f2-86d2-8f148d19790&title=&width=1454)

## 无序列表 ul

无序列表的各个列表项之间没有顺序级别之分，是并列的。其基本语法格式如下：

```html
<ul>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
  ......
</ul>
```

比如下面这些，新闻是没有顺序的，不用排队，先到先得，后发布先显示。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373697891-b89d78e8-cda7-4340-8df2-0fd3016083cd.png#averageHue=%23ede2d7&clientId=u499ab397-22c9-4&from=paste&height=560&id=uacec04f5&originHeight=560&originWidth=1684&originalType=binary&ratio=1&rotation=0&showTitle=false&size=613751&status=done&style=none&taskId=u99b74d60-f61b-4650-bed4-8c06aee62a3&title=&width=1684)

注意：

- `<ul></ul>`中只能嵌套`<li></li>`，直接在`<ul></ul>`标签中输入其他标签或者文字的做法是不被允许的。
- `<li>`与`</li>`之间相当于一个容器，可以容纳所有元素。
- 无序列表会带有自己样式属性，后面可以通过CSS来设置！

## 有序列表 ol

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373708905-c1478d52-8010-4f89-9425-68c0d0ea3696.png#averageHue=%23f8f6f5&clientId=u499ab397-22c9-4&from=paste&height=798&id=u9174effe&originHeight=798&originWidth=1856&originalType=binary&ratio=1&rotation=0&showTitle=false&size=319546&status=done&style=none&taskId=ua6b05ebf-f973-4bd4-90e2-8c265b7ebe7&title=&width=1856)

有序列表即为有排列顺序的列表，其各个列表项按照一定的顺序排列定义，有序列表的基本语法格式如下：

```html
<ol>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
  ......
</ol>
```

`ol`所有特性基本与ul 一致。  但是实际工作中， 较少用 ol ，使用ul较多：

## 自定义列表

定义列表常用于对术语或名词进行解释和描述，定义列表的列表项前没有任何项目符号。其基本语法如下：

```html
<dl>
  <dt>名词1</dt>
  <dd>名词1解释1</dd>
  <dd>名词1解释2</dd>
  ...
  <dt>名词2</dt>
  <dd>名词2解释1</dd>
  <dd>名词2解释2</dd>
  ...
</dl>
```

如：

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373721596-9cc175a4-ae1a-4348-bbc0-446aaec35175.png#averageHue=%23f6f5f4&clientId=u499ab397-22c9-4&from=paste&height=464&id=ub476e810&originHeight=464&originWidth=1282&originalType=binary&ratio=1&rotation=0&showTitle=false&size=147552&status=done&style=none&taskId=u8abf3705-f13b-46cc-8818-e30a0333303&title=&width=1282)

## 全局(公共)属性

全局(公共)属性： 是所有HTML元素共有的属性,所有标签都可以设置。

- title: 鼠标悬浮上去给用户提示
- id: 设置元素的唯一标识，不能重复。
- style: 给元素设置css样式.
- class: 给元素设置类。类名是可以重复的。

> [参考全局属性](https://developer.mozilla.org/zh-CN/docs/web/html/global_attributes)


元素模式：块元素和行内元素

- 块元素： 1.单独占父容器的一行(父容器另起一行) 2.可以设宽高。
- 行内元素：1.多个行内元素在同一行显示，2.不能设置宽高

```
<body>
    <!-- 块元素： 1.单独占父容器的一行(父容器另起一行) 2.可以设宽高。 -->
    <div style="background-color:red;width:300px;height:300px;">
        我是一个div,单独占父容器的
一行
    </div>
    <div style="background-color:purple;color:gray;">
        我也是一个div
    </div>

    <!-- 行内元素：1.多个在同一行显示，2.不能设置宽高 -->
    <span style="background-color:pink;width:100px;height:100px;">我是span</span>
    <span style="background-color:green;">我是span</span>
    <span style="background-color:blue;">我是span</span>
</body>
```

style属性：

- 语法：

```
<div style="属性名1:属性值1;">内容</div>
<div style="属性名1:属性值1;属性名2:属性值2;">内容</div>
```

- 常见几个样式属性：
- width: 宽度
- height: 高度
- color: 设置文本（文字）颜色
- background-color: 设置背景色

```
常用颜色单词：
red红色、white白色、black黑色、gray灰色、blue蓝色、green绿色、pink粉色、purple紫色、skyblue天空蓝、yellow黄色
```

# 表格

布局发展：以及好多页面都是用table表格进行布局的。现在布局的主流方式是div+css。

存在即是合理的。  表格的现在还是较为常用的一种标签，但不是用来布局，常见处理、显示表格式数据。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373748629-00c493e0-675b-4061-afa7-2e64938d3ae8.png#averageHue=%23ededed&clientId=u499ab397-22c9-4&from=paste&height=699&id=u3a89610c&originHeight=954&originWidth=1872&originalType=binary&ratio=1&rotation=0&showTitle=false&size=375863&status=done&style=none&taskId=u0849c3dd-9e61-4a1d-ab51-fdf6e40f3a8&title=&width=1372)

## 创建表格

在HTML网页中，要想创建表格，就需要使用表格相关的标签。创建表格的基本语法格式如下：

```html
<table>
    <thead>
        <tr>
        	<td>单元格内的文字</td>
        </tr>
    </thead>
 	<tbody>
     <tr>
        <td>单元格内的文字</td>
        ...
      </tr>
    </tbody>
  
</table>
```

在上面的语法中包含三对HTML标签，分别为 <table></table>、<tr></tr>、<td></td>，他们是创建表格的基本标签，缺一不可，下面对他们进行具体地解释

-  table用于定义一个表格。 
-  tr 用于定义表格中的一行，必须嵌套在 table标签中，在 table中包含几对 tr，就有几行表格。 
-  td：用于定义表格中的单元格，必须嵌套在标签中，一对 中包含几对，就表示该行中有多少列（或多少个单元格）。 

注意：

```
<tr></tr>中只能嵌套<td></td>
```

```
<td></td>标签，他就像一个容器，可以容纳所有的元素
```

## 表格属性

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373800807-3d773e4c-671a-415e-82e8-4ee76ba9e752.png#averageHue=%23c7e9f8&clientId=u499ab397-22c9-4&from=paste&height=952&id=ueae98faf&originHeight=952&originWidth=1758&originalType=binary&ratio=1&rotation=0&showTitle=false&size=527174&status=done&style=none&taskId=ucbc0eec4-b788-4ec7-8b8a-3d0a548ca9a&title=&width=1758)

- rules="all" : 合并单元格边框

## 表头标签

表头一般位于表格的第一行或第一列，其文本加粗居中，如下图所示，即为设置了表头的表格。设置表头非常简单，只需用表头标签<th></th>替代相应的单元格标签<td></td>即可。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373810974-6866c9e7-929f-4fb8-9abd-2d0619166640.png#averageHue=%23f2f2f2&clientId=u499ab397-22c9-4&from=paste&height=876&id=u1f24bab1&originHeight=876&originWidth=1818&originalType=binary&ratio=1&rotation=0&showTitle=false&size=301079&status=done&style=none&taskId=u2dad457a-6d85-4212-9fb1-fc239380479&title=&width=1818)

## 表格完整结构（了解）

在使用表格进行布局时，可以将表格划分为头部、主体,这样更加标准规范些。
如下所示：

`thead`用于定义表格的头部:

```html
<thead></thead>：
```

`tbody`用于定义表格的主体

```html
<tbody></tbody>
```


## 表格标题

**表格的标题： caption**

**定义和用法**

caption 元素定义表格标题。

```html
<table>
   <caption>我是表格标题</caption>
</table>
```

caption 标签必须紧随 table 标签之后。您只能对每个表格定义一个标题。通常这个标题会被居中于表格之上。

## 合并单元格(难点)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373839457-5c670ae7-244e-4b83-a755-63d7804e1456.png#averageHue=%23e2e1d5&clientId=u499ab397-22c9-4&from=paste&height=756&id=u982d9e1b&originHeight=756&originWidth=1560&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1270856&status=done&style=none&taskId=ud5f3c9b8-aa8e-4053-9762-9c2f0b71f2b&title=&width=1560)

跨行合并：rowspan    跨列合并：colspan

合并单元格的思想：

-  将多个内容合并的时候，就会有多余的东西，把它删除。    例如 把 3个 td 合并成一个， 那就多余了2个，需要删除。 
-  公式：  删除的个数  =  合并的个数  - 1
合并的顺序 先上   先左 

## 总结表格

1.  表格提供了HTML 中定义表格式数据的方法。 
2.  表格中由行中的单元格组成。 
3.  表格中没有列元素，列的个数取决于行的单元格个数。 
4.  表格不要纠结于外观，那是CSS 的作用。
**表格的学习要求：  能手写表格结构，并且能合并单元格。** 

# 表单标签

现实中的表单，类似我们去银行办理信用卡填写的单子。目的是为了收集用户信息。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373875406-4e546279-7b1f-46f6-ad47-620bad9fdd8a.png#averageHue=%23d5cfca&clientId=u499ab397-22c9-4&from=paste&height=766&id=u54930009&originHeight=766&originWidth=1344&originalType=binary&ratio=1&rotation=0&showTitle=false&size=535526&status=done&style=none&taskId=uef5ac5cc-8a49-4301-99f1-123092db4f1&title=&width=1344)

在我们网页中， 我们也需要跟用户进行交互，收集用户资料，此时也需要表单。

在HTML中，一个完整的表单通常由表单域、表单控件（也称为表单元素）、提示信息3个部分构成。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373884634-297ee4f3-0aa8-4364-bf74-08d3e3e7ce68.png#averageHue=%23f7f7f7&clientId=u499ab397-22c9-4&from=paste&height=1094&id=u59355740&originHeight=1094&originWidth=1402&originalType=binary&ratio=1&rotation=0&showTitle=false&size=373634&status=done&style=none&taskId=u98732f68-8596-4094-9d36-ee6bdc60e3d&title=&width=1402)

-  表单域：他相当于一个容器，用来容纳所有的表单控件和提示信息，可以通过他定义处理表单数据所用程序的url地址，以及数据提交到服务器的方法。如果不定义表单域，表单中的数据就无法传送到后台服务器。 
-  表单控件：包含了具体的表单功能项，如单行文本输入框、密码输入框、复选框、提交按钮、重置按钮等。 
-  提示信息：一个表单中通常还需要包含一些说明性的文字，提示用户进行填写和操作。 

> 后面学习Ajax可以不用定义表单域（form）也可以和后台进行数据交互。


## 表单域

在HTML中，form标签被用于定义表单域，即创建一个表单，以实现用户信息的收集和传递，form中的所有内容都会被提交给服务器。创建表单的基本语法格式如下：

```html
<form action="url地址" method="提交方式" name="表单名称">
  各种表单控件
</form>
```

form表单常用属性：

1. Action
在表单收集到信息后，需要将信息传递给服务器进行处理，action属性用于指定接收并处理表单数据的服务器程序的url地址。
2. method
用于设置表单数据的提交方式，其取值为get或post。
3. name
用于指定表单的名称，以区分同一个页面中的多个表单。

## input 控件(重点)

在上面的语法中，<input />标签为单标签，type属性为其最基本的属性，其取值有多种，用于指定不同的控件类型。除了type属性之外，<input />标签还可以定义很多其他的属性，其常用属性如下表所示。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1646373907640-bdd8d9ae-cb71-4453-bd05-99fa3b075602.png#averageHue=%23f0ece7&clientId=u499ab397-22c9-4&from=paste&height=964&id=u35cb671d&originHeight=964&originWidth=1866&originalType=binary&ratio=1&rotation=0&showTitle=false&size=156161&status=done&style=none&taskId=u53372085-de82-4b5a-b99d-f75f5c410b9&title=&width=1866)

- [input参考](https://www.runoob.com/tags/tag-input.html)

## textarea控件(文本域)

如果需要输入大量的信息，就需要用到<textarea></textarea>标签。通过textarea控件可以轻松地创建多行文本输入框，其基本语法格式如下：

```html
<textarea name="content"  rows="显示的行数" cols="每行中的字符数">
  文本内容
</textarea>
```

## select框架（下拉菜单）

使用select控件定义下拉菜单的基本语法格式如下

```html
<select>
  <option>选项1</option>
  <option>选项2</option>
  <option>选项3</option>
  ...
</select>
```

注意：

1. <select></select>中至少应包含一对<option></option>。
2. 在option 中定义`selected ="selected"`时，当前项即为默认选中项。

## label标签(理解)。

作用：  用于绑定一个表单元素, 当点击label标签的时候, 被绑定的表单元素就会获得输入焦点

如何绑定元素呢？

for 属性规定 label 与哪个表单元素绑定。

```html
<label for="male">Male</label>
<input type="radio" name="sex" id="male" value="male">
```

# 元素模式小结【重要】

元素模式共：块元素、行内元素、行内块

1. 块元素（容器级别）：
   - 占父容器的一行，可设宽高和四边的内外边距
   - 高度由子内容自动撑高、里面可以放任何元素
   - 常用块元素：div、p、ul、li、 h1~h6 
2. 行内元素（文本级别）：
   - 多个行内元素会在同一行，不能设宽高，仅能设水平方向内外边距，垂直方向无法设置。
   - 内容的宽高就是元素的宽高，基本只能放文本。
   - 常用行内元素：span、a、i、b
3. 行内块
   - 有块元素和行内元素特点
   - 可设宽高和四边的内外边距，多个行内或行内块会在同一行。如： img、input、button

> 注意：

- button中的文本默认水平垂直居中。
- input中的文本默认是垂直居中
- p和h1~h6标签中里面直接设置内容，不要套其他标签。否则会有一些怪异现象。
- a标签比较特殊，里面可以套其他元素，以便实现网页跳转
