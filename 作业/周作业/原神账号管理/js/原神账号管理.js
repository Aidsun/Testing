// 获取输入元素
var iptName = document.getElementById('iptName')
var iptPassword = document.getElementById('iptPassword')
var iptMessage = document.getElementById('iptMessage')
var addDate = document.getElementById('addDate')

// 信息计数器
var counts = 2

// 绑定添加事件
document.getElementById('addDate').addEventListener('click', () => {
    // 获取内容区域
    let content = document.getElementById('content')
    // 增加demo
    let div_demo = document.createElement('div')
    div_demo.className = 'demo'

    // 增加count
    let count = document.createElement('label')
    count.className = 'count'
    count.innerHTML = counts
    div_demo.appendChild(count)
    // 增加name
    let name = document.createElement('label')
    name.className = 'name'
    name.innerHTML = iptName.value
    div_demo.appendChild(name)
    // 增加password
    let password = document.createElement('label')
    password.className = 'password'
    password.innerHTML = iptPassword.value
    div_demo.appendChild(password)
    // 增加messsage
    let message = document.createElement('label')
    message.className = 'message'
    message.innerHTML = iptMessage.value
    div_demo.appendChild(message)

    // 增加control,暂未增加
    let control = document.createElement('div')

    // 增加upDate
    let upDate = document.createElement('button')
    upDate.className = 'upDate'
    upDate.innerHTML = '更新'
    control.appendChild(upDate)
    // 增加delDate
    let delDate = document.createElement('button')
    delDate.className = 'delDate'
    delDate.innerHTML = '删除'
    control.appendChild(delDate)
    // 增加control,已增加
    control.className = 'control'
    div_demo.appendChild(control)
    // 获取demos。已增加
    div_demo.className = 'demo'
    content.appendChild(div_demo)
    counts++
})

// 绑定删除事件
document.getElementById('content').addEventListener('click', function (event) {
    var target = event.target
    if (target.classList.contains('delDate')) {
        target.parentNode.parentNode.remove()
    }
})
// 增加更新按钮事件
document.getElementById('content').addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('upDate')) {
        // 确认父节点 demo
        let fatherDemo = target.parentNode.parentNode

        // 判断当前按钮文本
        if (target.innerHTML === "更新") {
            // 创建输入框
            let inputName = document.createElement("input")
            inputName.setAttribute("name", "name")
            let inputPassword = document.createElement("input")
            inputPassword.setAttribute("name", "password")
            let inputMessage = document.createElement("input")
            inputMessage.setAttribute("name", "message")

            // 设置输入框的初始值为当前 label 的文本内容
            inputName.value = fatherDemo.querySelector(".name").textContent
            inputPassword.value = fatherDemo.querySelector(".password").textContent
            inputMessage.value = fatherDemo.querySelector(".message").textContent

            // 替换 label 元素为输入框
            fatherDemo.querySelector(".name").replaceWith(inputName)
            fatherDemo.querySelector(".password").replaceWith(inputPassword)
            fatherDemo.querySelector(".message").replaceWith(inputMessage)

            // 将按钮文本更新为 "确认"
            target.innerHTML = "确认";
        } else if (target.innerHTML === "确认") {
            // 获取输入框的值
            let newName = fatherDemo.querySelector("input[name='name']").value
            let newPassword = fatherDemo.querySelector("input[name='password']").value
            let newMessage = fatherDemo.querySelector("input[name='message']").value

            // 创建新的 label 元素
            let nameLabel = document.createElement("label")
            nameLabel.className = "name"
            let passwordLabel = document.createElement("label")
            passwordLabel.className = "password"
            let messageLabel = document.createElement("label")
            messageLabel.className = "message"

            // 设置新 label 元素的文本内容为输入框的值
            nameLabel.textContent = newName
            passwordLabel.textContent = newPassword
            messageLabel.textContent = newMessage

            // 替换输入框为新的 label 元素
            fatherDemo.querySelector("input[name='name']").replaceWith(nameLabel)
            fatherDemo.querySelector("input[name='password']").replaceWith(passwordLabel)
            fatherDemo.querySelector("input[name='message']").replaceWith(messageLabel)

            // 将按钮文本还原为 "更新"
            target.innerHTML = "更新"
        }
    }
})