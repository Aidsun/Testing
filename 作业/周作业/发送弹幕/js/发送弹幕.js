// 获取元素
var ipt = document.getElementById('ipt')
var btn = document.getElementById('btn')
var content = document.getElementById('content')
var video = document.getElementById('myVideo')
// 增加弹幕功能
function addBarrage(text) {
    // 创建元素
    let label = document.createElement('label')
    label.className = 'message'
    label.innerHTML = text
    content.appendChild(label)
    // 添加随机高度
    label.style.top = Math.random() * 30 + 'vw'
    // 添加随机字体大小,限定字体大小在14-25之间
    label.style.fontSize = Math.random() * 25 + 14 + 'px'
    // 添加随机字体颜色
    label.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setTimeout(() => {
        content.removeChild(label)
    }, 5000);
}
// 绑定按钮事件
btn.onclick = function () {
    addBarrage(ipt.value)
}
// 增加倍速功能
function addSpeed(num) {
    video.playbackRate = num
}
// 当视频播放完成时，重置播放速度
function reStart(){
    video.playbackRate = 1
}