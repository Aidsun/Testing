// 获取轮播图容器元素
var images = document.querySelector('#tranImage');

// 设置初始索引和图片数量
var index = 0;
// 去除图片下面的其他元素
var imgNum = images.children.length - 2;

// 定义切换图片函数
function changeSlide(n) {
  // 隐藏当前图片和轮播点
  images.children[index].style.display = 'none';

  // 增加索引并循环到第一张或最后一张图片
  index = (index + n + imgNum) % imgNum;

  // 显示下一张图片
  images.children[index].style.display = 'block';
}

// 自动切换图片
var autoSlide = setInterval(function () {
  changeSlide(1);
}, 5000);

// 鼠标悬停时停止自动切换
images.addEventListener('mouseover', function () {
  clearInterval(autoSlide);
});

// 鼠标离开时恢复自动切换
images.addEventListener('mouseout', function () {
  autoSlide = setInterval(function () {
    changeSlide(1);
  }, 5000);
});