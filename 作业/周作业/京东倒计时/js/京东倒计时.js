// 获取时分秒的元素
var h = document.getElementById("h")
var m = document.getElementById("m")
var s = document.getElementById("s")
// 定义定时器变量
let time = setInterval(() => {
	// 获取当前时间
	let currenDay = new Date()
	let nowhours = currenDay.getHours()
	let nowminutes = currenDay.getMinutes()
	let nowseconds = currenDay.getSeconds()
	// 获取时间差
	let hours = 20 - nowhours
	let minutes =59- nowminutes
	let seconds =59- nowseconds
	// 秒数自减
	seconds--
	// 时间判断
	if (seconds < 0) {
		sec
		onds = 59
		minutes--
	}
	if (minutes < 0) {
		minutes = 59
		hours--
	}
	if (hours == 0 && minutes == 0 && seconds == 0) {
		clearInterval(time)
	}
	//更新时间元素
	h.innerHTML = hours < 10 ? "0" + hours : hours
	m.innerHTML = minutes < 10 ? "0" + minutes : minutes
	s.innerHTML = seconds < 10 ? "0" + seconds : seconds
}, 1000)