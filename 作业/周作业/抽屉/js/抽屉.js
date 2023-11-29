// 获取元素
var box = document.getElementById('box')
var tip = document.getElementById('tip')
// 定义一个flg标志
var flg = true
// 给tip增加事件
tip.addEventListener('click', () => {

	// 未隐藏状态点击
	if (flg == true) {
		box.style.transform = "translateX(225px)"
		flg = !flg
	}
	// 隐藏状态点击
	else {
		box.style.transform = "translateX(0)"
		flg = !flg
	}
})