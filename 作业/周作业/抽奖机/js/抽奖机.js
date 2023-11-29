// 获取元素
var boxs = document.getElementsByClassName("box")
var startButton = document.querySelector("#Button")
var ipt = document.querySelectorAll("input[type = 'text']")
var result = document.getElementById("result")

// 验证用户输入的是否为空
function toConfirm() {
	for (let i = 0; i < 3; i++) {
		if (ipt[i].value === "") {
			alert("请输入完整的抽奖号码！")
			return flase
		}
	}
	return true
}

// 生成三个随机的答案
function randomNum() {
	let arr = []
	for (let i = 0; i < 3; i++) {
		const num = Math.floor(Math.random() * 10)
		arr.push(num)
	}
	return arr
}
// 为选中数字添加位移动作
function transImage(numbers) {
	for (var i = 0; i < 3; i++) {
		boxs[i].style.backgroundPositionY = (-148.3 * numbers[i] - 39 + "px")
		boxs[i].style.transitionDuration = (i + 1) * 200 + "ms";
	}
}

// 为开始抽奖添加事件按钮
startButton.addEventListener("click", function() {
	//验证输入框
	if (toConfirm()) {
		// 获取答案
		let answer = randomNum()
		// 相同的个数
		// 给图片加上位移动画
		transImage(answer)
		let count = 0
		for (let i = 0; i < 3; i++) {
			if (ipt[i].value == answer[i]) {
				count++
			}
		}
		switch (count) {
			case 0:
				result.innerHTML = "很遗憾，您未中奖"
				break;
			case 3:
				result.innerHTML = "恭喜你，获得了一等奖！"
				break;
			case 2:
				result.innerHTML = "恭喜你，获得了二等奖！"
				break;
			case 1:
				result.innerHTML = "恭喜你，获得了三等奖！"
				break;
		}
	}
})