// 源码由Aidsun编写，转载请注明出处
// 歌词部分
// 获取元素
var audio = document.querySelector('audio')
var content = document.querySelector('.content')
var ul = document.querySelector('.lic-list')

// 设置歌词文本
const lrc = `[00:00.000]编曲 : Clear Sky
[00:01.000]作曲 : Clear Sky
[00:02.000]编曲 : Clear Sky
[00:03.000]         
[00:30.056]Don't you think about me enough?
[00:30.056]你对我的了解还不够吗？
[00:36.989]I've been burning my heart out
[00:36.989]我的心一直在为你燃烧
[00:43.642]Got to face need to tell you
[00:43.642]我必须得面对 我要告诉你
[00:50.561]I won't run cause I'm reticent
[00:50.561]我不会逃避 因为我本就沉默寡言
[01:00.697]You will know you're reborn tonight
[01:00.697]你会明白 今晚你将重获新生
[01:07.614]Must be ragged but I'll stay by your side
[01:07.614]即便衣衫褴褛 我依然会陪在你身边
[01:14.559]Even if my body's bleached to the bones
[01:14.559]就算我的身体变成白骨
[01:21.494]I don't want go through that ever again
[01:21.494]我也不愿再次经历那样的伤痛了
[01:30.028]You will know you're reborn tonight
[01:30.028]你会明白 今晚你将重获新生
[01:36.970]Must be ragged but I'll stay by your side
[01:36.970]即便衣衫褴褛 我依然会陪在你身边
[01:43.630]Even if my body's bleached to the bones
[01:43.630]就算我的身体变成白骨
[01:50.583]I don't want go through that ever again
[01:50.583]我也不愿再次经历那样的伤痛了
[02:38.676]Don't you think about me enough?
[02:38.676]你对我的了解还不够吗？
[02:45.363]I've been burning my heart out
[02:45.363]我的心一直在为你燃烧
[02:52.305]Got to face need to tell you
[02:52.305]我必须得面对 我要告诉你
[02:59.238]I won't run cause I'm reticent
[02:59.238]我不会逃避 因为我本就沉默寡言
[03:09.381]You will know you're reborn tonight
[03:09.381]你会明白 今晚你将重获新生
[03:16.313]Must be ragged but I'll stay by your side
[03:16.313]即便衣衫褴褛 我依然会陪在你身边
[03:23.233]Even if my body's bleached to the bones
[03:23.233]就算我的身体变成白骨
[03:29.931]I don't want go through that ever again
[03:29.931]我也不愿再次经历那样的伤痛了
[03:38.723]You will know you're reborn tonight
[03:38.723]你会明白 今晚你将重获新生
[03:45.402]Must be ragged but I'll stay by your side
[03:45.402]即便衣衫褴褛 我依然会陪在你身边
[03:52.315]Even if my body's bleached to the bones
[03:52.315]就算我的身体变成白骨
[03:59.256]I don't want go through that ever again
[03:59.256]我也不愿再次经历那样的伤痛了
[04:05.000](十年巨人，完结撒花)      
`
// 提取歌词，分开时间，英文，中文
function parseLrc(lrc) {
  // 获取每一行
  let lines = lrc.split("\n")
  // 函数返回结果，也就是最后的提取结果
  let result = []
  // 遍历每一行
  for (let i = 0; i < lines.length - 1; i++) {
    let line = lines[i]
    let lineArry = line.replace('[', '').split(']')
    let obj = {
      time: parseTime(lineArry[0]),
      word: lineArry[1],
    }
    // 增加到结果列表
    result.push(obj)
    // 循环条件
  }
  // 内置格式转化函数
  function parseTime(timestr) {
    let time = timestr.split(":")
    let minutes = +time[0]
    let seconds = parseFloat(time[1])
    return minutes * 60 + seconds
  }
  return result
}
// 提取歌词并存放在一个变量
const lrcDate = parseLrc(lrc)
// 根据播放时间查找当前歌词下标
function findIndex() {
  let curTime = audio.currentTime
  for (let i = 0; i < lrcDate.length; i++) {
    if (curTime < lrcDate[i].time) {
      return i - 2 >= 0 ? i - 2 : 0
    }
  }
  // 如果没有找到，代表是最后一句
  return lrcDate.length - 1
}
// 把歌词添加到ul里
function creatLi() {
  let frag = document.createDocumentFragment()
  for (let i = 0; i < lrcDate.length; i++) {
    let li = document.createElement('li')
    li.textContent = lrcDate[i].word
    frag.appendChild(li)
  }
  ul.appendChild(frag)
}
creatLi()

