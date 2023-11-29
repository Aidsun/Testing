var list = document.querySelector('.list');
var posi = [
	[0, 0],
	[100, 0],
	[200, 0],
	[300, 0],
	[400, 0],
	[500, 0],
	[500, 100],
	[500, 200],
	[500, 300],
	[500, 400],
	[400, 400],
	[300, 400],
	[200, 400],
	[100, 400],
	[0, 400],
	[0, 300],
	[0, 200],
	[0, 100]
];
// 遍历18个li
for (let i = 0; i < 18; i++) {
	list.innerHTML += `<li></li>`
}
// 获取18个li元素
var lis = document.getElementsByTagName('li');
// 遍历18个li的位置
for (var i = 0; i < posi.length; i++) {
	lis[i].style.left = posi[i][0] + 'px';
	lis[i].style.top = posi[i][1] + 'px';
}
// 获取run元素和点击开始元素
var btn = document.getElementById('btn');
var run = document.getElementById('run');
var flg = true //取反
var i = 0; //格子的索引
var timer = null; //定时器的初始值

// 封装run的运动轨迹
function _timer(d) {
	timer = setInterval(function() {
		run.style.left = posi[i][0] + 5 + 'px';
		run.style.top = posi[i][1] + 5 + 'px';
		i++;
		if (i >= posi.length) {
			i = 0;
		}
	}, d)
}
// 绑定事件
btn.onclick = () => {
	if (flg) {
		flg = !flg
		btn.innerHTML = "停止";
		btn.style.backgroundColor = "rgba(255,0,0,0.7)";
		clearInterval(timer)
		_timer(100)

	} else {
		flg = !flg
		btn.innerHTML = "启动";
		btn.style.backgroundColor = "rgba(0,0,255,0.7)";
		var c = 100;
		// 设置延时器
		timers = setInterval(() => {
			c += 50;
			clearInterval(timer)
			_timer(c)
			if (c >= 500) {
				clearInterval(timer)
				clearInterval(timers)
			}
		}, 500)
	}
}