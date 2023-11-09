let left = document.querySelector(".left");
let right = document.querySelector(".right");
let dot = document.querySelectorAll(".dot")
let iamges = document.querySelector(".images")
// 我们先设置一个index用来计算和控制图片的位置，在设置一个time作为定时器
let index = 0;
let time;
// 定义定位函数，结合index来确定当前图片的位置
function position(){
    iamges.style.left = (index * -100) +"%";
    for(let i=0;i<dot.length;i++){
        if(i == index){
            dot[i].style.width = "20px"
            dot[i].style.height ="10px"
            dot[i].style.borderRadius = "25%"
            dot[i].style.backgroundColor = "#4a4035";
        }
        else{
            dot[i].style.width = "10px";
            dot[i].style.height = "10px";
            dot[i].style.borderRadius = "50%"
            dot[i].style.backgroundColor = "white";
        }
    }
    
}
// 定义加函数，如果当前图片的index大于等于图片总数量，说明超出要清零，否则index加一，也就是下一张图片的索引
function add(){
    if(index > 1){
        // desc()
        index = 0
    }
    else{
        index++
    }
}
// 定义减函数，如果当前图片的index小于1，那就反弹到图片的最后端，否则index减一，也就是上一张图片的索引，利用加函数和减函数进行图片闭环
function desc(){
    if(index < 1){
        index = 2;
    }
    else{
        index--
    }
}
// 创建定时器,5秒切换一张图片
function timer(){
    time = setInterval(function(){
        index++
        desc()
        add()
        position()
    },2000)
}
// 给左右按钮设置事件
left.addEventListener("click",function(){
    desc()
    position()
    clearInterval(time)
    timer()
})
right.addEventListener("click",function(){
    add()
    position()
    clearInterval(time)
    timer()
})
timer()