// 获取元素
var content = document.querySelectorAll("#content li")
var left = document.getElementById('left')
var right = document.getElementById('right')
var lis = document.querySelectorAll("#lis li")
// 设置索引和定时器
var index = 0
var time = null

// 设置播放函数
function Play(index) {
    for (let i = 0; i < content.length; i++) {
        if (i == index) {
            content[i].style.opacity = 1
            lis[i].style.width = '5vh'
            lis[i].style.height = '3vh'
            lis[i].style.backgroundColor='blue'
            lis[i].style.borderRadius = '10%'
        }
        else {
            content[i].style.opacity = 0
            lis[i].style.width = '3vh'
            lis[i].style.height = '3vh'
            lis[i].style.borderRadius = '50%'
            lis[i].style.backgroundColor='transparent'
        }
    }
}
// 设置初始播放
Play(0)
// 设置切换函数
function Run() {
    index++
    if (index == content.length) {
        index = 0
    }
    Play(index)
}
// 设置定时器
time = setInterval(Run, 5000)
// 设置左切换
left.onclick = function () {
    clearInterval(time)
    index--
    if (index < 0) {
        index = content.length - 1
    }
    Play(index)
    time = setInterval(Run, 5000)
}
// 设置右切换
right.onclick = function () {
    clearInterval(time)
    Run()
    time = setInterval(Run, 5000)
}
// 设置导航点事件
for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {
        clearInterval(time)
        if(i == 4){
            Play(i)
            index = -1
            time = setInterval(Run, 5000)
        }
        else{
            Play(i)
            index += 1
            time = setInterval(Run, 5000)
        }
        
    }
}