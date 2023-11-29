var label = document.querySelector('#name')
// 增加数据列表
var Names = ['小红', '小橙', '小黄', '小绿', '小青', '小蓝', '小紫', '小giao']

// 定义定时器
var time
// 定义按钮flg
var flg = true
// 增加点击事件
document.getElementById('btn').addEventListener('click', function () {
    if (flg) {
        // 加上定时器
        time = setInterval(() => {
            // 生成随机名字
            let index = Math.floor(Math.random() * (Names.length))
            label.innerHTML = Names[index]
        }, 100)
        flg = !flg
        document.getElementById('btn').innerHTML = "停止"
    }
    else {
        clearInterval(time)
        document.getElementById('btn').innerHTML = "开始"
        flg = !flg
    }

})