// 面板高度
const contentHight = content.clientHeight
// li高度
const liHeight = ul.children[0].clientHeight
// 偏移最大值
const maxOffset = ul.clientHeight - contentHight
// 设置ul元素的偏移量
function setOffset() {
  // 定位当前位置
  let index = findIndex();
  let offset = liHeight * index + liHeight / 2 - contentHight / 2;

  if (index < 4) {
    let offset = liHeight * index + liHeight / 2 - contentHight / 2
    if (offset < 0) {
      offset = 0
    }
    if (offset > maxOffset) {
      offset = maxOffset
    }
    // 设置偏移量给ul
    ul.style.transform = `translateY(-${offset}px)`
    // 去掉之前的样式
    let li = ul.querySelector(".active")
    if (li) {
      li.classList.remove('active')
    }
    // 高亮
    li = ul.children[index]
    if (li) {
      li.classList.add("active")
    }
  }

  if (index < lrcDate.length - 1 && index >= 4) {
    let nextOffset = liHeight * (index + 1) + liHeight / 2 - contentHight / 2;
    if (offset < 0) {
      offset = 0;
    }
    if (nextOffset > maxOffset) {
      offset = maxOffset;
    }

    // 设置偏移量给ul
    ul.style.transform = `translateY(-${offset}px)`;

    // 去掉之前的样式
    let li = ul.querySelector(".active");
    if (li) {
      li.classList.remove("active");
    }

    // 高亮当前行和下一行
    li = ul.children[index];
    let nextLi = ul.children[index + 1];

    if (li) {
      li.classList.add("active");
    }
    if (nextLi) {
      nextLi.classList.add("active");
    }
  } else {
    if (offset < 0) {
      offset = 0;
    }
    if (offset > maxOffset) {
      offset = maxOffset;
    }

    // 设置偏移量给ul
    ul.style.transform = `translateY(-${offset}px)`;

    // 去掉之前的样式
    let li = ul.querySelector(".active");
    if (li) {
      li.classList.remove("active");
    }

    // 高亮当前行
    li = ul.children[index];
    if (li) {
      li.classList.add("active");
    }
  }
}
audio.addEventListener("timeupdate", setOffset);


// 轮播图部分
// 获取元素
var lis = document.querySelectorAll('.banner>li');
var banner = document.querySelector('.banner');
// 设置初始值
var time = null;
var _index = 0;
// 封装向右运动
function _next() {
  _index++;
  banner.style.transform = `translateX(${- _index * lis[0].offsetWidth}px)`;
  banner.style.transition = '.5s';
  if (_index >= lis.length - 1) {
    _index = 0;
    setTimeout(() => {
      banner.style.transform = `translate(0,0)`;
      banner.style.transition = 'none';
    }, 500)
  }
}
// 将轮播图播放与播放暂停按钮绑定
var startMusic = document.querySelector('#startMusic')
audio.volume = 0.7
//设置一个计量数，如果是第一次点击，同时播放音乐与轮播图，一次以上只控制音乐播放与暂停
var userCount = 0
startMusic.addEventListener('click', function () {
  if (userCount == 0) {
    time = setInterval(_next, 5000);
    if (audio.paused) {
      audio.play();
      startMusic.innerHTML = `<i class="fa fa-pause"></i>`

    } else {
      audio.pause();
      startMusic.innerHTML = `<i class="fa fa-play"></i>`
    }
    document.querySelector('#tips').style.display = 'none'
    userCount++
  }
  else {
    if (audio.paused) {
      audio.play();
      startMusic.innerHTML = `<i class="fa fa-pause"></i>`

    } else {
      audio.pause();
      startMusic.innerHTML = `<i class="fa fa-play"></i>`
    }
  }
});

