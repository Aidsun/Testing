document.addEventListener("DOMContentLoaded", function() {
    var loadingContainer = document.getElementById("loading");
    // 显示加载动画
    loadingContainer.style.display = "flex";
  });
  
  window.addEventListener("load", function() {
    var loadingContainer = document.getElementById("loading");
    // 隐藏加载动画
    // loadingContainer.style.display = "none";
  });
  