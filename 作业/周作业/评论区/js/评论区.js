// 案例由Aidsun原创，转载请注明出处 

// 获取元素
var ipt = document.getElementById('ipt')
var content = document.getElementById('content')
// 设置一个评论计数器
var count_Message = 1
// 增加评论元素
function addMessage(count_Message) {
    var name = document.getElementById('name')

    // 判断用户名是否输入
    if (name.value == "") {
        name.value = 'Aidsun'
    }
    // 判断是否输入评论
    if (ipt.value == "") {
        alert("请输入评论")
    }
    else {
        // 增加大盒子
        let div_Element = document.createElement("div")
        div_Element.className = "news"
        content.appendChild(div_Element)
        // 获取大盒子
        let Div = document.querySelectorAll('.news')[count_Message]
        // 增加子元素
        let p1 = document.createElement("p")
        p1.className = "userName"
        p1.innerHTML = name.value
        Div.appendChild(p1)

        let span_ = document.createElement("span")
        span_.className = "lispan"
        span_.innerHTML = ":"
        Div.appendChild(span_)

        let p2 = document.createElement("p")
        p2.className = "linew"
        p2.innerHTML = ipt.value
        Div.appendChild(p2)
    }

    // 刷新评论框
    ipt.value = ''
    // 限制评论条数
    if (count_Message >= 5) {
        alert("评论区目前只能容纳5条评论!")
        location.reload()
    }
}
// 绑定输入事件
ipt.addEventListener('keydown', function (event) {
    //检查按下的键是否为Enter键
    if (event.keyCode === 13) {
        addMessage(count_Message)
        count_Message++
    }
})
