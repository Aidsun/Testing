let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let btn = document.getElementById('btn')
let words = document.querySelector(".box span").textContent.trim()
let wordArr = words.split("");
let text = []
let flg = 1
let setTime
function changWord(box) {
	if (box === box1 && wordArr.length > 0) {

		let span = document.createElement('span')
		span.innerHTML = wordArr.shift()
		text.push(span.innerHTML)
		box2.appendChild(span)
		let newText = wordArr.join(" ")
		box1.innerHTML = newText
		if (wordArr.length == 0) {
			clearInterval(setTime)
		}

	} else {

		let span = document.createElement('span')
		span.innerHTML = text.pop()
		wordArr.push(span.innerHTML)
		box1.appendChild(span)
		let newText = text.join(" ")
		box2.innerHTML = newText
		if (text.length == 0) {
			clearInterval(setTime)
		}
	}
}
btn.addEventListener('click', () => {

	if (flg == 1) {
		setTime = setInterval(() => {
			changWord(box1)
		}, 50)
		btn.innerHTML = '文字去左边'
		flg = 2

	} else {
		setTime = setInterval(() => {
			changWord(box2)
		}, 50)
		btn.innerHTML = '文字去右边'
		flg = 1

	}
})