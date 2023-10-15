// 获取元素
let searchIcon=document.querySelector(".icon");
let clearIcon=document.querySelector(".clear");
let searchBar=document.querySelector(".searchBar");
let inp = document.querySelector(".inp");
// 点击，切换类 =>动态设置宽度，实现展开
searchIcon.addEventListener("click",function(){
    searchBar.classList.toggle("changeWidth");

})
clearIcon.addEventListener("click",function(){
   inp.value="";
})