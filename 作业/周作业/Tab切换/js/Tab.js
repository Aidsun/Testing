window.onload = function () {
    var images = document.getElementsByClassName("images");
    var img = document.getElementsByTagName('img');
    var tabs = document.querySelectorAll('#havor div');

    // 定义初始index
    var index = 0;
    // 定时器
    var time;
    // 定义切换函数
    function position(index) {
        var leftOffset = index * -820;
        images[0].style.transform = `translateX(${leftOffset}px)`;
    }
    // 定时器
    function timer() {
        time = setInterval(function () {
            if (index < img.length) {
                position(index);
                index++
            } else {
                index = 0
                timer()

            }
        }, 3000)
    }
    timer()
    // 清楚定时器
    function clearTime() {
        clearInterval(time);
    }
    // 绑定导航栏悬浮事件
    for (let j = 0; j < tabs.length; j++) {
        tabs[j].addEventListener('mouseover', function () {
            position(j);
            clearTime();
        });
        tabs[j].addEventListener('mouseout', function () {
            timer();
        });
    }

};
