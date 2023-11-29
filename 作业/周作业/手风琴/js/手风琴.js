// 获取元素
var lis = document.querySelectorAll('.wrap li');
// 给每个lis绑定事件
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', function () {
        for (var j = 0; j < lis.length; j++) {
            if (lis[j] === this) {
                lis[j].style.width = '480px';
                lis[j].style.transition = 'all .2s linear';
            } else {
                lis[j].style.width = '120px';
                lis[j].style.transition = 'all .2s linear';
            }
        }
    });
}